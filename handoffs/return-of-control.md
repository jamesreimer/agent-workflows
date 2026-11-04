# Return of Control

## Governing sources

- [Operational Execution Contract (OEC)](../GOVERNING-SOURCES.md#operational-execution-contract), §§2, 4–17.
- [Architectural Reasoning (AR)](../GOVERNING-SOURCES.md#architectural-reasoning), §12.
- [Project Repository Responsibility (PRR)](../GOVERNING-SOURCES.md#project-repository-model), §§5–9.

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

OEC §12.1 recommends conveying and retaining enough resulting state, validation
or recovery, unresolved conditions, and follow-up when later action or review
materially depends on it. Keep reporting proportionate; this is not a universal
mandatory report format. Reporting itself does not authorize continuation.
Stop at completion and before exceeding authority or protected boundaries
(OEC §§8, 10–12). Give material architectural findings explicit dispositions (AR §12).
AR §12 recommends proportionate supporting evidence retention where its loss
would materially impair later review.
Keep work records and canonical decisions with their responsible owners
(PRR §§5–9; OEC §17).

## Workflow-local operational guidance

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

For a completion return, use **Follow-up** to preserve the disposition of material
consequences outside the completed scope: the responsible owner and durable
work-record identity when deferred, or supporting rationale when inapplicable.
Apply [Planning's consequence guidance](../roles/planning.md#workflow-local-operational-guidance)
proportionately; vague future intent does not establish ownership.

Report only the state evidence supports. Distinguish completed authorized work
from unresolved architectural or operational completion. Preserve useful partial
work safely; do not use a stop report as permission to erase it, change scope, or
continue. A role can finish and report without any publication step.
