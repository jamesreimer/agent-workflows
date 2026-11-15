# Independent Review

## Governing sources

- [Architectural Reasoning (AR)](../GOVERNING-SOURCES.md#architectural-reasoning), §§4–13.
- [Operational Execution Contract (OEC)](../GOVERNING-SOURCES.md#operational-execution-contract), §§2, 4–17.
- [Shared Asset Provenance (SAP)](../GOVERNING-SOURCES.md#shared-asset-provenance), §§5–11, 15.1.
- [Review Integrity (RI)](../GOVERNING-SOURCES.md#review-integrity), §§2.2, 4–16.

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
responsibility boundaries, and evidence (AR §§4–13), retaining the distinction
between implementation choices and governing requirements. A forecast is binding
only to the extent legitimate authority made it a constraint.

Before architectural completion is claimed, material findings must receive explicit
dispositions under the applicable authority, which may include correction, bounded
follow-up, acceptance or deferral with rationale, or dismissal with rationale. Blocking classification alone is not a disposition,
and non-blocking classification alone does not justify deferral (AR §13).
Disposition does not waive another completion condition or confer execution
authority (AR §13; OEC §§6–11).

Verify actual consumed candidate state and required shared inputs where SAP
§§5–8 and 15.1 apply. A commit identifier alone is not content verification.

Challenge architectural targets called into question by material changes against current
requirements; prior implementation or review effort alone is not justification
(AR §9). For architectural conclusions, examine whether material assumptions are
distinguished from facts and known contrary evidence, credible competing explanations
and foreseeable failures have been examined (AR §12). A carried limitation must
qualify the conclusion or leave the architecture acceptable or with a practicable
response if realized. Validation depth and further disconfirming evidence should
be proportionate; no fixed experiment or new artifact is required (AR §12).

For consequential material interactions introduced or materially changed by execution,
check agreed interface expectations and distinguish component/fixture evidence from
actual interoperability. Representative actual exchanges, including adverse responses,
and examining both sides and the agreement on material failure are recommendations
where feasible and proportionate; missing exchange evidence must remain explicit
and cannot support completion when acceptance or safety could fail (OEC §§2, 11).

For review claims, identify subject, purpose, scope/coverage and reviewed state;
distinguish observed evidence from inference, missing/unperformed evidence, conflicts
and method limits where material (RI §§4–6). Resolve material contrary evidence
enough to support the claim or retain the limitation visibly (RI §6.1).
Depth should be proportionate (RI §7). Claims must stay within actual evidence and
authority; inability to inspect is not itself a candidate defect, and attribution
must not exceed the evidence (RI §§8–9). Report every in-scope material finding
and its effect on the conclusion. Reviewers may recommend dispositions; only a
competent authority acting in that capacity can make them valid (RI §10).
Narrow, qualify or leave unresolved any conclusion defeated by a material limitation;
examine enough adjacent/dependent evidence to support reliance or narrow the claim
(RI §§11–12). Earlier conclusions need applicability evidence for materially changed
state; reassessment depth should scale with the change (RI §13).
An independent claim cannot rest solely on the producer's conclusions or evidence
summary; trustworthy evidence may be reused, without reproducing every check
(RI §14). Review may finish with findings or a bounded/unresolved result; this is
not work readiness or authority. Results should retain proportionate support for
later reliance (RI §15). RI §§2.2 and 16 preserve AR's architectural conclusion and
disposition rules, OEC execution, SAP provenance and PRI publication ownership;
RI neither duplicates nor changes those specific requirements.

## Workflow-local operational guidance

Report the actual inspected scope and state, evidence, contrary evidence, limits
and each material finding's effect. Distinguish inability to assess from a defect
and avoid assigning cause beyond the evidence. Recommend treatment and name the
decision owner; identify unresolved requests alongside valid dispositions, without
claiming the reviewer accepted or waived a finding absent that authority. Qualify
the result when evidence cannot sustain readiness. Check material architectural
assumptions and actual exchange claims using the selected role guidance, within
permitted access. Establish independence through your own assessment of the candidate
and evidence, not merely the implementor's assurance.

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

Carry all material findings, their effects, valid dispositions and requested
authority decisions into either
[correction](../handoffs/review-to-correction.md) or
[publication](../handoffs/review-to-publication.md), including accepted, deferred,
and dismissed findings. Retain rationale, decision authority, remaining effects,
and any follow-up owner or trigger. If no next action is authorized, return control.

For the reviewed-change composition, corrections receive re-review proportionate
to changed behavior, dependencies, and evidence before relying on the new state.
This selected re-review mechanic remains workflow-local; RI §13 separately governs
truthful claims of continued applicability where RI actually applies.
Use [return of control](../handoffs/return-of-control.md) for incomplete reviews,
missing evidence, new boundary decisions, and final review results.
