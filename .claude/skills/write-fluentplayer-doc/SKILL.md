---
name: write-fluentplayer-doc
description: 'Create a NEW Fluent Player end-user documentation page in this VitePress site, correctly placed in a category folder and wired into the sidebar (guideGroups in config.mts). Optionally converts pasted HTML or raw markdown source into a clean doc. USE FOR: add a doc, write a new doc page, create a doc for X, document this feature, write a guide for, new documentation page, turn this content into a doc, import this article. DO NOT USE FOR: editing an existing page (use edit-fluentplayer-doc), renaming/moving/deleting a page or reordering the sidebar (use restructure-fluentplayer-docs), site-wide quality checks (use audit-fluentplayer-docs), or non-docs markdown like README.md / CLAUDE.md.'
license: MIT
compatibility: 'VitePress repo using docs/<category>/<slug>.md layout. Sidebar defined in .vitepress/config.mts (guideGroups const). Images stored at docs/public/<category>/<slug>/. Requires Node + npm to run docs:build.'
metadata:
  project: fluentplayer-user-docs
  canonical-rules: CLAUDE.md
---

# Write a Fluent Player Doc

Create one new documentation page end-to-end: place it in the right category folder, write
it in the house style, set up its image folder, wire it into `guideGroups` in `config.mts`,
and verify with a clean build. Canonical conventions live in `CLAUDE.md` — this skill is
the *procedure*.

---

## Agent Behavior Rules

1. **DO** complete Phase 1 setup and confirm the summary table before writing anything.
2. **DO** place the file at `docs/<category>/<slug>.md` inside an existing category folder
   (or directly under `docs/` only for top-level items like Get Started pages).
3. **DO** make line 1 a bare `# H1` (optional frontmatter may precede it) that matches
   the sidebar `text` in intent (H1 is the full title; sidebar text is the short label).
4. **DO** link with the root-relative FLAT slug `/<slug>` everywhere (e.g. `/general-settings`) —
   the category folder is NOT part of the URL. No relative links, no `/guide/...` or `/docs/...`.
5. **DO** add a `rewrites` entry `'docs/<category>/<slug>.md': '<slug>.md'` AND the page to
   `guideGroups` in `.vitepress/config.mts` (both mandatory — VitePress does NOT auto-discover
   pages, and without the rewrite the page is served at the wrong URL). Keep valid TypeScript.
6. **DO** end on a green `npm run docs:build`.
7. **DO NOT** create a `.md` file directly under `docs/` unless it is a top-level Get Started
   item (check with the user first).
