# Contributing

Keep changes tied to a concrete requirement or defect in bounded agent-assisted
work. Read [README.md](README.md) for the responsibility and source-status model
and [GOVERNING-SOURCES.md](GOVERNING-SOURCES.md) for pinned interpretive
dependencies. These contributor instructions are repository-local implementation guidance, not external policy.

Do not strengthen or weaken governing requirements, introduce organization-neutral
review governance, or put live task instances into canonical artifacts. Evaluate
changed handoff semantics against the actual governing source and consuming
project impact. Keep each canonical artifact's Governing sources and visible
workflow-local distinction intact. A wording or file-layout forecast is not an
authority boundary unless the authorized contract deliberately makes it one.

Follow [MAINTAINING.md](MAINTAINING.md) for repository-local release preparation
and publication. Contribution permission does not grant release authority.

## Workflow

Use a bounded branch named `<type>/<short-description>` and a matching
`<type>: <description>` PR title, using feat, fix, docs, chore, or refactor as
appropriate. Describe the outcome, applicable authority, source relationships,
validation, consumer impact, and unresolved questions. Keep execution records in
issues or PRs, and settled reusable behavior in canonical files.

Follow the actual project contract and required review gates. Release
authorization is separate. Validation never
confers merge, release, or deployment authority.

Follow the [setup instructions](README.md#run-checks), stage intended new files,
and run:

```sh
.venv/bin/pre-commit run --all-files --show-diff-on-failure
git diff --check
```

Hooks that fix files exit unsuccessfully until their changes are reviewed and
included. Rerun after reviewing fixes. An installed commit hook checks staged
files; the full command also catches effects on unchanged sources, such as
links to a deleted target. Run the full command before opening a pull request.

CI runs the same configuration on the checked-out commit. Required checks,
review counts, merge strategy, and permissions belong to the repository's host
settings and should be chosen for the project. The upstream
[default-branch ruleset guidance](https://github.com/jamesreimer/repo-template/blob/main/rulesets/README.md)
is a discovery reference for a starting configuration and host verification.
Bind any consumed procedure to the exact upstream target recorded in the
[reconciliation PR](MAINTAINING.md#repo-template-reconciliation).
When changing the required job's name, source, or triggers, reconcile the live
required check with the workflow so every pull request targeting the protected
branch can report it. Preserve this repository's exact-candidate checkout.

## Changelog

[CHANGELOG.md](CHANGELOG.md) follows [Common Changelog](https://common-changelog.org/)
for format only. It summarizes notable repository releases. Canonical roles,
handoffs, and workflows define reusable behavior; instantiated handoffs and
execution evidence remain with the consuming project. [GOVERNING-SOURCES.md](GOVERNING-SOURCES.md)
owns exact source pins and applicability. Git owns exact history, PRs and issues
retain decisions and implementation evidence, and GitHub Releases record
publication and release-specific notes. The changelog replaces none of these
or the actual publication authorization evidence.

For each PR, retain a concise proposed changelog summary with supporting
references, or explain why the change is not notable. Distinguish reusable
workflow semantics, role/handoff behavior, repository maintenance, source-pin
changes, and publication mechanics where useful. Capture compatibility and
consumer implications. Reviewers verify that the summary reflects the final
candidate; not every PR warrants a release entry.

Common Changelog states that changes must reference relevant commits, while its
own examples also show pull-request references. Agent Workflows interprets those
examples as permitting a pull request to serve as the durable change reference
when the eventual canonical published-history commit for that same PR does not
yet exist.

When an appropriate canonical published-history commit already exists, cite it
and include the associated PR where useful. A PR selected as the durable reference
for a same-PR change is final; do not later supplement or replace it merely because
the eventual squash commit becomes available. Do not cite a pre-squash PR-head
commit that will not exist in canonical `main` history. Effective default-branch
protection permits squash landing; [release preparation](MAINTAINING.md#prepare-the-release)
applies that condition to same-PR entries.

Changelog commit/PR references are historical and navigation references. They do
not replace the reviewed immutable PR-head candidate, resulting canonical
published commit, or reviewed-to-published correspondence evidence required for
publication. A final PR reference leaves those publication-integrity identities
and checks intact.

Keep pending summaries in retained PR descriptions until a real release version
and date are selected. Do not create an `Unreleased` section, invent a version,
or attribute new work to an already published release. During release preparation,
update the prepared section alongside further notable changes included in that
release. Follow [release preparation](MAINTAINING.md#prepare-the-release) to
curate summaries, including carried-forward work, against the entire delta.
Use safe issue references under the [GitHub issue-closure guidance](roles/publication.md#github-issue-closure).

The initial history from `v0.1.0` through `v0.2.0` is a retrospective backfill
supported by retained GitHub Release notes and UTC `publishedAt` dates, verified
tags, release commits, diffs, and merged PRs. It was not written contemporaneously.
It preserves the releases' pre-1.0 semantics, including maintenance-only patches
and compatible workflow additions.

Consumers update deliberately under their own project authority and preserve
legitimate local adaptations. Copied workflows and instantiated handoffs do not
update automatically. A repository release neither adopts standards for consumers,
advances their source pins, transfers roles, nor grants execution or publication
authority. Repository governing-source pins advance only through actual reviewed
changes to their canonical entries.

## Changing validation

`.pre-commit-config.yaml` owns tool selection and file scope. Markdown rules live
in `.markdownlint-cli2.jsonc`; Python rules live in `ruff.toml`. Use the tools'
native configuration when project requirements change. Make exclusions explicit
and explain substantive coverage reductions in the pull request.

ESLint owns JavaScript correctness and maintainability through `eslint.config.mjs`.
Prettier owns mechanical formatting for JavaScript, JSON/JSONC, YAML, and Markdown
through `.prettierrc.json`. Both checks run as filename-driven local/system
pre-commit hooks: pre-commit passes selected filenames directly to the root
npm-installed package CLIs. The `--` separators protect option-like filenames.
At commit time, pre-commit hides unstaged edits and checks selected staged files.
The full tracked-repository validation path remains
`pre-commit run --all-files --show-diff-on-failure`.

For focused checks, run `.venv/bin/pre-commit run lint-js --all-files` or
`.venv/bin/pre-commit run format-check --all-files`; use `--files path/to/file.mjs`
instead of `--all-files` to select particular files deliberately. The manual
`npm run lint:js` and `npm run format:check` convenience check commands scan their
configured working-tree scope, including untracked files. They do not transport
commit-time filenames. Apply formatting deliberately with an appropriate editor
or tool invocation, then review the diff as an ordinary change. Validation itself
does not apply ESLint or Prettier fixes.

Formatting excludes the npm-owned lockfile, digest-pinned link contract, and
YAML parser fixture. `.prettierignore` also excludes `.venv/` for manual scans;
the pre-commit format hook explicitly excludes the tracked fixture/lock paths.
Markdown prose wrapping stays at Prettier's preserve default, and embedded
examples are not reformatted. Existing syntax, Markdown, link, and workflow
validators retain their semantic responsibilities. `tests/quality-hooks.test.mjs`
protects the direct CLI wiring and literal-filename boundary, including the
brace/decoy regression that rejects npm script-shell transport.

Agent Workflows additionally excludes `roles/` and `handoffs/` from Prettier to
preserve authored operational contracts. They remain covered by Markdownlint,
link validation, canonical-artifact and live-identifier checks, and manual
semantic review. This exclusion does not extend to all Markdown.

Inline Markdownlint configuration comments, including rule exceptions, are
intentionally disabled with `noInlineConfig: true`. This AW-local hardening
removes the Markdown-comment configuration parsing route; it does not patch
vulnerable packages or disable configuration-file discovery and executable
nested options. Consumers relying on inline exceptions must deliberately adapt
their authoring or configuration.

Markdownlint CLI2 0.24.0 / markdownlint 0.42.0 uses RE2JS for native
`frontMatter` expressions to protect against regular-expression denial of service.
Custom expressions using JavaScript RegExp-only features, including lookahead,
may need compatible equivalents. Some older upstream documentation still describes
JavaScript `RegExp`; verify custom patterns against the installed CLI. The default
Agent Workflows configuration does not use custom `frontMatter` and is unaffected.

Linkinator checks Markdown links offline, including fragments. It runs as a
fresh process through `tools/check-links.mjs`, with exact dependencies in
`package.json` and `package-lock.json`. A startup probe verifies that front matter
is excluded by the renderer actually used by Linkinator; an ineffective hook
stops validation before repository content is read. External HTTP/HTTPS links
are skipped, including redirects leaving the local serving origin. There is no
required remote-link check. Absolute website routes and generated destinations
need a project-specific decision. Markdown parsing belongs to the
maintained tools. The local `fenced-code-closed` authoring rule consumes
markdownlint's micromark tokens to require explicit fence closure; it neither
parses Markdown independently nor chooses a closing position automatically.
Requested-selector checks retain published main's lexical normalization and
existing-file check. Working symlinks and lexical document-relative URL bases
remain supported. Requested-page attestation proves the normalized URL identities
were scanned; it does not prove raw filesystem selection or containment.
Raw symlink/parent spellings can select a different file than the normalized URL,
and root excursions/reentry can succeed. Windows case-folded path comparisons
are not physical identity proof. These inherited risks remain open under #28;
R1/R2 are Required for the separate comprehensive containment objective, not
fixed or waived by this transport mitigation. No realpath/file-ID guard, hop
auditor or root-alias authorization predicate is included.
Requested files use per-segment encoded local URLs, keeping their names and the
checkout root out of Linkinator's glob patterns. A native Linkinator server check
uses only the fixed `.` path from its serving directory; its awaited skip callback
holds that server open for Linkinator's URL-mode validation. The bootstrap directory
is skipped, not scanned. Both checks must complete before success; the startup
probe and requested-file attestation remain fail-closed. This process entry point
temporarily changes its working directory for the startup probe and restores it
in `finally`; it is not a concurrent in-process checker API. Legal literal names
with glob or URL syntax are supported without selecting decoys. Only local diagnostic
URL prefixes are removed after validation; source and link content are unchanged.
This boundary protects this entrypoint from requested filenames and checkout-root
spellings becoming glob patterns before attestation. It does not establish
symlink no-excursion, physical containment, native Windows identity, indirect-link
sandboxing, universal provider IDs or atomic TOCTOU protection. It does not patch
installed glob/minimatch or accept residual package, custom-configuration, hostile
PR/CI credential or consumer risk. Running checks from an untrusted checkout
executes its code and configuration; this adapter is not a security boundary
against that code. Release qualification still requires the exact whole-tree
review and graph-specific risk disposition in MAINTAINING.md. The callback/server ordering is a
Linkinator 8.1.0 compatibility assumption requiring requalification on relevant
dependency updates; inherited cleanup can hang on unusual failures. This local
candidate was tested natively on macOS with portable `path.win32` helper tests
only: no native Windows/UNC/junction/SMB/ReFS validation and no hosted candidate
CI was performed. Hosted qualification requires a separately authorized PR.

Directory destinations use Linkinator's native directory listings and do not
require an `index.html`. Missing directories still fail. If an `index.html` is
present, Linkinator checks its fragments; generated listings do not expose an
HTML fragment contract, so fragments on those listings are not validated.
Use an explicit Markdown or HTML file link when a fragment must be checked.

When changing a check or its scope, verify both that representative defects fail
and that representative valid files pass in an isolated Git repository. Include
new-file selection and the full CI command where relevant. The suite includes
`tests/markdown-rules.test.cjs`, which exercises the local rule through the
installed CLI and actual configuration from the same root npm-installed
`markdownlint-cli2` package as the ordinary Markdown hook. The literal-filename
adapter preserves pre-commit selection, batching, and unstaged-change stashing;
no separate Markdown hook environment is created.
Keep embedded Markdown examples, container boundaries, opening-line locations,
and no-autofix behavior covered when updating the rule or its parser dependency.
Projects should add tests for the additional behavior they own.

## Updating dependencies

Hook repositories are pinned to immutable commits, with version comments.
Review updates using:

```sh
.venv/bin/pre-commit autoupdate --freeze
```

Review the resulting versions and configuration compatibility, then run the
full suite. `requirements-dev.txt` pins the runner. npm owns the link checker,
its explicit Marked dependency, the maintained front-matter stack, and the
Markdownlint dependency used by both its ordinary hook and regression tests,
ESLint, and Prettier. Use `npm ci --ignore-scripts`
locally and in CI. The lock preserves the full dependency resolution;
pre-commit `additional_dependencies` cannot provide that transitive lock.
The startup probe is still required: correctness must not depend on hoisting.
Update pins and lock together, then run the regression suite and ordinary checks.
The package engine and `.npmrc` require Node 24.22.1 or a later Node 24 release
at install time; CI selects exactly Node 24.22.1. Later execution uses the system
`node` on PATH, so select it before running checks. Install-time enforcement replaces the old
Markdown hook's per-invocation nodeenv selection. Dependabot's forced dependency
resolution does not qualify a candidate; required CI still installs without
`--force` on the selected runtime.

Dependabot proposes GitHub Actions, Python requirements, and npm dependency
updates monthly. Hook revisions remain covered by `pre-commit autoupdate`.
Actions are pinned by commit as well; review version inputs when updating them.

The durable link regression contract and test controls are documented in
[tests/link-validation/README.md](tests/link-validation/README.md).

## Local artifact checks

Generic mechanics remain owned by repo-template. This repository's only local
validator checks the required canonical artifact paths and obvious live task
identifiers in roles, handoffs, and workflows. It intentionally does not parse
workflow semantics or reimplement Markdown, links, syntax, or generic policy.

```sh
python3 scripts/validate_local.py
python3 -m unittest discover -s tests
npm audit
```

Retain the complete, unsuppressed `npm audit` output and its exit status against
the actual installed graph. A nonzero result is not a clean audit. At release
qualification it permits proceeding only with a current, reviewed AW-local
bounded risk disposition covering that exact graph, applicability and exposure,
remaining risk, and reassessment triggers. New or materially changed findings,
an absent or expired disposition, changed trust or CI assumptions, or policy
requiring a clean audit fail closed pending a new decision. Upstream acceptance
is not local acceptance. Follow the [release qualification procedure](MAINTAINING.md#prepare-the-release)
and keep residual advisory ownership in an AW issue; this is not release authority.

The same two Python commands are included in pre-commit and hosted CI. Tests
exercise missing artifacts, valid placeholders, live issue/repository/SHA values,
and newly added canonical files in temporary directories. Identifier detection
is a narrow guard, not proof that all project-specific prose is absent.

Manually review authority strength and applicability, finding dispositions,
source-reference correctness, accessible consumer dependencies, and placeholder
use. Recheck affected guidance and citations when changing a governing-source
entry. Reverify external governing references when changed. Retain repo-template
correspondence evidence in its [reconciliation PR](MAINTAINING.md#repo-template-reconciliation).
No repository tree snapshot, generic retained fork, workflow parser, or standards-domain tooling
belongs here. Generic defects go to their owning upstream source.

For requested-file argv, retain the raw terminal-separator flag before
normalization (`/` on POSIX; `/` or `\` under Windows path rules). Only those
selectors receive an extra `lstat` of the main-normalized selected entry. An
ordinary final file/hardlink rejects the separator; a final symlink proceeds
only through the unchanged normalized `stat.isFile`, native URL check and page
attestation. Failed metadata, broken/looping symlinks and non-files fail closed.
This preserves tested ordinary selector compatibility, not raw physical identity
or containment. Markdown links to directory destinations ending `/` are unchanged.

The native macOS regression matrix exercises all 29 selectors with valid and
broken content: 52 ordinary observations must match main; six POSIX backslash
observations exercise literal transport: four change exit status from legacy
glob handling, while two retain exit2 with different error reasons. In particular a legal backslash-named file symlink with terminal slash
may validate literally although main rejected its pattern spelling. Do not claim
58/58 legacy equivalence. POSIX backslash data and portable Windows separator
checks are distinct; no native Windows/UNC/junction/SMB/ReFS clearance is implied.

Test-only lifecycle controls use a public LinkChecker subclass facade, not
upstream prototype edits: repeated/uninvoked/non-awaited callbacks, corrupted
result count/state and inner failure must fail closed. In the non-awaited
control the native bootstrap completes, then a held test-only inner promise is
cancelled without starting an inner URL request. Production imports none of these
controls. Each negative process has a finite timeout.

R1 also retains the inherited native server's lexical `startsWith(root)` check
without a separator boundary: sibling-prefix routing is a source-inferred concern,
not a newly reproduced exploit or a fix in this change. R2 retains unqualified
Windows trailing-dot/space/ADS and UNC/junction/SMB/ReFS behavior. These notes
create no platform restriction, security acceptance or filesystem authority.
