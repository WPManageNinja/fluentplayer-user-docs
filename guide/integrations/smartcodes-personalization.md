# Smartcodes and Personalization (FluentCRM)

When **FluentCRM** is installed, Fluent Player can resolve **smartcodes** (merge tags) inside player-related text — for example in overlays, titles, or other fields that support personalization.

## What are smartcodes?

Smartcodes look like double-brace placeholders — for example the FluentCRM **contact first name** tag written as <code v-pre>{{contact.first_name}}</code> — or similar tags for other fields. They are placeholders that FluentCRM replaces with data from the **current contact** when the page is rendered for a logged-in or identified visitor.

## How Fluent Player uses them

The plugin parses smartcodes when preparing media for the front end. That means you can personalize copy that appears in or around the player — for example:

- A welcome line in an overlay: greet the viewer by first name using the same tag syntax in your overlay text.
- Dynamic titles or descriptions where the UI allows custom text.

Smartcodes only work when FluentCRM is available and the viewer is associated with a contact record. Anonymous visitors typically see the literal tag or empty replacement, depending on FluentCRM behavior and your template.

## Configuration

1. Connect FluentCRM under **Fluent Player → Settings → Integrations** if you have not already. See [Email Providers](/guide/engagement/email-providers).
2. In the media or block editor, enter smartcodes in fields that support custom text (check the field help in your Fluent Player version).
3. Test while logged in as a user linked to a FluentCRM contact.

## Next steps

- [Email Capture Overlay](/guide/engagement/email-capture) — Collect emails and sync with FluentCRM.
- [Email Providers](/guide/engagement/email-providers) — FluentCRM, Mailchimp, Webhook.
- [Integrations Overview](/guide/integrations/) — Other integrations.
