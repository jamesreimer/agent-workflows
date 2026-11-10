# Research & Decision

## Governing sources

- [Architectural Reasoning (AR)](../GOVERNING-SOURCES.md#architectural-reasoning), §§4–12.
- [Operational Execution Contract (OEC)](../GOVERNING-SOURCES.md#operational-execution-contract), §§4–13.
- [Shared Asset Provenance (SAP)](../GOVERNING-SOURCES.md#shared-asset-provenance), §§5–8.
- [Project Repository Responsibility (PRR)](../GOVERNING-SOURCES.md#project-repository-model), §§5–9.
- [Standards Adoption Model (SAM)](../GOVERNING-SOURCES.md#standards-adoption-model), §§3–8.

These references trace source-derived guidance; they do not adopt standards for
the consumer. That guidance applies only where actual governing authority gives
it force, at its original strength and scope. Selecting this composition selects
its local mechanics, not organizational standards or permission to act. Neither
category overrides governing requirements; proportionality cannot remove required
content or effect. Consumers can use the local instructions without adopting
Standards Templates. See the [authority model](../README.md#authority-and-source-status).

## Source-derived guidance

Identify responsibility, ownership, applicable authority and material conflicts
before settling an implementation model (AR §§4–6). Distinguish historical evidence
from current validity and context-specific failure from system capability (AR §7).
Compare proportionate alternatives and affected dependencies (AR §§8–11). Supported
completion requires explicit material finding dispositions; a settled design is
distinct from an implemented and verified final state (AR §12).

Where OEC applies, consequential work requires its reviewed execution contract
before that activity, including objective, scope, completion, validation and
materially necessary protected boundaries (OEC §§4–5, 10). Relevant additional
context in §5 remains recommended; recovery expectations are required under §13
when its conditions apply. Execute only within actual authority, preserve required
protection, and stop on missing authority or at completion (OEC §§6–12). Validation
supports only its evidenced claims and grants no further authority (OEC §11).

For authoritative shared-source consumption, verify source, object-appropriate
immutable identity and actual content correspondence; a locator alone is
insufficient (SAP §§5–8). Keep consequential decisions and work records with
their proper owners, with proportionate durable retention (PRR §§5–9).
Using this library does not adopt its sources or automatically update consumer
authority (SAM §§3–8).

## Workflow-local operational guidance

**Working prototype.** This composition is a design candidate. Local validation
does not establish successful research behavior or independent challenge. It is
not included in the optional delivery skill's original ten-contract bundle.

Use this composition for a bounded question whose supported result can recommend
change, retain the current position, recommend no action, or defer. The boundary
is a documented recommendation, independent challenge, finding dispositions and
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
Authority, provenance, required validation, reviewer independence, read-only review
and truthful completion duties remain intact. If they cannot be fulfilled, stop
and return the architectural question to Planning rather than invent role semantics.

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
   The accepted design is the research contract, not a predetermined answer.
   Include retain/no-action/defer as legitimate outcomes. Distinguish criteria
   for completing research from criteria for approving the subject being studied.
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
   Assess adopted OEC scope separately; this local threshold cannot narrow it.
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
   conditions that could change the conclusion. Retain/no-action/defer needs reasons
   just as change does. Freeze the recommendation and evidence packet using an
   object-appropriate immutable identity with correspondence evidence. Retain all
   required checks and their final results. A failed or unresolved required check
   leaves this stage incomplete: correct within authority or return control.
   Missing subject evidence may support defer when the research contract permits;
   it never turns a failed required research check into success. Send the completed
   packet through Evidence → Challenge and stop at the role boundary.
5. **Challenge independently.** A recipient eligible under the project contract,
   without participation in this recommendation's design or evidence preparation,
   acts as Independent review. Verify the actual frozen input; inspect source support,
   contradictory evidence, alternatives, criteria coverage, uncertainty and authority.
   Attempt to falsify the recommendation and identify what would change it.
   Record a supported conclusion and material findings with evidence, rationale,
   disposition, decision authority and remaining effects. Do not edit the packet or
   execute a proposed remedy. Missing independence or required evidence prevents a
   completed-challenge claim; return the limitation to the owner.
6. **Return the decision.** Independent review uses return of control to deliver
   the identified recommendation, challenge record, supported conclusion, all material
   dispositions, unresolved conditions and requested owner decision. Retained work
   has a responsible owner, durable record and reassessment trigger. Unsupported
   subject conclusions remain deferred; describe incomplete research as incomplete.
   A completed recommendation does not mean the subject is ready, safe, accepted or
   implemented. Further research or correction returns to the owner for a bounded
   instruction; changed evidence or conclusions receive a new identity and challenge
   proportionate to the change before reliance. No automatic correction or publication
   loop follows. Stop when the documented, independently challenged result and its
   dispositions have been returned, without claiming an owner decision not yet made.

Keep instantiated handoffs, evidence, challenge records and consequential decisions
in the consuming project's appropriate records. Selection requires no particular
vendor, operating system, hosting service or Standards Templates adoption. A local
adaptation retains its authority, rationale and protections; no release of this
library silently changes an existing consumer's contract.
