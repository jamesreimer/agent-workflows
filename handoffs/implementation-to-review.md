# Implementation → Review

## Governing sources

- [Architectural Reasoning (AR)](../GOVERNING-SOURCES.md#architectural-reasoning), §§4–12.
- [Operational Execution Contract (OEC)](../GOVERNING-SOURCES.md#operational-execution-contract), §§2, 4–17.
- [Shared Asset Provenance (SAP)](../GOVERNING-SOURCES.md#shared-asset-provenance), §§5–11, 15.1.

These references trace source-derived guidance and the origins of local mechanics;
they do not adopt standards for the consumer. Source-derived guidance applies only
where actual adopted standards or project authority make it applicable, at its
original force and scope. Selecting the workflow selects its documented local
mechanics, not organizational normative adoption or permission to act. Neither
category overrides governing requirements; proportionality cannot remove required
content or effect. The local instructions below support use without Standards
Templates adoption or access to the [README](../README.md#authority-and-source-status).

## Source-derived guidance

For an applicable OEC edition, assess its actual scope, not adoption status alone
or the workflow shorthand below. The pinned OEC §2 covers material effects on
live systems, shared services/infrastructure, runtime configuration, protected
data, secrets/credentials, provider state, deployment/activation, backup/restore/
migration/recovery, administration, published/externally consumed artifacts, security configuration,
difficult-to-reverse operations, and comparable operational harm. OEC §§4–5
require a reviewed execution contract before that consequential activity, with
objective, authorized scope, completion boundary, validation, and protected
boundaries whose accidental modification creates material risk (§10). Complexity
alone must not trigger it; simple work with material consequences cannot bypass it.
OEC §16 separately permits narrowly bounded emergency action when delay would
create greater material harm; this workflow supplies no emergency authorization.

OEC §5 recommends, where relevant, non-goals, acceptance criteria, material risks,
recovery expectations, prerequisites, evidence, sequencing, and dependencies on
other authorized actions. These remain recommendations except where a separate
requirement applies: §13 requires recovery expectations for material state that
is difficult to reverse, destructive, externally consequential, or operationally
risky. If no practical rollback exists, state that fact; compensating recovery or
containment is recommended. Concise expectations can suffice for simple rollback;
fictional rollback is not required. Proportionality cannot remove required content
or effect, and genuinely irrelevant concepts need no empty sections.

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

Record governing standards, versions, and scope, or `Standards Templates: not
adopted`, separately from the actual local authorizer and contract. For alternative
standards, record accept/adapt/reject for affected mechanics, the reason, controlling
authority, decision owner, and record location. Resolve material conflicts before
dependent work; another policy does not automatically replace or add to every step.

Before this workflow's work may materially affect protected systems, data,
externally relied-upon artifacts, publication state, access, or similarly
consequential interests, require a reviewed, explicitly authorized contract with
objective, scope, completion boundary, validation, and materially necessary
protected boundaries. This local threshold is informed by [OEC §§4–5](../GOVERNING-SOURCES.md#operational-execution-contract).
`Not adopted` does not remove it. Complexity alone is not a trigger; low-consequence
work may use a lighter instruction. Assess actually applicable OEC scope as well:
this shorthand cannot narrow it, and any additional workflow coverage remains local.
Stop before actions lacking authority, including publication or live activation
(putting a change into operational use). Legitimate local authority may adapt or
replace the workflow with recorded responsibility and appropriate protections;
silently dropping safeguards is not unchanged use.

For a governed upstream asset, immutable input, exact copy, or required target,
identify the legitimate source and exact revision or object-appropriate immutable
identity; verify correspondence of the actual consumed content, accounting for
declared transformations or adaptations. A branch, path, or label alone is not proof.
Resolve required targets in the recipient's context and verify their identities
and correspondence where relied upon. A producer's valid reference alone is
insufficient: missing or inconsistent required targets leave dependent work
incomplete. Preserve adaptations; do not claim changed bytes are exact copies.
These workflow checks are informed by [SAP §§5–11, 15.1](../GOVERNING-SOURCES.md#shared-asset-provenance).
Informative links need not become required targets. Retain evidence in the project
record; provenance does not grant authority.

Check recovery expectations when the candidate's work can create difficult-to-reverse,
destructive, externally consequential, or operationally risky state. If no practical
rollback exists, expect that fact and consideration of containment, not fictional
rollback. This local check is informed by [OEC §13](../GOVERNING-SOURCES.md#operational-execution-contract);
review grants no authority to perform recovery.

Act as the [independent review role](../roles/independent-review.md). Inspect the
candidate below and assess whether its actual behavior and evidence satisfy the
authorized intent. Review does not authorize mutations or publication.

Implementation owns required validation through its final result. Issue this
handoff as review-ready only when all required local and hosted checks have
reached final success for the exact candidate. Pending, queued, in-progress,
cancelled, unexpectedly skipped, or otherwise unresolved checks do not qualify;
an open PR is insufficient. Final non-success leaves the candidate incomplete:
Implementation corrects and revalidates if already authorized, or returns control
with the failure. An interruption report is not a review-ready handoff.

The receiving reviewer does not mutate or correct the candidate. Route corrections
to authorized Implementation through an instantiated correction handoff.

Use relevant fields proportionately. A table row does not turn recommended
context into a mandatory condition. Preserve required controls and explain material
inapplicability; an empty placeholder supplies neither authority nor evidence.

| Input | Project-local value |
| --- | --- |
| Target and review request | `<repository>`, `<issue>`, `<bounded-review-question>` |
| Review authority and independence | `<project-review-contract-and-reviewer-eligibility>` |
| Governing authority and implementation contract | `<governing-standards-versions-and-scope-or-Standards-Templates-not-adopted>`; `<settled-objective-scope-protections-validation-and-completion>` |
| Candidate and comparison base | `<commit-sha>`; `<base-commit-sha>` |
| Content correspondence | `<clean-checkout-or-object-verification-evidence>` |
| Actual change and affected consumers | `<change-summary-and-material-effects>` |
| Validation | `<required-checks-commands-final-success-results-evidence-and-exact-tested-state>` |
| Provenance and required targets | `<source-identity-correspondence-and-resolution-evidence>` |
| Deviations, findings, and limitations | `<rationale-existing-dispositions-and-unresolved-conditions>` |
| Review completion and return | `<review-deliverable-and-return-destination>` |

Return a supported conclusion tied to the inspected state, findings with their
material effects and dispositions, evidence gaps, and authorized next steps.
Use [review → correction](review-to-correction.md),
[review → publication](review-to-publication.md), or
[return of control](return-of-control.md) as the result warrants. Publication
readiness and publication authorization remain distinct conclusions.
