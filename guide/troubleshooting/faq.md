---
prev:
  text: 'Common Issues & Fixes'
  link: '/troubleshooting'
next:
  text: 'Changelog'
  link: '/changelog'
---

# Frequently Asked Questions

Quick answers to the most common questions about FluentPlayer.


## General

### What is the difference between the Free and Pro versions?

The Free version includes core video playback with self-hosted files, YouTube, Vimeo, shortcodes, Gutenberg blocks, subtitles, multiple audio languages, six built-in presets, basic email capture (with FluentCRM), and the public player URL.

The Pro version adds external URLs and HLS streaming, playlists, the Ambient preset and custom presets, Mux integration, Bunny Stream & Bunny Storage integration, Mailchimp and Webhook email providers, Built in Analytics, Timed Content, and data export.

See the [What is FluentPlayer?](/introduction) page for a full Free vs Pro comparison table.


### Does FluentPlayer host my videos?

No. FluentPlayer is a **player** — it plays videos that are hosted elsewhere. You can use:
- Your WordPress Media Library (hosted on your own server or with a storage service)
- YouTube or Vimeo links
- [Bunny Stream or Bunny Storage](/bunnycdn-stream) (Pro)
- [Mux](/mux) (Pro)
- External or direct-file URLs and HLS streams (Pro)


### Is FluentPlayer compatible with my page builder?

FluentPlayer works via the `[fluentplayer]` shortcode and the native WordPress (Gutenberg) block. Shortcodes work in virtually all page builders. If you encounter an issue with a specific builder, see [Common Issues & Fixes](/troubleshooting).


### Which WordPress version is required?

FluentPlayer requires WordPress **6.0 or higher** and PHP **7.4 or higher**. We recommend using the latest stable release of both.


## Embedding

### What is the difference between the shortcode and the block?

The **shortcode** (`[fluentplayer id="123"]`) works anywhere shortcodes are accepted: classic editor, page builders, widgets, and PHP templates. The **Gutenberg block** only works in the WordPress block editor but offers a richer preview and no code configuration. Both display the same player on the front end.

See [Shortcode Embed](/shortcode) and [Gutenberg Block](/block) for details.


### Can I embed the same video on multiple pages?

Yes. Copy the shortcode or block for any media item and paste it anywhere on your site. Each embed is independent, and the same video can appear on as many pages as you need.


### What is the Dedicated Player URL?

Every media item in FluentPlayer gets a standalone URL (for example, `/fluent-player-media/my-video-title/`) that shows the player on its own page. This is useful for sharing a direct link to a video without embedding it inside a post.

See [Dedicated Player URL](/dedicated-player-url) for how it works and how to control who can access it.


## Presets and Customization

### How many presets can I use?

FluentPlayer ships with **seven built-in presets** — six free (Default, Modern, Simple, Standard, Floating, Minimal) plus the Pro-only **Ambient** preset. With Pro, you can also create an unlimited number of **custom presets** on top of the built-ins.

See [Presets](/presets) for a full breakdown of each built in preset.


### Can I change the player color?

Yes. The **brand color** applies to the progress bar, active controls, and accent elements across the player. Set it globally under **FluentPlayer → Settings → Branding**, or override it per-media using the Branding panel in the block editor.

See [Branding & Appearance](/branding-appearance) and [Settings → Branding](/branding).


### Can I hide specific player controls?

Yes. When [creating a custom preset](/creating-custom-presets), you can toggle individual controls on or off, such as the fullscreen button, playback speed, PIP (picture-in-picture), and more. Control visibility can be set at the preset level or overridden per video.


## Email Capture

### Where do captured emails go?

Captured emails are sent to whichever [email provider](/email-providers) you have configured: FluentCRM (Free), Mailchimp (Pro), or a custom Webhook (Pro). You must connect at least one provider before the email capture overlay can deliver emails.


### Can I export the captured emails?

Yes. With FluentPlayer Pro, go to **FluentPlayer → Settings → Export** to download captured email data as a CSV, JSON, or ODS file. See [Export Data](/export).


### Can I show the email gate to some viewers but not others?

Yes. The **"Skip if CRM contact"** option suppresses the email gate for viewers who are already contacts in FluentCRM. This prevents your existing subscribers from seeing the gate every time they watch a video.


### What stops spam or duplicate email submissions?

Two safeguards run automatically:

- **Rate limiting** — A guest (logged-out) visitor can submit at most **3 times per 5 minutes** from the same IP address. Rapid repeat submissions beyond that are rejected. (Developers can adjust this with the `fluent_player/email_submission_rate_limit_max_attempts` and `…_window` filters.)
- **Duplicate prevention** — If the same email is submitted again, FluentPlayer updates the existing record instead of creating a duplicate, and it does not re-trigger your providers for that repeat submission.

---

## Analytics

### Does the free version include analytics?

No. The free version does not include the Built-in Analytics dashboard, and **Google Analytics** also requires **FluentPlayer Pro** — GA4 events only fire when Pro is active. On the free plan the Analytics settings show an upgrade prompt and no events are sent.

See [Google Analytics integration](/google-analytics).


### Why are my view counts lower than expected?

FluentPlayer applies a short cooldown period per viewer per video to prevent inflating view counts with rapid page reloads. Multiple views from the same viewer in quick succession will be rate-limited by design.


## Playlists (Pro)

### How do I create a playlist?

Go to **FluentPlayer → Playlists → Add Playlist**, give it a name, and add media items from your media library. See [Creating a Playlist](/creating-playlists) for the full step-by-step guide.


### What playlist layouts are available?

FluentPlayer Pro includes two layouts: **Standard** (player + sidebar list) and **Grid** (thumbnail grid overview). See [Playlist Layouts](/playlist-layouts) for a comparison.


## Next Steps

- [Common Issues & Fixes](/troubleshooting): Specific symptoms and resolutions.
- [Player Customization](/customize): Presets, behaviors, and how the player looks.
- [Documentation home](/introduction): All guides from installation through integrations.
