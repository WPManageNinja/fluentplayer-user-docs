# Storage Settings

The Storage section is where you connect external **video hosting** providers to FluentPlayer Pro. Once connected, you can choose these providers as video sources when adding or editing media items.

::: info Pro feature
All storage integrations require **FluentPlayer Pro**.
:::

::: info Note
Email and CRM providers (FluentCRM, Mailchimp, Webhook) are configured under [**Settings → Integrations**](/guide/settings/integrations), not here.
:::

## Browsing storage providers

Navigating your available integrations is simple. You can use the search bar on the right or filter the list using the tabs at the top of the screen:

- **All:** Shows every integration card available.
- **Email Service Provider:** Filters the view to show dedicated email platforms like FluentCRM and Mailchimp.
- **Others:** Filters the view to show custom routing options like Webhooks.

Each integration card displays a brief description, a status badge (Enabled or Disabled), and a **Configure** button to manage your connection settings.

## BunnyCDN Stream

**BunnyCDN Stream** is a video streaming CDN with encoding, multi-bitrate delivery, and global edge nodes. FluentPlayer can browse your Bunny Stream libraries and serve HLS video directly.

### What you need

- A [Bunny.net](https://bunny.net) account.
- A **Stream library** created in your Bunny dashboard with at least one video uploaded.
- Your **API key** (found in Bunny → Account → API Keys).

### How to connect

1. Go to **FluentPlayer → Settings → Storage**.
2. Click **Configure** on the **BunnyCDN Stream** row.
3. Enter your **API key**.
4. Enter your **library** details (pull zone or library ID) if prompted.
5. Click **Test connection** to verify FluentPlayer can reach Bunny.
6. **Save** the settings.

### Using BunnyCDN Stream as a video source

After connecting:

1. Go to **FluentPlayer → Media** and create or edit a media item.
2. Choose **BunnyCDN Stream** as the source type.
3. Select the **library** (if you have multiple).
4. Select the **video** you want to use.
5. Save the media.

**Related:** [BunnyCDN Stream integration guide](/guide/integrations/bunnycdn-stream) for advanced options.

## BunnyCDN Storage

**BunnyCDN Storage** lets you store video files in Bunny's storage zones and serve them through their CDN. This is useful when you want self-managed file hosting rather than a full streaming platform.

### What you need

- A [Bunny.net](https://bunny.net) account.
- A **storage zone** created in your Bunny dashboard.
- Your storage zone **name** and **API key** (or access credentials).

### How to connect

1. Go to **FluentPlayer → Settings → Storage**.
2. Click **Configure** on the **BunnyCDN Storage** row.
3. Enter your **storage zone name** and **API key**.
4. Click **Test connection** to verify.
5. **Save** the settings.

### Using BunnyCDN Storage as a video source

After connecting:

1. Go to **FluentPlayer → Media** and create or edit a media item.
2. Choose **BunnyCDN Storage** as the source type.
3. Browse or select the **video file** in your storage zone.
4. Save the media.

**Related:** [BunnyCDN Storage integration guide](/guide/integrations/bunnycdn-storage) for file management options.

## Mux

**Mux** is a professional video platform with adaptive HLS streaming, live streaming, AI-generated captions, signed URL playback, and Mux Data analytics. FluentPlayer Pro provides a full Mux integration including webhook support for asset-ready events.

### What you need

- A [Mux](https://mux.com) account.
- A Mux **API access token** with **Mux Video** permissions (read and write), from **Mux dashboard → Settings → API access tokens**.
- FluentPlayer **Pro** active on your site.

### How to connect

1. Go to **FluentPlayer → Settings → Storage**.
2. Click **Configure** on the **Mux** row.
3. Enter your **Token ID** and **Token Secret** from the Mux dashboard.
4. Click **Test connection** to confirm the credentials work.
5. **Save** the settings.

### Optional Mux settings

| Option | Purpose |
|--------|---------|
| **Signed URLs** | Serve time-limited signed URLs for protected playback, thumbnails, and storyboards. Enable only if you need access-restricted video. |
| **Enable auto captions** | Ask Mux to auto-generate captions for new uploads (language is configurable). |
| **Webhook secret** | Verifies events from Mux (asset ready, upload failed, live events). Add a webhook endpoint in the Mux dashboard and paste the signing secret here. |
| **Mux Data environment key** | Optional key for Mux's playback quality analytics. |

### Using Mux as a video source

After connecting:

1. Go to **FluentPlayer → Media** and create or edit a media item.
2. Choose **Mux** as the source type.
3. Select an existing Mux asset or enter the playback ID.
4. Save the media.

**Related:** [Mux integration guide](/guide/integrations/mux) for live streaming, signed URLs, and advanced API details.
