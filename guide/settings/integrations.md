# Integrations Settings

**Fluent Player → Settings → Integrations**

The Integrations section manages **email and lead capture providers**. When viewers submit their email through a [Fluent Player email capture overlay](/guide/engagement/email-capture), the data is routed to whichever provider you configure here.

::: info Note
Video storage providers (Mux, BunnyCDN) are configured under [**Settings → Storage**](/guide/settings/storage) — not here. This section is for **email / CRM integrations only**.
:::

## Browsing integrations

The list can be filtered using the tabs at the top:

| Filter | Shows |
|--------|-------|
| **All** | Every integration card |
| **Email Service Provider** | FluentCRM, Mailchimp |
| **Others** | Webhook |

Each card displays a short description, an **Enabled** or **Disabled** status badge, and a **Configure** button.

---

## FluentCRM

**FluentCRM** is a WordPress-native CRM and email marketing plugin. Because it runs on your own site, the integration requires no external API keys — it connects automatically once FluentCRM is installed.

**What happens when a viewer submits their email:**
- A contact is created (or updated) in FluentCRM.
- You can add them to specific lists or tags.
- From there, run email sequences, newsletters, or automations inside FluentCRM.

**How to set it up:**

1. Install and activate **FluentCRM** on your WordPress site.
2. Go to **Fluent Player → Settings → Integrations**.
3. Find **FluentCRM** and click **Configure**.
4. Enable the integration — the status badge changes to **Enabled**.
5. Configure which list or tag new contacts should be added to, then **Save**.

**Best for:** Users who want a fully self-hosted, WordPress-native email marketing stack.

---

## Mailchimp (Pro)

**Mailchimp** is a popular email marketing platform. With Fluent Player Pro, captured emails are sent directly to a Mailchimp audience.

**How to set it up:**

1. Go to **Fluent Player → Settings → Integrations**.
2. Find **Mailchimp** and click **Configure**.
3. Enter your **Mailchimp API key** (found in your Mailchimp account under **Account → API Keys**).
4. Select the **audience (list)** where new subscribers should be added.
5. **Save**.

**Best for:** Users who already run Mailchimp campaigns and want email captures from video to feed directly into their existing lists.

---

## Webhook (Pro)

A **webhook** sends captured email data as an HTTP POST to any URL you specify. This is the most flexible option — you can route data to any CRM, automation platform, or custom system.

**What happens when a viewer submits their email:**
- Fluent Player sends a POST request to your webhook URL.
- Your endpoint receives the payload (email, name, and any other collected fields) and processes it.

**How to set it up:**

1. Go to **Fluent Player → Settings → Integrations**.
2. Find **Webhook** and click **Configure**.
3. Enter your **webhook URL** — the endpoint that should receive the data.
4. **Save**.

**Works with:** Zapier, Make (Integromat), HubSpot, ActiveCampaign, n8n, or any custom receiver that accepts HTTP POST.

**Best for:** Users who need to connect to a CRM or automation tool not natively supported.

---

## Which provider should I use?

| Provider | Plugin version | Best for |
|----------|---------------|----------|
| FluentCRM | Free | WordPress-native email marketing |
| Mailchimp | Pro | Existing Mailchimp users |
| Webhook | Pro | Any CRM or automation tool with webhook support |

You can have multiple providers configured (each with Enabled/Disabled toggles), but each email capture overlay will route to a **single selected provider**.

## Connecting a provider to email capture

After setting up a provider here, make sure to select it in the [Email Capture Overlay](/guide/engagement/email-capture) settings (on the preset or per media). The capture overlay and the provider are configured separately.

## Next steps

- [Email Capture Overlay](/guide/engagement/email-capture) — Set up the email gate form on the player.
- [Storage Settings](/guide/settings/storage) — Connect Mux, BunnyCDN Stream, and BunnyCDN Storage.
- [Export](/guide/settings/export) — Download collected emails as CSV, JSON, or ODS.
- [Settings Overview](/guide/settings/) — All settings sections at a glance.
