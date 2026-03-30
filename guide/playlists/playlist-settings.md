# Playlist Appearance, Spacing, and Behavior

After you choose a [playlist layout](/guide/playlists/playlist-layouts), Fluent Player Pro lets you fine-tune how the playlist **looks** and **behaves** on the front end — colors, typography, spacing, thumbnails, autoplay, and more. These settings apply to the playlist container and list/grid around the player, not to the inner video player controls (those follow each media item’s [preset](/guide/customize/presets)).

## Where to find these options

Edit your playlist under **Fluent Player → Playlists**, then open the sections for **Appearance**, **Typography**, **Spacing**, and **Behavior** (labels may be grouped slightly differently depending on your plugin version). Save the playlist when you are done.

---

## Appearance

Control the playlist frame’s colors and shadow so it matches your site.

| Setting | What it does |
|---------|----------------|
| **Background color** | Background behind the playlist list or grid (default is typically white `#ffffff`). |
| **Text color** | Color for titles and labels in the playlist UI (default often a dark gray `#333333`). |
| **Brand color** | Use the **global** brand color from [Branding settings](/guide/settings/branding), or set a **custom** color just for this playlist (accents, highlights). |
| **Border radius** | How rounded the playlist container corners are (value + unit, e.g. `8px`). |
| **Box shadow** | Optional shadow: enable/disable, offset, blur, spread, color, and whether it is **outline** or **inset**. Defaults are often a subtle shadow for depth. |

---

## Typography

Optional overrides for playlist text (titles, labels).

| Setting | What it does |
|---------|----------------|
| **Enable typography** | When on, the font size, weight, and line height below apply to playlist text. When off, theme defaults apply. |
| **Font size** | Size with unit (e.g. `px`, `rem`). |
| **Font weight** | How bold the text appears. |
| **Line height** | Vertical spacing between lines for multi-line titles. |

---

## Spacing

Adjust **margin** and **padding** around the playlist block. You can set **top**, **right**, **bottom**, and **left** independently, with a **linked** mode so all sides use the same value when you want even spacing.

Use this to align the playlist with your page grid or to add breathing room between the playlist and surrounding content.

---

## Behavior and display (list/grid)

These options control how viewers interact with the playlist and what they see in the sidebar or grid.

| Setting | What it does |
|---------|----------------|
| **Show thumbnails** | Show or hide thumbnail images next to each item (when thumbnails exist). |
| **Show thumbnail info** | Show or hide extra info on thumbnails (for example title or duration overlays). |
| **Title position** | Whether the video title appears **on the thumbnail** (overlay) or **below** it. |
| **Autoplay** | Playlist-level autoplay behavior (separate from per-media autoplay in the [player behaviors](/guide/customize/behaviors)). |
| **Continuous play** | When the current video ends, automatically start the **next** video in the playlist. |
| **Loop** | After the last video finishes, jump back to the **first** video. |
| **Keyboard controls** | Allow keyboard navigation within the playlist UI (for example moving between items). |
| **Touch gestures** | Touch-friendly gestures for the playlist on phones and tablets. |

Not every option appears for every layout. For example, **Grid** layout has additional controls described in [Playlist Layouts](/guide/playlists/playlist-layouts).

---

## How this fits your workflow

1. [Create a playlist](/guide/playlists/creating-playlists) and add videos.
2. Pick a **layout** (Standard, Learning, or Grid) in [Playlist Layouts](/guide/playlists/playlist-layouts).
3. Adjust **sidebar position**, **grid mode**, and layout-specific options on the layouts page.
4. Use **this page** as a checklist for colors, type, spacing, and playback behavior.
5. [Embed the playlist](/guide/playlists/embed-playlist) on a page and review on desktop and mobile.

## Next steps

- [Playlist Layouts](/guide/playlists/playlist-layouts) — Standard, Learning, Grid, sidebar, and grid modal options.
- [Embed a Playlist](/guide/playlists/embed-playlist) — Shortcode and block.
- [Branding Settings](/guide/settings/branding) — Global brand color and logo.
