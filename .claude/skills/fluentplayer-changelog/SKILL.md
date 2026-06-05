---
name: fluentplayer-changelog
description: 'Write and maintain the Fluent Player docs changelog (guide/changelog.md in the fluentplayer-user-docs VitePress site). Scaffolds the page on first use (it is currently empty), then prepends a new reverse-chronological version section with user-facing Added/Changed/Fixed entries derived from release notes or git history. USE FOR: write a changelog entry, update the changelog, add a release note, document version X. DO NOT USE FOR: creating other doc pages (use fluentplayer-add-doc-page) or editing feature guides.'
license: MIT
compatibility: Operates on the fluentplayer-user-docs VitePress repo. Requires Node/npm and git.
metadata:
  project: fluentplayer-user-docs
---

# Maintain the Fluent Player changelog

Keep `guide/changelog.md` a clean, reverse-chronological, user-facing record of releases. The file is linked from the top nav (the `Changelog` item in `.vitepress/config.mts`) but is **currently empty** — the first run scaffolds it.

---

## Agent behavior rules

1. **DO** write entries for the **reader of the docs** (what changed for them), not raw commit subjects.
2. **DO** keep newest version at the top (reverse chronological).
3. **DO** group changes under **Added / Changed / Fixed** (and **Removed** when relevant); omit empty groups.
4. **DO** label Pro-only changes with **(Pro)**, matching the rest of the site.
5. **DO NOT** invent versions or dates — get them from the user, a release note, or git tags.
6. **DO NOT** dump `git log` verbatim; translate commits into plain-language, deduplicated entries.

---

## Phase 1: Gather the release

Collect:
- **Version** — e.g. `1.0.5` (and whether it covers Free, Pro, or both).
- **Date** — release date in `YYYY-MM-DD`.
- **Changes** — from the user, a provided release note, or by inspecting history:
  ```bash
  git log --oneline <last-tag>..HEAD
  ```
  Use this only as raw material; rewrite into user-facing language.

---

## Phase 2: Scaffold (first run only)

If `guide/changelog.md` is empty, create the structure:

```markdown
# Changelog

All notable user-facing changes to Fluent Player are documented here. The newest release is listed first.

## v1.0.5 — 2026-06-05

### Added
- ...

### Changed
- ...

### Fixed
- ...
```

Optionally add `prev`/`next` frontmatter to match neighboring pages (e.g. `support.md` uses `prev`/`next`), pointing back to Support.

---

## Phase 3: Prepend a new version

For subsequent releases, insert the new `## vX.Y.Z — YYYY-MM-DD` section directly **below the intro line and above the previous newest version**. Do not disturb existing entries.

Entry style:
- One change per bullet, imperative-free and user-facing: `Added Vimeo as a video source (Pro).` not `feat: add vimeo provider`.
- Link to the relevant doc page when it helps: `Added [Vimeo](/guide/integrations/vimeo-integration) as a video source (Pro).`
- Mark Pro-only items with **(Pro)**.

---

## Phase 4: Verify

- Confirm the `Changelog` nav item in `.vitepress/config.mts` still points to `/guide/changelog` (it does by default).
- Run `npm run docs:build` to confirm no dead links from any doc-page references you added.
- Report the version added and a one-line summary of the groups touched.
