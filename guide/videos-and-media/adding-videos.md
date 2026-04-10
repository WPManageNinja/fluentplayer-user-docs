---
title: "Adding and Editing Videos"
description: "Learn how to create, edit, and manage media in Fluent Player, including video sources, presets, posters, and media IDs."
---

# Adding and Editing Videos

This guide explains how to manage your video content within Fluent Player. You can create, organize, and update your media directly from your WordPress dashboard without touching a single line of code.

## Creating a New Media Item

Adding a video (Media) is the first step toward getting your content in front of your audience.

1. In your WordPress admin, go to **Fluent Player → Media** (the **Media** section in **Fluent Player Pro**).
2. Click **Add Media** (or **Add New** / **+**, depending on the screen) to create a new item.

![Add Media](/guide/public/videos-and-media/adding-videos/add-media-1.webp)

3. Give your media a **title**. This is for your reference in the admin and can also appear in the player header on the [dedicated player URL](/guide/display-embed/dedicated-player-url).

**Example:** If you are adding a product demo video, you might title it "Product Demo — Getting Started."

![Add title](/guide/public/videos-and-media/adding-videos/enter-title-and-url-2.webp)

4. Set the **video source**. This is the URL or file that the player will load. See [Video Sources](/guide/videos-and-media/video-sources) for all the options.

![Set Video Source](/guide/public/videos-and-media/adding-videos/add-video-source-3.webp)

5. Optionally, add a **poster image**. This is the thumbnail that viewers see before they click play. A good poster makes your video look more professional and inviting.
6. Choose a **preset** that controls the player's look and controls. See [Presets](/guide/customize/presets) for details.
7. Click **Publish** to make it live, or **Save as Draft** to come back later.

::: tip
You do not need to configure everything at once. You can always come back and change the video source, poster, preset, or any other setting later.
:::

![Publish](/guide/public/videos-and-media/adding-videos/publish-4.webp)

## Editing an Existing Media Item

You can update your videos at any time, and the changes will automatically reflect everywhere the video is embedded on your site.

1. Go to **Fluent Player → Media**.
2. Find the media in the list and click on its title to open the editor.
3. Modify any settings, including:
   - The **Video Source** (to swap URLs or files).
   - The **Poster Image** or **Player Preset**.
   - Player-specific settings like [controls](/guide/customize/creating-custom-presets), [behaviors](/guide/customize/behaviors), [overlays](/guide/engagement/email-capture), and more.
   - Interactive Layers such as email capture, CTAs, or the action bar.
4. Click **Update** (or **Publish**) to save your changes.

## Understanding the Media Editor

The media editor is organized into logical sections to help you find settings quickly:

 * **Source Section:** Manage the video URL or professional hosting connections like [Mux or Bunny](/guide/videos-and-media/video-sources).
 * **Poster & Preset:** Control the thumbnail and the visual template of the player.
 * **Overlays:** Configure engagement tools like email capture and CTA buttons.
 * **[Timed Content (Pro)](/guide/display-embed/block#timed-content-pro):** Add text, lists, or buttons that appear below the player at specific timestamps.
 * **Advanced Settings:** Manage subtitles, multi-language tracks, and custom CSS.

On the **media list** screen, use the **status filters** to narrow the list:

| Filter | What it shows |
|--------|----------------|
| **All** | Every media item regardless of status. |
| **Public** | Items published and visible according to your [visibility](/guide/videos-and-media/public-vs-private) rules. |
| **Private** | Items restricted to authorized viewers (when your workflow uses private publishing). |
| **Draft** | Items not yet published — good for work in progress. |

Search still works across titles and IDs as supported by your version.

## Finding the Media ID

Every media item has a unique **ID** (a number). You need this ID when embedding the video with a shortcode like `[fluentplayer id="42"]` (or `[fluentmedia id="42"]`).

Here is how to find it:
- In the **Media list**, the ID is shown next to each item (for example, `#42`).
- When **editing** a media, check the URL in your browser — it usually contains something like `post=42`.

