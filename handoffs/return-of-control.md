# Return of Control

## Governing sources

- [Operational Execution Contract (OEC)](../GOVERNING-SOURCES.md#operational-execution-contract), §§8, 10–13, 17.
- [Architectural Reasoning (AR)](../GOVERNING-SOURCES.md#architectural-reasoning), §12.
- [Project Repository Responsibility (PRR)](../GOVERNING-SOURCES.md#project-repository-model), §§5–9.

These are governing-source references, operationalized only where the consuming
project's actual adopted or project authority makes them applicable. Record that
authority and its scope in the project-local instance. Linking a source does not
adopt it. Source-derived guidance retains the source's requirement strength;
workflow-local operational guidance is selected implementation practice, not
organization-neutral authority. Neither category may strengthen or weaken a
governing requirement. Proportionality changes expression, not required presence
or effect. See [authority and source status](../README.md#authority-and-source-status).

## Source-derived guidance

OEC §12.1 recommends conveying and retaining enough resulting state, validation
or recovery, unresolved conditions, and follow-up when later action or review
materially depends on it. Keep reporting proportionate; this is not a universal
mandatory report format. Reporting itself does not authorize continuation.
Stop at completion and before exceeding authority or protected boundaries
(OEC §§8, 10–12). Preserve material architectural finding dispositions (AR §12).
Keep work records and canonical decisions with their responsible owners
(PRR §§5–9; OEC §17).

## Workflow-local operational guidance

Use this handoff from any role on completion, interruption, or a decision that
requires another owner. Fill the information needed for the next decision, refer
to settled authoritative results, and avoid replaying all prior reasoning.

When another role must act next, include its instantiated, ready-to-use handoff
with the target role, actual authority, inputs, bounded action, completion
condition, and return destination. Identify missing authority as an unresolved
condition, not an executable grant. Generic `proceed` or `continue` retains the
current role and boundary; a stop report or prepared handoff alone does not
reassign its sender. Transfer requires explicit project/user reassignment or an
instantiated handoff under the actual authority.

| Result | Project-local value |
| --- | --- |
| Target, role, and invoked authority | `<repository>`, `<issue>`, `<role-and-contract>` |
| Status and stopping boundary | `<completed-paused-or-review-needed-with-reason>` |
| Material resulting state | `<actual-state-and-immutable-identity-where-needed>` |
| Validation and recovery | `<checks-results-limitations-and-recovery-performed>` |
| Protected state and partial effects | `<preserved-interests-and-any-incomplete-effects>` |
| Findings and unresolved conditions | `<material-dispositions-rationale-and-remaining-consequence>` |
| Next-role instruction | `<instantiated-handoff-or-none-with-reason>` |
| Follow-up | `<necessary-action-owner-and-trigger-or-none>` |
| Return destination and requested decision | `<responsible-owner-project-record-and-bounded-question>` |

Report only the state evidence supports. Distinguish completed authorized work
from unresolved architectural or operational completion. Preserve useful partial
work safely; do not use a stop report as permission to erase it, change scope, or
continue. A role can finish and report without any publication step.
