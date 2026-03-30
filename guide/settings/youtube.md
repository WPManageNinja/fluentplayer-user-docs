# YouTube Settings

**Fluent Player → Settings → YouTube**

The YouTube section controls how Fluent Player handles **YouTube video embeds** across your site. These settings apply globally to all media items that use YouTube as the source.

## Options

### Privacy-Enhanced Mode

| Setting | Detail |
|---------|--------|
| **Label** | Privacy-Enhanced Mode |
| **Default** | Off |

When enabled, YouTube loads the video from `youtube-nocookie.com` instead of `youtube.com`. This means YouTube does **not** store cookie information about your visitors until they interact with (click play on) the video.

**When to enable:** If your site needs to comply with GDPR or other privacy regulations, or if you want to minimize tracking of visitors who only view the page without playing the video.

::: tip
Privacy-Enhanced Mode reduces the data YouTube collects from page visitors, but it does not make YouTube embeds fully "cookie-free." Once a visitor plays the video, YouTube may still set cookies.
:::

---

### Show Subscribe Button

| Setting | Detail |
|---------|--------|
| **Label** | Show Subscribe Button |
| **Default** | Off |

When enabled, a YouTube Subscribe button appears below (or near) the YouTube video embed. This makes it easy for viewers to subscribe to your YouTube channel directly from your WordPress site.

**When to enable:** If you want to grow your YouTube audience from your embedded videos.

Behind the scenes, Fluent Player can call YouTube’s channel metadata so the subscribe control shows the correct channel name and branding when the button is enabled.

---

## Saving changes

Click **Save Settings** after adjusting YouTube options.

## Next steps

- [Video Sources](/guide/videos-and-media/video-sources) — How to use YouTube as a video source in Fluent Player.
- [General Settings](/guide/settings/general) — Default preset and global CSS.
- [Settings Overview](/guide/settings/) — All settings sections at a glance.
