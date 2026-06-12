---
prev:
  text: 'CTA and Action Bar'
  link: '/guide/engagement/cta-and-action-bar'
next:
  text: 'Player Customization'
  link: '/guide/customize/'
---

# Email Providers

::: tip Full setup walkthrough
For the complete configuration walkthrough including filters and advanced options, see [**Global Settings → Email Integrations**](/guide/settings/integrations).
:::

When you use the [email capture overlay](/guide/engagement/email-capture), the emails your viewers submit need to go somewhere. That "somewhere" is an **email provider**: a service that stores those emails and lets you send newsletters, automations, or follow ups.

Fluent Player supports three email providers:

![Emial Provider](/guide/public/engagement/email-providers/email-provider-1.webp)

## FluentCRM (Free)

**FluentCRM** is a WordPress CRM and email marketing plugin. Because it runs directly on your WordPress site, the integration requires no API keys and works out of the box once FluentCRM is installed.

**What happens when a viewer submits their email:**
- A new contact is created (or updated) in FluentCRM.
- You can assign them to specific lists or tags based on your configuration.
- From there, send automated email sequences, broadcast newsletters, and more.

**How to set it up:**

1. Make sure FluentCRM is installed and activated on your WordPress site.
2. Go to **Fluent Player → Settings → Integrations**.
3. Find **FluentCRM**, click **Configure**, and enable the integration. The status will update to **Enabled**.
4. Choose which list or tag new contacts should be added to.
5. Save.

**Best for:** Anyone who wants to keep everything on their own WordPress site without relying on external services.

![Emial Provider](/guide/public/engagement/email-providers/email-provider-2.webp)

## Mailchimp (Pro)

**Mailchimp** is one of the most widely used email marketing platforms. With Fluent Player Pro, captured emails go directly to a Mailchimp audience (list) of your choice.

**How to set it up:**

1. Go to **Fluent Player → Settings → Integrations**.
2. Find **Mailchimp**, click **Configure**.
3. Enter your **Mailchimp API key**. You can find this in your Mailchimp account under **Account → Extras → API Keys**.
4. Select the **audience (list)** where new subscribers should be added.
5. Save.

**Best for:** Users who already run their email marketing through Mailchimp and want subscriber data in one place.

![Emial Provider](/guide/public/engagement/email-providers/email-provider-4.webp)

## Webhook (Pro)

A **webhook** sends captured email data to any URL you specify. This is the most flexible option; connect it to any CRM, automation tool, or custom system that supports incoming webhooks.

**What happens when a viewer submits their email:**
- Fluent Player sends an HTTP POST request to your webhook URL with the email data as the payload.
- Your system receives the data and processes it however you need.

**How to set it up:**

1. Go to **Fluent Player → Settings → Integrations**.
2. Find **Webhook**, click **Configure**.
3. Enter your **webhook URL** (the endpoint where you want to receive data).
4. Save.

**Best for:** Users who use a CRM or automation platform that supports webhooks, such as Zapier, Make, HubSpot, ActiveCampaign, or any custom API.

![Emial Provider](/guide/public/engagement/email-providers/email-provider-3.webp)


## Which provider should I choose?

| Provider | Plugin version | Best for |
|----------|---------------|----------|
| FluentCRM | Free | WordPress native email marketing; no external accounts needed |
| Mailchimp | Pro | Existing Mailchimp users who want subscriber data in their audience |
| Webhook | Pro | Any CRM or automation tool that accepts incoming webhook data |

::: info One provider at a time
You can only use **one email provider** per email capture configuration. Choose the one that fits your existing workflow.
:::

## Connecting the provider to email capture

After setting up a provider under Settings, open the [email capture overlay](/guide/engagement/email-capture) configuration for your media item or preset and select the provider there. This tells Fluent Player where to route captured emails.


