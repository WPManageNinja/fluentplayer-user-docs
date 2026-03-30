# Plugin Overview (Technical)

This page is a **technical reference** from reading the Fluent Player (free) and Fluent Player Pro plugin code (baseline **1.0.4**). Use it to write accurate user documentation.

---

## Architecture

- **Free plugin**: `fluent-player` (main plugin required).
- **Pro plugin**: `fluent-player-pro` (extends free; requires free to be active).
- Both use a custom PHP framework (WPFluent-style), REST API, and Vue/React in admin.

---

## Fluent Player (Free) — Features & How It Works

### 1. Media (Videos)

- **Custom Post Type**: `fluent_player_media`.
- Each “media” is a WordPress post. Video URL, poster, subtitles, and player options are stored in post meta (`settings`, serialized).
- **Presets** stored in option `fluent_player_presets` (JSON). Reserved built-in slugs: `default`, `course`, `simple`, `standard`, `floating`, `minimal`, `ambient`. Media uses `preset_slug` in settings. Migrations may backfill from older DB tables.
- Media can be **draft** or **publish**. Optional **public visibility** meta: `fluent_player_media_public_visibility`. If not public and the user cannot edit, single view returns 404.

### 2. Embedding Media

**Shortcode (primary for frontend):**

- `[fluentplayer id="123"]` — **preferred** tag name; embeds the player for media ID 123.
- `[fluentmedia id="123"]` — same handler (backward compatibility).
- Attributes: `id` (required). Filter `fluent_player/media_shortcode_defaults` can add more defaults.

**Alternate full-page URL (query string):**

- `?fluent_player_media_id={id}` — handled in `actions.php` `template_redirect`; renders `frontend.media-page` with minimal layout (in addition to the pretty permalink for the `fluent_player_media` CPT).

**Block (Gutenberg):**

- Block name: `fluent-player/media`.
- Attributes: `mediaId`, `preview`, `autoplay`, `showControls`, `brandColor`, `cssClass`, `align`, `className`, `timedContentStyle` (object: padding, background/text colors, enabled flag for timed content UI).
- Block render uses the same rendering as the shortcode (MediaService + view).

**Dedicated player URL:**

- Pretty URL: `/{fluent-player-media}/{id}/` (e.g. `/fluent-player-media/123/`). Set in `FluentPlayerMediaCPT::$url_slug`.
- Rewrite: `fluent-player-media/([0-9]+)/?` → single `fluent_player_media` post by ID.
- Renders a minimal full-page layout (header + player). Visibility rules apply (public vs private, edit capability).

### 3. Timestamp Shortcode

- `[fluentplayer_timestamp time="1:30" media_id="123"]...content...[/fluentplayer_timestamp]`
- Renders a clickable element that seeks the player to the given time for the given media (used for chapter-like links).

### 4. Player Behavior & UI (from Preset/Media settings)

- **Skins**: e.g. classic, modern, simple, minimal.
- **Controls**: backward/forward, play, progress bar, current time, volume, settings, playback speed, fullscreen, PIP, center play, captions toggle, chapters.
- **Behaviors**: autoplay, muted autoplay, save play position, on video end (e.g. reset), plays inline, hide top/center/bottom controls.
- **Overlays (layers)**:
  - **Email capture**: gate at a percentage; “Sign up to continue watching”; providers (FluentCRM in free; Pro adds Mailchimp, Webhook).
  - **CTA**: show at percentage or at end; headline, description, button (link, open in new tab).
  - **Action bar**: position (e.g. bottom), text, optional button/link, YouTube channel, show close.
- **Styles**: captions (font size, background, color), brand color.
- **Language**: per-media language + `language_mappings` for alternate language versions; server detects browser language and can switch source.

### 5. Subtitles

- Stored per media. REST: `POST media/{id}/subtitles`, `DELETE media/{id}/subtitles/{subtitleId}`. Pro overrides with `SubtitleController`.

### 6. Admin

