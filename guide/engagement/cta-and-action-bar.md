---
prev:
  text: 'Email Capture Overlay'
  link: '/guide/engagement/email-capture'
next:
  text: 'Email Providers'
  link: '/guide/engagement/email-providers'
---

# CTA (Call to Action) Overlay

The **CTA overlay** is a popup that appears over the video at a specific time to prompt the viewer to take an action, such as visiting a link, signing up, or watching another video. The video pauses while the overlay is on screen, so the viewer's full attention is on your message.

## How it works

At a time you choose (for example, 2 minutes into the video), playback pauses and a full screen overlay appears with whatever content you have designed in the built in editor. The viewer can interact with the overlay (click a button, read your message) or skip past it if you allow skipping. Playback resumes once the overlay is dismissed.

## Setting up a CTA overlay

1. Go to **Fluent Player → Media** and open the media item you want to add a CTA to.
2. In the right sidebar, expand the **Interactive Layers** panel.
3. Click **+ Add Layer** to open the **Manage Layers** dialog.

![Call to Action](/guide/public/engagement/cta-and-action-bar/cta-1.webp)

4. Under **Choose Layer Type**, select **CTA**.

![Call to Action](/guide/public/engagement/cta-and-action-bar/cta-2.webp)

5. Set the **Start Time** and design your content in the editor (see below).
6. Click **Add Layer** to save, then click **Save** to publish your changes.

Once saved, the CTA layer appears in the **Interactive Layers** panel with its name and trigger time. You can click **Edit** to update it or the trash icon to remove it.

## Configuration options

### Start Time

Set the exact moment the CTA overlay appears using **Hours**, **Minutes**, and **Seconds** fields. For example, setting Minutes to `02` triggers the overlay at the 2-minute mark.

### Content editor

The CTA overlay uses a **rich text editor**, the same one you use when writing WordPress posts. You design the overlay content directly, so what you see in the editor is what the viewer sees on screen.

The editor has two modes:

- **Visual:** A toolbar with formatting options. Design your overlay by typing and styling text directly.
- **Code:** Switch to raw HTML if you need precise control over the markup.

The Visual toolbar includes:

| Tool | What it does |
|------|-------------|
| **Heading** | Change text to a heading level (Heading 2, Heading 3, etc.) |
| **Button** | Insert a clickable button. Set the label, link URL, and whether it opens in a new tab. |
| **Bold / Italic / Underline / Strikethrough** | Standard text formatting |
| **Text color** | Change the color of selected text |
| **Link** | Turn selected text into a hyperlink |
| **Blockquote** | Add a styled quote block |
| **Code** | Format text as inline code |
| **Alignment** | Align content left, center, or right |
| **Add media** | Insert an image or other WordPress media into the overlay |

There are no separate fields for headline, description, or button; you build the entire overlay in one editor, giving you full control over layout and styling.

![Call to Action](/guide/public/engagement/cta-and-action-bar/cta-3.webp)

### Completion Type

This dropdown controls what counts as "completing" the overlay. In other words, it determines what the viewer needs to do before the layer is dismissed and playback resumes.

| Option | What it means |
|--------|--------------|
| **Link Click** | The layer completes when the viewer clicks a link or button inside the overlay. This is the default and works well for most CTAs. |
| **Auto Dismiss** | The layer disappears on its own after a set duration, with no viewer interaction required. Useful for brief announcements or reminders that should not block playback for long. |
| **Skip Only** | The layer stays on screen until the viewer manually skips it. There is no automatic dismissal and no link click requirement; the viewer simply clicks **Skip** when they are ready to continue. |

### Allow Skip

When this toggle is **on**, a **Skip** button appears on the player so the viewer can dismiss the overlay without clicking your CTA. When it is **off**, the viewer must interact with the overlay (for example, click the button) before the video continues.

### Layer Background

Pick a **Background Color** for the overlay area behind your content. Use this to ensure your text is readable against the video frame underneath. For example, a semi-transparent dark background makes white text easy to read.

::: tip
Keep your CTA content short and focused. A strong heading, one line of supporting text, and a single button is the most effective pattern. Too much content in an overlay can overwhelm the viewer.
:::

## Example: end of video upsell

You have a product demo and want to direct viewers to your pricing page near the end:

- **Start Time:** `0h 15m 0s` (near the end of a 17-minute video)
- **Content:**
  - Heading: "Like what you see?"
  - Text: "Start your free trial today."
  - Button: "Get Started" → links to `https://example.com/signup`

## Example: mid video resource link

You are recording a tutorial and want to share a downloadable resource at the 5-minute mark:

- **Start Time:** `0h 5m 0s`
- **Content:**
  - Heading: "Grab the cheat sheet"
  - Text: "Download the companion PDF to follow along."
  - Button: "Download Now" → links to your resource URL

## Editing a CTA layer

After you add a CTA layer, it appears in the **Interactive Layers** panel in the right sidebar. Each layer shows the **layer type** (CTA), its **trigger time** (e.g., 2:00), an **Edit** button, and a **delete** icon.

To make changes to an existing layer:

1. Click **Edit** on the layer in the Interactive Layers panel.
2. The **Edit Layer** dialog opens. It looks the same as the creation dialog, with all your previously configured settings (Start Time, content, Completion Type, Allow Skip, and Layer Background).
3. Make your changes.
4. Click **Update Layer** to save.

You can add multiple CTA layers to the same media item. For example, you can place one at the 2-minute mark and another near the end.

![Call to Action](/guide/public/engagement/cta-and-action-bar/cta-4.webp)
