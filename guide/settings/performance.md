# Performance Settings

The Performance section controls how the player loads JavaScript on your site. These options help balance **interactivity** with **page speed** and metrics such as Core Web Vitals.

## Why This Matters

Heavy player scripts can affect how quickly your pages become interactive. Adjusting when those assets load can improve **LCP** (Largest Contentful Paint) and **TBT** (Total Blocking Time) on pages where the player is not above the fold, at the cost of a slightly later player initialization in some cases.

## Options

### Dynamic Load JS

When **Dynamic load JS** is enabled, Fluent Player defers loading the larger player JavaScript bundles until they are needed, for example when a player enters the viewport or when the user interacts with the page. When it is off, those assets may load earlier (eagerly), which can make the player ready sooner but increase initial JavaScript work on the page.

| When to consider enabling | When you might leave it off |
|---------------------------|-----------------------------|
| Many players per site and you want to prioritize first paint | A single hero video where instant player readiness matters most |
| Pages where video is below the fold | Landing pages where the player is the main CTA |

Exact behavior can vary by theme and caching plugins. After changing this setting, spot check a few key pages in your browser's developer tools (Network tab) and, if you use them, your speed testing tools.

### AJAX Progress

**AJAX progress** relates to how progress and related updates are requested while the admin or player communicates with WordPress. Leave the default unless support or release notes recommend a change for your environment.

## Saving Changes

Click **Save Settings** after changing performance options. Clear any full page cache or CDN cache so visitors receive the updated loading behavior.
