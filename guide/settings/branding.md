# Branding Settings

The Branding section controls the global visual identity of every player on your site — accent color, control bar, and logo. The screen includes a **Live Interactive Preview** on the right side so you can see changes in real time before saving.

## Live Interactive Preview

When the Branding settings panel is open, a fully functional mini player is displayed on the right. Changes to brand color and control bar color are reflected immediately in the preview — no need to save first to see the effect.

## Options

### Brand color

The primary accent color used throughout the player — the progress bar fill, some button highlights, and other interactive elements.

**Example:** If your website's primary color is `#FF6B35` (orange), set this here so the progress bar and interactive controls match your site branding.

Per preset and per media overrides exist for cases where a single video needs a different accent color. See [Presets](/guide/customize/presets).


### Control bar color

The background color of the bottom control bar (can be semi transparent using an rgba value or a hex color).

### Logo image

Upload a logo (PNG or JPEG) that appears as a watermark overlay on the player. The UI notes the recommended minimum size — use a small, compact logo so it does not distract from the video.

::: tip
Use a PNG with a transparent background so the logo blends naturally on top of video content.
:::

### Logo link (optional)

A URL that opens when a viewer clicks the logo. Leave blank if you do not want the logo to be clickable.

**Example:** `https://yoursite.com`

### Logo position

Choose which corner the logo appears in. In the database these map to values such as **top left**, **top right**, **bottom left**, and **bottom right** (internally prefixed for the layout engine). Pick the corner that does not cover your most important video content.

The logo is a **global** setting — it appears on every player across your site.

![Branding](/guide/public/settings/branding/branding-1.webp)

## Saving changes

Click **Save Settings** after adjusting branding options. The Live Interactive Preview helps confirm the look before you save.

Global branding (logo, control bar color) can only be set site wide here in Settings → Branding.

