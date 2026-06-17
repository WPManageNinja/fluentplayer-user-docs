# Webhook Integration (Pro)

The **Webhook integration** sends email leads from Fluent Player to any HTTP endpoint in real time. Use it to connect video capture forms to Zapier, Make, HubSpot, ActiveCampaign, n8n, or your own API when no native integration exists.

::: info Pro feature
Webhook integration requires **Fluent Player Pro**. The Pro plugin depends on the free Fluent Player plugin. Keep both active.
:::

## How It Works

Webhook integration connects your [email capture overlay](/guide/engagement/email-capture) to any external system that accepts HTTP requests. You configure endpoints once in WordPress, then choose which endpoint each video should use.

### From viewer submission to your endpoint

1. A viewer reaches the email capture point in your video and enters their email address.
2. Fluent Player validates the submission and saves it in WordPress.
3. The video’s selected [email provider](/guide/engagement/email-providers) runs. When **Webhook** is selected, Fluent Player sends an HTTP request to your configured URL.
4. Your service (Zapier, Make, HubSpot, a custom API, etc.) receives the data and handles the lead — add to a CRM, trigger an automation, notify a Slack channel, and so on.
5. The viewer continues watching once the capture step is complete (or after skipping, if allowed).

The request is sent **during** the capture flow, not in a background job later. Your endpoint should respond within about **15 seconds** or the delivery may time out.

### Two part Setup

Webhook integration is configured in **two places**. Create endpoints in global settings first, then connect a video to the endpoint you want.

| Step | Where | What you do |
|------|-------|-------------|
| **1. Create endpoints** | **Fluent Player → Settings → Integrations → Webhook** | Turn on the integration, add webhook URLs, request methods, and optional headers |
| **2. Connect a video** | **Fluent Player → Media** → **Interactive Layers** → **Email Capture** | Choose **Webhook** as the provider and select which saved endpoint should receive leads from that video |

**Step 1** defines *where* data can be sent. **Step 2** decides *which* endpoint each video uses. You can save multiple endpoints in settings and route different videos to Zapier, HubSpot, or other services independently.

For **Step 2**, open the media item, add or edit an **Email Capture** layer, then expand **Email Providers**:

1. Set **Select Provider** to **Webhook**.
2. Open **Select Webhook** and choose the endpoint you created in settings.
3. Turn **Active** on and click **Add** (or **Update Layer** when editing).
4. Save the media item.

![Select Webhook endpoint](/guide/public/integrations/webhook/select-webhook-endpoint.webp)

Without both steps, submissions stay in WordPress only — no data is sent to your external service.

### What your Endpoint Receives

Fluent Player sends the viewer’s email plus metadata about the submission. The exact format depends on the request method:

| Method | How data is sent |
|--------|------------------|
| `POST` (recommended) | JSON body with `Content-Type: application/json` |
| `PUT` | Same JSON body as `POST` |
| `GET` | Values appended as URL query parameters (no body) |

A typical JSON payload includes:

* `email` — the address the viewer submitted (or your custom **Email Field Name**)
* `timestamp` — when the submission occurred
* `source` — identifies Fluent Player (for example, `fluent_player`)
* `webhook_id` — which saved endpoint handled the request

Use the **Email Field Name** setting if your destination expects a different key (for example, `contact_email` instead of `email`).

### Example: Zapier or Make

1. Create a new Zap or scenario with a **Webhooks → Catch Hook** trigger.
2. Copy the hook URL into **Fluent Player → Settings → Integrations → Webhook** as a new endpoint.
3. Set **Request Method** to `POST` and save.
4. Open a media item, enable [email capture](/guide/engagement/email-capture), select **Webhook**, and choose that endpoint.
5. Submit a test email on the video front end. Your Zap or scenario should receive the payload immediately.

::: tip
Run a test submission after setup. If nothing arrives, check **Troubleshooting** below before going live with the video.
:::

## Requirements

Before you start, confirm you have:

* **Fluent Player (free)** and **Fluent Player Pro** installed and active
* A valid webhook endpoint URL from your destination service
* WordPress **5.6+** and PHP **7.4+**

## Enable the Webhook Provider

1. Go to **Fluent Player → Settings**.
2. Open the **Integrations** tab.
3. Find **Webhook** and click **Configure**.

