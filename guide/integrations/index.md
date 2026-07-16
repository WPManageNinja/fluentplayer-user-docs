# Integrations Overview

FluentPlayer connects with powerful external services to expand your video capabilities. These integrations cover **video hosting**, **email marketing**, and **analytics**, helping you deliver high-quality content while growing your audience.

## Available Integrations

### Video Hosting (Pro)

Professional hosting ensures faster loading and a better viewer experience by offloading video delivery from your server.

- **[Vimeo](/vimeo)** (Free) — Play any Vimeo-hosted video by pasting its URL. No account connection or embed code needed — just copy the video link from Vimeo and add it as a source.
- **[Mux](/mux)** — HLS streaming, direct uploads, live streams, optional signed URLs, webhooks, AI captions, and optional Mux Data analytics. In the block editor you can pick **Mux** or **Mux Live** as the source; credentials are configured under **Settings → Storage**.
- **[Gumlet](/gumlet)** — Professional video hosting with adaptive HLS streaming, automatic optimization, and secure signed-URL playback. Browse your Gumlet collections and select assets directly in FluentPlayer.
- **[BunnyCDN Stream](/bunnycdn-stream)** — Use Bunny's video streaming platform. Upload and manage videos in Bunny libraries, then select them in FluentPlayer.
- **[BunnyCDN Storage](/bunnycdn-storage)** — Host video files in Bunny's storage zones. Upload from WordPress and use storage files as video sources.
- **[Cloudflare R2](/cloudflare)** — S3-compatible object storage with zero egress fees. Host ready-to-play files in an R2 bucket and serve them through Cloudflare.
- **[Cloudflare Stream](/cloudflare)** — Cloudflare's managed video platform with automatic encoding, adaptive HLS, and per-video signed playback.

### Email Marketing

Capture viewer emails with the [email capture overlay](/email-capture) and send them to your email marketing tool:

- **FluentCRM** (free): WordPress native CRM. See [Email Providers](/email-providers).
- **Mailchimp** (Pro): Popular email marketing platform. See [Mailchimp Integration](/mailchimp-integration).
- **Webhook** (Pro): Send email data to any URL (Zapier, HubSpot, ActiveCampaign, etc.). See [Webhook Integration](/webhook-integration).

### Analytics

Track how your audience interacts with your content to make data driven decisions.

- **[Built-in Analytics(Pro)](/built-in-analytics)** (Pro): A dashboard inside WordPress that shows plays, watch time, top videos, viewer behavior, and more.
- **[Google Analytics (Pro)](/google-analytics)** (Pro): Send player events (play, progress, complete) to your GA4 property.

### Community and Personalization

- **[FluentCommunity](/fluent-community)** — Embed FluentPlayer media inside FluentCommunity posts and portal content.
- **[Smartcodes and personalization](/smartcodes-personalization)** — Use FluentCRM merge tags (for example the contact first-name tag) in supported player text when FluentCRM is installed.

## Where to Configure Integrations

Most integration settings are found in **FluentPlayer → Settings**. Some integrations have their own sections or tabs. Here is a quick map:

| Integration | Where to configure |
|-------------|-------------------|
| Mux, Gumlet, BunnyCDN Stream, BunnyCDN Storage, Cloudflare R2, Cloudflare Stream | **Settings → Storage** (each provider row has **Configure**) |
| FluentCRM / Mailchimp / Webhook | **Settings → Integrations** (filters **All** / **Email Service Provider** / **Others**) |
| Built-in Analytics | **Settings → Analytics** → **FluentPlayer Analytics** tab |
| Google Analytics | **Settings → Analytics** → **Google Analytics** tab |
| FluentCommunity block | Requires FluentCommunity; embed from the community editor |
| FluentCRM smartcodes | **Settings → Integrations** (FluentCRM) + supported text fields |
| Export email list | **Settings → Export** |

>[!Note]
>Video storage providers (Mux/Bunny) and Email providers (Mailchimp/FluentCRM) are located in separate tabs under the Settings menu. Ensure you are in the correct section before configuring.

## Topics in This Section

| Topic | What you will learn |
|-------|-------------------|
| [Vimeo](/vimeo) | Play Vimeo videos by pasting the video URL |
| [Mux (Pro)](/mux) | Connect Mux for streaming, uploads, and live video |
| [Gumlet (Pro)](/gumlet) | Connect Gumlet for optimized hosting and secure streaming |
| [BunnyCDN Stream (Pro)](/bunnycdn-stream) | Connect Bunny Stream for video hosting |
| [BunnyCDN Storage (Pro)](/bunnycdn-storage) | Use Bunny Storage for video files |
| [Cloudflare R2 & Stream (Pro)](/cloudflare) | Host on Cloudflare R2 or stream with Cloudflare Stream |
| [Built-in Analytics (Pro)](/built-in-analytics) | Track plays, watch time, and viewer behavior |
| [Google Analytics (Pro)](/google-analytics) | Send player events to GA4 |
| [Mailchimp (Pro)](/mailchimp-integration) | Add email leads to a Mailchimp audience |
| [Webhook (Pro)](/webhook-integration) | Send email leads to any external URL |
| [FluentCommunity](/fluent-community) | Player inside FluentCommunity |
| [Smartcodes (FluentCRM)](/smartcodes-personalization) | Personalized text with merge tags |

## Next Steps

Pick the integration you need and follow the setup guide. If you are not sure where to start and you have Pro, [Google Analytics](/google-analytics) is a quick win for basic tracking. For hosted streaming, choose [Mux](/mux) or [BunnyCDN Stream](/bunnycdn-stream) depending on your provider.
