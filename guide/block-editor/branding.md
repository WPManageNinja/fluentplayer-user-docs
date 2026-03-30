# Branding (Block sidebar)

**Location:** Select the FluentPlayer Media block → right sidebar → **Block** tab → **Branding** panel.

This panel controls **whether this player uses custom branding** and, when enabled, **logo and colors** for **this media or embed**. It can **override** [global branding in Settings](/guide/settings/branding).

## Use custom branding

| Control | Purpose |
|---------|---------|
| **Use custom branding** (toggle) | When **off**, the player uses **global** branding from **Fluent Player → Settings → Branding** (and preset defaults). When **on**, the fields below apply to **this** configuration only. |

Turn it on when a single video needs a different logo or colors than the rest of the site.

## When custom branding is on

| Control | Detail |
|---------|--------|
| **Logo** | Upload or replace a **logo image** shown on the player (often PNG with transparency). May show minimum size hints in the UI. |
| **Brand color** | Accent color (progress bar, highlights). Overrides the global brand color for this player when custom branding is enabled. |
| **Control bar color** | Background of the bottom control bar; can be a solid or semi-transparent value. |

The **dedicated media editor** may show a **live preview** in other parts of the app; in the block sidebar you are still editing the same underlying settings.

## Interaction with Settings and presets

- **Global:** [Settings → Branding](/guide/settings/branding) sets defaults for the whole site.
- **Preset:** Each [preset](/guide/customize/presets) can carry its own style; **Block → Preset** chooses which preset applies.
- **This panel:** Wins for **logo and colors** when **Use custom branding** is on and values are set.

## Common workflows

1. **One campaign video with different colors** — Enable custom branding; set brand and control bar colors; save.
2. **Watermark only on one video** — Enable custom branding; upload logo; set position if exposed in your UI.

## Next steps

- [Captions and Branding](/guide/customize/captions-and-branding) — Set site-wide caption styling and brand color globally.
- [General Settings](/guide/block-editor/general-settings) — Configure title, poster image, and playback options for this video.
- [Settings → Branding](/guide/settings/branding) — Set the global defaults that this panel can override.
