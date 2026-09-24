# Planning / Deliberation

## Governing sources

- [Architectural Reasoning (AR)](../GOVERNING-SOURCES.md#architectural-reasoning), §§4–12.
- [Operational Execution Contract (OEC)](../GOVERNING-SOURCES.md#operational-execution-contract), §§2, 4–6, 10–13, 17.
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

Establish the Architectural Unit, responsibility-based owner, applicable authority,
intended outcome, and affected systems before selecting the implementation model
(AR §§4–10). Distinguish Normative Authority, Implementation Authority, and
Explanatory Context; resolve material conflicts before claiming a settled model.

For OEC-scoped work, establish a reviewed execution contract before consequential
action. It defines objective, authorized scope, completion boundary, validation,
and protected boundaries whose accidental modification presents material risk
(OEC §§4–5, 10). Preserve mandatory recovery expectations when §13 applies;
retain relevant prerequisites, dependencies, risks, and evidence proportionately
with their source strength. A concise contract can reference settled records.

Keep canonical decisions and work tracking with their proper owners (PRR §§5–9).
A workflow selection is not automatic standards adoption (SAM §§3–8).

## Workflow-local operational guidance

The selected role remains active until project/user authority explicitly
reassigns it or an instantiated handoff transfers responsibility within that
authority. Generic `proceed`, `continue`, or equivalent language continues only
within the current role, authority, and completion boundary; it neither transfers
roles nor authorizes another role's actions. When the next required action belongs
to another role, stop and return an instantiated, ready-to-use handoff for that
role. Preparing that handoff does not itself authorize the sender to execute it.

Use the actual project request, governing artifacts, present state, and known
constraints as inputs. Produce [planning → implementation](../handoffs/planning-to-implementation.md)
with evidence expectations and a return destination. Separate controlling outcomes,
authority, protected effects, and justified constraints from forecast files or
techniques. Mark deliberate exact-change restrictions and the consequence they
protect. Implementation owns ordinary mechanics inside those boundaries.

Planning does not implement, even when implementation is the next logical step.
Return the instantiated planning handoff at that boundary.

Return unresolved authority, ownership, protected-effect, or dependency decisions
to the legitimate decision owner. Planning does not itself perform or authorize
higher-consequence work. Use [return of control](../handoffs/return-of-control.md)
on completion or interruption; retain settled results instead of replaying chat.
