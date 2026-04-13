# BunnyCDN Stream (Pro)

**BunnyCDN Stream** (also called Bunny Stream) is a video streaming platform from Bunny CDN. It handles video encoding, storage, and delivery through a global CDN — so your videos load fast for viewers anywhere in the world.

With Fluent Player Pro, you can connect your Bunny Stream account and use it as a video source directly from the WordPress admin.

::: info Pro feature
BunnyCDN Stream integration requires **Fluent Player Pro**.
:::

## Why use Bunny Stream?

| Benefit | Description |
|---------|-------------|
| **Fast loading** | Videos are delivered from servers closest to the viewer |
| **Automatic encoding** | Bunny encodes your videos into multiple qualities |
| **No server load** | Your WordPress server does not handle video traffic |
| **Scalable** | Handles any amount of traffic without slowing down |
| **Cost-effective** | Pay-as-you-go pricing, often cheaper than traditional CDNs |

## What you need

- A **Bunny CDN account** with Stream enabled. Sign up at [bunny.net](https://bunny.net).
- Your **API key** from Bunny (found in your Bunny dashboard under Account → API Keys).
- A **Stream library** created in your Bunny dashboard with at least one uploaded video.

## How to connect

1. Go to **Fluent Player → Settings → Storage** in your WordPress admin.
2. Open **BunnyCDN Stream** and configure it there.
3. Enter your **API key**.
4. If prompted, enter your **library** details (pull zone or library ID).
5. Click **Test connection** to make sure Fluent Player can reach Bunny.
6. **Save** the settings.

Once connected, Fluent Player can browse your Bunny Stream libraries and videos.

## Using Bunny Stream as a video source

After connecting, here is how to use a Bunny Stream video in Fluent Player:

1. Go to **Fluent Player → Media** and create or edit a media item.
2. In the source section, choose **BunnyCDN** or **Bunny Stream** as the source type.
3. Select the **library** (if you have multiple).
4. Select the **video** you want to use.
5. Save the media.

The player will now stream the video from Bunny's CDN when viewers watch it on your site.

## Managing videos from WordPress

From **Fluent Player Pro** you can manage much of your Bunny Stream library without opening the Bunny dashboard for every task:

| Action | What to do |
|--------|------------|
| **Browse** | Open the media source picker and choose your Stream library and video. |
| **Upload** | Use the upload flow in the plugin (REST: upload endpoint) to send a file from WordPress to Bunny Stream; wait for processing to finish before embedding. |
| **Update metadata** | Change title, description, or other supported fields from the WordPress UI where exposed (REST: update video by ID). |
| **Delete** | Remove a video from Bunny Stream when the UI offers delete — confirm you no longer need the asset anywhere on your site. |
| **Collections** | Create and manage **collections** (folders/groups in Bunny) via the plugin’s collection endpoints — group videos for easier browsing when you have many assets. |

If a button is not visible in your build, check that Stream credentials are saved and that your Pro version includes the management screens.

**Related:** [Video Sources](/guide/videos-and-media/video-sources) — Choosing Bunny as a source.

## Bunny Stream vs Bunny Storage

| | Bunny Stream | Bunny Storage |
|---|-------------|---------------|
| **Purpose** | Full video platform (encoding + CDN) | File storage + CDN delivery |
| **Encoding** | Automatic (multiple qualities) | None (you upload ready-to-play files) |
| **Best for** | Most video use cases | When you have pre-encoded files |
| **Price** | Per-minute watched | Per-GB stored + transferred |

Most users should use **Bunny Stream**. Use [Bunny Storage](/guide/integrations/bunnycdn-storage) only if you already have pre-encoded files and want simple file hosting.


