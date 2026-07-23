---
prev:
  text: 'Support'
  link: '/support'
next: false
---

# Changelog

Stay updated with the latest features, improvements, and bug fixes in FluentPlayer. The newest release is listed first, and items marked **(Pro)** require FluentPlayer Pro.


## FluentPlayer v1.3.0

_Released on July 22, 2026_

::: code-group

```markdown:no-line-numbers [✨ Newly Added]
• Adds paste-to-add media — paste any URL and the provider is detected automatically; same-site upload URLs resolve to the library attachment
• Adds playback-override attributes to the [fluentplayer] shortcode — preset, autoplay, muted, loop, controls, and more; id is optional when a source URL is provided
• Adds Elementor widgets for the player and playlist, with full block-parity settings (Pro)
• Adds Divi 5 Visual Builder modules for the player and playlist (Pro)
• Adds audio playback support for CDN providers; Pro adds server-side audio uploads (Pro)
• Adds Editor-role authoring for media, layers, and presets, previously restricted to Administrators; adjustable via the fluent_player/authoring_capability filter
• Adds Editor-role authoring for playlists, previously restricted to Administrators (Pro)
• Adds FluentCRM contact timeline logging — watched milestones and layer interactions are tracked as timeline events
```

```markdown:no-line-numbers [🚀 Improvements]
• Improves the source picker to collapse unconfigured Pro providers behind a More sources toggle, with direct links to their setup page (Pro)
• Improves YouTube poster delivery to serve WebP images for faster loading
• Improves block editor performance by lazy-loading the player preview
• Improves block editor startup with a branded loading backdrop during the boot phase
• Adds Cmd/Ctrl+S to save settings, and a keyboard shortcut to create new media from the admin pages
• Improves accessibility by announcing locked providers to assistive technology
• Improves the block editor media and playlist pickers with search and paginated results, making libraries beyond the first 20 items reachable
• Renames BunnyCDN Stream to Bunny Stream to match the provider's current branding (Pro)
• Improves the storage settings link so it only appears for users who can access the settings page (Pro)
```

```markdown:no-line-numbers [🐞 Bug fixes]
• Fixes chapter files with umlauts and other non-ASCII characters not rendering correctly in the block preview
• Fixes audio players not showing all controls without scrolling
• Fixes per-video audio normalization not being saved reliably
• Fixes overlay layers (forms, CTAs) failing to appear on sites that load animation libraries such as GSAP
• Fixes password-locked playlist items exposing Cloudflare Stream and R2 playback tokens before unlock (Pro)
• Fixes daily visit analytics overwriting the longest watch duration with a shorter later session (Pro)
• Fixes Bunny Stream media not appearing correctly in the block editor source picker (Pro)
```

:::

## FluentPlayer v1.2.0

_Released on July 8, 2026_

::: code-group

```markdown:no-line-numbers [🚀 Improvements]
• Improves resume playback so it can now be set per video, overriding the preset (Pro)
```

```markdown:no-line-numbers [🐞 Bug fixes]
• Fixes the frontend language switcher button not being clickable
• Fixes the selected hotspot icon not staying visible in the picker preview
• Fixes the admin top-nav dropdown being hidden behind the WordPress admin bar
• Fixes the media-select search icon overlapping the input text
```

:::

## FluentPlayer v1.1.0

_Released on July 6, 2026_

::: code-group

```markdown:no-line-numbers [✨ Newly Added]
• Adds the option to use a FluentPlayer video as a FluentCommunity lesson's feature media
```

```markdown:no-line-numbers [🚀 Improvements]
• Improves the YouTube paused cover button to use your brand color and hide YouTube's default play button
• Improves the player vignette overlay
• Improves FluentCommunity lessons by hiding in-video form layers during lesson playback
```

```markdown:no-line-numbers [🐞 Bug fixes]
• Fixes players not re-initializing when switching lessons in FluentCommunity
• Fixes the loading overlay blocking clicks before the player is ready
• Fixes YouTube subscribe button styling being overridden by aggressive theme CSS
```

:::

## FluentPlayer v1.0.9

_Released on June 29, 2026_

::: code-group

```markdown:no-line-numbers [✨ Newly Added]
• Adds a customizable confirmation message after someone submits the email-capture form
• Adds a custom color and background for the play button
• Adds FluentCRM double opt-in email support
• Adds bulk actions in the media list — trash, restore, and change the status of multiple items at once
```

