# Maintaining agent-workflows

This repository-local procedure owns release preparation and publication for
`jamesreimer/agent-workflows`. Ordinary changes follow
[CONTRIBUTING.md](CONTRIBUTING.md).
Contribution permission, review approval, and passing validation do not grant
merge or release authority. Obtain explicit human authorization for the intended
publication action, version, and exact release commit before creating or pushing
a tag or publishing a GitHub Release. A merge authorization is not a release
authorization. This procedure supplies mechanics, not authority or an
organization-neutral release policy.

## Repo-template reconciliation

Generic repository mechanics remain owned by
[repo-template](https://github.com/jamesreimer/repo-template). Evaluate generic
defects at that owner and deliberately review applicable upstream improvements
against current downstream state, preserving legitimate local adaptations.
Agent Workflows owns its licensing decision; matching license bytes do not
authorize automatic adoption of upstream licensing changes.

Retain reviewable evidence in each reconciliation PR of:

1. the verified upstream repository and exact target commit SHA;
2. dispositions of applicable upstream changes reviewed, including reasons for
   adaptations, rejection, or deferral;
3. correspondence evidence for inherited files and surfaces, comparing against
   the target Git objects and identifying intentional differences and the
   downstream candidate verified;
4. applicable installed host-configuration verification, including effective
   default-branch rules and required-check production where relevant. Read back
   installed settings independently; copied configuration does not prove
   enforcement. Explain non-applicability where appropriate.

Run the complete validation composition and review consumer impact. Unresolved
identity, correspondence, or applicable host-verification gaps prevent a successful
reconciliation claim. Retain history in Git and PRs, without a permanent basis or
alignment inventory in repository files. Reconciliation does not authorize
automatic propagation, overwrite local adaptations, or grant publication or host
mutation authority. It does not advance the independent
[governing-source pins](GOVERNING-SOURCES.md).

## Release identifiers

Use versions `MAJOR.MINOR.PATCH` and matching Git tags `vMAJOR.MINOR.PATCH`, with
non-negative integer components and no leading zeroes. Review the actual changes
and consumer impact when choosing the version. While the operational model is
pressure-tested, use pre-1.0 versions.
Within `0.x`, increment MINOR for incompatible changes or compatible additions,
and PATCH for compatible fixes or clarifications. Describe incompatibilities and
adoption implications explicitly in the release notes.

Promotion to `v1.0.0` requires the [README evidence boundary](README.md#versioning):
at least one structurally different workflow composition, stable boundaries,
authority interpretation, handoff semantics, and deliberate consumer updates.
Repeating reviewed-change use alone is insufficient; no arbitrary adoption count
is required. After 1.0, increment MAJOR for incompatible changes, MINOR for
compatible additions, and PATCH for compatible fixes or clarifications.

Use the complete Git tag as the GitHub Release title, for example `v0.1.1`,
following the upstream default display convention. Semantic Versioning governs
version numbers, not release titles; the editable title does not replace the
immutable tag or its verified target.

Formal releases use **annotated Git tags**. A GitHub Release must correspond to
the verified tag. Published release tags are immutable: do not move, replace,
or delete/recreate them. A correction requiring different content or a different
commit requires a new version and tag.

## Prepare the release

The commands below use Git, the GitHub CLI, and a POSIX shell. Run them from the
repository root. Replace placeholders with the selected version, full release
commit SHA, and a release-notes path outside the checkout. Stop on any command
or verification failure; do not continue to a later publication step.

1. Confirm `origin` is `jamesreimer/agent-workflows`, fetch current `main` and
   tags, and require a clean working tree:

   ```sh
   git remote -v
   git fetch origin --tags &&
     test -z "$(git status --porcelain)"
   ```

2. Select reviewed, merged work on `main` under the actual project contract,
   including required independent review and human publication authorization.
   Record the reviewed PR-head SHA and the resulting published SHA with their
   content correspondence evidence. A merge or squash can produce a different
   SHA; release the qualified published commit, not an unmerged PR head.
   Confirm the required hosted `Repository validation` check passed for that
   published commit, and check out that exact commit for local qualification:

   ```sh
   tag='vMAJOR.MINOR.PATCH'
   release_commit='<full published commit SHA>'
   notes_file='<path to prepared release notes>'
   git merge-base --is-ancestor "$release_commit" origin/main &&
     git switch --detach "$release_commit" &&
     test "$(git rev-parse HEAD)" = "$release_commit"
   gh run list --repo jamesreimer/agent-workflows --commit "$release_commit" \
     --workflow validate.yml --json databaseId,headSha,status,conclusion,url
   ```

   Require successful ancestry and checkout checks. Inspect the hosted result
   and logs: it must be completed successfully and checkout must resolve the
   intended release commit. Missing or failed CI stops release preparation.

3. Follow the [setup instructions](README.md#run-checks), then run the complete
   qualification against this exact checked-out commit:

   ```sh
   .venv/bin/pre-commit run --all-files --show-diff-on-failure &&
     git diff --check &&
     python3 scripts/validate_local.py &&
     python3 -m unittest discover -s tests &&
     npm audit &&
     test "$(git rev-parse HEAD)" = "$release_commit" &&
     test -z "$(git status --porcelain)"
   ```

   On Windows use the runner paths described in the README. Pre-commit includes
   the local artifact validator and its tests; the explicit Python commands
   also record their standalone results. Complete the manual source, authority,
   and governing-source checks in [CONTRIBUTING.md](CONTRIBUTING.md#local-artifact-checks)
   for the release, retaining review evidence and its limits. If checks fix files
   or a defect needs correction, return through the contribution/review process;
   select and qualify the resulting published commit before proceeding. Never
   release uncommitted fixes or treat CI as publication permission.

4. Check local tags, remote tags, and existing GitHub Releases to select an unused
   identifier. Inspect all results and paginate the release list if necessary:

   ```sh
   git tag --list
   git ls-remote --tags origin
   gh release list --repo jamesreimer/agent-workflows --limit 100
   ```

   A tag or release already using the intended identifier stops new creation;
   do not overwrite it. Review changes since the previous release, or the full
   baseline for the first release. Prepare notes describing the actual changes,
   consumer impact, incompatibilities, and deliberate adoption steps. Keep the
   notes outside the checkout so it remains clean. Confirm GitHub's detected
   license remains CC0-1.0 and retain the exact SHA, checks, and release decision
   in the project's work record.

## Create and verify the tag

After explicit release authorization for the chosen version and full qualified
published SHA, refresh main and confirm containment and clean state again:

```sh
git fetch origin &&
  git merge-base --is-ancestor "$release_commit" origin/main &&
  test "$(git rev-parse HEAD)" = "$release_commit" &&
  test -z "$(git status --porcelain)"
```

Require exit status zero. Failed fetch, absent ancestry, changed HEAD, or dirty
state stops tagging. Create the annotated tag explicitly against the intended
commit, without force:

```sh
git tag -a "$tag" "$release_commit" -m "agent-workflows $tag"
```

Verify both the local tag object's type and its peeled commit:

```sh
test "$(git cat-file -t "refs/tags/$tag")" = tag &&
  test "$(git rev-parse "refs/tags/$tag^{commit}")" = "$release_commit"
```

Require exit status zero. A lightweight tag is not an annotated tag even if it
points to the right commit. Stop on a mismatch; do not normalize existing tags.

## Publish and verify

Within the explicit release publication authorization, push only the verified
tag without force:

```sh
git push origin "refs/tags/$tag"
```

Before creating the GitHub Release, define and run this verification:

```sh
verify_remote_tag() {
  local_tag_object=$(git rev-parse "refs/tags/$tag") &&
    remote_tag=$(git ls-remote --exit-code origin "refs/tags/$tag") &&
    remote_commit=$(git ls-remote --exit-code origin "refs/tags/$tag^{}") &&
    test "$remote_tag" = "$(printf '%s\t%s' "$local_tag_object" "refs/tags/$tag")" &&
    test "$remote_commit" = "$(printf '%s\t%s' "$release_commit" "refs/tags/$tag^{}")"
}
verify_remote_tag
```

Require exit status zero. The remote tag object must match the local annotated
tag object, and the remote peeled commit must match the intended full release
SHA. `--exit-code` fails if a required ref is absent, including the peeled entry
expected for an annotated tag. Failure stops publication without overwriting
remote state.

Only after successful tag verification, create and inspect its GitHub Release:

```sh
gh release create "$tag" --repo jamesreimer/agent-workflows --verify-tag \
  --title "$tag" --notes-file "$notes_file" &&
  gh release view "$tag" --repo jamesreimer/agent-workflows \
    --json url,tagName,name,isDraft,isPrerelease,publishedAt,body &&
  verify_remote_tag
```

`--verify-tag` prevents implicit tag creation; it does not verify tag type or
commit identity, which the earlier checks establish. Require successful commands
and inspect the result: the tag and title must both equal the intended complete tag,
notes must match the prepared text, `publishedAt` must be populated, and both
`isDraft` and `isPrerelease` must be false. Pre-1.0 versioning alone does not mark
a formal release as a GitHub prerelease. Confirm the returned release page and
its source ZIP and tar archives are available. Reverify the remote tag object
and peeled commit after publication as above.

If publication fails after the tag push, inspect the actual remote tag and
release state before any retry; preserve the published tag. Return failures or
mismatches to Planning rather than moving, replacing, or deleting published
state. On success, record the release URL, tag object, full release commit SHA,
qualification and correspondence evidence, and any remaining conditions in the
project record. Complete relevant work items only within their actual authority.
