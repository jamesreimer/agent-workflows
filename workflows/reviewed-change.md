# Reviewed Change

## Governing sources

- [Publication and Release Integrity (PRI)](../GOVERNING-SOURCES.md#publication-release-integrity), §§4–17.
- [Architectural Reasoning (AR)](../GOVERNING-SOURCES.md#architectural-reasoning), §§4–12.
- [Operational Execution Contract (OEC)](../GOVERNING-SOURCES.md#operational-execution-contract), §§2, 4–15, 17.
- [Shared Asset Provenance (SAP)](../GOVERNING-SOURCES.md#shared-asset-provenance), §§5–8, 15.1.
- [Project Repository Responsibility (PRR)](../GOVERNING-SOURCES.md#project-repository-model), §§5–9.
- [Standards Adoption Model (SAM)](../GOVERNING-SOURCES.md#standards-adoption-model), §§3–8.

These are governing-source references, operationalized only where the consuming
project's actual adopted or project authority makes them applicable. Record that
authority and its scope in the project-local instance. Linking a source does not
adopt it. Source-derived guidance retains the source's requirement strength;
workflow-local operational guidance is selected implementation practice, not
organization-neutral authority. Neither category may strengthen or weaken a
governing requirement. Proportionality changes expression, not required presence
or effect. See [authority and source status](../README.md#authority-and-source-status).

## Source-derived guidance

Applicable adopted/project authority governs throughout; merely selecting this
composition does not adopt its governing sources (SAM §§3–8). Establish the
responsibility, authority, proportional architecture, and affected dependencies
before treating the model as settled (AR §§4–12).

When OEC applies, preserve the reviewed execution contract's objective, scope,
completion boundary, validation, and materially necessary protected boundaries
(§§4–5, 10), including recovery expectations when §13 applies. Reduce expression
proportionately without dropping required content or effect. Outside OEC scope,
lightweight workflow-local instructions can suffice. Implementation mechanics
remain bounded by the contract; forecasts do not themselves add authority
(OEC §§6–9). Every stage stops before exceeding its authority and at its completion
boundary; validation and review do not grant publication or live-operation
permission (OEC §§6–12, 14–15).

Architectural completion requires supported conclusions and explicit material
finding dispositions, including retained follow-up, accepted or deferred findings
with rationale, and dismissals with rationale (AR §12). No disposition waives
another completion condition. Verify shared-source identities, correspondence,
and required targets where SAP §§5–8 and 15.1 apply. Keep project decisions and
work state in their appropriate records (PRR §§5–9). Reporting completed or
interrupted work belongs across roles (OEC §12.1), not exclusively to publication.

For publication within PRI scope, apply its transition, correspondence, identity,
and resulting-state verification requirements (§§4–9, 14), including its rules for
identity stability, corrections, withdrawal, and partial exposure (§§10–13).
Use applicable SAP provenance semantics rather than a separate correspondence
model (PRI §15); preserve downstream authority and proportionality (§§16–17).

## Workflow-local operational guidance

Select this composition when a change benefits from an explicit review boundary.
It does not impose independent review on all work. The project specifies any
required independence and reviewer eligibility; required independent review
cannot be replaced by implementor checks. Four responsibilities need not mean
four people or agents. The project can combine already-authorized boundaries
without ceremonial reauthorization.

The selected role remains active until project/user authority explicitly
reassigns it or an instantiated handoff transfers responsibility within that
authority. Generic `proceed`, `continue`, or equivalent language continues only
within the current role, authority, and completion boundary; it neither transfers
roles nor authorizes another role's actions. When the next required action belongs
to another role, stop and return an instantiated, ready-to-use handoff for that
role. Preparing that handoff does not itself authorize the sender to execute it.

1. **Plan.** [Planning](../roles/planning.md) supplies
   [planning → implementation](../handoffs/planning-to-implementation.md).
   Set outcome, authority, ownership, protected behavior, and evidence expectations.
   Distinguish controlling constraints from predicted files and techniques.
   Stop with the instantiated handoff; Planning does not implement.
2. **Implement.** [Implementation](../roles/implementation.md) owns mechanics
   within those constraints. Before mutation, verify any supplied exact/approved
   source against its declared authoritative state using applicable SAP semantics;
   a candidate label alone is insufficient. Own required validation through a final
   result. Only final success of all required checks for the immutable candidate
   supports [implementation → review](../handoffs/implementation-to-review.md).
   Pending, queued, in-progress, cancelled, unexpectedly skipped, unresolved, or
   failed checks leave it incomplete; an open PR does not establish readiness.
   Correct and revalidate within existing authority or return incomplete state.
3. **Review.** [Independent review](../roles/independent-review.md) evaluates
   actual candidate state against authorized intent and evidence, rather than
   conformity to a nonbinding forecast. Carry every material finding's disposition
   and rationale; approval versus correction is not a complete findings record.
   Do not mutate the candidate; return the appropriate instantiated handoff.
4. **Correct when authorized.** Use
   [review → correction](../handoffs/review-to-correction.md) for bounded outcomes.
   Carry accepted, deferred, dismissed, and follow-up findings alongside corrections.
   Changes receive re-review proportionate to their effects and dependencies;
   record the new candidate identity and which prior conclusions remain supported.
   This re-review rule is workflow-local operational guidance, not a general
   Review Standard. Missing authority or unresolved conditions return to their owner.
5. **Publish only when authorized.**
   [Review → publication](../handoffs/review-to-publication.md) carries the reviewed
   identity, dispositions, checks, and actual publication authority to
   [publication](../roles/publication.md). Verify correspondence of the state about
   to be published to the reviewed state and satisfy publication conditions.
   Changed state returns to proportionate re-review, not silent substitution.
   Publication does not redesign the candidate. Where PRI applies, verify the
   resulting state against the authorized source and publication identities;
   assess observable partial exposure before retry and bound completion claims
   to the evidence. Return corrections through the authorized role handoff.
6. **Return from every boundary.** Use
   [return of control](../handoffs/return-of-control.md) on completion, interruption,
   missing authority, or a new material decision. Publication can be absent; all
   roles still return useful state, evidence, unresolved conditions, and follow-up.

Instantiated contracts, candidates, findings, and execution records remain with
the consuming project. This file supplies a reusable composition, not task state,
an execution engine, an organizational review policy, or release authorization.
