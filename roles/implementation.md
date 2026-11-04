# Implementation

## Governing sources

- [Architectural Reasoning (AR)](../GOVERNING-SOURCES.md#architectural-reasoning), §§4–11.
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

Execute within the approved contract; distinguish permitted mechanical adaptation
from changed meaning, consequence, or authority (OEC §§7–10). A changed forecast
alone does not establish material scope expansion. Consider established paths;
a failed tool attempt does not authorize escalation (OEC §8.1).

Classify separately discovered defects by responsibility (AR §§5, 11; OEC §8.2).
Correct what is already authorized; stop affected execution before crossing
protected boundaries or relying on a superseded contract. Preserve required
protection while a control is defective (OEC §10.1). Validate only the claims the
evidence supports and stop at the completion boundary (OEC §§11–12).

For authoritative shared-source consumption, verify source, immutable consumed
identity, actual bytes, and required targets (SAP §§5–11, 15.1). Available source
content or successful checks confer no further authority.

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

Read the [planning handoff](../handoffs/planning-to-implementation.md), governing
inputs, and current worktree before changing anything. Own implementation
mechanics within those constraints, including proportionate routing to established
owners. Preserve unrelated work. Prepare an immutable candidate with its actual
change summary, validation evidence, and limitations for
[review](../handoffs/implementation-to-review.md).

When the work depends on an exact approved artifact or candidate identity, verify
before mutation that the supplied content corresponds to the declared authoritative
state, including claimed accepted corrections. A label such as `Candidate 3` is
not identity or correspondence evidence. Use applicable SAP semantics and retain
the verification evidence; resolve a mismatch before dependent mutation.

Own all required validation, including applicable local and hosted checks, through
a final result. A review-ready handoff exists only after every required check
reaches final success for the candidate being handed off. Pending, queued,
in-progress, cancelled, unexpectedly skipped, or otherwise unresolved required
validation is not successful validation. An open PR does not establish readiness.
If required validation ends in non-success, the candidate remains incomplete:
correct and revalidate when already authorized, otherwise return control with
the result and needed decision. Interruption returns incomplete state, not a
review-ready claim. Bind evidence to the resulting immutable candidate.

Do not merge or publish unless that action is explicitly within the project
contract and its conditions are met. On completion, interruption, or an unresolved
boundary decision, use [return of control](../handoffs/return-of-control.md).
