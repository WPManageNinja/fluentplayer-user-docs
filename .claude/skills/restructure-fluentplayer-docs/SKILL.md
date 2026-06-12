---
name: restructure-fluentplayer-docs
description: 'Perform STRUCTURAL operations on Fluent Player docs while protecting reference integrity: rename a doc (change its slug/URL), move a doc to another category, delete a doc, merge two docs, or reorder the sidebar. Always rewrites inbound links, moves the image folder, and updates guideGroups in config.mts. USE FOR: rename this doc, change the slug, change the URL of, move X to another category, delete this doc, remove this page, merge these two docs, reorder the sidebar, change the order of pages. DO NOT USE FOR: content/wording edits (use edit-fluentplayer-doc), creating a brand-new page (use write-fluentplayer-doc), or read-only audits (use audit-fluentplayer-docs).'
license: MIT
compatibility: 'VitePress repo using guide/<category>/<slug>.md layout. Sidebar defined in .vitepress/config.mts (guideGroups const). No URL rewrite rules — category IS part of the public URL. Requires git, Node + npm to run docs:build.'
metadata:
  project: fluentplayer-user-docs
  canonical-rules: CLAUDE.md
---

# Restructure Fluent Player Docs

Structural changes are high-risk because **a slug is a public URL**: renaming or moving a doc
breaks every inbound link. Unlike Fluent Forms, Fluent Player has **no rewrite rules** — the
full path `/guide/<category>/<slug>` is the public URL. Moving a doc to a different category
changes its URL and requires rewriting all inbound links. This skill makes those changes safely.
Canonical conventions live in `CLAUDE.md`.

---

## Agent Behavior Rules

1. **DO** confirm the operation and exact old/new identifiers before any change.
2. **DO** survey inbound links before acting: `grep -rln '/guide/<old-path>' guide`.
3. **DO** rewrite every inbound `/guide/<old-path>` reference to the new path.
4. **DO** move the doc's image folder with it and fix in-doc image refs whenever the
   slug or category changes.
5. **DO** update `guideGroups` in `.vitepress/config.mts` — `link`, `text`, and group
   placement as needed — keeping valid TypeScript.
6. **DO** use `git mv` for renames/moves so history is preserved.
7. **DO** end on a green `npm run docs:build`.
8. **DO NOT** rename or move without rewriting every inbound reference.
9. **DO NOT** leave an orphaned image folder under the old path.
10. **DO NOT** delete a doc without removing its sidebar entry AND reporting any inbound
    links that will now be dead.
