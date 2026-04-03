---
title: "Advanced (Block sidebar)"
description: "Fluent Player Block Advanced panel: additional CSS classes on the block wrapper, optional WordPress HTML anchor, and scoping theme CSS to one embed."
---

# Advanced (Block sidebar)

**Location:** **Block** tab → **Advanced** panel (may be grouped with WordPress core **Advanced** block options on some versions).

## Additional CSS class(es)

| Control | Purpose |
|---------|---------|
| **Additional CSS class(es)** | One or more **space-separated** class names added to the **block wrapper** in the editor and on the front end. |

Use this to:

- Target **this** embed with custom CSS in **Appearance → Customize → Additional CSS** or your theme.
- Scope styles under a unique class without changing global Fluent Player CSS.

**Example:** `my-course-lesson fp-lesson-3`

Do **not** paste full CSS here—only **class names**.

## Block anchor (WordPress)

If your site uses **HTML anchors** for blocks, the core **Advanced** section may expose an **HTML anchor** field for deep links (`#fragment`). Fluent Player does not replace this; it is standard Gutenberg behavior when enabled.

## Next steps

- [Settings → General: Custom CSS](/guide/settings/general) — Add global CSS that applies to every player on your site.
- [Embed with Block](/guide/display-embed/block) — Overview of the FluentPlayer Media block.
- [Player Editor Overview](/guide/block-editor/) — Full list of all Block sidebar panels.
