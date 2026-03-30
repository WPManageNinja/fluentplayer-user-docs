# Embed with Shortcode

The **shortcode** is the most common way to embed a Fluent Player video. It works in posts, pages, widgets, and even in theme templates.

## Basic usage

Add this shortcode to any post or page (preferred tag name):

```
[fluentplayer id="42"]
```

The plugin also registers **`[fluentmedia id="42"]`** — the same handler, kept for older content. Replace `42` with the ID of your media item. That's it — the player will appear where you placed the shortcode.

## Where to find the media ID

- In **Fluent Player → Media**, the ID appears in the list (for example, `#42`).
- When editing a media, check your browser's URL — it usually includes `post=42` or similar.

## Shortcode attributes

| Attribute | Required | Description |
|-----------|----------|-------------|
| `id` | Yes | The media (post) ID |

The shortcode is intentionally simple — the video source, preset, controls, and all other settings come from the media item itself. This means you configure everything in one place (**Fluent Player → Media**) and the shortcode just references it.

::: tip
If you ever change the video source, poster, or preset for a media item, every page that uses the shortcode for that ID will update automatically. No need to edit every page.
:::

## Step-by-step: adding a shortcode

**In the Classic Editor:**

1. Edit a post or page.
2. Place your cursor where you want the video.
3. Type `[fluentplayer id="42"]` (using your actual ID).
4. Publish or update.

**In the Block Editor (Gutenberg):**

1. Edit a post or page.
2. Add a **Shortcode** block (search for "Shortcode" in the block inserter).
3. Type `[fluentplayer id="42"]` inside the block.
4. Publish or update.

**In a widget:**

1. Go to **Appearance → Widgets**.
2. Add a **Text** or **Custom HTML** widget to your sidebar or footer.
3. Type `[fluentplayer id="42"]` in the widget content.
4. Save.

**In a theme template (PHP):**

```php
<?php echo do_shortcode('[fluentplayer id="42"]'); ?>
```

## Common questions

**Can I put multiple videos on the same page?**

Yes. Use a separate shortcode for each video:

```
[fluentplayer id="42"]

[fluentplayer id="55"]
```

**Can I use the shortcode inside a tab or accordion?**

Yes, as long as the tab or accordion plugin supports shortcodes (most do).

**What happens if the media ID does not exist?**

The shortcode outputs nothing — the page will look as if the shortcode is not there. No error message is shown to visitors.

## Next steps

- [Embed with Block](/guide/display-embed/block) — Prefer a visual approach? Use the Gutenberg block instead.
- [Timestamp Links](/guide/display-embed/timestamp-links) — Create clickable "jump to" links for your video.
- [Customize the Player](/guide/customize/) — Change how the player looks and behaves.
- [Shortcodes Reference](/reference/shortcodes) — See all shortcodes in one place.
