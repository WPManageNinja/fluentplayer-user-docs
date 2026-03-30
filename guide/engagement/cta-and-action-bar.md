---
prev:
  text: 'Email Capture Overlay'
  link: '/guide/engagement/email-capture'
next:
  text: 'Email Providers'
  link: '/guide/engagement/email-providers'
---

# CTA and Action Bar

Fluent Player includes two overlay features designed to drive engagement and conversions during playback: the **CTA (call-to-action) overlay** and the **action bar**. Both appear on the player at specific moments and can be configured independently or used together.

---

## CTA Overlay

The CTA overlay is a popup that appears over the video to prompt the viewer to take an action — like visiting a link, signing up, or watching another video.

### How it works

At a configured point during playback — or at the end of the video — the player pauses and shows a full overlay with a headline, description, and a button. The video does not resume until the viewer clicks the button or dismisses the overlay (if skipping is allowed).

### Configuration options

| Option | Description | Example |
|--------|-------------|---------|
| **Enabled** | Turn the CTA overlay on or off | On |
| **Percentage** | When to show it (% of video watched) | `80` |
| **Show at end** | Show when the video finishes instead of at a percentage | On |
| **Allow skip** | Let the viewer dismiss the overlay without clicking the button | On |
| **Headline** | Main heading text | "Ready to take the next step?" |
| **Description** | Supporting text below the headline | "Click the button below to learn more." |
| **Button text** | Button label | "Learn More" |
| **Button link** | Where the button goes (URL) | `https://example.com/pricing` |
| **Open in new tab** | Open the link in a new browser tab | On |
| **Button background color** | Button fill color | `#4e9cf6` |
| **Button text color** | Button label color | `#ffffff` |
| **Border radius** | Button corner roundness (px) | `4` |

### Example: end-of-video upsell

You have a product demo and want to direct viewers to your pricing page after they finish watching:

- **Show at end:** On
- **Headline:** "Like what you see?"
- **Description:** "Start your free trial today."
- **Button text:** "Get Started"
- **Button link:** `https://example.com/signup`

---

## Action Bar

The action bar is a **slim bar** that appears at the top or bottom of the player. It shows a text message and an optional button. Unlike the CTA overlay, the action bar does not pause the video — it slides in while playback continues.

### How it works

At a configured point during playback, a bar slides into view with your message. The viewer can interact with it or close it, while the video keeps playing in the background.

### Configuration options

| Option | Description | Example |
|--------|-------------|---------|
| **Enabled** | Turn the action bar on or off | On |
| **Position** | Where the bar appears on the player | `bottom` |
| **Text** | The message to display | "Like this content?" |
| **Text size** | Font size in pixels | `20` |
| **Background color** | Bar background | `rgba(0,0,0,0.8)` |
| **Button type** | Type of button: none, link, YouTube subscribe | `link` |
| **Button text** | Button label | "Click Here" |
| **Button link** | Where the button goes | `https://example.com` |
| **Open in new tab** | Open the link in a new tab | On |
| **Button color** | Button background | `#4e9cf6` |
| **Button text color** | Button label color | `#ffffff` |
| **YouTube channel** | Your channel URL (when button type is subscribe) | `https://youtube.com/@yourchannel` |
| **Show close** | Let the viewer close the bar | On |
| **Percentage start** | When the bar appears (% of video) | `0` (from the start) |

### Example: YouTube subscribe prompt

You embed YouTube videos and want to encourage viewers to subscribe:

- **Text:** "Enjoying this video?"
- **Button type:** YouTube subscribe
- **YouTube channel:** `https://youtube.com/@yourchannel`
- **Show close:** On
- **Position:** bottom

### Example: promotional banner

You want to show a limited-time offer while the viewer watches:

- **Text:** "Limited time: 30% off all courses"
- **Button text:** "Claim Offer"
- **Button link:** `https://example.com/sale`
- **Percentage start:** `20` (appears after 20% of the video is watched)

---

## CTA vs Action Bar — which one to use?

| | CTA Overlay | Action Bar |
|---|-------------|------------|
| Appearance | Full overlay covering the video | Slim bar at top or bottom |
| Pauses video? | Yes | No |
| Intrusiveness | High — demands immediate attention | Low — subtle and non-blocking |
| Best for | End-of-video prompts, hard CTAs | Soft prompts, ongoing offers, subscribe buttons |

You can use both at the same time. A common pattern is an action bar that slides in early with a soft message, plus a CTA overlay that triggers at the end of the video with a direct offer.

## Where to configure

Both are configured under **Interactive Layers** in the block editor — either in a [preset](/guide/customize/presets) (applies to all videos using that preset) or per media (for a specific video only).

## Other layer types

Depending on your version of Fluent Player, the layer system also includes:

- **Hotspots** — Clickable icons or points over the video (for example, product pins).
- **Ad layers** — Inline image or video ads inside the player timeline.
- **Form layers** — When **Fluent Forms** is installed, you can embed a Fluent Forms form directly inside the player.

These use the same preset/media configuration approach as the CTA and action bar. See the [Feature Catalog](/reference/feature-catalog) for a full list.

## Next steps

- [Email Capture Overlay](/guide/engagement/email-capture) — Gate the video behind an email form.
- [Presets](/guide/customize/presets) — Configure overlays at the preset level so they apply to multiple videos.
- [Captions and Branding](/guide/customize/captions-and-branding) — Style the player's visual identity.
