# Feature Catalog

This page is a **structured checklist** of Fluent Player capabilities as implemented in **Fluent Player** and **Fluent Player Pro 1.0.4**. Use it with the [Plugin Overview (Technical)](./plugin-overview) (developer detail) and the [Guide](/guide/) (how-to). The goal is breadth: if a feature ships in the plugin, it should appear here.

---

## Embed and display

| Feature | Free | Pro | Notes |
|--------|:----:|:---:|-------|
| Shortcode `[fluentplayer id="…"]` | ✓ | ✓ | Preferred name in code; same handler as `[fluentmedia]`. |
| Shortcode `[fluentmedia id="…"]` | ✓ | ✓ | Same as `[fluentplayer]`; kept for backward compatibility. |
| Shortcode `[fluentplayer_timestamp]` | ✓ | ✓ | Renders `<fluentplayer-timestamp>` for seek links. |
| Shortcode `[fluentplaylist id="…"]` | — | ✓ | Playlist embed. |
| Gutenberg block `fluent-player/media` | ✓ | ✓ | Inserter: **FluentPlayer Media**. Sidebar **Media** / **Block** tabs; **Block** lists Branding, General, Preset, Chapters, overlays, layers, timed content, languages, subtitles, timestamp shortcode, Advanced. Deep reference: [Block & media editor](/guide/block-editor/). |
| Gutenberg block `fluent-player/playlist` | — | ✓ | Attributes: `playlistId`, `align`, `className`; wide/full alignment. |
| Dedicated permalink `/fluent-player-media/{id}/` | ✓ | ✓ | Single `fluent_player_media` template; [Dedicated Player URL](/guide/display-embed/dedicated-player-url). |
| Query-string player page `?fluent_player_media_id={id}` | ✓ | ✓ | Renders minimal full-page player via `template_redirect` (theme `frontend.media-page`). |
| FluentCommunity / Fluent Community portal block | ✓ | ✓ | When FluentCommunity loads `fluent_community/portal_loaded`; block `FluentCommunityMediaBlock`; extra AJAX `fluent_player_get_media_data`. |

---

## Video sources and formats

| Feature | Free | Pro | Notes |
|--------|:----:|:---:|-------|
| WordPress Media Library file | ✓ | ✓ | Direct file selection. |
| External URL (direct file or HLS) | ✓ | ✓ | Any supported URL. |
| YouTube URL | ✓ | ✓ | Privacy mode + subscribe button in [Settings](/reference/settings). |
| Vimeo (URL-based) | ✓ | ✓ | Typical `vimeo.com` embed flows. |
| BunnyCDN Stream | — | ✓ | Block button **Bunny Stream**; **Settings → Storage**; REST `bunny/stream/*`. |
| BunnyCDN Storage | — | ✓ | Block button **BunnyCDN Storage**; **Settings → Storage**. |
| Mux | — | ✓ | Block button **Mux**; **Settings → Storage**; see [Mux](/guide/integrations/mux). |
| Mux Live | — | ✓ | Separate block source button **Mux Live** for live streams. |
| Audio | ✓ | ✓ | Block source **Audio** for audio-first files. |

---

## Player UI (presets)

**Built-in preset slugs** (reserved; cannot be deleted in Pro): `default`, `course`, `simple`, `standard`, `floating`, `minimal`, `ambient`.

| Preset slug | Display name | Skin (typical) | Role |
|-------------|----------------|----------------|------|
| `default` | Default | classic | Full controls + chapters; center play. |
| `course` | Modern | modern | Default install preset; settings menu; save position on in preset. |
| `simple` | Simple | simple | Play + progress + fullscreen only. |
| `standard` | Standard | standard | Classic top/bottom layout; chapters. |
| `floating` | Floating | floating | Transparent overlay controls. |
| `minimal` | Minimal | minimal | Click to play/pause; almost no chrome. |
| `ambient` | Ambient | minimal | Muted-style behaviors: loop end, hide all control areas; background video use case. |

**Skins** used in defaults: **classic**, **modern**, **simple**, **standard**, **floating**, **minimal** (Ambient preset uses **minimal** skin with special behaviors).

See [Presets](/guide/customize/presets) and [Skins and Controls](/guide/customize/skins-and-controls).

---

## Overlays and layers

| Layer / overlay | Free | Pro | Notes |
|----------------|:----:|:---:|-------|
| **Text/Button overlays** | ✓ | ✓ | Modal **Add Video Overlay**: time, duration, text, link, dynamic position, corner placement, colors. |
| **Interactive layers** | ✓ | ✓ | **Manage Layers** modal: filters **All**, **Forms**, **CTA**, **Hotspot**, **Ad**, **Shortcode**. Types: **Fluent Forms**, **CTA**, **Email Capture**, **Hotspot**, **Ad**, **Shortcode**. |
| Email capture | ✓ | ✓ | Also available as an interactive layer; preset defaults include `skip_if_crm_contact`. |
| CTA overlay | ✓ | ✓ | Percentage or end; button link (preset-level and layer-type CTA). |
| Action bar | ✓ | ✓ | Position, text, optional button, YouTube channel, close. |
| Fluent Forms in layers | ✓ | ✓ | `LayerService` + REST `layer/forms` supports `fluentforms` when Fluent Forms is active. |

