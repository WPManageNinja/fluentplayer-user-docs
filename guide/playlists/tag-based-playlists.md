---
title: "Tag-Based Playlists"
description: "Build dynamic Fluent Player playlists from media tags using the [fluentplaylist] shortcode or the playlist block. New tagged media is added automatically. A Pro feature."
---

# Tag-Based Playlists (Pro)

A normal playlist is a fixed, hand-picked list of videos. A **tag-based playlist** is dynamic: you point it at one or more [media tags](/guide/videos-and-media/media-tags) and Fluent Player builds the list from every published video carrying those tags. Tag a new video later and it appears in the playlist automatically — no editing required.

::: tip Pro feature
Tag-based playlists require **Fluent Player Pro** and rely on [Media Tags](/guide/videos-and-media/media-tags).
:::

## Embedding with the Shortcode

Add the `tags` attribute to the `[fluentplaylist]` shortcode:

```text
[fluentplaylist tags="tutorial"]
```

Pass several tags as a comma-separated list. Any media that matches **at least one** of the tags is included:

```text
[fluentplaylist tags="tutorial, onboarding"]
```

### Shortcode Attributes

| Attribute | Default | Description |
|-----------|---------|-------------|
| `tags` | — | One or more tag names, comma-separated. This is what makes the playlist tag-based. |
| `limit` | `20` | Maximum number of videos to include. Capped at **100**. |
| `orderby` | `date` | Sort field: `date`, `title`, `modified`, or `rand` (random). |
| `order` | `DESC` | Sort direction: `DESC` (newest/Z–A first) or `ASC` (oldest/A–Z first). |

**Examples:**

```text
[fluentplaylist tags="course-101" limit="10" orderby="title" order="ASC"]
[fluentplaylist tags="highlights" orderby="rand"]
```

Only **published** media is included. Tags are matched by name, so `tags="Course 101"` and the tag you assigned in the editor must read the same.

## Embedding with the Playlist Block

In the block editor, add the **Fluent Player Playlist** block and choose **Tags** as the source instead of selecting a fixed playlist. Pick the tags and set the limit, order, and sort options. The block preview updates to show the matching videos.

## How It Stays in Sync

Because the playlist is generated from tags at render time, it always reflects your current library:

- Tag another video → it joins the playlist (subject to the `limit`).
- Remove a tag from a video → it drops out.
- Unpublish a video → it disappears from the playlist.

This makes tag-based playlists ideal for "latest in a series", "all videos in a course", or "everything tagged featured" without ever editing the embed.

## Tag-Based vs Manual Playlists

| | Tag-Based Playlist | Manual Playlist |
|---|---|---|
| How items are chosen | Automatically, by tag | Hand-picked, in a fixed order |
| Stays up to date | Yes, as you tag media | No, you edit it yourself |
| Custom ordering | By date / title / modified / random | Exact drag-and-drop order |
| Best for | Series, courses, "latest" feeds | Curated, ordered sequences |

For curated, fixed playlists, see [Creating a Playlist](/guide/playlists/creating-playlists).
