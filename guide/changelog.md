---
prev:
  text: 'Support'
  link: '/support'
next: false
---

# Changelog

Stay updated with the latest features, improvements, and bug fixes in FluentPlayer. The newest release is listed first. Releases that include Pro-only updates group them under a dedicated **Pro** tab.


## FluentPlayer v1.4.0

_Released on August 25, 2026_

::: code-group

```markdown:no-line-numbers [✨ Newly Added]
• Adds full Vimeo support — privacy mode, quality and playback-speed menus, chapter import, and caption playback
• Adds Single Playback — starting one video pauses every other player on the page, so two soundtracks never overlap (on by default)
• Adds Breakdance support — shortcodes now render live inside the builder canvas
• Adds cookie-consent support — YouTube and Vimeo embeds can be held back until a consent manager releases them
```

```markdown:no-line-numbers [🚀 Improvements]
• Works with WordPress 7.1 — clears the deprecation warnings that appeared every time the editor loaded
• Speeds up the block editor and media picker on libraries with many private videos
• The license screen now masks your key and warns you when a license is inside its renewal grace period
• Standalone media pages can now be switched off site-wide
• Tightens permission checks and keeps credentials out of the block editor and player output
```

```markdown:no-line-numbers [🐞 Bug fixes]
• Fixes lost progress — the resume position is now saved on pause, on tab switch, and when a single-page-app view is torn down
• Fixes a blank admin dashboard after an update, caused by browsers holding on to stale files
• Fixes the same video placed twice on one page rendering only one working player
• Fixes the Divi and Elementor media pickers, and stops wp-admin typography leaking into the builder frame
• Fixes YouTube branding appearing over the block editor preview, and portrait Shorts being zoomed
• Fixes YouTube and Vimeo embeds losing their referrer on sites with a strict referrer policy
• Fixes Vimeo offering qualities the video cannot actually deliver
• Fixes Vimeo quality selection on a page with several Vimeo players changing the wrong player
• Fixes FluentCommunity lesson pages losing full player behavior, including analytics
• Fixes Bunny Stream token-protected media not playing in the block editor preview
```

```markdown:no-line-numbers [💎 Pro]
• Adds Vimeo caption import — pull the captions already on a Vimeo video straight into its subtitles
• Adds the lightbox shortcode — [fluentplayer_modal id="123"] opens any video in a popup, behind the same visibility and password rules as an inline player
• Adds the chapter scroll strip — a scrollable chapter list below the player, as an alternative to the in-player menu button
• A misconfigured Cloudflare Stream connection no longer stalls the page while every private video retries the provider
• Cloudflare Stream playback tokens now match the length of the video, so a long video no longer cuts off mid-playback
• The license screen now shows your plan, expiry, days remaining, last checked, and any renewal grace period
• Fixes playlist colors and aspect ratios entered in unusual formats producing broken styles
• Fixes a server error on PHP 8 when saving a preset with a JSON settings object — you now get a clear validation message
• Adds signed update verification, masked license responses, and tighter playlist and provider permissions
```

:::

## FluentPlayer v1.3.1

_Released on July 28, 2026_

::: code-group

```markdown:no-line-numbers [🚀 Improvements]
• Improves player asset loading by cache-busting after a plugin update, so browsers load the new version instead of a stale one
```

```markdown:no-line-numbers [🐞 Bug fixes]
• Fixes playback not resuming where you left off in FluentCommunity
• Fixes the Bunny Stream CDN token not being forwarded to editor preview segments, so protected media previews correctly in the editor
• Fixes Fluent Player shortcodes not rendering inside the Breakdance builder canvas
• Fixes YouTube and Vimeo embeds losing their referrer
• Fixes the Divi and Elementor builder media and playlist pickers, and a wp-admin typography issue in the builder canvas
```

:::

## FluentPlayer v1.3.0

_Released on July 22, 2026_

::: code-group

```markdown:no-line-numbers [✨ Newly Added]
• Adds paste-to-add media — paste any URL and the provider is detected automatically; same-site upload URLs resolve to the library attachment
• Adds playback-override attributes to the [fluentplayer] shortcode — preset, autoplay, muted, loop, controls, and more; id is optional when a source URL is provided
• Adds audio playback support for CDN media providers
• Adds Editor-role authoring for media, layers, and presets, previously restricted to Administrators; adjustable via the fluent_player/authoring_capability filter
• Adds FluentCRM contact timeline logging — watched milestones and layer interactions are tracked as timeline events
• Adds private media playback — private media plays wherever it is embedded (pages, courses) while its standalone page returns 404 and stays out of sitemaps and search
• Adds automatic Private visibility for media created from a FluentCommunity lesson, so lesson videos never get a public standalone page
```

