---
title: "Migrate from Presto Player"
description: "Import your Presto Player settings, media, and (with Pro) presets, playlists, analytics, and email submissions into FluentPlayer with the built-in migration tool. Your Presto Player data is never modified."
---

# Migrate from Presto Player

Already using **Presto Player**? FluentPlayer includes a built-in migration tool that brings your existing settings and media into FluentPlayer in a few clicks, and FluentPlayer Pro adds presets, playlists, analytics, and email submissions — so you can switch without rebuilding everything by hand.

The migration is a one-way **import**: it copies data *from* Presto Player *into* FluentPlayer. Your Presto Player data is only read, never changed, so you can keep both plugins active and take your time reviewing the result. The one optional exception is **Rewrite Content References**, which updates your posts and pages (see [Step 5](#step-5-rewrite-content-references-optional)).

::: info Free and Pro
The migration tool is included in the free plugin. Importing **global settings** and **media** works in Free. Importing **presets**, **playlists**, **analytics**, and **email submissions** requires **FluentPlayer Pro**. Those options appear disabled with a **Pro** tag on the free plugin.
:::

## Before You Start

Make sure both of these are true before you begin:

- **FluentPlayer is installed and active.** The Migration tab appears in the settings once Presto Player is detected. To import presets, playlists, analytics, or email submissions, you also need FluentPlayer Pro. See [Installation](/installation) if you still need to set it up.
- **Presto Player is still installed and active** on the same site. If it is installed but inactive, the Migration screen asks you to activate it first. FluentPlayer reads directly from Presto Player's data, so the plugin has to be active for the tool to find anything to import.

::: warning Keep Presto Player active during migration
If Presto Player is deactivated or deleted, FluentPlayer has nothing to read from and the migration will find no data. Keep it active until your import is finished and you have confirmed everything came across correctly.
:::

## What Can (and Can't) Be Migrated

The tool can import the following types of data. You choose which ones to bring over:

| Import option | What it includes | Plan |
|---------------|------------------|------|
| **Global Settings** | Branding. With Pro, your Google Analytics configuration is imported too | Free |
| **Media** | Your Presto Player media items, including YouTube videos | Free |
| **Rewrite Content References** | Replaces Presto Player blocks in your posts and pages with FluentPlayer blocks. Requires Media | Free |
| **Presets (Pro)** | Your saved Presto Player presets (player skins and control layouts) | Pro |
| **Playlists (Pro)** | Your Presto Player playlists. Requires Media | Pro |
| **Analytics (Pro)** | Your Presto Player video visit counts. Requires Media | Pro |
| **Email Submissions (Pro)** | Email addresses collected through Presto Player | Pro |

Playlists, Analytics, Email Submissions, and Rewrite Content References only appear when FluentPlayer finds that kind of data in Presto Player.

A few Presto Player features **cannot** be migrated, because FluentPlayer handles them differently or they have no direct equivalent:

- **Popup blocks**
- **Private media**
- **Watermark settings**
- **Video tags** (Free only; requires FluentPlayer Pro)

These are listed right on the migration screen so you always know what will be left behind. You can recreate them in FluentPlayer after the import.

## How to Migrate

### Step 1: Open the Migration Screen

1. In your WordPress admin, go to **FluentPlayer** and open **Settings** (the gear icon).
2. In the settings sidebar, click **Migration**.

FluentPlayer detects your Presto Player installation and shows the **Import from Presto Player** screen, along with the detected Presto Player version.

![The Migration screen showing the Import from Presto Player options](/guide/public/migration/presto-player/presto-migration-1.webp)

Each available item is ticked by default, and the counts (for example, *5 presets* or *1 media*) reflect what FluentPlayer found in Presto Player. Untick anything you don't want to import. On the free plugin, Pro-only items are disabled and marked with a **Pro** tag.

### Step 2: Choose Specific Presets (Optional) (Pro)

To import only some of your presets instead of all of them, click **Select specific presets →** next to the Presets option.

A dialog lists every preset FluentPlayer found. Tick the ones you want, or use **Select All** to grab them all, then click **Done**.

![The Select Presets to Import dialog](/guide/public/migration/presto-player/presto-migration-2.webp)

### Step 3: Choose Specific Media (Optional)

Similarly, click **Select specific media →** next to the Media option to pick individual videos.

You can filter by source (for example, **All** or **YouTube**), search by title, or use **Select All**. Choose what you need and click **Done**.

![The Select Media to Import dialog](/guide/public/migration/presto-player/presto-migration-3.webp)

When your selection looks right, click **Next: Review Selection →**.

::: info Items that depend on Media
**Playlists**, **Analytics**, and **Rewrite Content References** can only be selected while **Media** is ticked, because they refer to the videos you import.
:::

### Step 4: Review and Start the Import

The **Review Migration** screen summarizes exactly what will be imported, such as your global settings, the number of presets, and the number of media items.

![The Review Migration screen with the Start Import button](/guide/public/migration/presto-player/presto-migration-4.webp)

::: tip Your Presto Player data is safe
As the screen reminds you, importing **will not modify or delete your Presto Player data**. You can safely keep both plugins installed side by side.
:::

If you want to change your selection, click **← Back**. Otherwise, click **Start Import** to run the migration.

### Step 5: Rewrite Content References (Optional)

If your posts and pages contain Presto Player blocks, you can tick **Rewrite Content References** to replace them with FluentPlayer blocks. Unlike the other options, this **changes your existing post content**, so make a site backup first. FluentPlayer shows a warning when you select it.

### Step 6: Done

When the import finishes, you'll see a **Migration Complete!** confirmation with a count of everything that came across.

![The Migration Complete screen](/guide/public/migration/presto-player/presto-migration-5.webp)

From here you can:

- **View Imported Media** — jump straight to your FluentPlayer media library to see the videos you just brought over.
- **Back to Settings** — return to the settings screen to keep configuring FluentPlayer.

## Running the Migration Again

After an import, the Migration tab shows a **Previously Imported from Presto Player** summary listing what was imported and what was skipped. If you skipped Pro-only items, the summary lists them and reminds you not to deactivate Presto Player until they are imported.

- **Run Again** lets you import new or skipped items, for example after you activate FluentPlayer Pro.
- **Delete imported data** removes what the migration imported from FluentPlayer so you can start fresh.

## After You Migrate

Your imported content now lives in FluentPlayer, ready to use:

- Review your migrated videos under **FluentPlayer → Media**. See [Adding and Editing Videos](/adding-videos) to fine-tune each one.
- If you imported presets (Pro), check them in [Presets](/presets), or build on them with [custom presets](/creating-custom-presets).
- Confirm your [Branding](/branding) and [Analytics](/analytics) settings carried over as expected.
- Recreate anything that couldn't be migrated — such as popup blocks, private media, or watermarks — directly in FluentPlayer.

Once you're happy with the result, you can update your posts and pages to use FluentPlayer (or let **Rewrite Content References** do it for you). When you no longer need Presto Player, it's safe to deactivate it.

::: tip Take your time
Because migration never touches your Presto Player data, there's no rush to remove the old plugin. Keep both active, verify everything looks right in FluentPlayer, and switch over on your own schedule.
:::
