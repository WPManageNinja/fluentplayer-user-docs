---
name: fluentplayer-changelog
description: 'Write and maintain the FluentPlayer docs changelog (guide/changelog.md in the fluentplayer-user-docs VitePress site). Prepends a new reverse-chronological version section, in the site''s tabbed code-group format, with user-facing Newly Added/Improvements/Bug fixes entries (plus a Pro tab for Pro-only items) derived from release notes or git history. USE FOR: write a changelog entry, update the changelog, add a release note, document version X. DO NOT USE FOR: creating other doc pages (use fluentplayer-add-doc-page) or editing feature guides.'
license: MIT
compatibility: Operates on the fluentplayer-user-docs VitePress repo. Requires Node/npm and git.
metadata:
  project: fluentplayer-user-docs
---

# Maintain the FluentPlayer changelog

Keep `guide/changelog.md` a clean, reverse-chronological, user-facing record of releases. The file is linked from the top nav (the `Changelog` item in `.vitepress/config.mts`) and is already populated with many releases — always **prepend**, never scaffold from scratch.

---

## Agent behavior rules

1. **DO** write entries for the **reader of the docs** (what changed for them), not raw commit subjects.
2. **DO** keep newest version at the top (reverse chronological).
3. **DO** group changes under tabs in a VitePress `::: code-group` block: **✨ Newly Added**, **🚀 Improvements**, **🐞 Bug fixes**, and **💎 Pro**; omit any tab with no items.
4. **DO** pull every Pro-only item out of its category tab and place it in the **💎 Pro** tab instead — do not label items inline with `(Pro)` inside Newly Added/Improvements/Bug fixes. Within the Pro tab, keep the items in Added → Improvements → Fixes order, verb-first, with no trailing `(Pro)` marker (the tab already implies it). Exception: a release that is entirely Pro (e.g. `## FluentPlayer Pro v1.0.0`) keeps a normal `✨ Newly Added` tab — there's nothing to split out.
5. **DO NOT** invent versions or dates — get them from the user, a release note, or git tags.
6. **DO NOT** dump `git log` verbatim; translate commits into plain-language, deduplicated entries.

---

## Phase 1: Gather the release

Collect:
- **Version** — e.g. `1.3.2` (and whether it covers Free, Pro, or both).
- **Date** — release date, written as `Month DD, YYYY` (e.g. `July 28, 2026`).
- **Changes** — from the user, a provided release note, or by inspecting history:
  ```bash
  git log --oneline <last-tag>..HEAD
  ```
  Use this only as raw material; rewrite into user-facing language.

---

## Phase 2: Prepend a new version

Insert the new `## FluentPlayer vX.Y.Z` section directly **below the intro paragraph and above the previous newest version**. Do not disturb existing entries.

Exact format (mirrors every existing entry in the file — read a couple of the most recent entries in `guide/changelog.md` first to match tone and phrasing before writing):

```markdown
## FluentPlayer vX.Y.Z

_Released on Month DD, YYYY_

::: code-group

```markdown:no-line-numbers [✨ Newly Added]
• Adds ...
```

```markdown:no-line-numbers [🚀 Improvements]
• Improves ...
```

```markdown:no-line-numbers [🐞 Bug fixes]
• Fixes ...   (use "Hardens ..." for security-related fixes)
```

```markdown:no-line-numbers [💎 Pro]
• Adds/Improves/Fixes ...   (Pro-only items pulled from the tabs above)
```

:::
```

Entry style:
- One change per bullet, starting with a present-tense verb: `Adds`, `Improves`, `Fixes`, `Hardens` — not commit-message style (`feat: add vimeo provider`).
- Verb maps to tab: Feature → Newly Added, Improvement/Maintenance/Refactor → Improvements, Fix/Security → Bug fixes.
- Link to a relevant doc page when it helps, using a root-relative flat slug per this repo's URL convention: `Adds [Vimeo](/vimeo-integration) as a video source.` — never `/guide/<section>/<slug>`.
- `:no-line-numbers` keeps the code blocks clean since global `markdown.lineNumbers` is on in `.vitepress/config.mts`.

---

## Phase 3: Verify

- Confirm the `Changelog` nav item in `.vitepress/config.mts` still points to `/changelog` (flat slug — it does by default).
- Run `npm run docs:build` to confirm no dead links from any doc-page references you added.
- Report the version added and a one-line summary of the tabs touched.
