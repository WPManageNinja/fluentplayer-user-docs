---
title: "Video Sources"
description: "Explore supported video source types in FluentPlayer, including WordPress, external URLs, YouTube, Vimeo, Mux, BunnyCDN, and audio."
---

# Video Sources

To display content in FluentPlayer, you must first define where your video file is hosted. FluentPlayer supports a wide range of hosting environments, from simple WordPress uploads to professional streaming services.

To configure your video source, navigate to **FluentPlayer → Media** in your WordPress dashboard and click **Add Media**.

## Supported Video Sources

![Video Source](/guide/public/videos-and-media/video-sources/video-source-1.webp)

### 1. WordPress Media Library

Upload a video file (like an MP4) to your WordPress Media Library and select it as the source. This is the simplest option if you have smaller videos and your hosting can handle the bandwidth.

 * **Best for:** Small videos, simple sites, or when you want everything stored on your own server.
 * **Setup:** Select the "WordPress" option in the source section and pick a file from your library.

### 2. YouTube

Paste a YouTube video URL. FluentPlayer will use the YouTube embed player with your customized settings on top.

**Example:**

```
https://www.youtube.com/watch?v=Dc1hCvKk8WQ&t
```

FluentPlayer offers YouTube-specific options in [Settings](/settings):

 * **Privacy mode**: Uses YouTube's privacy enhanced mode so cookies are not set until the viewer clicks play.
 * **Subscribe button**: Optionally shows a YouTube subscribe button on the player.

**Best for:** Videos already hosted on YouTube, or when you want YouTube's free hosting.

![Youtube Source](/guide/public/videos-and-media/video-sources/youtube-source-2.webp)

### 3. Vimeo

Paste a **Vimeo** video URL. FluentPlayer treats Vimeo as a first-class source type (validation allows `viewType: vimeo` in media settings) and loads the Vimeo player with your FluentPlayer styling and options where applicable.

**Example:**

```
https://vimeo.com/123456789
```

**Best for:** Professional hosting on Vimeo, portfolios, or when you already use Vimeo for delivery.

![Vimeo Source](/guide/public/videos-and-media/video-sources/vimeo-3.webp)

### 4. Mux and Mux Live (Pro)

In the block editor, **Mux** and **Mux Live** appear as separate source buttons: **Mux** for standard on demand assets and **Mux Live** for live streams. 

With FluentPlayer Pro, you connect your account under **Settings → Storage** (BunnyCDN Stream, BunnyCDN Storage, and Mux rows each have **Configure**). Features include **HLS** playback, uploads, optional **Signed URLs**, **Webhooks**, and optional **AI-generated captions** for on-demand content.

When a stream is configured as **Live**, the player shows a **LIVE** badge in the control bar (typically a pulsing indicator plus “LIVE” text) so viewers know they are watching a live broadcast.

**Best for:** Teams that want Mux Video API workflows, adaptive streaming, or live streaming from Mux.

See the full guide: [Mux (Pro)](/mux).

![Mux](/guide/public/videos-and-media/video-sources/mux-4.webp)

### 5. Audio

FluentPlayer supports **Audio** for audio-first media such as podcasts, music, and voice-only recordings. Select **Audio** in the block or **FluentPlayer → Media** source picker, and the player switches to an audio-oriented view.

Use the same media workflow as video — the player adapts to the media type you choose. Upload a file (MP3, M4A) or point to an external audio URL.

**Best for:** Podcasts, music tracks, interviews, or any voice-only content.

![Audio](/guide/public/videos-and-media/video-sources/audio-5.webp)

### 6. BunnyCDN (Pro)

With FluentPlayer Pro, you can connect to **Bunny CDN** for professional video hosting. There are two options:

 * **BunnyCDN Stream**: Use Bunny's video streaming platform. You manage libraries and videos on Bunny, then select them in FluentPlayer. See [BunnyCDN Stream](/bunnycdn-stream).
 * **BunnyCDN Storage**: Use Bunny's storage zones to host video files. Upload and manage files directly from WordPress. See [BunnyCDN Storage](/bunnycdn-storage).

**Best for:** Sites with lots of videos, high traffic sites, or when you need fast, reliable CDN delivery worldwide.

![BunnyCDN](/guide/public/videos-and-media/video-sources/bunny-cdn-6.webp)

## How to Set the Video Source

1. Go to **FluentPlayer → Media** and create or edit a media item.
2. In the media editor, look for the **Source** section.
3. Choose the source type (WordPress, URL, YouTube, Mux, or BunnyCDN when using Pro).
4. Enter the **URL** or select the file.
5. **Save** the media.

::: tip
You can change the video source at any time without breaking existing embeds. The shortcode and block reference the media ID, not the video URL. So if you swap the source URL, every page that embeds this media will automatically show the new video.
:::