- **Menu**: “Fluent Player” (slug `fluentplayer`) with submenus: Media, Playlists, Settings. Pro + analytics enabled: Analytics.
- **Media**: main app at `admin.php?page=fluentplayer#/`. Edit single media in block editor (only `fluent-player/media` block allowed). Direct CPT list redirects to `#/`.
- **Settings**: REST `GET/PUT /settings`, reset; stored in option `fluent_player_settings`. Sections include: **general** (default aspect ratio, brand color, `resume_playback`, custom CSS/JS), **youtube**, **performance** (`dynamic_load_js`), **analytics** (enabled, `auto_cleanup` days), **google_analytics**, **email_capture**, **branding**, **presets** (default preset slug).

### 7. Integrations (free)

- **Integrations API**: `IntegrationController` — list integrations, get fields, save settings, test connection. Stored in `fluent_player_integrations_settings`.
- **Email providers**: Registered on `fluent_player/register_email_providers`. Free registers **FluentCRM** only.
- Pro registers additional integrations via filter `fluent_player/integrations`: `bunnycdn_stream`, `bunnycdn_storage`, `mux`.

### 8. Smartcodes (FluentCRM)

- **REST**: `GET /smartcodes` — `SmartcodeController@get`. When FluentCRM is active, returns global smartcodes from `FluentCrm\App\Services\Helper::getGlobalSmartCodes()`, filtered by `fluent_player/smartcode_groups`. Used when inserting merge tags into overlay text fields.

### 9. Other Free Features

- **Resume playback (Pro)**: Global `general.resume_playback` maps to player `useBrowserStorage` when `Helper::hasPro()` is true (see `SettingsService::getMediaDefaultSettings`).
- **Google Analytics**: optional script + settings (use existing tag or measurement ID).
- **Fluent Community**: block `FluentCommunityMediaBlock` when `fluent_community/portal_loaded` fires.
- **REST**: welcome, media CRUD + search + metadata, presets (get/find), settings, integrations, email-providers, youtube (channel info), layer (forms by type, form preview, shortcode preview), **smartcodes**.
- **Cron**: `fluent_player/cleanup_auto_drafts` for auto-draft cleanup.
- **Heartbeat**: sends nonce for REST in heartbeat response.

---

## Fluent Player Pro — Extra Features

### 1. Playlists

- **CPT**: `fluent_playlist`. Stored in posts; settings (e.g. list of media IDs, layout) in post meta `settings`.
- **Shortcode**: `[fluentplaylist id="456"]` — embeds playlist 456. Attributes: `id` (required). Filter: `fluent_player/playlist_shortcode_defaults`.
- **Block**: `PlaylistBlock` registered on init.
- **Layouts**: Standard, Learning, Grid (via `PlaylistLayoutFactory`). Learning has progress, chapters, completion threshold, locked content. Grid has columns, items per page, search, filters.
- **Frontend**: `PlaylistShortcodeHandler` merges presets, parses smartcodes in media settings, enqueues playlist JS/CSS, localizes `has_pro`, `resume_playback` from global settings, adds DNS-prefetch/preconnect for first media host when applicable.
- **Admin**: Playlists submenu → `#/playlists`.

### 2. Mux

- **Integration**: `MuxIntegration` — token ID/secret, optional signed URLs, auto captions language, webhook secret, Mux Data env key.
- **REST** (prefix `mux/`): assets CRUD, MP4 support, direct uploads + status, tracks, generate subtitles, live streams, playback restrictions, delivery usage, signing keys, asset captions; public `POST mux/webhook` for Mux events.
- **Service**: `MuxService` — signed playback/thumbnail/storyboard URLs, DRM tokens when enabled, webhook verification, updates media meta on asset ready, filter `fluent_player/player_settings` to inject signed URLs and `mux_data_env_key`.

### 3. BunnyCDN

- **Stream**: libraries, videos (list/create/upload/delete), collections (list/create). REST under `bunny/stream/*`.
- **Storage**: list/upload/delete videos, get video, public stream URL. REST under `bunny/storage/*`.
- Integrations: `BunnyCDNStreamIntegration`, `BunnyCDNStorageIntegration`; `BunnyCDNService` also filters `fluent_player/player_settings` for signed/tokenized URLs.

### 4. Analytics (Pro)