Email submission uses AJAX action `fluent_player_email_submit` (logged-in and guest). Hooks: `fluent_player/email_collection_hooks`, filters on pre/post process — see [Plugin Overview](./plugin-overview).

---

## Subtitles, chapters, and language

| Feature | Free | Pro | Notes |
|--------|:----:|:---:|-------|
| Upload/delete subtitle tracks via REST | ✓ | ✓ | Pro overrides with `SubtitleController` for enhanced handling. |
| Chapters | ✓ | ✓ | Control + `chapters` track in player views. |
| Multiple language media mappings | ✓ | ✓ | Browser-based switching; AJAX `fluent_player_switch_language`, `fluent_player_get_media` with nonce `fluent_player_frontend`. |
| Smartcodes in titles/text | ✓ | ✓ | `MediaService::parseSmartcodes`; FluentCRM global smartcodes via REST `smartcodes` when FluentCRM active. |

---

## Email and CRM

| Provider | Free | Pro |
|----------|:----:|:---:|
| FluentCRM | ✓ | ✓ |
| Mailchimp | — | ✓ |
| Webhook | — | ✓ |

Free plugin may show **placeholder** entries for Mailchimp/Webhook in the UI when Pro is not active (`fluent_player/email_provider_placeholder_meta`). Providers register on `fluent_player/register_email_providers`.

---

## Analytics and tracking

| Feature | Free | Pro | Notes |
|--------|:----:|:---:|-------|
| Google Analytics (GA4) events | ✓ | ✓ | `GoogleAnalyticsService`; optional async script loading. |
| Built-in analytics (visits, dashboards) | — | ✓ | Table created when enabled; AJAX `fluent_player_track_event`, rate limit 30/min/IP; see [Built-in Analytics](/guide/integrations/analytics). |
| Mux Data env key | — | ✓ | Passed into player settings when configured. |

---

## Playlists (Pro)

| Feature | Notes |
|---------|--------|
| CPT `fluent_playlist` | Settings in post meta. |
| Layouts | Standard, Learning, Grid (`PlaylistLayoutFactory`). |
| REST | `playlist` CRUD under Pro routes. |
| Playlist CSS | `PlaylistCssGenerator`; inline CSS per playlist. |
| Pro cleanup | Auto-draft cleanup on `fluent_player/daily_cleanup`. |

---

## Performance, storage, and maintenance

| Feature | Notes |
|---------|--------|
| Dynamic load JS | Global setting; load player script only when needed. |
| Resume playback (Pro) | `general.resume_playback` → `useBrowserStorage` + localized `resume_playback` on `fluent_player` script. |
| Daily cron `fluent_player/daily_cleanup` | Media auto-drafts (free); Pro: analytics cleanup, playlist auto-drafts. |
| Email collection DB | Rows tied to media; cleaned on `fluent_player/after_delete_media` and direct CPT delete. |
| Visit rows (Pro) | Removed when media deleted (`after_delete_media`). |

---

## REST API (summary)

- **Namespace**: `fluent-player` / **version**: `v2` → base `…/wp-json/fluent-player/v2/`.
- **Free routes**: `welcome`, `media/*`, `presets` (GET), `settings`, `integrations`, `email-providers`, `youtube`, `layer`, `smartcodes`.
- **Pro adds**: `bunny/stream`, `bunny/storage`, `mux`, `mux/webhook`, `media` subtitle/timed-content overrides, `presets` POST/PUT/DELETE, `analytics/*`, `playlist/*`.

---

## Notable WordPress hooks (developers)

| Hook | Purpose |
|------|---------|
| `fluent_player/loaded` | Fires with `$app` after bootstrap. |
| `fluent_player/before_render_media` | Before player HTML; used for global custom CSS/JS. |
| `fluent_player/before_render_playlist` | Before playlist render (Pro). |
| `fluent_player/player_settings` | Filter media settings (Mux/Bunny sign URLs, etc.). |
| `fluent_player/media_block_inner` | Pro: timed content injection. |
| `fluent_player/after_delete_media` | Cleanup (email collections, visits). |
| `fluent_player/integrations` | Register integration classes (Pro). |

---

## Admin experience

| Element | Notes |
|---------|--------|
| SPA admin | `admin.php?page=fluent-player#/`; CPT list redirects here. |
| Top bar | **fluentPlayer** logo; tabs **Media** \| **Playlists**; **Settings** (gear); **Docs** (book). |
| Menu | **Fluent Player Pro** → **Media**, **Playlists**, **Analytics**, **Settings**. |
| Settings sidebar (Pro) | **General**, **Branding** (live preview), **Integrations** (filters All / Email Service Provider / Others), **Storage** (filters All / BunnyCDN / Mux), **YouTube**, **Analytics** (tabs Fluent Player Analytics \| Google Analytics), **Export** (email CSV/JSON/ODS). |
| Media / Playlists lists | Filters **All**, **Public**, **Private**, **Draft**; search icon; **Add Media** / **Add Playlist**. |
| Heartbeat | REST nonce refreshed via heartbeat for admin SPA. |
| Plugin updates | Updater in `boot/app.php` (remote check; “Check update” link on plugins screen). |

---

## Next steps

- [Guide overview](/guide/) — Task-based documentation.
- [Shortcodes Reference](./shortcodes) — Syntax for every shortcode.
- [Settings Reference](./settings) — Global options in the admin.
- [Plugin Overview (Technical)](./plugin-overview) — REST paths, architecture, hooks in depth.
