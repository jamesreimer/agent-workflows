# Research & Decision

## Governing sources

- [Architectural Reasoning (AR)](../GOVERNING-SOURCES.md#architectural-reasoning), §§4–12.
- [Operational Execution Contract (OEC)](../GOVERNING-SOURCES.md#operational-execution-contract), §§2, 4–13, 15.
- [Shared Asset Provenance (SAP)](../GOVERNING-SOURCES.md#shared-asset-provenance), §§5–11, 15.1.
- [Project Repository Responsibility (PRR)](../GOVERNING-SOURCES.md#project-repository-model), §§5–9.
- [Standards Adoption Model (SAM)](../GOVERNING-SOURCES.md#standards-adoption-model), §§3–8.

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

Identify responsibility, ownership, applicable authority and material conflicts
before settling an implementation model (AR §§4–6). Distinguish historical evidence
from current validity and context-specific failure from system capability (AR §7).
Compare proportionate alternatives and affected dependencies (AR §§8–11). Before
architectural completion is claimed, material review findings require explicit
dispositions; a settled design is distinct from an implemented and verified final
state (AR §12). These architectural conditions are not a general AR requirement
for every nonarchitectural research decision.

Where OEC applies, its actual scope (§2) controls. Consequential work requires its
reviewed execution contract before that activity, including objective, scope,
completion, validation and materially necessary protected boundaries (OEC §§4–5, 10).
Complexity alone must not trigger it; simple work with material consequences cannot
bypass it (OEC §4). Relevant additional context in §5 remains recommended; recovery
expectations are required under §13 when its conditions apply.
Execute only within actual authority, preserve required
protection, and stop on missing authority or at completion (OEC §§6–12). Validation
supports only its evidenced claims and grants no further authority (OEC §11).

For authoritative shared-source consumption, verify source, object-appropriate
immutable identity and actual content correspondence; a locator alone is
insufficient (SAP §§5–8). Verify required targets in the intended consumer context;
informative links need not become required targets (SAP §15.1).
Keep consequential decisions and work records with their proper owners, with
proportionate durable retention (PRR §§5–9).
Using this library does not adopt its sources or automatically update consumer
authority (SAM §§3–8).

## Workflow-local operational guidance

**Working prototype.** This composition is a design candidate. Local validation
does not establish successful research behavior or independent challenge. It is
included in the optional delivery skill's twelve-contract bundle; this does not
establish behavioral qualification or grant execution authority.

Use this composition for a bounded question whose supported result can recommend
change, retain the current position (no action), or defer a conclusion. Retain/no
action means the evidence supports leaving the current position unchanged; defer
means withholding a subject conclusion pending identified evidence or conditions,
where the research contract permits that outcome. The boundary is a documented
recommendation, independent challenge, finding dispositions and
return to the responsible owner. It does not execute the recommended action,
accept security risk, install a skill, release a product or publish a decision.
Separate project authority controls any such work.

### Roles and transfers

Use the existing [Planning](../roles/planning.md),
[Implementation](../roles/implementation.md) and
[Independent review](../roles/independent-review.md) responsibilities.
Evidence collection and challenge are activities of those roles, not new roles.
[Publication](../roles/publication.md) has no activity in this composition.
The decision owner is the project's legitimate authority, not another agent role.

Selecting this composition under legitimate project authority explicitly adapts
the change-oriented transfer named in Implementation, Independent review and the
planning handoff's review endpoint. For this research assignment, use
[Evidence → Challenge](../handoffs/evidence-to-challenge.md) in place of
Implementation → Review; its frozen evidence identity and recommendation replace
the change candidate, commit/base pair and change summary for this transfer only.
This is an explicit local adaptation, not a claim that the existing handoff fields
apply unchanged. The original contracts retain their meaning for Reviewed Change.

The outbound edge is Independent review → decision owner through
[return of control](../handoffs/return-of-control.md), replacing the role's
change-oriented [Review → Correction](../handoffs/review-to-correction.md) and
[Review → Publication](../handoffs/review-to-publication.md) routing for this
composition. Those unchanged edges do not run: this assignment returns a research
recommendation rather than a change candidate for implementation or publication,
and Publication has no activity here. Return all material finding dispositions,
including accepted, deferred and dismissed findings, with rationale, decision
authority, remaining effects and retained follow-up.

This routing preserves the duty to prepare a correction handoff when correction is
already specified and authorized. Include an instantiated, ready-to-use instruction
for Implementation in return of control's **Next-role instruction**, carrying the
reviewed packet identity and correspondence evidence, review record, actual
correction authority and contract, applicable sources, bounded corrections, all
material dispositions, follow-up owners/records/triggers, required validation,
completion condition, proportionate re-challenge scope and return destination.
For this research correction, the packet identity replaces the change-candidate
SHA, and the new packet returns through Evidence → Challenge. This is the bounded
adaptation of the correction transfer, not omission of its obligations or an
automatic correction loop. If correction lacks authority, return the proposed
outcomes and missing authority for the owner's decision; mark **Next-role instruction**
as `none` with that reason rather than invent an executable grant. If no correction
is needed, record `none` with that reason. The reviewer neither performs corrections
nor reassigns itself by preparing this handoff.

Authority, provenance, required validation, reviewer independence, read-only review
and truthful completion duties remain intact. If they cannot be fulfilled, stop
and return the limit to the decision owner. Questions requiring changed role
responsibilities, authority or completion semantics go to Planning through that
owner; ordinary missing evidence or authorization returns to the owner for its
bounded decision. Do not invent role semantics to proceed.

Preparing a handoff does not reassign its sender or authorize automatic execution.
A role remains active until explicit project/user reassignment or an instantiated
handoff under actual authority. Generic continuation stays within that role and
boundary. Use [return of control](../handoffs/return-of-control.md) at interruption
or any unresolved decision as well as at completion.

### Bounded procedure

1. **Frame the research.** Planning supplies
   [Planning → Implementation](../handoffs/planning-to-implementation.md), recording
   this composition and its explicit transfer adaptation. Set the question,
   responsibility and owner, current position under challenge, alternatives,
   enumerated decision criteria, evidence requirements and permitted methods.
   In **Objective and accepted architectural result**, put the bounded question,
   alternatives and settled research contract, not a predetermined answer. This
   explicitly adapts the settled-design field for research; it does not claim that
   every original field applies unchanged. Put methods and permitted effects in
   **Authority and scope**, criteria and required checks in **Validation and acceptance
   evidence**, identified inputs in **Required source inputs and delivered-asset
   targets**, and stopping and return conditions in their named rows. Preserve the
   other rows' controls and justified inapplicability. The original pre-mutation
   check remains required before any authorized mutation; step 3 also requires
   input verification before dependent research.
   Include retain/no action and, where the contract permits, defer as legitimate
   outcomes. Distinguish criteria for completing research from criteria for
   approving the subject being studied.
2. **Bound authority.** Record actual governing standards, versions and scope or
   `Standards Templates: not adopted`, separately from the authorizer and contract.
   For alternative standards, record accept/adapt/reject for affected mechanics,
   rationale, controlling authority, owner and record location. Resolve conflicts
   before dependent work. Name permitted reads, any expressly authorized disposable
   experiments, resource limits, protected interests, required checks, evidence
   destination, independent challenger eligibility and return destination.
   Before activity materially affects protected systems, data, externally relied-upon
   artifacts, publication state or access, require a reviewed, explicitly authorized
   contract with objective, scope, completion, validation and necessary protections.
   `Not adopted` does not remove this local contract requirement. Complexity alone
   is not a trigger; low-consequence work may use a lighter instruction when actual
   governing obligations permit. Assess actually applicable OEC scope separately,
   not adoption status alone; this local threshold cannot narrow it, and additional
   workflow coverage remains local. A pinned OEC link does not make OEC applicable.
   Record recovery expectations for risky or difficult-to-reverse effects, or the
   absence of practical rollback and possible containment. Access or credentials
   supply no permission; stop rather than bypass controls or escalate failed attempts.
3. **Collect evidence.** Implementation executes only the permitted research.
   Verify exact supplied inputs before dependent work. Record each material claim's
   source, revision or retained content identity, observation date, collection method
   and limitations. Verify required targets and actual content correspondence;
   distinguish informative references from required inputs. Preserve facts,
   inference, assumptions, conflicting evidence and unknowns separately. Historical
   audit or compatibility results are historical until current evidence supports
   them. Tool failure proves only the observed limitation. Do not manufacture real
   consumer experience from fixtures or treat absent evidence as a passed criterion.
4. **Prepare the recommendation.** Compare alternatives against each enumerated
   criterion, citing supporting and adverse evidence. Identify tradeoffs, uncertainty,
   missing evidence, confidence justified by the evidence, affected owners and
   conditions that could change the conclusion. Retain and defer require reasons
   just as change does. Freeze the recommendation and evidence packet using an
   object-appropriate immutable identity with correspondence evidence. Retain all
   required checks and their final results. A failed or unresolved required check
   leaves this stage incomplete: correct within authority or return control.
   Missing subject evidence may support defer when the research contract permits;
   it never turns a failed required research check into success. Prepare and return
   the instantiated Evidence → Challenge handoff with the frozen packet and stop
   at the role boundary; preparation does not dispatch the next role.
5. **Challenge independently.** A recipient eligible under the project contract,
   without participation in formulating this research recommendation or preparing
   its evidence, acts as Independent review. This independence is a selected local
   mechanic, not a universal review policy. Framing Planning's research question
   or criteria alone does not constitute preparing the recommendation; additional
   project eligibility restrictions still control. Verify that the bytes actually
   received match the claimed frozen identity and report the result; stop and
   return control on missing or mismatched correspondence. Inspect source support,
   contradictory evidence, alternatives, criteria coverage, uncertainty and authority.
   Attempt to falsify the recommendation and identify what would change it.
   Record a supported conclusion, propose explicit dispositions for all material
   research findings, and name the authority that must decide them, with evidence,
   rationale and remaining effects, whether or not AR governs. Do not edit
   the packet or execute a proposed remedy. Missing independence or required evidence
   prevents a completed-challenge claim; return the limitation to the owner.
6. **Return the decision.** Independent review uses return of control to deliver
   the identified recommendation, challenge record, supported conclusion, all material
   dispositions, unresolved conditions and requested owner decision. Retained work
   has a responsible owner, durable record and reassessment trigger. Unsupported
   subject conclusions remain deferred; describe incomplete research as incomplete.
   A completed recommendation does not mean the subject is ready, safe, accepted or
   implemented. Further research or correction returns to the owner with the
   ready-to-use instruction when already authorized, or the needed decision when
   authority is missing, as specified above. Changed evidence or conclusions receive
   a new identity and challenge proportionate to the change before reliance.
   No automatic correction or publication loop follows. Stop when the documented,
   independently challenged result and its
   dispositions have been returned, without claiming an owner decision not yet made.

Keep instantiated handoffs, evidence, challenge records and consequential decisions
in the consuming project's appropriate records. Selection requires no particular
vendor, operating system, hosting service or Standards Templates adoption. A local
adaptation retains its authority, rationale and protections; no release of this
library silently changes an existing consumer's contract.
