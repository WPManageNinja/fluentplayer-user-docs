---
title: "Embed with Shortcode"
description: "Embed FluentPlayer with [fluentplayer id=\"…\"] or [fluentmedia] in posts, widgets, and templates—find the media ID, optional attributes, and common questions."
---

# Embed with Shortcode

The **shortcode** is the most common way to embed a FluentPlayer video. It works in posts, pages, widgets, and even in theme templates.

### Basic Usage

Add the following shortcode to any **post or page (recommended)**:

```
[fluentplayer id="129"]
```

Replace `129` with the ID of your media item. Once added, the player will appear exactly where you place the shortcode.

## Find Your Shortcode

Every video you create is assigned a unique ID and a ready-to-use shortcode.

 1. Navigate to **FluentPlayer → Media**.
 2. Look at the **Media List** table.
 3. You will find the **ID (e.g., #129)** at the start of the row and the full **ShortCode** (e.g., [fluentplayer id='129']) in its own column.
 4. **Copy** the code exactly as shown.

![Find your Shortcode](/guide/public/display-embed/shortcode/find-your-shortcode.webp)

## Shortcode Attributes

| Attribute | Required | Description |
|-----------|----------|-------------|
| `id` | Yes | The media (post) ID |
| `src` | No | Play a specific video URL instead of the media's saved source. |
| `meta_key` | No | Read the video URL from a custom field on the current post. |
| `poster` | No | Use a specific poster image URL instead of the media's saved poster. |

The shortcode is intentionally simple — the video source, preset, controls, and all other settings come from the media item itself. This means you configure everything in one place (**FluentPlayer → Media**) and the shortcode just references it.

::: tip
If you ever change the video source, poster, or preset for a media item, every page that uses the shortcode for that ID will update automatically. No need to edit every page.
:::

## Dynamic media source (advanced)

Normally the player uses the source saved on the media item. The optional `src`, `meta_key`, and `poster` attributes let one media item act as a **reusable template** whose video changes per page — useful when the same player configuration (preset, overlays, branding) should wrap different videos.

**Source precedence** (the first match wins):

1. **`src`** — an explicit URL passed on the shortcode.
2. **`meta_key`** — the value of a custom field on the **current post** (the post or page where the shortcode appears).
3. The media item's **saved source** (the default when neither is provided).

```text
[fluentplayer id="12" src="https://example.com/clip.mp4"]
[fluentplayer id="12" meta_key="video_url"]
[fluentplayer id="12" meta_key="video_url" poster="https://example.com/cover.jpg"]
```

A YouTube or Vimeo URL works as `src` too — the provider is detected automatically.

::: warning Security note
`meta_key` reads from the current post's custom fields. Point it only at fields you control. Avoid exposing private or protected meta keys (those whose name begins with `_`) through a public shortcode, since the resolved URL is rendered into the page.
:::

::: info Developer note
By default `meta_key` is read from the current post. Developers can change which post is used with the `fluent_player/dynamic_source_post_id` filter. (There is no `post_id` shortcode attribute — use the filter for this.)
:::

## Legacy query-string embed

For backward compatibility, you can also load a media item by appending `?fluent_player_media_id=<ID>` to a URL. This is a legacy mechanism — for new content, use the shortcode or the [Gutenberg block](/guide/display-embed/block) instead.

## Using the Shortcode in Different Areas

**In a Post or Page (Block Editor)**

1. Go to **Pages → Add New** or edit an existing page.
2. Click the **+ icon** and search for the **Shortcode** block.
3. **Paste** your code (e.g., `[fluentplayer id="133"]`) into the box.
4. Click **Publish or Update** to see your video live.

![Gutenberg Block](/guide/public/display-embed/shortcode/gutenberg-shortcode-2.webp)

**In a widget:**

1. Go to **Appearance → Widgets**.
2. Add a **Text** or **Custom HTML** widget to your sidebar or footer.
3. Type `[fluentplayer id="133"]` in the widget content.
4. Save.

**In a theme template (PHP):**

If you are a developer, you can call the player directly in your code:

```php
<?php echo do_shortcode('[fluentplayer id="133"]'); ?>
```

>[!Note]
>If you enter an **ID** that doesn't exist, the player will simply not appear on the page. Always double check your **Media List** to ensure you are using the correct ID.


## Common Questions

**Can I put multiple videos on the same page?**

Yes. Use a separate shortcode for each video:

```
[fluentplayer id="129"]

[fluentplayer id="133"]
```

**Can I use the shortcode inside a tab or accordion?**

Yes, as long as the tab or accordion plugin supports shortcodes (most do).

**What happens if the media ID does not exist?**

The shortcode outputs nothing the page will look as if the shortcode is not there. No error message is shown to visitors.


