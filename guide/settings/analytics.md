# Analytics Settings

Welcome to the Analytics settings! If you have ever wondered who is watching your videos, how long they stay, and exactly when they stop watching, this is where you turn those insights on.

We give you two powerful ways to track your video engagement side by side: our beautifully detailed, built in Fluent Player Analytics and a seamless integration with Google Analytics.



## Setting Up Fluent Player Analytics (Pro)

Our built in analytics are like having a private command center right inside your WordPress dashboard. You do not need to log into any external websites to see how your videos are performing. Once you turn this on, a brand new **Analytics** menu will appear under Fluent Player in your WordPress sidebar.

### How to Activate Your Native Tracking:
1. Navigate to **Fluent Player -> Settings -> Analytics**.
2. Click on the **Fluent Player Analytics** tab.
3. Toggle **Enable Analytics** to the ON position. This tells your website to instantly start recording viewer data!

![Analytics](/guide/public/settings/analytics/analytics-1.webp)

4. We highly recommend toggling on **Auto Cleanup Analytics Data**. Video tracking can create a lot of data over time, and this keeps your database fast and healthy.
5. If you enable auto cleanup, enter a number in the **Retention (days)** box. For example, typing `30` means we will automatically delete stats that are older than a month.
6. Click **Save Settings**.

![Analytics](/guide/public/settings/analytics/analytics-2.webp)

### What Exactly Do We Track for You?
Once activated, we silently and securely record:
* **Plays:** How many times a viewer clicked play.
* **Watch time:** The total amount of hours or minutes people spent watching.
* **Progress milestones:** We track when viewers hit the 25%, 50%, 75%, and 100% marks of your video.
* **Top videos & users:** Easily see your most popular content and your most engaged logged in viewers.
* **Retention graphs:** A beautiful chart showing exactly where viewers lose interest and drop off.
* **Geographic location:** See what countries your audience is watching from.

> **🔍 Example:** To keep your media library as tidy as your database, FluentPlayer also runs a quiet daily background task that cleans up "auto draft" media items you never finished creating!

## Connecting Google Analytics

Do you already use Google Analytics 4 (GA4) to track your website traffic? You can send your video events straight to Google! This feature is entirely free and available to all FluentPlayer users.

### Events We Send to Google:
Whenever someone watches a video, we tell Google exactly which video it is (by sending the video ID and title) and trigger an event when they:
* Play the video.
* Reach a Progress milestone (25%, 50%, 75%, 100%).
* Complete the video.

### How to Set It Up:

#### Option A: You Already Have Google Analytics on Your Site (Highly Recommended!)
If your WordPress theme or another plugin is already loading Google Analytics, use this method. It prevents your website from loading heavy Google scripts twice, keeping your site blazing fast.

1. Navigate to **Fluent Player -> Settings -> Analytics**.
2. Click the **Google Analytics** tab.
3. Toggle on **Enable Google Analytics**.

![Analytics](/guide/public/settings/analytics/analytics-3.webp)

4. Toggle on **Use existing on page tag**.
5. Click **Save Settings**.

![Analytics](/guide/public/settings/analytics/analytics-5.webp)

#### Option B: You Do Not Have Google Analytics on Your Site Yet
If you want FluentPlayer to load Google Analytics for you, use this method.

1. First, grab your GA4 web stream measurement ID from your Google Analytics account (under *Admin -> Data streams*). It will look something like `G-XXXXXXXXXX`.
2. Navigate to **Fluent Player -> Settings -> Analytics**.
3. Click the **Google Analytics** tab and toggle on **Enable Google Analytics**.
4. Make sure **Use existing on page tag** is turned OFF.
5. Paste your **Measurement ID** into the box that appears.
6. Click **Save Settings**.

![Analytics](/guide/public/settings/analytics/analytics-4.webp)

> **⚠️ Troubleshooting:** Did you just set this up but don't see any video data in Google Analytics? Don't panic! Standard GA4 reports often take up to 24 hours to process new data. If you want to confirm it is working immediately, check the *Real time reports* section inside your Google Analytics dashboard.

## Choosing Your Analytics Path

You might be wondering: "Which one should I use?" The good news is that you can safely run both at the same time! We recommend using our built in analytics for detailed, day to day checks on specific videos, and Google Analytics to see how your videos fit into your broader marketing campaigns.

| Feature | Built in Analytics (Pro) | Google Analytics (Free/Pro) |
| :--- | :--- | :--- |
| **Where do you view the data?** | Right inside your WordPress Admin. | Over on the Google Analytics website. |
| **Can I see per video drop off charts?** | Yes, absolutely! | No, not without complex custom setups. |
| **Can I track specific logged in users?** | Yes, you can see exactly who watched what. | Very limited (Google tracks anonymously). |
| **Best used for...** | Deep diving into your video content and audience. | Big picture marketing and overall website traffic. |
