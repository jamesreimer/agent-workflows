# Independent Review

## Governing sources

- [Architectural Reasoning (AR)](../GOVERNING-SOURCES.md#architectural-reasoning), §§4–12.
- [Operational Execution Contract (OEC)](../GOVERNING-SOURCES.md#operational-execution-contract), §§2, 4–17.
- [Shared Asset Provenance (SAP)](../GOVERNING-SOURCES.md#shared-asset-provenance), §§5–11, 15.1.

These references trace source-derived guidance and the origins of local mechanics;
they do not adopt standards for the consumer. Source-derived guidance applies only
where actually applicable governing authority gives it force, at its original
strength and scope. A project may explicitly incorporate a rule or adopt a source;
merely having a local authorizer does not adopt the linked standards. Selecting the workflow selects its documented local
mechanics, not organizational normative adoption or permission to act. Neither
category overrides governing requirements; proportionality cannot remove required
content or effect. The local instructions below support use without Standards
Templates adoption or access to the [README](../README.md#authority-and-source-status).

## Source-derived guidance

Evaluate the actual candidate against applicable authority, architectural intent,
responsibility boundaries, and evidence (AR §§4–12), retaining the distinction
between implementation choices and governing requirements. A forecast is binding
only to the extent legitimate authority made it a constraint.

Before architectural completion is claimed, give material findings explicit
dispositions: correction, bounded follow-up, acceptance or deferral with rationale,
or dismissal with rationale. Blocking classification alone is not a disposition,
and non-blocking classification alone does not justify deferral (AR §12).
Disposition does not waive another completion condition or confer execution
authority (AR §12; OEC §§6–11).

Verify actual consumed candidate state and required shared inputs where SAP
§§5–8 and 15.1 apply. A commit identifier alone is not content verification.

## Workflow-local operational guidance

Record governing standards, versions, and scope, or `Standards Templates: not
adopted`, separately from the actual local authorizer and contract. For alternative
standards, record accept/adapt/reject for affected mechanics, the reason, controlling
authority, decision owner, and record location. Resolve material conflicts before
dependent work; another policy does not automatically replace or add to every step.

Check and report whether work that may materially affect protected systems, data,
externally relied-upon artifacts, publication state, access, or similarly
consequential interests had a reviewed, explicitly authorized contract with
objective, scope, completion boundary, validation, and materially necessary
protected boundaries. This local threshold is informed by [OEC §§4–5](../GOVERNING-SOURCES.md#operational-execution-contract).
`Not adopted` does not remove it. Complexity alone is not a trigger; low-consequence
work may use a lighter instruction. Assess actually applicable OEC scope as well:
this shorthand cannot narrow it, and any additional workflow coverage remains local.
Stop before actions lacking authority, including publication or live activation
(putting a change into operational use). Legitimate local authority may adapt or
replace the workflow with recorded responsibility and appropriate protections;
silently dropping safeguards is not unchanged use.

Check/report superseded-contract reliance, unauthorized expansion, weakened defective
protections, unjustified privileged escalation, and separately owned defects blocking
safe execution. Report unresolved conditions to their owner; do not execute or
authorize a correction through this check (local safeguards informed by OEC §§8–10).

For a governed upstream asset, immutable input, exact copy, or required target,
identify the legitimate source and exact revision or object-appropriate immutable
identity; verify correspondence of the actual consumed content, accounting for
declared transformations or adaptations. A branch, path, or label alone is not proof.
Resolve required targets in the intended consumer context, including dependencies
of those targets to the extent relied upon; verify their identities and correspondence. A producer's valid reference alone is
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

The selected role remains active until project/user authority explicitly
reassigns it or an instantiated handoff transfers responsibility within that
authority. Generic `proceed`, `continue`, or equivalent language continues only
within the current role, authority, and completion boundary; it neither transfers
roles nor authorizes another role's actions. When the next required action belongs
to another role, stop and return an instantiated, ready-to-use handoff for that
role. Preparing that handoff does not itself authorize the sender to execute it.

Use the [implementation handoff](../handoffs/implementation-to-review.md) and
inspect its immutable candidate and evidence. The project determines whether
independence is required and who may supply it; when required, implementor
self-checks do not substitute. Review supplies findings and a supported conclusion,
not permission to implement, merge, or publish.

Do not mutate or correct the candidate during review, even when a fix is obvious.
Return an instantiated correction handoff to an authorized implementor; findings
do not transfer the reviewer into implementation.

Carry all material finding dispositions into either
[correction](../handoffs/review-to-correction.md) or
[publication](../handoffs/review-to-publication.md), including accepted, deferred,
and dismissed findings. Retain rationale, decision authority, remaining effects,
and any follow-up owner or trigger. If no next action is authorized, return control.

For the reviewed-change composition, corrections receive re-review proportionate
to changed behavior, dependencies, and evidence before relying on the new state.
This is workflow-local operational guidance, not a general Review Standard.
Use [return of control](../handoffs/return-of-control.md) for incomplete reviews,
missing evidence, new boundary decisions, and final review results.
