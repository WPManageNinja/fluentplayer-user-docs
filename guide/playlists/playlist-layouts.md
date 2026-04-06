# Playlist Layouts

When you create a playlist, you choose a **layout** that controls how it is displayed on the front end. Fluent Player offers two layout styles — **Standard** and **Grid** — each designed for a different use case.

To configure the layout, open a playlist and expand the **Layout** panel in the right sidebar.

## Standard

The Standard layout shows the **main video player** with a **playlist sidebar** beside it. Each item in the sidebar displays a thumbnail and title, making it easy for viewers to browse and switch between videos.

### Options

| Option | Description |
|--------|-------------|
| **Thumbnail Ratio** | Aspect ratio of the thumbnails in the sidebar. Choose from **Landscape (16:9)**, **Portrait (9:16)**, **Square (1:1)**, **Classic (4:3)**, or **Vertical (3:4)**. |
| **Sidebar Position** | Where the playlist sidebar appears relative to the player — **Left**, **Right**, **Top**, or **Bottom**. Use the visual picker to select a position. |
| **Show Playlist Header** | Display the playlist title and video count above the sidebar list. |
| **Show Thumbnails** | Display video thumbnails in the sidebar. When off, items show as a text-only list. |
| **Grid-Style Thumbnails** | Arrange thumbnails in a grid instead of a single vertical list. Useful when you have many videos and want a more compact sidebar. |
| **Show Video Title** | Display the video title on each thumbnail in the sidebar. |
| **Title Position** | Where the title appears — **Overlay on Thumbnail** (text overlaid on the image) or **Below Thumbnail** (text below the image). |
| **Sidebar Width** | Width of the playlist sidebar as a percentage of the total area (e.g., `40`). Adjust with the slider. |

### Best for

- Video series, tutorials, episodes, and demos.
- Playlists where viewers browse and click between videos.
- Small to medium collections (5–20 videos).

### Example

A "Getting Started" tutorial series with five videos. The viewer sees the current video with the other four listed in a **Right** sidebar at **40%** width, with **Landscape** thumbnails and titles overlaid on each thumbnail.

![Layout Standard](/guide/public/playlists/playlist-layouts/layout-standard-1.webp)

## Grid

The Grid layout shows videos as a **multi-column thumbnail grid** — ideal for video libraries and catalogs. The video player appears above the grid, and viewers click a thumbnail to load that video.

### Options

| Option | Description |
|--------|-------------|
| **Thumbnail Ratio** | Aspect ratio of the grid thumbnails — **Landscape (16:9)**, **Portrait (9:16)**, **Square (1:1)**, **Classic (4:3)**, or **Vertical (3:4)**. |
| **Video Player Mode** | How the video player appears when a thumbnail is clicked. **Inline Player** loads the video in a player above the grid. **Modal Overlay** opens the video in a popup overlay on top of the page. |
| **Player Above Grid** | Show the video player above the thumbnail grid. When on, clicking a thumbnail loads the video in the player area at the top. |
| **Grid Columns** | Number of columns in the grid (e.g., `3`). Adjust with the slider. |
| **Videos Per Page** | How many videos to show per page (e.g., `12`). Controls pagination — when you have more videos than this number, pagination appears. |
| **Show Video Title** | Display the video title on each thumbnail in the grid. |
| **Title Position** | Where the title appears — **Overlay on Thumbnail** or **Below Thumbnail**. |

### Best for

- Large video libraries (20+ videos).
- Browsing-oriented collections where strict sequential order does not matter.
- Resource libraries, archives, and content catalogs.

### Example

Fifty product tutorials in a **3-column** grid, **12 per page**, with the **Inline Player** mode. Viewers click a thumbnail and the video loads in the player above the grid. Each thumbnail shows the video title overlaid on the image.

![Layout Standard](/guide/public/playlists/playlist-layouts/layout-grid-2.webp)

You can change the layout at any time by editing the playlist and selecting a different style in the **Layout** panel. The front end updates on the next page load.

