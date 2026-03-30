# Captions and Branding

::: tip Live preview (Settings → Branding)
On **Fluent Player Pro → Settings → Branding**, the right side shows a **Live Interactive Preview** of the player so you can see **brand color** and **control bar color** changes immediately before saving. See [Branding Settings](/guide/settings/branding) for the full options reference.
:::

Make the player feel like it belongs on your site. Fluent Player lets you style **captions** (subtitles) and add **branding** elements like a brand color and logo.

## Caption styling

When you add [subtitles](/guide/videos-and-media/subtitles) to a video, the caption text appears on screen during playback. You can customize how it looks:

| Setting | What it does | Example |
|---------|-------------|---------|
| **Font size** | Size of the caption text | `16` (px) |
| **Background** | Background behind the text | `rgba(0,0,0,0.8)` (semi-transparent black) |
| **Color** | Text color | `#ffffff` (white) |

### Where to configure caption style

- In the **preset** — Affects all media using that preset.
- **Per media** — Override for a specific video.

The settings are usually under a **Styles** or **Captions** section in the preset or media editor.

### Example

**Default look:** White text on a dark semi-transparent background — easy to read on any video.

**High contrast:** Bump the font size to `20`, use a solid black background `rgba(0,0,0,1)`, and bright white text — good for accessibility.

**Subtle look:** Smaller font size `14`, lighter background `rgba(0,0,0,0.5)` — less intrusive for stylish videos.

::: tip
Make sure your captions are readable. Good contrast between text color and background is important for accessibility. Avoid very small font sizes.
:::

## Brand color

The **brand color** is the accent color used throughout the player — the progress bar, some button highlights, and other interactive elements.

### Where to set the brand color

**Global default:**

1. Go to **Fluent Player → Settings → Branding**.
2. Find the **Brand color** option.
3. Pick a color (for example, `#2597D0`).
4. Save.

This sets the default for all players on your site.

**Per preset:** Each preset can have its own brand color under the **Styles** section.

**Per media:** When editing a media item, you can override the brand color just for that video.

### Example

Your website's primary color is `#FF6B35` (orange). Set this as the brand color so the player's progress bar and interactive elements match your site's design.

## Logo (global branding)

You can add a **logo** to the player — a small image that appears in a corner. This is great for brand recognition or watermarking.

### Where to configure the logo

1. Go to **Fluent Player → Settings → Branding**.
2. Configure:

| Setting | What it does | Example |
|---------|-------------|---------|
| **Logo URL** | URL of the logo image | `https://yoursite.com/logo.png` |
| **Logo link** | URL to open when the logo is clicked | `https://yoursite.com` |
| **Logo position** | Where the logo appears on the player | `position-bottom-right` |

The logo appears on **all players** on your site (it is a global setting). If the viewer clicks the logo, it opens the logo link.

### Example

You want your company logo in the bottom-right corner of every video, linking to your homepage:

- **Logo URL:** `https://yoursite.com/wp-content/uploads/logo-small.png`
- **Logo link:** `https://yoursite.com`
- **Logo position:** bottom-right

::: tip
Use a small, semi-transparent logo so it does not distract from the video. A PNG with transparency works best.
:::

## Next steps

- [Subtitles](/guide/videos-and-media/subtitles) — Add subtitle tracks to your videos.
- [Skins and Controls](/guide/customize/skins-and-controls) — Make sure the captions toggle is enabled so viewers can turn subtitles on and off.
- [Presets](/guide/customize/presets) — Set branding and caption styles at the preset level.
- [Branding Settings](/guide/settings/branding) — All branding options with Live Interactive Preview.
- [General Settings](/guide/settings/general) — Default preset and custom CSS.
