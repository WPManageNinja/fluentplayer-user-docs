---
prev:
  text: 'Engagement & Conversion'
  link: '/guide/engagement/'
next:
  text: 'CTA and Action Bar'
  link: '/guide/engagement/cta-and-action-bar'
---

# Email Capture Overlay

The **email capture overlay** pauses the video and shows a signup form to the viewer. They enter their email address, and optionally subscribe to your list, before they can continue watching. It is one of Fluent Player's most effective tools for growing your email list without any third party popup plugins.

## How It Works

At a configured point during playback (for example, at the 1-minute mark), the player pauses and displays an overlay with a headline, an email input field, and a submit button. The viewer must enter their email to continue watching, or dismiss the overlay if skipping is allowed. Submitted emails are sent to whichever provider you have attached to the layer (for example, FluentCRM).

## Setting Up Email Capture

1. Go to **Fluent Player → Media** and open the media item you want to gate.
2. In the right sidebar, expand the **Interactive Layers** panel.
3. Click **+ Add Layer** to open the **Manage Layers** dialog.

![Email Capture](/guide/public/engagement/email-capture/email-capture-1.webp)

4. Under **Choose Layer Type**, select **Email Capture**.
5. Configure the options below.
6. Click **Add Layer** to save, then click **Save** to publish your changes.

![Email Capture](/guide/public/engagement/email-capture/email-capture-2.webp)

Your email gate is now live on every page where that media is embedded.

## Configuration Options

| Option | Description | Example |
|--------|-------------|---------|
| **Start Time** | When to show the overlay, set in **Hours**, **Minutes**, and **Seconds** | `0h 1m 0s` |
| **Allow Skipping** | Let the viewer close the overlay without entering an email | On or Off |
| **Skip For CRM Contacts** | When enabled, logged in users who already exist as FluentCRM contacts will not see the overlay | On or Off |
| **Email Placeholder** | Placeholder text inside the email field | "Email Address" |
| **Headline** | Main text above the email field | "Sign up to continue watching" |
| **Button Text** | Label on the submit button | "Subscribe" |
| **Bottom Text** | Small text below the button (e.g., a privacy note) | "We respect your privacy. Unsubscribe at any time." |
| **Button background color** | Background color of the submit button | `#4e9cf6` |
| **Button text color** | Text color of the submit button | `#ffffff` |
| **Background color** | Background color of the overlay itself | Custom color |
| **Border radius** | Roundness of the button corners (px) | `4` |

![Email Capture](/guide/public/engagement/email-capture/email-capture-3.webp)

::: tip
Setting **Allow Skipping** to **Off** creates a hard gate: viewers must submit their email to watch the rest of the video. Setting it to **On** makes the overlay a soft opt in. Hard gates collect more emails; soft gates create a better viewer experience. Choose based on your goal.
:::

## Adding an Email Provider

Email providers are configured directly inside the Email Capture layer, not in a separate settings page.

1. In the Email Capture configuration panel, find the **Email Providers** section.
2. Click **+ Add Provider**.
3. Choose a provider from the **Select Provider** dropdown (e.g., **FluentCRM**).
4. Configure the provider specific options:

| Option | Description |
|--------|-------------|
| **Lists** | Select which list(s) to add the subscriber to |
| **Tags** | Assign tags to the new contact |
| **Active** | Toggle the provider on or off |

5. Click **Add** to attach the provider to this layer.

You can add multiple providers to a single Email Capture layer if needed. Fluent Player supports:

- **FluentCRM:** Adds contacts directly to your WordPress native CRM with list and tag assignments.
- **Mailchimp:** Sends subscribers to a Mailchimp audience.
- **Webhook:** Posts email data to any URL (for Zapier, Make, HubSpot, and similar tools).

![Email Capture](/guide/public/engagement/email-capture/email-capture-4.webp)

See [Email Providers](/guide/engagement/email-providers) for the full setup guide.

## Example: Gating a Webinar Replay

You recorded a 45-minute webinar and want to collect emails from anyone who watches past the first 2 minutes:

- **Start Time:** `0h 2m 0s`
- **Allow Skipping:** Off (viewers must enter their email to continue)
- **Headline:** "Enter your email to watch the full replay"
- **Button Text:** "Watch Now"
- **Provider:** FluentCRM, which adds them to your "Webinar Leads" list

## Example: Soft Opt In on a Tutorial

You have a free tutorial and want to gently ask for emails without forcing it:

- **Start Time:** `0h 5m 0s` (5 minutes into the video)
- **Allow Skipping:** On (viewers can close the overlay and keep watching)
- **Headline:** "Enjoying this tutorial? Get more tips in your inbox."
- **Button Text:** "Subscribe"

::: tip Developer note
Submissions are handled via the `fluent_player_email_submit` AJAX action (works for both guests and logged in users). Developers can hook `fluent_player/email_collection_hooks` or use the `fluent_player/pre_process_email_submit` filter. See the [documentation home](/guide/) for related guides; for custom code, refer to the plugin’s developer hooks in the source or your IDE.
:::

