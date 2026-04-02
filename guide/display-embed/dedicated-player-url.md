---
title: "Dedicated Player URL"
description: "Fluent Player’s standalone page per media: pretty URLs, query-string form, when to share it, and how public vs private visibility affects access."
---

# Dedicated Player URL

Every Fluent Player media item has its own **dedicated URL** — a standalone page that shows only the video player and a small header. This is useful when you want to share a direct link to a video without embedding it inside a regular page.

## What the URL looks like

**Pretty permalink (recommended for sharing):**

```
https://yoursite.com/fluent-player-media/42/
```

Replace `42` with your media ID. The URL is clean and simple, with the media ID at the end.

**Query-string form (same player, minimal layout):**

```
https://yoursite.com/?fluent_player_media_id=42
```

Any URL on your site can append `fluent_player_media_id={id}` to render the same style of **standalone player page** (useful for testing or special landing flows). Visibility rules still apply based on the media item.

## What the page looks like

The dedicated player page is a **minimal, distraction-free** layout:

- A **header** showing the video title (and a "Private" badge if the media is private).
- The **video player** centered on the page.
- No sidebar, no footer, no extra content — just the player.

This makes it ideal for sharing or embedding in iframes.

## When to use it

| Use case | Why the dedicated URL works well |
|----------|--------------------------------|
| **Sharing via email or chat** | Send a link that goes straight to the video. No surrounding content to distract. |
| **Social media sharing** | Post a link that opens a clean video page. |
| **Embedding on external sites** | Use the URL in an `<iframe>` on a different website. |
| **Internal review** | Share a video with your team before embedding it on a public page. |

## Who can access the URL?

This depends on the [visibility setting](/guide/videos-and-media/public-vs-private):

- **Public media** — Anyone with the link can watch the video.
- **Private media** — Only WordPress users who can edit the post (like admins or editors) can view it. Everyone else sees a 404 error.

**Example:**

You have a training video (ID 42) set to **private**. You share the link `yoursite.com/fluent-player-media/42/` with your team. Admins can see it. A random visitor gets a "Page Not Found" error.

Later, you toggle the media to **public**. Now anyone with the link can watch.

## How to share the dedicated URL

1. Go to **Fluent Player → Media** and find the media item.
2. The dedicated URL is `yoursite.com/fluent-player-media/{ID}/`. Just insert the media's ID.
3. Copy the URL and share it.

::: tip
You can also copy the URL from the browser when you visit the dedicated page directly.
:::

## Dedicated URL vs embedding on a page

| | Dedicated URL | Shortcode / Block |
|---|---------------|-------------------|
| Layout | Minimal (just the player) | Inside your regular page theme |
| Visibility control | Public/Private toggle on the media | Controlled by the page's status (published, draft, password-protected) |
| Best for | Sharing links, iframes | Showing videos within your site content |

Most users will embed videos in posts and pages. The dedicated URL is a bonus for sharing and special use cases.

## Next steps

- [Public vs Private Visibility](/guide/videos-and-media/public-vs-private) — Control who can see the dedicated URL.
- [Embed with Shortcode](/guide/display-embed/shortcode) — Embed inside a regular page instead.
