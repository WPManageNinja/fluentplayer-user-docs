---
prev:
  text: 'Engagement & Conversion'
  link: '/guide/engagement/'
next:
  text: 'CTA and Action Bar'
  link: '/guide/engagement/cta-and-action-bar'
---

# Email Capture Overlay

The **email capture overlay** lets you pause the video and show a signup form to the viewer. They enter their email address — and optionally subscribe to your list — before they can continue watching. It is one of Fluent Player's most powerful features for growing your email list without any third-party pop-up tools.

::: info Prerequisites
Before setting up email capture, make sure you have connected an [email provider](/guide/engagement/email-providers) (FluentCRM, Mailchimp, or Webhook) under **Fluent Player → Settings → Integrations**. Without a provider, captured emails have nowhere to go.
:::

## Global defaults (Settings)

In **Fluent Player → Settings** you may find **email capture** defaults (section name varies by version):

- **Enable** email capture globally as a starting default for new overlays.
- **Form position** — Default placement relative to playback (for example before or after a cue).
- **Delay (seconds)** — Default delay before the overlay can appear.

These are **defaults** only. Each media item’s [Interactive Layers](#setting-up-email-capture) overlay can override headline, timing, and skip behavior. See also [General Settings](/guide/settings/general) for other global defaults.

## How it works

1. The viewer starts watching the video.
2. At a specific point — for example, after 5% of the video has played — playback pauses and an overlay appears.
3. The overlay shows a headline, an email input field, and a submit button.
4. The viewer either enters their email and continues watching, or skips the overlay (if you allow skipping).
5. Submitted emails are sent to your configured [email provider](/guide/engagement/email-providers).

## Setting up email capture

1. Go to **Fluent Player → Media** and open the media item you want to gate.
2. In the block editor, open the **Interactive Layers** panel.
3. Select **Email Capture** as the layer type and toggle it **on**.
4. Configure the options below.
5. Click **Save** (or **Update**) to publish your changes.

Your email gate is now live on every page where that video is embedded.

## Configuration options

| Option | Description | Example |
|--------|-------------|---------|
| **Enabled** | Turn email capture on or off | On |
| **Percentage** | When to show the overlay (% of video watched) | `5` (shows at 5%) |
| **Allow skip** | Let the viewer close the overlay without entering an email | On or Off |
| **Headline** | The main text above the email field | "Sign up to continue watching" |
| **Placeholder** | Placeholder text inside the email field | "Email Address" |
| **Button text** | The text on the submit button | "Subscribe" |
| **Bottom text** | Small text below the button (e.g., a privacy note) | "We respect your privacy. Unsubscribe at any time." |
| **Button background color** | Background color of the submit button | `#4e9cf6` |
| **Button text color** | Text color of the submit button | `#ffffff` |
| **Border radius** | Roundness of the button corners (px) | `4` |
| **Skip if CRM contact** | When using FluentCRM, skip the gate if the viewer is already a contact | On in defaults |

::: tip
Setting **Allow skip** to **Off** creates a hard gate — viewers must submit their email to watch the rest of the video. Setting it to **On** makes the overlay a soft opt-in. Hard gates collect more emails; soft gates create a better viewer experience. Choose based on your goal.
:::

## Example: gating a webinar replay

You recorded a 45-minute webinar and want to collect emails from anyone who watches past the first 2 minutes:

- **Percentage:** `5` (roughly 2 minutes into a 45-minute video)
- **Allow skip:** Off (viewers must enter their email to continue)
- **Headline:** "Enter your email to watch the full replay"
- **Button text:** "Watch Now"
- **Provider:** FluentCRM — adds them to your "Webinar Leads" list

## Example: soft opt-in on a tutorial

You have a free tutorial and want to gently ask for emails without forcing it:

- **Percentage:** `30` (about a third of the way through)
- **Allow skip:** On (viewers can close the overlay and keep watching)
- **Headline:** "Enjoying this tutorial? Get more tips in your inbox."
- **Button text:** "Subscribe"

## Connecting to an email provider

The email capture overlay sends captured emails to whichever provider you have configured. Fluent Player supports:

- **FluentCRM** (free) — Adds contacts directly to your WordPress-native CRM.
- **Mailchimp** (Pro) — Sends subscribers to a Mailchimp audience.
- **Webhook** (Pro) — Posts email data to any URL (for Zapier, Make, HubSpot, and similar tools).

See [Email Providers](/guide/engagement/email-providers) for the full setup guide.

::: tip Developer note
Submissions are handled via the `fluent_player_email_submit` AJAX action (works for both guests and logged-in users). Developers can hook `fluent_player/email_collection_hooks` or use the `fluent_player/pre_process_email_submit` filter. See the [Plugin Overview](/reference/plugin-overview) for the full hooks reference.
:::

## Next steps

- [Email Providers](/guide/engagement/email-providers) — Set up where captured emails are sent.
- [CTA and Action Bar](/guide/engagement/cta-and-action-bar) — Add a call-to-action popup or slim message bar.
- [Settings Reference](/reference/settings) — Global email capture defaults.
