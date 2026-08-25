---
title: "Licensing (Pro)"
description: "Activate your FluentPlayer Pro license to unlock Pro features and automatic updates, and learn what the Licensing screen tells you."
---

# Licensing (Pro)

Your **FluentPlayer Pro license** does two things: it unlocks the Pro features, and it lets your site receive automatic plugin updates. You activate it once, and then you can mostly forget about it.

::: info Pro only
The free FluentPlayer plugin does not need a license. FluentPlayer Pro does — and Pro also needs the free plugin installed and active alongside it. See [Installation](/installation).
:::

## Activate your license

1. In your WordPress admin, go to **FluentPlayer → Settings → Licensing**.
2. Paste your **license key**. You'll find it in your account on the FluentPlayer website, or in your purchase receipt email.
3. Click **Activate**.

That's it. Pro features switch on immediately, and you'll start seeing update notifications when new versions are released.

## What the Licensing screen shows

Once your license is active, you'll see a green checkmark and **"Congratulations! Your license key is valid and activated"**, along with the details of your license.

![The Licensing screen with an active license](/guide/public/settings/licensing/licensing-active-1.webp)

| Row | What it tells you |
|-----|-------------------|
| **License Key** | Your key, mostly hidden — you'll see the first few and last few characters only. |
| **Expires** | The date you need to renew by, or **Lifetime** if your license never expires. |
| **Plan** | What you bought, including how many sites it covers. |

If your license has a renewal date rather than being lifetime, the screen also shows how long you have left and when FluentPlayer last checked in with the licensing server.

::: info Why your key is hidden
FluentPlayer only ever displays a masked version of your key, so it can't be read off the screen by anyone who gets into your admin area. If you need the full key, copy it from your FluentPlayer account rather than from here.
:::

## If your license expires

FluentPlayer doesn't switch your videos off the moment a license lapses. For a short window afterwards, your license enters a **grace period**.

During the grace period, **everything on your site keeps working** — your players, your Pro features, all of it. What you lose when the grace period ends is updates and support.

So if you see a grace period warning, treat it as a reminder rather than an emergency. Your site is fine today. But do renew before the window closes, because once updates stop you also stop receiving security fixes.

## Keeping your license up to date

**Refresh Status** re-checks your license with the licensing server without you re-entering the key. Use it if you've just upgraded your plan, renewed, or the screen looks out of date.

**Deactivating** releases the license from this site — useful before moving to a new domain, or to free up an activation for another site. Look for *"Want to deactivate this license?"* and click the link next to it. Pro updates stop until you activate again.

::: tip Moving a site?
Deactivate the license on the old site *before* activating on the new one. That way you don't use up a second activation slot from your plan.
:::

## Troubleshooting

| Problem | What to check |
|---------|---------------|
| **Activation fails** | Make sure the key is copied in full, with no missing characters or extra spaces, and that it matches an active subscription. |
| **Pro features still missing** | Both the free **FluentPlayer** and **FluentPlayer Pro** plugins need to be installed and active. |
| **No update notifications** | Confirm the license shows as active, then click **Refresh Status** to re-sync. |
| **A grace period warning** | Your license has expired but Pro still works for now. Renew to keep updates and support. |
| **Details look out of date** | Click **Refresh Status**. Changes made on the FluentPlayer website aren't reflected here until your site checks in. |

## Related

- [Installation](/installation) — installing the free and Pro plugins
- [Settings Overview](/settings) — all global settings sections
