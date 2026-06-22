---
name: edit-fluentplayer-doc
description: 'Edit the CONTENT of an EXISTING Fluent Player documentation page in place (same slug, same file location) while preserving every site convention. Handles wording changes, new/removed sections, updated steps, and swapped or added screenshots. USE FOR: edit the X doc, update the wording on, add a section to, rewrite this page, fix the screenshot in, this doc is out of date, correct an error in the doc, expand the X guide. DO NOT USE FOR: creating a new page (use write-fluentplayer-doc), renaming the slug / moving to another category / deleting / reordering the sidebar (use restructure-fluentplayer-docs), or site-wide audits (use audit-fluentplayer-docs).'
license: MIT
compatibility: 'VitePress repo using guide/<category>/<slug>.md layout. Sidebar defined in .vitepress/config.mts (guideGroups const). Images stored at guide/public/<category>/<slug>/. Requires Node + npm to run docs:build.'
metadata:
  project: fluentplayer-user-docs
  canonical-rules: CLAUDE.md
---

# Edit a Fluent Player Doc

Modify an existing page in place. The slug, file path, and sidebar `link` stay the same.
Canonical conventions live in `CLAUDE.md` — this skill is the *procedure* for safe edits.

---

## Agent Behavior Rules

1. **DO** locate the exact file before editing and confirm it with the user.
2. **DO** preserve all conventions on every edit: full `/guide/<category>/<slug>` links,
   `**term**` bold (no inner spaces), no support boilerplate, "(Pro)" markers for Pro features.
3. **DO** keep the H1 as line 1 (or immediately after optional frontmatter); if the H1 display
   title changes, update the matching sidebar `text` in `guideGroups` (the `link` stays the same).
4. **DO** put any new/replacement images in the doc's existing image folder
   `guide/public/<category>/<slug>/`.
5. **DO** end on a green `npm run docs:build`.
6. **DO NOT** change the slug, rename, or move the file — that is restructure work.
7. **DO NOT** introduce relative links (`./slug`, `../slug`) — always use full `/guide/...` paths.
8. **DO NOT** add closing support boilerplate; link `[How to Get Support](/guide/support)`.
9. **DO NOT** touch unrelated docs.
10. **DO** Before editing, map the target doc's position in the site: which category folder it
    lives in, which sidebar group it belongs to, and which sections need updating — so every
    change matches the user journey.

---

## Phase 1: Setup (Interactive)

### 1.1 Target page
> **Which doc?** (title, slug, or URL)

Resolve to a file:
```
find guide -name '<slug>.md' | grep -v '/public/'
```
If ambiguous or not found, ask. Record `TARGET_PATH`, `SLUG`, `CATEGORY`.

### 1.2 The change
> **What should change?** (new wording, add/remove a section, update steps, swap image…)

Record as `CHANGE`.

### 1.3 Images & title
> **Does this change involve images?** and **Does the page title (H1) change?**

Record `TOUCHES_IMAGES` and `TITLE_CHANGES`.

### 1.4 Confirm

| Parameter      | Value |
| -------------- | ----- |
| File           | ...   |
| Change         | ...   |
| Touches images | ...   |
| Title changes  | ...   |

Wait for confirmation.

---

## Phase 2: Context

1. Read `TARGET_PATH` fully.
2. Read `CLAUDE.md` for conventions.
3. If `TITLE_CHANGES`: read `.vitepress/config.mts` and find the entry in `guideGroups` whose
   `link` matches `/guide/<CATEGORY>/<SLUG>` (or `/guide/<SLUG>` for flat items). Its `text`
   must be updated to match the new H1 (the `link` stays the same).
4. Read 1 neighbor doc in the same `CATEGORY` if matching house style for new content.

---

## Phase 3: Procedure

```
1. EDIT     - Apply CHANGE to TARGET_PATH using Edit.
              Enforce conventions on touched lines: full /guide/... links, **term** bold,
              "(Pro)" markers, no boilerplate.
              Pro features: wrap with ::: info Pro feature callout.

2. IMAGES   - If TOUCHES_IMAGES: add/replace files in
              guide/public/<CATEGORY>/<SLUG>/ and update the
              ![alt](/guide/public/<CATEGORY>/<SLUG>/<file>.webp) refs.
              Remove image refs whose files you deleted.

3. SIDEBAR  - If TITLE_CHANGES: update the matching entry's "text" in guideGroups
              inside .vitepress/config.mts. Do NOT change its "link". Keep valid TypeScript.

4. BUILD    - npm run docs:build ; fix warnings; rebuild until clean.
```

---

## Phase 4: Verify & Report

Report:
- File edited: `TARGET_PATH`
- Summary of what changed
- Images touched? (added/replaced/removed)
- Sidebar `text` updated? (yes/no — link unchanged)
- Build: pass / fail

---

## Quick Reference

### Locate
```
File by slug:   find guide -name '<slug>.md' | grep -v '/public/'
Sidebar entry:  grep -n '/guide/<category>/<slug>' .vitepress/config.mts
Image folder:   guide/public/<category>/<slug>/
```

### Formats (unchanged from site rules)
```
Cross-link:  [Text](/guide/<category>/<slug>)   (full path — never relative)
Image ref:   ![Alt](/guide/public/<category>/<slug>/<name>.webp)
Bold:        **term**                            (no inner spaces)
Pro callout: ::: info Pro feature
             <Feature> is available only with **FluentPlayer Pro**.
             :::
```

### Key Principles
1. **In place only** — same slug, same path, same sidebar link.
2. **Conventions survive edits** — don't regress links/bold/boilerplate.
3. **Title change ⇒ sidebar text change** (link stays).
4. **Images live in the doc's own folder.**
5. **Green build or it's not done.**
