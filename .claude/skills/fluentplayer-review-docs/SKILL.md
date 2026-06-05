---
name: fluentplayer-review-docs
description: 'Pre-publish audit of the FluentPlayer VitePress docs (fluentplayer-user-docs). Runs docs:build to catch dead links, checks every guide page is wired into the guideGroups sidebar, flags Pro features missing a (Pro) label, verifies screenshot references resolve to files on disk (and finds orphans), catches known alt-text/spelling typos, and flags empty/placeholder pages. Produces a structured report and offers fixes. USE FOR: review the docs, lint docs, pre-publish check, audit the documentation, find broken links, check the sidebar, before committing docs. DO NOT USE FOR: creating a new page (use fluentplayer-add-doc-page) or writing content.'
license: MIT
compatibility: Operates on the fluentplayer-user-docs VitePress repo. Requires Node/npm and git.
metadata:
  project: fluentplayer-user-docs
---

# Review the FluentPlayer docs

A read-only audit pass over the docs site. Gather findings first, present a structured report, then offer to apply fixes — do not auto-edit content without the user's go-ahead.

---

## Agent behavior rules

1. **DO** run every check below and report all findings, even when the build passes.
2. **DO** present findings before editing; apply fixes only after the user confirms.
3. **DO** keep the analysis in the sandbox (process files in code, surface only the summary) to avoid flooding context.
4. **DO NOT** treat a passing `docs:build` as a full pass — link health is only one of the checks.
5. **DO NOT** change product meaning when fixing typos; fix spelling/labels only.

---

## Checks

### 1. Dead links (build gate)

Run `npm run docs:build`. VitePress fails on dead internal links. Capture and report any dead-link errors verbatim (file + target). A clean build = links resolve.

### 2. Sidebar sync

The sidebar is hand-wired in `.vitepress/config.mts` (`guideGroups`). Cross-check it against the filesystem:

- Collect every page route from `guide/**/*.md` (a file `guide/<section>/<slug>.md` → `/guide/<section>/<slug>`; `index.md` → `/guide/<section>/`). Exclude `changelog.md` and `support.md` if intentionally nav-only.
- Collect every `link` in `guideGroups`.
- Report **pages not in the sidebar** (reachable by URL but invisible) and **sidebar links with no file** (dead entries).

### 3. Free/Pro labeling

For each page whose body clearly describes a Pro-only feature (mentions "Pro", "requires FluentPlayer Pro", or a Pro integration like Mux/Bunny/Mailchimp/Webhook/playlists/analytics), check that **(Pro)** appears in the `# H1` and in its `guideGroups` sidebar `text`. Report mismatches. (This is a heuristic — present for human confirmation, don't auto-add.)

### 4. Screenshot references resolve

For every markdown image `![alt](/guide/public/...)`:
- Confirm the referenced file exists on disk under `guide/public/...`. Report **broken references**.
- Report **orphaned images** — files under `guide/public/**` (excluding `.gitkeep`) that no page references.
- Confirm the extension is `.webp` (the repo convention); flag non-webp references.

### 5. Known typos / alt-text quality

Scan for the known existing typos and any obvious misspellings, e.g.:
- `Integrattions` → `Integrations`
- `Singing Key` → `Signing Key`
- `Sisibility` → `Visibility`

Report each with file + line. Also flag empty or duplicated image alt text.

### 6. Placeholder / empty pages

Flag pages that are empty or stub-only — notably `guide/changelog.md` (currently empty) — and any page with a heading but no body.

---

## Report format

Print a structured summary, grouped by check, e.g.:

```text
docs:build .............. PASS (0 dead links)
Sidebar sync ............ 1 issue
  - guide/integrations/vimeo-integration.md not in guideGroups
Free/Pro labels ......... 0 issues
Screenshot refs ......... 2 issues
  - broken: /guide/public/settings/general/general-settings-9.webp (no file)
  - orphan: guide/public/integrations/mux/unused-12.webp
Typos ................... 1 issue
  - guide/integrations/webhook-integration.md:14  "Integrattions"
Placeholder pages ....... 1
  - guide/changelog.md (empty)
```

Then ask which fixes to apply. For typos and broken/orphaned-image cleanup, offer to fix directly. For sidebar gaps, offer to hand off to `fluentplayer-add-doc-page` (or add the missing leaf). For Free/Pro mismatches, confirm each with the user first.