![Integrations Settings](/guide/public/integrations/webhook/integrations-1.webp)

4. Turn **Enable Integration** on.

![Enable Integration](/guide/public/integrations/webhook/enable-integrations-2.webp)

## Add a Webhook Endpoint

1. Click **Add Webhook**.
2. Fill in the fields:

| Field | Description |
|-------|-------------|
| **Webhook Name** | Friendly label (for example, `Course Leads`) |
| **Request URL** | Full destination URL (`https://...`) |
| **Request Method** | `GET`, `POST`, or `PUT` — `POST` is recommended |
| **Email Field Name** | JSON or query key for the email value (default: `email`) |
| **Headers (Optional)** | Custom headers for authentication or metadata |

3. Click **Add**, then **Save Settings**.

![Adding a New Webhook](/guide/public/integrations/webhook/adding-a-new-webhook-3.webp)

::: info
When adding custom headers, fill in both **Header Name** and **Header Value**. Empty header rows trigger a validation error. You can save multiple webhook endpoints and route different videos to different targets.
:::

## Request Methods (Reference)

| Method | Behavior |
|--------|----------|
| `POST` | Sends a JSON payload with `Content-Type: application/json` |
| `PUT` | Same JSON payload as `POST`, using the PUT method |
| `GET` | Sends data as URL query parameters (no request body) |

See [What your endpoint receives](#what-your-endpoint-receives) above for typical payload fields.

## Assign Webhook to a Video

Global webhook setup and per video routing are configured separately.

1. Open a media item under **Fluent Player → Media** (or the preset that should use the webhook).
2. Go to **[Email Capture / Email Provider](/guide/engagement/email-capture)** settings.
3. Select **Webhook** as the provider.
4. Choose the endpoint from **Select Webhook**.
5. Save the media item or preset.

![Assign Webhook](/guide/public/integrations/webhook/assign-webhook-3.webp)

If **Select Webhook** is empty, return to **Settings → Integrations → Webhook** and confirm at least one endpoint is saved and integration is enabled.

## Security Notes

Webhook requests use built in validation and sanitization:

* URL validation before save and send
* Allowed methods limited to `GET`, `POST`, and `PUT`
* Header names normalized before transmission
* Unsafe or invalid endpoints can be rejected

::: warning
If you use authentication headers, avoid high privilege credentials. Use scoped API keys whenever possible, and always prefer **HTTPS** endpoints in production.
:::

## Troubleshooting

| Problem | Likely cause | What to do |
|---------|--------------|------------|
| Webhook does not fire | Provider disabled or not assigned to the video | Turn on Webhook under **Integrations** and select it in **Email Provider** settings for that media |
| **Select Webhook** list is empty | No saved endpoints | Add at least one webhook and click **Save Settings** |
| `4xx` or `5xx` response | Endpoint rejected the request | Check URL, method, headers, auth, and expected payload format in your service logs |
| Invalid URL error | Malformed endpoint | Use a full `http://` or `https://` URL |
| One webhook fails, others succeed | Partial failure across multiple endpoints | Fix the failing target; remaining webhooks are still attempted |

::: tip
Webhook delivery runs during the email capture flow with a 15 second timeout. If your endpoint is slow, accept the request quickly and process it asynchronously on your server or through a queue.
:::

## Frequently Asked Questions

**Can I send data to more than one webhook per video?**
Each video targets one webhook at a time. Create multiple endpoints in global settings and assign different videos to different webhooks. To fan out one submission to several services, use a relay endpoint (for example, a multi step Zapier Zap) that distributes data on the receiving side.

**Is the webhook sent synchronously?**
Yes. The request runs during email collection. If it times out or fails, the error is logged and any other configured webhooks are still attempted.

**What happens if my endpoint is temporarily unavailable?**
Fluent Player Pro does not retry failed deliveries automatically. Add retry or queue logic on your endpoint, or route through a service that buffers requests.

**Does the webhook work alongside FluentCRM or Mailchimp?**
Each video uses one active email provider at a time (FluentCRM, Mailchimp, or Webhook). Assign different providers to different videos. To send the same lead to FluentCRM and an external tool, use a FluentCRM automation to forward new contacts.

**Can I use HTTP instead of HTTPS?**
HTTP may be accepted in testing, but use **HTTPS** in production so email data is encrypted in transit.
