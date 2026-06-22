---
title: "Dedicated Playlist URL (Pro)"
description: "Every FluentPlayer playlist has its own standalone URL for sharing — how the pretty permalink works and how public/private visibility controls access."
---

# Dedicated Playlist URL (Pro)

Just like a single media item has a [dedicated player URL](/dedicated-player-url), every **playlist** has its own standalone page. This is handy when you want to share a whole series or course with a single link instead of embedding it inside a post.

::: info Pro feature
Playlists (and their dedicated URLs) require **FluentPlayer Pro**.
:::

## What the URL looks like

The playlist URL uses the playlist's **slug**, which WordPress generates from the title when you publish it:

```text
https://yoursite.com/fluent-playlist/getting-started-course/
```

If a playlist has no usable slug yet, it can also be reached by ID:

```text
https://yoursite.com/fluent-playlist/playlist-10/
```

## What the page shows

The dedicated playlist page renders the playlist on its own — the player plus the list or grid of videos, in whichever [layout](/playlist-layouts) and [appearance](/playlist-settings) you configured — without your surrounding site content.

## Who can access it

Access follows the playlist's **visibility** setting, the same way [media visibility](/public-vs-private) works:

- **Public** — Anyone with the link can open and watch the playlist.
- **Private** — Only WordPress users who can edit the playlist (such as administrators and editors) can view it; everyone else gets a 404.

## When to use it vs embedding

| | Dedicated playlist URL | Embedded ([shortcode / block](/embed-playlist)) |
|---|---|---|
| Layout | Standalone page (just the playlist) | Inside your regular page theme |
| Best for | Sharing a course/series by link | Showing a playlist within your site content |
| Visibility control | Public/Private toggle on the playlist | Controlled by the host page's status |

<!-- TODO: add screenshot of a dedicated playlist page — guide/public/playlists/dedicated-playlist-url/ -->

To embed a playlist inside a page instead, see [Embed a Playlist](/embed-playlist).
