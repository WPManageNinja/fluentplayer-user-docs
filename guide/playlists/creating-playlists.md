# Creating a Playlist

This guide walks you through creating a playlist in Fluent Player Pro, adding videos to it, and configuring its settings.

::: info Pro feature
Creating playlists requires **Fluent Player Pro**.
:::

## Before you start

Make sure you have already created the media items (videos) that you want to include. Each video should be set up under **Fluent Player → Media**. See [Adding and Editing Videos](/guide/videos-and-media/adding-videos) if you have not done this yet.

## Step 1: Create a new playlist

1. In your WordPress admin, go to **Fluent Player → Playlists**.
2. Click the `Add Playlist` button to add a new playlist.
3. Give it a descriptive **title** — for example, "WordPress Basics Course" or "Product Demo Series."

![Creating Playlist](/guide/public/playlists/creating-playlists/creating-playlist-1.webp)

## Step 2: Add media items

1. In the playlist editor, you will see `Add Media` button to add media (videos).

![Creating Playlist](/guide/public/playlists/creating-playlists/creating-playlist-2.webp)

2. Select existing media items from your Fluent Player library. Each item shows its title.
3. Add as many videos as you need.

![Creating Playlist](/guide/public/playlists/creating-playlists/creating-playlist-3.webp)

**Example:** For a 5-lesson course, you would add 5 media items — one for each lesson.

## Step 3: Order the videos

The order of media items in the playlist is the order viewers will see them.

- **Drag and drop** (or use up/down controls) to rearrange the items.
- You will also get Edit or Delete option here to edit or remove the media.

![Creating Playlist](/guide/public/playlists/creating-playlists/creating-playlist-4.webp)

## Step 4: Choose a layout

Select a [layout](/guide/playlists/playlist-layouts) for how the playlist appears on the front end:

- **Standard** — Sidebar list with video thumbnails. Best for simple series.
- **Grid** — Multi-column grid with optional search. Best for larger collections.

Each layout has its own settings — see [Playlist Layouts](/guide/playlists/playlist-layouts) for details.

![Creating Playlist](/guide/public/playlists/creating-playlists/creating-playlist-6.webp)

## Step 5: Save

Click **Save** (or **Publish**) to save the playlist. It now has an **ID** that you will use to embed it.

::: tip Finding the playlist ID
The ID appears in the playlist list under **Fluent Player → Playlists** (for example, `#10`). You will need this when embedding with `[fluentplaylist id="10"]`.
:::

## Editing an existing playlist

To change a playlist later:

1. Go to **Fluent Player → Playlists**.
2. Click on the playlist you want to edit.
3. Add or remove media, reorder items, change the layout, or update settings.
4. Save.

![Creating Playlist](/guide/public/playlists/creating-playlists/creating-playlist-5.webp)

Changes take effect immediately — every page that embeds this playlist will show the updated version.
