# Mux (Pro)

**Mux** is a professional video platform for hosting, streaming, and analyzing video. Fluent Player Pro includes a full **Mux integration** so you can connect your Mux account, upload or link assets, use **HLS playback**, optional **signed URLs** for protected content, **live streaming**, **AI-generated captions**, and **Mux Data** playback analytics — without leaving WordPress.

::: info Pro feature
Mux is available only with **Fluent Player Pro**. Install and activate the free Fluent Player plugin first, then activate Pro. Configure Mux under **Fluent Player Pro → Settings → Storage** (Mux row → **Configure**). Email and CRM providers live under **Settings → Integrations** instead.
:::

## Why use Mux?

- **Adaptive streaming** — HLS delivery with automatic quality switching for viewers on different networks and devices.
- **Managed encoding** — Mux processes uploads and prepares playback URLs; webhooks can update your media when an asset is ready or when something fails.
- **Live streaming** — Create and manage live streams from the Mux API (exposed in the plugin’s REST layer for the admin app).
- **Optional security** — Signed playback URLs and signing keys for restricted or private playback. **Mux Playback Restrictions** (separate from signing keys) let you define delivery rules in Mux; Fluent Player Pro exposes REST endpoints to list, create, and delete restrictions for advanced workflows.
- **Auto captions** — Optional AI-generated subtitles in several languages when you enable auto captions in integration settings.
- **Mux Data** — Optional environment key so you can use Mux’s playback quality analytics alongside Fluent Player’s built-in analytics.

## What you need

- A [Mux](https://mux.com) account.
- A Mux **API access token** with **Mux Video** permissions (read and write), from **Settings → API access tokens** in the Mux dashboard.
- Fluent Player **Pro** active on your site.

## Connect Mux to Fluent Player

1. In WordPress, go to **Fluent Player → Settings → Storage** and click **Configure** on the **Mux** row.
2. Enter your **Token ID** and **Token Secret** from the Mux dashboard.
3. **Save** your settings, then use **Test connection** to confirm the credentials work.

### Optional settings

| Option | Purpose |
|--------|---------|
| **Signed URLs** | Serve time-limited signed URLs for playback, thumbnails, and storyboards when you use Mux signing keys. Turn on only if you need protected playback. |
| **Enable auto captions** | Ask Mux to generate captions for new uploads (language is configurable). |
| **Webhook secret** | Verifies events sent from Mux to your site. In the Mux dashboard, add a webhook and paste the signing secret here. The plugin shows the webhook URL to use (REST path under `fluent-player/v2/mux/webhook`). |
| **Mux Data environment key** | Optional key from the Mux Data dashboard for playback quality analytics in Mux’s tools. |

After a video asset is processed, Mux can notify WordPress via webhook so Fluent Player can update the media item (for example, status, duration, playback ID, poster URL).

## Using Mux videos in Fluent Player

Once Mux is connected:

1. Go to **Fluent Player → Media** and create or edit a media item.
2. Choose **Mux** as the video source type (or pick an existing Mux asset from the library, depending on the UI flow).
3. Publish the media and embed it with the **[fluentplayer](/reference/shortcodes)** shortcode or the **Fluent Player** block.

The player receives HLS URLs (and, when configured, signed URLs and DRM-related tokens) through the same rendering pipeline as other sources. Poster images and thumbnails typically use Mux’s `image.mux.com` URLs unless you override them.

## Live streams, restrictions, and advanced API features

The Pro plugin exposes Mux REST endpoints for the admin application, including:

- **Assets** — List, create, update, delete. You can toggle **MP4 support** per asset (enable or disable an MP4 renditions mode where the API exposes it) for download or legacy workflows.
- **Direct uploads** — Create upload URLs and poll upload status.
- **Tracks** — Add or remove text tracks; trigger subtitle generation for a track.
- **Captions listing** — Retrieve generated or uploaded captions for an asset (`GET` captions for an asset ID) so you can confirm AI captions or manage tracks after processing.
- **Live streams** — List, create, inspect, delete, and reset stream keys.
- **Playback restrictions** — List, create, and delete **Mux Playback Restrictions** (delivery rules), distinct from **signed URL** signing keys.
- **Signing keys** — Generate and manage keys used with signed playback.
- **Delivery usage** — **Bandwidth / storage usage** summaries for your Mux account (`delivery-usage` style endpoint) — useful for billing checks and capacity planning.

Exact screens and labels may change with app updates; if an option is not visible in the UI, your Pro version may expose it only through the REST API used by the admin SPA.

## Mux and Fluent Player analytics

You can use **both**:

- **[Built-in Analytics](/guide/integrations/analytics)** — Viewership inside WordPress (plays, retention, top videos, locations, and more).
- **Mux Data** (optional) — Enter the **Mux Data environment key** in the integration for Mux’s own quality and delivery analytics.

## Troubleshooting

| Issue | What to check |
|-------|----------------|
| Connection test fails | Token ID/secret, Mux Video permissions, and that the token is not revoked. |
| Video stays “processing” | Webhook URL and secret in Mux; your site must receive HTTPS callbacks. |
| Playback errors with signed URLs enabled | Signing key pair must be generated and stored per the integration; clock skew and URL expiry can affect playback. |

## Next steps

- [Video Sources](/guide/videos-and-media/video-sources) — How sources work for media items.
- [BunnyCDN Stream](/guide/integrations/bunnycdn-stream) — Alternative Pro hosting via Bunny.
- [Integrations Overview](/guide/integrations/) — All integrations in one place.
