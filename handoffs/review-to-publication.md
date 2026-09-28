# Review → Publication

## Governing sources

- [Publication and Release Integrity (PRI)](../GOVERNING-SOURCES.md#publication-release-integrity), §§4–17.
- [Architectural Reasoning (AR)](../GOVERNING-SOURCES.md#architectural-reasoning), §12.
- [Operational Execution Contract (OEC)](../GOVERNING-SOURCES.md#operational-execution-contract), §§5–14.
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

Where architectural completion is claimed, retain a disposition for each
material finding (AR §12): correction, bounded follow-up, explicit acceptance or
deferral with rationale, or dismissal with rationale. Preserve who legitimately
made the decision, evidence, remaining consequence, and follow-up where relevant.
A blocking/non-blocking label alone is insufficient; a disposition neither waives
other completion conditions nor authorizes new work (AR §12; OEC §§6–11).

Publication requires its actual execution authority; review success alone does
not supply it (OEC §§6–7, 14). Verify the consumed object and required targets,
not only the identity label (SAP §§5–8, 15.1).

Where PRI applies, the publication inputs and resulting evidence must support
its authorized-state correspondence, identity binding, and verification conditions
(§§4–9, 14–15). Apply its identity-preservation and correction rules (§§10–12)
and account for observable publication state, including assessment of possible
exposure from a failed, interrupted, or premature publication, before replacing,
retrying, withdrawing, correcting, or claiming completion (§§4, 13).
Publication claims remain limited by evidence and independent downstream authority
(§§14–17); this handoff supplies no alternative provenance or authorization model.

## Workflow-local operational guidance

Act as the [publication role](../roles/publication.md) only for the authorized
action below. Read the full review and all carried finding dispositions. If
publication authority or a required condition is absent, report readiness and
return control without performing that action.

| Input | Project-local value |
| --- | --- |
| Target and destination | `<repository>`; `<publication-target>` |
| Reviewed immutable state | `<commit-sha-or-object-digest>` |
| Review record and conclusion | `<review-record-tied-to-that-state>` |
| All material finding dispositions | `<finding-disposition-rationale-authority-evidence-and-remaining-effect>` |
| Bounded follow-up | `<owner-record-and-trigger-for-retained-work-or-none>` |
| Publication authority and contract | `<authorizer-and-permitted-action>`; `<objective-scope-protections-validation-completion-and-applicable-recovery>` |
| Governing source applicability | `<actual-project-authority-and-versions>` |
| Authorized source state | `<precise-state-covered-by-publication-authority-and-relation-to-reviewed-state>` |
| Publication identities and surfaces | `<identities-fixed-or-moving-meanings-material-layers-and-authoritative-surfaces>` |
| Publication correspondence | `<reviewed-to-authorized-to-published-relationship-and-applicable-provenance-evidence>` |
| Completion and verification | `<intended-completion-resulting-state-checks-and-evidence-limits>` |
| Prior exposure and recovery | `<observable-state-assessment-and-authorized-retry-correction-or-withdrawal-or-inapplicability>` |
| Required checks and conditions | `<validation-review-and-publication-gates-with-evidence>` |
| Required shared targets | `<resolved-identities-and-correspondence-evidence>` |
| Return destination | `<decision-owner-and-project-record>` |

Check that the proposed publication state is the state reviewed. If it differs,
return it for proportionate re-review under the workflow-local reviewed-change
rule before relying on earlier review. Preserve the finding dispositions through
publication and use [return of control](return-of-control.md) to report resulting
identity, verification, unresolved conditions, and follow-up. Do not silently
extend publication into live activation or general project closeout.
