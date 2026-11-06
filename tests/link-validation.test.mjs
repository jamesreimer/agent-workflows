import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import {
  mkdtempSync,
  mkdirSync,
  readFileSync,
  writeFileSync,
  rmSync,
  symlinkSync,
  linkSync,
} from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join, resolve, posix, win32 } from "node:path";
import {
  repositoryIdentity,
  pageIdentity,
  repositoryUrlPath,
  hasTerminalDirectorySeparator,
} from "../tools/requested-file-identity.mjs";
import { fileURLToPath, pathToFileURL } from "node:url";
import { createHash } from "node:crypto";
import { test } from "node:test";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const cli = join(root, "tools/check-links.mjs");
const control = pathToFileURL(
  join(root, "tests/link-validation/import-control.mjs"),
).href;
const contractBytes = readFileSync(
  join(root, "tests/link-validation/contract.json"),
);
assert.equal(
  createHash("sha256").update(contractBytes).digest("hex"),
  "ce3927d1a459025450ac75560686412bb803e97e3be1e9300ce57c7478305e33",
);
const contract = JSON.parse(contractBytes);
const lintPackage = JSON.parse(
  readFileSync(join(root, "node_modules/markdownlint-cli2/package.json")),
);
const lint = join(
  root,
  "node_modules/markdownlint-cli2",
  lintPackage.bin["markdownlint-cli2"],
);
function createFixture(t, files, rootName) {
  const parent = mkdtempSync(join(tmpdir(), "link-regression-"));
  const dir = rootName ? join(parent, rootName) : parent;
  mkdirSync(dir, { recursive: true });
  t.after(() => rmSync(parent, { recursive: true, force: true }));
  for (const [name, content] of Object.entries(files)) {
    mkdirSync(dirname(join(dir, name)), { recursive: true });
    writeFileSync(join(dir, name), content);
  }
  return dir;
}
function runNode(dir, args, env = process.env) {
  const result = spawnSync(process.execPath, args, {
    cwd: dir,
    encoding: "utf8",
    timeout: 30000,
    env,
  });
  const output = result.stdout + result.stderr;
  assert.equal(result.error, undefined, output);
  assert.equal(result.signal, null, output);
  return { ...result, output };
}
function checkLinks(dir, paths, mode) {
  return runNode(dir, [...(mode ? ["--import", control] : []), cli, ...paths], {
    ...process.env,
    LINK_TEST_CONTROL: mode || "",
  });
}
for (const contractCase of contract.cases) {
  test(`Link contract: ${contractCase.name}`, (t) => {
    const dir = createFixture(t, contractCase.files);
    const originalContents = new Map(
      Object.keys(contractCase.files).map((file) => [
        file,
        readFileSync(join(dir, file)),
      ]),
    );
    const result = checkLinks(dir, contractCase.inputs);
    // Local acceptance is checked independently of external URLs, which are skipped.
    assert.equal(
      result.status,
      contractCase.expected_local ? 0 : 1,
      result.output,
    );
    const report = JSON.parse(result.stdout);
    for (const link of report.result.links.filter((link) =>
      /^https?:/.test(link.url),
    )) {
      assert.equal(link.state, "SKIPPED", JSON.stringify(link));
    }
    if (
      contractCase.name.startsWith("yaml-") ||
      contractCase.name === "cross-malformed-metadata"
    ) {
      assert.ok(report.yamlErrors.length, result.stdout);
    }
    const authoring = runNode(dir, [
      lint,
      "--config",
      join(root, ".markdownlint-cli2.jsonc"),
      ...contractCase.inputs,
    ]);
    assert.equal(
      authoring.status,
      contractCase.expected_lint ? 0 : 1,
      authoring.output,
    );
    if (contractCase.owner === "markdownlint")
      assert.match(authoring.stderr, /error MDX001\//);
    if (contractCase.name === "dual-name-same") {
      assert.equal(result.status, 0);
    }
    for (const [file, originalContent] of originalContents) {
      assert.deepEqual(readFileSync(join(dir, file)), originalContent);
    }
  });
}
const phantom =
  "---\nprobe: phantom\n---\n\n# Body\n\n[metadata](#probe-phantom)\n";
test("single-key phantom: effective hook rejects metadata destination", (t) => {
  const dir = createFixture(t, { "source.md": phantom });
  const result = checkLinks(dir, ["source.md"]);
  assert.equal(result.status, 1, result.stderr);
  const phantomLink = JSON.parse(result.stdout).result.links.find(
    (link) => link.url === "source.md#probe-phantom",
  );
  assert.ok(phantomLink, result.output);
  assert.equal(phantomLink.state, "BROKEN", result.output);
  assert.equal(phantomLink.status, 200, result.output);
});
for (const mode of ["disabled", "isolated"]) {
  test(`startup fails closed with ${mode} hook before reading repository input`, (t) => {
    const dir = createFixture(t, { "source.md": phantom });
    const result = checkLinks(dir, ["does-not-exist.md"], mode);
    assert.equal(result.status, 2);
    assert.match(result.stderr, /startup self-check failed/);
    assert.equal(result.stdout, "");
    assert.doesNotMatch(result.stderr, /glob/);
  });
}
test("double registration preserves body and metadata isolation", (t) => {
  for (const [content, expectedStatus] of [
    [phantom, 1],
    [phantom.replace("#probe-phantom", "#body"), 0],
  ]) {
    const dir = createFixture(t, { "source.md": content });
    const result = checkLinks(dir, ["source.md"], "double");
    assert.equal(result.status, expectedStatus, result.output);
  }
});
test("fresh CLI invocations are deterministic", (t) => {
  const dir = createFixture(t, { "source.md": phantom });
  const results = Array.from({ length: 3 }, () =>
    checkLinks(dir, ["source.md"]),
  );
  assert.ok(results.every((r) => r.status === 1));
  assert.equal(results[0].stdout, results[1].stdout);
  assert.equal(results[1].stdout, results[2].stdout);
});
test("batch diagnostics name both original malformed files", (t) => {
  const dir = createFixture(t, {
    "first.md": "---\na: [broken\n---\n",
    "second.md": "---\na: 1\na: 2\n---\n",
  });
  const result = checkLinks(dir, ["first.md", "second.md"]);
  assert.equal(result.status, 1, result.stderr);
  const report = JSON.parse(result.stdout);
  assert.deepEqual(
    report.result.links
      .filter((link) => link.state === "BROKEN")
      .map((link) => link.url)
      .sort(),
    ["first.md", "second.md"],
  );
  assert.equal(report.yamlErrors.length, 2);
});
test("native hook-disabled control exposes phantom-anchor false green", (t) => {
  const dir = createFixture(t, { "source.md": phantom });
  const result = runNode(dir, [
    join(root, "tests/link-validation/native-control.mjs"),
  ]);
  assert.equal(result.status, 0, result.output);
  assert.equal(JSON.parse(result.stdout).passed, true);
});

// Exercise directory destinations in addition to the fixed contract cases.
const directoryCases = [
  { name: "relative directory", target: "docs" },
  { name: "trailing slash", target: "docs/" },
  { name: "empty directory", target: "empty/" },
  { name: "nested directory", target: "docs/nested/" },
  {
    name: "parent-relative directory",
    input: "docs/source.md",
    target: "../docs/nested",
  },
  { name: "dot-segment normalization", target: "docs/../docs/nested/" },
  { name: "encoded space", target: "space%20dir/" },
  { name: "literal space", target: "<space dir/>" },
  { name: "encoded unicode", target: "caf%C3%A9/" },
  { name: "query preserved through redirect", target: "docs?view=tree" },
  { name: "missing directory", target: "absent", fails: true },
  { name: "missing directory with slash", target: "absent/", fails: true },
  { name: "missing nested directory", target: "docs/absent/", fails: true },
  { name: "file with trailing slash", target: "docs/file.md/", fails: true },
  { name: "file fragment", target: "docs/file.md#file" },
  { name: "missing file fragment", target: "docs/file.md#absent", fails: true },
  { name: "fragment only", target: "#source" },
  { name: "missing fragment only", target: "#absent", fails: true },
  { name: "index fragment", target: "indexed/#present" },
  { name: "missing index fragment", target: "indexed/#absent", fails: true },
  // Native generated listings have no HTML content type and no fragment contract.
  {
    name: "listing fragment is not validated by native Linkinator",
    target: "docs/#absent",
  },
];
for (const directoryCase of directoryCases) {
  test(`directory contract: ${directoryCase.name}`, (t) => {
    const input = directoryCase.input || "source.md";
    const files = {
      "docs/file.md": "# File\n",
      "docs/nested/keep.txt": "nested\n",
      "space dir/keep.txt": "space\n",
      "café/keep.txt": "unicode\n",
      "indexed/index.html": '<h1 id="present">Present</h1>\n',
      [input]: `# Source\n\n[directory case](${directoryCase.target})\n\n[external](https://example.invalid/)\n`,
    };
    const dir = createFixture(t, files);
    mkdirSync(join(dir, "empty"));
    const init = spawnSync("git", ["init", "--quiet"], {
      cwd: dir,
      encoding: "utf8",
    });
    assert.ifError(init.error);
    assert.equal(init.signal, null, init.stdout + init.stderr);
    assert.equal(init.status, 0, init.stdout + init.stderr);
    const result = checkLinks(dir, [input]);
    assert.equal(result.status, directoryCase.fails ? 1 : 0, result.output);
    const report = JSON.parse(result.stdout);
    assert.equal(report.yamlErrors.length, 0);
    assert.ok(
      report.result.links.some(
        (link) =>
          link.url === "https://example.invalid/" && link.state === "SKIPPED",
      ),
    );
    // Successful same-document fragments need no separate Linkinator result.
    if (directoryCase.target !== "#source") {
      assert.ok(
        report.result.links.some(
          (link) => link.displayText === "directory case",
        ),
      );
    }
    for (const [name, content] of Object.entries(files)) {
      assert.equal(readFileSync(join(dir, name), "utf8"), content);
    }
  });
}
test("directory contract: outside-root directory cannot be served", (t) => {
  const parent = createFixture(t, {
    "outside/index.html": "<h1>Outside</h1>\n",
  });
  const dir = join(parent, "repo");
  mkdirSync(dir);
  // WHATWG URL resolution clamps literal .. at the URL root. Encoded slashes
  // exercise Linkinator's server containment check after percent decoding.
  for (const target of ["../outside/", "..%2Foutside/"]) {
    const source = `# Source\n\n[outside](${target})\n`;
    writeFileSync(join(dir, "source.md"), source);
    const result = checkLinks(dir, ["source.md"]);
    assert.equal(result.status, 1, result.output);
    assert.ok(
      JSON.parse(result.stdout).result.links.some(
        (link) => link.state === "BROKEN",
      ),
    );
    assert.equal(readFileSync(join(dir, "source.md"), "utf8"), source);
    assert.equal(
      readFileSync(join(parent, "outside/index.html"), "utf8"),
      "<h1>Outside</h1>\n",
    );
  }
});
test("native directory control: default rejects, directory listing accepts", (t) => {
  const dir = createFixture(t, {
    "source.md": "[docs](docs)\n",
    "docs/keep.txt": "keep\n",
  });
  for (const enabled of [false, true]) {
    const result = runNode(dir, [
      join(root, "tests/link-validation/native-control.mjs"),
      ...(enabled ? ["--directory-listing"] : []),
    ]);
    assert.equal(result.status, enabled ? 0 : 1, result.output);
    const link = JSON.parse(result.stdout).links.find(
      (link) => link.url === "docs",
    );
    assert.equal(link.status, enabled ? 200 : 404);
    assert.equal(link.state, enabled ? "OK" : "BROKEN");
  }
});

// Literal input support includes names that formerly failed selection/attestation.
const requestedPathCases = [
  "ordinary.md",
  "--option.md",
  "http-prefix.md",
  "percent%2Fname.md",
  "nested/deeper/new.md",
  "with space.md",
  "!bang.md",
  "choice{a,b}.md",
  "meta[ab].md",
  "plus+(a).md",
  "#hash.md",
  "percent%23.md",
  ...(process.platform === "win32"
    ? []
    : ["star*.md", "question?.md", "at@(a|b).md", "back\\slash.md"]),
];
for (const name of requestedPathCases) {
  test(`requested-file attestation: ${name}`, (t) => {
    const files = {
      [name]: "# Source\n",
      "choicea.md": "# Decoy\n",
      "metaa.md": "# Decoy\n",
      "plusa.md": "# Decoy\n",
      "star-decoy.md": "# Decoy\n",
      "questionx.md": "# Decoy\n",
      "ata.md": "# Decoy\n",
    };
    const dir = createFixture(t, files);
    for (const broken of [false, true]) {
      const content = "# Source\n" + (broken ? "\n[missing](absent.md)\n" : "");
      writeFileSync(join(dir, name), content);
      const result = checkLinks(dir, [name]);
      assert.equal(result.status, broken ? 1 : 0, result.output);
      if (result.status === 0) {
        const report = JSON.parse(result.stdout);
        assert.deepEqual(
          report.result.links.map((link) => decodeURIComponent(link.url)),
          [name],
        );
      }
      assert.equal(readFileSync(join(dir, name), "utf8"), content);
    }
    rmSync(join(dir, name));
    const missing = checkLinks(dir, [name]);
    assert.equal(missing.status, 2, missing.stdout + missing.stderr);
    assert.match(missing.stderr, /Requested-file attestation failed/);
    assert.ok(missing.stderr.includes(JSON.stringify(name)), missing.stderr);
  });
}

test("requested-file attestation: batches, duplicate inputs and linked targets", (t) => {
  const dir = createFixture(t, {
    "first.md":
      "# First\n\n[target](target.md#target)\n[redirect](docs)\n[external](https://example.invalid/)\n",
    "second.md": "# Second\n",
    "target.md": "# Target\n",
    "docs/index.html": "<h1>Directory</h1>\n",
    "choice{a,b}.md": "# Source\n\n[missing](absent.md)\n",
    "choicea.md": "# Decoy\n",
    "#hash.md": "# Source\n\n[missing](absent.md)\n",
  });
  for (const paths of [
    ["first.md", "second.md"],
    ["second.md", "first.md"],
    ["first.md", "./first.md"],
  ]) {
    const result = checkLinks(dir, paths);
    assert.equal(result.status, 0, result.output);
    const links = JSON.parse(result.stdout).result.links;
    assert.ok(
      links.some((link) => link.url === "target.md" && link.state === "OK"),
    );
    assert.ok(
      links.some(
        (link) =>
          link.url === "https://example.invalid/" && link.state === "SKIPPED",
      ),
    );
  }
  for (const name of ["choice{a,b}.md", "#hash.md"]) {
    const result = checkLinks(dir, ["second.md", name]);
    assert.equal(result.status, 1, result.output);
    assert.ok(
      JSON.parse(result.stdout).result.links.some(
        (link) => link.url === "absent.md" && link.state === "BROKEN",
      ),
      result.output,
    );
  }
});

test("requested-file attestation: URL decoding cannot substitute a sibling", (t) => {
  for (const [requested, decoy] of [
    ["percent%23.md", "percent#.md"],
    ["percent%2Fname.md", "percent/name.md"],
  ]) {
    const dir = createFixture(t, {
      [requested]: "# Source\n\n[missing](absent.md)\n",
      [decoy]: "# Decoy\n",
    });
    const result = checkLinks(dir, [requested]);
    assert.equal(result.status, 1, result.output);
    assert.ok(
      JSON.parse(result.stdout).result.links.some(
        (link) =>
          link.url === "absent.md" &&
          link.state === "BROKEN" &&
          decodeURIComponent(link.parent) === requested,
      ),
      result.output,
    );
  }
});

for (const [platform, paths, root] of [
  ["POSIX", posix, "/repo{a,b}[root]"],
  ["Windows", win32, "C:\\repo{a,b}[root]"],
]) {
  test(`requested-file identity normalization: ${platform}`, () => {
    const origin = "http://127.0.0.1:12345";
    for (const [file, encoded] of [
      ["nested/space café.md", "nested/space%20caf%C3%A9.md"],
      ["nested/#hash.md", "nested/%23hash.md"],
      ["percent%23.md", "percent%2523.md"],
    ]) {
      assert.equal(repositoryUrlPath(root, file, paths), encoded);
      assert.equal(
        pageIdentity(root, `${origin}/${encoded}`, origin, paths),
        repositoryIdentity(root, file, paths),
      );
    }
    assert.notEqual(
      pageIdentity(root, `${origin}/source.md?query#fragment`, origin, paths),
      repositoryIdentity(root, "source.md?query#fragment", paths),
    );
    assert.throws(
      () => pageIdentity(root, `${origin}/bad%2Fname.md`, origin, paths),
      /ambiguous/,
    );
    assert.throws(
      () => pageIdentity(root, `${origin}/bad%00name.md`, origin, paths),
      /ambiguous/,
    );
    assert.throws(
      () => pageIdentity(root, `${origin}/bad%zz.md`, origin, paths),
      URIError,
    );
    assert.throws(
      () =>
        pageIdentity(root, "http://example.invalid/source.md", origin, paths),
      /nonlocal/,
    );
    assert.throws(
      () => repositoryIdentity(root, "../outside.md", paths),
      /outside repository/,
    );
    if (platform === "Windows") {
      assert.equal(
        repositoryUrlPath(root, "nested\\file.md", paths),
        "nested/file.md",
      );
      assert.equal(
        repositoryIdentity(root, "nested\\file.md", paths),
        repositoryIdentity(root, "nested/file.md", paths),
      );
      assert.throws(
        () => pageIdentity(root, `${origin}/C:/outside.md`, origin, paths),
        /outside repository/,
      );
      assert.throws(
        () => pageIdentity(root, `${origin}/bad%5Cname.md`, origin, paths),
        /ambiguous/,
      );
      assert.throws(
        () => repositoryIdentity(root, "D:\\outside.md", paths),
        /outside repository/,
      );
    }
  });
}

const globControl = pathToFileURL(
  join(root, "tests/link-validation/glob-control.mjs"),
).href;
for (const rootName of [
  "root{left,right}[x]",
  "root space café !",
  "root#percent%25",
  ...(process.platform === "win32" ? [] : ["root*?@(a|b)"]),
]) {
  test(`literal boundary before glob: ${rootName}`, (t) => {
    const name = "nested/choice{a,b}[x].md";
    const files = {
      [name]:
        "# Source\n\n[body](#source)\n[target](neighbor.md#neighbor)\n[external](https://example.invalid/)\n",
      "nested/neighbor.md": "# Neighbor\n",
      "nested/choiceax.md": "# Decoy\n",
      "nested/choicebx.md": "# Decoy\n",
    };
    const dir = createFixture(t, files, rootName);
    for (const defect of [
      "",
      "[missing](absent.md)",
      "[missing](#not-present)",
      "[metadata](#probe-phantom)",
    ]) {
      const source =
        "---\nprobe: phantom\n---\n\n" + files[name] + `\n${defect}\n`;
      writeFileSync(join(dir, name), source);
      const trace = join(dir, "glob-trace.jsonl");
      writeFileSync(trace, "");
      const result = runNode(dir, ["--import", globControl, cli, name], {
        ...process.env,
        LINK_GLOB_TRACE: trace,
      });
      assert.equal(result.status, defect ? 1 : 0, result.output);
      assert.deepEqual(
        readFileSync(trace, "utf8").trim().split("\n").map(JSON.parse),
        [".", "."],
      );
      assert.equal(readFileSync(join(dir, name), "utf8"), source);
    }
    // Counterfactual uses native path mode. The guard rejects its pattern BEFORE
    // invoking glob; no dangerous expansion or resource-amplification test runs.
    const trace = join(dir, "native-trace.jsonl");
    const native = runNode(
      dir,
      [
        "--import",
        globControl,
        join(root, "tests/link-validation/native-control.mjs"),
      ],
      { ...process.env, LINK_GLOB_TRACE: trace },
    );
    assert.notEqual(native.status, 0, native.output);
    assert.match(native.stderr, /Nonliteral glob input/);
    assert.notEqual(JSON.parse(readFileSync(trace, "utf8").trim()), ".");
  });
}
test(
  "literal boundary: brace-generated dot segments remain file data",
  { skip: process.platform === "win32" },
  (t) => {
    const file = "**/{..,safe}/body{a,b}.md";
    const dir = createFixture(
      t,
      { [file]: "# Body\n\n[body](#body)\n" },
      "root{a,b}",
    );
    for (const broken of [false, true]) {
      writeFileSync(
        join(dir, file),
        "# Body\n\n[body](#body)\n" +
          (broken ? "\n[missing](#not-present)\n" : ""),
      );
      const trace = join(dir, "trace.jsonl");
      writeFileSync(trace, "");
      const result = runNode(dir, ["--import", globControl, cli, file], {
        ...process.env,
        LINK_GLOB_TRACE: trace,
      });
      assert.equal(result.status, broken ? 1 : 0, result.output);
      if (broken)
        assert.ok(
          JSON.parse(result.stdout).result.links.some(
            (link) =>
              link.state === "BROKEN" && link.url.endsWith("#not-present"),
          ),
        );
      assert.deepEqual(
        readFileSync(trace, "utf8").trim().split("\n").map(JSON.parse),
        [".", "."],
      );
    }
  },
);
test("literal boundary: working file and directory symlinks keep link semantics", (t) => {
  const dir = createFixture(
    t,
    {
      "docs/target.md": "# Target\n\n[neighbor](neighbor.md#neighbor)\n",
      "docs/neighbor.md": "# Neighbor\n",
    },
    "root[symlinks]",
  );
  try {
    symlinkSync("target.md", join(dir, "docs/alias{a,b}.md"));
    symlinkSync(
      "docs",
      join(dir, "alias[dir]"),
      process.platform === "win32" ? "junction" : "dir",
    );
  } catch (error) {
    if (process.platform === "win32" && error.code === "EPERM") {
      t.skip("File symlink creation requires platform permission");
      return;
    }
    throw error;
  }
  const paths = ["docs/alias{a,b}.md", "alias[dir]/target.md"];
  const positive = checkLinks(dir, paths);
  assert.equal(positive.status, 0, positive.output);
  writeFileSync(
    join(dir, "docs/target.md"),
    "# Target\n\n[missing](missing.md)\n",
  );
  const negative = checkLinks(dir, paths);
  assert.equal(negative.status, 1, negative.output);
});

test("literal URL transport: separator and checkout-root rules", () => {
  for (const windowsRoot of [
    "C:\\repo{a,b}[x]",
    "\\\\server\\share\\repo[dir]",
  ]) {
    for (const input of [
      "nested\\choice{..,x}[a].md",
      "nested/choice{..,x}[a].md",
      "nested/../nested/choice{..,x}[a].md",
    ]) {
      assert.equal(
        repositoryUrlPath(windowsRoot, input, win32),
        "nested/choice%7B..%2Cx%7D%5Ba%5D.md",
      );
    }
  }
  assert.equal(
    repositoryUrlPath("/root{a,b}", "back\\slash.md", posix),
    "back%5Cslash.md",
  );
});

test("literal boundary: metacharacter TMPDIR startup stays outside glob preprocessing", (t) => {
  const dir = createFixture(t, { "source.md": "# Source\n" });
  const tempRoot = join(dir, "tmp{a,b}[x]");
  mkdirSync(tempRoot);
  const trace = join(dir, "trace.jsonl");
  for (const broken of [false, true]) {
    writeFileSync(
      join(dir, "source.md"),
      "# Source\n" + (broken ? "\n[missing](#not-present)\n" : ""),
    );
    writeFileSync(trace, "");
    const result = runNode(dir, ["--import", globControl, cli, "source.md"], {
      ...process.env,
      TMPDIR: tempRoot,
      TMP: tempRoot,
      TEMP: tempRoot,
      LINK_GLOB_TRACE: trace,
    });
    assert.equal(result.status, broken ? 1 : 0, result.output);
    assert.deepEqual(
      readFileSync(trace, "utf8").trim().split("\n").map(JSON.parse),
      [".", "."],
    );
  }
});

for (const mode of ["missing", "unexpected"]) {
  test(`requested-page attestation fails closed: ${mode} event`, (t) => {
    const dir = createFixture(t, { "probe.md": "# Probe\n" });
    const loader = pathToFileURL(
      join(root, "tests/link-validation/attestation-control.mjs"),
    ).href;
    const result = runNode(dir, ["--import", loader, cli, "probe.md"], {
      ...process.env,
      LINK_ATTESTATION_CONTROL: mode,
    });
    assert.equal(result.status, 2, result.output);
    assert.match(result.stderr, /Requested-file attestation failed/);
    assert.match(result.stderr, /unproven requested paths/);
    assert.equal(result.stdout, "");
  });
}

// These controls expose inherited limitations, not containment acceptance.
// Native POSIX parent traversal differs from Windows; no Windows proof is implied.
test(
  "inherited limitation: raw symlink parent can check a different lexical file",
  { skip: process.platform === "win32" },
  (t) => {
    const dir = createFixture(t, {
      "probe.md": "# Lexical\n",
      "actual/probe.md": "# Physical\n\n[missing](#not-present)\n",
      "actual/nested/keep.md": "# Keep\n",
    });
    symlinkSync("actual/nested", join(dir, "alias"), "dir");
    assert.match(
      readFileSync(`${dir}/alias/../probe.md`, "utf8"),
      /not-present/,
    );
    assert.equal(checkLinks(dir, ["actual/probe.md"]).status, 1);
    assert.equal(checkLinks(dir, ["alias/../probe.md"]).status, 0);
    writeFileSync(
      join(dir, "probe.md"),
      "# Lexical\n\n[missing](#not-present)\n",
    );
    assert.equal(checkLinks(dir, ["alias/../probe.md"]).status, 1);
  },
);
test(
  "inherited limitation: root excursions and hidden leave/reentry are not rejected",
  { skip: process.platform === "win32" },
  (t) => {
    const parent = createFixture(t, { "repo/probe.md": "# Probe\n" });
    const dir = join(parent, "repo");
    mkdirSync(join(dir, "repo"));
    linkSync(join(dir, "probe.md"), join(dir, "repo/probe.md"));
    symlinkSync(".", join(dir, "rootAlias"), "dir");
    symlinkSync("repo", join(parent, "bridge"), "dir");
    symlinkSync("../bridge", join(dir, "hidden"), "dir");
    for (const broken of [false, true]) {
      writeFileSync(
        join(dir, "probe.md"),
        "# Probe\n" + (broken ? "\n[missing](#not-present)\n" : ""),
      );
      for (const selector of [
        "../repo/probe.md",
        "rootAlias/../repo/probe.md",
        "hidden/probe.md",
      ]) {
        const result = checkLinks(dir, [selector]);
        assert.equal(result.status, broken ? 1 : 0, result.output);
      }
    }
  },
);
test("inherited limitation: Windows case-folded lexical identity is not physical proof", () => {
  assert.equal(
    repositoryIdentity("C:\\repo\\a", "..\\A\\probe.md", win32),
    "probe.md",
  );
  assert.equal(
    win32.relative("C:\\repo\\a\\probe.md", "C:\\repo\\A\\probe.md"),
    "",
  );
});
test(
  "inherited link-relative bases stay lexical",
  { skip: process.platform === "win32" },
  (t) => {
    const dir = createFixture(t, {
      "docs/target.md": "# Target\n\n[neighbor](neighbor.md#lexical)\n",
      "docs/neighbor.md": "# Physical\n",
      "neighbor.md": "# Lexical\n",
    });
    symlinkSync("docs/target.md", join(dir, "alias.md"));
    assert.equal(checkLinks(dir, ["alias.md"]).status, 0);
    assert.equal(checkLinks(dir, ["docs/target.md"]).status, 1);
    writeFileSync(join(dir, "neighbor.md"), "# Missing\n");
    assert.equal(checkLinks(dir, ["alias.md"]).status, 1);
  },
);

// Raw argv spelling is a compatibility check, not physical selection proof.
test("file selector separators: portable POSIX and Windows rules", () => {
  for (const file of ["probe.md/", "probe.md//", "alias/probe.md/"]) {
    assert.equal(hasTerminalDirectorySeparator(file, posix), true);
    assert.equal(hasTerminalDirectorySeparator(file, win32), true);
  }
  for (const file of ["probe.md\\", "alias\\probe.md\\", "probe.md/\\"]) {
    assert.equal(hasTerminalDirectorySeparator(file, posix), false);
    assert.equal(hasTerminalDirectorySeparator(file, win32), true);
  }
  for (const paths of [posix, win32])
    for (const file of [
      "probe.md",
      "safe/../probe.md",
      "alias/probe.md",
      "choice{a,b}[x] café.md",
    ])
      assert.equal(hasTerminalDirectorySeparator(file, paths), false);
});
test("raw requested file separator fails without changing directory links", (t) => {
  const dir = createFixture(t, {
    "probe.md": "# Probe\n\n[directory](docs/)\n",
    "docs/keep.md": "# Keep\n",
  });
  for (const file of ["probe.md", "./probe.md", "docs/../probe.md"]) {
    const result = checkLinks(dir, [file]);
    assert.equal(result.status, 0, result.output);
  }
  for (const file of [
    "probe.md/",
    "probe.md//",
    ...(process.platform === "win32" ? ["probe.md\\", "probe.md/\\"] : []),
  ]) {
    const result = checkLinks(dir, [file]);
    assert.equal(result.status, 2, result.output);
    assert.match(
      result.stderr,
      /terminal directory separator requires a file symlink/,
    );
    assert.equal(result.stdout, "");
  }
  writeFileSync(
    join(dir, "probe.md"),
    "# Probe\n\n[missing](#not-present)\n[directory](docs/)\n",
  );
  assert.equal(checkLinks(dir, ["probe.md"]).status, 1);
});
test(
  "POSIX backslash in a Markdown filename remains literal data",
  { skip: process.platform === "win32" },
  (t) => {
    const file = "probe\\.md";
    const dir = createFixture(t, { [file]: "# Probe\n" });
    assert.equal(checkLinks(dir, [file]).status, 0);
    writeFileSync(join(dir, file), "# Probe\n\n[missing](#not-present)\n");
    assert.equal(checkLinks(dir, [file]).status, 1);
  },
);

// Fixed expected statuses from Planning's 29-selector contract, not predictions.
// POSIX symlink/parent semantics require a native POSIX host; portable Windows
// suffix helpers above do not qualify native Windows filesystems.
test(
  "normalized-entry CLI matrix: 52 ordinary and six literal-name observations",
  { skip: process.platform === "win32", timeout: 60000 },
  (t) => {
    const body = "# Probe\n\n[body](#probe)\n";
    const parent = createFixture(t, {
      "repo/probe.md": body,
      "repo/docs/probe.md": body,
      "repo/actual/physical.md": body,
      "repo/actual/fileAlias.md": body,
      "repo/actual/deep/keep.md": "# Keep\n",
      "repo/back\\slash.md": body,
      "repo/neighbor.md": "# Lexical\n",
      "repo/docs/neighbor.md": "# Physical\n",
    });
    const dir = join(parent, "repo");
    linkSync(join(dir, "probe.md"), join(dir, "hard.md"));
    for (const [name, target] of [
      ["fileAlias.md", "probe.md"],
      ["nestedAlias.md", "fileAlias.md"],
      ["docs/up.md", "../probe.md"],
      ["dirAlias", "docs"],
      ["docs/fileAlias.md", "../probe.md"],
      ["aliasParent", "actual/deep"],
      ["actual/probe.md", "physical.md"],
      ["broken.md", "absent.md"],
      ["loop.md", "loop.md"],
      ["outsideAlias.md", "../outside.md"],
      ["back\\alias.md", "probe.md"],
      ["rootlink.md", "docs/target.md"],
    ])
      symlinkSync(target, join(dir, name));
    const cases = [
      ["probe.md", 0],
      ["probe.md/", 2],
      ["probe.md//", 2],
      ["./probe.md/", 2],
      ["docs/../probe.md/", 2],
      ["hard.md/", 2],
      ["fileAlias.md", 0],
      ["fileAlias.md/", 0],
      ["fileAlias.md//", 0],
      ["nestedAlias.md/", 0],
      ["dirAlias/probe.md/", 2],
      ["dirAlias/fileAlias.md/", 0],
      ["docs/up.md/", 0],
      ["docs/../fileAlias.md/", 0],
      ["aliasParent/../probe.md/", 2],
      ["aliasParent/../fileAlias.md/", 0],
      ["probe.md/../fileAlias.md/", 0],
      ["missing/../fileAlias.md/", 0],
      ["broken.md/", 2],
      ["loop.md/", 2],
      ["missing.md/", 2],
      ["outsideAlias.md/", 0],
      ["fileAlias.md/./", 0],
      ["probe.md/./", 2],
      ["rootlink.md/", 0],
      ["docs/target.md", 1],
      // Intentional literal support; main rejects these pattern spellings.
      ["back\\slash.md", 0],
      ["back\\slash.md/", 2],
      ["back\\alias.md/", 0],
    ];
    for (const broken of [false, true]) {
      const content = body + (broken ? "\n[missing](#not-present)\n" : "");
      for (const file of [
        "probe.md",
        "docs/probe.md",
        "actual/physical.md",
        "actual/fileAlias.md",
        "back\\slash.md",
      ])
        writeFileSync(join(dir, file), content);
      writeFileSync(join(parent, "outside.md"), content);
      writeFileSync(
        join(dir, "docs/target.md"),
        "# Target\n\n[neighbor](neighbor.md#lexical)\n" +
          (broken ? "\n[missing](#not-present)\n" : ""),
      );
      for (const [selector, validStatus] of cases) {
        const expected = validStatus === 0 && broken ? 1 : validStatus;
        const result = checkLinks(dir, [selector]);
        assert.equal(result.status, expected, `${selector}: ${result.output}`);
        if (expected === 1) {
          const links = JSON.parse(result.stdout).result.links;
          assert.ok(
            links.some((link) => link.state === "BROKEN"),
            result.output,
          );
          if (broken)
            assert.ok(
              links.some((link) => link.url.endsWith("#not-present")),
              result.output,
            );
        } else if (expected === 2) assert.equal(result.stdout, "");
      }
    }
  },
);
