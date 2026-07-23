---
title: "Embed with Shortcode"
description: "Embed FluentPlayer with [fluentplayer id=\"…\"] in posts, widgets, page builders, and templates — covering saved media, dynamic URLs, custom fields, and playback overrides."
---

# Embed with Shortcode

The shortcode is the simplest and most flexible way to embed a FluentPlayer player anywhere on your site. It works in posts, pages, widgets, page builders, and even inside your theme templates.

A shortcode can reference a saved media item, play a video from a dynamic URL, or combine both using a saved media item as a reusable player template while supplying the video source at embed time.

## Basic Usage

Add the following shortcode to any post or page:

```text
[fluentplayer id="129"]
```

Replace `129` with the ID of your media item.

When the page loads, FluentPlayer displays the player exactly where you placed the shortcode, using the media item's saved settings, including:

- Video source
- Poster image
- Player preset
- Controls
- Branding
- Overlay layers
- Playback behavior

## Find Your Shortcode

Every media item automatically receives its own shortcode.

To find it:

1. Navigate to **FluentPlayer → Media**.
2. Locate your media item.
3. The **ID** appears at the beginning of the row (for example **#129**).
4. The **Shortcode** column contains a ready-to-use shortcode, such as `[fluentplayer id="129"]`.

Copy and paste this shortcode wherever you want the player to appear.

![Find your Shortcode](/guide/public/display-embed/shortcode/find-your-shortcode.webp)

## Shortcode Attributes

The shortcode supports both saved media items and dynamic media sources.

| Attribute | Required | Description |
|-----------|----------|-------------|
| `id` | No | The media item ID. Provides the player template, preset, controls, overlays, branding, and default media source. |
| `source_url` | No | Plays a specific media URL instead of the media item's saved source. |
| `source_meta` | No | Reads the media URL from a custom field on the current post or page. |
| `source_poster` | No | Uses a custom poster image URL instead of the saved poster. |
| `preset` | No | Overrides the player preset for this embed only. |
| `autoplay` | No | Enables or disables autoplay for this embed. Use `muted` as the value for muted autoplay. |
| `muted` | No | Starts playback muted. |
| `loop` | No | Repeats playback automatically. |
| `plays_inline` | No | Plays inline on supported mobile devices instead of entering fullscreen. |
| `controls` | No | Shows or hides the player controls (`0` hides all control bars). |
| `preload` | No | Overrides the preload behavior (`none`, `metadata`, or `auto`). |
| `ratio` | No | Sets the player aspect ratio (e.g. `16:9`). |
| `aspect_ratio` | No | Alias for `ratio`. |
| `start` | No | Starts playback from a specific time (in whole seconds). |
| `class` | No | Adds custom CSS classes to the player wrapper. |

::: info
All playback override attributes only affect the current shortcode. They do not modify the saved media item.
:::

## Default Behavior

By default, the shortcode uses the configuration stored on the selected media item.

This includes preset, controls, branding, overlay layers, playback settings, poster image, and default media source. If you update the media item later, every shortcode using that media ID automatically reflects those changes.

When playback override attributes are supplied, only those specific settings are overridden for that individual embed.

## Dynamic Media Sources

One of FluentPlayer's most powerful features is the ability to supply a media source at embed time.

Instead of always using the media item's saved video, you can provide:

- A direct media URL
- A YouTube URL
- A Vimeo URL
- A supported CDN provider URL
- A custom field containing a media URL

FluentPlayer automatically detects the media provider from the supplied URL. The `id` attribute is optional when using a dynamic media source.

### Source Priority

When multiple source options are available, FluentPlayer uses the following order:

1. `source_url`
2. `source_meta`
3. The media item's saved source (when `id` is provided)

The first available source is used.

### Embedding a URL Without a Saved Media Item

You can create a player without saving a media item. Simply provide a media URL:

```text
[fluentplayer source_url="https://example.com/video.mp4"]
```

Or a YouTube or Vimeo URL — the provider is detected automatically:

```text
[fluentplayer source_url="https://www.youtube.com/watch?v=abc123"]
```

When no media item is supplied, FluentPlayer uses the site's default player preset. To apply a specific preset, add the `preset` attribute:

```text
[fluentplayer source_url="https://example.com/video.mp4" preset="minimal"]
```

### Using a Saved Media Item as a Template

A common workflow is to use a saved media item for player configuration while supplying a different video source. The media item provides the preset, controls, branding, overlay layers, and playback configuration; the shortcode provides the media source.

```text
[fluentplayer id="12" source_url="https://example.com/video.mp4"]
```

Or load the URL from a custom field:

```text
[fluentplayer id="12" source_meta="video_url"]
```

You can also override the poster image:

```text
[fluentplayer id="12" source_meta="video_url" source_poster="https://example.com/poster.jpg"]
```

## Playback Overrides

The shortcode can override playback behavior without modifying the saved media item:

```text
[fluentplayer id="12" autoplay="true" muted="true" controls="0"]
```

Or combined with a dynamic source:

```text
[fluentplayer source_url="https://example.com/video.mp4" preset="minimal" autoplay="true"]
```

## Example: Play Videos Stored in a Custom Field

Suppose each blog post stores its video URL in a custom field named `youtube_url`. Instead of creating a separate media item for every post:

1. Create one media item in **FluentPlayer → Media**.
2. Configure its preset, branding, controls, overlays, and playback settings.
3. Copy its ID (for example **12**).
4. Add this shortcode wherever the player should appear:

```text
[fluentplayer id="12" source_meta="youtube_url"]
```

Every post now uses the same player configuration while playing the video stored in its own `youtube_url` custom field.

::: warning Security note
The `source_meta` attribute reads values from the current post's custom fields. Only use custom fields that you control. Avoid exposing private or protected meta keys (those beginning with `_`) because their values become part of the rendered page.
:::

::: info Developer note
By default, `source_meta` reads from the current post or page. Developers can change which post supplies the dynamic source using the `fluent_player/dynamic_source_post_id` filter. There is no `post_id` shortcode attribute.
:::

## Using the Shortcode

### WordPress Block Editor

1. Edit a page or post.
2. Click **+** and add a **Shortcode** block.
3. Paste your shortcode (e.g. `[fluentplayer id="129"]`).
4. Publish or update the page.

![Gutenberg Block](/guide/public/display-embed/shortcode/gutenberg-shortcode-2.webp)

### Classic Editor

Paste the shortcode directly into the editor wherever you want the player to appear.

### Widgets

Go to **Appearance → Widgets**, add a **Shortcode**, **Custom HTML**, or **Text** widget, and paste:

```text
[fluentplayer id="129"]
```

### Elementor

Add a **Shortcode** widget and paste your FluentPlayer shortcode.

### Divi

Add a **Code** module and insert the shortcode.

### Theme Templates (PHP)

Developers can render the player directly inside a template:

```php
<?php echo do_shortcode('[fluentplayer id="129"]'); ?>
```

::: info
If the specified media ID does not exist, FluentPlayer outputs nothing. Visitors will not see an error message. Always verify the media ID in **FluentPlayer → Media**.
:::

## Legacy Query String Embed

For backward compatibility, FluentPlayer still supports loading a media item using a query string:

```text
https://example.com/page/?fluent_player_media_id=129
```

This method is considered legacy. For new content, use the shortcode or the [Gutenberg block](/block) instead.

## Frequently Asked Questions

**Can I place multiple players on one page?**

Yes. Use a separate shortcode for each video:

```text
[fluentplayer id="129"]

[fluentplayer id="133"]
```

**Can I use the shortcode inside tabs or accordions?**

Yes, as long as the plugin supports WordPress shortcodes, FluentPlayer works normally.

**Can I use a YouTube or Vimeo URL directly?**

Yes. FluentPlayer automatically detects supported media providers from the supplied URL, including YouTube, Vimeo, direct media files, and supported CDN providers.

**Do I always need a media item?**

No. You can embed a media URL directly using `source_url`. A saved media item is only required if you want to reuse player settings such as presets, overlays, branding, or controls.

**What happens if the media ID does not exist?**

If the specified media item cannot be found, FluentPlayer outputs nothing. Visitors will not see an error message.
