# Review → Publication

## Governing sources

- [Publication and Release Integrity (PRI)](../GOVERNING-SOURCES.md#publication-release-integrity), §§4–17.
- [Architectural Reasoning (AR)](../GOVERNING-SOURCES.md#architectural-reasoning), §12.
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

Where architectural completion is claimed, retain a disposition for each
material finding (AR §12): correction, bounded follow-up, explicit acceptance or
deferral with rationale, or dismissal with rationale. Preserve who legitimately
made the decision, evidence, remaining consequence, and follow-up where relevant.
A blocking/non-blocking label alone is insufficient; a disposition neither waives
other completion conditions nor authorizes new work (AR §12; OEC §§6–11).

Publication requires its actual execution authority; review success alone does
not supply it (OEC §§6–7, 14). Verify the consumed object and required targets,
not only the identity label (SAP §§5–8, 15.1).

Where PRI applies, the publication inputs and resulting evidence must support
its authorized-state correspondence, identity binding, and verification conditions
(§§4–9, 14–15). Apply its identity-preservation and correction rules (§§10–12)
and account for observable publication state, including assessment of possible
exposure from a failed, interrupted, or premature publication, before replacing,
retrying, withdrawing, correcting, or claiming completion (§§4, 13).
Publication claims remain limited by evidence and independent downstream authority
(§§14–17); this handoff supplies no alternative provenance or authorization model.

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

When making an artifact available under an identity for organizational, external,
downstream, or other durable reliance, or discovering unintended observable exposure,
use these workflow-local publication checks, informed by [PRI §§4–17](../GOVERNING-SOURCES.md#publication-release-integrity):

- Identify the authorized source state, intended completion, destination, and
  evidence connecting reviewed, authorized, and published content. A transformation
  needs correspondence evidence; a successful upload alone does not establish it.
- Say which identities are fixed (one state) or moving (declared to change), and
  what each release/component/content identity actually identifies. Without declared
  movement, treat an identity reasonably relied on as one state as fixed; technical
  mutability is not permission to reclassify it. Supply a content-binding identity
  when exact consumed bytes matter.
- Observe the resulting authoritative publication surface: verify identity,
  content correspondence, availability, and material release/component relationships.
  Wait for relevant state to settle or limit the claim to what is established.
  If the result cannot reasonably be observed, report only the transfer or other
  state evidenced; do not claim verified publication from initiation alone.
- Preserve established fixed identities. Treat materially uncertain in-place
  changes as substantive. Substantive corrections need a distinguishable successor
  or another identity-preserving mechanism. A content-binding identity cannot retain changed
  bytes. Accurate status/advisory updates or non-substantive corrections may occur
  in place only when the identity's meaning remains intact. Make a material
  correction/supersession relationship determinable where consumers need it.
- Before retrying, replacing, correcting, withdrawing, or claiming completion after
  failed, interrupted, or premature exposure, inspect actual observable state and
  retain evidence. Do not assume failure means nothing was published. Withdrawal
  needs authority and never frees a fixed identity for different content. Communicate
  harmful defects or withdrawal where legitimate disclosure constraints permit;
  preserve permissible identity/status evidence even if content must be removed.
- Publication does not itself adopt, install, deploy, or activate downstream state.
  Those actions need their own authority or an explicitly granted managed-propagation
  relationship. Stop on missing authority or unresolved integrity conditions.

Act as the [publication role](../roles/publication.md) only for the authorized
action below. Read the full review and all carried finding dispositions. If
publication authority or a required condition is absent, report readiness and
return control without performing that action.

Use relevant fields proportionately. A table row does not turn recommended
context into a mandatory condition. Preserve required controls and explain material
inapplicability; an empty placeholder supplies neither authority nor evidence.

| Input | Project-local value |
| --- | --- |
| Target and destination | `<repository>`; `<publication-target>` |
| Reviewed immutable state | `<commit-sha-or-object-digest>` |
| Review record and conclusion | `<review-record-tied-to-that-state>` |
| All material finding dispositions | `<finding-disposition-rationale-authority-evidence-and-remaining-effect>` |
| Bounded follow-up | `<owner-record-and-trigger-for-retained-work-or-none>` |
| Publication authority and contract | `<authorizer-and-permitted-action>`; `<objective-scope-protections-validation-completion-and-applicable-recovery>` |
| Governing source applicability | `<governing-standards-versions-and-scope-or-Standards-Templates-not-adopted>` |
| Authorized source state | `<precise-state-covered-by-publication-authority-and-relation-to-reviewed-state>` |
| Publication identities and surfaces | `<identities-fixed-or-moving-meanings-material-layers-and-authoritative-surfaces>` |
| Publication correspondence | `<reviewed-to-authorized-to-published-relationship-and-applicable-provenance-evidence>` |
| Completion and verification | `<intended-completion-resulting-state-checks-and-evidence-limits>` |
| Issue closure on merge (when GitHub issue-closing semantics apply) | `none` or `<authorized-owner/repository#number-identities>`; `<closure-authority-or-source-where-material>` |
| Prior exposure and recovery | `<observable-state-assessment-and-authorized-retry-correction-or-withdrawal-or-inapplicability>` |
| Required checks and conditions | `<validation-review-and-publication-gates-with-evidence>` |
| Required shared targets | `<resolved-identities-and-correspondence-evidence>` |
| Return destination | `<decision-owner-and-project-record>` |

Populate **Issue closure on merge** from the already-established substantive
completion boundary, issue-closure authority, and intended merge consequence
under the [reviewed-change composition](../workflows/reviewed-change.md#workflow-local-operational-guidance).
Publication consumes and enforces this result; the field is not an independent
policy choice for Publication.

For applicable GitHub publication, declare every issue by full
`owner/repository#number` identity, including issues in other repositories;
`none` means no closing relationship in any repository. Follow the
[GitHub issue-closure safety rule and verification](../roles/publication.md#github-issue-closure)
for all applicable closure-bearing surfaces: PR relationships, controlling commit
messages, and final landing messages, plus resulting issue state after merge.
Source references may use supported local or URL forms; resolve them to full
identities for comparison. This field does not require other consumers to use
GitHub or issues.

Check that the proposed publication state is the state reviewed. If it differs,
return it for proportionate re-review under the workflow-local reviewed-change
rule before relying on earlier review. Preserve the finding dispositions through
publication and use [return of control](return-of-control.md) to report resulting
identity, verification, unresolved conditions, and follow-up. Do not silently
extend publication into live activation or general project closeout.
