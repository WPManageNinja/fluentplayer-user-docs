# Timestamp Links

Timestamp links are clickable links that **jump the video to a specific time** when clicked. They are perfect for creating chapter lists, tables of contents, or "skip to" navigation for longer videos.

## How it works

You place a video on the page using `[fluentplayer id="42"]` (or the legacy `[fluentmedia]` tag), and then you add timestamp links below (or above) it. When a viewer clicks a timestamp link, the player automatically seeks to that time.

## The shortcode

```
[fluentplayer_timestamp time="1:30" media_id="42"]Jump to 1:30[/fluentplayer_timestamp]
```

Let's break this down:

| Part | What it does |
|------|-------------|
| `time="1:30"` | The time to jump to (minutes:seconds) |
| `media_id="42"` | Which player on the page to control (must match the media ID) |
| `Jump to 1:30` | The visible link text (can be anything) |

## Example: Chapter list for a tutorial

Here is a complete example showing a video with a chapter list below it:

```
[fluentplayer id="42"]

## Chapters

[fluentplayer_timestamp time="0:00" media_id="42"]Introduction[/fluentplayer_timestamp]

[fluentplayer_timestamp time="2:15" media_id="42"]Setting up your account[/fluentplayer_timestamp]

[fluentplayer_timestamp time="5:30" media_id="42"]Creating your first project[/fluentplayer_timestamp]

[fluentplayer_timestamp time="8:45" media_id="42"]Publishing and sharing[/fluentplayer_timestamp]

[fluentplayer_timestamp time="11:00" media_id="42"]Next steps[/fluentplayer_timestamp]
```

On the front end, each chapter title appears as a clickable link. When a viewer clicks "Creating your first project," the video jumps to 5 minutes and 30 seconds.

## Important rules

1. **The player must be on the same page.** The timestamp link controls a player by matching the `media_id`. If there is no `[fluentplayer id="42"]` (or equivalent `[fluentmedia]`) on the page, the link will not work.

2. **The `media_id` must match.** Make sure the `media_id` in the timestamp shortcode matches the `id` in the `[fluentplayer]` shortcode above.

3. **Time format.** Use `minutes:seconds` (for example, `1:30`) or `hours:minutes:seconds` (for example, `1:05:30`). You can also use just seconds (for example, `90` for one minute and thirty seconds).

## Common questions

**Can I style the timestamp links?**

Yes. The shortcode outputs a custom HTML element that you can target with CSS. By default, it looks like a regular link.

**Can I use timestamp links with a playlist?**

Timestamp links are designed for single media items. For playlists, you typically navigate between videos using the playlist interface instead.

**Can I put the timestamp links in a sidebar or widget?**

The timestamp link needs the player to be on the same page to work. If the player is in the main content and the link is in a sidebar widget, it should still work as long as they are rendered on the same page.

## Next steps

- [Embed with Shortcode](/guide/display-embed/shortcode) — The main embedding method.
- [Shortcodes Reference](/reference/shortcodes) — Full list of all shortcodes and attributes.
- [Skins and Controls](/guide/customize/skins-and-controls) — Enable the **chapters** control in the player for built-in chapter markers.
