# General settings (Block sidebar)

**Location:** **Block** tab → **General Settings** panel.

These options control **identity, layout, loading, and playback behavior** for this player. Many overlap with [presets](/guide/customize/presets) and [player behaviors](/guide/customize/behaviors); values here **override** preset/global defaults for this media or embed where applicable.

## Title and appearance

| Control | Purpose |
|---------|---------|
| **Title** | Display name for the video in the player UI and admin lists. |
| **Title overlay** | When enabled, shows the title in the **top** area of the player (often when paused or on hover—exact behavior matches your skin/version). |
| **Poster** | **Poster image** shown before play or as fallback. Upload or pick from the media library. |
| **Aspect ratio** | Forces a **container ratio** (for example **16:9**, **4:3**, **original**). **Original** keeps the source’s intrinsic ratio where possible. If set to **default**, global [default aspect ratio](/guide/settings/general) may apply. |

## Loading and performance

| Control | Purpose |
|---------|---------|
| **Load strategy** | Controls **when** heavy player assets load (for example lazy load vs eager). Labels vary by version; choose based on whether this embed is above the fold or in a tabbed layout. |

Use **lazy** or deferred strategies for long pages with many embeds to protect Core Web Vitals.

## Playback behavior

| Control | Purpose |
|---------|---------|
| **Autoplay mode** | Typical options: **Off**, **Autoplay**, **Muted autoplay**. Browsers often block autoplay with sound; **muted** autoplay is the reliable default for auto-start. |
| **Play inline on mobile** | Keeps playback **inside the layout** on phones instead of forcing fullscreen (where supported). |
| **Remember playback position** | Per-embed **resume**. Stores position in the viewer’s browser for this media. Works together with Pro **Enable Auto Resume Playback** in [Settings → General](/guide/settings/general)—both may need to be on for resume to behave as expected. |

See also [Player behaviors](/guide/customize/behaviors) for preset-level behavior names.

## Order of precedence (typical)

**Block / media settings → preset → [Settings](/guide/settings/) global**

Not every field exists at every level; if something is missing in the block UI, check the **active preset**.

## Next steps

- [Preset](/guide/block-editor/preset) — Choose the preset that supplies the baseline look and behavior for this video.
- [Branding](/guide/block-editor/branding) — Override the logo and colors for this specific player instance.
- [Player Behaviors](/guide/customize/behaviors) — Full guide on autoplay, muted, resume, and end-of-video behavior.
