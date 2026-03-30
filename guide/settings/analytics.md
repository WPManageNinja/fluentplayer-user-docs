# Analytics Settings

**Fluent Player → Settings → Analytics**

The Analytics section has **two tabs** side by side:

- **Fluent Player Analytics** — Native video tracking stored in your WordPress database (Pro only)
- **Google Analytics** — Send video events to a GA4 property (free and Pro)

Click **Save Settings** (top right) after making changes on either tab.

---

## Fluent Player Analytics tab

::: info Pro feature
Built-in analytics require **Fluent Player Pro**. After enabling, the **Analytics** menu item appears under Fluent Player in the WordPress sidebar.
:::

### Options

| Option | Description |
|--------|-------------|
| **Enable Analytics** | Master toggle — *"Track video plays and engagement metrics natively."* Turning this on activates the tracking pipeline and creates the analytics database tables. |
| **Auto Cleanup Analytics Data** | When enabled, old analytics rows are automatically deleted on a schedule. |
| **Retention (days)** | How many days of data to keep when auto cleanup is running. Data older than this value is removed. Example: `30`. |

Fluent Player also runs a **daily WordPress cron** task (`fluent_player/daily_cleanup`) that can clean up **auto-draft** media and similar housekeeping — separate from analytics retention but part of keeping your library tidy.

### What is tracked (once enabled)

| Metric | Description |
|--------|-------------|
| Plays | Total number of times a video starts |
| Watch time | Total time viewers have spent watching |
| Progress milestones | 25%, 50%, 75%, 100% completion events |
| Top videos | Most-played or most-watched content |
| Top users | Most-engaged logged-in viewers |
| Devices | Browser and device breakdown |
| Retention | Per-video chart of where viewers drop off |
| Location | Geographic breakdown of views |
| New vs returning | Viewer recency within a date range |

### How tracking works

When analytics are enabled, the player sends events via the WordPress AJAX action `fluent_player_track_event`. The handler validates a nonce, applies a rate limit (up to ~30 requests per minute per IP), and stores media ID, watch duration, and completion percentage.

### Using the analytics dashboard

After enabling, open **Fluent Player → Analytics** in the WordPress sidebar to access the dashboard views: Overview, Top Videos, Top Users, and per-video/per-user detail pages with retention charts.

**Related:** [Built-in Analytics guide](/guide/integrations/analytics) — full dashboard walkthrough.

---

## Google Analytics tab

Google Analytics integration is available in **both the free and Pro** versions of Fluent Player.

### Options

| Option | Description |
|--------|-------------|
| **Enable Google Analytics** | Master toggle — *"Send video analytics events to Google Analytics."* |
| **Use existing on-page tag** | *"Use an existing Google Analytics tag on your page instead of loading a new one."* When **on**, Fluent Player **does not inject a second** `gtag.js` / GA snippet — it sends video events through the **already loaded** global `gtag` (or equivalent) from your theme or another plugin. When **off**, Fluent Player may load its own tag using the measurement ID you provide. Use **on** whenever your site already loads Google Analytics to avoid duplicate scripts and double-counting issues. |

A **Measurement ID** field (`G-XXXXXXXXXX`) appears when Fluent Player should load GA for you. If you only use **Use existing on-page tag**, your existing site configuration supplies the measurement ID to GA; Fluent Player still needs **Enable Google Analytics** turned on so it knows to fire events.

### Events sent to GA

| Event | When it fires |
|-------|--------------|
| **Play** | Viewer starts playing a video |
| **Progress** | Viewer reaches 25%, 50%, 75%, 100% milestones |
| **Complete** | Video finishes playing |

Each event includes the video ID and title so you can filter by individual videos in GA4 reports.

### Setup options

**Option A — Use an existing tag (recommended for most sites)**

1. Make sure GA is already loading on your site (via theme, a GA plugin, or gtag).
2. Enable **Enable Google Analytics**.
3. Enable **Use existing on-page tag**.
4. Save Settings.

**Option B — New measurement ID**

1. Get your GA4 web stream measurement ID from **Google Analytics → Admin → Data streams** (`G-XXXXXXXXXX`).
2. Enable **Enable Google Analytics**.
3. Enter the **Measurement ID**.
4. Save Settings.

::: tip
Events may take a few hours to appear in GA4 standard reports. Use **GA4 → Real-time reports** for immediate confirmation that events are being received.
:::

### Viewing data in GA4

1. Open your GA4 property.
2. Go to **Reports → Engagement → Events**.
3. Filter by the video event names sent by Fluent Player.

### Built-in analytics vs Google Analytics

| | Built-in Analytics | Google Analytics |
|---|-------------------|-----------------|
| **Where data lives** | Your WordPress database | Google's servers |
| **Requires Pro** | Yes | No |
| **Dashboard** | Inside WordPress admin | Google Analytics UI |
| **Per-video retention chart** | Yes | Not built-in |
| **Per-user stats** | Yes (logged-in users) | Limited |
| **Best for** | Detailed video-specific insights | Marketing analysis alongside site data |

You can use **both simultaneously**. Built-in analytics give you rich WordPress-native dashboards; Google Analytics gives you a broader marketing picture.

**Related:** [Google Analytics guide](/guide/integrations/google-analytics) — full setup and GA4 reporting walkthrough.

---

## Next steps

- [Built-in Analytics guide](/guide/integrations/analytics) — Dashboard views, retention charts, per-user stats.
- [Google Analytics guide](/guide/integrations/google-analytics) — Viewing events in GA4, measurement ID setup.
- [Export](/guide/settings/export) — Download captured email data (separate from analytics data).
- [Settings Overview](/guide/settings/) — All settings sections at a glance.
