---
title: "Embed with Shortcode"
description: "Embed Fluent Player with [fluentplayer id=\"…\"] or [fluentmedia] in posts, widgets, and templates—find the media ID, optional attributes, and common questions."
---

# Embed with Shortcode

The **shortcode** is the most common way to embed a Fluent Player video. It works in posts, pages, widgets, and even in theme templates.

### Basic usage

Add this shortcode to any **post or page** (preferred tag name):

```
[fluentplayer id="129"]
```

The plugin also registers **`[fluentmedia id="133"]`** — the same handler, kept for older content. Replace `133` with the ID of your media item. That's it. The player will appear where you placed the shortcode.

## Find Your Shortcode

Every video you create is assigned a unique ID and a ready-to-use shortcode.

 1. Navigate to **Fluent Player → Media**.
 2. Look at the **Media List** table.
 3. You will find the **ID (e.g., #129)** at the start of the row and the full **ShortCode** (e.g., [fluentplayer id='129']) in its own column.
 4. **Copy** the code exactly as shown.

![Find your Shortcode](/guide/public/Images/Display-Embed/shortcode/find-your-shortcode.webp)

![Medial ID]()

## Shortcode attributes

| Attribute | Required | Description |
|-----------|----------|-------------|
| `id` | Yes | The media (post) ID |

The shortcode is intentionally simple — the video source, preset, controls, and all other settings come from the media item itself. This means you configure everything in one place (**Fluent Player → Media**) and the shortcode just references it.

::: tip
If you ever change the video source, poster, or preset for a media item, every page that uses the shortcode for that ID will update automatically. No need to edit every page.
:::

## Using the Shortcode in Different Areas

**In a Post or Page (Block Editor)**

1. Go to **Pages → Add New** or edit an existing page.
2. Click the **+ icon** and search for the **Shortcode** block.
3. **Paste** your code (e.g., `[fluentplayer id="133"]`) into the box.
4. Click **Publish or Update** to see your video live.

![Gutenberg Block](/guide/public/Images/Display-Embed/shortcode/gutenberg-shortcode-2.webp)

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

>![Note]
>If you enter an **ID** that doesn't exist, the player will simply not appear on the page. Always double-check your **Media List** to ensure you are using the correct ID.


## Common questions

**Can I put multiple videos on the same page?**

Yes. Use a separate shortcode for each video:

```
[fluentplayer id="129"]

[fluentplayer id="133"]
```

**Can I use the shortcode inside a tab or accordion?**

Yes, as long as the tab or accordion plugin supports shortcodes (most do).

**What happens if the media ID does not exist?**

The shortcode outputs nothing — the page will look as if the shortcode is not there. No error message is shown to visitors.