8. **DO NOT** use relative links (`./slug`, `../slug`) — always root-relative flat slugs (`/<slug>`).
9. **DO NOT** leave support boilerplate ("contact our support team", "reach out … for
   assistance"); link `[How to Get Support](/support)` instead.
10. **DO NOT** invent a new category folder or a new sidebar group without asking the user.
11. **DO NOT** write `** term **` (inner-whitespace bold) — use `**term**`.
12. **DO** Use VitePress callouts for Pro features:
    `::: info Pro feature` … `:::` wrapping the restriction note.

---

## Phase 1: Setup (Interactive)

Ask the user directly for each item. Do not assume or skip.

### 1.1 Title
> **What is the page title?** (becomes the `# H1`)

Record as `TITLE`.

### 1.2 Category folder
> **Which category does it belong in?**

List the existing category folders under `docs/` (run `ls docs/`). The user picks one.
If none fits, STOP and ask whether to add a new category folder — do not invent one silently.
Record as `CATEGORY`.

Current categories: `videos-and-media`, `display-embed`, `block-editor`, `engagement`,
`customize`, `playlists`, `settings`, `integrations`, `troubleshooting`.
Top-level (flat under `docs/`): Get Started pages, `changelog`, `support`.

### 1.3 Slug (with uniqueness check)
Derive `SLUG` = kebab-case of `TITLE`. Verify it is globally unique:
```
find docs -name '<slug>.md' | grep -v '/public/'
```
Must return nothing, and `<slug>.md` must not already be a value in the `rewrites` map in
`.vitepress/config.mts` (served slugs are global). If it collides, ask the user for a distinct slug. Record as `SLUG`.
The file will be `docs/<CATEGORY>/<SLUG>.md`.

### 1.4 Sidebar group + position
Read `.vitepress/config.mts` and show the existing `guideGroups` group names. Ask:
> **Which sidebar group should this appear in, and after which item?**

Record as `SIDEBAR_GROUP` and `SIDEBAR_POSITION`. If the right group does not exist, ask
before creating one. Note: nested sub-groups use `collapsed: false`.

### 1.5 Pro flag
> **Is this a Pro-only feature?**

Record as `IS_PRO`. If yes:
- Add "(Pro)" to the sidebar `text`: `{ text: 'Feature Name (Pro)', link: '...' }`.
- Open the doc body with the `::: info Pro feature` callout.

### 1.6 Images
> **Are there images?** If yes, where are the source files?

Record as `HAS_IMAGES` + source paths.

### 1.7 Source content (optional)
> **Do you have existing content (pasted HTML / markdown) to convert, or should I draft
> from your description?**

Record as `SOURCE_CONTENT`.

### 1.8 Confirm
Summarize and wait for confirmation before proceeding:

| Parameter        | Value |
| ---------------- | ----- |
| Title            | ...   |
| Category folder  | ...   |
| File path        | docs/<category>/<slug>.md |
| Public URL       | /<slug> |
| Sidebar group    | ...   |
| Position         | after "<item>" |
| Pro-only         | yes / no |
| Images           | yes / no |
| Source content   | provided / draft from description |

---

## Phase 2: Context

1. Read `CLAUDE.md` (canonical conventions).
2. Read 1–2 existing docs in the same `CATEGORY` to match tone, heading depth, and image style.
3. Read the target group in `.vitepress/config.mts`.

---

## Phase 3: Procedure

```
1. SCAFFOLD - Copy templates/doc-template.md to docs/<CATEGORY>/<SLUG>.md.
              Replace the H1 with TITLE; delete the scaffold-notes comment.

2. BODY     - Write the page per CLAUDE.md style:
              - H1 (line 1) → 1–3 sentence intro (bold **feature name** on first use)
              - If IS_PRO: add ::: info Pro feature callout immediately after intro
              - ## sections, ### sub-topics
              - Bullets for steps; numbered lists only for strict sequences
              - Cross-links as flat /<slug> ONLY (anchors: /<slug>#heading-id)
              - VitePress callouts: ::: tip, ::: info, ::: warning as needed
              - NO support boilerplate
              If SOURCE_CONTENT: convert it (strip wrapper HTML, fix bold whitespace,
              rewrite any absolute fluentplayer.com/guide/... links to the flat /<slug>).

3. IMAGES   - If HAS_IMAGES: mkdir -p docs/public/<CATEGORY>/<SLUG>/,
              copy/convert source files in (prefer .webp), and reference each as:
              ![alt text](/docs/public/<CATEGORY>/<SLUG>/<file>.webp)

4. REWRITE - Add to the rewrites map in .vitepress/config.mts (keep it alphabetical):
              'docs/<CATEGORY>/<SLUG>.md': '<SLUG>.md',

5. SIDEBAR  - Insert into guideGroups in .vitepress/config.mts under SIDEBAR_GROUP
              at SIDEBAR_POSITION:
              { text: '<TITLE>', link: '/<SLUG>' }
              (If IS_PRO: { text: '<TITLE> (Pro)', link: '/<SLUG>' })
              Keep valid TypeScript. Preserve collapsed: false on nested groups.

6. CARD     - Run: npm run featured:generate  (creates public/images/featured/<SLUG>.png)

7. BUILD    - Run: npm run docs:build
              Fix any dead-link / parse warnings, then rebuild until clean.
```

---

## Phase 4: Verify & Report

Report:
- File created: `docs/<CATEGORY>/<SLUG>.md`
- Public URL: `/<SLUG>`
- `rewrites` entry added
- Sidebar entry added under **<SIDEBAR_GROUP>**
- Image folder: `docs/public/<CATEGORY>/<SLUG>/` (N files) or "none"
- Build: pass / fail (+ any warnings fixed)

---

## Quick Reference

### Paths & formats
```
File:        docs/<category>/<slug>.md
URL:         /<slug>                            (flat — category is NOT in the URL)
Rewrite:     'docs/<category>/<slug>.md': '<slug>.md'
Cross-link:  [Text](/<slug>)                    (NEVER relative)
Image file:  docs/public/<category>/<slug>/<name>.webp
Image ref:   ![Alt](/docs/public/<category>/<slug>/<name>.webp)
Sidebar:     { text: '<Title>', link: '/<slug>' }
Pro sidebar: { text: '<Title> (Pro)', link: '/<slug>' }
Bold:        **term**                           (no inner spaces)
Pro callout: ::: info Pro feature
             <Feature> is available only with **FluentPlayer Pro**. Install and activate
             the free Fluent Player plugin first, then activate Pro.
             :::
Build:       npm run docs:build
```

### Locate / check
```
Slug unique?   find docs -name '<slug>.md' | grep -v '/public/'   (must be empty)
Group names:   grep 'text:' .vitepress/config.mts | grep -v link
```

### Key Principles
1. **Category folder always** — never a bare file under `docs/` unless it's a top-level item.
2. **Sidebar + rewrite are mandatory** — a doc not in `guideGroups` is invisible; one not in
   `rewrites` is served at the wrong URL.
3. **Flat links** — `/<slug>`, never relative, never `/guide/...` or `/docs/...`.
4. **Rewrites decide the URL** — the served URL is the `rewrites` value, not the file path.
5. **Green build or it's not done.**
