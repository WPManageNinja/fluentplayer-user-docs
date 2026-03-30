# Skins and Controls

The **skin** determines the player's overall look, and **controls** determine which buttons and elements are visible. Together, they let you create everything from a full-featured player to a minimal, distraction-free experience.

## Skins

A skin is the visual style of the player. Fluent Player’s **built-in presets** use these **six skin types**:

| Skin | Description | Typical use |
|------|-------------|-------------|
| **Classic** | Traditional layout with a full control bar | Default preset |
| **Modern** | Sleek bottom bar; settings menu for speed/quality | Modern (`course`) preset |
| **Simple** | Reduced chrome — play, progress, fullscreen | Simple preset |
| **Standard** | Classic-style with prominent bar and chapters | Standard preset |
| **Floating** | Controls float over the video with a translucent bar | Floating preset |
| **Minimal** | Almost no UI; large center play/pause | Minimal and Ambient presets (Ambient adds special behaviors in the preset) |

The skin is set in the [preset](/guide/customize/presets) and can be overridden per media.

## Controls

Controls are the individual buttons and elements on the player. You can turn each one on or off independently.

Here is every control you can configure:

| Control | What it does |
|---------|--------------|
| **Play / Pause** | The main play button in the control bar |
| **Center play** | Large play button overlaid on the video (click the video to play) |
| **Backward** | Skip backward (for example, 10 seconds) |
| **Forward** | Skip forward (for example, 10 seconds) |
| **Progress bar** | Seekable timeline showing how much has been watched |
| **Current time** | Displays elapsed time and total duration |
| **Volume** | Volume slider and mute button |
| **Playback speed** | Let viewers watch at 0.5x, 1x, 1.5x, 2x, etc. (may be inside **Settings** when that menu is on) |
| **Fullscreen** | Toggle fullscreen mode |
| **PIP** | Picture-in-picture: detach the video into a floating mini-player |
| **Captions toggle** | Show/hide subtitles (if [subtitle tracks](/guide/videos-and-media/subtitles) are added) |
| **Chapters** | Chapter markers and menu (if chapters are configured) |
| **Settings** | Settings menu (quality, speed, accessibility, etc., depending on source) |
| **Quality** | Quality / resolution menu for **HLS** sources ([Mux](/guide/integrations/mux), [Bunny Stream](/guide/integrations/bunnycdn-stream), or `.m3u8` URLs). Appears as its own control when the **Settings** menu is **off**; when **Settings** is **on**, quality is nested inside that menu instead of duplicating a separate button. |

### Settings menu: captions and accessibility

When **Settings** is enabled:

- **Captions** — If the media has [subtitle tracks](/guide/videos-and-media/subtitles), viewers can open the settings menu and choose which subtitle track to show (in addition to the main **Captions toggle** on the bar, when visible).
- **Accessibility** — An **Accessibility** subsection can include:
  - **Announcements** — Screen reader announcements for player actions.
  - **Keyboard animations** — Visual feedback when using keyboard shortcuts.

### Playlist and grid controls (when applicable)

- **Playlist toggle** — On [playlist](/guide/playlists/) embeds, a control can show or hide the **playlist sidebar** without leaving the page.
- **Info toggle** — In **Grid** layout with **modal** display (see [Playlist Layouts](/guide/playlists/playlist-layouts)), an **info** control may appear to open extra details in the modal.

### Live streams

For sources marked as **live** (for example [Mux Live](/guide/integrations/mux)), the control bar shows a **LIVE** indicator (often a pulsing dot and label) so viewers know the stream is live.

### Control bar blur (Standard and Floating skins)

The **Standard** and **Floating** presets can apply a **frosted-glass** style blur to the control bar background (`control_bar_blur` in preset data). That softens the bar against the video. See [Presets](/guide/customize/presets) for which presets use it.

## How to configure controls

**Via preset:**

Each preset defines which controls are enabled. For example, the **Simple** preset has only play, progress, and fullscreen enabled.

If you are using Pro, you can create a [custom preset](/guide/customize/presets) with exactly the controls you want.

**Per media:**

When editing a media item, you can override the preset's controls. For example, if your preset has PIP enabled but you want to hide it for one video, you can turn it off in the media editor.

### Hide whole control regions

You can hide entire regions for a cleaner look (per preset or media):

- **Hide top controls** — Hides controls at the top of the player (e.g. title bar).
- **Hide center controls** — Hides the large center play overlay.
- **Hide bottom controls** — Hides the bottom control bar entirely.

This is stronger than turning off individual buttons — it removes the whole area. The **Ambient** preset uses these flags in its defaults for background-style playback.

## Touch gestures (mobile and touch screens)

On touch devices, Fluent Player supports gestures in addition to the control bar:

| Gesture | What happens |
|---------|----------------|
| **Single tap** | Toggles play/pause or shows and hides controls (standard mobile pattern). |
| **Double-tap left** | Seeks **back** about 10 seconds. |
| **Double-tap right** | Seeks **forward** about 10 seconds. |
| **Double-tap (center area)** | May toggle **fullscreen** depending on skin and focus. |

These work automatically where touch input is available — no extra setting is required.

## Next steps

- [Presets](/guide/customize/presets) — All seven built-in presets and their default skins.
- [Player Behaviors](/guide/customize/behaviors) — Autoplay, resume, hiding whole control regions.
- [Feature Catalog](/reference/feature-catalog) — Quick mapping of presets to skins.
