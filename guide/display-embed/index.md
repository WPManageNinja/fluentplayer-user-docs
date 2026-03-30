# Display & Embed Overview

You have created a video in Fluent Player — now it is time to show it on your site. There are several ways to display the player, and each one is suited for a different situation.

## Which method should I use?

| Method | Best for | Difficulty |
|--------|----------|-----------|
| **[Shortcode](/guide/display-embed/shortcode)** | Any post, page, or widget. Works with both Classic and Block editors. | Beginner |
| **[Gutenberg Block](/guide/display-embed/block)** | Block editor users who prefer a visual, drag-and-drop workflow. | Beginner |
| **[Dedicated Player URL](/guide/display-embed/dedicated-player-url)** | Sharing a direct link to the video (in emails, social media, etc.). | Beginner |
| **[Timestamp Links](/guide/display-embed/timestamp-links)** | Creating "chapter" links that jump to a specific moment in the video. | Intermediate |

Most users will use either the **shortcode** or the **block**. Both produce the same result on the front end — the choice comes down to personal preference.

## Quick examples

**Shortcode (works everywhere):**

```
[fluentplayer id="42"]
```

**Block (Gutenberg):** Add a "Fluent Player" block and select media #42.

**Playlist shortcode (Pro):**

```
[fluentplaylist id="10"]
```

**Timestamp link (seek to 1:30):**

```
[fluentplayer_timestamp time="1:30" media_id="42"]Jump to 1:30[/fluentplayer_timestamp]
```

## How embedding works behind the scenes

When you use a shortcode or block, here is what happens:

1. WordPress sees `[fluentplayer id="42"]` (or the legacy `[fluentmedia]` tag) in the content.
2. Fluent Player fetches the media settings for ID 42 (video source, preset, overlays, etc.).
3. The plugin generates the HTML for the video player and inserts it into the page.
4. The viewer sees a fully working player.

The video source URL is **not** hardcoded in the shortcode — only the ID is. This means if you change the video source later (under Fluent Player → Media), every page that embeds this media automatically shows the updated video.

## Topics in this section

- [Embed with Shortcode](/guide/display-embed/shortcode)
- [Embed with Block](/guide/display-embed/block)
- [Dedicated Player URL](/guide/display-embed/dedicated-player-url)
- [Timestamp Links](/guide/display-embed/timestamp-links)

## Next steps

Start with [Shortcode Embed](/guide/display-embed/shortcode) — it's the fastest way to get a video on any page. For a visual workflow in the block editor, try [Gutenberg Block](/guide/display-embed/block) instead. Once your video is live, explore the [Player Editor](/guide/block-editor/) to customize the sidebar settings for each embed.
