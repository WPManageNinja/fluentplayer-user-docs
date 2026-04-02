---
title: "Public vs Private Visibility"
description: "Learn how Fluent Player public and private visibility affects the dedicated player URL, how it differs from embeds and playlists, and how to change the setting."
---

# Public vs Private Visibility

Each Fluent Player media item has a **visibility** setting that controls who can access the [dedicated player URL](/guide/display-embed/dedicated-player-url). This is separate from how you embed the video in posts and pages.

## Understanding the two ways to show a video

Before we talk about visibility, it helps to understand the two ways a video can appear:

1. **Embedded in a page** — You use a shortcode like `[fluentplayer id="42"]` or a Gutenberg block. The video appears inside your post or page. Visibility is controlled by the page itself (published, private, password-protected, etc.).

2. **Dedicated player URL** — Each media has its own URL like `yoursite.com/fluent-player-media/42/`. This opens a minimal page with just the player and a header. The **public/private setting** controls who can access this URL.

## Public visibility

When a media item is set to **public**:

- Anyone can open the dedicated URL and watch the video.
- No login is required.
- The URL can be shared freely.

**Example use case:** You want to share a video link in an email or on social media, and anyone who clicks it should be able to watch.

## Private visibility

When a media item is set to **private** (the default):

- Visitors who open the dedicated URL see a **404 (Page Not Found)** error.
- Only WordPress users who have **edit permission** for that post (like administrators and editors) can view the dedicated URL.

**Example use case:** You have an internal training video that should not be publicly accessible via the direct URL. You embed it on a password-protected page instead.

## How to change visibility

1. Go to **Fluent Player → Media** and open the media item.
2. In the media settings, look for the **public visibility** option.
3. Toggle it **on** to make the dedicated URL publicly accessible, or **off** to keep it private.
4. Latsly, click on the **Save** button.

![Change Visibility](/guide/public/Images/Managing-your-media/Visibilty/change-visibility-1.webp)

## What visibility does NOT affect

The public/private setting **only** applies to the dedicated player URL. It does **not** affect:

- Shortcode embeds (`[fluentplayer id="42"]`) — These show wherever the page is visible.
- Block embeds — Same as shortcodes; the page's visibility controls access.
- Media appearing in playlists — Playlist visibility is controlled by the playlist and the page it is embedded on.

::: tip
Think of it this way: the public/private setting answers one question: "Can someone type the URL `/fluent-player-media/42/` into their browser and watch the video?" If public, yes. If private, only admins and editors.
:::