```markdown:no-line-numbers [🚀 Improvements]
• Improves the source picker to collapse unconfigured Pro providers behind a More sources toggle, with direct links to their setup page
• Improves YouTube poster delivery to serve WebP images for faster loading
• Improves block editor performance by lazy-loading the player preview
• Improves block editor startup with a branded loading backdrop during the boot phase
• Adds Cmd/Ctrl+S to save settings, and a keyboard shortcut to create new media from the admin pages
• Improves accessibility by announcing locked providers to assistive technology
• Improves the block editor media and playlist pickers with search and paginated results, making libraries beyond the first 20 items reachable
• Improves FluentCRM timeline events and layer pickers to show block-editor labels (form title, provider name); the media picker lists newest items first
```

```markdown:no-line-numbers [🐞 Bug fixes]
• Fixes chapter files with umlauts and other non-ASCII characters not rendering correctly in the block preview
• Fixes audio players not showing all controls without scrolling
• Fixes per-video audio normalization not being saved reliably
• Fixes overlay layers (forms, CTAs) failing to appear on sites that load animation libraries such as GSAP
• Fixes editing a media item from a page or lesson where it is embedded no longer changing the media's visibility
• Fixes the Modern preset's mobile control bar crowding the seek bar
• Fixes the Elementor and Divi builders showing a blank canvas for timed-content and playlist blocks
• Fixes portrait (9:16) YouTube Shorts being letterboxed instead of filling the frame
• Fixes page-builder panel colors not applying on the front end; the Divi media module is now selectable in the builder
```

```markdown:no-line-numbers [💎 Pro]
• Adds Elementor widgets for the player and playlist, with full block-parity settings
• Adds Divi 5 Visual Builder modules for the player and playlist
```

:::

## FluentPlayer v1.2.0

_Released on July 8, 2026_

::: code-group

```markdown:no-line-numbers [🐞 Bug fixes]
• Fixes the frontend language switcher button not being clickable
• Fixes the selected hotspot icon not staying visible in the picker preview
• Fixes the admin top-nav dropdown being hidden behind the WordPress admin bar
• Fixes the media-select search icon overlapping the input text
```

```markdown:no-line-numbers [💎 Pro]
• Improves resume playback so it can now be set per video, overriding the preset
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
• Fixes YouTube Privacy-Enhanced Mode not toggling the embed and poster hosts
• Fixes the timed-content frontend script loading more than once across render paths
• Fixes the Google Analytics gtag enqueue not being Pro-gated
• Fixes |fallback on contact smartcodes not being honored when no CRM contact is present
• Hardens email exports against spreadsheet formula injection
```

```markdown:no-line-numbers [💎 Pro]
• Adds an updated Playlist flow for the playlist block
• Fixes the assigned preset not controlling resume-playback
```

:::

## FluentPlayer v1.0.6

_Released on May 20, 2026_

::: code-group

```markdown:no-line-numbers [✨ Newly Added]
• Adds a dynamic custom-field source on [fluentplayer] — source_url, source_meta, and source_poster attributes for per-render URL override without mutating saved media
• Adds player share links and a context menu
• Adds unified media list filters in the admin dashboard
• Adds timed content support inside FluentCommunity lessons
```

```markdown:no-line-numbers [🚀 Improvements]
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
```

```markdown:no-line-numbers [💎 Pro]
• Adds playlist player navigation controls, previous and next
• Adds Preset Source media and Auto brand color mode for playlists
• Improves the Mux Data analytics payload and reusable field link
• Fixes playlist sidebar collapse on initial mobile load
• Fixes Playlist Block keyboard accessibility and the frontend grid poster
• Fixes playlist loop setting wiring and menu toggle support
```

:::

## FluentPlayer v1.0.5

_Released on April 24, 2026_

::: code-group

```markdown:no-line-numbers [✨ Newly Added]
• Adds Fluent Community block apiVersion 3 support
• Adds support for CRM shortcodes in timed content and dynamic layers
• Adds Presto Player migration tooling for importing media, presets, playlists, settings, analytics, and content rewrites
```

```markdown:no-line-numbers [🚀 Improvements]
• Improves preset template consistency
• Improves default preset slug resolution, fluent_player embed alignment, and media list table widths
```

