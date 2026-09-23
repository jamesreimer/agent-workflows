# Implementation → Review

## Governing sources

- [Architectural Reasoning (AR)](../PROVENANCE.md#architectural-reasoning), §§4–12.
- [Operational Execution Contract (OEC)](../PROVENANCE.md#operational-execution-contract), §§5–12.1.
- [Shared Asset Provenance (SAP)](../PROVENANCE.md#shared-asset-provenance), §§5–8, 15.1.

These are design-source references, operationalized only where the consuming
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

Verify that consumed content corresponds to the declared immutable candidate;
working changes cannot masquerade as that state (SAP §§5–8). Evaluate the actual
result against applicable authority, not unbinding forecasts (AR §§4–12).

## Workflow-local operational guidance

Act as the [independent review role](../roles/independent-review.md). Inspect the
candidate below and assess whether its actual behavior and evidence satisfy the
authorized intent. Review does not authorize mutations or publication.

| Input | Project-local value |
| --- | --- |
| Target and review request | `<repository>`, `<issue>`, `<bounded-review-question>` |
| Review authority and independence | `<project-review-contract-and-reviewer-eligibility>` |
| Governing authority and implementation contract | `<actual-governing-sources>`; `<settled-objective-scope-protections-validation-and-completion>` |
| Candidate and comparison base | `<commit-sha>`; `<base-commit-sha>` |
| Content correspondence | `<clean-checkout-or-object-verification-evidence>` |
| Actual change and affected consumers | `<change-summary-and-material-effects>` |
| Validation | `<commands-results-and-exact-tested-state>` |
| Provenance and required targets | `<source-identity-correspondence-and-resolution-evidence>` |
| Deviations, findings, and limitations | `<rationale-existing-dispositions-and-unresolved-conditions>` |
| Review completion and return | `<review-deliverable-and-return-destination>` |

Return a supported conclusion tied to the inspected state, findings with their
material effects and dispositions, evidence gaps, and authorized next steps.
Use [review → correction](review-to-correction.md),
[review → publication](review-to-publication.md), or
[return of control](return-of-control.md) as the result warrants. Publication
readiness and publication authorization remain distinct conclusions.
