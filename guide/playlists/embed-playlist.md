# Embed a Playlist

Once you have [created a playlist](/guide/playlists/creating-playlists), you can show it on any post or page using a **shortcode** or a **Gutenberg block**. The process is very similar to [embedding a single video](/guide/display-embed/shortcode).

::: info Pro feature
Embedding playlists requires **Fluent Player Pro**.
:::

## Option 1: Shortcode

Add this shortcode to any post or page:

```
[fluentplaylist id="10"]
```

Replace `10` with your playlist ID. The playlist will appear where you placed the shortcode.

### Where to find the playlist ID

- In **Fluent Player → Playlists**, the ID appears next to each playlist (for example, `#10`).
- When editing a playlist, check the browser URL.

![Embed Playlist](/guide/public/playlists/embed-playlist/embed-playlist-1.webp)

### Step-by-step

**In the Classic Editor:**
1. Edit a post or page.
2. Type `[fluentplaylist id="10"]` where you want the playlist.
3. Publish or update.

**In the Block Editor (Gutenberg):**
1. Add a **Shortcode** block.
2. Type `[fluentplaylist id="10"]`.
3. Publish or update.

**In a theme template (PHP):**
```php
<?php echo do_shortcode('[fluentplaylist id="10"]'); ?>
```

## Option 2: Gutenberg block

1. Edit a post or page in the block editor.
2. Click the **+** button to add a block.
3. Search for **"Fluent Player Playlist"** or **"playlist"**.
4. Select the block and choose your playlist from the dropdown (or enter the ID).
5. Publish or update.

The block shows a preview in the editor and renders the same output as the shortcode on the front end.

![Embed Playlist](/guide/public/playlists/embed-playlist/embed-playlist-2.webp)

## What the front end looks like

Depending on the [layout](/guide/playlists/playlist-layouts) you chose for the playlist:

- **Standard** — A player with a video list on the side.
- **Learning** — A course-style player with progress tracking.
- **Grid** — A multi-column video grid.

The playlist loads all the media items you added, in the order you set. Viewers can click between videos, and the player handles transitions smoothly.

## Common questions

**Can I put multiple playlists on the same page?**

Yes. Use separate shortcodes or blocks:

```
[fluentplaylist id="10"]

[fluentplaylist id="15"]
```

**What happens if I update the playlist later?**

Changes are immediate. If you add or remove a video from the playlist, every page that embeds it will show the updated list.

**Can I embed a playlist in a widget?**

Yes, as long as the widget supports shortcodes. Use `[fluentplaylist id="10"]` in a Text or Custom HTML widget.
