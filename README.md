# Agent Workflows

[![Repository validation](https://github.com/jamesreimer/agent-workflows/actions/workflows/validate.yml/badge.svg?branch=main)](https://github.com/jamesreimer/agent-workflows/actions/workflows/validate.yml?query=branch%3Amain)
[![Latest release](https://img.shields.io/github/v/release/jamesreimer/agent-workflows)](https://github.com/jamesreimer/agent-workflows/releases/latest)
[![License: CC0-1.0](https://img.shields.io/badge/license-CC0--1.0-blue)](LICENSE)

A library of reusable operational artifacts for bounded agent-assisted work.
It preserves responsibility, authority, evidence, and return-of-control integrity
across assisted execution. It is not an agent runtime, orchestration engine, or
universal human workflow framework, and implies no affiliation with similarly
named projects.

## Responsibility

This library owns operational role profiles, blank handoffs, and workflow
compositions. It does not own organization-neutral standards, organizational job
roles, execution or publication authority, or a consuming project's work state.
The library has an independent lifecycle so operational practice can evolve
without silently revising governing standards.

| Class                 | Canonical artifacts                                                                                                                                                                                                                                                                                                                                                     |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Role profiles         | [Planning](roles/planning.md), [Implementation](roles/implementation.md), [Independent review](roles/independent-review.md), [Publication](roles/publication.md)                                                                                                                                                                                                        |
| Handoff templates     | [Planning → implementation](handoffs/planning-to-implementation.md), [Implementation → review](handoffs/implementation-to-review.md), [Review → correction](handoffs/review-to-correction.md), [Review → publication](handoffs/review-to-publication.md), [Return of control](handoffs/return-of-control.md), [Evidence → Challenge](handoffs/evidence-to-challenge.md) |
| Workflow compositions | [Reviewed change](workflows/reviewed-change.md), [Research & Decision](workflows/research-and-decision.md)                                                                                                                                                                                                                                                              |

**Research & Decision is a local Working prototype:** its research transfer and
completion model await behavioral evaluation and independent challenge. It is
not included in the optional delivery skill’s original ten-contract bundle.

The first composition does not define the permanent lifecycle of every workflow.
Roles identify responsibilities; they do not require four separate actors.
Independent review, when required, cannot be replaced by an implementor's own
checks. The consuming authority determines permitted role occupancy.

## Authority and source status

Actual adopted standards and project authority control the instantiated workflow.
The [pinned governing sources](GOVERNING-SOURCES.md) define the interpretation
of this library's source-derived guidance; referencing them does not adopt them
for a consumer. Pins are immutable within an Agent Workflows release. Later
Standards Templates releases do not automatically change those pins or that release.
The Standards Adoption Model is the source for that distinction; consumers do not
need to adopt it or any other Standards Templates artifact to use this library.

Every canonical artifact contains `Governing sources`. Sourced operational
statements are grouped under `Source-derived guidance` with the relevant source
and section. Instructions without organization-neutral authority appear under
`Workflow-local operational guidance`. Selecting a workflow under legitimate
project authority selects those documented mechanics as the contract for using
it as designed, not as organization-wide normative obligations. Selection grants
no organizational role, execution, publication, or production permission. A heading's
status extends to its subsections and tables; there is no unmarked third category.

Workflow artifacts must neither strengthen nor weaken a governing requirement.
Preserve its applicability and normative force: a recommendation does not become
a universal obligation, and a mandatory element cannot become optional.
Proportionality may reduce depth, verbosity, or ceremony, never required presence
or effect. Source-derived obligations bind only where actually applicable governing
authority gives them force. A local project may explicitly incorporate a rule or
adopt a source; having an authorizer alone does not adopt linked standards. The workflow's own safeguards apply independently when selected. An
adopter's actual OEC edition and scope control even if a workflow cue would miss
an action; any additional coverage from the workflow is a local requirement,
not an attributed OEC obligation.

## Use and instantiation

The following is workflow-local operational guidance for using this library.

Record which consumer model applies in the existing project record:

| Consumer model                  | Authority and selection record                                                                                                                                                                                                                                              |
| ------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Adopted Standards Templates     | Identify the actual adopted editions, canonical local authority, and scope. Compare the selected mechanics with those obligations; the library's source pins do not replace the adopted versions.                                                                           |
| No Standards Templates adoption | Record `Standards Templates: not adopted` (or `none` for adopted editions), the legitimate local authorizer/contract, and the selected workflow revision. Use its local mechanics; source-derived text is traceability, not an adoption prerequisite.                       |
| Alternative governing standards | Identify their versions, scope, and controlling authority. For affected mechanics record accept/adapt/reject, the reason, decision owner, and record location. Resolve overlap or conflicts explicitly; another policy does not automatically replace or add to every step. |

For the selected workflow, work that may materially affect protected systems,
data, externally relied-upon artifacts, publication state, access, or similarly
consequential interests requires a reviewed, explicitly authorized execution
contract before that activity. Include objective, scope, completion boundary,
validation, and materially necessary protected boundaries. This local threshold
is informed by [OEC §§4–5](GOVERNING-SOURCES.md#operational-execution-contract).
Technical complexity alone is not a trigger. A low-consequence local edit or
experiment may use a lighter instruction if actual governing obligations permit.
Assess adopted OEC scope separately; the workflow threshold cannot narrow it.
`None` for adopted editions does not remove the selected workflow's contract.

Record recovery expectations for difficult-to-reverse, destructive, externally
consequential, or operationally risky state; state when rollback is impractical
and consider containment. Check source, immutable identity, actual content, and
required targets when relying on governed upstream material. Apply publication
checks when an artifact becomes observable under a durably relied-upon identity,
including premature exposure. Each relevant artifact supplies the actions locally.
Missing authority means stop before the affected action. Live activation means
putting an artifact or change into operational use; publication alone does not
authorize it. A legitimate local decision may adapt or select another workflow
with recorded responsibility, authority, and appropriate protections. Silently
removing safeguards cannot be represented as following the unchanged workflow.

1. Select an immutable library revision and a composition appropriate to the work.
   Review the actual project authority, overlap, and conflicts before choosing
   these artifacts as implementation authority; do not treat this step as
   organizational adoption of the referenced standards.
2. Read the role and handoff. Use the consumer model above to record actual
   governing versions and scope, including `not adopted` where true. Compare
   source-derived guidance with any actually governing source text; non-adopters
   can use the local instructions without reading Standards Templates. Record
   material adaptations and conflicts; return unresolved authority questions to
   their legitimate owner before dependent execution. `None` is not an authorizer.
3. Instantiate a handoff in the consuming project's record, replacing angle-bracket
   placeholders with the actual target, authority, contract, evidence, and return
   destination. Refer to a settled contract rather than repeating its history.
   Check that required linked inputs are accessible to the recipient. When
   copying a template out of the library, resolve its relative links against the
   selected immutable library revision or supply the linked artifacts with it.
4. Give the recipient the instantiated handoff and applicable role. The handoff
   itself is the agent instruction; a separate prompt layer is unnecessary.
5. Retain resulting decisions and execution evidence in the consuming project's
   appropriate canonical or work records. Review upstream changes deliberately;
   never let a moving branch or tag silently update an active instruction.

Canonical examples use placeholders such as `<repository>`, `<issue>`,
`<commit-sha>`, and `example-project`. Filled issue numbers, candidate SHAs,
task prompts, findings, execution logs, and publication decisions remain
project-local. Real immutable source identities in [GOVERNING-SOURCES.md](GOVERNING-SOURCES.md)
are source records, not example task values.

## Optional workflow delivery skill

[Agent Workflows](skills/agent-workflows/SKILL.md) is an opt-in **Working prototype**
that delivers the ten original canonical contracts as byte-identical local references.
Discovery selects no workflow or role. An authorized instruction or handoff can
select both; the adapter loads only relevant contracts. It supplies no runtime,
installer, execution authority or consumer adoption.

For separately authorized manual installation, select and retain an immutable
repository revision, verify its bundle, and copy the entire `skills/agent-workflows`
folder unchanged to the product's supported user-level skill location. Record the
source commit/tree, manifest digest and actual destination/copy verification in
the consuming project's existing record. Content digests identify bytes; they
do not establish commit identity or installation provenance. Do not regenerate
new package bytes during release or installation. Updates are deliberate whole
folder replacements from a newly selected, verified revision, preserving local
adaptations for reconciliation. This prototype authorizes no installation.

In Codex CLI 0.167.0, explicit `policy.allow_implicit_invocation: true` in
`agents/openai.yaml` allows the project skill to appear in the native catalog;
`false` omits it. Native project-skill discovery was also tested in Claude Code
CLI 2.1.299. Discovery and loading do not select a workflow or role, supply
execution authority, or grant publication permission. Selection still requires
an authorized instruction or handoff. Verify discovery behavior on future tool
upgrades. Where discovery is unavailable, supply the entrypoint and relevant
references as files or pasted text. No native installer is provided. Independent
fresh-agent behavior evaluation remains a [separate gate](tests/fixtures/agent-workflows/README.md).

## Optional role coordination skill

[Role orchestration](skills/role-orchestration/SKILL.md) is an opt-in coordination
skill for mapping canonical roles to agent tools or humans, with shared account
budgets that are advisory only. It supplies setup and validation, with no agent
executor, automatic routing or required provider. Canonical roles and handoffs
retain their authority and source-status model. A binding grants no permission;
structural reviewer separation does not prove independence.

Select and retain an immutable skill revision, then manually copy the entire
`skills/role-orchestration` folder into your product's supported **user-level**
skill location. This repository does not install it into `.agents/skills` or
`.claude/skills`. Where filesystem discovery is unavailable, use its instructions
and canonical handoffs as files or pasted text. When Agent Workflows is explicitly
selected too, use its matching bundled canonical revision as the artifact source.
Standalone coordination retains its explicit older fixed fallback; reconcile and
obtain project consent before a handoff crosses revisions. See the skill's
[source routing](skills/role-orchestration/SKILL.md#canonical-inputs-at-one-immutable-revision).

With Python 3.10+, run `scripts/configure.py` from the copied skill directory,
or edit its example manually. Keep the config private and outside checkouts;
validate it with `scripts/validate_config.py /absolute/private/path/roles.json`.
See [configuration and limits](skills/role-orchestration/references/config.md).
No capacity is assumed, subscription fees are not credits, and required review
constrained by budget returns a blocked report for human decision.

## Versioning

Repository-local release guidance: use pre-1.0 versions while the operational
model is pressure-tested. See the [latest published release](https://github.com/jamesreimer/agent-workflows/releases/latest)
for the current distribution. A Working candidate is not a release.
Before `v1.0.0`, obtain evidence from at least one structurally different workflow
composition, alongside stable boundaries, authority interpretation, handoff
semantics, and deliberate consumer updates. Repeating reviewed-change in more
projects alone does not meet that evidence need. No arbitrary adoption count
is required.

Read [CHANGELOG.md](CHANGELOG.md) for concise release history and the
[changelog guidance](CONTRIBUTING.md#changelog) for its evidence and consumer
boundaries.

Follow [MAINTAINING.md](MAINTAINING.md) to prepare, qualify, and publish an
authorized release. It defines the annotated-tag and publication verification
procedure; passing validation does not authorize a release.

## Run checks

Install Python 3.10 or later and Node.js 24.22.1 or a later Node 24 release
(including npm). CI selects exactly Node 24.22.1.
The package engine and `.npmrc` enforce this Node 24 minimum at installation;
keep it on PATH when running the system hooks:

```sh
npm ci --ignore-scripts
python3 -m venv .venv
.venv/bin/python -m pip install -r requirements-dev.txt
git add <intended-paths>
.venv/bin/pre-commit run --all-files --show-diff-on-failure
git diff --check
npm audit
```

On Windows use `.venv\Scripts\python.exe` and
`.venv\Scripts\pre-commit.exe`. Initial installation needs network access;
required link checking is offline. Retain audit output and its exit status;
nonzero findings require the [local risk disposition](CONTRIBUTING.md#local-artifact-checks)
at release qualification. Review hook fixes and rerun. Optional commit
hooks use `.venv/bin/pre-commit install`; they do not replace all-files checks.

The [contributor guide](CONTRIBUTING.md) explains validation ownership and its
limits. [Governing sources](GOVERNING-SOURCES.md) resolve the pinned dependencies
of source-derived guidance.
The library is dedicated under [CC0-1.0](LICENSE).
