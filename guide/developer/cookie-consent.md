---
title: "Cookie Consent & GDPR"
description: "How FluentPlayer works alongside a cookie-consent banner, and how to reduce third-party tracking without writing code."
---

# Cookie Consent & GDPR

If your site shows a cookie-consent banner, the usual concern is YouTube and Vimeo: those are third-party embeds, and they can set cookies for visitors who never press play.

Here is what FluentPlayer does about that, from the simplest option to the most involved.

## Start with Privacy-Enhanced Mode

For most sites this is the whole answer, and it takes one click.

With Privacy-Enhanced Mode on, the provider sets no cookies and does no tracking until the visitor actually plays the video. Someone who loads the page and scrolls past is not tracked at all.

| Provider | Where | Default |
|----------|-------|---------|
| **Vimeo** | Settings → Vimeo → [Privacy-Enhanced Mode](/vimeo#privacy-enhanced-mode) | **On** |
| **YouTube** | Settings → YouTube → [Privacy Enhanced Mode](/youtube) | **Off** |

Note the defaults differ, so check both if you use both sources.

::: tip
This reduces what the provider collects from ordinary page visitors, but it does not make embeds completely cookie-free — once someone plays the video, the provider may still set cookies. For many consent policies that is enough, because nothing is set before the visitor's own action.
:::

## Your own videos are never the problem

Only third-party embeds — YouTube and Vimeo — involve another company's cookies.

Videos you host yourself always load normally and are unaffected by any of this: WordPress uploads, Mux, Bunny, Cloudflare Stream, Cloudflare R2, and Gumlet. Those are your files on your own infrastructure, so there is no third party to gate.

## If you need embeds fully blocked until consent

Some policies require that a third-party embed not load *at all* until the visitor accepts — not merely that it sets no cookies.

FluentPlayer supports this, but it is not a setting you can switch on. It needs a small amount of custom code to connect FluentPlayer to your particular consent tool, so it is a job for a developer.

FluentPlayer provides hooks for exactly this: a YouTube or Vimeo embed can be held back unmounted, then released once your consent tool reports that the visitor has accepted. If you're building that integration, [get in touch with support](/support) and we'll point you at the current hooks and how to use them.

::: warning There is no built-in placeholder
If embeds are deferred, FluentPlayer renders nothing in their place — whatever your consent plugin displays is what visitors see. Make sure it provides a placeholder, or the space will simply look empty.
:::

