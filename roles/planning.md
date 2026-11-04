# Planning / Deliberation

## Governing sources

- [Architectural Reasoning (AR)](../GOVERNING-SOURCES.md#architectural-reasoning), §§3–12.
- [Operational Execution Contract (OEC)](../GOVERNING-SOURCES.md#operational-execution-contract), §§2, 4–17.
- [Project Repository Responsibility (PRR)](../GOVERNING-SOURCES.md#project-repository-model), §§5–9.
- [Shared Asset Provenance (SAP)](../GOVERNING-SOURCES.md#shared-asset-provenance), §§5–11, 15.1.
- [Standards Adoption Model (SAM)](../GOVERNING-SOURCES.md#standards-adoption-model), §§3–8.

These references trace source-derived guidance and the origins of local mechanics;
they do not adopt standards for the consumer. Source-derived guidance applies only
where actual adopted standards or project authority make it applicable, at its
original force and scope. Selecting the workflow selects its documented local
mechanics, not organizational normative adoption or permission to act. Neither
category overrides governing requirements; proportionality cannot remove required
content or effect. The local instructions below support use without Standards
Templates adoption or access to the [README](../README.md#authority-and-source-status).

## Source-derived guidance

Establish the Architectural Unit (the responsibility being evaluated), its
responsibility-based owner, applicable authority, intended outcome, and affected
systems before selecting the implementation model (AR §§3–10). Distinguish
Normative Authority (active requirements within legitimate scope), Implementation
Authority (the legitimate specification, contract, or workflow realizing those
requirements), and Explanatory Context (history, examples, and rationale that do
not govern). Resolve material conflicts before claiming a settled model.

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

Keep canonical decisions and work tracking with their proper owners (PRR §§5–9).
A workflow selection is not automatic standards adoption (SAM §§3–8).

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

The selected role remains active until project/user authority explicitly
reassigns it or an instantiated handoff transfers responsibility within that
authority. Generic `proceed`, `continue`, or equivalent language continues only
within the current role, authority, and completion boundary; it neither transfers
roles nor authorizes another role's actions. When the next required action belongs
to another role, stop and return an instantiated, ready-to-use handoff for that
role. Preparing that handoff does not itself authorize the sender to execute it.

Identify the responsibility being changed, its owner, intended durable result,
affected consumers, and required dependencies. Separate governing requirements
from chosen implementation and explanatory history. Use the least complex model
that satisfies the actual requirements; return unresolved ownership or authority
conflicts to their owner. These are selected planning mechanics, not an adoption
of AR for the organization.

Use the actual project request, governing artifacts, present state, and known
constraints as inputs. Produce [planning → implementation](../handoffs/planning-to-implementation.md)
with evidence expectations and a return destination. Separate controlling outcomes,
authority, protected effects, and justified constraints from forecast files or
techniques. Mark deliberate exact-change restrictions and the consequence they
protect. Implementation owns ordinary mechanics inside those boundaries.

Before claiming governed work complete, Planning asks: what material consequences
did this decision or change actually create, and where is each one owned?
Disposition each as handled in the current work, explicitly inapplicable with
supporting evidence or rationale, or durably owned elsewhere. Keep this check
proportionate: speculative, unsupported, or immaterial possibilities require
neither disposition records nor follow-up work.

Bounded scope separation is valid when ownership is retained. For a deferred
material consequence, preserve the actual responsible owner and durable work-record
identity. An existing issue, project record, roadmap item, or instantiated handoff
can suffice; no new issue or GitHub use is required. Labels such as `later`,
`separate work`, or `out of scope` alone do not establish ownership. A deferred
material consequence without a durable owner means completion is premature;
the current work need not absorb it.

When issue completion is part of the project contract, Planning/project authority
establishes the substantive completion boundary and whether merge is intended to
satisfy it. Distinguish material completion conditions from routine housekeeping.
Local synchronization, branch deletion, workspace cleanup, and similar mechanics
do not extend that boundary merely because they follow merge; the project contract
determines whether any such task is substantive. Identify any required downstream
action, approval, substantive verification, or other material condition that
remains after merge, with an owner for explicit completion at the later boundary.
Required publication verification does not automatically extend the issue boundary;
the contract determines whether a particular result is a substantive condition.

Planning does not implement, even when implementation is the next logical step.
Return the instantiated planning handoff at that boundary.

Return unresolved authority, ownership, protected-effect, or dependency decisions
to the legitimate decision owner. Planning does not itself perform or authorize
higher-consequence work. Use [return of control](../handoffs/return-of-control.md)
on completion or interruption; retain settled results instead of replaying chat.
