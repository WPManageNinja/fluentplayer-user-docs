---
title: "Deferring Embeds"
description: "Hold YouTube and Vimeo embeds back until your privacy tool grants permission, then release an individual player without reloading the page."
---

# Deferring Embeds

Most sites meet their privacy obligations with [Privacy-Enhanced Mode](/privacy-enhanced-mode), which stops YouTube and Vimeo from setting cookies until the visitor presses play. Start there.

This page covers the stricter case: policies that require a third-party embed **not load at all** until the visitor accepts. FluentPlayer supports this from **version 1.4.0** through an integration point a developer wires up to your privacy tool.

::: warning This is an integration point, not a cookie notice
FluentPlayer does not decide when permission has been granted, and it does not display a privacy notice. Your privacy tool owns that decision — FluentPlayer only reacts to it.
:::

## What it changes

Normally a YouTube or Vimeo embed initializes as the page loads. With a deferral in place:

- The provider is never contacted while the embed is held back, so nothing loads from YouTube or Vimeo before approval.
- Once the visitor accepts, that individual player is released in place. The page does not reload.

It applies to **embed providers only** — YouTube and Vimeo. Self-hosted sources (WordPress uploads, Mux, Bunny, Cloudflare Stream, Cloudflare R2, Gumlet) are your own infrastructure, so there is no third party to gate and they are never deferred.

## Step 1 — Hold the player back

Return `true` from the `fluent_player/defer_player` filter for any player that should wait:

```php
add_filter(
    'fluent_player/defer_player',
    static function ($defer, $settings, $mediaId) {
        return ! your_permission_check();
    },
    10,
    3
);
```

| Argument | Type | Notes |
|----------|------|-------|
| `$defer` | `bool` | The current value. `false` by default, meaning the player mounts normally. |
| `$settings` | `array` | Resolved player settings for this instance. |
| `$mediaId` | `int` | The media item being rendered. |

A deferred player is rendered with a `data-fp-defer="1"` attribute, and FluentPlayer's front-end skips it during its normal startup scan.

## Step 2 — Release after approval

When your privacy tool reports that permission was granted, remove the attribute and tell FluentPlayer to mount that container:

```js
container.removeAttribute('data-fp-defer');

document.dispatchEvent(new CustomEvent('InitSingleFluentPlayer', {
    detail: { container }
}));
```

::: warning Order matters
Remove `data-fp-defer` **before** dispatching the event. The `InitSingleFluentPlayer` handler checks for the attribute and exits early while it is still present, so dispatching first does nothing at all.
:::

`container` is the `.fluent-player` wrapper element of the player you are releasing. Dispatch once per container, so a page holding several deferred embeds releases only the ones that permission actually covers.

## There is no built-in placeholder

While an embed is deferred, FluentPlayer renders nothing in its place. Whatever your privacy plugin displays is what visitors see, so make sure it provides a placeholder or the space will simply look empty.

For other extension points, see the [Hooks & Filters Reference](/hooks-reference). Hook names and signatures can change between releases, so test on staging and pin to the version you verified against.
