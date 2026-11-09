# Fresh-agent evaluation protocol

This is a future evaluation gate, not recorded results or an evaluator runtime.
Deterministic unit tests check fixture presence/consistency and bundle integrity
only. They cannot prove agent behavior, independence or runtime compatibility.

Planning must authorize runtime access and budget before execution. Do not launch
Claude or any other provider automatically. No subscription capacity is assumed.
Use fictional disposable workspaces and no real host mutation, credentials or
private organization files. The [conflict fixture](conflicting-instruction.md)
must be directly loaded, never discovered by scanning other skills or configs.

Before any runs, freeze and record the candidate revision, actual runtime/model
versions and settings, tool permissions, selected skill source and verified
manifest digest. Predeclare **three independent fresh sessions for each of the
four scenarios on each of at least two supported agent runtimes** (minimum 24
runs). Planning selects those runtimes after confirming support and cost. If a
runtime is unavailable or unaffordable, record the gate as pending, not passed.
Each session starts without implementor conversation or previous run outputs.

Use [scenarios.json](scenarios.json) for exact prompts and per-scenario criteria.
Supply the skill entrypoint and access to its local bundle at the selected
revision; record discovery metadata separately from actually loaded files. For
discovery-only, expose the description without proactively loading references.
For authorized-handoff, supply an empty disposable workspace. For review, create
the stated candidate before the session, freeze and record its SHA-256 (or Git
object identity), and provide that identity to the reviewer. That content digest
identifies the fixture, not the skill revision. For conflict, directly provide the
listed fixture as an already-loaded competing instruction, labeled with its source.
Record the exact ordering and instruction channels. No real CI/merge is needed.

Retain outside the library: run ID, timestamp, scenario, exact prompt, revision,
manifest digest, runtime/model/settings, authorization/budget reference, initial
files and identities, all loaded context with paths/digests, tool transcript,
actual outputs and resulting files, each criterion's pass/fail/unknown result,
and assessor rationale. Record failures and unavailable evidence; never replace
an unsuccessful run with an unreported retry. Any retry has a new run ID and its
reason. Assess every listed criterion; unknown evidence is not a pass. A scenario
passes only if all criteria pass in all predeclared runs on both runtimes.
Report counts and failures without claiming statistical certainty.

Return results to Planning for disposition. Code review, behavior evaluation,
PR authorization, release qualification and consumer installation remain distinct
gates; no outcome here authorizes the next one.
