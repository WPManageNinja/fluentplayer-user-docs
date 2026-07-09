# Storage Settings

The Storage section is where you connect external **video hosting** providers to FluentPlayer Pro. Once connected, you can choose these providers as video sources when adding or editing media items.

::: info Pro feature
All storage integrations require **FluentPlayer Pro**.
:::

::: info Note
Email and CRM providers (FluentCRM, Mailchimp, Webhook) are configured under [**Settings → Integrations**](/email-integrations), not here.
:::

## Browsing Storage Providers

Navigating your available integrations is simple. You can use the search bar on the right or filter the list using the tabs at the top of the screen:

- **All:** Shows every integration card available.
- **Email Service Provider:** Filters the view to show dedicated email platforms like FluentCRM and Mailchimp.
- **Others:** Filters the view to show custom routing options like Webhooks.

Each integration card displays a brief description, a status badge (Enabled or Disabled), and a **Configure** button to manage your connection settings.

## BunnyCDN Stream

**BunnyCDN Stream** is a video streaming CDN with encoding, multi-bitrate delivery, and global edge nodes. FluentPlayer can browse your Bunny Stream libraries and serve HLS video directly.

### What You Need

- A [Bunny.net](https://bunny.net) account.
- A **Stream library** created in your Bunny dashboard with at least one video uploaded.
- Your **API key** (found in Bunny → Account → API Keys).

### How to Connect

1. Go to **FluentPlayer → Settings → Storage**.
2. Click **Configure** on the **BunnyCDN Stream** row.
3. Enter your **API key**.
4. Enter your **library** details (pull zone or library ID) if prompted.
5. Click **Test connection** to verify FluentPlayer can reach Bunny.
6. **Save** the settings.

### Using BunnyCDN Stream as a Video Source

After connecting:

1. Go to **FluentPlayer → Media** and create or edit a media item.
2. Choose **BunnyCDN Stream** as the source type.
3. Select the **library** (if you have multiple).
4. Select the **video** you want to use.
5. Save the media.

**Related:** [BunnyCDN Stream integration guide](/bunnycdn-stream) for advanced options.

## BunnyCDN Storage

**BunnyCDN Storage** lets you store video files in Bunny's storage zones and serve them through their CDN. This is useful when you want self managed file hosting rather than a full streaming platform.

### What You Need

- A [Bunny.net](https://bunny.net) account.
- A **storage zone** created in your Bunny dashboard.
- Your storage zone **name** and **API key** (or access credentials).

### How to Connect

1. Go to **FluentPlayer → Settings → Storage**.
2. Click **Configure** on the **BunnyCDN Storage** row.
3. Enter your **storage zone name** and **API key**.
4. Click **Test connection** to verify.
5. **Save** the settings.

### Using BunnyCDN Storage as a Video Source

After connecting:

1. Go to **FluentPlayer → Media** and create or edit a media item.
2. Choose **BunnyCDN Storage** as the source type.
3. Browse or select the **video file** in your storage zone.
4. Save the media.

**Related:** [BunnyCDN Storage integration guide](/bunnycdn-storage) for file management options.

## Mux

**Mux** is a professional video platform with adaptive HLS streaming, live streaming, AI-generated captions, signed URL playback, and Mux Data analytics. FluentPlayer Pro provides a full Mux integration including webhook support for asset-ready events.

### What You Need

- A [Mux](https://mux.com) account.
- A Mux **API access token** with **Mux Video** permissions (read and write), from **Mux dashboard → Settings → API access tokens**.
- FluentPlayer **Pro** active on your site.

### How to Connect

1. Go to **FluentPlayer → Settings → Storage**.
2. Click **Configure** on the **Mux** row.
3. Enter your **Token ID** and **Token Secret** from the Mux dashboard.
4. Click **Test connection** to confirm the credentials work.
5. **Save** the settings.

### Optional Mux Settings

| Option | Purpose |
|--------|---------|
| **Signed URLs** | Serve time limited signed URLs for protected playback, thumbnails, and storyboards. Enable only if you need access restricted video. |
| **Enable auto captions** | Ask Mux to auto generate captions for new uploads (language is configurable). |
| **Webhook secret** | Verifies events from Mux (asset ready, upload failed, live events). Add a webhook endpoint in the Mux dashboard and paste the signing secret here. |
| **Mux Data environment key** | Optional key for Mux's playback quality analytics. |

### Using Mux as a Video Source

After connecting:

1. Go to **FluentPlayer → Media** and create or edit a media item.
2. Choose **Mux** as the source type.
3. Select an existing Mux asset or enter the playback ID.
4. Save the media.

**Related:** [Mux integration guide](/mux) for live streaming, signed URLs, and advanced API details.

## Gumlet

**Gumlet** is a professional video hosting and streaming platform that automatically optimizes and encodes your uploads into adaptive HLS, with optional signed-URL playback for protected content. FluentPlayer can browse your Gumlet collections and serve videos directly.

### What You Need

- A [Gumlet](https://gumlet.com) account with a video **collection**.
- An **API key** with the **Video Admin** role (from Gumlet → **Developers → API Keys**).
- Your **Collection ID** (from the collection's dashboard URL).

### How to Connect

1. Go to **FluentPlayer → Settings → Storage**.
2. Click **Configure** on the **Gumlet** row.
3. Toggle on **Enable Integration**, then enter your **API Key** and **Collection ID** (and an optional **Live Source ID**).
4. Optionally enable **Signed URLs** and paste your workspace **Signing Secret** for secure playback.
5. **Save** the settings.

### Using Gumlet as a Video Source

After connecting:

1. Go to **FluentPlayer → Media** and create or edit a media item.
2. Choose **Gumlet** as the source type.
3. Browse your Gumlet collection and select the **video** you want to use.
4. Save the media.

**Related:** [Gumlet integration guide](/gumlet) for the full step-by-step setup, including signed URLs and live sources.

## Cloudflare R2

**Cloudflare R2** is S3-compatible object storage with **zero egress fees**. You upload ready-to-play video files to a bucket and FluentPlayer serves them through Cloudflare's global network.

### What You Need

- A [Cloudflare](https://dash.cloudflare.com/login) account with **R2 Object Storage** enabled.
- An R2 **bucket** with its **Public Development URL** (or a custom domain) enabled.
- An R2 **API token** with **Object Read & Write** permission, giving you an **Access Key ID** and **Secret Access Key**.

### How to Connect

1. Go to **FluentPlayer → Settings → Storage**.
2. Click **Configure** on the **Cloudflare R2** row.
3. Enter your **Account ID**, **Access Key**, **Secret Key**, **Bucket Name**, and **Bucket Public URL** (and an optional sub-folder).
4. Click **Test Connection** to verify.
5. **Save** the settings.

**Related:** [Cloudflare R2 & Stream integration guide](/cloudflare) for the full step-by-step setup on the Cloudflare side.

## Cloudflare Stream

**Cloudflare Stream** is a fully managed video platform that encodes your uploads into adaptive HLS and supports per-video signed playback — a good fit when you want Cloudflare to handle encoding for you.

### What You Need

- A [Cloudflare](https://dash.cloudflare.com/login) account with **Stream** enabled.
- Your Cloudflare **Account ID** (shown on the Stream page sidebar).
- An **API Token** with **Stream Read + Edit** permissions.

### How to Connect

1. Go to **FluentPlayer → Settings → Storage**.
2. Click **Configure** on the **Cloudflare Stream** row.
3. Enter your **Account ID** and **API Token**.
4. Click **Test Connection** to verify.
5. **Save** the settings.

**Related:** [Cloudflare R2 & Stream integration guide](/cloudflare) for details on both Cloudflare options.
