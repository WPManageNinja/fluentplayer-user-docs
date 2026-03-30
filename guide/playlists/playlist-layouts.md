# Playlist Layouts

When you create a playlist, you choose a **layout** that controls how it is displayed on the front end. Fluent Player Pro offers three layouts, each designed for a different use case. After picking a layout, you can adjust **sidebar position**, **grid mode**, **appearance**, and **behavior** — see [Playlist appearance, spacing, and behavior](/guide/playlists/playlist-settings).

---

## Standard

The Standard layout shows the **main video player** with a **playlist list** beside it (or above/below, depending on settings). Each item usually shows a thumbnail and title.

### Sidebar and header

| Option | What it does |
|--------|----------------|
| **Sidebar position** | Place the playlist strip on the **left**, **right**, **top**, or **bottom** of the player. |
| **Sidebar width** | Width of the playlist area as a **percentage** of the total (default is often around **40%**). |
| **Show playlist header** | Show or hide a **header** block above the list (for example a playlist title). |
| **Header position** | When a header is used, place it **above** or **below** the main playlist list. |

### List behavior

| Option | What it does |
|--------|----------------|
| **Show thumbnails** | Show thumbnail images for each item (when available). |
| **Thumbnail grid layout** | Optionally show items as a **grid** of thumbnails instead of a single vertical list. |
| **Show thumbnail info** | Show title, duration, or other info on or next to thumbnails. |
| **Title position** | Title **on** the thumbnail (overlay) or **below** it — also covered in [playlist settings](/guide/playlists/playlist-settings). |

The [playlist toggle](/guide/customize/skins-and-controls) on the player lets viewers show or hide the sidebar when your skin exposes it.

### Best for

- Simple video series (tutorials, episodes, demos).
- When you want viewers to browse and click between videos.
- Playlists with a small to medium number of videos (for example 5–20).

### Example

A "Getting Started" tutorial series with five videos. The viewer sees the current video with the other four listed in a **right** sidebar at **40%** width, with thumbnails and titles.

---

## Learning

The Learning layout is designed for **courses and educational content**: ordered lessons, progress, and optional gating.

::: warning Layout availability
In some plugin builds the **Learning** option may be **hidden** or labeled **Coming soon** in the layout picker. If you do not see it, use **Standard** with [playlist behavior](/guide/playlists/playlist-settings) options where available, and watch release notes for Learning layout support.
:::

### How progress and locking work

- **Progress** — The player tracks how much of each lesson the viewer has watched. **Completion** is typically determined when the viewer passes a **completion threshold** (for example **80%** of the video) — exact percentages follow your playlist settings.
- **Locked lessons** — When **locked content** is enabled, a lesson can stay **locked** until the **previous** lesson is marked **completed**. Locked items may show a message such as needing to complete the prior video first.
- **Per-user** — Progress and completion are stored **per logged-in user** (or per browser session, depending on implementation) so learners can resume later.

### Options (when available)

| Option | Description |
|--------|-------------|
| **Enable progress** | Track watch progress per video and for the playlist. |
| **Enable chapters** | Show chapter markers when the media has chapters. |
| **Completion threshold** | Percentage watched to count as **completed** (e.g. 80%). |
| **Show locked content** | Show locked items with a clear “complete previous” state. |

### Best for

- Online courses where order matters.
- Training programs that need completion tracking.
- Sequences where lesson 2 stays locked until lesson 1 is completed.

### Example

A 10-lesson WordPress course: lesson 1 **completed**, lesson 2 **in progress** at 50%, lessons 3–10 **locked** until the previous lesson completes at the threshold.

---

## Grid

The Grid layout shows videos as a **multi-column thumbnail grid** — ideal for libraries and catalogs.

### Display mode: inline vs modal

| Mode | What viewers see |
|------|------------------|
| **Inline** | The **player** appears **above** the grid. Clicking a thumbnail loads that video in the main player **in place**. |
| **Modal** | Clicking a thumbnail opens a **modal** (overlay) with the player. The page layout can stay static while video plays in the modal. |

### Modal options (when modal mode is selected)

| Option | Description |
|--------|-------------|
| **Modal layout** | For example **centered** vs **fullscreen** modal. |
| **Enable modal playback** | Turn modal playback on or off for the chosen mode. |
| **Show info in modal** | Show extra title or metadata inside the modal (`modalShowInfo`-style options). |

An **info** control may appear on the player in grid + modal setups — see [Skins and Controls](/guide/customize/skins-and-controls).

### Grid layout options

| Option | Typical range / notes |
|--------|------------------------|
| **Columns** | Often **2–6** columns (default often **3**). |
| **Items per page** | **6–50** items per page (default often **12**) — controls pagination. |
| **Enable search** | Show a **search** field above the grid. |
| **Enable filters** | Show **filters** (categories, tags, or similar) above the grid. |

### Best for

- Large video libraries (20+ videos).
- Browsing and search rather than strict sequential watching.
- Resource libraries and archives.

### Example

Fifty product tutorials in a **3-column** grid, **12 per page**, with **search** enabled. Viewers type "setup" to narrow results and open a video **inline** or in a **modal**, depending on your mode.

---

## Choosing the right layout

| Layout | Best for | Rough video count | Order matters? |
|--------|----------|-------------------|----------------|
| **Standard** | Series, tutorials | 5–20 | Sometimes |
| **Learning** | Courses, training | Any | Yes |
| **Grid** | Libraries, catalogs | 20+ | No |

You can change the layout by editing the playlist; the front end updates on the next page load (clear caches if you use aggressive caching).

## Next steps

- [Playlist appearance, spacing, and behavior](/guide/playlists/playlist-settings) — Colors, typography, autoplay, continuous play, loop.
- [Creating a Playlist](/guide/playlists/creating-playlists) — Build a playlist step by step.
- [Embed a Playlist](/guide/playlists/embed-playlist) — Show the playlist on a page.
