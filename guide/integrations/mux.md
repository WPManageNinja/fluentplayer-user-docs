# Mux (Pro)

**Mux** is a professional video platform for hosting, streaming, and analyzing video. Fluent Player Pro includes a full **Mux integration** so you can connect your Mux account, upload or link assets, use **HLS playback**, optional **signed URLs** for protected content, **live streaming**, **AI-generated captions**, and **Mux Data** playback analytics — without leaving WordPress.

::: info Pro feature
Mux is available only with **FluentPlayer Pro**. Install and activate the free Fluent Player plugin first, then activate Pro.
:::

## Why use Mux?

- **Adaptive streaming** — HLS delivery with automatic quality switching for viewers on different networks and devices.
- **Managed encoding** — Mux processes uploads and prepares playback URLs; webhooks can update your media when an asset is ready or when something fails.
- **Live streaming** — Create and manage live streams from the Mux API (exposed in the plugin’s REST layer for the admin app).
- **Optional security** — Signed playback URLs and signing keys for restricted or private playback. **Mux Playback Restrictions** (separate from signing keys) let you define delivery rules in Mux; Fluent Player Pro exposes REST endpoints to list, create, and delete restrictions for advanced workflows.
- **Auto captions** — Optional AI-generated subtitles in several languages when you enable auto captions in integration settings.
- **Mux Data** — Optional environment key so you can use Mux’s playback quality analytics alongside Fluent Player’s built-in analytics.

## Generate API Credentials in Mux

Log in to your **[Mux](https://mux.com) Dashboard** and navigate to **Settings → Access Tokens**.
Click **Create Token**.

![Access Token](/guide/public/integrations/mux/access-token-1.webp)

A popup will appear. Now, provide a **Name** for the token and ensure you select **Mux Video** permissions **(Read + Write)**. 

![Access Token](/guide/public/integrations/mux/create-access-token-2.webp)

Copy your **Token ID** and **Token Secret** for later use.


>[!Note]
>The Token Secret is only shown once in the Mux dashboard; be sure to save it securely.


<<<<<<< Updated upstream
1. Go to **Fluent Player → Media** and create or edit a media item.
2. Choose **Mux** as the video source type (or pick an existing Mux asset from the library, depending on the UI flow).
3. Publish the media and embed it with the **[fluentplayer](/guide/display-embed/shortcode)** shortcode or the **Fluent Player** block.
=======
![Copy Token and Secret](/guide/public/integrations/mux/save-token-3.webp)
>>>>>>> Stashed changes

### Generate Singing Key (Optional)

To generate singing key, click on the **Generate Key** button under the **Settings > Singing** Keys. 

![Singing Key](/guide/public/integrations/mux/siging-key-5.webp)

A popup will appear. Here you will get **Key Id** and **Secrete Key**. Just **copy** those for later use.

![ Save Singing Key](/guide/public/integrations/mux/save-singing-key-6.webp)

### Webhooks (Optional)

**Create a webhook** in your Mux dashboard using the URL provided in the **Settings > Webhooks**. This allows **Mux** to notify WordPress when video assets are ready.

>[!Note]
> Webhook functionality is essential for automatic status and metadata updates after a video finishes processing.

![Webhook](/guide/public/integrations/mux/webhooks-7.webp)

A popup window will appear. Now, **paste** the **webhook secret** here. You will find this in your **FluentPlayer Pro → Settings → Storage → Webhook Secret URL**. Click on the **Done** button.

![Webhook Secret](/guide/public/integrations/mux/create-webhook-8.webp)

### Mux Data Environment Key (Optional)

**Copy** the **Environment Key** from the **Mux Dashboard** top right corner for future use purpose.

![Environment Key](/guide/public/integrations/mux/enviroment-key-9.webp)

## Connect Mux to FluentPlayer

-In your WordPress admin, go to **FluentPlayer Pro → Settings → Storage**. 
-Find the **Mux** row and click **Configure**.
-Enable the **Enable Integration** toggle. 
-**Paste** your **Token ID** and **Token Secret** into the designated fields.
-Click **Test Connection** to verify the credentials. Click **Save Settings** button to save it.

## Configure Optional Settings

 * **Signed URLs:** **Enable** this if you require access-restricted playback for your videos.
 * **Auto Captions:** **Turn** this on to have Mux automatically generate subtitles for new uploads using AI transcription.
 * **Webhook Secret:** Create a webhook in your Mux dashboard using the URL provided in the settings and paste the secret here. This allows Mux to notify WordPress when video assets are ready.
 * **Mux Data Environment Key:** Enter your environment key from the Mux Data dashboard to track playback quality analytics.

![Connect Mux to FluentPlayer](/guide/public/integrations/mux/configure-mux-10.webp)

## Use Mux as a Video Source

Navigate to **FluentPlayer → Media** and click **Add Media**. In the Source section, select **Mux** or **Mux Live** as the source type. 

![Mux Video Source](/guide/public/integrations/mux/mux-or-mux-video-11.webp)

Also, you can direct upload Mux Video from here by clicking the **Upload Video** **(must mux be configure before do it)**.

![Upload Video](/guide/public/integrations/mux/mux-video-13.webp)

Pick an existing **Mux asset** from your library or enter a playback ID. **Publish** your media item to generate a shortcode or use it in the **Gutenberg block**.

![Shortcode](/guide/public/integrations/mux/paste-shortcode-14.webp)

## Mux and Fluent Player analytics

You can use **both**:

- **[Built-in Analytics](/guide/integrations/analytics)** — Viewership inside WordPress (plays, retention, top videos, locations, and more).
- **Mux Data** (optional) — Enter the **Mux Data environment key** in the integration for Mux’s own quality and delivery analytics.

## Troubleshooting

| Issue | What to check |
|-------|----------------|
| Connection test fails | Token ID/secret, Mux Video permissions, and that the token is not revoked. |
| Video stays “processing” | Webhook URL and secret in Mux; your site must receive HTTPS callbacks. |
| Playback errors with signed URLs enabled | Signing key pair must be generated and stored per the integration; clock skew and URL expiry can affect playback. |


Integrating Mux with Fluent Player Pro provides a scalable, professional-grade video delivery system within WordPress. From adaptive HLS streaming to real-time analytics, this connection ensures your audience receives the best possible viewing experience while you maintain full control over your content management
