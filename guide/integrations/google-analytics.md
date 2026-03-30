# Google Analytics

Fluent Player can send **video events** to your **Google Analytics** property. This lets you track plays, progress, and completions alongside your other website analytics in GA4.

Unlike the [built-in analytics](/guide/integrations/analytics) (Pro), Google Analytics integration is available in the **free** version of Fluent Player.

## What events are sent

When a viewer interacts with a Fluent Player video, the plugin can send events to Google Analytics:

| Event | When it fires |
|-------|--------------|
| **Play** | The viewer starts playing a video |
| **Progress** | The viewer reaches progress milestones (e.g., 25%, 50%, 75%, 100%) |
| **Complete** | The video finishes playing |

Each event includes data about the video (ID, title, etc.) so you can filter and report on individual videos in GA4.

## How to set up

See [**Settings → Analytics**](/guide/settings/analytics) for the full options reference and both setup options. Quick steps:

1. Go to **Fluent Player → Settings → Analytics**.
2. Click the **Google Analytics** tab (beside **Fluent Player Analytics**).
3. Turn **Enable Google Analytics** on.
4. If your site already loads GA, enable **Use existing on-page tag**. Otherwise enter the **Measurement ID** (`G-XXXXXXXXXX`) if the field is shown.
5. Click **Save Settings**.

### Option A: Use an existing tag

Enable **Use existing on-page tag** when GA is already loaded by your theme, another plugin, or gtag. Fluent Player will not duplicate the loader.

### Option B: New tag / measurement ID

If the UI exposes a **measurement ID** field, enter your GA4 web stream ID (`G-XXXXXXXXXX`) from **Google Analytics → Admin → Data streams**.

**Best for:** Sites without GA yet, or when you want a dedicated property for video events.

## Viewing the data in Google Analytics

After setup, you can find video events in Google Analytics:

1. Go to your GA4 property.
2. Navigate to **Reports → Engagement → Events** (or use Explore).
3. Look for the video-related events sent by Fluent Player.
4. Filter or create reports based on video ID, title, or event type.

::: tip
It may take a few hours for events to appear in GA4 after you first set it up. Real-time reports in GA4 can show events sooner.
:::

## Google Analytics vs built-in analytics

| | Google Analytics | Built-in Analytics (Pro) |
|---|-----------------|-------------------------|
| **Cost** | Free (GA4 is free) | Requires Pro |
| **Where to view** | Google Analytics UI | WordPress admin |
| **Best for** | Marketing analysis, combining with other GA data | Detailed per-video and per-user insights |
| **Per-video retention** | Not built-in (needs custom setup) | Included |
| **Per-user tracking** | Limited (anonymous by default) | Included (logged-in users) |

**Recommendation:** If you have Fluent Player Pro, use **both**. Built-in analytics give you rich, video-specific insights inside WordPress. Google Analytics gives you a broader marketing picture.

## Next steps

- [Built-in Analytics (Pro)](/guide/integrations/analytics) — The Pro analytics dashboard.
- [Settings → Analytics](/guide/settings/analytics) — All analytics settings in one place (both tabs).
- [Integrations Overview](/guide/integrations/) — All available integrations.
