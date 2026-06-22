---
prev:
  text: 'Support'
  link: '/support'
next: false
---

# Changelog

All notable user-facing changes to FluentPlayer and FluentPlayer Pro are documented here. The newest release is listed first. Items marked **(Pro)** require FluentPlayer Pro.

## 1.0.6 — May 15, 2026

### Added

- **Dynamic shortcode source** — override a media item's saved source right from the shortcode using `source_url`, `source_meta`, and `source_poster` attributes (for example, `[fluentplayer id="12" source_meta="video_url"]` to read the URL from a post's custom field). See [Embed with Shortcode](/shortcode).
- **Unified media list filters** in the admin dashboard — filter your media by provider, media type, and tags.
- **Player share links and a right-click context menu** (Pro) — copy a link, copy a link at the current time, and toggle options like loop, playback speed, captions, and picture-in-picture.
- **Playlist navigation controls** (Pro).
- **Playlist preset source** (Pro) — pick a media item whose preset drives the playlist player's chrome, with brand-color sync.

### Changed

- Poster-only preview mode in the block editor for faster editing.
- Self-healing default presets and a lock icon on Pro-only media sources.

### Fixed

- Email capture no longer sends duplicate submissions to a provider when a viewer re-submits.
- Email exports are streamed instead of loaded all at once, improving reliability on large lists.
- Analytics events from replayed or invalid media IDs are rejected (Pro).

## 1.0.5 — April 24, 2026

### Added

- **Presto Player migration tooling** — import your media, presets, playlists, settings, and analytics from Presto Player, and rewrite existing content.
- **Media tag management** (Pro) — organize media with tags and filter by them.
- **Tag-based playlists** (Pro) — render a playlist dynamically from one or more tags with the `[fluentplaylist tags="…"]` shortcode or the playlist block.
- **FluentCRM-based conditions** (Pro) — show or hide dynamic layers, email capture, and CTAs based on a viewer's CRM status, tags, or lists.
- **YouTube subtitle import** (Pro) through the hosted subtitle service, with caption and hover-preview support.
- **FluentCommunity playlist block** (Pro).
- Ambient preset layers and FluentCRM smartcodes in timed content and dynamic layers.

### Changed

- Security hardening across TLS, signed URLs, analytics, playlist layout guards, and the Bunny Storage upload path.

### Fixed

- Analytics now counts unique anonymous viewers correctly and preserves the dominant country and device per user (Pro).
- Aspect ratio falls back to 16:9 when source dimensions are unavailable.
- PHP 8.4 compatibility.

## 1.0.4 — March 17, 2026

### Added

- **Mux integration** (Pro) — live streaming and on-demand video, with an API client, service, controller, and routes.
- **Timed content rendering and API** (Pro), including shortcode processing inside timed content.
- **BunnyCDN signed URL support** for Stream and Storage (Pro).
- Playlist per-video overlays and interactive layers (Pro).
- Configurable playlist aspect ratio for all layouts, and dynamic overlay positioning.
- FluentCRM smartcode inserter for timed content.

### Changed

- Improved audio player layout, settings-menu mobile responsiveness, scroll performance, and YouTube HD thumbnails.

### Fixed

- Stronger output escaping across playlist layout templates (Pro).
- PHP 8.x compatibility and subtitle endpoint fixes.

## 1.0.3 — March 10, 2026

### Added

- Keyboard action bezel animations with accessibility controls.
- A player settings menu with **Playback** and **Accessibility** submenus.
- The **Ambient** preset for looping background video with no controls.
- Shortcode and Fluent-ecosystem block support inside timed content.

### Changed

- Video duration column in the admin media list, seamless loop for muted autoplay, Gutenberg UI polish, and lazy-loading for better performance.

### Fixed

- Prevented auto-scroll to the second video on page load, autoplay glitches on the chapter modal, and ambient loop restart timing for YouTube embeds.

## 1.0.2 — February 28, 2026

### Added

- BunnyCDN subtitles import and HLS MP4 fallback (Pro).

### Fixed

- PHP 8.x compatibility, YouTube replay buffering, and caption `srclang` validation.

## 1.0.1 — February 24, 2026

### Added

- `.srt` subtitle file support and manageable captions from a preset.
- Alignment support for the playlist block (Pro).

### Changed

- Analytics percentage tracking and improved BunnyCDN Storage upload performance (Pro).

### Fixed

- YouTube block/iframe issues and BunnyCDN video playback (Pro).

## 1.0.0

FluentPlayer Pro's initial release shipped February 10, 2026; the free FluentPlayer plugin's initial release shipped September 22, 2025.

### Added — FluentPlayer (free)

- Video player powered by Vidstack with HLS support.
- Audio player with a dedicated audio layout.
- YouTube and Vimeo embeds with automatic poster and title sync.
- Self-hosted media support (MP4, WebM, MP3, and more).

### Added — FluentPlayer Pro

- Playlist system with **Standard** and **Grid** layouts, a playlist Gutenberg block, and a dedicated playlist post type.
- Playlist visibility (public/private) and slug-based permalinks.
- BunnyCDN **Stream** and **Storage** integrations (Storage includes a streaming proxy and upload).
- **Mailchimp** and **Webhook** email providers.
- Player analytics with view tracking and audience retention, plus Google Analytics event integration.
- Preset management (create, edit, delete) with customizable settings.
- Player subtitles/captions, sidebar width and title position for playlists, and brand/control-bar color customization.
