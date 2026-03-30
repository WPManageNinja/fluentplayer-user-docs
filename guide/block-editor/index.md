# Fluent Player block & media editor

Fluent Player configures video through the **FluentPlayer Media** block (`fluent-player/media`). The same block and **sidebar panels** appear in two different places. This section documents **every panel** under the **Block** (and **Media**) tabs in detail.

## Two places you edit the block

### 1. Dedicated media editor (Fluent Player only)

When you use **Add Media**, **Fluent Player → Media → Add Media**, or open an existing item under **Fluent Player → Media**, WordPress opens a **full-screen style editing experience** focused on that media item. Here you are **not** building a normal post: **only the Fluent Player block** is in play—paragraphs, columns, and other Gutenberg blocks are not part of this canvas. All player options live in the **Fluent Player** UI and the right sidebar (**Media** and **Block** tabs). The block is typically **locked** so the document stays a single, consistent media configuration.

### 2. Post or page (normal block editor)

On a **post or page**, you insert **FluentPlayer Media** from the block inserter like any other block. You can mix it with headings, images, and other blocks. The **same Block sidebar panels** apply when the Fluent Player block is selected.

In both cases, the **Block** tab holds the detailed player settings described in the pages below.

## Right sidebar: Media vs Block

| Tab | Role |
|-----|------|
| [**Media vs Block tabs**](/guide/block-editor/media-tab) | **Media** — context for the saved media item (title, status, and media-level actions where shown). **Block** — full player configuration: branding, preset, chapters, overlays, layers, etc. |

Most day-to-day tuning happens under **Block**.

## Block sidebar panels (order of these docs)

Panels appear as **collapsible sections** in the Block sidebar (order can match your plugin version):

| Doc | Panel |
|-----|--------|
| [Branding](/guide/block-editor/branding) | Custom branding, logo, colors for this embed |
| [General settings](/guide/block-editor/general-settings) | Title, poster, aspect ratio, autoplay, resume, load strategy, etc. |
| [Preset](/guide/block-editor/preset) | Built-in and custom presets |
| [Chapters](/guide/block-editor/chapters) | Chapter markers and titles |
| [Text & button overlays](/guide/block-editor/overlays) | Timed text/button overlays on the video |
| [Interactive layers](/guide/block-editor/interactive-layers) | Forms, CTA, email capture, hotspots, ads, shortcode layers |
| [Timed content area](/guide/block-editor/timed-content) | Content region below the player (Pro) |
| [Multi-language](/guide/block-editor/multi-language) | Primary language and language selector |
| [Subtitles](/guide/block-editor/subtitles) | Upload tracks in the editor |
| [Timestamp links](/guide/block-editor/timestamp-links) | Generated shortcode snippets to copy |
| [Advanced](/guide/block-editor/advanced) | Extra CSS classes on the wrapper |

## Overrides vs global Settings

Many options **override** [global Settings](/guide/settings/) or [presets](/guide/customize/presets) for this media or this embed only. Typical priority:

**Per-block / per-media → preset → global Settings**

Exact behavior can vary by option; each page notes **global vs override** where it matters.

## Next steps

- [Media vs Block Tabs](/guide/block-editor/media-tab) — Understand what each sidebar tab does.
- [Embed with Block](/guide/display-embed/block) — How to insert the Fluent Player block and choose a video source.
- [Adding and Editing Videos](/guide/videos-and-media/adding-videos) — Create media items in the Fluent Player library.
- [Settings](/guide/settings/) — Site-wide defaults that these block settings can override.
