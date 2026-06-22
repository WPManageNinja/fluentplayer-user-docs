---
title: "Display & Embed Overview"
description: "Compare ways to show FluentPlayer on your site: shortcode, Gutenberg block, dedicated player URL, and timestamp links—with quick examples and how embedding works."
---

# Display & Embed Overview

Once you have created your video in **FluentPlayer**, you need to display it on your website. There are several simple ways to embed your player, depending on your workflow and where you want the video to appear.

## Which Method Should I Use?

| Method | Best for | Difficulty |
|--------|----------|-----------|
| **[Shortcode](/shortcode)** | Any post, page, or widget. Works with both Classic and Block editors. | Beginner |
| **[Gutenberg Block](/block)** | Block editor users who prefer a visual, drag and drop workflow. | Beginner |
| **[Dedicated Player URL](/dedicated-player-url)** | Sharing a direct link to the video (in emails, social media, etc.). | Beginner |
| **[Timestamp Links](/timestamp-links)** | Creating "chapter" links that jump to a specific moment in the video. | Intermediate |

Most users will use either the **shortcode** or the **block**. Both produce the same result on the front end the choice comes down to personal preference.

## Quick Examples

**Shortcode (works everywhere):**

```
[fluentplayer id="42"]
```

**Block (Gutenberg):** Add a "FluentPlayer" block and select media #42.

**Playlist shortcode (Pro):**

```
[fluentplaylist id="10"]
```

**Timestamp link (seek to 1:30):**

```
[fluentplayer_timestamp time="1:30" media_id="42"]Jump to 1:30[/fluentplayer_timestamp]
```

## How Embedding Works

When you use a shortcode or block, FluentPlayer handles the technical work behind the scenes:

1. **Detection:** WordPress identifies the `[fluentplayer id="42"]` tag in your content.
2. **Fetching Data:** The plugin pulls the specific settings for that ID, such as the video source, player preset, and any overlays.
3. **Rendering:** The plugin generates the necessary HTML and inserts the player into your page for the viewer. The viewer sees a fully working player.

:::info
Your video source URL is **not** hardcoded into the shortcode. Because the shortcode uses the **Media ID**, you can change the video file or source in the FluentPlayer dashboard, and it will automatically update everywhere the video is embedded.
:::