11. **DO NOT** change page wording here (that's edit-fluentplayer-doc).
12. **REMEMBER:** Moving category changes the URL — unlike sites with rewrite rules,
    ALL inbound `/guide/<old-cat>/<slug>` links must be rewritten to `/guide/<new-cat>/<slug>`.

---

## Phase 1: Setup (Interactive)

### 1.1 Operation
> **Which operation?** rename | move-category | delete | reorder | merge

Record as `OPERATION`.

### 1.2 Identifiers (by operation)
- **rename:** `OLD_SLUG`, `NEW_SLUG`, `CATEGORY`
  (verify new slug is globally unique: `find guide -name '<new>.md' | grep -v '/public/'`)
- **move-category:** `SLUG`, `OLD_CATEGORY`, `NEW_CATEGORY`, target sidebar group
- **delete:** `SLUG` + `CATEGORY`
- **merge:** `FROM_SLUG` + `FROM_CATEGORY`, `INTO_SLUG` + `INTO_CATEGORY`
  (content of FROM folded into INTO, then FROM deleted)
- **reorder:** sidebar group + the new item order

Resolve current path(s): `find guide -name '<slug>.md' | grep -v '/public/'`. Record all.

### 1.3 Inbound link survey
Run `grep -rln '/guide/<category>/<slug>' guide` for each affected path and show the user
the count + file list so the blast radius is visible before confirming.

### 1.4 Confirm

| Parameter            | Value |
| -------------------- | ----- |
| Operation            | ...   |
| Old path             | ...   |
| New path             | ...   |
| Inbound links        | N files (listed) |
| Sidebar change       | ...   |

Wait for confirmation.

---

## Phase 2: Context

1. Read `CLAUDE.md`.
2. Read `.vitepress/config.mts` and locate the affected entry/entries in `guideGroups`.
3. Confirm the image folder path(s): `guide/public/<category>/<slug>/`.

---

## Phase 3: Procedure (by operation)

```
RENAME (slug change, same category):
  1. git mv guide/<CAT>/<OLD_SLUG>.md guide/<CAT>/<NEW_SLUG>.md
  2. git mv guide/public/<CAT>/<OLD_SLUG>/ guide/public/<CAT>/<NEW_SLUG>/   (if exists)
  3. In the moved file, rewrite image refs:
       /guide/public/<CAT>/<OLD_SLUG>/ → /guide/public/<CAT>/<NEW_SLUG>/
  4. grep -rl '/guide/<CAT>/<OLD_SLUG>' guide → rewrite each to /guide/<CAT>/<NEW_SLUG>
  5. config.mts guideGroups: set entry "link" to '/guide/<CAT>/<NEW_SLUG>'
     (update "text" too if the title changed)
  6. BUILD

MOVE-CATEGORY (slug same, folder changes — URL ALSO CHANGES):
  1. git mv guide/<OLD_CAT>/<SLUG>.md guide/<NEW_CAT>/<SLUG>.md
  2. git mv guide/public/<OLD_CAT>/<SLUG>/ guide/public/<NEW_CAT>/<SLUG>/   (if exists)
  3. In the moved file, rewrite image refs:
       /guide/public/<OLD_CAT>/<SLUG>/ → /guide/public/<NEW_CAT>/<SLUG>/
  4. grep -rl '/guide/<OLD_CAT>/<SLUG>' guide → rewrite each to /guide/<NEW_CAT>/<SLUG>
     (the URL changed — ALL inbound links must be updated)
  5. config.mts guideGroups: update the entry "link" to '/guide/<NEW_CAT>/<SLUG>'
     and move the {text, link} object into the correct sidebar group
  6. BUILD

DELETE:
  1. grep -rln '/guide/<CAT>/<SLUG>' guide → report inbound links that will break; fix or flag
  2. git rm guide/<CAT>/<SLUG>.md
  3. rm -rf guide/public/<CAT>/<SLUG>/
  4. config.mts guideGroups: remove the entry
  5. BUILD

MERGE (FROM into INTO):
  1. Fold FROM's content into guide/<INTO_CAT>/<INTO_SLUG>.md (preserve conventions)
  2. Move any still-needed images into INTO's image folder; fix refs
  3. grep -rl '/guide/<FROM_CAT>/<FROM_SLUG>' guide → rewrite to /guide/<INTO_CAT>/<INTO_SLUG>
  4. Delete FROM (file + image folder + sidebar entry)
  5. BUILD

REORDER:
  1. Reorder items within the group in guideGroups inside .vitepress/config.mts
     (valid TypeScript — keep collapsed: false on nested groups where applicable)
  2. BUILD
```

---

## Phase 4: Verify & Report

Report:
- Operation performed; old → new path(s)
- Inbound links rewritten: count + file list
- Image folder moved/removed
- Sidebar diff (link/text/group/order)
- Dead links remaining (for delete): listed, or "none"
- Build: pass / fail

---

## Quick Reference

### Survey & locate
```
File by slug:    find guide -name '<slug>.md' | grep -v '/public/'
Inbound links:   grep -rln '/guide/<category>/<slug>' guide
Image folder:    guide/public/<category>/<slug>/
Sidebar entry:   grep -n "'/guide/<category>/<slug>'" .vitepress/config.mts
```

### Critical difference from rewrite-based sites
```
FluentPlayer has NO rewrite rules.
URL = /guide/<category>/<slug>   — category IS in the public URL.

move-category  → URL CHANGES → ALL inbound links must be rewritten
rename (slug)  → URL CHANGES → ALL inbound links must be rewritten
```

### Key Principles
1. **Full path = public URL** — category and slug together form the URL.
2. **Survey blast radius first** (`grep -rln`) and show it before acting.
3. **Image folder travels with the doc**; never orphan it.
4. **Sidebar stays in sync** — update guideGroups in config.mts.
5. **Use `git mv`; finish on a green build.**
