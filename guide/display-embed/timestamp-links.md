---
title: "Timestamp Links"
description: "Use the fluentplayer_timestamp shortcode to jump the player to a time, build chapter lists, and match media_id to your fluentplayer embed on the same page."
---

# Timestamp Links

**Timestamp links** are clickable text links that allow viewers to **jump to a specific moment** in your video. They are perfect for creating "Table of Contents" style navigation, allowing users to skip directly to the most relevant parts of longer content.

## How it works

When a viewer clicks a timestamp link, the FluentPlayer on that same page automatically seeks to the exact time defined in the link. To make this work, the **Media ID** in your timestamp link must match the **ID** of the player embedded on the page.

## Finding the Shortcode

You can easily find and copy the base shortcode directly from the block editor:

1. Select your **FluentPlayer** block in the WordPress editor.
2. In the right-hand sidebar, expand the **Timestamp Links** panel.
3. You will see the **Timestamp Link Shortcode** box. Click the **Copy** icon next to it to grab the code.

```
[fluentplayer_timestamp time="1:30" media_id="129"]Jump to 1:30[/fluentplayer_timestamp]
```

## Step-by-Step Configuration

To create a custom "Skip to" link, use the following shortcode format:

```
[fluentplayer_timestamp time="1:30" media_id="129"]Jump to 1:30[/fluentplayer_timestamp]
```

 * **time="1:30":** Enter the specific time to jump to in minutes:seconds or just seconds (e.g., 90 for 1:30).
 * **media_id="129":** This must match the ID of the video player on your page.
 * **Link Text:** Change "Jump to 1:30" to any text you like, such as "See the Results".

## Example: Creating a Chapter List

Here is a complete example showing a video with a chapter list below it:

```
[fluentplayer id="129"] (Your main video)

## Chapters

[fluentplayer_timestamp time="0:00" media_id="129"]Introduction[/fluentplayer_timestamp]

[fluentplayer_timestamp time="2:15" media_id="129"]Setting up your account[/fluentplayer_timestamp]

[fluentplayer_timestamp time="5:30" media_id="129"]Creating your first project[/fluentplayer_timestamp]

[fluentplayer_timestamp time="8:45" media_id="129"]Publishing and sharing[/fluentplayer_timestamp]

[fluentplayer_timestamp time="11:00" media_id="129"]Next steps[/fluentplayer_timestamp]
```

On the front end, each chapter title appears as a clickable link. When a viewer clicks "Creating your first project," the video jumps to 5 minutes and 30 seconds.

![Timestand Link](/guide/public/display-embed/dedicated-player-url/timestamp-link-1.webp)

## Important rules

1. **The player must be on the same page.** The timestamp link controls a player by matching the `media_id`. If there is no `[fluentplayer id="129"]` (or equivalent `[fluentmedia]`) on the page, the link will not work.

2. **The `media_id` must match.** Make sure the `media_id` in the timestamp shortcode matches the `id` in the `[fluentplayer]` shortcode above.

3. **Time format.** Use `minutes:seconds` (for example, `1:30`) or `hours:minutes:seconds` (for example, `1:05:30`). You can also use just seconds (for example, `90` for one minute and thirty seconds).

## Common questions

**Can I style the timestamp links?**

Yes. The shortcode outputs a custom HTML element that you can target with CSS. By default, it looks like a regular link.

**Can I use timestamp links with a playlist?**

Timestamp links are designed for single media items. For playlists, you typically navigate between videos using the playlist interface instead.

**Can I put the timestamp links in a sidebar or widget?**

The timestamp link needs the player to be on the same page to work. If the player is in the main content and the link is in a sidebar widget, it should still work as long as they are rendered on the same page.

