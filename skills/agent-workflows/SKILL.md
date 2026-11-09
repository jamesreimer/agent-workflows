---
name: agent-workflows
description: Use explicitly selected Agent Workflows role and handoff contracts from local bundled references. Only use when this skill is explicitly requested; discovery alone selects no workflow or role.
---

# Agent Workflows

Optional Working delivery adapter: workflows and roles are contracts, not engines.
If available context does not identify both an authorized selected workflow and
role, only note availability and stop. An authorized instruction or existing
handoff can select them; no additional project record is needed to activate this
adapter. Never default ordinary tasks to Reviewed Change.

For a selected assignment, read only its local composition, role and applicable
handoff below, then follow those contracts within actual project authority.
Preserve their source-derived versus workflow-local status and requirement force.
Selection grants no execution, merge, release, standards adoption or repository
authority. Do not infer a role transfer from “continue” or from a prepared handoff.

- Composition, only when selected: [Reviewed Change](references/canonical/workflows/reviewed-change.md).
- Roles, load the selected one: [Planning](references/canonical/roles/planning.md),
  [Implementation](references/canonical/roles/implementation.md),
  [Independent Review](references/canonical/roles/independent-review.md),
  [Publication](references/canonical/roles/publication.md).
- Handoffs, load only the relevant incoming or outgoing contract:
  [Planning → Implementation](references/canonical/handoffs/planning-to-implementation.md),
  [Implementation → Review](references/canonical/handoffs/implementation-to-review.md),
  [Review → Correction](references/canonical/handoffs/review-to-correction.md),
  [Review → Publication](references/canonical/handoffs/review-to-publication.md),
  [Return of Control](references/canonical/handoffs/return-of-control.md).

Resolve required local dependencies as needed; do not load all references by default.
The [source pins](references/canonical/GOVERNING-SOURCES.md) provide traceability,
not consumer adoption. Keep filled handoffs and execution evidence with the consumer.

If already-loaded instructions materially conflict about the current role or
handoff responsibility, stop the affected action, cite both instructions and
return control to legitimate project authority. Do not scan installed skills,
configs or credentials for conflicts, invent a precedence system, or treat load
order as authority. General repository and publication procedures remain with
the actual project.

The [manifest](references/manifest.json) binds exact source bytes, not a Git commit
or installation. Use the recorded selected revision and installation provenance
for those identities. If optional role-orchestration is explicitly selected too,
use this selected revision's bundled contracts as its artifact source. Its older
fixed fallback requires deliberate reconciliation before crossing revisions;
do not discover companions automatically. Missing required contracts or unresolved
revision correspondence stop dependent work and return control.
