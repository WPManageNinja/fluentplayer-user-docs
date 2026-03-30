# Integrations Overview

Fluent Player can connect to external services to extend what it can do. These integrations cover **video hosting**, **email marketing**, and **analytics** — helping you deliver, track, and grow your video content.

## Available integrations

### Video hosting (Pro)

Instead of hosting videos only on your own server, you can connect to professional platforms for encoding and delivery.

- **[Mux](/guide/integrations/mux)** — HLS streaming, direct uploads, live streams, optional signed URLs, webhooks, AI captions, and optional Mux Data analytics. In the block editor you can pick **Mux** or **Mux Live** as the source; credentials are configured under **Settings → Storage**.
- **[BunnyCDN Stream](/guide/integrations/bunnycdn-stream)** — Use Bunny's video streaming platform. Upload and manage videos in Bunny libraries, then select them in Fluent Player.
- **[BunnyCDN Storage](/guide/integrations/bunnycdn-storage)** — Host video files in Bunny's storage zones. Upload from WordPress and use storage files as video sources.

### Email marketing

Capture viewer emails with the [email capture overlay](/guide/engagement/email-capture) and send them to your email marketing tool:

- **FluentCRM** (free) — WordPress-native CRM. See [Email Providers](/guide/engagement/email-providers).
- **Mailchimp** (Pro) — Popular email marketing platform. See [Email Providers](/guide/engagement/email-providers).
- **Webhook** (Pro) — Send email data to any URL (Zapier, HubSpot, ActiveCampaign, etc.). See [Email Providers](/guide/engagement/email-providers).

### Analytics

Understand how your viewers interact with your videos:

- **[Built-in Analytics](/guide/integrations/analytics)** (Pro) — A dashboard inside WordPress that shows plays, watch time, top videos, viewer behavior, and more.
- **[Google Analytics](/guide/integrations/google-analytics)** (free) — Send player events (play, progress, complete) to your GA4 property.

### Community and personalization

- **[FluentCommunity](/guide/integrations/fluent-community)** (Pro) — Embed Fluent Player media inside FluentCommunity posts and portal content.
- **[Smartcodes and personalization](/guide/integrations/smartcodes-personalization)** — Use FluentCRM merge tags (for example the contact first-name tag) in supported player text when FluentCRM is installed.

## Where to configure integrations

Most integration settings are found in **Fluent Player → Settings**. Some integrations have their own sections or tabs. Here is a quick map:

| Integration | Where to configure |
|-------------|-------------------|
| Mux, BunnyCDN Stream, BunnyCDN Storage | **Settings → Storage** (filter chips **All** / **BunnyCDN** / **Mux**; each row has **Configure**) |
| FluentCRM / Mailchimp / Webhook | **Settings → Integrations** (filters **All** / **Email Service Provider** / **Others**) |
| Built-in Analytics | **Settings → Analytics** → **Fluent Player Analytics** tab |
| Google Analytics | **Settings → Analytics** → **Google Analytics** tab |
| FluentCommunity block | Requires FluentCommunity; embed from the community editor |
| FluentCRM smartcodes | **Settings → Integrations** (FluentCRM) + supported text fields |
| Export email list | **Settings → Export** |

## Topics in this section

| Topic | What you will learn |
|-------|-------------------|
| [Mux (Pro)](/guide/integrations/mux) | Connect Mux for streaming, uploads, and live video |
| [BunnyCDN Stream (Pro)](/guide/integrations/bunnycdn-stream) | Connect Bunny Stream for video hosting |
| [BunnyCDN Storage (Pro)](/guide/integrations/bunnycdn-storage) | Use Bunny Storage for video files |
| [Built-in Analytics (Pro)](/guide/integrations/analytics) | Track plays, watch time, and viewer behavior |
| [Google Analytics](/guide/integrations/google-analytics) | Send player events to GA4 |
| [FluentCommunity (Pro)](/guide/integrations/fluent-community) | Player inside FluentCommunity |
| [Smartcodes (FluentCRM)](/guide/integrations/smartcodes-personalization) | Personalized text with merge tags |

## Next steps

Pick the integration you need and follow the setup guide. If you are not sure where to start, [Google Analytics](/guide/integrations/google-analytics) is a quick win for basic tracking. For hosted streaming, choose [Mux](/guide/integrations/mux) or [BunnyCDN Stream](/guide/integrations/bunnycdn-stream) depending on your provider.
