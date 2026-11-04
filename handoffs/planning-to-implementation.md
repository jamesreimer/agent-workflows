# Planning → Implementation

## Governing sources

- [Architectural Reasoning (AR)](../GOVERNING-SOURCES.md#architectural-reasoning), §§4–12.
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

Use settled authority and responsibility boundaries to distinguish constraints
from implementation expectations (AR §§4–8). Govern shared-source identity and
required inputs under SAP §§5–8, 15.1. Stop affected execution before material
scope expansion or reliance on a superseded model (OEC §8).

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

Act as the [implementation role](../roles/implementation.md). Complete the
bounded objective below, using the referenced authority and current evidence.
Choose mechanics within controlling constraints; a forecast is not an exact-change
restriction unless deliberately identified as one. Do not proceed into an
unauthorized merge, publication, deployment, or adjacent project.

Before mutation, verify supplied exact/approved inputs against the declared
authoritative state, including claimed corrections, using applicable SAP
semantics. A label such as `Candidate 3` is insufficient. Resolve correspondence
gaps before dependent work; retain the evidence in the project record.

Use relevant fields proportionately. A table row does not turn recommended
context into a mandatory condition. Preserve required controls and explain material
inapplicability; an empty placeholder supplies neither authority nor evidence.

| Input | Project-local value |
| --- | --- |
| Target and source of truth | `<repository>`, `<issue>`, `<canonical-records>` |
| Objective and accepted architectural result | `<outcome-and-settled-design>` |
| Authority and scope | `<authorizer-and-reviewed-contract>`; `<permitted-actions-and-consequences>` |
| Governing sources and applicability | `<governing-standards-versions-and-scope-or-Standards-Templates-not-adopted>`; `<workflow-consequence-and-adopted-scope-assessments>` |
| Protected interests | `<protected-boundaries-and-effects>` |
| Completion boundary | `<condition-at-which-to-stop>` |
| Validation and acceptance evidence | `<required-checks-and-evidence>` |
| Recovery, risks, prerequisites, dependencies | `<applicable-expectations-or-explained-inapplicability>` |
| Required source inputs | `<source-identities-immutable-states-and-correspondence-evidence>` |
| Controlling implementation constraints | `<justified-boundaries-including-any-deliberate-exact-change-restriction>` |
| Planning expectations | `<nonbinding-file-or-technique-forecast-if-useful>` |
| Return destination | `<decision-owner-and-project-record>` |

Resolve missing material authority or contract content before dependent execution.
Deliver actual resulting state, candidate identity, evidence, deviations and their
consequences, and remaining conditions using
[implementation → review](implementation-to-review.md) when review is the next
boundary, or [return of control](return-of-control.md) otherwise.
