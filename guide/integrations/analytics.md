# Built-in Analytics (Pro)

Fluent Player Pro includes a **built-in analytics dashboard** that shows you how viewers interact with your videos. You can see plays, watch time, completion rates, top videos, and per-user activity — all inside your WordPress admin.

::: info Pro feature
Built-in analytics require **Fluent Player Pro**. Enable them in Settings to see the Analytics menu.
:::

## Why track video analytics?

- **Know what works** — See which videos get the most plays and watch time.
- **Find drop-off points** — See where viewers stop watching (retention data).
- **Understand your audience** — See per-user stats if viewers are logged in.
- **Optimize content** — Use data to improve video length, topics, and placement.

## What is tracked

| Metric | Description |
|--------|-------------|
| **Plays** | Total number of times a video starts playing |
| **Watch time** | Total time viewers have spent watching |
| **Progress** | How far viewers get (e.g., 25%, 50%, 75%, 100%) |
| **Top videos** | Most-played or most-watched videos |
| **Top users** | Viewers who watch the most (when logged in) |
| **Devices** | What devices/browsers viewers use |
| **Retention** | Per-video: where viewers stop watching |
| **Location** | Geographic breakdown of views (dashboard and per-video) |
| **New vs returning** | How many viewers are new versus returning in the date range |
| **Performance over time** | Plays and related metrics charted over time (optionally scoped by video or user in the API) |

### How events reach the server

When analytics are enabled, the player sends events through the WordPress AJAX action **`fluent_player_track_event`** (logged-in and guest). The handler validates the **`fluent_player_frontend` nonce**, applies a **rate limit** (for example, up to **30 requests per minute per IP** in the reference implementation), and stores **media ID**, **watch duration**, and **percentage** (capped sensibly). The visits table is created when analytics is first turned on.

## How to enable analytics

See [**Settings → Analytics**](/guide/settings/analytics) for the full options reference. Quick steps:

1. Open **Fluent Player Pro → Settings → Analytics**.
2. Stay on the **Fluent Player Analytics** tab.
3. Turn **Enable Analytics** on.
4. Optionally turn **Auto Cleanup Analytics Data** on and set a **retention** period (e.g. **30** days).
5. Click **Save Settings** (top right of the panel).

After native analytics are enabled, the **Analytics** item appears under Fluent Player Pro in the WordPress sidebar so you can open the dashboard.

## The analytics dashboard

The analytics dashboard gives you several views:

### Overview

A high-level summary: total plays, total watch time, and trends over time. Depending on version and screen, you may also see **location** breakdowns, **new vs returning** viewers, **device** summaries, and **performance over time** charts. This is your starting point for understanding overall video performance.

### Top videos

A ranked list of your most popular videos by plays or watch time. Use this to identify your best-performing content.

### Top users

If your viewers are logged-in WordPress users, this shows who watches the most. Useful for course sites where you want to see learner engagement.

### Per-video details

Click on any video to see:
- **Stats** — Plays, unique viewers, total watch time.
- **Retention** — A chart showing where viewers drop off. If most people stop at 30%, the video might be too long or the content changes at that point.
- **Devices** — Browser and device breakdown.

### Per-user details

Click on any user to see:
- **Stats** — Total watch time, number of videos watched.
- **Top videos** — Which videos this user watched most.
- **Watch time trends** — Activity over time.
- **Devices** — What devices this user uses.
- **Per-user retention** — Where this user tends to **stop** across the videos they watch (drop-off pattern for that person), when your version exposes this drill-down.

### Per-video drill-downs (when available)

On a **single video** detail view, depending on version:

| View | What it shows |
|------|----------------|
| **Location breakdown** | Geographic split **for that video** (not only the dashboard-wide map). |
| **Top viewers** | Which **users** watched this video the most — useful for accountability and cohorts. |

### Location data and rate limits

- **Country / region** — Fluent Player reads location hints from **CDN or proxy headers** when present (for example Cloudflare `CF-IPCountry`, CloudFront `CloudFront-Viewer-Country`, and similar). If your site is not behind such a CDN, or the header is missing, location may show as **unknown** — that is expected, not a broken install.
- **Rate limit** — The tracking endpoint applies a **rate limit** (on the order of **30 requests per minute per IP** in the reference implementation) to protect your server from abuse. Normal viewing stays well under this; bursts from many tabs can hit it briefly.

## Analytics vs Google Analytics

| | Built-in Analytics | Google Analytics |
|---|-------------------|-----------------|
| **Where data lives** | Your WordPress database | Google's servers |
| **Dashboard** | Inside WordPress admin | Google Analytics UI |
| **Setup** | Toggle on in Settings | Enter measurement ID |
| **Detail level** | Per-video retention, per-user stats | Event-based (play, progress, complete) |
| **Requires Pro** | Yes | No (free) |

You can use **both at the same time**. Built-in analytics give you WordPress-native dashboards with rich detail. [Google Analytics](/guide/integrations/google-analytics) sends events to GA4 for broader marketing analysis.

## Next steps

- [Google Analytics](/guide/integrations/google-analytics) — Send events to GA4.
- [Settings → Analytics](/guide/settings/analytics) — All analytics settings in one place.
- [Integrations Overview](/guide/integrations/) — All integrations.
