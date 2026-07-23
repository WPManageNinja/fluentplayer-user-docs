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
| `id` | Yes | The media (post) ID. It supplies the player **template and configuration** (preset, controls, overlays, branding). By default it also provides the video source, but that source can be replaced dynamically — see [Dynamic media source](#dynamic-media-source-advanced). |
| `source_url` | No | Play a specific video URL instead of the media's saved source. |
| `source_meta` | No | Read the video URL from a custom field on the current post. |
| `source_poster` | No | Use a specific poster image URL instead of the media's saved poster. |

The shortcode is intentionally simple — the preset, controls, and all other configuration come from the media item itself. This means you configure everything in one place (**FluentPlayer → Media**) and the shortcode just references it. The video source defaults to the one saved on the media item, but it can be replaced per page — see [Dynamic media source](#dynamic-media-source-advanced) below.

::: tip
If you ever change the video source, poster, or preset for a media item, every page that uses the shortcode for that ID will update automatically. No need to edit every page.
:::

## Dynamic media source (advanced)

Normally the player uses the source saved on the media item. The optional `source_url`, `source_meta`, and `source_poster` attributes let one media item act as a **reusable template** whose video changes per page — useful when the same player configuration (preset, overlays, branding) should wrap different videos.

In this mode the `id` no longer determines which video plays; it only supplies the player **template and configuration**. The actual video source is resolved dynamically — either from the URL passed on the shortcode (`source_url`) or, most commonly, from a custom field (meta) on the current post (`source_meta`).

**Source precedence** (the first match wins):

1. **`source_url`** — an explicit URL passed on the shortcode.
2. **`source_meta`** — the value of a custom field on the **current post** (the post or page where the shortcode appears).
3. The media item's **saved source** (the default when neither is provided).

```text
[fluentplayer id="12" source_url="https://example.com/clip.mp4"]
[fluentplayer id="12" source_meta="video_url"]
[fluentplayer id="12" source_meta="video_url" source_poster="https://example.com/cover.jpg"]
```

A YouTube or Vimeo URL works as `source_url` too — the provider is detected automatically.

### Example: play a video stored in a custom field

Say each post stores its video URL in a custom field named `youtube_url` and you want one consistent player for all of them:

1. In **FluentPlayer → Media**, create **one** media item. Configure the preset, controls, overlays, and branding you want — this item is your reusable **template**. The source you set here is only a fallback; it does not need to match any specific post (you can leave it as a placeholder).
2. Copy its **ID** (e.g. `#12`).
3. In each post — or once in your theme template — add the shortcode with `source_meta` pointing at your field:

```text
[fluentplayer id="12" source_meta="youtube_url"]
```

Every post now renders the same template but plays the URL from its own `youtube_url` field. You reuse the **same `id`** everywhere — you do **not** create a separate media item for each video. The `id` supplies the player template and configuration; the video source comes from the field.

::: warning Security note
`source_meta` reads from the current post's custom fields. Point it only at fields you control. Avoid exposing private or protected meta keys (those whose name begins with `_`) through a public shortcode, since the resolved URL is rendered into the page.
:::

::: info Developer note
By default `source_meta` is read from the current post. Developers can change which post is used with the `fluent_player/dynamic_source_post_id` filter. (There is no `post_id` shortcode attribute — use the filter for this.)
:::

## Legacy query-string embed

For backward compatibility, you can also load a media item by appending `?fluent_player_media_id=<ID>` to a URL. This is a legacy mechanism — for new content, use the shortcode or the [Gutenberg block](/block) instead.

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


