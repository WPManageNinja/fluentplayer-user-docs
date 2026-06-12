# Integrations Settings

The Integrations section manages **email and lead capture providers**. When viewers submit their email through a [Fluent Player email capture overlay](/guide/engagement/email-capture), the data is routed to whichever provider you configure here.

::: info Note
Video storage providers (Mux, BunnyCDN) are configured under [**Settings → Storage**](/guide/settings/storage), not here. This section is for **email / CRM integrations only**.
:::

## Browsing integrations

Navigating your available integrations is simple. You can use the search bar on the right or filter the list using the tabs at the top of the screen:

* **All:** Shows every integration card available.
* **Email Service Provider:** Filters the view to show dedicated email platforms like FluentCRM and Mailchimp.
* **Others:** Filters the view to show custom routing options like Webhooks.

Each integration card displays a brief description, a status badge (Enabled or Disabled), and a **Configure** button to manage your connection settings.

![Integrattions](/guide/public/integrations/webhook/integrations-1.webp)

## FluentCRM

FluentCRM is a powerful, WordPress native CRM and email marketing plugin. Because it runs directly on your own WordPress site, integrating it with FluentPlayer requires absolutely no external API keys; it connects seamlessly.

**What happens when a viewer submits their email:**
* A contact is instantly created (or updated) within FluentCRM.
* The contact is added to your specified lists or tags.
* Your pre built email sequences, newsletters, or automations trigger automatically inside FluentCRM.

**How to set it up:**
1. Ensure you have the FluentCRM plugin installed and activated on your WordPress site.
2. Navigate to **FluentPlayer -> Settings -> Integrations**.
3. Locate the FluentCRM card and enable the integration (the status badge will turn green and display *Enabled*).
4. Configure which list or tag your new contacts should be assigned to, and click **Save**.

## Mailchimp (Pro)

**Mailchimp** is a popular email marketing platform. With Fluent Player Pro, captured emails are sent directly to a Mailchimp audience.

**How to set it up:**

1. Go to **Fluent Player → Settings → Integrations**.
2. Find **Mailchimp** and click **Configure**.
3. Enter your **Mailchimp API key** (found in your Mailchimp account under **Account → API Keys**).
4. Select the **audience (list)** where new subscribers should be added.
5. **Save**.

**Best for:** Users who already run Mailchimp campaigns and want email captures from video to feed directly into their existing lists.

## Webhook (Pro)

A webhook sends your captured email data as an HTTP POST request to any URL you specify. This is your most flexible, powerful option, allowing you to route lead data to virtually any modern CRM, automation platform, or custom built system.

**What happens when a viewer submits their email:**
* FluentPlayer instantly sends a POST request to your specified webhook URL.
* Your receiving endpoint accepts the payload (which includes the email, name, and any other collected fields) and processes it according to your external setup.

**How to set it up:**
1. Navigate to **FluentPlayer -> Settings -> Integrations**.
2. Locate the Webhook card and click **Configure**.
3. Enter your Webhook URL, which is the exact endpoint address that should receive the data.
4. Click **Save** to activate the integration.

> **🔍 Example:** Webhooks are perfect for connecting your video lead generation to automation tools like Zapier, Make (Integromat), n8n, HubSpot, or ActiveCampaign.


## Which provider should I use?

| Provider | Plugin version | Best for |
|----------|---------------|----------|
| FluentCRM | Free | WordPress native email marketing |
| Mailchimp | Pro | Existing Mailchimp users |
| Webhook | Pro | Any CRM or automation tool with webhook support |

You can have multiple providers configured (each with Enabled/Disabled toggles), but each email capture overlay will route to a **single selected provider**.

## Connecting a provider to email capture

After setting up a provider here, make sure to select it in the [Email Capture Overlay](/guide/engagement/email-capture) settings (on the preset or per media). The capture overlay and the provider are configured separately.
