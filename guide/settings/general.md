# General Settings

The General section controls site-wide defaults that apply to every player unless overridden by a preset or a per-media setting.

## Options

### Default preset

A visual grid displays all available presets. The selected preset has a checkmark and a highlighted border. This becomes the default appearance for every new media item on your site.

Available built-in presets:

| Preset | Character |
|--------|-----------|
| **Default** | Balanced layout, standard controls |
| **Modern** | Rounded corners, floating controls |
| **Simple** | Minimal UI, clean and distraction-free |
| **Standard** | Classic bar layout |
| **Floating** | Control bar floats over the video |
| **Minimal** | Bare-bones controls |
| **Ambient** | Background loops — muted autoplay, hidden controls, tuned for ambient video use |

![General Settings](/guide/public/settings/general/general-settings-1.webp)

::: tip
Changing the default preset does **not** affect media items that already have an explicit preset assigned. It only applies to new media or media with no preset override.
:::


### Default aspect ratio

A dropdown that sets the aspect ratio for all players (for example **Original**, **16:9**, **4:3**). Individual media items or blocks can override this.


### Auto resume playback

**Checkbox:** Enable Auto Resume Playback — *"Let your users resume watching from where they left off."*

When this global toggle is on, Fluent Player Pro stores playback position in the viewer's browser. The next time they open the page with that video, it starts from where they stopped.

![General Settings](/guide/public/settings/general/general-settings-2.webp)

::: info
This is the **global** toggle. The corresponding per-embed control in the block sidebar (**Block** tab → **General Settings**) is labeled **Remember Playback Position**. Both need to be enabled for resume to work on a specific embed.
:::

::: tip
Position is stored in the viewer's browser. Switching devices or clearing browser data will reset it.
:::



### Custom CSS

A text area for global CSS that applies to every Fluent Player instance on your site. The UI suggests scoping your rules:

```css
.fluent-player {
  /* your overrides here */
}
```

Use this for minor tweaks not covered by presets (for example, adjusting progress bar height or tooltip colors). For larger style changes, consider creating or editing a [preset](/guide/customize/presets) instead.


### Custom JavaScript

A **Custom JS** field (code editor) lets you add site-wide JavaScript that runs in the context of Fluent Player on your pages. Use it only when you need small scripted behaviors that the UI does not expose — and **test thoroughly** on staging first.

![General Settings](/guide/public/settings/general/general-settings-3.webp)

::: warning
Custom JavaScript can affect performance and security. Avoid pasting untrusted code. Prefer [presets](/guide/customize/presets), [behaviors](/guide/customize/behaviors), and built-in integrations before relying on global JS.
:::

## Saving changes

Click **Save Settings** (top right of the General panel) after making changes. Settings take effect immediately for new page loads.
