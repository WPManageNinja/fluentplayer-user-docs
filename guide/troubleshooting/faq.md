---
prev:
  text: 'Common Issues & Fixes'
  link: '/guide/troubleshooting/'
next:
  text: 'Reference Overview'
  link: '/reference/'
---

# Frequently Asked Questions

Quick answers to the most common questions about Fluent Player.

---

## General

### What is the difference between the Free and Pro versions?

The Free version includes core video playback with self-hosted files, YouTube, Vimeo, external URLs, shortcodes, Gutenberg blocks, subtitles, multiple audio languages, six built-in presets, basic email capture (with FluentCRM), and the public player URL.

The Pro version adds playlists, custom presets, Mux integration, Bunny Stream & Bunny Storage integration, Mailchimp and Webhook email providers, Built-in Analytics, Timed Content, and data export.

See the [What is Fluent Player?](/guide/) page for a full Free vs Pro comparison table.

---

### Does Fluent Player host my videos?

No. Fluent Player is a **player** — it plays videos that are hosted elsewhere. You can use:
- Your WordPress Media Library (hosted on your own server or with a storage service)
- [Bunny Stream or Bunny Storage](/guide/integrations/bunnycdn-stream) (Pro)
- [Mux](/guide/integrations/mux) (Pro)
- External URLs (YouTube, Vimeo, direct MP4 links, etc.)

---

### Is Fluent Player compatible with my page builder?

Fluent Player works via the `[fluentplayer]` shortcode and the native WordPress (Gutenberg) block. Shortcodes work in virtually all page builders. If you encounter an issue with a specific builder, see [Common Issues & Fixes](/guide/troubleshooting/).

---

### Which WordPress version is required?

Fluent Player requires WordPress **6.3 or higher** and PHP **7.4 or higher**. We recommend using the latest stable release of both.

---

## Embedding

### What is the difference between the shortcode and the block?

The **shortcode** (`[fluentplayer id="123"]`) works anywhere shortcodes are accepted — classic editor, page builders, widgets, and PHP templates. The **Gutenberg block** only works in the WordPress block editor but offers a richer preview and no-code configuration. Both display the same player on the front end.

See [Shortcode Embed](/guide/display-embed/shortcode) and [Gutenberg Block](/guide/display-embed/block) for details.

---

### Can I embed the same video on multiple pages?

Yes. Copy the shortcode or block for any media item and paste it anywhere on your site. Each embed is independent — the same video can appear on as many pages as you need.

---

### What is the Dedicated Player URL?

Every media item in Fluent Player gets a standalone URL (for example, `/fluent-player/my-video-title/`) that shows the player on its own page. This is useful for sharing a direct link to a video without embedding it inside a post.

See [Dedicated Player URL](/guide/display-embed/dedicated-player-url) for how it works and how to control who can access it.

---

## Presets and Customization

### How many presets can I use?

Fluent Player ships with **seven built-in presets** (Default, Modern, Simple, Standard, Floating, Minimal, Ambient). With Pro, you can create an unlimited number of **custom presets** on top of the seven built-ins.

See [Presets](/guide/customize/presets) for a full breakdown of each built-in preset.

---

### Can I change the player color?

Yes. The **brand color** applies to the progress bar, active controls, and accent elements across the player. Set it globally under **Fluent Player → Settings → Branding**, or override it per-media using the Branding panel in the block editor.

See [Captions and Branding](/guide/customize/captions-and-branding).

---

### Can I hide specific player controls?

Yes. When [creating a custom preset](/guide/customize/creating-custom-presets), you can toggle individual controls on or off — such as the fullscreen button, playback speed, PIP (picture-in-picture), and more. Control visibility can be set at the preset level or overridden per video.

---

## Email Capture

### Where do captured emails go?

Captured emails are sent to whichever [email provider](/guide/engagement/email-providers) you have configured — FluentCRM (Free), Mailchimp (Pro), or a custom Webhook (Pro). You must connect at least one provider before the email capture overlay can deliver emails.

---

### Can I export the captured emails?

Yes. With Fluent Player Pro, go to **Fluent Player → Settings → Export** to download captured email data as a CSV, JSON, or ODS file. See [Export Data](/guide/settings/export).

---

### Can I show the email gate to some viewers but not others?

Yes. The **"Skip if CRM contact"** option suppresses the email gate for viewers who are already contacts in FluentCRM. This prevents your existing subscribers from seeing the gate every time they watch a video.

---

## Analytics

### Does the free version include analytics?

The free version does not include the Built-in Analytics dashboard. You can still connect **Google Analytics** on the free plan — Fluent Player fires GA4 events automatically once you add your Measurement ID.

See [Google Analytics integration](/guide/integrations/google-analytics).

---

### Why are my view counts lower than expected?

Fluent Player applies a short cooldown period per viewer per video to prevent inflating view counts with rapid page reloads. Multiple views from the same viewer in quick succession will be rate-limited by design.

---

## Playlists (Pro)

### How do I create a playlist?

Go to **Fluent Player → Playlists → Add Playlist**, give it a name, and add media items from your media library. See [Creating a Playlist](/guide/playlists/creating-playlists) for the full step-by-step guide.

---

### What playlist layouts are available?

Fluent Player Pro includes three layouts: **Standard** (player + sidebar list), **Learning** (course-style with progress tracking), and **Grid** (thumbnail grid overview). See [Playlist Layouts](/guide/playlists/playlist-layouts) for a comparison.

---

## Next steps

- [Common Issues & Fixes](/guide/troubleshooting/) — Specific symptoms and resolutions.
- [Feature Catalog](/reference/feature-catalog) — Complete list of all features.
- [Plugin Overview (Technical)](/reference/plugin-overview) — Architecture, hooks, and REST API reference.
