# Adding and Editing Videos

This page shows you how to create a new video (media) in Fluent Player and how to edit an existing one. No coding is needed — everything happens in your WordPress admin.

## Creating a new media item

Follow these steps to add a new video:

1. In your WordPress admin, go to **Fluent Player → Media** (the **Media** section in **Fluent Player Pro**).
2. Click **Add Media** (or **Add New** / **+**, depending on the screen) to create a new item.
3. Give your media a **title**. This is for your reference in the admin and can also appear in the player header on the [dedicated player URL](/guide/display-embed/dedicated-player-url).

**Example:** If you are adding a product demo video, you might title it "Product Demo — Getting Started."

4. Set the **video source**. This is the URL or file that the player will load. See [Video Sources](/guide/videos-and-media/video-sources) for all the options.
5. Optionally, add a **poster image**. This is the thumbnail that viewers see before they click play. A good poster makes your video look more professional and inviting.
6. Choose a **preset** that controls the player's look and controls. See [Presets](/guide/customize/presets) for details.
7. Click **Publish** to make it live, or **Save as Draft** to come back later.

::: tip
You do not need to configure everything at once. You can always come back and change the video source, poster, preset, or any other setting later.
:::

## Editing an existing media item

To edit a media item you already created:

1. Go to **Fluent Player → Media**.
2. Find the media in the list and click on it.
3. The media editor opens. Here you can change:
   - The **title**.
   - The **video source** (swap to a different video or update the URL).
   - The **poster image**.
   - The **preset** (change how the player looks).
   - Player-specific settings like [controls](/guide/customize/skins-and-controls), [behaviors](/guide/customize/behaviors), [overlays](/guide/engagement/email-capture), and more.
4. Click **Update** (or **Publish**) to save your changes.

## Understanding the media editor

When you open a media item, you will see the Fluent Player block editor. This is where all the settings live:

- **Source section** — The video URL or file (including [Mux or Bunny](/guide/videos-and-media/video-sources) when using Pro).
- **Poster** — The thumbnail image.
- **Preset** — The player template (controls, skin, behaviors).
- **Overlays** — Email capture, CTA, action bar (if configured).
- **Advanced** — Subtitles, language, custom CSS, and more.
- **Timed content** (Pro) — Inner blocks below the player (text, lists, buttons) saved with the media; see [Embed with Block](/guide/display-embed/block#timed-content-pro).

On the **media list** screen, use the **status filters** to narrow the list:

| Filter | What it shows |
|--------|----------------|
| **All** | Every media item regardless of status. |
| **Public** | Items published and visible according to your [visibility](/guide/videos-and-media/public-vs-private) rules. |
| **Private** | Items restricted to authorized viewers (when your workflow uses private publishing). |
| **Draft** | Items not yet published — good for work in progress. |

Search still works across titles and IDs as supported by your version.

Each section is explained in its own doc page — use the sidebar to navigate.

## Finding the media ID

Every media item has a unique **ID** (a number). You need this ID when embedding the video with a shortcode like `[fluentplayer id="42"]` (or `[fluentmedia id="42"]`).

Here is how to find it:
- In the **Media list**, the ID is shown next to each item (for example, `#42`).
- When **editing** a media, check the URL in your browser — it usually contains something like `post=42`.

## Next steps

- [Video Sources](/guide/videos-and-media/video-sources) — Learn about all the ways to provide a video file.
- [Subtitles](/guide/videos-and-media/subtitles) — Add caption tracks for accessibility.
- [Display & Embed](/guide/display-embed/) — Show the video on your site using shortcodes or blocks.
