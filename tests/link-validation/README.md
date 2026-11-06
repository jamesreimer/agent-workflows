# Local link regression contract

Run `npm ci --ignore-scripts`, then `npm run test:links`. The ordinary pre-commit
run also runs this suite. Tests materialize synthetic fixture strings in temporary
directories and verify their bytes after validation; no repository content is
rewritten or mirrored.

`contract.json` defines 63 local-link and Markdown authoring cases. The test
runner verifies its SHA-256 digest before executing the cases; intentional
fixture changes must update the pinned digest in `tests/link-validation.test.mjs`.
`expected_local` controls Linkinator acceptance and `expected_lint` controls
Markdownlint acceptance. Every discovered HTTP/HTTPS URL must be skipped.

Linkinator is the sole owner of local fragment validity. Markdownlint retains
Markdown authoring rules and does not independently validate fragments: only
MD051 is disabled. The `dual-name-same` fixture remains positive coverage for
Linkinator accepting the legacy name on an anchor with both `id` and `name`.
The `same-metadata-phantom` fixture remains negative coverage for Linkinator
rejecting a phantom metadata anchor through front-matter isolation. Both expect Markdownlint acceptance; Linkinator checks their fragments.

Additional controls cover single-key metadata, native false-green behavior,
disabled hooks, separate Marked instances, duplicate registration, independent
CLI repeatability, and original filenames in batch diagnostics. The test-only
Node module hooks use public loader APIs to disable our hook or resolve it to a
separate Marked module instance. They do not patch dependencies or add fragment
matching. These controls are never imported by the production entry point.

Additional regression cases exercise directory destinations.
They cover relative, trailing-slash, empty, nested, parent-relative, encoded,
spaced, and query-bearing destinations; missing directories; file and fragment
regressions; and outside-root paths. Native controls demonstrate the default
404 and the public `directoryListing` option's successful response. Index HTML
fragments remain Linkinator-owned; generated listings have no native fragment
validation. Each directory case checks source bytes and external-link exclusion.

`tools/check-links.mjs` is a process entry point only. Each startup writes a tiny
synthetic single-key YAML document in a temporary directory and asks Linkinator
to validate its known body and metadata fragment references. The required outcome
is exactly one missing metadata fragment on a successfully rendered document.
Native Marked incorrectly accepts that fragment. Any other startup outcome exits
nonzero before repository inputs are checked. This verifies effective integration
without assuming a particular package-manager layout or importing private code.

The wrapper configures the public shared Marked instance once per process.
Other in-process consumers would share its configuration; no reusable checker
API is offered. Duplicate registration is tested only as a corruption control,
not an endorsed execution model. Indirect targets may render twice; this is
accepted and is not optimized.

Link diagnostics preserve display text, but local URL segments may be
percent-encoded and require per-segment decoding to recover filenames. The same
physical file can have distinct raw and encoded URL cache keys and duplicate
reports. Empty root paths display as `./`, which can differ from native Windows
presentation. Linkinator does not promise Markdown line/column positions. YAML
snippets use metadata-relative positions; malformed files remain named as failed local results. The batch
regression test verifies that both original failing filenames are reported.

Literal transport regressions include brace/extglob/wildcard/bracket names,
URL delimiters and percent text, Unicode, spaces, nested paths, working symlinks,
and checkout roots with metacharacters. Valid and broken content must be checked
in the named file, including beside a valid decoy. Portable path tests exercise
Windows separators, drive and UNC spelling, and POSIX literal backslashes using
`path.win32`/`path.posix` helpers only. Native tests for this local candidate ran
on macOS; no native Windows, UNC, junction, SMB or ReFS validation and no hosted
candidate CI ran. Hosted qualification requires a separately authorized PR. These helper
tests do not establish native Windows filesystem equivalence. Brace-generated
dot-segment fixtures stay small, with both valid and broken fragments. Expansion
decoys actually match the small brace/bracket pattern. A metacharacter `TMPDIR`
control sets temporary-directory environment variables and traces both glob
calls; it does not explicitly attest the startup directory location.

`glob-control.mjs` is a test-only public Node loader guard at Linkinator's glob
import. It records and permits only the constant `.` pattern, before invoking
glob. The native path-mode counterfactual is rejected by that guard before any
expansion. Thus the test does not execute resource-amplification payloads or patch
production dependencies. Neither the guard nor other test controls are imported
by the production entry point.

Requested-selector semantics deliberately retain published main's lexical
normalization and normalized-file existence check. There is no A4 final-realpath
or file-ID guard, component/hop auditor or root-alias provenance predicate.
The inherited-behavior controls expose, rather than clear, raw symlink/parent
false-green and root-excursion/reentry risks. URL attestation is not physical
selection proof. Portable Windows cases demonstrate case folding only; no native
Windows identity, UNC, junction, SMB or ReFS qualification is claimed. R1/R2 remain
Required for separate comprehensive containment work under #28.

The transport protects filenames and checkout-root spellings from interpretation
as glob patterns before attestation in this entrypoint. It does not globally
patch glob/minimatch, sandbox indirect links, establish universal provider IDs or
atomic TOCTOU protection, or accept release/security risk. Checks execute
checkout-controlled code/configuration; CI credentials and hostile PR execution
remain separate risks. Tests assume a stable checkout. Ordinary file/directory
symlinks, hardlinks, safe dot/parent paths and lexical relative-link bases retain
main's behavior, including its limitations.

The adapter relies on Linkinator 8.1.0's public asynchronous skip callback being
awaited before server shutdown. Every relevant dependency update requires
requalification of this ordering and the literal transport. Inherited native
server cleanup can hang on unusual failures; this boundary does not redesign it.

`attestation-control.mjs` is test-only event corruption through the public
LinkChecker interface: suppressing or substituting initial page observations
must stop before success. Inherited-limitation controls intentionally record
false-green and excursion/reentry behavior; their passing assertions demonstrate
unchanged exposure, not containment clearance. A separate exact-main comparison
is retained with qualification evidence.

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
