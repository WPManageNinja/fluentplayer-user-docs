---
title: "Dedicated Playlist URL"
description: "Every Fluent Player playlist has its own standalone page with a clean URL. Learn what the page looks like, how the URL is formed, and how visibility controls access. A Pro feature."
---

# Dedicated Playlist URL (Pro)

Just like an individual media item has a [dedicated player URL](/guide/display-embed/dedicated-player-url), every playlist has its own **dedicated URL** — a standalone page that shows only the playlist and a small header. It is the easiest way to share a whole playlist without embedding it inside one of your pages.

::: tip Pro feature
Playlists, and therefore dedicated playlist URLs, require **Fluent Player Pro**.
:::

## What the URL Looks Like

The dedicated playlist page lives under the `fluent-playlist` path, using the playlist's slug:

```
https://yoursite.com/fluent-playlist/getting-started-course/
```

WordPress generates the slug from the playlist title when you publish it. Untitled playlists fall back to a numeric form like `fluent-playlist/playlist-42/`.

## What the Page Looks Like

The page is a **minimal, distraction-free** layout:

- A **header** with the playlist title (and a "Private" badge if the playlist is private).
- The **playlist player** centered on the page, in whichever [layout](/guide/playlists/playlist-layouts) you configured.
- No theme sidebar, no footer — just the playlist.

## Who Can Access the URL?

Access works the same way as a single media item's dedicated URL:

- **Public playlist** (published): anyone with the link can open and watch it.
- **Private playlist**: only WordPress users who can edit the playlist (such as administrators and editors) can view it. Everyone else gets a **404 (Page Not Found)**.

## How to Share It

1. Go to **Fluent Player → Playlists** and open the playlist.
2. Publish it if you haven't already.
3. Visit the playlist's dedicated page at `yoursite.com/fluent-playlist/{slug}/` and copy the URL from your browser's address bar.

::: tip
You don't need to build the URL by hand — WordPress creates the slug when the playlist is published. Open the dedicated page and copy the address.
:::

## Dedicated URL vs Embedding

| | Dedicated Playlist URL | Shortcode / Block Embed |
|---|---|---|
| Layout | Minimal (just the playlist) | Inside your regular page theme |
| Visibility | Public/Private toggle on the playlist | Controlled by the host page's status |
| Best for | Sharing a full playlist as a link | Showing a playlist within site content |

To embed a playlist inside a post or page instead, see [Embed a Playlist](/guide/playlists/embed-playlist).