```markdown:no-line-numbers [🐞 Bug fixes]
• Hardens plugin directories across packaging and safety
• Fixes YouTube Shorts zoom and crop issues on the frontend
• Fixes audio player volume controls on mobile devices
• Fixes iframe permission guarding and YouTube cross-player message race conditions
• Fixes original aspect ratio fallback to 16:9 when source dimensions are unavailable
• Fixes provider config redaction, unpublished language media filtering, and media settings cache invalidation
• Fixes auto-draft cleanup bounds and PHP 8.4 compatibility
```

```markdown:no-line-numbers [💎 Pro]
• Adds ambient preset layers
• Adds support for FluentCRM-based conditions
• Adds condition support in the dynamic layer, email capture, and more
• Adds media tag management
• Adds YouTube subtitle import through the external subtitle service, including caption and hover preview support
• Adds a tag-based playlist rendering shortcode
• Adds FluentCommunity playlist block support
• Improves playlist aspect ratio alignment and cleans up legacy ratio handling
• Hardens TLS, signed URLs, analytics, playlist layout guards, and Bunny Storage upload path traversal
• Fixes playlist asset cache busting to use the active free plugin version
• Fixes Mux signed media URLs, signing key settings copy, and playlist YouTube settings
• Fixes Bunny Storage CDN signing, Stream asset tokens, and missing tag options service wiring
• Fixes analytics unique viewers to count anonymous viewers and preserve dominant country and device per user
• Fixes the Bunny browser uncategorized video filter for root-level browsing
• Fixes the debounced YouTube subscriber count lookup in the preset editor
```

:::

## FluentPlayer v1.0.4

_Released on March 17, 2026_

::: code-group

```markdown:no-line-numbers [✨ Newly Added]
• Adds a FluentCRM smart-code inserter to timed content
• Adds dynamic overlay positioning
```

```markdown:no-line-numbers [🚀 Improvements]
• Improves audio player layout and prevents flash
• Improves settings menu mobile responsiveness
• Improves scroll performance and YouTube HD thumbnails
• Improves admin UX and block enhancements
```

```markdown:no-line-numbers [🐞 Bug fixes]
• Fixes the settings menu showing duplicate Playback and Accessibility items
• Fixes settings menu item styling broken by the skin-standard size constraint
• Fixes JS-PHP connection issues and PHP 8.x compatibility
• Fixes the mute icon not updating when the volume slider reaches zero
• Fixes stuck autoplay detection
```

```markdown:no-line-numbers [💎 Pro]
• Adds Mux live streaming and VOD provider support
• Adds a playlist overlay mode setting to the playlist block
• Adds configurable thumbnail aspect ratio for all playlist layouts
• Adds a Mux integration with API client, service, controller, and routes
• Adds playlist per-video overlay and layers support
• Adds BunnyCDN signed URL support for Stream and Storage
• Adds timed content rendering and API controller
• Adds shortcode processing in timed content output
• Improves the analytics tracker with fewer unnecessary flush calls on play and pause
• Improves playlist player gesture controls
• Hardens output escaping across playlist layout templates
• Fixes grid playlist thumbnails being overridden by the Kadence slider
• Fixes playlist overlay and modal playback bugs
• Fixes subtitle endpoints querying a non-existent wp_medias table
```

:::

## FluentPlayer v1.0.3

_Released on March 10, 2026_

::: code-group

```markdown:no-line-numbers [✨ Newly Added]
• Adds keyboard action bezel animations with accessibility controls
• Adds a settings menu with Playback and Accessibility submenus
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
```

```markdown:no-line-numbers [💎 Pro]
• Adds an ambient preset for looping background video with no controls
• Fixes ambient loop restart timing for YouTube embeds
```

:::

## FluentPlayer v1.0.2

_Released on February 28, 2026_

::: code-group

```markdown:no-line-numbers [🚀 Improvements]
• Improves maintainability with a code refactor
```

```markdown:no-line-numbers [🐞 Bug fixes]
• Fixes PHP 8.x compatibility
• Fixes YouTube replay buffering and iframe visibility
```

```markdown:no-line-numbers [💎 Pro]
• Adds BunnyCDN subtitles import and HLS MP4 fallback
• Fixes caption srclang validation
```

:::

## FluentPlayer v1.0.1

_Released on February 24, 2026_

::: code-group

```markdown:no-line-numbers [🐞 Bug fixes]
• Fixes the apiVersion 3 YouTube block and iframe issue
• Fixes a handleEmailSubmit signature mismatch
```

```markdown:no-line-numbers [💎 Pro]
• Adds .srt subtitle file support
• Adds manageable captions from the preset
• Adds alignment support for the playlist block
• Improves the analytics service with percentage tracking
• Improves BunnyCDN Storage upload performance
• Fixes BunnyCDN video playback
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
