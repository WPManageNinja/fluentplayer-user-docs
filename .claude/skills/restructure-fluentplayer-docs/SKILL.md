---
name: restructure-fluentplayer-docs
description: 'Perform STRUCTURAL operations on Fluent Player docs while protecting reference integrity: rename a doc (change its slug/URL), move a doc to another category, delete a doc, merge two docs, or reorder the sidebar. Always rewrites inbound links, moves the image folder, and updates rewrites + guideGroups in config.mts. USE FOR: rename this doc, change the slug, change the URL of, move X to another category, delete this doc, remove this page, merge these two docs, reorder the sidebar, change the order of pages. DO NOT USE FOR: content/wording edits (use edit-fluentplayer-doc), creating a brand-new page (use write-fluentplayer-doc), or read-only audits (use audit-fluentplayer-docs).'
license: MIT
compatibility: 'VitePress repo using docs/<category>/<slug>.md layout, served at FLAT root slugs via the rewrites map in .vitepress/config.mts. Sidebar defined in guideGroups in the same file. Requires git, Node + npm to run docs:build.'
metadata:
  project: fluentplayer-user-docs
  canonical-rules: CLAUDE.md
---

# Restructure Fluent Player Docs

Structural changes are high-risk because **a served slug is a public URL**. Fluent Player uses
a hand-written `rewrites` map in `.vitepress/config.mts`: each source file
`docs/<category>/<file>.md` is served at a flat root URL `/<slug>` (the map's value). The
category folder is NOT part of the URL.

- **Moving a doc to another category does NOT change its URL** — only the `rewrites` KEY changes.
- **Renaming the served slug DOES change its URL** — every inbound `/<old-slug>` link breaks, and
  the indexed live URL stops working (GitHub Pages has no server-side redirects). Confirm with
  the user that a URL change is really wanted.

Canonical conventions live in `CLAUDE.md`.

---

## Agent Behavior Rules

1. **DO** confirm the operation and exact old/new identifiers before any change.
2. **DO** survey inbound links before acting: `grep -rnE '\]\(/<slug>(#[^)]*)?\)' docs index.md`.
3. **DO** keep the `rewrites` map and `guideGroups` in sync with every file you move, rename,
   or delete — keeping valid TypeScript.
4. **DO** move the doc's image folder with it and fix in-doc image refs whenever the
   file's folder or name changes.
5. **DO** use `git mv` for renames/moves so history is preserved.
6. **DO** end on a green `npm run docs:build` (it fails on dead internal links).
7. **DO NOT** change a served slug without rewriting every inbound `/<old-slug>` reference
   and warning the user the live URL changes.
8. **DO NOT** leave an orphaned image folder or featured card under the old name.
9. **DO NOT** delete a doc without removing its `rewrites` entry AND sidebar entry, and
   reporting any inbound links that will now be dead.
10. **DO NOT** change page wording here (that's edit-fluentplayer-doc).

---

## Phase 1: Setup (Interactive)

### 1.1 Operation
> **Which operation?** rename | move-category | delete | reorder | merge

Record as `OPERATION`.

### 1.2 Identifiers (by operation)
- **rename:** `OLD_SLUG`, `NEW_SLUG`, `CATEGORY`
  (the new slug must not already be a `rewrites` value: `grep -n "': '<new>.md'" .vitepress/config.mts`)
- **move-category:** `SLUG`, `OLD_CATEGORY`, `NEW_CATEGORY`, target sidebar group
- **delete:** `SLUG` + `CATEGORY`
- **merge:** `FROM_SLUG` + `FROM_CATEGORY`, `INTO_SLUG` + `INTO_CATEGORY`
  (content of FROM folded into INTO, then FROM deleted)
- **reorder:** sidebar group + the new item order

Resolve current path(s) and served slug(s): `grep -n "<slug>" .vitepress/config.mts` (the
`rewrites` line shows `'docs/<cat>/<file>.md': '<served-slug>.md'`). Note that a few file names
differ from their served slug (e.g. `docs/block-editor/branding.md` → `/branding-appearance`).

### 1.3 Inbound link survey
Run `grep -rlnE '\]\(/<served-slug>(#[^)]*)?\)' docs index.md` for each affected page and show
the user the count + file list so the blast radius is visible before confirming.

### 1.4 Confirm

| Parameter            | Value |
| -------------------- | ----- |
| Operation            | ...   |
| Old source path      | ...   |
| New source path      | ...   |
| Served URL           | unchanged `/<slug>` / changes `/<old>` → `/<new>` |
| Inbound links        | N files (listed) |
| Sidebar change       | ...   |

Wait for confirmation.

---

## Phase 2: Context

1. Read `CLAUDE.md`.
2. Read `.vitepress/config.mts` and locate the affected `rewrites` entry and `guideGroups` entry.
3. Confirm the image folder path(s): `docs/public/<category>/<file>/`.

---

## Phase 3: Procedure (by operation)

```
RENAME (served slug change — URL CHANGES):
  1. git mv docs/<CAT>/<OLD_SLUG>.md docs/<CAT>/<NEW_SLUG>.md
  2. git mv docs/public/<CAT>/<OLD_SLUG>/ docs/public/<CAT>/<NEW_SLUG>/   (if exists)
  3. In the moved file, rewrite image refs:
       /docs/public/<CAT>/<OLD_SLUG>/ → /docs/public/<CAT>/<NEW_SLUG>/
  4. config.mts rewrites: replace the entry with
       'docs/<CAT>/<NEW_SLUG>.md': '<NEW_SLUG>.md'
  5. Rewrite every inbound link /<OLD_SLUG>[#anchor] → /<NEW_SLUG>[#anchor] in docs/ and index.md
  6. config.mts guideGroups: set the entry link to '/<NEW_SLUG>' (update text if the title changed)
  7. npm run featured:generate, then delete the orphaned public/images/featured/<OLD_SLUG>.png
  8. BUILD

MOVE-CATEGORY (folder changes — URL UNCHANGED):
  1. git mv docs/<OLD_CAT>/<FILE>.md docs/<NEW_CAT>/<FILE>.md
  2. git mv docs/public/<OLD_CAT>/<FILE>/ docs/public/<NEW_CAT>/<FILE>/   (if exists)
  3. In the moved file, rewrite image refs:
       /docs/public/<OLD_CAT>/<FILE>/ → /docs/public/<NEW_CAT>/<FILE>/
  4. config.mts rewrites: change only the KEY to 'docs/<NEW_CAT>/<FILE>.md'; keep the value
     (served slug) exactly as it was. Inbound links need no change.
  5. config.mts guideGroups: move the {text, link} object into the correct sidebar group
     (link stays '/<slug>')
  6. npm run featured:regenerate is NOT needed unless you want the card eyebrow (category
     label) refreshed; if so, delete that one card and run npm run featured:generate
  7. BUILD

DELETE:
  1. grep for inbound /<SLUG> links → report links that will break; fix or flag
  2. git rm docs/<CAT>/<FILE>.md
  3. git rm -r docs/public/<CAT>/<FILE>/   (if exists)
  4. config.mts: remove the rewrites entry AND the guideGroups entry
  5. git rm public/images/featured/<SLUG>.png
  6. BUILD

MERGE (FROM into INTO):
  1. Fold FROM's content into docs/<INTO_CAT>/<INTO_FILE>.md (preserve conventions)
  2. Move any still-needed images into INTO's image folder; fix refs
  3. Rewrite inbound /<FROM_SLUG>[#anchor] links → /<INTO_SLUG>[#matching-anchor]
  4. Delete FROM (file + image folder + rewrites entry + sidebar entry + featured card)
  5. BUILD

REORDER:
  1. Reorder items within the group in guideGroups inside .vitepress/config.mts
     (valid TypeScript — keep collapsed settings on nested groups as they are)
  2. BUILD
```

---

## Phase 4: Verify & Report

Report:
- Operation performed; old → new source path(s); whether the served URL changed
- Inbound links rewritten: count + file list
- Image folder moved/removed; featured card added/removed
- `rewrites` + sidebar diff
- Dead links remaining (for delete): listed, or "none"
- Build: pass / fail

---

## Quick Reference

### Survey & locate
```
Rewrite entry:   grep -n "<slug>" .vitepress/config.mts
Inbound links:   grep -rlnE '\]\(/<slug>(#[^)]*)?\)' docs index.md
Image folder:    docs/public/<category>/<file>/
Sidebar entry:   grep -n "link: '/<slug>'" .vitepress/config.mts
Featured card:   public/images/featured/<slug>.png
```

### URL model
```
Source file  docs/<category>/<file>.md   (on disk — free to move between categories)
Served URL   /<slug>                     (the rewrites VALUE — this is the public URL)

move-category  → URL UNCHANGED → change the rewrites key only
rename (slug)  → URL CHANGES   → rewrites value, sidebar link, inbound links, featured card
```

### Key Principles
1. **The rewrites value is the public URL** — the category folder is not part of it.
2. **Survey blast radius first** and show it before acting.
3. **Image folder travels with the doc**; never orphan it.
4. **rewrites + guideGroups stay in sync** in config.mts.
5. **Use `git mv`; finish on a green build.**
