# Google Analytics

FluentPlayer can send video interaction events directly to your **Google Analytics 4 (GA4)** property. This lets you track plays, progress milestones, and completions alongside all your other website data — all inside your existing GA4 dashboard.

::: info Pro feature
The Google Analytics integration requires **FluentPlayer Pro**. Your GA4 account is free, but FluentPlayer only sends video events when Pro is active. Without Pro, the Analytics settings page shows an upgrade prompt and no events are sent.
:::

## Tracked Video Events

When a viewer interacts with a video, FluentPlayer automatically sends the following events to GA4:

| Event | When it fires |
|-------|--------------|
| **Play** | Viewer starts playing the video |
| **Progress** | Viewer reaches 25%, 50%, 75%, or 100% of the video |
| **Complete** | Video finishes playing |

Each event includes the **Video ID** and **Video Title**, so you can filter and compare performance across individual videos inside GA4.

## Step 1: Set Up a Data Stream in GA4

Before connecting FluentPlayer, you need a GA4 **Measurement ID**. If you already have one, skip to [Step 2](#step-2-enable-google-analytics-in-fluentplayer).

1. Open [Google Analytics](https://analytics.google.com/) and go to your GA4 property.
2. In the left sidebar, click **Admin** (gear icon at the bottom).
3. Under the **Property** column, click **Data Streams**.
4. Click **Add stream** → **Web**.

![Add a web data stream in GA4](/guide/public/integrations/google-analytics/add-stream-data-2.webp)

5. Enter your **Website URL** and a **Stream name** (for example, "My WordPress Site").
6. Click **Create stream**.

![Data stream setup — URL and stream name fields](/guide/public/integrations/google-analytics/set-up-stream-data-3.webp)

7. Once the stream is created, copy the **Measurement ID** (format: `G-XXXXXXXXXX`) shown at the top right of the stream details panel. You will need this in the next step.

## Step 2: Enable Google Analytics in FluentPlayer

1. In your WordPress admin, go to **FluentPlayer → Settings → [Analytics](/analytics)**.
2. Open the **Google Analytics** tab.
3. Toggle **Enable Google Analytics** to **ON**.

![Enable Google Analytics in FluentPlayer settings](/guide/public/integrations/google-analytics/enable-google-analytics-1.webp)

4. Choose one of the two connection methods:

   - **Use existing on-page tag** — Enable this if GA4 is already installed on your site via your theme, another plugin, or Google Tag Manager. FluentPlayer will attach its events to the existing GA4 instance without loading a second tag.
   - **Measurement ID** — If your site does not have GA4 installed yet, paste the `G-XXXXXXXXXX` ID you copied in Step 1. FluentPlayer will load the GA4 tag automatically.

5. Click **Save Settings**.

## Step 3: Test the Integration

Play a video on your site, then verify that events are arriving in GA4.

1. In GA4, go to **Reports → Realtime**.
2. Play a video on your WordPress site.
3. You should see the **play** event appear within a few seconds under the **Event count by Event name** card.

![GA4 Realtime report showing FluentPlayer video events](/guide/public/integrations/google-analytics/test-5.webp)

::: tip Events not appearing?
Standard GA4 reports can take **24–48 hours** to process data. Use **Realtime** reports to confirm events are arriving immediately after setup.
:::

## Viewing Video Data in GA4

After events start flowing, you can explore them in several places:

- **Reports → Engagement → Events** — See total counts for `play`, `progress`, and `complete` events.
- **Explore** — Build a custom funnel or free-form report, filtering by event name and video title to compare drop-off across videos.
- **Realtime** — Confirm events are firing live during a test play.

To filter by a specific video, use the **video_title** or **video_id** event parameter as a secondary dimension in your reports.

## Google Analytics vs Built-In Analytics

| | Google Analytics (GA4) | Built-In Analytics (Pro) |
|---|---|---|
| **Plan required** | FluentPlayer Pro (GA4 account is free) | FluentPlayer Pro |
| **Where you view it** | Google Analytics UI | WordPress admin |
| **Best for** | Marketing analysis; combining with other site data | Per-video and per-viewer insights |
| **Audience retention** | Not built in (needs custom setup) | Included |
| **Per-user tracking** | Limited (anonymous by default) | Included for logged-in users |

**Recommendation:** Use **both** if you have FluentPlayer Pro. Built-in analytics give rich, video-specific insights inside WordPress. Google Analytics connects your video data to the rest of your site traffic for a broader marketing picture.

## Related Pages

- [Built-In Analytics (Pro)](/built-in-analytics) — the in-WordPress video analytics dashboard
- [Analytics Settings](/analytics) — enable and configure both analytics options from one screen
