# Review → Correction

## Governing sources

- [Architectural Reasoning (AR)](../GOVERNING-SOURCES.md#architectural-reasoning), §§5, 8, 11–12.
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

Distinguish correction already within scope from separately discovered defects
requiring new authority (OEC §§8–9; AR §§5, 11). A review finding alone grants no
mutation authority. Preserve immutable-state correspondence (SAP §§5–8).

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

When work could create difficult-to-reverse, destructive, externally consequential,
or operationally risky state, record recovery expectations before the affected
action. If reversal is impractical, say so and consider containment or compensating
recovery; do not invent rollback. This is a workflow-local safeguard informed by
[OEC §13](../GOVERNING-SOURCES.md#operational-execution-contract), not authority
to perform recovery outside the contract.

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

Act as the [implementation role](../roles/implementation.md) for the authorized
corrections below. Read the complete review and carry forward all material finding
dispositions, including findings not selected for correction. The reviewer returns
this instantiated handoff without mutating the candidate. The receiving
implementor verifies the supplied reviewed state before mutation and owns required
validation through final success before returning a review-ready new candidate;
see the [implementation role](../roles/implementation.md).

Use relevant fields proportionately. A table row does not turn recommended
context into a mandatory condition. Preserve required controls and explain material
inapplicability; an empty placeholder supplies neither authority nor evidence.

| Input | Project-local value |
| --- | --- |
| Target and reviewed state | `<repository>`, `<issue>`, `<commit-sha>` |
| Review record | `<review-evidence-and-conclusion>` |
| Correction authority and contract | `<authorizer-and-contract>`; `<objective-scope-protections-validation-completion-and-applicable-recovery>` |
| Applicable source authority | `<governing-standards-versions-and-scope-or-Standards-Templates-not-adopted>` |
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
