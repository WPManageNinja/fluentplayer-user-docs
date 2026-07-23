# LearnDash

FluentPlayer works inside **LearnDash** course and lesson pages without any extra configuration. Add the FluentPlayer block or the FluentPlayer Playlist block to any LearnDash lesson the same way you would on any other WordPress page.

## Before You Start

Make sure your media items are ready before editing a lesson. Create and configure your videos under **FluentPlayer → Media** so they are available to select when you add the block. See [Adding and Editing Videos](/adding-videos) if you have not done this yet.

## Adding a Video to a Lesson

1. In your WordPress admin, go to **LearnDash → Courses** and open the lesson you want to edit.
2. Inside the lesson editor, click the **+ (Plus)** icon to add a new block.
3. Search for **FluentPlayer** and select the **FluentPlayer** block.

![Choose FluentPlayer from Learndash](/guide/public/integrations/learndash/select-fluentplayer-1.webp)

4. In the block settings panel, choose your media item from the dropdown, or select a source type (WordPress, YouTube, Mux, Bunny Stream, and so on) to pick or upload media.
5. Click **Update or Publish** to save the lesson.

The player will appear on the lesson page exactly where you placed the block, using all the settings configured on that media item — preset, controls, branding, and any interactive layers.

![Choose media from fluentplayer](/guide/public/integrations/learndash/choose-media-2.webp)

## Adding a Playlist to a Lesson

1. Click the **+** icon in the lesson editor and search for **FluentPlayer Playlist**.
2. Select the **FluentPlayer Playlist** block.

![Choose FluentPlayer playlist from Learndash](/guide/public/integrations/learndash/select-fluentplayer-playlist-3.webp)

3. In the block settings panel, choose an existing playlist from the dropdown.
4. Click **Update** to save.

::: tip
If the playlist does not appear in the dropdown, make sure it has been published under **FluentPlayer → Playlists**. See [Creating a Playlist](/creating-playlists) for setup steps.
:::

![Choose FluentPlayer playlist from Learndash](/guide/public/integrations/learndash/select-fluentplayer-playlist-4.webp)

## Shortcode Alternative

If you prefer not to use the block editor, or if a lesson uses the Classic Editor, you can embed any FluentPlayer video or playlist using a shortcode:

```text
[fluentplayer id="129"]
```

```text
[fluentplaylist id="10"]
```

Paste the shortcode into the lesson content where you want the player to appear. See [Embed with Shortcode](/shortcode) for all available options.

::: info
Create your media items under **FluentPlayer → Media** before editing your lesson, so they appear in the block's selection dropdown immediately.
:::
