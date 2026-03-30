# General Settings

**Fluent Player → Settings → General**

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

::: tip
Changing the default preset does **not** affect media items that already have an explicit preset assigned. It only applies to new media or media with no preset override.
:::

**Related:** [Presets](/guide/customize/presets)

---

### Default aspect ratio

A dropdown that sets the aspect ratio for all players (for example **Original**, **16:9**, **4:3**). Individual media items or blocks can override this.

---

### Auto resume playback

**Checkbox:** Enable Auto Resume Playback — *"Let your users resume watching from where they left off."*

When this global toggle is on, Fluent Player Pro stores playback position in the viewer's browser. The next time they open the page with that video, it starts from where they stopped.

::: info
This is the **global** toggle. The corresponding per-embed control in the block sidebar (**Block** tab → **General Settings**) is labeled **Remember Playback Position**. Both need to be enabled for resume to work on a specific embed.
:::

::: tip
Position is stored in the viewer's browser. Switching devices or clearing browser data will reset it.
:::

**Related:** [Player Behaviors](/guide/customize/behaviors)

---

### Custom CSS

A text area for global CSS that applies to every Fluent Player instance on your site. The UI suggests scoping your rules:

```css
.fluent-player {
  /* your overrides here */
}
```

Use this for minor tweaks not covered by presets (for example, adjusting progress bar height or tooltip colors). For larger style changes, consider creating or editing a [preset](/guide/customize/presets) instead.

---

### Custom JavaScript

A **Custom JS** field (code editor) lets you add site-wide JavaScript that runs in the context of Fluent Player on your pages. Use it only when you need small scripted behaviors that the UI does not expose — and **test thoroughly** on staging first.

::: warning
Custom JavaScript can affect performance and security. Avoid pasting untrusted code. Prefer [presets](/guide/customize/presets), [behaviors](/guide/customize/behaviors), and built-in integrations before relying on global JS.
:::

---

### Remove data on uninstall

If you enable **Remove data on uninstall**, Fluent Player deletes its stored settings and related data from the database when the plugin is **deleted** from WordPress (not merely deactivated). Leave this **off** if you might reinstall later and want to keep your configuration.

---

### Global email capture defaults

Under the **email capture** section in Settings (when available in your version), you can set **site-wide defaults** for the [email capture overlay](/guide/engagement/email-capture):

- **Enable** or disable email capture globally as a default.
- **Form position** — for example whether the gate appears **before** or **after** a time-based cue (aligned with your per-media overlay workflow).
- **Delay seconds** — default delay before showing the overlay, where the UI supports it.

Per-media and per-block settings can still override these defaults. See [Email Capture Overlay](/guide/engagement/email-capture) for the full overlay setup.

---

## Saving changes

Click **Save Settings** (top right of the General panel) after making changes. Settings take effect immediately for new page loads.

## Next steps

- [Performance Settings](/guide/settings/performance) — Dynamic JS loading and performance-related options.
- [Presets](/guide/customize/presets) — Create and manage player presets.
- [Player Behaviors](/guide/customize/behaviors) — Autoplay, save position, and end-of-video behavior.
- [Branding Settings](/guide/settings/branding) — Brand color, control bar, and logo.
- [Settings Overview](/guide/settings/) — All settings sections at a glance.