```markdown:no-line-numbers [🚀 Improvements]
• Improves WordPress password-protected media so protected videos and audio unlock right on the page
• Improves support for WordPress native scheduling — set a future publish date with a clear Scheduled status and time
• Improves the media list with a cleaner, more compact layout and a thumbnail showing the media type in the title
• Improves the media editor with a refined, more compact layout and unified setting cards
• Improves the media list with show/hide columns to fit the table to what you need
• Improves the player right-click menu with item icons and a refreshed look
• Improves overlapping timed content so each item is easy to spot and edit inline
• Improves the permanent-delete confirmation so media isn't removed by mistake
• Improves admin dashboard loading speed
```

```markdown:no-line-numbers [🐞 Bug fixes]
• Hardens the player's styling output against injection
• Fixes the video preview not showing while scrubbing in the layer, overlay, and chapter editors
• Fixes on-screen layers such as email capture not holding keyboard focus
• Fixes audio tracks in a mixed playlist not playing in the audio player
• Fixes the playlist player not filling the available width and its menu toggle not working reliably
• Fixes YouTube playback and lesson settings inside FluentCommunity
• Fixes the missing YouTube and Analytics toggles on the settings page
• Fixes reliability and rate-limiting in the FluentCRM double opt-in flow
• Fixes the Default Aspect Ratio option not displaying correctly in settings
• Fixes clarity by renaming "Poster Image" to "Thumbnail" in the media block
```

:::

## FluentPlayer v1.0.8

_Released on June 22, 2026_

::: code-group

```markdown:no-line-numbers [🚀 Improvements]
• Improves internal stability, compatibility, and maintenance
```

:::

## FluentPlayer v1.0.7

_Released on June 22, 2026_

::: code-group

```markdown:no-line-numbers [✨ Newly Added]
• Adds Presto Player migration — media, per-video color, thumbnails, YouTube no-cookie settings, and email submissions
• Adds an updated Playlist flow for the playlist block (Pro)
• Adds a back button in the media editor header
• Adds an unsaved-changes guard on the settings page
```

```markdown:no-line-numbers [🚀 Improvements]
• Improves the plugins row with All Media and Settings quick links
• Improves the settings and analytics pages with skeleton loaders
• Improves the media and playlist tables with sortable columns and refined visibility controls
• Improves admin accessibility — accessible names, keyboard navigation, and AA contrast
• Improves playback smoothness by throttling player time-update handlers
```

```markdown:no-line-numbers [🐞 Bug fixes]
• Fixes the assigned preset not controlling resume-playback (Pro)
• Fixes YouTube Privacy-Enhanced Mode not toggling the embed and poster hosts
• Fixes the timed-content frontend script loading more than once across render paths
• Fixes the Google Analytics gtag enqueue not being Pro-gated
• Fixes |fallback on contact smartcodes not being honored when no CRM contact is present
• Hardens email exports against spreadsheet formula injection
```

:::

## FluentPlayer v1.0.6

_Released on May 20, 2026_

::: code-group

```markdown:no-line-numbers [✨ Newly Added]
• Adds a dynamic custom-field source on [fluentplayer] — source_url, source_meta, and source_poster attributes for per-render URL override without mutating saved media
• Adds playlist player navigation controls, previous and next (Pro)
• Adds player share links and a context menu
• Adds Preset Source media and Auto brand color mode for playlists (Pro)
• Adds unified media list filters in the admin dashboard
• Adds timed content support inside FluentCommunity lessons
```

```markdown:no-line-numbers [🚀 Improvements]
• Improves the Mux Data analytics payload and reusable field link (Pro)
• Improves the branding logo UX — image-only picker, position active state, conditional fields, and clickable preview
• Improves Plugin Check and i18n compliance
• Improves the Gutenberg poster-only editor preview mode
• Improves default preset self-healing and row-action accessibility
• Improves Presto Player migration by bounding queries to the active batch and already-migrated set
• Improves internal modularity across services and controllers
• Improves the media block toolbar with a quick links dropdown
• Improves the media replace editor back-button flow
• Improves RTL support across the player and admin
```

