---
prev:
  text: 'Support'
  link: '/support'
next: false
---

# Changelog

All notable user-facing changes to FluentPlayer and FluentPlayer Pro are documented here. The newest release is listed first. The free plugin and the Pro extension keep separate changelogs, shown below. Items marked **(Pro)** require FluentPlayer Pro.

## FluentPlayer (Free)

### 1.0.7 — June 22, 2026

- Feature: Presto Player migration — media, per-video color, thumbnails, YouTube no-cookie settings, and email submissions
- Feature: Update Playlist flow for the playlist block (Pro)
- Feature: Back button in the media editor header
- Feature: Unsaved changes guard on the settings page
- Improvement: All Media and Settings quick links in the plugins row
- Improvement: Skeleton loaders across the settings and analytics pages
- Improvement: Sortable columns and refined visibility controls in the media and playlist tables
- Improvement: Accessibility pass across the admin — accessible names, keyboard navigation, and AA contrast
- Improvement: Throttle player time-update handlers to reduce per-frame work and improve smoothness
- Fix: Let the assigned preset control resume-playback (Pro)
- Fix: Make YouTube Privacy-Enhanced Mode actually toggle the embed and poster hosts
- Fix: Load the timed-content frontend script once across all render paths
- Fix: Pro-gate the Google Analytics gtag enqueue
- Fix: Honor `|fallback` on contact smartcodes when no CRM contact is present
- Fix: Neutralize spreadsheet formula injection in email exports

### 1.0.6 — May 20, 2026

- Feature: Dynamic custom-field source on `[fluentplayer]` — `source_url`, `source_meta`, `source_poster` attributes for per-render URL override without mutating saved media
- Feature: Playlist player navigation controls (previous / next) (Pro)
- Feature: Player share links and context menu
- Feature: Preset Source media and Auto brand color mode for playlists (Pro)
- Feature: Unified media list filters in the admin dashboard
- Feature: Timed content support inside FluentCommunity lessons
- Improvement: Mux Data analytics payload and reusable field link
- Improvement: Branding settings logo UX — image-only picker, position active state, conditional fields, clickable preview
- Improvement: Plugin Check and i18n compliance pass
- Improvement: Poster-only editor preview mode in Gutenberg
- Improvement: Self-heal default presets, row actions a11y
- Improvement: Bound Presto Player migration queries to the active batch / already-migrated set
- Improvement: Internal modularity refactor across services and controllers
- Improvement: Quick links dropdown in the media block toolbar
- Improvement: Media replace editor back button flow
- Improvement: RTL support across player and admin
- Fix: Undefined `$default_settings` warning in the player template
- Fix: iOS Safari being forced to muted when autoplay is disabled
- Fix: Preset behavior runtime key normalization
- Fix: Playlist sidebar collapse on initial mobile load (Pro)
- Fix: Playlist Block keyboard a11y and frontend grid poster (Pro)
- Fix: Admin media tag filter contract alignment with REST response shape
- Fix: Default `preload` to `metadata` for lighter initial page weight
- Fix: Multi-language locale keys alignment
- Fix: Dedicated player page wide and full block alignment
- Fix: Duplicate provider replays in email capture submissions
- Fix: Stream email exports instead of buffering the full set in memory
- Fix: Remove per-item tag queries from media pagination (N+1)
- Fix: Email attachment path traversal hardening
- Fix: Bind analytics and email capture events to the rendered media nonce
- Fix: Timed content editor spacing controls
- Fix: Keyboard focus states across player UI
- Fix: Raw admin exception messages exposure
- Fix: Presto instant page visibility mapping
- Fix: Playlist loop setting wiring and menu toggle support (Pro)

### 1.0.5 — April 24, 2026

