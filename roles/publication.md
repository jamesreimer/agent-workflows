# Publication

## Governing sources

- [Publication and Release Integrity (PRI)](../GOVERNING-SOURCES.md#publication-release-integrity), §§4–17.
- [Operational Execution Contract (OEC)](../GOVERNING-SOURCES.md#operational-execution-contract), §§6–8, 10–15.
- [Shared Asset Provenance (SAP)](../GOVERNING-SOURCES.md#shared-asset-provenance), §§5–8, 15.1, 20.
- [Architectural Reasoning (AR)](../GOVERNING-SOURCES.md#architectural-reasoning), §12.

These are governing-source references, operationalized only where the consuming
project's actual adopted or project authority makes them applicable. Record that
authority and its scope in the project-local instance. Linking a source does not
adopt it. Source-derived guidance retains the source's requirement strength;
workflow-local operational guidance is selected implementation practice, not
organization-neutral authority. Neither category may strengthen or weaken a
governing requirement. Proportionality changes expression, not required presence
or effect. See [authority and source status](../README.md#authority-and-source-status).

## Source-derived guidance

Establish authority for the particular publication action and its consequences;
implementation and review success are not that authorization (OEC §§6–7, 14).
Verify the actual input's correspondence to its immutable identity and all
required shared targets where authoritative consumption applies (SAP §§5–8,
15.1). Dispositions cannot hide unmet completion conditions (AR §12).

Stay within protected boundaries and stop if authority or required validation is
missing (OEC §§8, 10–12). Define recovery expectations where §13 applies. Neither
publication nor its validation authorizes live activation (OEC §14).
Completion and interruption reporting applies across executors under OEC §12.1;
it is not owned exclusively by publication.

Where PRI applies, use §§4–9 and 14–15 for transition completion, authorized-source
correspondence, identity binding, and verification of the resulting publication
state. Evidence must support the claimed completion; an initiating operation's
success alone is insufficient when the resulting state is observable (PRI §9).
Apply §§7–12 to fixed and moving identities, identity layers, and proposed
corrections or withdrawal. Assess possible observable exposure before retrying
a failed, interrupted, or premature publication (PRI §§4, 13). Use SAP for
applicable provenance semantics, and preserve separate downstream authority
(PRI §§15–16). Apply proportionality without waiving required integrity (PRI §17).

## Workflow-local operational guidance

The selected role remains active until project/user authority explicitly
reassigns it or an instantiated handoff transfers responsibility within that
authority. Generic `proceed`, `continue`, or equivalent language continues only
within the current role, authority, and completion boundary; it neither transfers
roles nor authorizes another role's actions. When the next required action belongs
to another role, stop and return an instantiated, ready-to-use handoff for that
role. Preparing that handoff does not itself authorize the sender to execute it.

Read the [review → publication](../handoffs/review-to-publication.md) handoff,
actual authorization, and reviewed candidate. Check that the state about to be
published is the reviewed state and that the project's publication conditions
are satisfied. If the candidate changed, route it through the composition's
proportionate re-review before relying on the review; do not silently substitute
bytes or conduct an unrequested redesign at publication time.

Perform only the authorized action. Return resulting object identities,
verification evidence, recovery performed, remaining conditions, and next owner
through [return of control](../handoffs/return-of-control.md). Publication is an
optional authorized boundary, not a prerequisite for reporting completed work.
