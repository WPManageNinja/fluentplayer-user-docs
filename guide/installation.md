# Installation

This page walks you through installing and activating Fluent Player on your WordPress site. The process takes about two minutes.

## Requirements

Before you install, make sure your site meets these requirements:

- **WordPress** 5.0 or higher
- **PHP** 7.4 or higher

::: tip Not sure about your PHP version?
In your WordPress admin, go to **Tools → Site Health → Info → Server**. You will see your PHP version listed there.
:::

## Installing the free plugin

**Option 1: From the WordPress plugin directory**

1. In your WordPress admin, go to **Plugins → Add New**.
2. Search for **Fluent Player**.
3. Click **Install Now** next to Fluent Player.
4. Once installed, click **Activate**.

**Option 2: Upload the zip file**

1. Download the Fluent Player zip file from your source.
2. In WordPress admin, go to **Plugins → Add New → Upload Plugin**.
3. Click **Choose File**, select the zip file, and click **Install Now**.
4. Once installed, click **Activate**.

After activation, you will see a new **Fluent Player** menu in your WordPress admin sidebar.

## Installing the Pro plugin

If you have a Fluent Player Pro license:

1. Make sure the **free Fluent Player** plugin is already installed and active (Pro requires it).
2. Download the Pro zip file from your account or purchase page.
3. In WordPress admin, go to **Plugins → Add New → Upload Plugin**.
4. Upload the Pro zip file and click **Install Now**.
5. Click **Activate**.

After activating Pro, the admin menu label changes to **Fluent Player Pro**, and additional features like [Playlists](/guide/playlists/), [Mux](/guide/integrations/mux), [BunnyCDN](/guide/integrations/bunnycdn-stream), [timed content](/guide/display-embed/block#timed-content-pro) in the media block, and [Analytics](/guide/integrations/analytics) become available.

::: warning Important
The Pro plugin will not work without the free plugin. Always keep both plugins active if you are using Pro features.
:::

## After installation

Once Fluent Player is active, here is what you will see:

- **Fluent Player** (or **Fluent Player Pro**) in the admin sidebar.
- Inside, you will find:
  - **Media:** List, filter (for example All, Public, Private, Draft), search, and **Add Media** to create videos.
  - **Playlists:** Create and manage playlists (Pro).
  - **Analytics:** Built in dashboards when Pro and analytics are enabled.
  - **Settings:** Global options: default preset, branding, performance, analytics, integrations, and more.
- Inside the Fluent Player app, the top bar usually shows the **fluentPlayer** logo, quick switches between **Media** and **Playlists**, a **Settings** (gear) icon that opens the full settings area, and **Docs** (book icon) for help.

## What to do next

You are ready to add your first video. Head to [Quick Start](/guide/quick-start) for a step by step walkthrough.

## Troubleshooting

| Problem | Solution |
|---------|----------|
| Fluent Player menu does not appear | Deactivate and reactivate the plugin. Clear any caching plugins. |
| "Plugin could not be activated" error | Check that your server meets the PHP 7.4+ requirement. |
| Pro features are not showing | Make sure both free and Pro plugins are active. |
| Conflict with another plugin | Deactivate other plugins one by one to find the conflict. |

If you still have trouble, check the plugin's support page or contact the support team.
