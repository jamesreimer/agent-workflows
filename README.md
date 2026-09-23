# Agent Workflows

[![Repository validation](https://github.com/jamesreimer/agent-workflows/actions/workflows/validate.yml/badge.svg?branch=main)](https://github.com/jamesreimer/agent-workflows/actions/workflows/validate.yml?query=branch%3Amain)
[![License: CC0-1.0](https://img.shields.io/badge/license-CC0--1.0-blue)](LICENSE)

A library of reusable operational artifacts for bounded agent-assisted work.
It preserves responsibility, authority, evidence, and return-of-control integrity
across assisted execution. It is not an agent runtime, orchestration engine, or
universal human workflow framework, and implies no affiliation with similarly
named projects.

## Responsibility

This library owns operational role profiles, blank handoffs, and workflow
compositions. It does not own organization-neutral standards, organizational job
roles, execution or publication authority, or a consuming project's work state.
The library has an independent lifecycle so operational practice can evolve
without silently revising governing standards.

| Class | Canonical artifacts |
| --- | --- |
| Role profiles | [Planning](roles/planning.md), [Implementation](roles/implementation.md), [Independent review](roles/independent-review.md), [Publication](roles/publication.md) |
| Handoff templates | [Planning → implementation](handoffs/planning-to-implementation.md), [Implementation → review](handoffs/implementation-to-review.md), [Review → correction](handoffs/review-to-correction.md), [Review → publication](handoffs/review-to-publication.md), [Return of control](handoffs/return-of-control.md) |
| Workflow compositions | [Reviewed change](workflows/reviewed-change.md) |

The first composition does not define the permanent lifecycle of every workflow.
Roles identify responsibilities; they do not require four separate actors.
Independent review, when required, cannot be replaced by an implementor's own
checks. The consuming authority determines permitted role occupancy.

## Authority and source status

Actual adopted standards and project authority control the instantiated workflow.
The [pinned governing sources](GOVERNING-SOURCES.md) define the interpretation
of this library's source-derived guidance; referencing them does not adopt them
for a consumer. Pins are immutable within an Agent Workflows release. Later
Standards Templates releases do not automatically change those pins or that release.
The Standards Adoption Model owns that distinction.

Every canonical artifact contains `Governing sources`. Sourced operational
statements are grouped under `Source-derived guidance` with the relevant source
and section. Instructions without organization-neutral authority appear under
`Workflow-local operational guidance`. Those local mechanics apply only when
the project deliberately selects them as implementation authority. A heading's
status extends to its subsections and tables; there is no unmarked third category.

Workflow artifacts must neither strengthen nor weaken a governing requirement.
Preserve its applicability and normative force: a recommendation does not become
a universal obligation, and a mandatory element cannot become optional.
Proportionality may reduce depth, verbosity, or ceremony, never required presence
or effect. OEC-scoped consequential work retains its required contract content;
outside that scope, lightweight workflow-local forms may be sufficient.

## Use and instantiation

The following is workflow-local operational guidance for using this library:

1. Select an immutable library revision and a composition appropriate to the work.
   Review the actual project authority, overlap, and conflicts before choosing
   these artifacts as implementation authority; do not treat this step as
   organizational adoption of the referenced standards.
2. Read the role and handoff with their linked sources. Map governing-source
   references to the project's actual governing versions and scope. Record
   material adaptations and conflicts; return unresolved authority questions to
   their legitimate owner before dependent execution.
3. Instantiate a handoff in the consuming project's record, replacing angle-bracket
   placeholders with the actual target, authority, contract, evidence, and return
   destination. Refer to a settled contract rather than repeating its history.
   Check that required linked inputs are accessible to the recipient. When
   copying a template out of the library, resolve its relative links against the
   selected immutable library revision or supply the linked artifacts with it.
4. Give the recipient the instantiated handoff and applicable role. The handoff
   itself is the agent instruction; a separate prompt layer is unnecessary.
5. Retain resulting decisions and execution evidence in the consuming project's
   appropriate canonical or work records. Review upstream changes deliberately;
   never let a moving branch or tag silently update an active instruction.

Canonical examples use placeholders such as `<repository>`, `<issue>`,
`<commit-sha>`, and `example-project`. Filled issue numbers, candidate SHAs,
task prompts, findings, execution logs, and publication decisions remain
project-local. Real immutable source identities in [GOVERNING-SOURCES.md](GOVERNING-SOURCES.md)
are source records, not example task values.

## Versioning

Repository-local release guidance: use pre-1.0 versions while the operational
model is pressure-tested. See the [latest published release](https://github.com/jamesreimer/agent-workflows/releases/latest)
for the current distribution. A Working candidate is not a release.
Before `v1.0.0`, obtain evidence from at least one structurally different workflow
composition, alongside stable boundaries, authority interpretation, handoff
semantics, and deliberate consumer updates. Repeating reviewed-change in more
projects alone does not meet that evidence need. No arbitrary adoption count
is required.

Follow [MAINTAINING.md](MAINTAINING.md) to prepare, qualify, and publish an
authorized release. It defines the annotated-tag and publication verification
procedure; passing validation does not authorize a release.

## Run checks

Install Python 3.10 or later and Node.js 24.18.1 (including npm):

```sh
npm ci --ignore-scripts
python3 -m venv .venv
.venv/bin/python -m pip install -r requirements-dev.txt
git add <intended-paths>
.venv/bin/pre-commit run --all-files --show-diff-on-failure
git diff --check
npm audit
```

On Windows use `.venv\Scripts\python.exe` and
`.venv\Scripts\pre-commit.exe`. Initial installation needs network access;
required link checking is offline. Review hook fixes and rerun. Optional commit
hooks use `.venv/bin/pre-commit install`; they do not replace all-files checks.

The [contributor guide](CONTRIBUTING.md) explains validation ownership and its
limits. [Governing sources](GOVERNING-SOURCES.md) resolve the pinned dependencies
of source-derived guidance.
The library is dedicated under [CC0-1.0](LICENSE).
