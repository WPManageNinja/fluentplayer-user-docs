# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

---

## Repository overview

This is the **end-user documentation site** for **Fluent Player** — a WordPress video and media player plugin by WPManageNinja. The site is built with [VitePress](https://vitepress.dev/) (v1.6+, Vue 3) and deployed to GitHub Pages.

> **You are editing user-facing documentation, not plugin source code.** All content lives under `guide/` in Markdown. The current documented release is **Fluent Player Free and Pro 1.0.4**.

---

## Commands

```bash
npm install                   # Install dependencies
npm run docs:dev              # Dev server → http://localhost:5173 (live reload)
npm run docs:build            # Production build → .vitepress/dist/
npm run docs:preview          # Preview production build → http://localhost:4173
npm run docs:build:gh-pages   # Build with base /fluentplayer-user-docs/ for GitHub Pages
```

**Validation:** There are no tests, linters, or formatters. Run `docs:build` after any link change or page move — VitePress fails the build on broken internal (dead) links, which is the de facto correctness check.

---

## Project structure

```text
.
├── index.md                    # Homepage (layout: home, hero + feature cards)
├── README.md                   # Repo readme — EXCLUDED from the site via srcExclude
├── package.json                # Scripts + devDeps (vitepress, vue, @types/node)
│
├── .vitepress/
│   ├── config.mts              # Site config — sidebar, nav, base path, search. SINGLE SOURCE OF TRUTH
│   ├── theme/
│   │   ├── index.ts            # Extends default theme; registers custom components
│   │   ├── layout-1.vue        # Injects <Feedback/>; forces in-content links to open in new tab
│   │   ├── components/         # VPNavBarTitle.vue, NotFound.vue, Feedback.vue
│   │   └── styles/brand.css    # Brand/theme CSS
│   ├── cache/                  # Build cache (gitignored)
│   └── dist/                   # Build output (gitignored; may be stale — not authoritative)
│
├── guide/                      # ALL documentation content (Markdown)
│   ├── index.md                # "What is Fluent Player?" (section landing)
│   ├── installation.md
│   ├── quick-start.md
│   ├── changelog.md            # NOTE: currently empty, but linked from top nav
│   ├── support.md
│   ├── videos-and-media/       # Adding videos, sources, subtitles, languages, visibility
│   ├── display-embed/          # Shortcode, Gutenberg block, dedicated URL, timestamp links
│   ├── block-editor/           # Player block sidebar reference (largest section)
│   ├── engagement/             # Email capture, CTA & action bar, email providers
│   ├── customize/              # Presets, custom presets (Pro), player behaviors
│   ├── playlists/              # Playlists (Pro) — creating, layouts, settings, embedding
│   ├── settings/               # Global settings (general, performance, storage, analytics…)
│   ├── integrations/           # Mux, BunnyCDN, analytics, Mailchimp, Webhook, FluentCommunity…
│   ├── troubleshooting/        # Common issues + FAQ
│   └── public/                 # PER-PAGE SCREENSHOTS (.webp/.png), mirrors the doc tree
│                               #   e.g. guide/public/integrations/mux/access-token-1.webp
│                               #   referenced in Markdown as /guide/public/integrations/mux/...
│
└── public/                     # Root static assets, served from site root "/"
    └── brand/                  # Logo, favicon, hero image (e.g. /brand/Hero-Image-2.webp)
```

Every `guide/<section>/` folder contains an `index.md` (the section overview/landing page) plus its topic pages.

---

## Architecture decisions to be aware of

### Sidebar and navigation

- **`guideGroups`** in `config.mts` is the single source of truth for all navigation. It is bound to **both** the `/` and `/guide/` sidebar keys so they stay in sync.
- **Adding a new page requires adding its link to `guideGroups`** — VitePress does not auto-generate the sidebar from the filesystem. A page not listed there is reachable by URL but invisible in navigation.
- The top `nav` (Home, Website, Changelog, Support) and the 404 page text are also defined in `config.mts`.

### Base path

- Resolved dynamically by `resolveBase()` in `config.mts`. Defaults to `/`; reads the `VITEPRESS_BASE` env var, otherwise auto-detects GitHub Pages project sites from `GITHUB_ACTIONS` + `GITHUB_REPOSITORY`.
- Internal asset references that need the prefix use the resolved `base` constant (e.g. the favicon in `head`).
- **In Markdown, always use root-relative links** (`/guide/...`) — VitePress applies the base prefix automatically at build time.

### Custom theme behaviors

- `layout-1.vue` forces **every in-content link** (`.vp-doc a`) to open in a new tab (`target="_blank"`) on mount and on every route change. Account for this when reasoning about navigation flow.
- Globally registered custom components: `VPNavBarTitle`, `NotFound`, `Feedback`.

### `README.md`

- Excluded from the built site via `srcExclude` to avoid a stray `/readme` route. Do not rename or convert it into a content page.

---

## Content conventions

Follow these to stay consistent with existing pages.

### Page structure

- Every content folder has an `index.md` section overview plus individual topic pages. Both must be wired into `guideGroups`.
- Pages begin with a single `# H1`, use `## H2` for sections, and `### H3` only when genuinely needed.
- Use VitePress callout containers (`::: tip`, `::: warning`, `::: info`) for emphasis, as existing pages do.

### Free vs Pro labeling

- Pro-only features must be labeled **(Pro)** in headings, sidebar entries, and the feature table in `guide/index.md`. These are user-facing product facts — never drop or omit them.

### Links and anchors

- Cross-references use root-relative paths, e.g. `/guide/videos-and-media/subtitles`.
- Anchors target generated heading slugs, e.g. `/guide/display-embed/block#timed-content-pro`.
- Do **not** use relative paths (`../subtitles`) — they are fragile with `cleanUrls: true`.

### Images and assets

- **Per-page screenshots** go under `guide/public/<section>/<page>/` and are referenced with the matching root-relative path, e.g. `![Alt](/guide/public/integrations/mux/access-token-1.webp)`. Prefer `.webp`. Each folder keeps a `.gitkeep`.
- **Brand/site assets** (logo, favicon, hero) live in the root `public/` dir and are served from site root, e.g. `/brand/Hero-Image-2.webp`.
- Do not reference images with relative `./` paths in Markdown.

---

## Deployment

- **Target:** GitHub Pages, `cleanUrls: true` (extensionless URLs; the host must rewrite routes to the generated `.html` files).
- **CI:** Expects `GITHUB_ACTIONS` and `GITHUB_REPOSITORY` to be set — `resolveBase()` derives the base path from them automatically.
- **Manual build:** Use `npm run docs:build:gh-pages` when building outside CI.

---

## Checklist: adding a new doc page

1. Create the Markdown file under `guide/` (e.g. `guide/section/new-feature.md`).
2. Add its entry to `guideGroups` in `.vitepress/config.mts`.
3. If it is a section landing page, name it `index.md` and place it first in its group.
4. Put any screenshots in `guide/public/section/new-feature/` and reference them via `/guide/public/...`.
5. Label any Pro-only features with **(Pro)** in the heading and the sidebar entry.
6. Run `npm run docs:build` to verify no broken links before committing.