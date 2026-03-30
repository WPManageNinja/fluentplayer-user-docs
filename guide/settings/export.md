# Export

**Fluent Player → Settings → Export**

::: info Pro feature
The Export section requires **Fluent Player Pro**.
:::

The Export section lets you download the email addresses (and any other data) collected through [Fluent Player's email capture overlays](/guide/engagement/email-capture) as a file.

## What is exported

Exported data comes from the **email capture overlay** submissions stored in your WordPress database — not from your external email provider (FluentCRM, Mailchimp, etc.). It is the raw list of what viewers submitted on your site.

Each row typically includes:

- Email address
- Name (if collected)
- Media item the submission was collected on
- Submission timestamp

## How to export

1. Go to **Fluent Player → Settings → Export**.
2. Choose a **format** using the toggle group:

| Format | Best for |
|--------|----------|
| **CSV** | Excel, Google Sheets, most CRMs |
| **JSON** | Developers, API imports |
| **ODS** | LibreOffice Calc |

3. Click **Export Email List** to download the file.

The file downloads immediately in your browser.

## Tips

- If you are using **FluentCRM**, **Mailchimp**, or **Webhook** as your email provider, captured emails are already synced there in real time. Export is useful as a local backup or for bulk imports elsewhere.
- Export downloads a snapshot at the time you click. Run it periodically if you want ongoing backups.
- There is no date range filter on the Export screen — the download includes all stored submissions.

## Next steps

- [Email Capture Overlay](/guide/engagement/email-capture) — Set up the email gate form.
- [Integrations Settings](/guide/settings/integrations) — Connect FluentCRM, Mailchimp, or Webhook.
- [Analytics Settings](/guide/settings/analytics) — Track video plays and viewer engagement.
- [Settings Overview](/guide/settings/) — All settings sections at a glance.
