# General Settings

The **General** section under **Fluent Player → Settings** sets site wide defaults for every player on your site. Use it to choose the default preset and aspect ratio, enable resume playback, and add global custom CSS or JavaScript. These values apply everywhere unless a [preset](/guide/customize/presets) or a per media setting overrides them.

To open it, go to **Fluent Player → Settings** and select **General** from the inner settings sidebar. See [Settings Overview](/guide/settings/) for how global settings relate to presets and per media overrides.

## Default Preset

The preset grid shows every available player skin. The selected preset has a checkmark and a highlighted border. That choice becomes the default look and behavior for new media items that do not pick a different preset.

| Preset | Character |
|--------|-----------|
| **Default** | Balanced layout with standard controls |
| **Modern** | Rounded corners and floating controls |
| **Simple** | Minimal UI, clean and distraction free |
| **Standard** | Classic control bar layout |
| **Floating** | Control bar floats over the video |
| **Minimal** | Bare bones controls |
| **Ambient** | Muted autoplay, hidden controls, loop on end — tuned for background video |

![General Settings](/guide/public/settings/general/general-settings-1.webp)

::: tip
Changing the default preset does **not** update media that already has an explicit preset assigned. It applies to new media and to items with no preset override.
:::

You can create additional skins with [custom presets](/guide/customize/creating-custom-presets) (Pro) and set one of those as the site default here.

## Default Aspect Ratio

Use the **Default Aspect Ratio** dropdown to set how players size themselves site wide. Common options include **Original**, **16:9**, and **4:3**.

Individual media items and block embeds can override this under **Block** tab → **General Settings** when a specific video needs a different ratio.

## Auto Resume Playback

**Checkbox:** Enable Auto Resume Playback — *"Let your users resume watching from where they left off."*

When this global toggle is on, FluentPlayer Pro stores playback position in the viewer's browser. The next time they open the page with that video, it starts from where they stopped.

![General Settings](/guide/public/settings/general/general-settings-2.webp)

Resume playback works at three levels. All relevant toggles should be on for a given embed:

| Level | Where to enable |
|-------|-----------------|
| **Global** | **Settings → General** → **Enable Auto Resume Playback** |
| **Preset** | **Save play position** in the preset’s [behaviors](/guide/customize/behaviors) |
| **Per embed** | **Block** tab → **General Settings** → **Remember Playback Position** |

::: info
The global toggle in Settings and the per embed **Remember Playback Position** control work together. Enable both (plus the preset behavior when you use presets) so resume works as expected on a specific video.
:::

::: tip
Playback position is stored in the viewer’s browser. It does not carry over to another device or browser, and clearing site data will reset it.
:::

## Custom CSS


### Custom CSS

A text area for global CSS that applies to every FluentPlayer instance on your site. The UI suggests scoping your rules:

```css
.fluent-player {
  /* your overrides here */
}
```

Use this for small tweaks that presets do not cover — for example, progress bar height or tooltip colors. For larger visual changes, edit or create a [preset](/guide/customize/presets) instead of relying on global CSS alone.

If the player looks broken after a theme update, check for CSS conflicts here and in your theme before changing other settings. See [Common Issues & Fixes](/guide/troubleshooting/) for troubleshooting tips.

## Custom JavaScript

A **Custom JS** field (code editor) lets you add site-wide JavaScript that runs in the context of FluentPlayer on your pages. Use it only when you need small scripted behaviors that the UI does not expose — and **test thoroughly** on staging first.

![General Settings](/guide/public/settings/general/general-settings-3.webp)

::: warning
Custom JavaScript can affect performance and security. Do not paste untrusted code. Prefer [presets](/guide/customize/presets), [behaviors](/guide/customize/behaviors), and built in integrations before adding global JS. Test on staging before deploying to production.
:::

## Saving Changes

Click **Save Settings** in the top right of the General panel after you make changes. New page loads will use the updated defaults immediately.

Per media and block overrides still take priority. If a video does not reflect a global change, open that media item and confirm it is not overriding the setting at the preset or block level.
