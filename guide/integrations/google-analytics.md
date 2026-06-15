# Google Analytics

Fluent Player allows you to send video interaction data directly to your **Google Analytics (GA4)** property. This integration helps you track video performance (such as plays, progress, and completions) alongside your other website traffic data. 

Unlike the [built-in analytics](/guide/integrations/analytics) (Pro), Google Analytics integration is available in the **free** version of Fluent Player.

## Tracked Video Events

When a viewer interacts with a video, Fluent Player automatically sends the following events to GA4:

 * **Play:** Fired when a viewer starts playing a video.
 * **Progress:** Sent when viewers reach specific milestones (25%, 50%, 75%, and 100%).
 * **Complete:** Triggered when the video finishes playing.

Each event includes metadata like the **Video ID** and **Title**, allowing you to create detailed reports for individual videos within your Google Analytics dashboard.

## How to Set Up Google Analytics

Follow these steps to connect your player to GA4:

- Navigate to **Fluent Player > Settings > [Analytics](/guide/settings/analytics)**.
- Select the **Google Analytics** tab.
- Toggle **Enable Google Analytics** to the ON position.

![Set Up Analytics](/guide/public/integrations/google-analytics/enable-google-analytics-1.webp)

**Use existing on page tag:** Enable this if your site already has GA4 installed via your theme or another plugin.
**Measurement ID:** If your site does not have GA4 installed, enter your **Measurement ID** (e.g., G-XXXXXXXXXX) to let Fluent Player load the tag for you.

**Best for:** Sites without GA yet, or when you want a dedicated property for video events.


## Viewing the Data in Google Analytics

After setup, you can find video events in Google Analytics:

1. Go to your GA4 property.
2. Navigate to **Reports → Engagement → Events** (or use Explore).
3. Look for the video related events sent by Fluent Player.
4. Filter or create reports based on video ID, title, or event type.

::: tip
It may take a few hours for events to appear in GA4 after you first set it up. Real time reports in GA4 can show events sooner.
:::

## Google Analytics vs Built-In Analytics

| | Google Analytics | Built in Analytics (Pro) |
|---|-----------------|-------------------------|
| **Cost** | Free (GA4 is free) | Requires Pro |
| **Where to view** | Google Analytics UI | WordPress admin |
| **Best for** | Marketing analysis, combining with other GA data | Detailed per video and per user insights |
| **Per video retention** | Not built in (needs custom setup) | Included |
| **Per user tracking** | Limited (anonymous by default) | Included (logged in users) |

**Recommendation:** If you have Fluent Player Pro, use **both**. Built in analytics give you rich, video specific insights inside WordPress. Google Analytics gives you a broader marketing picture.

Using Google Analytics with Fluent Player is a great way to see how video content contributes to your overall website goals.