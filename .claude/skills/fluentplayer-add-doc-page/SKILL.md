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
2. **DO** create the page, its screenshot directory, and the sidebar entry together — a page is not "done" until it is in `guideGroups`.
3. **DO** use root-relative links (`/guide/...`) only — never relative `../` paths (they break with `cleanUrls: true`).
4. **DO** append **(Pro)** to the H1 and the sidebar `text` whenever the feature is Pro-only.
5. **DO** run `npm run docs:build` at the end and report the result.
6. **DO NOT** invent product behavior. If unsure what a feature does, leave a clearly marked `<!-- TODO -->` and tell the user.
7. **DO NOT** touch unrelated `guideGroups` entries or reorder existing groups.

---

## Phase 1: Gather details (interactive)

Ask the user (accept answers in one message):

- **Section** — an existing folder under `guide/` (e.g. `integrations`, `block-editor`, `settings`, `videos-and-media`) or a new section folder.
- **Slug** — the filename without extension (kebab-case), e.g. `vimeo-integration`. The URL becomes `/guide/<section>/<slug>`.
- **Title** — the human page title / H1, e.g. `Vimeo (Pro)`.
- **Landing page?** — if this is a section overview, the file is `index.md` and its link is `/guide/<section>/` (trailing slash, no slug).
- **Pro-only?** — determines the **(Pro)** labels.
- **Sidebar placement** — which existing group in `guideGroups` it belongs to, and whether it goes inside a nested sub-group.

---

## Phase 2: Create the page file

Path: `guide/<section>/<slug>.md` (or `guide/<section>/index.md` for a landing page).

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
- Cross-links use root-relative paths, e.g. `/guide/videos-and-media/subtitles`, with anchors targeting heading slugs, e.g. `/guide/display-embed/block#timed-content-pro`.
- Screenshots (if any) follow `fluentplayer-manage-screenshots`: `![Alt](/guide/public/<section>/<slug>/<name>.webp)`.

---

## Phase 3: Create the screenshot directory

Create `guide/public/<section>/<slug>/` and add an empty `.gitkeep` so the (initially image-less) directory is tracked:

```bash
mkdir -p guide/public/<section>/<slug> && touch guide/public/<section>/<slug>/.gitkeep
```

---

## Phase 4: Wire the sidebar (required)

Edit the `guideGroups` array in `.vitepress/config.mts`. This same array is bound to both the `/` and `/guide/` sidebar keys, so one edit covers both.

Add a leaf entry to the correct group. Leaf shape:

```typescript
{ text: 'Vimeo (Pro)', link: '/guide/integrations/vimeo-integration' },
```

A group with flat items looks like:

```typescript
{
  text: 'Integrations',
  items: [
    { text: 'Integrations Overview', link: '/guide/integrations/' },
    { text: 'Mux (Pro)', link: '/guide/integrations/mux' },
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
    { text: 'General Settings', link: '/guide/block-editor/general-settings' },
    { text: 'Preset', link: '/guide/block-editor/preset' },
  ],
},
```

Rules:
- A landing page links to `/guide/<section>/` (trailing slash); a normal page links to `/guide/<section>/<slug>` (no `.md`, no trailing slash).
- Match the group's existing order/intent; place the leaf where it reads naturally.
- Mirror the **(Pro)** label in the sidebar `text` when the page is Pro.

---

## Phase 5: Verify

Run `npm run docs:build`. The build fails on dead internal links, so a clean build confirms the page file, links, and the sidebar entry are all consistent.

Report to the user:
- The created file path and its live URL (`/guide/<section>/<slug>`).
- The screenshot dir created.
- The exact `guideGroups` entry added.
- Build result (pass, or the specific dead-link errors to fix).
