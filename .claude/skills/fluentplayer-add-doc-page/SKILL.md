---
name: fluentplayer-add-doc-page
description: 'Scaffold a new page in the FluentPlayer VitePress docs (fluentplayer-user-docs) following every repo convention: create the markdown file with frontmatter, create its screenshot directory + .gitkeep, wire it into the guideGroups sidebar in .vitepress/config.mts, apply (Pro) labels, and verify with docs:build. USE FOR: add a new doc page, create a guide page, new FluentPlayer doc, document a feature, add a page to the sidebar. DO NOT USE FOR: editing existing page prose, screenshots only (use fluentplayer-manage-screenshots), the changelog (use fluentplayer-changelog), or non-FluentPlayer repos.'
license: MIT
compatibility: Operates on the fluentplayer-user-docs VitePress repo. Requires Node/npm and git.
metadata:
  project: fluentplayer-user-docs
---

# Add a FluentPlayer doc page

Scaffold a new documentation page end-to-end so it matches the existing site and appears in navigation. The VitePress sidebar is **hand-wired** in `.vitepress/config.mts` — a new file is invisible until it is added to the `guideGroups` array. This skill never skips that step.

---

## Agent behavior rules

1. **DO** confirm the section, slug, title, and Pro status with the user before creating files (Phase 1).
2. **DO** create the page, its screenshot directory, its `rewrites` entry, and the sidebar entry together — a page is not "done" until it is in both `rewrites` and `guideGroups`.
3. **DO** use root-relative flat-slug links (`/<slug>`) only — never relative `../` paths (they break with `cleanUrls: true`) and never `/guide/...` or `/docs/...`.
4. **DO** append **(Pro)** to the H1 and the sidebar `text` whenever the feature is Pro-only.
5. **DO** run `npm run docs:build` at the end and report the result.
6. **DO NOT** invent product behavior. If unsure what a feature does, leave a clearly marked `<!-- TODO -->` and tell the user.
7. **DO NOT** touch unrelated `guideGroups` entries or reorder existing groups.

---

## Phase 1: Gather details (interactive)

Ask the user (accept answers in one message):

- **Section** — an existing folder under `docs/` (e.g. `integrations`, `block-editor`, `settings`, `videos-and-media`) or a new section folder.
- **Slug** — the filename without extension (kebab-case), e.g. `vimeo-integration`. The URL becomes the flat `/<slug>` (the section folder is not part of the URL). It must be globally unique — not already a value in the `rewrites` map.
- **Title** — the human page title / H1, e.g. `Vimeo (Pro)`.
- **Landing page?** — if this is a section overview, the file is `index.md` and it is served at `/<section>` (e.g. `docs/playlists/index.md` → `/playlists`).
- **Pro-only?** — determines the **(Pro)** labels.
- **Sidebar placement** — which existing group in `guideGroups` it belongs to, and whether it goes inside a nested sub-group.

---

## Phase 2: Create the page file

Path: `docs/<section>/<slug>.md` (or `docs/<section>/index.md` for a landing page).

Start with frontmatter, then a single `# H1`. The repo is inconsistent about frontmatter (some pages have none, some have `title`/`description`, some have `prev`/`next`). **Default to including `title` + `description`** for SEO consistency:

```markdown
---
title: "Vimeo (Pro)"
description: "Connect Vimeo as a video source in FluentPlayer and embed Vimeo-hosted videos in the player."
---

# Vimeo (Pro)

**Vimeo** is ...
```

House style for the body:

- `## H2` for sections, `### H3` only when genuinely needed.
- VitePress containers for callouts — examples that exist in the repo:

  ```markdown
  ::: tip
  Helpful suggestion.
  :::

  ::: warning
  Important caveat or gotcha.
  :::

  ::: info Pro feature
  This feature requires **FluentPlayer Pro**.
  :::
  ```

- Pipe tables for option/feature matrices.
- Cross-links use root-relative flat slugs, e.g. `/subtitles`, with anchors targeting heading slugs, e.g. `/vimeo#import-captions-from-vimeo-pro`.
- Screenshots (if any) follow `fluentplayer-manage-screenshots`: `![Alt](/docs/public/<section>/<slug>/<name>.webp)`.

---

## Phase 3: Create the screenshot directory

Create `docs/public/<section>/<slug>/` and add an empty `.gitkeep` so the (initially image-less) directory is tracked:

```bash
mkdir -p docs/public/<section>/<slug> && touch docs/public/<section>/<slug>/.gitkeep
```

---

## Phase 4: Wire the rewrite and the sidebar (required)

First add the page to the `rewrites` map in `.vitepress/config.mts` (keep it alphabetical). This decides the served URL:

```typescript
'docs/integrations/vimeo-integration.md': 'vimeo-integration.md',   // → /vimeo-integration
'docs/<section>/index.md': '<section>.md',                         // landing page → /<section>
```

Then edit the `guideGroups` array in the same file (bound to the `/` sidebar key).

Add a leaf entry to the correct group. Leaf shape:

```typescript
{ text: 'Vimeo (Pro)', link: '/vimeo-integration' },
```

A group with flat items looks like:

```typescript
{
  text: 'Integrations',
  items: [
    { text: 'Integrations Overview', link: '/integrations' },
    { text: 'Mux (Pro)', link: '/mux' },
    // ← add new leaf here
  ],
},
```

Groups can nest, with an optional `collapsed` flag:

```typescript
{
  text: 'Core Settings',
  collapsed: false,
  items: [
    { text: 'General Settings', link: '/general-settings' },
    { text: 'Preset', link: '/preset' },
  ],
},
```

Rules:
- A landing page links to `/<section>`; a normal page links to `/<slug>` — always the `rewrites` value without `.md`, no trailing slash.
- Match the group's existing order/intent; place the leaf where it reads naturally.
- Mirror the **(Pro)** label in the sidebar `text` when the page is Pro.

---

## Phase 5: Verify

Run `npm run featured:generate` (creates `public/images/featured/<slug>.png`, the page's social card), then `npm run docs:build`. The build fails on dead internal links, so a clean build confirms the page file, links, and the sidebar entry are all consistent.

Report to the user:
- The created file path and its live URL (`/<slug>`).
- The `rewrites` entry and featured card added.
- The screenshot dir created.
- The exact `guideGroups` entry added.
- Build result (pass, or the specific dead-link errors to fix).
