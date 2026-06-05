---
name: fluentplayer-manage-screenshots
description: 'Add and standardize screenshots in the FluentPlayer VitePress docs (fluentplayer-user-docs). Enforces the repo convention: per-page images live at guide/public/<section>/<page>/<name>.webp, are referenced in markdown with the matching root-relative /guide/public/... path, use the .webp format, keep a .gitkeep in each directory, and have meaningful alt text. Validates that references resolve and finds orphans. USE FOR: add screenshots, embed images, fix image paths, standardize images, rename screenshots, broken image. DO NOT USE FOR: brand/logo assets (those live in root public/), creating a whole new page (use fluentplayer-add-doc-page), or non-image edits.'
license: MIT
compatibility: Operates on the fluentplayer-user-docs VitePress repo. Image conversion (if needed) requires cwebp or ImageMagick.
metadata:
  project: fluentplayer-user-docs
---

# Manage FluentPlayer screenshots

Keep documentation images consistent with how the site already stores and references them.

---

## The convention (do not deviate)

- **Two distinct asset locations:**
  - **Root `public/`** → brand/site assets (logo, favicon, hero), served from site root, e.g. `/brand/Hero-Image-2.webp`. This skill does **not** manage these.
  - **`guide/public/<section>/<page>/`** → per-page screenshots. This is what this skill manages.
- **On disk:** `guide/public/<section>/<page>/<name>.webp`
- **In markdown:** `![Alt text](/guide/public/<section>/<page>/<name>.webp)` — the path is root-relative and mirrors the on-disk path exactly.
- **Format:** `.webp` only (the entire repo uses it).
- **Naming:** `<page>-<N>.webp` in document order, e.g. `general-settings-1.webp`, `general-settings-2.webp`. The `<page>` stem usually matches the page slug.
- **Tracking:** every screenshot directory contains a `.gitkeep` (so empty/new dirs are committed).

---

## Agent behavior rules

1. **DO** mirror the on-disk path and the markdown reference path exactly.
2. **DO** write meaningful, unique alt text (describe what the screenshot shows, not "image").
3. **DO** keep `.gitkeep` in any directory you create.
4. **DO NOT** put screenshots in the root `public/` directory.
5. **DO NOT** introduce non-`.webp` images without converting them first (and ask before installing any converter).
6. **DO NOT** delete image files without confirming they are truly orphaned.

---

## Workflow

### A. Add screenshots to a page

1. Determine the target page's section and slug → directory is `guide/public/<section>/<slug>/`.
2. Create it with a `.gitkeep` if missing:
   ```bash
   mkdir -p guide/public/<section>/<slug> && touch guide/public/<section>/<slug>/.gitkeep
   ```
3. Place/rename the image files into that directory using the `<slug>-<N>.webp` pattern, in the order they appear in the page.
4. Insert references in the markdown at the right spots:
   ```markdown
   ![Mux access token screen](/guide/public/integrations/mux/access-token-1.webp)
   ```
5. Validate (section C) and report.

### B. Convert non-webp inputs (only if needed)

If the user provides PNG/JPG, convert to `.webp` before adding. This needs `cwebp` (libwebp) or ImageMagick — **ask before installing anything**.

```bash
# cwebp
cwebp -q 82 input.png -o guide/public/<section>/<slug>/<slug>-1.webp
# or ImageMagick
magick input.png guide/public/<section>/<slug>/<slug>-1.webp
```

### C. Validate references

- Every `![...](/guide/public/...)` reference in markdown points to a file that exists on disk → no broken references.
- Every file under `guide/public/**` (excluding `.gitkeep`) is referenced by some page → no orphans (report any).
- All references and files use `.webp`.

Process files in code (sandbox) and report only the summary. This is the same image check used by `fluentplayer-review-docs` — defer to that skill for a full-site sweep; use this skill for a single page or a targeted fix.
