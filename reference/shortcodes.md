# Shortcodes Reference

This page lists every shortcode available in Fluent Player, with syntax, attributes, and examples. For step-by-step guides on how to use these, see the [Display & Embed](/guide/display-embed/) section.

For a **full feature checklist** (blocks, AJAX, Pro-only items), see the [Feature Catalog](/reference/feature-catalog).

---

## `[fluentplayer]` — Embed a single video (preferred name)

Displays the Fluent Player video player for a specific media item. This is the **preferred** shortcode name (matches the plugin branding). It uses the same handler as `[fluentmedia]`.

### Syntax

```
[fluentplayer id="42"]
```

### Attributes

| Attribute | Required | Type | Description |
|-----------|----------|------|-------------|
| `id` | Yes | Number | The media (post) ID |

### Examples

```
[fluentplayer id="42"]
```

```php
<?php echo do_shortcode('[fluentplayer id="42"]'); ?>
```

---

## `[fluentmedia]` — Embed a single video (legacy alias)

Same behavior as `[fluentplayer]`. Kept for **backward compatibility** with older content.

### Syntax

```
[fluentmedia id="42"]
```

### Attributes

| Attribute | Required | Type | Description |
|-----------|----------|------|-------------|
| `id` | Yes | Number | The media (post) ID |

### Examples

**Basic usage:**

```
[fluentmedia id="42"]
```

**Multiple videos on one page:**

```
[fluentmedia id="42"]

[fluentmedia id="55"]
```

**In a PHP template:**

```php
<?php echo do_shortcode('[fluentmedia id="42"]'); ?>
```

### How it works

The shortcode loads the media item by ID, applies the preset and per-media settings, generates the player HTML, and inserts it into the page. All video source, controls, overlays, and styling are pulled from the media item — the shortcode only needs the ID.

### Extending defaults

Developers can add custom default attributes using the `fluent_player/media_shortcode_defaults` filter (applies to **both** `[fluentplayer]` and `[fluentmedia]`):

```php
add_filter('fluent_player/media_shortcode_defaults', function ($defaults, $atts) {
    $defaults['custom_param'] = 'value';
    return $defaults;
}, 10, 2);
```

### Related guides

- [Embed with Shortcode](/guide/display-embed/shortcode) — Step-by-step guide
- [Adding and Editing Videos](/guide/videos-and-media/adding-videos) — How to create media items

---

## `[fluentplayer_timestamp]` — Timestamp link

Creates a clickable link that seeks the player to a specific time. Used for chapter lists or "jump to" navigation.

### Syntax

```
[fluentplayer_timestamp time="1:30" media_id="42"]Link text here[/fluentplayer_timestamp]
```

### Attributes

| Attribute | Required | Type | Description |
|-----------|----------|------|-------------|
| `time` | Yes | String | Target time (e.g., `1:30`, `0:45`, `1:05:30`) |
| `media_id` | Yes | Number | The media ID of the player on the page |

The text between the opening and closing tags is the visible link text.

### Examples

**Single timestamp link:**

```
[fluentplayer_timestamp time="2:15" media_id="42"]Skip to setup section[/fluentplayer_timestamp]
```

**Chapter list:**

```
[fluentmedia id="42"]

[fluentplayer_timestamp time="0:00" media_id="42"]Introduction[/fluentplayer_timestamp]
[fluentplayer_timestamp time="3:00" media_id="42"]Installation[/fluentplayer_timestamp]
[fluentplayer_timestamp time="7:30" media_id="42"]Configuration[/fluentplayer_timestamp]
[fluentplayer_timestamp time="12:00" media_id="42"]Wrap-up[/fluentplayer_timestamp]
```

### Important notes

- The player for the matching `media_id` **must be on the same page** for the link to work.
- The `media_id` in the timestamp shortcode must match the `id` in the `[fluentmedia]` shortcode.

### Related guides

- [Timestamp Links](/guide/display-embed/timestamp-links) — Step-by-step guide with examples

---

## `[fluentplaylist]` — Embed a playlist (Pro)

Displays a Fluent Player Pro playlist.

### Syntax

```
[fluentplaylist id="10"]
```

### Attributes

| Attribute | Required | Type | Description |
|-----------|----------|------|-------------|
| `id` | Yes | Number | The playlist (post) ID |

### Examples

**Basic usage:**

```
[fluentplaylist id="10"]
```

**In a PHP template:**

```php
<?php echo do_shortcode('[fluentplaylist id="10"]'); ?>
```

### How it works

The shortcode loads the playlist by ID, retrieves all linked media items, applies the layout settings (Standard, Learning, or Grid), generates the playlist HTML, and inserts it into the page. The layout and video list come from the playlist settings — the shortcode only needs the ID.

### Extending defaults

Developers can add custom default attributes using the `fluent_player/playlist_shortcode_defaults` filter:

```php
add_filter('fluent_player/playlist_shortcode_defaults', function ($defaults, $atts) {
    $defaults['custom_param'] = 'value';
    return $defaults;
}, 10, 2);
```

### Related guides

- [Embed a Playlist](/guide/playlists/embed-playlist) — Step-by-step guide
- [Creating a Playlist](/guide/playlists/creating-playlists) — How to create a playlist

---

## All shortcodes at a glance

| Shortcode | Plugin | Purpose |
|-----------|--------|---------|
| `[fluentplayer id="..."]` | Free | Embed a single video player (preferred) |
| `[fluentmedia id="..."]` | Free | Same as `[fluentplayer]` (legacy alias) |
| `[fluentplayer_timestamp time="..." media_id="..."]` | Free | Clickable "jump to time" link |
| `[fluentplaylist id="..."]` | Pro | Embed a playlist |