- Feature: Ambient preset layers
- Feature: Fluent Community block apiVersion 3 support
- Feature: Support for CRM shortcodes in timed content and dynamic layers
- Feature: Presto Player migration tooling for importing media, presets, playlists, settings, analytics, and content rewrites
- Improvement: Preset template consistency
- Improvement: Default preset slug resolution, fluent_player embed alignment, and media list table widths
- Security: Hardening and package safety across plugin directories
- Fix: YouTube Shorts zoom and crop issues on the frontend
- Fix: Audio player volume controls on mobile devices
- Fix: Iframe permission guarding and YouTube cross-player message race conditions
- Fix: Original aspect ratio fallback to 16:9 when source dimensions are unavailable
- Fix: Provider config redaction, unpublished language media filtering, and media settings cache invalidation
- Fix: Auto-draft cleanup bounds, PHP 8.4 compatibility

### 1.0.4 — March 17, 2026

- Feature: Mux live streaming and VOD provider support
- Feature: playlist overlay mode setting to playlist block (Pro)
- Feature: FluentCRM smart code inserter to timed content
- Feature: configurable thumbnail aspect ratio for all playlist layouts (Pro)
- Feature: dynamic overlay positioning
- Improvement: audio player layout and flash prevention
- Improvement: settings menu mobile responsiveness
- Improvement: scroll performance and YouTube HD thumbnails
- Improvement: admin UX and block enhancements
- Fix: settings menu showing duplicate Playback and Accessibility items
- Fix: settings menu item styling broken by skin-standard size constraint
- Fix: JS-PHP connection issues and PHP 8.x compatibility
- Fix: grid playlist thumbnails display override from Kadence slider (Pro)
- Fix: mute icon not updating when volume slider reaches zero
- Fix: stuck autoplay detection
- Fix: playlist overlay and modal playback bugs (Pro)

### 1.0.3 — March 10, 2026

- Feature: keyboard action bezel animations with accessibility controls
- Feature: settings menu with Playback and Accessibility submenus
- Feature: ambient preset for looping background video with no controls
- Feature: shortcode and Fluent ecosystem blocks support in timed content
- Feature: text color support and makes title optional for form layer
- Improvement: video duration column in admin media list
- Improvement: seamless loop for muted autoplay instead of countdown
- Improvement: Gutenberg block UI polish and CSS cleanup
- Improvement: lazy-load for better performance
- Fix: prevent auto-scroll to second video on page load
- Fix: autoplay on chapter modal and time input glitch
- Fix: ambient loop restart timing for YouTube embeds

### 1.0.2 — February 28, 2026

- Fix: PHP 8.x compatibility
- Fix: YouTube replay buffering and iframe visibility
- Refactor: Code refactored for better maintainability

### 1.0.1 — February 24, 2026

- Fix: apiVersion 3 YouTube block and iframe issue
- Fix: handleEmailSubmit signature mismatch

### 1.0.0 — September 22, 2025

- Initial release of FluentPlayer
- Feature: video player powered by Vidstack with HLS support
- Feature: audio player with dedicated audio layout
- Feature: YouTube and Vimeo embed support with auto poster and title sync
- Feature: self-hosted media file support (MP4, WebM, MP3, etc.)
- Feature: Gutenberg block for the media player (playlist block is Pro)
- Feature: `[fluentplayer]` shortcode (`[fluentplaylist]` is Pro)
- Feature: playlist support with sidebar and grid layouts (Pro)
- Feature: drag-and-drop admin dashboard built with Vue 3
- Feature: player presets (Standard, Floating, Simple, Minimal) with customizable colors
- Feature: configurable aspect ratios (16:9, 4:3, 1:1, 9:16, 3:2, original)
- Feature: playback speed control
- Feature: chapter support with custom time markers
- Feature: subtitle/caption support
- Feature: overlay layers system (CTA, email capture, custom HTML)
- Feature: email capture with FluentCRM integration
- Feature: timed content for showing overlays at specific timestamps
- Feature: autoplay with browser mute policy handling
- Feature: global control bar color and brand color settings
- Feature: Google Analytics integration (optional)
- Feature: live preview in admin editor
- Feature: copy shortcode from media list
- Feature: media search with collapsible header and debounce