- **REST** (`analytics` prefix, `AnalyticsPolicy`): dashboard `stats`, `top-videos`, `top-users`, `location-breakdown`, `new-returning-viewers`, `performance-over-time/{scope?}/{id?}`, `retention`, `devices`; per-video `video/{id}/stats`, `retention`, `devices`, `location-breakdown`, `top-users`; per-user `user/{id}`, `user/{id}/stats`, `user/{id}/top-videos`, `user/{id}/retention`.
- **Menu**: “Analytics” submenu when Pro and analytics enabled in settings.
- **Handler**: `AnalyticsHandler` on init.

### 5. Timed content

- **Filter**: `fluent_player/media_block_inner` — `TimedContentHandler::injectTimedContent` appends innerBlocks HTML below the player, enqueues `timed-content-frontend.js`, parses shortcodes and `MediaService::parseSmartcodes`.
- **REST**: `PUT media/{id}/timed-content` — `TimedContentController@updateTimedContent` syncs block inner HTML back to the media CPT when editing outside the media screen.

### 6. Email Providers (Pro)

- **Mailchimp** and **Webhook** registered on same `fluent_player/register_email_providers` (and init for Mailchimp). Used by the same email-capture overlay as in free.

### 7. Presets (Pro)

- Pro adds REST: create, update, delete presets (`PresetController` in Pro with `PresetPolicy`).

### 8. Subtitle Controller (Pro)

- Pro overrides media subtitle endpoints (`SubtitleController`).

### 9. Admin Branding

- Pro renames admin menu to “Fluent Player Pro”.

---

## Shortcodes Summary (for docs)

| Shortcode | Plugin | Attributes | Purpose |
|-----------|--------|------------|---------|
| `[fluentplayer id="..."]` | Free | `id` (required) | Embed single media player (preferred) |
| `[fluentmedia id="..."]` | Free | `id` (required) | Same as `fluentplayer` |
| `[fluentplayer_timestamp time="..." media_id="..."]` | Free | `time`, `media_id` | Clickable timestamp for seeking |
| `[fluentplaylist id="..."]` | Pro | `id` (required) | Embed playlist |

---

## REST API (high level)

- **Free**: welcome, media (CRUD, search, metadata, subtitles), presets (get), settings (get/update/reset), integrations, email-providers, youtube, layer, **smartcodes**.
- **Pro**: `bunny/stream`, `bunny/storage`, **mux** (+ webhook), media subtitles (override), **media timed-content**, presets (store/update/delete), **analytics** (see above), playlist (CRUD).

---

## How It Fits in WordPress

1. **Install**: Free first; then Pro if needed. Pro checks `is_plugin_active('fluent-player/fluent-player.php')`.
2. **Media**: Created/edited in Fluent Player admin or via block editor. Each media is a `fluent_player_media` post with meta.
3. **Playlists** (Pro): Created in Fluent Player → Playlists; each is a `fluent_playlist` post; order and list of media IDs in settings.
4. **Frontend**: Use `[fluentplayer id="..."]` (or `[fluentmedia]`) or `[fluentplaylist id="..."]` in posts/pages, or the Gutenberg blocks. Dedicated URLs like `/fluent-player-media/123/` or `?fluent_player_media_id=123` show the full-page player.
5. **Presets**: Global default in Settings; per-media override in media settings. Pro can create/edit/delete presets via API.
6. **Integrations & storage**: Email and CRM providers are under **Settings → Integrations** (FluentCRM, Mailchimp, Webhook). Video hosts (Mux, Bunny Stream, Bunny Storage) are configured under **Settings → Storage** (Pro).
7. **Analytics**: Enable in settings (Pro); then Analytics menu and tracking (plays, retention, geography, devices, etc.) are available.

Use this overview to keep the user-facing docs (installation, shortcodes, settings, playlists, analytics, integrations) accurate and consistent with the code.

## Next steps

- [Shortcodes Reference](/reference/shortcodes) — Every shortcode, attribute, and PHP example.
- [Settings Reference](/reference/settings) — All global settings options in one place.
- [Feature Catalog](/reference/feature-catalog) — Full feature matrix (Free vs Pro).
- [Integrations](/guide/integrations/) — User-facing guides for Mux, Bunny, and Analytics.
