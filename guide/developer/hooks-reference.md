---
title: "Hooks & Filters Reference"
description: "Developer reference for Fluent Player's WordPress action and filter hooks — extend media rendering, email capture, smartcodes, and integrations. All hooks use the fluent_player/ prefix."
---

# Hooks & Filters Reference

Fluent Player exposes WordPress **actions** and **filters** so developers can extend its behavior without editing the plugin. Every hook uses the `fluent_player/` prefix.

::: tip
**Actions** let you run code at a certain point (use `add_action`). **Filters** let you modify a value before Fluent Player uses it (use `add_filter` and always return the value).
:::

## Actions

| Hook | Fires when |
|------|------------|
| `fluent_player/before_render_media` | Just before a media item is rendered to the page. |
| `fluent_player/after_save_media` | After a media item is created or updated. |
| `fluent_player/before_delete_media` | Before a media item is deleted. |
| `fluent_player/after_delete_media` | After a media item is deleted. |
| `fluent_player/register_media_taxonomies` | When taxonomies for media can be registered (used by Pro to register the media-tag taxonomy). |
| `fluent_player/register_email_providers` | When email-capture providers can be registered. |
| `fluent_player/email_collected` | After a viewer's email is collected through an overlay. |

**Example — run code after a viewer submits their email:**

```php
add_action('fluent_player/email_collected', function ($submission) {
    // e.g. send the submission to your own service
}, 10, 1);
```

## Filters

### Rendering & Shortcode

| Hook | Lets you modify |
|------|-----------------|
| `fluent_player/media_shortcode_defaults` | Default attributes for the `[fluentplayer]` shortcode. |
| `fluent_player/media_default_settings` | Default settings applied to a media item before render. |
| `fluent_player/player_settings` | The resolved player settings for a render. |
| `fluent_player/default_preload` | The default `preload` behavior for the player. |
| `fluent_player/block_media_attributes` | Attributes passed to the media block. |
| `fluent_player/block_media_output` | The final rendered output of the media block. |
| `fluent_player/allowed_html_tags` | The list of HTML tags allowed in overlay / custom content. |
| `fluent_player/link_new_tab` | Whether player links open in a new tab. |

### Dynamic Source (Custom Fields)

| Hook | Lets you modify |
|------|-----------------|
| `fluent_player/dynamic_source_overrides` | The per-render source overrides (URL, meta, poster). |
| `fluent_player/dynamic_source_meta_key_allowed` | Whether a given custom-field meta key may be used as a dynamic source. |
| `fluent_player/dynamic_source_post_id` | The post ID used to resolve a dynamic source. |

### Email Capture

| Hook | Lets you modify |
|------|-----------------|
| `fluent_player/email_providers` | The registered email-capture providers. |
| `fluent_player/validate_email_submission` | Validation result for an email submission. |
| `fluent_player/pre_process_email_submit` | A submission before it is processed. |
| `fluent_player/submission_data` | The submission payload. |
| `fluent_player/email_data` | The email data sent to a provider. |
| `fluent_player/email_export_columns` | The columns included in an email export. |
| `fluent_player/email_template` / `fluent_player/email_styles` | The email template markup and styles. |

### Smartcodes & Personalization

| Hook | Lets you modify |
|------|-----------------|
| `fluent_player/smartcodes` | The available smartcodes (tokens). |
| `fluent_player/smartcode_groups` | The smartcode groups shown in the inserter. |
| `fluent_player/parse_smartcodes` | The result of parsing smartcodes in a string. |

See the [Smartcodes & Personalization](/guide/integrations/smartcodes-personalization) guide for usage.

### Integrations & Translations

| Hook | Lets you modify |
|------|-----------------|
| `fluent_player/integrations` | The registered integrations list. |
| `fluent_player/provider_config` | A provider's configuration. |
| `fluent_player/admin_translations` / `fluent_player/frontend_translations` | Localized strings for the admin and frontend. |

::: warning
This list covers the most commonly used extension points and is not exhaustive. Hook names and parameters can change between releases — test against the version you target, and always return a value from filter callbacks.
:::
