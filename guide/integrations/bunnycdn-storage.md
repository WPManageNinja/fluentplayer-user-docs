# BunnyCDN Storage (Pro)

**BunnyCDN Storage** (also called Bunny Storage) lets you host video files in Bunny's storage zones and serve them through their global CDN. Unlike Bunny Stream, it does not encode your videos — you upload ready-to-play files (like MP4s) and serve them directly.

::: info Pro feature
BunnyCDN Storage integration requires **Fluent Player Pro**.
:::

## When to use Bunny Storage

- You already have **pre-encoded video files** (for example, MP4 files in the right quality).
- You want **simple, cheap file hosting** with CDN delivery.
- You do not need automatic encoding into multiple quality levels.

For most users, [Bunny Stream](/guide/integrations/bunnycdn-stream) is the better choice because it handles encoding automatically. Use Bunny Storage when you have specific files you want to host as-is.

## What you need

- A **Bunny CDN account**. Sign up at [bunny.net](https://bunny.net).
- A **storage zone** created in your Bunny dashboard.
- Your storage zone **name** and **API key** (or access credentials).

## How to connect

1. Go to **Fluent Player → Settings → Storage** in your WordPress admin.
2. Open **BunnyCDN Storage** and configure it there.
3. Enter your **storage zone name** and **API key**.
4. Click **Test connection** to verify.
5. **Save** the settings.

## Using Bunny Storage as a video source

1. Go to **Fluent Player → Media** and create or edit a media item.
2. In the source section, choose **BunnyCDN Storage** as the source type.
3. Browse or select the **video file** in your storage zone.
4. Save the media.

Playback does **not** always use a public direct file URL in the browser. Fluent Player can route video through a **stream proxy** endpoint on your WordPress site (`bunny/storage/stream`-style REST path). That way, **private** or **non-public** storage files can be played without exposing the raw Bunny URL to visitors. You still configure credentials and permissions in Bunny; the plugin handles secure delivery through WordPress when this mode applies.

## Managing files from WordPress

You may be able to:

- **List** all video files in your storage zone.
- **Upload** new video files from WordPress.
- **Create folders** — Add directories inside the storage zone from WordPress (REST: create directory) to keep large libraries organized.
- **Delete** files from the storage zone.

This lets you manage your hosted videos without leaving WordPress.

