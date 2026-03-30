# Timestamp links (Block sidebar)

**Location:** **Block** tab → **Timestamp Links** panel.

This panel helps you build **`[fluentplayer_timestamp …]`** shortcode snippets that **seek to a time** in **this** video when clicked—useful for “jump to 1:30” links in posts, emails, or lesson notes.

## What the UI provides

| Element | Purpose |
|---------|---------|
| **Time** | Target **seek time** (often minutes:seconds or hours:minutes:seconds—match your UI). |
| **Link text** | Visible anchor text for the shortcode content. |
| **Generated shortcode** | Read-only preview of the full shortcode with **`media_id`** (or equivalent) filled for this media. |
| **Copy** | Copies the shortcode to the clipboard for pasting into the block editor, Classic editor, or widgets. |

Exact attribute names match [Shortcodes Reference](/reference/shortcodes) (`time`, `media_id`, inner content for the link label).

## Using copied shortcodes

Paste the shortcode in:

- A **Paragraph** or **Shortcode** block (if your theme allows shortcodes in blocks).
- **Classic** editor or **widget** areas that process shortcodes.

Front-end behavior: click → player seeks (or opens [dedicated URL](/guide/display-embed/dedicated-player-url) flows depending on setup).

## Next steps

- [Timestamp Links (Embed)](/guide/display-embed/timestamp-links) — Full guide on using `[fluentplayer_timestamp]` shortcodes in your content.
- [Chapters (Block)](/guide/block-editor/chapters) — Add named chapter markers to the video timeline.
- [Shortcodes Reference](/reference/shortcodes) — Full attribute list for all Fluent Player shortcodes.
