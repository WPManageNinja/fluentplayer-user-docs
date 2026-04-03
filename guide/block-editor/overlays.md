---
title: "Text & button overlays (Block sidebar)"
description: "Timed text and button overlays on the video: add overlays, timing, links, styling, and how they differ from Interactive layers."
---

# Text & button overlays (Block sidebar)

**Location:** **Block** tab → **Text/Button Overlays** (or similarly named panel).

These are **timed overlays** that appear **on top of the video** for a window of time—text, optional **link**, styling, and sometimes **motion**. They differ from **[Interactive layers](/guide/block-editor/interactive-layers)** (forms, CTAs as layers) but can work alongside them.

## Add an overlay

1. Click **+ Add Overlay** (opens **Add Video Overlay** or similar).
2. Configure the fields below.
3. Save or confirm to add it to the list; repeat for multiple overlays.

## Overlay fields (typical)

| Field | Purpose |
|-------|---------|
| **Start time** | When the overlay **appears** (synced to playback time). |
| **Duration** | How many **seconds** the overlay stays visible. |
| **Text** | Main copy (may support basic formatting depending on version). |
| **Link URL** | Optional URL when the viewer clicks the overlay. |
| **Dynamic position** | When enabled, the overlay may **move** on an interval (attention-grabbing; use sparingly). |
| **Position** | Fixed corner or region (e.g. top-left, bottom-right) when not using dynamic position. |
| **Background color** | Backing color behind text (often rgba). |
| **Text color** | Foreground color. |

Default title for a new overlay may show as **Untitled Overlay** until you rename it (if your UI supports names per overlay).

## Ordering and overlap

- Multiple overlays can exist; **start time + duration** define visibility.
- If two overlays overlap in time, **stacking order** follows the list or z-index rules in your build—avoid overlapping critical CTAs in the same region.

## Next steps

- [Interactive Layers](/guide/block-editor/interactive-layers) — Add forms, email capture, hotspots, and richer interactive elements.
- [CTA and Action Bar](/guide/engagement/cta-and-action-bar) — Full-screen CTA popups and slim message bars.
- [Email Capture Overlay](/guide/engagement/email-capture) — Gate the video behind an email form.
