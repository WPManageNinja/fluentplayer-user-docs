---
prev:
  text: 'Google Analytics'
  link: '/guide/integrations/google-analytics'
next:
  text: 'Frequently Asked Questions'
  link: '/guide/troubleshooting/faq'
---

# Common Issues & Fixes

This page covers the most common problems users run into with Fluent Player and how to resolve them. If you don't find your answer here, check the [FAQ](/guide/troubleshooting/faq) or reach out to support.

---

## Video not playing

**Symptom:** The player loads but the video won't play, or the player shows a spinner indefinitely.

| Likely cause | Fix |
|---|---|
| Invalid or expired video source URL | Go to **Fluent Player → Media**, open the media item, and verify the source URL or file is accessible. |
| Mux or Bunny Stream asset still processing | Newly uploaded assets can take a few minutes to become ready. Wait 2–5 minutes and refresh. |
| Wrong video ID in shortcode or block | Check that the `id` in your shortcode (`[fluentplayer id="123"]`) matches the actual Media ID shown in the media editor. |
| YouTube video is restricted | If the YouTube video has embedding disabled by its owner, Fluent Player cannot play it. |
| Mixed content (HTTP/HTTPS) | Your site must be served over HTTPS. A video source on HTTP will be blocked by browsers on an HTTPS site. |

---

## Autoplay is not working

**Symptom:** You have autoplay enabled, but the video doesn't start automatically on page load.

Browsers block autoplay with audio by default. This is a **browser security policy**, not a Fluent Player limitation.

**How to fix it:**
- Enable **Muted autoplay**: The player will start automatically if the video is muted. Go to **Fluent Player → Media → Player Behaviors** and enable **Muted** along with **Autoplay**.
- The **Ambient** [preset](/guide/customize/presets) is specifically tuned for background autoplay — it mutes the video and loops it automatically.

::: tip
Even with muted autoplay, some mobile browsers (especially iOS Safari) may still block it depending on user settings. This is expected behavior across all video players on the web.
:::

---

## Embed is not showing on the front end

**Symptom:** You've added a shortcode or block, but the player does not appear on the published page.

| Likely cause | Fix |
|---|---|
| Shortcode typed incorrectly | Use `[fluentplayer id="123"]` — check that `id` matches the Media ID and there are no typos. |
| Page builder compatibility | Some page builders cache shortcodes aggressively. Clear the page builder cache and refresh. |
| Media item is in Draft status | The media item must be **Published** for the embed to display publicly. |
| Plugin conflict | Temporarily deactivate other plugins one at a time to identify a conflict. |
| Wrong shortcode for playlists | Playlists use `[fluentplaylist id="123"]`, not `[fluentplayer id="123"]`. |

---

## Email capture overlay is not showing

**Symptom:** You've enabled email capture on a video, but the overlay never appears.

1. **Check the percentage setting** — If it is set to `0`, the overlay triggers immediately. Make sure it is set to the percentage you intend (e.g., `5` for 5% of the video).
2. **Check "Skip if CRM contact"** — If this is on and the viewer is already in FluentCRM, the overlay is suppressed for them by design.
3. **Check the email provider** — The overlay requires an active [email provider](/guide/engagement/email-providers) to be configured. Go to **Settings → Integrations** and confirm your provider status shows **Enabled**.
4. **Check per-media vs preset** — Make sure the overlay is configured on the correct level (per-media or preset) for the video you're testing.

---

## Analytics not tracking

**Symptom:** The Built-in Analytics dashboard shows no data, or view counts are not incrementing.

| Likely cause | Fix |
|---|---|
| Not on Pro | Built-in Analytics requires Fluent Player Pro. Free version does not include the analytics dashboard. |
| Rate limiting active | To prevent spam, Fluent Player applies a short cooldown per viewer per video. Multiple views in quick succession may be skipped. |
| Caching plugin interference | If your page is served from a full-page cache, AJAX calls (including analytics pings) may not fire. Exclude the relevant pages from caching. |
| Google Analytics not seeing events | Make sure you have entered the correct GA4 Measurement ID under **Settings → Analytics → Google Analytics**. See [Google Analytics integration](/guide/integrations/google-analytics). |

---

## Player looks unstyled or broken

**Symptom:** The player appears without styles — controls are missing or the layout is visually broken.

1. **Check for JavaScript errors** — Open your browser's developer console (F12) and look for JavaScript errors. A conflicting plugin may be breaking Fluent Player's scripts.
2. **Check for CSS conflicts** — Your theme may be globally overriding styles. Try the **Custom CSS** field in **Fluent Player → Settings → General** to target `.fluent-player` specifically.
3. **Try a different preset** — The active [preset](/guide/customize/presets) might have unusual settings. Switch to the **Default** preset to see if the issue is preset-specific.

---

## Mux or Bunny Stream is not connecting

**Symptom:** You've entered your API credentials but the integration status shows an error or "Not Connected."

- **Mux:** Double-check your Access Token ID and Secret Key from the Mux dashboard. Tokens are only visible once when created — if you've lost the secret, create a new token. See [Mux integration](/guide/integrations/mux).
- **Bunny Stream:** Confirm your API key and Library ID are correct. The Library ID is found in the Bunny Stream dashboard under your video library settings. See [Bunny Stream integration](/guide/integrations/bunnycdn-stream).

---

## Next steps

- [Frequently Asked Questions](/guide/troubleshooting/faq) — Quick answers to common questions.
- [Player Customization](/guide/customize/) — Full list of customization topics and where they live.
- [Documentation home](/guide/) — Browse all guides from installation through integrations.