```markdown:no-line-numbers [🐞 Bug fixes]
• Fixes an undefined default settings warning in the player template
• Fixes iOS Safari being forced to muted when autoplay is disabled
• Fixes preset behavior runtime key normalization
• Fixes playlist sidebar collapse on initial mobile load (Pro)
• Fixes Playlist Block keyboard accessibility and the frontend grid poster (Pro)
• Fixes the admin media tag filter to match the REST response shape
• Fixes initial page weight by defaulting preload to metadata
• Fixes multi-language locale key alignment
• Fixes dedicated player page wide and full block alignment
• Fixes duplicate provider replays in email capture submissions
• Fixes email exports to stream instead of buffering the full set in memory
• Fixes an N+1 by removing per-item tag queries from media pagination
• Hardens email attachment paths against traversal
• Fixes analytics and email capture events not being bound to the rendered media nonce
• Fixes timed content editor spacing controls
• Fixes keyboard focus states across the player UI
• Fixes raw admin exception messages being exposed
• Fixes Presto instant page visibility mapping
• Fixes playlist loop setting wiring and menu toggle support (Pro)
```

:::

## FluentPlayer v1.0.5

_Released on April 24, 2026_

::: code-group

```markdown:no-line-numbers [✨ Newly Added]
• Adds ambient preset layers (Pro)
• Adds Fluent Community block apiVersion 3 support
• Adds support for CRM shortcodes in timed content and dynamic layers
• Adds Presto Player migration tooling for importing media, presets, playlists, settings, analytics, and content rewrites
• Adds support for FluentCRM-based conditions (Pro)
• Adds condition support in the dynamic layer, email capture, and more (Pro)
• Adds media tag management (Pro)
• Adds YouTube subtitle import through the external subtitle service, including caption and hover preview support (Pro)
• Adds a tag-based playlist rendering shortcode (Pro)
• Adds FluentCommunity playlist block support (Pro)
```

```markdown:no-line-numbers [🚀 Improvements]
• Improves preset template consistency
• Improves default preset slug resolution, fluent_player embed alignment, and media list table widths
• Improves playlist aspect ratio alignment and cleans up legacy ratio handling (Pro)
```

```markdown:no-line-numbers [🐞 Bug fixes]
• Hardens plugin directories across packaging and safety
• Hardens TLS, signed URLs, analytics, playlist layout guards, and Bunny Storage upload path traversal (Pro)
• Fixes YouTube Shorts zoom and crop issues on the frontend
• Fixes audio player volume controls on mobile devices
• Fixes iframe permission guarding and YouTube cross-player message race conditions
• Fixes original aspect ratio fallback to 16:9 when source dimensions are unavailable
• Fixes provider config redaction, unpublished language media filtering, and media settings cache invalidation
• Fixes auto-draft cleanup bounds and PHP 8.4 compatibility
• Fixes playlist asset cache busting to use the active free plugin version (Pro)
• Fixes Mux signed media URLs, signing key settings copy, and playlist YouTube settings (Pro)
• Fixes Bunny Storage CDN signing, Stream asset tokens, and missing tag options service wiring (Pro)
• Fixes analytics unique viewers to count anonymous viewers and preserve dominant country and device per user (Pro)
• Fixes the Bunny browser uncategorized video filter for root-level browsing (Pro)
• Fixes the debounced YouTube subscriber count lookup in the preset editor (Pro)
```

:::

## FluentPlayer v1.0.4

_Released on March 17, 2026_

::: code-group

```markdown:no-line-numbers [✨ Newly Added]
• Adds Mux live streaming and VOD provider support (Pro)
• Adds a playlist overlay mode setting to the playlist block (Pro)
• Adds a FluentCRM smart-code inserter to timed content
• Adds configurable thumbnail aspect ratio for all playlist layouts (Pro)
• Adds dynamic overlay positioning
• Adds a Mux integration with API client, service, controller, and routes (Pro)
• Adds playlist per-video overlay and layers support (Pro)
• Adds BunnyCDN signed URL support for Stream and Storage (Pro)
• Adds timed content rendering and API controller (Pro)
• Adds shortcode processing in timed content output (Pro)
```

```markdown:no-line-numbers [🚀 Improvements]
• Improves audio player layout and prevents flash
• Improves settings menu mobile responsiveness
• Improves scroll performance and YouTube HD thumbnails
• Improves admin UX and block enhancements
• Improves the analytics tracker with fewer unnecessary flush calls on play and pause (Pro)
• Improves playlist player gesture controls (Pro)
```

```markdown:no-line-numbers [🐞 Bug fixes]
• Hardens output escaping across playlist layout templates (Pro)
• Fixes the settings menu showing duplicate Playback and Accessibility items
• Fixes settings menu item styling broken by the skin-standard size constraint
• Fixes JS-PHP connection issues and PHP 8.x compatibility
• Fixes grid playlist thumbnails being overridden by the Kadence slider (Pro)
• Fixes the mute icon not updating when the volume slider reaches zero
• Fixes stuck autoplay detection
• Fixes playlist overlay and modal playback bugs (Pro)
• Fixes subtitle endpoints querying a non-existent wp_medias table (Pro)
```

