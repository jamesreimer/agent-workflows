# Evidence → Challenge

## Governing sources

- [Architectural Reasoning (AR)](../GOVERNING-SOURCES.md#architectural-reasoning), §§4–12.
- [Operational Execution Contract (OEC)](../GOVERNING-SOURCES.md#operational-execution-contract), §§2, 4–13, 15.
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

Assess the actual result against applicable authority, responsibility, alternatives
and evidence; do not treat historical success or one context's failure as a current
universal conclusion (AR §§4–12). Give material findings explicit dispositions before
claiming architectural completion, retaining the distinction between a settled
design and an implemented final state (AR §12). Dispositions and validation do not
grant further execution authority or waive completion conditions (OEC §§6–12).
Verify actual consumed content against its source and object-appropriate immutable
identity where authoritative consumption applies, including required targets in
the intended consumer context (SAP §§5–8, 15.1).

## Workflow-local operational guidance

**Working prototype.** Use with [Research & Decision](../workflows/research-and-decision.md)
to transfer a bounded research deliverable from
[Implementation](../roles/implementation.md) to
[Independent review](../roles/independent-review.md). This is the composition's
explicit research transfer adaptation, not a redefinition of the original change
handoff. Evidence and Challenge are activities, not additional roles.

The sender supplies the frozen recommendation and evidence packet with evidence
of its own verification of source, immutable identity and corresponding content,
including the export or object supplied for transfer. This does not assert what
the recipient actually received. Required research checks must have reached final
success for that state before it is challenge-ready. Pending, failed, skipped or
unresolved required checks instead require an incomplete return of control. A contract-permitted
defer recommendation for missing subject evidence is distinct from an incomplete
required research check. An evidence label, URL or digest alone does not prove that
the recipient received the identified bytes or can access required supporting inputs.

Act as Independent review within the stated authority. Establish eligibility and
independence before claiming independent challenge; a different tool or vendor alone
does not establish either. This composition locally requires nonparticipation in
formulating the research recommendation or preparing its evidence. Framing Planning's
question or criteria alone does not disqualify a recipient; the project's additional
eligibility restrictions still control. The implementor's checks do not substitute.
Inspect the packet without mutating it. Verify that the bytes actually received
correspond to the claimed immutable identity, and retain the method and outcome
in the challenge return. If correspondence is missing or mismatched, stop dependent
challenge and return control with the discrepancy. Verify required sources and
targets, investigate material counterevidence within permitted access, and challenge
the inference from evidence to recommendation. Identify omitted alternatives,
unsupported criteria, stale evidence,
uncertainty, affected responsibilities and conditions that could reverse the result.
Report authority gaps or scope/control violations without executing a correction.
No recommendation or review finding grants risk acceptance or implementation,
installation, publication, deployment or release authority.

Record actual governing editions and scope, or non-adoption, separately from local
authorization. Preserve alternative-policy dispositions and unresolved conflicts.
The composition and role safeguards still govern consequential work, protected
boundaries, recovery assessment and stop conditions. If required access, authority,
identity correspondence or independence is missing, return control with that limit;
do not substitute unsupported conclusions or silently weaken a required check.

Supply each field with evidence or an explicit, justified inapplicability only
where conditional. References to existing project records can avoid duplication.
Missing required information is a gap, not an empty placeholder or assumed approval.

| Input | Project-local value |
| --- | --- |
| Target, question and owner | `<project-and-canonical-record>`; `<bounded-research-question>`; `<responsible-decision-owner>` |
| Research authority and contract | `<authorizer-objective-permitted-methods-scope-protections-validation-and-completion>`; `<selected-workflow-revision-and-explicit-transfer-adaptation>` |
| Governing applicability | `<standards-versions-and-scope-or-Standards-Templates-not-adopted>`; `<alternative-policy-dispositions-or-explained-inapplicability>` |
| Challenge authority and independence | `<review-contract-and-permitted-access>`; `<recipient-eligibility-and-evidence-of-nonparticipation>` |
| Decision criteria and alternatives | `<enumerated-criteria-current-position-and-alternatives-including-retain-and-contract-permitted-defer>` |
| Frozen recommendation and evidence | `<packet-source-location-and-object-appropriate-immutable-identity>`; `<sender-content-and-export-or-object-verification-evidence>` |
| Sources and claim support | `<claim-to-source-map-identities-observation-dates-methods-and-required-target-verification>` |
| Evidence assessment | `<facts-inferences-assumptions-counterevidence-unknowns-and-criterion-by-criterion-results>` |
| Proposed conclusion | `<outcome-change-or-retain-or-contract-permitted-defer>`; `<rationale-tradeoffs-and-supported-confidence>` |
| Validation and limits | `<required-checks-final-results-exact-evidence-state-and-limitations>`; `<conditional-recovery-assessment>` |
| Challenge focus | `<strongest-counterarguments-missing-evidence-and-conditions-that-could-change-the-conclusion>` |
| Findings and retained work | `<existing-material-findings-and-prior-dispositions-rationale-authority-remaining-effects-and-owner-record-trigger-or-none-with-reason>` |
| Completion and return | `<challenge-deliverable>`; `<owner-project-record-and-requested-decision>` |

Retain/no action means the evidence supports leaving the current position unchanged;
defer withholds a subject conclusion pending identified evidence or conditions.
Neither outcome excuses an incomplete required research check.

Return a supported conclusion tied to the inspected packet, including the recipient's
actual received-content verification method and outcome, material findings and
dispositions, disagreements, gaps, evidence limits and retained work. The sender's
prior dispositions are inputs, not a substitute for the challenger's findings.
Use [return of control](return-of-control.md) for both final challenge and interruption.
The composition's [outbound routing](../workflows/research-and-decision.md#roles-and-transfers)
replaces the change-oriented correction and publication edges with owner return.
If correction is specified and already authorized, include the ready-to-use bounded
Implementation instruction required there in **Next-role instruction**. If correction
lacks authority, return the proposed outcomes and missing authority for the owner's
decision, with `none` and the reason in that field. If no correction is needed,
record `none` with that reason. Carry all material dispositions; do not correct
the packet or invoke publication. A changed packet needs a new identity and
proportionate challenge before relying on it. Documented owner return
ends this transfer; the owner controls any later decision or separately authorized
action. Keep the filled handoff and challenge evidence with the consuming project.
