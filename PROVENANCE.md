# Provenance

## Repository creation authority

The accepted [creation plan](https://github.com/jamesreimer/standards-templates/issues/117),
[amendment](https://github.com/jamesreimer/standards-templates/issues/117#issuecomment-5771897673),
[independent re-review](https://github.com/jamesreimer/standards-templates/issues/117#issuecomment-5771929010),
and [Planning acceptance](https://github.com/jamesreimer/standards-templates/issues/117#issuecomment-5772081179)
authorize this repository's bounded implementation. They establish local project
authority, not consumer adoption of standards. The amended plan controls over
earlier filename and field forecasts. Initial work stops at a qualified immutable
Working candidate; independent review and Planning acceptance precede merge,
and release requires separate authorization.

## Generic foundation

Source: [jamesreimer/repo-template](https://github.com/jamesreimer/repo-template).
Current reconciled baseline: **v1.2.1**, immutable revision
[`de0fd9206cf0448d50e0dd0f58f858eea46697ad`](https://github.com/jamesreimer/repo-template/tree/de0fd9206cf0448d50e0dd0f58f858eea46697ad).
The initial export used **v1.0.2**,
[`b79d8d0f14b26a2c6414a016b9501853e68f4670`](https://github.com/jamesreimer/repo-template/tree/b79d8d0f14b26a2c6414a016b9501853e68f4670),
without importing standards-templates tooling or transitional controls. The
repository has a fresh history and an empty initial review-base commit, not a
copied upstream history. The classifications below describe the current basis;
initial export history does not substitute for current correspondence checks.

Generic mechanics remain maintained at repo-template; this repository consumes
that implementation rather than retaining a hidden generic fork. The private
npm package name remains the upstream validation package identity, not the
identity of a published agent-workflows package. No npm package is published.

### Exact copy

These files retain byte-for-byte correspondence to the declared baseline.
An intentional divergence requires review and truthful reclassification.

- `.editorconfig`
- `.gitattributes`
- `.github/dependabot.yml`
- `.github/pull_request_template.md`
- `.gitignore`
- `.markdownlint-cli2.jsonc`
- `LICENSE`
- `markdownlint-rules/fenced-code-closed.cjs`
- `package-lock.json`
- `package.json`
- `requirements-dev.txt`
- `ruff.toml`
- `tests/fixtures/yaml-stream.yaml`
- `tests/link-validation.test.mjs`
- `tests/link-validation/README.md`
- `tests/link-validation/contract.json`
- `tests/link-validation/import-control.mjs`
- `tests/link-validation/native-control.mjs`
- `tests/markdown-rules.test.cjs`
- `tools/check-links.mjs`
- `tools/link-frontmatter.mjs`

### Adapted copy

These copies are intentionally maintained for this repository. Do not overwrite
them automatically during an upstream update.

- `README.md`: library purpose, usage, authority and release boundary; retains setup guidance.
- `CONTRIBUTING.md`: local contribution and artifact contract alongside upstream validation guidance.
- `MAINTAINING.md`: repository-local release procedure adapted from the later
  revision recorded under [release-maintenance reconciliation](#release-maintenance-reconciliation).
- `AGENTS.md`: repository-specific work routing and authorized implementation boundary.
- `SECURITY.md`: actual issue-based contact route and revision-based reporting, with no runtime support claim.
- `.pre-commit-config.yaml`: all upstream hooks unchanged, plus the two local artifact-check commands.
- `.github/workflows/validate.yml`: checkout explicitly binds to the PR head SHA
  (or push SHA), so hosted qualification tests the exact candidate rather than
  a synthetic merge revision; the upstream validation steps remain unchanged.

### Local

The following material is locally owned. Operational prose is synthesized from
the accepted plan and referenced design sources, not a copied normative standard.
The validator and tests implement only the local canonical artifact contract.

- `PROVENANCE.md`
- `scripts/validate_local.py`
- `tests/test_validate_local.py`
- `handoffs/implementation-to-review.md`
- `handoffs/planning-to-implementation.md`
- `handoffs/return-of-control.md`
- `handoffs/review-to-correction.md`
- `handoffs/review-to-publication.md`
- `roles/implementation.md`
- `roles/independent-review.md`
- `roles/planning.md`
- `roles/publication.md`
- `workflows/reviewed-change.md`

## Release-maintenance reconciliation

The reconciliation from the initial v1.0.2 export through v1.2.1 covers the
three upstream commits introducing release guidance, restoring default-branch
ruleset guidance, and standardizing release titles.

- `MAINTAINING.md`: adapted release guidance with this repository's identity,
  pre-1.0 policy, qualification commands, candidate/publication distinction,
  and separate human release authority. It includes remote annotated-tag
  verification before and after release publication and complete-tag release
  titles. Upstream repository-specific tag history is not imported.
- `CONTRIBUTING.md`: includes the maintenance pointer and the requirement to
  reconcile required-check identity, source, and triggers with live protection.
- `README.md`: upstream template-instantiation instructions do not apply to this
  operational library. Local usage, setup, versioning, and maintenance routing
  remain adapted; current release discovery uses the releases page.
- `rulesets/`: upstream host-configuration guidance is referenced rather than
  copied into the library. Host protection is verified separately from file
  correspondence; recording this basis does not change live settings.
- All 21 exact-copy files match the current basis. Other adapted files retain
  their documented local differences, including the two local artifact checks
  and exact-candidate CI checkout. No generic validation implementation changes
  are required by this source delta.

The release procedure was initially adapted from upstream revision
[`4f848f29e9021a9f9b19a81a3a83436113880d97`](https://github.com/jamesreimer/repo-template/tree/4f848f29e9021a9f9b19a81a3a83436113880d97).
This history is retained separately from the current reconciled baseline.

## Release-title reconciliation

The current generic basis supplies the complete-tag display convention already
incorporated into the local procedure and read-back checks. Semantic Versioning
controls version numbers, not display titles. The convention does not change
immutable tag identity, pre-1.0 semantics, or consumer authority.

## Design and governance sources

Source: [jamesreimer/standards-templates](https://github.com/jamesreimer/standards-templates).
Current reviewed design/governance baseline: **v1.1.1**, immutable revision
[`df73ad31cdbb15210ad9670d669d3c567a79a1d3`](https://github.com/jamesreimer/standards-templates/tree/df73ad31cdbb15210ad9670d669d3c567a79a1d3).
The creation authority directs their application within each subject. These are
reference relationships, not exact/adapted copies of normative texts. No normative
standard is copied wholesale or newly adopted on behalf of a consuming organization.

Canonical artifacts reference these entries and identify relevant source sections.
The five referenced standards are all at **template edition 1.0**. Their
`standard.md` text is byte-identical to the initial design baseline, **v1.0.1**
([`20cae71189ae84937b02817b475ee5032531262b`](https://github.com/jamesreimer/standards-templates/tree/20cae71189ae84937b02817b475ee5032531262b)).
The intervening template-edition metadata, repository actor-neutrality guidance,
local naming validation, and release-maintenance changes do not require changes
to this library's roles, handoffs, or workflow. The operational library continues
to consume actor-neutral standards without redefining their requirements.

The exact revision links resolve the reviewed source text; consumers map the
relationship to their actual adopted/project authority rather than treating this
source record as authority over them.

### Architectural Reasoning

[Source standard](https://github.com/jamesreimer/standards-templates/blob/df73ad31cdbb15210ad9670d669d3c567a79a1d3/templates/architectural-reasoning/standard.md).
Authority interpretation, responsibility, proportional architecture, dependencies, and architectural completion including material finding dispositions.

### Operational Execution Contract

[Source standard](https://github.com/jamesreimer/standards-templates/blob/df73ad31cdbb15210ad9670d669d3c567a79a1d3/templates/operational-execution-contract/standard.md).
Consequential execution scope, minimum contract content, established paths, protected boundaries, validation, recovery, and return reporting.

### Shared Asset Provenance

[Source standard](https://github.com/jamesreimer/standards-templates/blob/df73ad31cdbb15210ad9670d669d3c567a79a1d3/templates/shared-asset-provenance/standard.md).
Source identity, immutable consumed state, content correspondence, relationship semantics, and required shared targets.

### Project Repository Responsibility

[Source standard](https://github.com/jamesreimer/standards-templates/blob/df73ad31cdbb15210ad9670d669d3c567a79a1d3/templates/project-repository-model/standard.md).
Placement of canonical artifacts, work records, planning state, and responsibility-based repository separation.

### Standards Adoption Model

[Source standard](https://github.com/jamesreimer/standards-templates/blob/df73ad31cdbb15210ad9670d669d3c567a79a1d3/templates/standards-adoption-model/standard.md).
Deliberate adoption, existing authority and conflicts, independent governance, provenance, and review of later upstream changes.

## Verification and later changes

For each exact-copy path, compare its bytes with `git show <source-revision>:<path>`
from the verified source repository. A tag, this table, or a local directory name
alone is not correspondence evidence. For adapted copies, inspect the intentional
difference and ensure unchanged upstream mechanics remain intact. Record candidate
identity and comparison results in the implementation PR or project record.

npm's lockfile identifies installed validation dependencies; pre-commit and Actions
revisions are pinned in their configurations. Installed environments are not
canonical source copies. No generated workflow or synchronization layer exists.

There is **no automatic synchronization**. Review upstream changes deliberately,
including source authority, scope, dependent artifacts, exact-copy comparisons,
adapted differences, validation, and consumer impact. A source update neither
rewrites project authority nor authorizes publication. Consumer instances and
findings remain with the consuming project; source records here are not live
example tasks.
