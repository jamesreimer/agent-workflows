// Process entry point only: every invocation owns its Marked configuration.
import { LinkChecker } from "linkinator";
import { mkdtemp, writeFile, rm, stat, lstat } from "node:fs/promises";
import { tmpdir } from "node:os";
import { isAbsolute, join, resolve } from "node:path";
import {
  repositoryIdentity,
  pageIdentity,
  repositoryUrlPath,
  hasTerminalDirectorySeparator,
} from "./requested-file-identity.mjs";
import { observations } from "./link-frontmatter.mjs";

// Use Linkinator's native server without sending user paths through its glob.
// The awaited skip callback keeps that server alive for the URL-mode check.
async function checkLiteral(root, paths, recordPage, recordOrigin) {
  const previous = process.cwd();
  let result;
  let failure;
  let origin;
  let started = false;
  const options = {
    markdown: true,
    checkFragments: true,
    directoryListing: true,
    timeout: 10000,
    retry: false,
    retryErrors: false,
  };
  try {
    process.chdir(root);
    const bootstrap = await new LinkChecker().check({
      ...options,
      path: ".",
      serverRoot: ".",
      async linksToSkip(url) {
        if (started) {
          failure = new Error("Literal server bootstrap repeated.");
          return true;
        }
        started = true;
        origin = new URL(url).origin;
        recordOrigin?.(origin);
        const checker = new LinkChecker();
        checker.on("pagestart", (page) => recordPage?.(String(page)));
        try {
          result = await checker.check({
            ...options,
            path: paths.map(
              (file) => `${origin}/${repositoryUrlPath(root, file)}`,
            ),
            linksToSkip: (link) => new URL(link).origin !== origin,
          });
        } catch (error) {
          failure = error;
        }
        // The bootstrap directory is only a server-lifetime anchor, never read.
        return true;
      },
    });
    if (failure) throw failure;
    if (
      !result ||
      !bootstrap.passed ||
      bootstrap.links.length !== 1 ||
      bootstrap.links[0].state !== "SKIPPED"
    ) {
      throw new Error("Literal server bootstrap failed.");
    }
    // Match Linkinator's native local-server diagnostic mapping, not validation.
    const local = (url) =>
      url?.startsWith(`${origin}/`)
        ? url.slice(origin.length + 1) || "./"
        : url;
    for (const link of result.links) {
      link.url = local(link.url);
      if (link.parent) link.parent = local(link.parent);
    }
    return result;
  } finally {
    process.chdir(previous);
  }
}

async function selfCheck() {
  const root = await mkdtemp(join(tmpdir(), "linkinator-startup-"));
  try {
    // Unhooked Marked creates #probe-phantom from this single-key metadata.
    await writeFile(
      join(root, "probe.md"),
      "---\nprobe: phantom\n---\n\n# Body\n\n[body](#body)\n[metadata](#probe-phantom)\n",
    );
    const result = await checkLiteral(root, ["probe.md"]);
    const broken = result.links.filter((link) => link.state === "BROKEN");
    if (
      result.passed ||
      observations.yamlErrors.length ||
      broken.length !== 1 ||
      broken[0].url !== "probe.md#probe-phantom" ||
      broken[0].status !== 200 ||
      !result.links.some(
        (link) => link.url === "probe.md" && link.state === "OK",
      )
    ) {
      throw new Error(
        "Front-matter startup self-check failed: Linkinator did not isolate metadata. Check the pinned Marked instance and hook installation.",
      );
    }
  } finally {
    await rm(root, { recursive: true, force: true });
  }
}

try {
  await selfCheck();
  const paths = process.argv.slice(2);
  if (!paths.length || paths.some((path) => /^https?:/i.test(path))) {
    throw new Error("Supply repository-relative local Markdown paths.");
  }
  const root = process.cwd();
  const requested = new Map();
  for (const path of paths) {
    if (isAbsolute(path))
      throw new Error(
        `Supply a repository-relative path: ${JSON.stringify(path)}`,
      );
    const terminalSeparator = hasTerminalDirectorySeparator(path);
    // Preserve published main's lexical selector/existence semantics.
    // This transport boundary is not a physical containment check.
    const identity = repositoryIdentity(root, path);
    if (terminalSeparator) {
      // Match main's normalized final-entry distinction, not raw OS traversal.
      const entry = await lstat(resolve(root, identity)).catch(() => undefined);
      if (!entry?.isSymbolicLink())
        throw new Error(
          `Requested-file attestation failed: terminal directory separator requires a file symlink: ${JSON.stringify(path)}`,
        );
    }
    const info = await stat(resolve(root, identity)).catch(() => undefined);
    if (!info?.isFile())
      throw new Error(
        `Requested-file attestation failed: not an existing file: ${JSON.stringify(path)}`,
      );
    requested.set(identity, path);
  }
  const pages = [];
  let origin;
  const result = await checkLiteral(
    root,
    paths,
    (page) => pages.push(page),
    (value) => {
      origin = value;
    },
  );
  // Rendering failures (for example malformed YAML) can precede pagestart.
  // Preserve their existing failure result; only proven exact scans may pass.
  if (result.passed && !observations.yamlErrors.length) {
    let observed;
    try {
      observed = new Set(pages.map((page) => pageIdentity(root, page, origin)));
    } catch (error) {
      throw new Error(
        `Requested-file attestation failed for ${JSON.stringify(paths)}: ${error.message}`,
        { cause: error },
      );
    }
    const missing = [...requested]
      .filter(([identity]) => !observed.has(identity))
      .map(([, path]) => path);
    const unexpected = [...observed].filter(
      (identity) => !requested.has(identity),
    );
    if (missing.length || unexpected.length) {
      throw new Error(
        `Requested-file attestation failed for ${JSON.stringify(paths)}: unproven requested paths ${JSON.stringify(missing)}; unexpected initial paths ${JSON.stringify(unexpected)}. Linkinator cannot prove exact selection.`,
      );
    }
  }
  console.log(
    JSON.stringify(
      { result, yamlErrors: observations.yamlErrors },
      (key, value) =>
        value instanceof Error ? { message: value.message } : value,
    ),
  );
  process.exitCode = result.passed && !observations.yamlErrors.length ? 0 : 1;
} catch (error) {
  console.error(error.message);
  process.exitCode = 2;
}
