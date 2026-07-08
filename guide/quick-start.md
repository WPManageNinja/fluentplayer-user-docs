# Quick Start

This guide will walk you through creating your first video and embedding it on a page. You can complete this in under 5 minutes.

## What you will need

- FluentPlayer installed and activated (see [Installation](/installation)).
- A video file URL (this can be a YouTube link, a direct MP4 URL, or a file in your WordPress Media Library).

While you are logged in as an administrator, the **WordPress admin bar** (top of the screen on the front end) may include a quick link to **FluentPlayer** for faster access to media and settings — useful when previewing a page and jumping straight into the plugin.

## Step 1: Create a new media item

1. In your WordPress admin, go to **FluentPlayer → Media**.
2. Click the button to add a new media.
3. Give it a **title** (for example, "Welcome Video").

## Step 2: Set the video source

1. In the media editor, find the **video source** section.
2. Enter your video URL. For example:
   - A YouTube link: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`
   - A direct MP4 URL: `https://example.com/my-video.mp4`
   - Or select a file from your WordPress Media Library.
3. Optionally, add a **poster image** (the thumbnail shown before the video plays).

For more details on video sources, see [Video Sources](/video-sources).

## Step 3: Choose a preset

Every video uses a **preset** that controls how the player looks and behaves. By default, the "Modern" preset is applied.

You can change the preset in the media editor. FluentPlayer ships with **seven** built-in presets (plus custom presets on Pro):

- **Default:** Full classic controls including chapters.
- **Modern:** Sleek bar; typical default for new sites.
- **Simple:** Play, progress, fullscreen only.
- **Standard:** Classic layout with chapters.
- **Floating:** Controls float over the video.
- **Minimal:** Almost no chrome; center play only.
- **Ambient:** Tuned for muted background / loop style use.

You can always change this later. Learn more in [Presets](/presets).

## Step 4: Publish the media

Click **Publish** (or **Save as Draft** if you want to finish later). Once published, your media gets an **ID** that you will need to embed it.

::: tip Where to find the media ID
The ID appears in the media list under **FluentPlayer → Media** (for example, `#42`). You can also see it in the browser URL bar when editing the media.
:::

## Step 5: Embed the video on a page

Now let's show the video on your site. You have two options:

**Option A: Use the shortcode (works everywhere)**

1. Edit any post or page.
2. Add this shortcode where you want the player to appear:

```
[fluentplayer id="42"]
```

You can also use the legacy alias `[fluentmedia id="42"]`; both are identical. Replace `42` with your actual media ID. For every attribute, see [Embed with Shortcode](/shortcode).

3. Publish or update the post.

**Option B: Use the Gutenberg block**

1. Edit a post or page in the block editor.
2. Click the **+** button to add a block.
3. Search for **FluentPlayer** and select the block.
4. Choose your media from the dropdown.
5. Publish or update the post.

## Step 6: View the result

Open the post or page on the front end of your site. You should see the FluentPlayer video right where you placed it.

## What to explore next

Now that you have your first video embedded, here are some things to try:

- [Customize the look](/creating-custom-presets): Create custom presets with your own skin, controls, and behaviors.
- [Add subtitles](/subtitles): Upload subtitle files for accessibility.
- [Add an email capture overlay](/email-capture): Collect emails from your viewers.
- [Create a playlist](/playlists) (Pro): Group videos together.
- [Set up analytics](/built-in-analytics) (Pro): Track who is watching and for how long.