## FluentPlayer Pro

### 1.0.7 — June 22, 2026

- Feature: Update Playlist flow for the playlist block
- Improvement: Sortable columns and refined visibility controls in playlist tables
- Fix: Pro-gate the Google Analytics gtag enqueue
- Fix: Let the assigned preset control resume-playback

### 1.0.6 — May 15, 2026

- Feature: Player share links and context menu
- Feature: Playlist navigation controls
- Feature: Playlist preset source selection with brand color sync from preset source
- Improvement: Internal modularity refactor across services and controllers
- Fix: Reject analytics events for replayed or invalid media IDs
- Fix: Stop returning raw admin exception messages
- Fix: Normalize timed content padding in the frontend renderer

### 1.0.5 — April 24, 2026

- Feature: Support for FluentCRM based conditions
- Feature: Condition support in Dynamic layer, Email Capture & More
- Feature: Media tag management support
- Feature: YouTube subtitle import through the external subtitle service, including caption and hover preview support
- Feature: Tag-based playlist rendering shortcode
- Feature: FluentCommunity playlist block support
- Improvement: Playlist aspect ratio alignment and legacy ratio handling cleanup
- Security: Hardening across TLS, signed URLs, analytics, playlist layout guards, and Bunny Storage upload path traversal
- Fix: Playlist asset cache busting now uses the active free plugin version
- Fix: Mux signed media URLs, signing key settings copy, and playlist window.fluent_player YouTube settings
- Fix: Bunny Storage CDN signing, Stream asset tokens, and missing tag options service wiring
- Fix: Analytics unique viewers now count anonymous viewers and preserve dominant country and device per user
- Fix: Bunny browser uncategorized video filter for root-level video browsing
- Fix: Debounced YouTube subscriber count lookup in preset editor

### 1.0.4 — March 17, 2026

- Feature: FluentCRM smartcode parsing for timed content
- Feature: Mux integration with API client, service, controller, and routes
- Feature: Configurable playlist aspect ratio selection for all playlist layouts
- Feature: Playlist per-video overlay and layers support
- Feature: BunnyCDN signed URL support for Stream and Storage
- Security: Stronger output escaping across playlist layout templates
- Improvement: Analytics tracker behavior with fewer unnecessary flush calls on play/pause
- Feature: Timed content rendering and API controller
- Feature: Shortcode processing in timed content output
- Improvement: Playlist player gesture controls
- Fix: PHP 8.x compatibility issues
- Fix: Subtitle endpoints querying non-existent wp_medias table

### 1.0.2 — February 28, 2026

- Feature: BunnyCDN subtitles import and HLS MP4 fallback
- Fix: Caption `srclang` validation

### 1.0.1 — February 24, 2026

- Feature: `.srt` subtitle file support
- Feature: Manageable captions from preset
- Feature: Alignment support for playlist block
- Improvement: Analytics service with percentage tracking
- Improvement: BunnyCDN Storage upload performance
- Fix: BunnyCDN video playback

### 1.0.0 — February 10, 2026

- Feature: Initial release of FluentPlayer Pro
- Feature: Playlist system with Standard and Grid layouts
- Feature: Playlist Gutenberg block with dedicated CPT
- Feature: Playlist visibility (public/private) and slug-based permalinks
- Feature: BunnyCDN Stream integration for video delivery
- Feature: BunnyCDN Storage integration with streaming proxy and upload
- Feature: Mailchimp email provider integration
- Feature: Webhook email provider integration
- Feature: Player analytics with view tracking and audience retention
- Feature: Google Analytics event integration
- Feature: Preset management (CRUD) with customizable settings
- Feature: Player subtitles/captions support
- Feature: Sidebar width and title position settings for playlists
- Feature: Brand color and control bar color customization
