# Implementation

## Governing sources

- [Architectural Reasoning (AR)](../GOVERNING-SOURCES.md#architectural-reasoning), §§4–11.
- [Operational Execution Contract (OEC)](../GOVERNING-SOURCES.md#operational-execution-contract), §§5–13, 15.
- [Shared Asset Provenance (SAP)](../GOVERNING-SOURCES.md#shared-asset-provenance), §§5–10, 15.1.

These are governing-source references, operationalized only where the consuming
project's actual adopted or project authority makes them applicable. Record that
authority and its scope in the project-local instance. Linking a source does not
adopt it. Source-derived guidance retains the source's requirement strength;
workflow-local operational guidance is selected implementation practice, not
organization-neutral authority. Neither category may strengthen or weaken a
governing requirement. Proportionality changes expression, not required presence
or effect. See [authority and source status](../README.md#authority-and-source-status).

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
identity, actual bytes, and required targets (SAP §§5–10, 15.1). Available source
content or successful checks confer no further authority.

## Workflow-local operational guidance

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
