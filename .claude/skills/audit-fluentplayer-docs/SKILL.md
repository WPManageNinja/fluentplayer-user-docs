---
name: audit-fluentplayer-docs
description: 'Run a read-only quality gate across the whole Fluent Player docs site: verify file placement, link form, sidebar coverage, image integrity, convention compliance, and a clean production build. Produces a scored pass/fail checklist with offending paths, then offers fixes. USE FOR: audit the docs, check for broken links, verify doc conventions, run the quality gate, is everything consistent, lint the docs, pre-commit doc check, find docs missing from the sidebar, find orphaned images. DO NOT USE FOR: writing a new page (use write-fluentplayer-doc), editing content (use edit-fluentplayer-doc), or renaming/moving/deleting (use restructure-fluentplayer-docs).'
license: MIT
compatibility: 'VitePress repo using docs/<category>/<slug>.md layout. Sidebar defined in .vitepress/config.mts (guideGroups const). Images stored at docs/public/<category>/<slug>/. Requires Node + npm to run docs:build.'
metadata:
  project: fluentplayer-user-docs
  canonical-rules: CLAUDE.md
---

# Audit Fluent Player Docs

A read-only health check for the documentation site. Run it before committing or deploying.
It reports problems first; it fixes only with explicit user approval. Canonical conventions
live in `CLAUDE.md`.

---

## Agent Behavior Rules

1. **DO** run all checks read-only and present the full scored report before changing anything.
2. **DO** show offending file paths for every failed check (not just a count).
3. **DO** ask for confirmation before applying any fix; route real fixes through the
   appropriate skill (edit / restructure / write).
4. **DO** finish with `npm run docs:build` and report its result.
5. **DO NOT** edit content silently.
6. **DO NOT** mark a check "pass" without the command output that proves it.

---

## Phase 1: Setup (Interactive)

### 1.1 Scope
> **Audit the whole site, or a specific category folder?**

Record as `SCOPE` (default: whole `docs/`).

### 1.2 Fix mode
> **Report only, or report and then offer to fix?**

Record as `FIX_MODE`. (Default: report only.)

---

## Phase 2: Context

1. Read `CLAUDE.md` (the rules being enforced).
2. Note counts:
   - Docs: `find docs -name '*.md' | grep -v '/public/' | wc -l`
   - Sidebar links: `grep -c "link: '/" .vitepress/config.mts`
   - Rewrites:      `grep -c "^    'docs/" .vitepress/config.mts`

---

## Phase 3: Checks

Run each; record PASS/FAIL + offending paths.

```
C1 PLACEMENT  - Only known flat files at docs/ root (index.md, installation.md,
                quick-start.md, changelog.md, support.md). Everything else inside
                a category subfolder:
                find docs -maxdepth 1 -name '*.md' | \
                  grep -vE '(index|installation|quick-start|changelog|support)\.md'
                → expect empty

C2 LINK FORM  - No relative links:
                grep -rEn '\]\(\.\.?/' docs   → expect empty
              - No hardcoded full external paths for internal docs:
                grep -rEn '\]\(https?://fluentplayer\.com/guide/' docs   → expect empty

C3 EXTERNAL   - No residual external doc links that should be internal:
                grep -rn 'fluentplayer.com/guide/' docs   → expect empty

C4 BOILER     - No support boilerplate:
                grep -rin 'contact our support team' docs   → expect empty
                grep -rin 'reach out to our support team' docs   → expect empty

C5 SIDEBAR    - Count match: doc count ≈ sidebar link count (allow ±1 for index.md pages).
              - Every doc has a rewrites entry ('docs/<cat>/<file>.md': '<slug>.md') and every
                rewrites key points to a file that exists.
              - Every sidebar link resolves: each link: '/<slug>' in config.mts must equal a
                rewrites value (minus .md). No link may start with /guide/ or /docs/.
              - Coverage: every non-index doc slug appears as a sidebar link (none missing).
                Derive slug sets from find + grep config.mts; diff both directions.

C6 IMAGES     - Every ![...](/docs/public/<cat>/<slug>/<file>) ref resolves to a real file.
                grep -rEo '!\[[^]]*\]\(/docs/public/[^)]+\)' docs  → verify each path exists.
              - Flag image folders under docs/public/ that no doc references (orphans).

C7 BOLD       - No inner-whitespace bold (broken open and broken close).
                Run BOTH; union of matches should be empty:
                  open : grep -rEn '(^|[[:space:]([{])\*\* ' docs
                  close: grep -rEn ' \*\*([[:space:]]|$)' docs

C8 BUILD      - npm run docs:build exits 0 with no dead-link warnings.
```

For C5 (coverage) and C6 (orphans), derive the slug sets with `find`/`grep` and diff them;
list any doc missing from the sidebar and any unreferenced image folder.

---

## Phase 4: Report (& optional fix)

Print a scored checklist:

| Check | Result | Offending paths |
| ----- | ------ | --------------- |
| C1 Placement | ✅ / ❌ | ... |
| C2 Link form | ✅ / ❌ | ... |
| C3 External links | ✅ / ❌ | ... |
| C4 Boilerplate | ✅ / ❌ | ... |
| C5 Sidebar coverage | ✅ / ❌ | ... |
| C6 Image integrity | ✅ / ❌ | ... |
| C7 Bold rule | ✅ / ❌ | ... |
| C8 Build | ✅ / ❌ | ... |

Then summarize total pass/fail. If `FIX_MODE` allows and the user confirms, fix each issue
via the right skill (content → edit-fluentplayer-doc; structure → restructure-fluentplayer-docs;
missing page → write-fluentplayer-doc) and re-run the failed checks.

---

## Quick Reference

### One-shot survey
```
Docs count:     find docs -name '*.md' | grep -v '/public/' | wc -l
Sidebar links:  grep -c "link: '/" .vitepress/config.mts
Dup slugs:      grep -oE "^    'docs/[^']+': '[^']+'" .vitepress/config.mts | sed "s/.*: //" | sort | uniq -d
                (served slugs must be unique; duplicate FILE names across folders are fine —
                 they are disambiguated in rewrites, e.g. branding.md → /branding-appearance)
Build:          npm run docs:build
```

### Key Principles
1. **Read-only first** — report before you touch anything.
2. **Paths, not just counts** — every failure names its files.
3. **Counts must match** — docs ≈ sidebar links, and both directions covered.
4. **Build is the final gate** — it's the only real link checker.
5. **Fixes go through the proper skill**, never ad-hoc.
