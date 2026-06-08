---
title: "Hooks & Filters Reference"
description: "A selected reference of FluentPlayer WordPress hooks and filters for developers who want to extend or customize behavior in code."
---

# Hooks & Filters Reference

FluentPlayer exposes WordPress **filters** and **actions** so developers can extend or adjust its behavior without modifying the plugin. This page lists commonly used hooks. It is a **selected** reference, not an exhaustive list — to discover everything available in your installed version, search the plugin source for `apply_filters( 'fluent_player/` and `do_action( 'fluent_player`.

::: warning
Hook names and signatures can change between releases. Test customizations on staging, and pin to the plugin version you verified against.
:::

## Dynamic media source

| Filter | Purpose |
|--------|---------|
| `fluent_player/dynamic_source_overrides` | Filter the resolved source overrides (URL, provider, poster) for a [dynamic shortcode](/guide/display-embed/shortcode#dynamic-media-source-advanced). |
| `fluent_player/dynamic_source_post_id` | Change which post a `meta_key` source is read from (defaults to the current post). |

## Email capture & providers

| Hook | Purpose |
|------|---------|
| `fluent_player/email_providers` | Filter the list of providers a capture submission is sent to. |
| `fluent_player/pre_process_email_collection` | Short-circuit or modify processing before a submission is handled. |
| `fluent_player/post_process_email_collection` | Inspect or adjust the result after all providers have run. |
| `fluent_player/pre_process_email_provider` | Run before an individual provider processes the submission. |
| `fluent_player/post_process_email_provider` | Run after an individual provider processes the submission. |
| `fluent_player/email_submission_rate_limit_max_attempts` | Change the max guest submissions allowed per window (default 3). |
| `fluent_player/email_submission_rate_limit_window` | Change the rate-limit window in seconds (default 5 minutes). |

The front-end submission is handled by the `fluent_player_email_submit` AJAX action (works for both guests and logged-in users).

## Multi-language AJAX actions

| Action | Purpose |
|--------|---------|
| `fluent_player_switch_language` | Return the mapped media payload for a requested language (requires the `fluent_player_frontend` nonce). |
| `fluent_player_get_media` | Fetch a media record by `media_id` (same nonce). |

See [Multiple Languages](/guide/videos-and-media/multiple-languages) for how these power the in-player language switcher.

## Finding more hooks

This page is intentionally curated. For the complete set in your version:

```bash
# from the plugin directory
grep -rn "apply_filters( 'fluent_player" .
grep -rn "do_action( 'fluent_player" .
```

If you build something reusable on top of these hooks, consider sharing it with the team via [Support](/guide/support).
