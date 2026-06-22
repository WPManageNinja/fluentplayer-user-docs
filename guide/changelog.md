---
prev:
  text: 'Support'
  link: '/guide/support'
next: false
---

# Changelog

All notable user-facing changes to Fluent Player are documented here, newest first. Entries marked **(Pro)** require Fluent Player Pro.

## 1.0.6 — May 20, 2026

**New**

- Dynamic source on the `[fluentplayer]` shortcode — `source_url`, `source_meta`, and `source_poster` attributes override a media item's URL and poster per render, without changing the saved media.
- Player share links and a right-click context menu.
- Timed content now works inside FluentCommunity lessons.
- Unified media list filters in the admin dashboard.
- Playlist player navigation controls (previous / next). **(Pro)**
- Playlist preset source media and an automatic brand-color mode. **(Pro)**

**Improved**

- Branding logo settings: image-only picker, active state for position, conditional fields, and a clickable preview.
- Poster-only preview mode in the block editor for faster editing.
- Quick links dropdown in the media block toolbar, plus a smoother media-replace back-button flow.
- Right-to-left (RTL) support across the player and admin.
- Mux Data analytics payload and a reusable field link.
- Default presets now self-heal if removed.
- Lighter initial page weight — preload now defaults to `metadata`.
- Plugin Check and internationalization compliance pass.

**Fixed**

- iOS Safari no longer forced to muted when autoplay is disabled.
- Duplicate provider submissions on email capture re-submit.
- Email exports are streamed instead of buffered, improving reliability on large lists.
- Removed per-item tag queries from media pagination (N+1).
- Hardened email attachment paths against traversal, and stopped exposing raw admin exception messages.
- Analytics and email-capture events are now bound to the rendered media nonce.
- Dedicated player page alignment for wide and full blocks; multi-language locale key alignment; player keyboard focus states.
- Playlist sidebar collapse on first mobile load, playlist block keyboard accessibility, and playlist loop wiring. **(Pro)**

## 1.0.5 — April 24, 2026

**New**

- Presto Player migration tooling — import media, presets, playlists, settings, analytics, and rewrite existing content.
- Ambient preset layers.
- FluentCRM shortcodes in timed content and dynamic layers.
- FluentCommunity block updated to Gutenberg apiVersion 3.

**Improved**

- Preset template consistency and default preset slug resolution.
- Security hardening and package safety across plugin directories.

**Fixed**

- YouTube Shorts zoom and crop on the frontend.
- Audio player volume controls on mobile.
- Iframe permission guarding and YouTube cross-player message races.
- Aspect ratio falls back to 16:9 when source dimensions are unavailable.
- Provider config redaction, unpublished-language media filtering, and media settings cache invalidation.
- PHP 8.4 compatibility and auto-draft cleanup bounds.

## 1.0.4 — March 17, 2026

**New**

- Mux live streaming and VOD provider support.
- FluentCRM smart code inserter in timed content.
- Dynamic overlay positioning.
- Playlist overlay mode setting on the playlist block. **(Pro)**
- Configurable thumbnail aspect ratio for all playlist layouts. **(Pro)**

**Improved**

- Audio player layout and flash prevention.
- Settings menu mobile responsiveness.
- Scroll performance and YouTube HD thumbnails.

**Fixed**

- Settings menu showing duplicate Playback and Accessibility items, and broken item styling.
- Mute icon not updating when the volume slider reached zero.
- Stuck autoplay detection.
- JS–PHP connection issues and PHP 8.x compatibility.
- Grid playlist thumbnails overridden by the Kadence slider. **(Pro)**
- Playlist overlay and modal playback bugs. **(Pro)**

## 1.0.3 — March 10, 2026

**New**

- Settings menu with Playback and Accessibility submenus.
- Keyboard action bezel animations with accessibility controls.
- Ambient preset for a looping background video with no controls.
- Shortcode and Fluent ecosystem blocks support in timed content.
- Text color support, with an optional title, for the form layer.

**Improved**

- Video duration column in the admin media list.
- Seamless loop for muted autoplay instead of a countdown.
- Gutenberg block UI polish and lazy-loading for better performance.

**Fixed**

- Auto-scroll to the second video on page load.
- Autoplay on the chapter modal and a time-input glitch.
- Ambient loop restart timing for YouTube embeds.

## 1.0.2 — February 28, 2026

**Fixed**

- PHP 8.x compatibility.
- YouTube replay buffering and iframe visibility.

## 1.0.1 — February 24, 2026

**Fixed**

- apiVersion 3 YouTube block and iframe issue.
- Email submit handler signature mismatch.

## 1.0.0 — September 22, 2025

Initial release of Fluent Player.

- Video player powered by Vidstack with HLS support, and a dedicated audio layout.
- YouTube and Vimeo embeds with auto poster and title sync, plus self-hosted media (MP4, WebM, MP3, and more).
- Gutenberg media player block and the `[fluentplayer]` shortcode.
- Drag-and-drop admin dashboard built with Vue 3, with live preview and copy-shortcode from the media list.
- Player presets (Standard, Floating, Simple, Minimal) with customizable colors, configurable aspect ratios, playback speed, chapters, and subtitles.
- Overlay layers (CTA, email capture, custom HTML), timed content, and email capture with FluentCRM integration.
- Autoplay with browser mute-policy handling, global control-bar and brand color settings, and optional Google Analytics integration.
- Playlist support with sidebar and grid layouts, and the `[fluentplaylist]` shortcode. **(Pro)**
