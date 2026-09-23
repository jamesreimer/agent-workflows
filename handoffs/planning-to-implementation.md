# Planning → Implementation

## Governing sources

- [Architectural Reasoning (AR)](../GOVERNING-SOURCES.md#architectural-reasoning), §§4–12.
- [Operational Execution Contract (OEC)](../GOVERNING-SOURCES.md#operational-execution-contract), §§2, 4–13, 17.
- [Shared Asset Provenance (SAP)](../GOVERNING-SOURCES.md#shared-asset-provenance), §§5–8, 15.1.

These are governing-source references, operationalized only where the consuming
project's actual adopted or project authority makes them applicable. Record that
authority and its scope in the project-local instance. Linking a source does not
adopt it. Source-derived guidance retains the source's requirement strength;
workflow-local operational guidance is selected implementation practice, not
organization-neutral authority. Neither category may strengthen or weaken a
governing requirement. Proportionality changes expression, not required presence
or effect. See [authority and source status](../README.md#authority-and-source-status).

## Source-derived guidance

When OEC applies, the referenced reviewed contract supplies objective, authorized
scope, completion boundary, required validation, and protected boundaries whose
accidental modification creates material risk (§§4–5, 10). Preserve recovery
expectations when §13 applies and relevant §5 recommendations with their original
strength. Do not omit a mandatory element or neutralize its effect to shorten a
handoff. Outside OEC scope, the project may select a lighter workflow-local form.
No blank placeholder is an authorization or evidence of an irrelevant concern.

Use settled authority and responsibility boundaries to distinguish constraints
from implementation expectations (AR §§4–8). Govern shared-source identity and
required inputs under SAP §§5–8, 15.1. Stop affected execution before material
scope expansion or reliance on a superseded model (OEC §8).

## Workflow-local operational guidance

Act as the [implementation role](../roles/implementation.md). Complete the
bounded objective below, using the referenced authority and current evidence.
Choose mechanics within controlling constraints; a forecast is not an exact-change
restriction unless deliberately identified as one. Do not proceed into an
unauthorized merge, publication, deployment, or adjacent project.

| Input | Project-local value |
| --- | --- |
| Target and source of truth | `<repository>`, `<issue>`, `<canonical-records>` |
| Objective and accepted architectural result | `<outcome-and-settled-design>` |
| Authority and scope | `<authorizer-and-reviewed-contract>`; `<permitted-actions-and-consequences>` |
| Governing sources and applicability | `<actual-project-authority-and-versions>`; `<OEC-scope-assessment>` |
| Protected interests | `<protected-boundaries-and-effects>` |
| Completion boundary | `<condition-at-which-to-stop>` |
| Validation and acceptance evidence | `<required-checks-and-evidence>` |
| Recovery, risks, prerequisites, dependencies | `<applicable-expectations-or-explained-inapplicability>` |
| Required source inputs | `<source-identities-immutable-states-and-correspondence-evidence>` |
| Controlling implementation constraints | `<justified-boundaries-including-any-deliberate-exact-change-restriction>` |
| Planning expectations | `<nonbinding-file-or-technique-forecast-if-useful>` |
| Return destination | `<decision-owner-and-project-record>` |

Resolve missing material authority or contract content before dependent execution.
Deliver actual resulting state, candidate identity, evidence, deviations and their
consequences, and remaining conditions using
[implementation → review](implementation-to-review.md) when review is the next
boundary, or [return of control](return-of-control.md) otherwise.
