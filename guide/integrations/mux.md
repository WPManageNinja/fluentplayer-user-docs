# Mux (Pro)

**Mux** is a professional video platform for hosting, streaming, and analyzing video. Fluent Player Pro includes a full **Mux integration** so you can connect your Mux account, upload or link assets, use **HLS playback**, optional **signed URLs** for protected content, **live streaming**, **AI-generated captions**, and **Mux Data** playback analytics — without leaving WordPress.

::: info Pro feature
Mux is available only with **FluentPlayer Pro**. Install and activate the free Fluent Player plugin first, then activate Pro.
:::

## Why use Mux?

 * **Adaptive Streaming:** Deliver content via HLS with automatic quality switching based on the viewer’s network speed.
 * **Managed Encoding:** Mux handles the heavy lifting of video processing. Webhooks keep your WordPress site updated on asset status.
 * **Live Streaming:** Create and manage live broadcasts via the Mux API, seamlessly integrated into the plugin’s REST layer.
 * **Advanced Security:** Protect your content with **Signed Playback URLs**. The integration also supports **Mux Playback Restrictions**, allowing you to define granular delivery rules.
 * **AI Captions:** Automatically generate subtitles in multiple languages using Mux’s AI transcription service.
 * **Mux Data:** Use your Environment Key to monitor playback quality and performance analytics alongside Fluent Player’s native tracking.

## Generate API Credentials in Mux

To connect the platforms, you first need to create access tokens in your Mux account:

Log in to your **[Mux](https://mux.com) Dashboard** and navigate to **Settings → Access Tokens**.
Click **Create Token**.

![Access Token](/guide/public/integrations/mux/access-token-1.webp)

A popup will appear. Now, provide a **Name** for the token and ensure you select **Mux Video** permissions **(Read + Write)**. 

![Access Token](/guide/public/integrations/mux/create-access-token-2.webp)

Copy your **Token ID** and **Token Secret** for later use.


>[!Note]
>The Token Secret is only shown once in the Mux dashboard; be sure to save it securely.

![Copy Token and Secret](/guide/public/integrations/mux/save-token-3.webp)

## Generate a Singing Key (Optional)

If you plan to use restricted/private content, you need a Signing Key:

Go to **Settings → Signing Keys** and click **Generate Key**.

![Singing Key](/guide/public/integrations/mux/siging-key-5.webp)

A popup will display your **Key ID** and **Secret Key**. **Copy** these for the integration settings.

![ Save Singing Key](/guide/public/integrations/mux/save-singing-key-6.webp)

### Configure Webhooks (Optional but Recommended)

Webhooks allow Mux to "talk" to WordPress, notifying your site when a video is finished processing or if an error occurred.

 - In your WordPress admin, go to **FluentPlayer Pro → Settings → Storage → Mux**.
 - **Copy** the **Webhook URL** provided in the settings.
 - In the Mux Dashboard, go to **Settings → Webhooks **and click **Create New Webhook**.

>[!Note]
> Webhook functionality is essential for automatic status and metadata updates after a video finishes processing.

![Webhook](/guide/public/integrations/mux/webhooks-7.webp)

 - A popup window will appear. **Paste** the **URL** and save. Mux will provide a **Webhook Secret**.
 - **Copy** that secret back into the **Webhook Secret** field in your **FluentPlayer** settings.

![Webhook Secret](/guide/public/integrations/mux/create-webhook-8.webp)

### Mux Data Environment Key (Optional)

**Copy** the **Environment Key** from the **Mux Dashboard** top right corner for future use purpose.

![Environment Key](/guide/public/integrations/mux/enviroment-key-9.webp)

## Connect Mux to FluentPlayer

 - In your WordPress admin, go to **FluentPlayer Pro → Settings → Storage**. 
 - Find the **Mux** row and click **Configure**.
 - Enable the **Enable Integration** toggle. 
 - **Paste** your **Token ID** and **Token Secret** into the designated fields.
 - Click **Test Connection** to verify the credentials. Click **Save Settings** button to save it.

## Configure Optional Settings

 * **Signed URLs:** **Enable** this if you require access-restricted playback for your videos.
 * **Auto Captions:** **Turn** this on to have Mux automatically generate subtitles for new uploads using AI transcription.
 * **Webhook Secret:** Create a webhook in your Mux dashboard using the URL provided in the settings and paste the secret here. This allows Mux to notify WordPress when video assets are ready.
 * **Mux Data Environment Key:** Enter your environment key from the Mux Data dashboard to track playback quality analytics.

![Connect Mux to FluentPlayer](/guide/public/integrations/mux/configure-mux-10.webp)

## Use Mux as a Video Source

Once connected, you can use Mux assets anywhere on your site:

 - Go to **FluentPlayer → Media** and click **Add Media**.
 - Under **Source Type**, select **Mux or Mux Live**.

![Mux Video Source](/guide/public/integrations/mux/mux-or-mux-video-11.webp)

 * **Search & Select:** You can browse your existing Mux library directly from the interface.
 * **Direct Upload:** Click **Upload Video** to send a file from your computer directly to Mux.

![Upload Video](/guide/public/integrations/mux/mux-video-13.webp)

 * **Publish:** Once an asset is selected, publish the media item to generate a shortcode or use the Fluent Player Gutenberg block.

![Shortcode](/guide/public/integrations/mux/paste-shortcode-14.webp)

## Mux and Fluent Player Analytics

You can use **both**:

- **[Built-in Analytics](/guide/integrations/analytics)** — Viewership inside WordPress (plays, retention, top videos, locations, and more).
- **Mux Data** (optional) — Enter the **Mux Data environment key** in the integration for Mux’s own quality and delivery analytics.

## Troubleshooting

| Issue | What to check |
|-------|----------------|
| Connection test fails | Token ID/secret, Mux Video permissions, and that the token is not revoked. |
| Video stays “processing” | Webhook URL and secret in Mux; your site must receive HTTPS callbacks. |
| Playback errors with signed URLs enabled | Signing key pair must be generated and stored per the integration; clock skew and URL expiry can affect playback. |


Integrating Mux with **Fluent Player Pro** provides a scalable, professional-grade video delivery system within WordPress. From adaptive HLS streaming to real-time analytics, this connection ensures your audience receives the best possible viewing experience while you maintain full control over your content management
