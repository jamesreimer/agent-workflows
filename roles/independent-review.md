# Independent Review

## Governing sources

- [Architectural Reasoning (AR)](../GOVERNING-SOURCES.md#architectural-reasoning), §§4–12.
- [Operational Execution Contract (OEC)](../GOVERNING-SOURCES.md#operational-execution-contract), §§6–12.
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
