# Changelog

## [0.3.0] - 2026-11-15

_Pre-1.0 source-library changes require deliberate consumer updates; governing-source pins remain unchanged and Working prototypes do not establish v1.0 qualification._

### Changed

- **Breaking:** Require Node.js 24.22.3 or a later Node 24 release for repository validation, enforce the engine range at installation, and pin CI to 24.22.3; copied workflow contracts acquire no Node runtime requirement ([`1f6c69b`](https://github.com/jamesreimer/agent-workflows/commit/1f6c69bf9b00049ecd766bd01e099508237d72e2))
- **Breaking:** Disable Markdownlint inline configuration comments and use RE2JS syntax for custom front-matter expressions; adapt inline exceptions and JavaScript-only expressions when updating validation configuration ([`6e72528`](https://github.com/jamesreimer/agent-workflows/commit/6e725287acd591c513695adfdb0893cd78654067), [`bd9b8fc`](https://github.com/jamesreimer/agent-workflows/commit/bd9b8fcd9c8ca8e11869bfe8e5494cfe472e55d6))
- **Breaking:** Reject ambiguous symlink-parent selectors and unsafe or unverifiable local link targets, including outside-root directory indexes, with validation exit 2; adapt affected selectors or external-symlink targets to unambiguous in-checkout paths ([`6bb3fe8`](https://github.com/jamesreimer/agent-workflows/commit/6bb3fe813d2e20401af5c957ef7dabffc5b20504), [`dfeb5af`](https://github.com/jamesreimer/agent-workflows/commit/dfeb5af1734533e1cbb1201749294c01945e5a7c))
- Make selected workflows usable without Standards Templates adoption while retaining actual governing force and explicit local safeguards for consequential work, recovery, provenance and publication; reconcile copied instructions and alternative-policy decisions under consumer authority ([`6ca25d7`](https://github.com/jamesreimer/agent-workflows/commit/6ca25d7cc28dedd4d79550c3fc72b8df575409e5))
- Require material consequences to be handled, explicitly inapplicable or durably owned before completion, and derive merge-time issue closure from substantive completion; review the clarified completion semantics when deliberately updating copied roles and handoffs ([`417e212`](https://github.com/jamesreimer/agent-workflows/commit/417e2120f56c828c13b8c7d6a5228b8ecb7e2007), [`36c7786`](https://github.com/jamesreimer/agent-workflows/commit/36c7786d3b2d4307a1bea943098a8e86b88a3701))
- Clarify that existing project contracts control merge authority while release tagging and publication require separate explicit human authorization ([`8c00717`](https://github.com/jamesreimer/agent-workflows/commit/8c00717f8d22dcf59065eeb9b855a0c400e65bcf))
- Limit supported link-check environments to trusted single-user development machines and isolated short-lived GitHub-hosted CI; document the temporary localhost server boundary and exclude shared or multi-tenant hosts ([`b0e45bd`](https://github.com/jamesreimer/agent-workflows/commit/b0e45bd3293a942ce02a836cd8f786a22a934233))
- Reconcile repository validation with repo-template v2, adding ESLint and check-only Prettier hooks, literal-file Markdown checks and explicit local audit-risk qualification while preserving canonical contracts and source pins ([`6e72528`](https://github.com/jamesreimer/agent-workflows/commit/6e725287acd591c513695adfdb0893cd78654067))
- Establish retrospective Common Changelog history and reviewable release preparation, including same-PR preparation, durable references and UTC publication-date correction ([`012b27c`](https://github.com/jamesreimer/agent-workflows/commit/012b27c7c384019241531a33ea990d9f4e1f7e77), [`23c294d`](https://github.com/jamesreimer/agent-workflows/commit/23c294d73039ef8faa9703bbe95d7eb647b499c6))
- Schedule weekly Dependabot version checks and group minor/patch setup-action and ESLint updates without enabling automatic merging ([`6f20355`](https://github.com/jamesreimer/agent-workflows/commit/6f2035509e722e494bf10f4496f06a3cfac5ffb1))

### Added

- Add the opt-in Working Research & Decision composition and Evidence → Challenge handoff for independently challenged change, retain or defer recommendations; behavioral qualification and owner decisions remain separate ([`ef28851`](https://github.com/jamesreimer/agent-workflows/commit/ef2885109f147c069c7caf54e208752a425f5eb0))
- Add an optional Working Agent Workflows delivery skill with byte-identical same-tree contracts and a checked digest manifest, including the two Working research contracts; discovery alone selects no role or workflow and installs nothing ([`e29d840`](https://github.com/jamesreimer/agent-workflows/commit/e29d840c5fa8930d566342011321e7dcb7acb063), [`bbb6bfc`](https://github.com/jamesreimer/agent-workflows/commit/bbb6bfc462eee69dea53c26602faadb093de209d))
- Add optional role bindings and advisory shared-account budgets with configuration tools, without an agent executor or budget enforcement; reconcile cross-revision handoffs when using the standalone fixed fallback ([`d90931c`](https://github.com/jamesreimer/agent-workflows/commit/d90931cd9dca7b29ef936c6c3d99d427a20d0763), [`e29d840`](https://github.com/jamesreimer/agent-workflows/commit/e29d840c5fa8930d566342011321e7dcb7acb063))
- Add optional hosted macOS and Windows portability checks alongside required Ubuntu validation, without certifying every filesystem provider ([`21a6129`](https://github.com/jamesreimer/agent-workflows/commit/21a612974c8e310b857f8f4eab3fe62b088fd429))

### Fixed

- Prevent unintended GitHub issue closure through PR relationships, commit text and landing messages, with exact-head and resulting-state verification ([`d358c22`](https://github.com/jamesreimer/agent-workflows/commit/d358c22438b80053a37cf173c1f652952fb35e2a))
- Transport requested Markdown filenames and checkout-root spellings literally to Linkinator while preserving selected-page attestation and native rendering ([`3cea4bc`](https://github.com/jamesreimer/agent-workflows/commit/3cea4bcf77a0afc471ffa72bb7156266054dfa5c))
- Disable checkout credential persistence in required and portability CI jobs; execution of untrusted checkout code remains a separate trust boundary ([`8b6c5de`](https://github.com/jamesreimer/agent-workflows/commit/8b6c5de08060b0505a50c0a6286248dd16ab40d8))
- Resolve supported Undici 8.12.3 and Markdownlint CLI2 0.24.1 security corrections, including Markdownlint 0.42.1 and RE2JS 2.9.1, without forced overrides ([`0436dcd`](https://github.com/jamesreimer/agent-workflows/commit/0436dcd6f6427bc6bee42cb3319e264ce40c9a2b), [`741a208`](https://github.com/jamesreimer/agent-workflows/commit/741a208ade991edc8c250ac3e19fd1fe4ec2e003))
- Upgrade ESLint to 10.15.0 and patched Minimatch 11.0.8 on its dependency path; retain the separately owned Glob, Minimatch and KaTeX audit risks in the remaining validation graph ([`ac3a9ee`](https://github.com/jamesreimer/agent-workflows/commit/ac3a9eee89d5c24d2fee7b6ab63a0bb34fa0ca7d))
- Correct optional bundle documentation to twelve canonical contracts and regenerate its matching copy and manifest; bundling Working research text does not complete behavioral qualification ([`f564267`](https://github.com/jamesreimer/agent-workflows/commit/f5642672b2a9a6c25f99fc4c0a0afbd3caed0be9))

## [0.2.0] - 2026-09-28

### Changed

- Make role continuity and authorized transfer explicit, return ready-to-use handoffs when responsibility moves, and route reviewer corrections to Implementation ([`d288d77`](https://github.com/jamesreimer/agent-workflows/commit/d288d778685de43aab306f4609773c460acbef32), [#12](https://github.com/jamesreimer/agent-workflows/pull/12))
- Require final successful local and hosted validation on the exact candidate before review readiness, and verify exact approved-source correspondence before dependent mutation ([`d288d77`](https://github.com/jamesreimer/agent-workflows/commit/d288d778685de43aab306f4609773c460acbef32), [#12](https://github.com/jamesreimer/agent-workflows/pull/12))
- Expand publication handoffs with authorized source state, identities, correspondence, resulting-state verification, and prior-exposure assessment; review changed table labels when updating copied handoffs or integrations ([`d288d77`](https://github.com/jamesreimer/agent-workflows/commit/d288d778685de43aab306f4609773c460acbef32), [#12](https://github.com/jamesreimer/agent-workflows/pull/12))

### Added

- Add Publication and Release Integrity edition 1.0 as a pinned governing source and integrate its applicable publication guidance, preserving the five existing source pins and consumer authority ([`d288d77`](https://github.com/jamesreimer/agent-workflows/commit/d288d778685de43aab306f4609773c460acbef32), [#12](https://github.com/jamesreimer/agent-workflows/pull/12))
- Add a latest-release badge to the README ([`2d571bd`](https://github.com/jamesreimer/agent-workflows/commit/2d571bd7073752e2681b1d25201f42c714ffbd9b), [#10](https://github.com/jamesreimer/agent-workflows/pull/10))

## [0.1.3] - 2026-09-24

### Changed

- Replace `PROVENANCE.md` with `GOVERNING-SOURCES.md` and the `project-repository-responsibility` anchor with `project-repository-model`; preserve governing-source pins and workflow requirement meaning, and account for these paths when deliberately updating consumer references ([`512c3fc`](https://github.com/jamesreimer/agent-workflows/commit/512c3fcda4b74a3639a0b51058a2c96433d7156d), [#9](https://github.com/jamesreimer/agent-workflows/pull/9))
- Keep creation authority in `AGENTS.md` and reconciliation procedure in `MAINTAINING.md`, with reconciliation history retained in Git and PR evidence ([`512c3fc`](https://github.com/jamesreimer/agent-workflows/commit/512c3fcda4b74a3639a0b51058a2c96433d7156d), [#9](https://github.com/jamesreimer/agent-workflows/pull/9))

## [0.1.2] - 2026-09-23

### Fixed

- Reconcile all five governing-source references to Standards Templates v1.1.1 while retaining edition 1.0 and unchanged normative text, and update the repository foundation to repo-template v1.2.1 without changing workflow semantics ([`e7f11b4`](https://github.com/jamesreimer/agent-workflows/commit/e7f11b4bf684223c071511dac7689da22346b49a), [#7](https://github.com/jamesreimer/agent-workflows/pull/7))
- Replace stale first-release wording with current release discovery and document required-check/host correspondence for repository maintenance ([`e7f11b4`](https://github.com/jamesreimer/agent-workflows/commit/e7f11b4bf684223c071511dac7689da22346b49a), [#7](https://github.com/jamesreimer/agent-workflows/pull/7))

## [0.1.1] - 2026-09-23

### Changed

- Use the complete version tag as the GitHub Release title and verify it after publication, reconciling repo-template v1.2.1 without changing workflow semantics or governing-source references ([`1072f19`](https://github.com/jamesreimer/agent-workflows/commit/1072f198cf64cc94f295931d0f3233ef6cb5c2fe), [#5](https://github.com/jamesreimer/agent-workflows/pull/5))

## [0.1.0] - 2026-09-23

_Initial pre-1.0 library release with four role profiles, five handoff templates, a reviewed-change composition, authority/evidence separation, and repository qualification support._

[0.3.0]: https://github.com/jamesreimer/agent-workflows/releases/tag/v0.3.0
[0.2.0]: https://github.com/jamesreimer/agent-workflows/releases/tag/v0.2.0
[0.1.3]: https://github.com/jamesreimer/agent-workflows/releases/tag/v0.1.3
[0.1.2]: https://github.com/jamesreimer/agent-workflows/releases/tag/v0.1.2
[0.1.1]: https://github.com/jamesreimer/agent-workflows/releases/tag/v0.1.1
[0.1.0]: https://github.com/jamesreimer/agent-workflows/releases/tag/v0.1.0
