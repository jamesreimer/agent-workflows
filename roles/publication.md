# Publication

## Governing sources

- [Publication and Release Integrity (PRI)](../GOVERNING-SOURCES.md#publication-release-integrity), §§4–17.
- [Operational Execution Contract (OEC)](../GOVERNING-SOURCES.md#operational-execution-contract), §§6–8, 10–15.
- [Shared Asset Provenance (SAP)](../GOVERNING-SOURCES.md#shared-asset-provenance), §§5–8, 15.1, 20.
- [Architectural Reasoning (AR)](../GOVERNING-SOURCES.md#architectural-reasoning), §12.

These are governing-source references, operationalized only where the consuming
project's actual adopted or project authority makes them applicable. Record that
authority and its scope in the project-local instance. Linking a source does not
adopt it. Source-derived guidance retains the source's requirement strength;
workflow-local operational guidance is selected implementation practice, not
organization-neutral authority. Neither category may strengthen or weaken a
governing requirement. Proportionality changes expression, not required presence
or effect. See [authority and source status](../README.md#authority-and-source-status).

## Source-derived guidance

Establish authority for the particular publication action and its consequences;
implementation and review success are not that authorization (OEC §§6–7, 14).
Verify the actual input's correspondence to its immutable identity and all
required shared targets where authoritative consumption applies (SAP §§5–8,
15.1). Dispositions cannot hide unmet completion conditions (AR §12).

Stay within protected boundaries and stop if authority or required validation is
missing (OEC §§8, 10–12). Define recovery expectations where §13 applies. Neither
publication nor its validation authorizes live activation (OEC §14).
Completion and interruption reporting applies across executors under OEC §12.1;
it is not owned exclusively by publication.

Where PRI applies, use §§4–9 and 14–15 for transition completion, authorized-source
correspondence, identity binding, and verification of the resulting publication
state. Evidence must support the claimed completion; an initiating operation's
success alone is insufficient when the resulting state is observable (PRI §9).
Apply §§7–12 to fixed and moving identities, identity layers, and proposed
corrections or withdrawal. Account for observable publication state, including
assessment of possible exposure from a failed, interrupted, or premature
publication, before replacing, retrying, withdrawing, correcting, or claiming
completion (PRI §§4, 13). Use SAP for
applicable provenance semantics, and preserve separate downstream authority
(PRI §§15–16). Apply proportionality without waiving required integrity (PRI §17).

## Workflow-local operational guidance

The selected role remains active until project/user authority explicitly
reassigns it or an instantiated handoff transfers responsibility within that
authority. Generic `proceed`, `continue`, or equivalent language continues only
within the current role, authority, and completion boundary; it neither transfers
roles nor authorizes another role's actions. When the next required action belongs
to another role, stop and return an instantiated, ready-to-use handoff for that
role. Preparing that handoff does not itself authorize the sender to execute it.

Read the [review → publication](../handoffs/review-to-publication.md) handoff,
actual authorization, and reviewed candidate. Check that the state about to be
published is the reviewed state and that the project's publication conditions
are satisfied. If the candidate changed, route it through the composition's
proportionate re-review before relying on the review; do not silently substitute
bytes or conduct an unrequested redesign at publication time.

Perform only the authorized action. Return resulting object identities,
verification evidence, recovery performed, remaining conditions, and next owner
through [return of control](../handoffs/return-of-control.md). Publication is an
optional authorized boundary, not a prerequisite for reporting completed work.

### GitHub issue closure

When GitHub is the relevant host, closing keywords before issue references are
commands, not ordinary prose. Use `close` / `closes` / `closed`, `fix` / `fixes` /
`fixed`, or `resolve` / `resolves` / `resolved` before an issue reference only when
closure is authorized. Never use those forms in negative or prohibitive prose:
`do not close #N` is unsafe; use `#N remains open` or `leave issue #N open`.
Ordinary references remain permitted. This rule covers generated handoffs, PR
descriptions, commit messages, and merge/squash subjects and bodies.

Where GitHub issue-closing semantics apply, use this manual procedure regardless
of repository auto-close configuration; no setting change is required.

1. **Prepare the final gate.** After candidate correspondence and required
   validation, establish the exact PR head SHA (`<verified-head-sha>`) and the
   permitted landing method. The handoff's **Issue closure on merge** remains
   the single declaration: `none` or authorized `owner/repository#number`
   identities, with authority/source where material. Resolve every discovered
   closing reference to that canonical identity before comparison. Source text
   may use supported local, qualified, or GitHub issue URL forms without rewriting;
   in commit messages, local `#N` resolves against the repository whose default
   branch the commit will land in.
2. **Verify all controlling surfaces for that head.** Inspect actual PR closing
   relationships and applicable commit messages using:

   ```sh
   gh pr view <PR> --json closingIssuesReferences
   gh pr view <PR> --json commits
   ```

   Require the complete PR relationship set to equal the declaration exactly,
   including repository identity. Inspect commit messages only when they can
   contribute closing semantics to the default-branch landing; every such target
   must be declared. Intermediate messages are non-controlling for squash when an
   explicitly supplied final subject/body prevents their inclusion; merge/rebase
   methods must account for messages they land. Establish and check the exact
   final merge/squash subject and body, requiring their closing targets to match
   the declaration. For methods without a synthesized message, verify the messages
   that actually land instead. Do not rely on unchecked future host defaults.

   Aggregate all controlling relationships and commands, resolve full identities,
   and require that set to equal the declaration. For `none`, relationships must
   be empty and controlling messages must contain no closing command. Unexpected
   or missing targets, unresolved identities, or incomplete/unverifiable state
   block merge. Correct within authority and recheck. The relevant issue scope is
   the union of declared identities and targets reachable through PR relationships,
   controlling commit commands, and final landing commands; record their pre-merge
   states for comparison, without inspecting unrelated issues.

   This combined gate is the **last host-state verification immediately before
   merge**, not an earlier review/handoff snapshot or authorization. Any change to
   the head (including a required branch update), PR description, linked issues,
   controlling messages, final subject/body, or declaration invalidates it; rerun
   affected checks and all comparisons against the current head before merging.
3. **Bind the authorized merge to verified inputs.** For squash, use:

   ```sh
   gh pr merge <PR> --squash --match-head-commit <verified-head-sha> \
     --subject "<verified-subject>" --body "<verified-body>"
   ```

   Adapt to the permitted method while retaining a fail-closed head-match guard
   and binding actual landing messages to checked text. Explicitly supply verified
   merge/squash text; never fall back silently to a generated message. Confirm the
   CLI/API preserves an intended empty body before relying on `--body ""`;
   otherwise use a non-empty verified body. If the method cannot bind these inputs,
   stop and return the unresolved condition rather than claim the gate passed.
4. **Verify the result.** Identify the actual landed commit(s), establish their
   correspondence to the expected publication action, and inspect their subjects
   and bodies against the verified messages. Resolve landed closing references to
   full identities and extend the relevant issue set with any newly observed
   targets. Verify every declared issue reached the intended closed state and
   check issue states/history for unexpected closure through all three surfaces.
   For `none`, verify no relevant issue was unexpectedly closed. Retain landed
   identities, message correspondence, resulting-state evidence, and verification
   limits; report and route any mismatch for disposition.

An authorized issue remaining open because host auto-close differs is not alone
publication failure. Explicit closure requires the actual issue-closure owner or
that authority already held by the executor. Preserve and report unexpected
observed closure; route correction/reopening under project authority without
silently restoring state. Return unresolved conditions, follow-up, and next owner
through return of control. Publication authority does not imply issue-closure
authority or general project closeout: merge need not complete the work item,
and issues may legitimately remain open afterward.