:::

## FluentPlayer v1.0.3

_Released on March 10, 2026_

::: code-group

```markdown:no-line-numbers [✨ Newly Added]
• Adds keyboard action bezel animations with accessibility controls
• Adds a settings menu with Playback and Accessibility submenus
• Adds an ambient preset for looping background video with no controls (Pro)
• Adds shortcode and Fluent ecosystem block support in timed content
• Adds text color support and makes the title optional for the form layer
```

```markdown:no-line-numbers [🚀 Improvements]
• Improves the admin media list with a video duration column
• Improves muted autoplay with a seamless loop instead of a countdown
• Improves Gutenberg block UI polish and CSS cleanup
• Improves performance with lazy-loading
```

```markdown:no-line-numbers [🐞 Bug fixes]
• Fixes auto-scroll to the second video on page load
• Fixes autoplay on the chapter modal and a time-input glitch
• Fixes ambient loop restart timing for YouTube embeds (Pro)
```

:::

## FluentPlayer v1.0.2

_Released on February 28, 2026_

::: code-group

```markdown:no-line-numbers [✨ Newly Added]
• Adds BunnyCDN subtitles import and HLS MP4 fallback (Pro)
```

```markdown:no-line-numbers [🚀 Improvements]
• Improves maintainability with a code refactor
```

```markdown:no-line-numbers [🐞 Bug fixes]
• Fixes PHP 8.x compatibility
• Fixes YouTube replay buffering and iframe visibility
• Fixes caption srclang validation (Pro)
```

:::

## FluentPlayer v1.0.1

_Released on February 24, 2026_

::: code-group

```markdown:no-line-numbers [✨ Newly Added]
• Adds .srt subtitle file support (Pro)
• Adds manageable captions from the preset (Pro)
• Adds alignment support for the playlist block (Pro)
```

```markdown:no-line-numbers [🚀 Improvements]
• Improves the analytics service with percentage tracking (Pro)
• Improves BunnyCDN Storage upload performance (Pro)
```

```markdown:no-line-numbers [🐞 Bug fixes]
• Fixes the apiVersion 3 YouTube block and iframe issue
• Fixes a handleEmailSubmit signature mismatch
• Fixes BunnyCDN video playback (Pro)
```

:::

## FluentPlayer Pro v1.0.0

_Released on February 10, 2026_

::: code-group

```markdown:no-line-numbers [✨ Newly Added]
• Adds the initial release of FluentPlayer Pro
• Adds a playlist system with Standard and Grid layouts
• Adds a playlist Gutenberg block with a dedicated CPT
• Adds playlist visibility (public/private) and slug-based permalinks
• Adds BunnyCDN Stream integration for video delivery
• Adds BunnyCDN Storage integration with streaming proxy and upload
• Adds Mailchimp email provider integration
• Adds Webhook email provider integration
• Adds player analytics with view tracking and audience retention
• Adds Google Analytics event integration
• Adds preset management (CRUD) with customizable settings
• Adds player subtitles and captions support
• Adds sidebar width and title position settings for playlists
• Adds brand color and control bar color customization
```

:::

## FluentPlayer v1.0.0

_Released on September 22, 2025_

::: code-group

```markdown:no-line-numbers [✨ Newly Added]
• Adds the initial release of FluentPlayer
• Adds a video player powered by Vidstack with HLS support
• Adds an audio player with a dedicated audio layout
• Adds YouTube and Vimeo embed support with auto poster and title sync
• Adds self-hosted media file support (MP4, WebM, MP3, and more)
• Adds a Gutenberg block for the media player (playlist block is Pro)
• Adds the [fluentplayer] shortcode ([fluentplaylist] is Pro)
• Adds a drag-and-drop admin dashboard built with Vue 3
• Adds player presets (Standard, Floating, Simple, Minimal) with customizable colors
• Adds configurable aspect ratios (16:9, 4:3, 1:1, 9:16, 3:2, original)
• Adds playback speed control
• Adds chapter support with custom time markers
• Adds subtitle and caption support
• Adds an overlay layers system (CTA, email capture, custom HTML)
• Adds email capture with FluentCRM integration
• Adds timed content for showing overlays at specific timestamps
• Adds autoplay with browser mute policy handling
• Adds global control bar color and brand color settings
• Adds optional Google Analytics integration
• Adds a live preview in the admin editor
• Adds copy-shortcode from the media list
• Adds media search with a collapsible header and debounce
```

:::
