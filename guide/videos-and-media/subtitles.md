# Subtitles

Subtitles (also called captions) make your videos accessible to more viewers — people who are deaf or hard of hearing, viewers watching in a noisy environment, or anyone who speaks a different language. Fluent Player makes it easy to add subtitle tracks to any media item.

## Why use subtitles?

- **Accessibility** — Required by many regulations and best practices.
- **Better engagement** — Studies show that videos with subtitles get more watch time.
- **Multilingual reach** — Offer subtitles in multiple languages without creating separate videos.
- **SEO** — Search engines cannot watch videos, but they can read subtitle text.

## Supported formats

Fluent Player supports these subtitle file formats:

- **WebVTT** (`.vtt`) — The most common web subtitle format. Recommended.
- **SRT** (`.srt`) — A simple, widely-used subtitle format.

::: tip
If you have subtitles in a different format, there are many free online converters that can turn them into `.vtt` or `.srt`.
:::

## Adding subtitles to a media item

1. Go to **Fluent Player → Media** and open the media you want to add subtitles to.
2. In the media editor, find the **subtitles** section.
3. Upload your subtitle file (`.vtt` or `.srt`).

![Subtitle](/guide/public/Images/Managing-your-media/subtitle/subtitle-1.webp)

4. If prompted, set the **language** for the subtitle track (for example, English, Spanish, French).
5. Save the media.

You can add **multiple subtitle tracks** for different languages. Viewers can switch between them using the **captions toggle** on the control bar and, when the **Settings** menu is enabled, the **Captions** entry inside that menu — see [Skins and Controls](/guide/customize/skins-and-controls).

## Removing subtitles

1. Open the media in the editor.
2. In the subtitles section, remove the track you no longer need.
3. Save the media.

![Remove Subtitle](/guide/public/Images/Managing-your-media/subtitle/remove-subtitle-2.webp)

## Styling captions on the player

You can change how captions look on screen — font size, text color, and background color. These settings are part of the preset or can be set per media. See [Captions and Branding](/guide/customize/captions-and-branding) for details.

## Example: a simple WebVTT file

Here is what a basic `.vtt` subtitle file looks like:

```
WEBVTT

00:00:01.000 --> 00:00:04.000
Welcome to Fluent Player.

00:00:05.000 --> 00:00:08.000
In this video, we will show you the basics.

00:00:09.000 --> 00:00:12.000
Let's get started!
```

Each block has a start time, an end time, and the text to display.


