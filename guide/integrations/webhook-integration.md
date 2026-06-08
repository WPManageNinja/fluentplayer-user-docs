# Webhook Integration (Pro)

The **Webhook integration** lets you send email leads captured by FluentPlayer to any external HTTP endpoint in real time. It is useful when you want to connect FluentPlayer with tools that do not have a native integration.

::: info Pro feature
Webhook integration requires **FluentPlayer Pro**.
:::

#### Requirements

Before setup, make sure you have:

- **FluentPlayer (free)** installed and active.
- **FluentPlayer Pro** installed and active.
- A valid webhook endpoint URL from your external service.
- WordPress **6.0+** and PHP **7.4+**.

::: warning
The Pro plugin depends on the free FluentPlayer plugin. Keep both active.
:::

## How it works

When a viewer submits an email through your player’s email capture flow:

1. FluentPlayer collects the submission.
2. The selected email provider is triggered.
3. If **Webhook** is selected, a request is sent to your configured endpoint.
4. Your external service receives and processes the data.

For `POST` and `PUT`, data is sent as JSON. For `GET`, data is sent as query parameters.

## Enable the Webhook provider

1. Go to **FluentPlayer → Settings**.
2. Open the **Integrations** tab.
3. Find **Webhook** and click **Configure**.

![Integrations Settings](/guide/public/integrations/webhook/integrations-1.webp)

4. Toggle **Enable Integration** to **ON**.

![Enable Integration](/guide/public/integrations/webhook/enable-integrations-2.webp)

## Add a webhook endpoint

1. Click **Add Webhook**.
2. Fill in the fields:
   - **Webhook Name**: Friendly label (example: `Course Leads`).
   - **Request URL**: Your destination endpoint URL.
   - **Request Method**: `GET`, `POST`, or `PUT` (`POST` is recommended).
   - **Email Field Name**: The key for email data (default: `email`).
   - **Headers (Optional)**: Add custom headers for auth or metadata.
3. Click **Add**.
4. Click **Save Settings**.

![Adding a New Webhook](/guide/public/integrations//webhook/adding-a-new-webhook-3.webp)

::: info Notes
- **Header Validation:** When adding custom headers, ensure both the "Header Name" and "Header Value" fields are filled, or the system will return an error.
- **Multiple Webhooks:** You can configure multiple webhook endpoints if you need to send data to several different services simultaneously.
:::

## Request behavior

| Method | Behavior |
|---|---|
| `POST` | Sends JSON payload (`Content-Type: application/json`). |
| `PUT` | Same payload behavior as POST, but uses PUT. |
| `GET` | Sends data as URL query parameters (no request body). |

Default payload typically includes:

- `email` (or your custom email field name)
- `timestamp`
- `source` (for example: `fluent_player`)
- `webhook_id`

## Assign Webhook to your Video/Preset

After creating webhook items:

1. Open your media item or preset.
2. Go to **[Email Capture / Email Provider](/guide/engagement/email-capture)** settings.
3. Select **Webhook** as the provider.
4. Choose the webhook from **Select Webhook**.
5. Save/update.

If the webhook dropdown is empty, return to settings and confirm at least one webhook is saved and enabled. 

![Assign Webhook](/guide/public/integrations//webhook/assign-webhook-3.webp)

## Security notes

Webhook requests include built-in validation and sanitization:

- URL validation before saving/sending.
- Allowed methods are restricted (`GET`, `POST`, `PUT`).
- Header names are normalized.
- Invalid/unsafe endpoints can be rejected.

::: warning
If you use authentication headers, avoid using high-privilege credentials. Use scoped API keys whenever possible.
:::

## Troubleshooting

| Problem | Likely reason | What to do |
|---|---|---|
| Webhook does not fire | Provider disabled or not selected in preset | Enable Webhook and assign it in Email Provider settings |
| Select Webhook list is empty | No saved webhook items | Add at least one webhook and save settings |
| 4xx or 5xx response | Endpoint rejected request | Verify URL, headers, auth, and expected payload |
| Invalid URL error | URL format is wrong | Use a full `http://` or `https://` endpoint |
| One webhook fails, others succeed | Partial failure across multiple endpoints | Review endpoint logs and fix failing target |

Webhook integration gives you flexible lead routing without depending on a fixed third-party plugin list.

## Frequently Asked Questions

**Can I send data to more than one webhook per video?**
Yes. You can create multiple webhook endpoints in the global settings. Each video preset targets one specific webhook. If you need to fan out to several services from a single submission, use a relay endpoint — for example, a multi-step Zapier Zap — that distributes the data on the receiving side.

**Is the webhook sent synchronously?**
Yes, by default. The request is sent during the email collection process with a 15-second timeout. If the request times out or fails, the error is logged and any remaining webhooks are still attempted. If your endpoint is slow, consider offloading processing to an async queue on the receiving end.

**What happens if my endpoint is temporarily unavailable?**
FluentPlayer Pro does not retry failed deliveries automatically. If your endpoint is down at the time of a submission, the delivery will fail and be logged. Consider adding retry logic on your endpoint side or using a queuing service as an intermediary.

**Does the webhook work alongside FluentCRM or Mailchimp?**
Each video preset supports one active email provider at a time (FluentCRM, Mailchimp, or Webhook). You can assign different providers to different videos. If you need both FluentCRM and a webhook to fire for the same video, set up a FluentCRM automation to forward new contacts to your external service.

**Can I use HTTP instead of HTTPS?**
HTTP is technically accepted, but strongly discouraged in production since email data would be transmitted unencrypted. Always use HTTPS endpoints in live environments.