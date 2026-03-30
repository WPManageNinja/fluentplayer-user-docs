# Embed with Block

If you use the WordPress block editor (Gutenberg), you can add Fluent Player using the **FluentPlayer Media** block. The inserter lists it as **Fluent Player** / **FluentPlayer Media** (registered name: `fluent-player/media`).

## How to add the block

1. Edit any post or page in the block editor (or open **Fluent Player → Media** for the dedicated editor—see below).
2. Click **+** and search for **Fluent Player** or **FluentPlayer Media**.
3. Insert the block. You will see **Add a new media from different sources** and a row of source buttons.
4. Pick a source, complete the steps (for example paste a **YouTube URL** and click **Add YouTube Video**), or use **Back to Media Selector** to change the source type.
5. Publish or update the page (or save the media item).

On **posts and pages**, the block is **not locked** — you can place multiple Fluent Player blocks and mix them with other blocks.

## Choosing a video source (first step)

After you insert the block, the UI offers **one-click source** buttons. In Fluent Player Pro these commonly include:

| Source | Purpose |
|--------|---------|
| **Media Library** | Pick a file already in WordPress. |
| **YouTube** | Paste a YouTube URL (shorts/long URLs supported). |
| **Vimeo** | Paste a Vimeo URL. |
| **Bunny Stream** | BunnyCDN Stream libraries / videos. |
| **BunnyCDN Storage** | Files in Bunny storage zones. |
| **Mux** | On-demand Mux assets. |
| **Mux Live** | Mux live streams. |
| **Audio** | Audio-focused media. |

Availability depends on your plan and **Settings → Storage** integrations.

## Dedicated media editor vs normal post

| Context | What you see |
|---------|----------------|
| **Fluent Player → Media** (Add Media / edit media) | A **dedicated editing screen** where **only the Fluent Player block** is used to configure the video—not a full post with paragraphs and other blocks. The block is usually **locked**. |
| **Post or page** | Standard block editor; Fluent Player is **one block** among others. |

In both cases, configuration uses the same **right sidebar** (**Media** and **Block** tabs).

## Deep dive: every Block sidebar panel

Full documentation for each panel (Branding, General settings, Preset, Chapters, overlays, layers, timed content, multi-language, subtitles, timestamp links, Advanced) lives here:

**[Fluent Player block & media editor](/guide/block-editor/)**

## Block vs shortcode

| | Block | Shortcode |
|---|-------|-----------|
| Editor | Block editor (or dedicated media screen) | Anywhere shortcodes run |
| Configuration | Full **Block** sidebar; see [block & media editor](/guide/block-editor/) | Typically `id` only; options live on the media |

For shortcodes, see [Embed with Shortcode](/guide/display-embed/shortcode).

## Next steps

- [Block & media editor](/guide/block-editor/) — Detailed Block sidebar reference
- [Video Sources](/guide/videos-and-media/video-sources)
- [Settings](/guide/settings/) — Global defaults
- [Shortcodes Reference](/reference/shortcodes)
