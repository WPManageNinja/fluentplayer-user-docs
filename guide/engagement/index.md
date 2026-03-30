---
prev:
  text: 'Interactive Layers'
  link: '/guide/block-editor/interactive-layers'
next:
  text: 'Email Capture Overlay'
  link: '/guide/engagement/email-capture'
---

# Engagement & Conversion

Fluent Player includes a set of overlay tools designed to turn passive viewers into active leads and customers. These tools go beyond appearance — they directly drive email signups, clicks, and conversions without your viewers leaving the video.

## What you can do

| Feature | What it does |
|---------|-------------|
| [Email Capture Overlay](/guide/engagement/email-capture) | Pause the video at a set point and ask the viewer for their email address before they can continue watching |
| [CTA and Action Bar](/guide/engagement/cta-and-action-bar) | Show a call-to-action popup or a slim message bar at any point during playback |
| [Email Providers](/guide/engagement/email-providers) | Connect FluentCRM, Mailchimp, or a custom webhook to receive captured emails |

## How engagement features work

All engagement overlays are configured either at the **preset level** (applying to every video that uses that preset) or **per media** (for a specific video only). The per-media setting always wins if both are configured.

**The priority order:**

```
Per-media setting → Preset setting → No overlay shown
```

## Where to configure

1. **Preset level** — Go to **Fluent Player → Settings** and open your preset. Any engagement overlays you configure here apply to every video using that preset.
2. **Per-media level** — Go to **Fluent Player → Media**, open a media item, and configure the overlay in the **Interactive Layers** panel. This overrides the preset for that video only.

## Next steps

- [Email Capture Overlay](/guide/engagement/email-capture) — Set up the email gate and grow your list.
- [CTA and Action Bar](/guide/engagement/cta-and-action-bar) — Drive clicks and conversions with overlay prompts.
- [Email Providers](/guide/engagement/email-providers) — Connect your CRM or email marketing platform.
