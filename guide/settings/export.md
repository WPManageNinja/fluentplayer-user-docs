---
title: "Export"
description: "Export email capture submissions from Fluent Player as CSV, JSON, or ODS for backups, analysis, and imports into other tools."
---

# Export

The **Export** feature allows you to download a local copy of all the data collected through your video's email capture overlays. This is an essential tool for keeping backups of your leads or moving your subscriber list to another platform.

To access this feature, navigate to **Fluent Player → Settings** and click on the **Export** tab.

::: info Pro feature
The Export section requires **Fluent Player Pro**.
:::

The Export section lets you download the email addresses (and any other data) collected through [Fluent Player's email capture overlays](/guide/engagement/email-capture) as a file.

## What Data is Exported?

When you run an export, Fluent Player pulls the raw submission data stored directly in your WordPress database. This includes:

 * **Email Addresses:** The primary contact info submitted by viewers.
 * **Names:** Any name data collected alongside the email.
 * **Media Source:** Which specific video the viewer was watching when they signed up.
 * **Timestamps:** Exactly when the lead was captured.

 >[!Note]
 >While Fluent Player can sync leads to external tools like FluentCRM or Mailchimp in real time, this export serves as a standalone backup of the data stored on your own server.

## How to Export Your List

Downloading your lead data is a simple three step process:

**Go to Export:** Navigate to the Export section within the Fluent Player Settings.
**Choose Your Format:** Select your preferred file type using the toggle buttons:
 * **CSV:** Best for Excel, Google Sheets, and importing into most CRMs.
 * **JSON:** Ideal for developers or technical API imports.
 * **ODS:** Used for OpenDocument spreadsheets like LibreOffice Calc.
 
**Download:** Click the **Export Email List** button. The file will be generated and downloaded to your computer immediately.

![Export Your List](/guide/public/settings/export/export-email-list-1.webp)

## Tips

- If you are using **FluentCRM**, **Mailchimp**, or **Webhook** as your email provider, captured emails are already synced there in real time. Export is useful as a local backup or for bulk imports elsewhere.
- Export downloads a snapshot at the time you click. Run it periodically if you want ongoing backups.
- There is no date range filter on the Export screen; the download includes all stored submissions.


