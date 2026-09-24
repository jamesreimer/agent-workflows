# Review → Correction

## Governing sources

- [Architectural Reasoning (AR)](../GOVERNING-SOURCES.md#architectural-reasoning), §§5, 8, 11–12.
- [Operational Execution Contract (OEC)](../GOVERNING-SOURCES.md#operational-execution-contract), §§5–13.
- [Shared Asset Provenance (SAP)](../GOVERNING-SOURCES.md#shared-asset-provenance), §§5–8.

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

Where architectural completion is claimed, retain a disposition for each
material finding (AR §12): correction, bounded follow-up, explicit acceptance or
deferral with rationale, or dismissal with rationale. Preserve who legitimately
made the decision, evidence, remaining consequence, and follow-up where relevant.
A blocking/non-blocking label alone is insufficient; a disposition neither waives
other completion conditions nor authorizes new work (AR §12; OEC §§6–11).

Distinguish correction already within scope from separately discovered defects
requiring new authority (OEC §§8–9; AR §§5, 11). A review finding alone grants no
mutation authority. Preserve immutable-state correspondence (SAP §§5–8).

## Workflow-local operational guidance

Act as the [implementation role](../roles/implementation.md) for the authorized
corrections below. Read the complete review and carry forward all material finding
dispositions, including findings not selected for correction. The reviewer returns
this instantiated handoff without mutating the candidate. The receiving
implementor verifies the supplied reviewed state before mutation and owns required
validation through final success before returning a review-ready new candidate;
see the [implementation role](../roles/implementation.md).

| Input | Project-local value |
| --- | --- |
| Target and reviewed state | `<repository>`, `<issue>`, `<commit-sha>` |
| Review record | `<review-evidence-and-conclusion>` |
| Correction authority and contract | `<authorizer-and-contract>`; `<objective-scope-protections-validation-completion-and-applicable-recovery>` |
| Applicable source authority | `<actual-governing-sources-and-scope>` |
| Authorized corrections | `<findings-and-required-outcomes>` |
| All material finding dispositions | `<finding-disposition-rationale-authority-evidence-and-remaining-effect>` |
| Bounded follow-up | `<owner-record-and-trigger-for-retained-work-or-none>` |
| Re-review scope | `<changed-effects-and-evidence-to-reassess>` |
| Return destination | `<reviewer-or-decision-owner-and-project-record>` |

Choose proportionate mechanics inside the correction contract. Return the new
immutable state, change from the reviewed state, validation, and updated finding
dispositions through [implementation → review](implementation-to-review.md).
For reviewed-change, obtain re-review proportionate to changed effects before
relying on the new candidate. This re-review rule is workflow-local operational
guidance. Return control if correction would exceed authority; do not discard an
accepted, deferred, or dismissed finding merely because another one was fixed.
