# Changelog

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

[0.2.0]: https://github.com/jamesreimer/agent-workflows/releases/tag/v0.2.0
[0.1.3]: https://github.com/jamesreimer/agent-workflows/releases/tag/v0.1.3
[0.1.2]: https://github.com/jamesreimer/agent-workflows/releases/tag/v0.1.2
[0.1.1]: https://github.com/jamesreimer/agent-workflows/releases/tag/v0.1.1
[0.1.0]: https://github.com/jamesreimer/agent-workflows/releases/tag/v0.1.0
