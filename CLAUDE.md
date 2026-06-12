# CLAUDE.md — FluentPlayer User Documentation

End-user documentation site for the **Fluent Player** WordPress plugin by WPManageNinja.
Built with **VitePress 1.6+**, **Vue 3.5**, Node.js **ESM** (`"type": "module"`).

## Commands

| Command | Action |
| --- | --- |
| `npm run docs:dev` | Local dev server |
| `npm run docs:build` | Production build → `.vitepress/dist/` |
| `npm run docs:build:gh-pages` | Build for GitHub Pages project URL |
| `npm run docs:preview` | Preview the production build |

Run `npm run docs:build` after any structural change (new doc, rename, link edit, sidebar change) to catch broken links and parser errors.

## Repository layout

```
/
├── index.md                        ← site root (redirects to /guide/)
├── package.json                    ← ESM, devDeps: vitepress, vue, @types/node
├── .vitepress/
│   ├── config.mts                  ← site config + guideGroups (sidebar source of truth)
│   └── theme/                      ← custom theme overrides (if any)
└── guide/
    ├── index.md                    ← "What is Fluent Player?" (home page)
    ├── installation.md             ← top-level Get Started pages (flat under guide/)
    ├── quick-start.md
    ├── changelog.md
    ├── support.md
    ├── public/                     ← static image assets
    │   └── <category>/<slug>/      ← image folder per doc
    └── <category>/<slug>.md        ← every categorized doc lives in a category folder
```

### Category folders

All categorized docs live at `guide/<category>/<slug>.md`. The current categories:

`videos-and-media` · `display-embed` · `block-editor` · `engagement` · `customize` · `playlists` · `settings` · `integrations` · `troubleshooting`

Section indexes use `guide/<category>/index.md`.

Top-level (flat under `guide/`): `index.md`, `installation.md`, `quick-start.md`, `changelog.md`, `support.md`.

## URL structure — the most important convention

FluentPlayer has **no rewrite rules**. The public URL is the full path:

```
guide/<category>/<slug>.md  →  /guide/<category>/<slug>
guide/<slug>.md             →  /guide/<slug>
guide/<category>/index.md   →  /guide/<category>/
```

**Consequence — all internal links use the FULL form:**
- ✅ `[Link Text](/guide/videos-and-media/adding-videos)`
- ❌ `[Link Text](/adding-videos)` or `[Link Text](../adding-videos)`

**Moving a doc to another category changes its public URL** and requires rewriting every inbound link.

## Sidebar — mandatory step when adding/renaming docs

The sidebar is 100% driven by the `guideGroups` constant in `.vitepress/config.mts`.
VitePress does **not** auto-discover docs. Every new or renamed `.md` file **must** have an
entry in `guideGroups`.

Shape — flat array of journey sections, each with `items`. Nested sub-groups use their own
`items` array and `collapsed: false`. Leaf items:

```ts
{ text: 'Adding and Editing Videos', link: '/guide/videos-and-media/adding-videos' }
```

Pro items include "(Pro)" in the text:

```ts
{ text: 'Creating Custom Presets (Pro)', link: '/guide/customize/creating-custom-presets' }
```

When adding a doc, insert into the correct group at the right position in `guideGroups`.
The `link` value is the full `/guide/<category>/<slug>` path.

## Images

Image folders mirror the doc path:
- Storage: `guide/public/<category>/<slug>/<filename>.webp`
- Reference: `![Alt text](/guide/public/<category>/<slug>/<filename>.webp)`

Prefer `.webp` for screenshots. The `guide/public/` directory is served as static content —
the path in the `![]()` ref matches the URL exactly.

## Frontmatter

Frontmatter is **optional** but recommended for SEO:

```yaml
---
title: "Page Title"
description: "One-sentence description for search engines."
---
```

When frontmatter is present, the `# H1` immediately follows it. The `title` in frontmatter
can match or elaborate on the H1 — both are valid.

## Markdown writing style

1. **H1 first** — line 1 of content (after optional frontmatter) is `# Full Page Title`.
2. **Short intro** (1–3 sentences): what the feature is and who it is for. Bold the
   **feature name** on first mention.
3. `##` for major sections, `###` for sub-topics.
4. Bullet lists for steps and feature lists; numbered lists only when strict sequence matters.
5. Bold (`**Settings**`) important UI terms on first use. No inner whitespace:
   `**Save**` not `** Save **` — CommonMark renders the latter literally.
6. Cross-references always use the full path: `[Descriptive Text](/guide/<category>/<slug>)`.
7. Never hardcode `https://fluentplayer.com/...` for internal doc links.
8. Pro-only features: add "(Pro)" after the feature name in both the doc body and the sidebar.
9. No fenced code blocks for UI instructions — plain text and bullets only.
10. Short, direct sentences. User-facing docs, not developer prose.
11. Use second person ("you", "your"), active voice, and present tense.
12. No support-boilerplate closers ("contact our support team", "reach out for assistance").
    For help, link `[How to Get Support](/guide/support)`.
13. Match the writing tone of existing docs in the same category.

## VitePress callouts

Use VitePress callout containers for tips, Pro restrictions, warnings, and notes:

```md
::: tip
Optional tip or shortcut for the user.
:::

::: info Pro feature
<Feature> is available only with **FluentPlayer Pro**. Install and activate
the free Fluent Player plugin first, then activate Pro.
:::

::: warning
Something the user must be careful about.
:::

::: danger
A destructive or irreversible action.
:::
```

The `>[!Note]` GitHub-style callout also renders in VitePress and is used in existing docs —
both formats are acceptable.

## Shortcodes

Reference shortcodes in backtick inline code:

```md
`[fluentplayer id="42"]`    ← single video
`[fluentmedia id="42"]`     ← alias
`[fluentplaylist id="10"]`  ← playlist (Pro)
```

## Hard constraints — never do these

- Never create a `.md` directly under `guide/` unless it is a confirmed top-level item
  (`index.md`, `installation.md`, `quick-start.md`, `changelog.md`, `support.md`).
- Never use a category-less or relative link — always full `/guide/<category>/<slug>`.
- Never add or rename a doc without updating `guideGroups` in `config.mts`.
- Never leave an orphaned image folder under `guide/public/` when deleting or moving a doc.
- Never commit `node_modules/`, `.vitepress/dist/`, or `.vitepress/cache/` (all in `.gitignore`).
- ESM project — never use `require()` or CommonJS syntax in config files.

## Skills

Four Claude Code skills live in `.claude/skills/` for common doc operations:

| Skill | Use for |
| --- | --- |
| `audit-fluentplayer-docs` | Read-only quality gate (links, sidebar, images, build) |
| `edit-fluentplayer-doc` | Edit content of an existing page in place |
| `restructure-fluentplayer-docs` | Rename, move, delete, merge, reorder |
| `write-fluentplayer-doc` | Create a new documentation page end-to-end |

## Brand

- Plugin name: **Fluent Player** (two words, title case); plugin slug: `fluent-player`.
- Company: WPManageNinja.
- Website: `https://fluentplayer.com/`.
- Pro plugin: **Fluent Player Pro**.
