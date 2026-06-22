# Subtitles

**Subtitles** (also called captions) make your videos accessible to a wider audience, including non native speakers, viewers in noisy environments, or those with hearing impairments. FluentPlayer allows you to add and manage multiple subtitle tracks for any media item with ease.

## Why Use Subtitles?

 * **Accessibility:** Meet legal requirements and follow web best practices by supporting deaf or hard of hearing viewers.
 * **Higher Engagement:** Subtitled videos consistently see higher completion rates and watch time.
 * **Global Reach:** Offer translations for international viewers without needing to host separate video files.
 * **SEO Benefits:** Search engines can index your subtitle text, improving your video's discoverability.

## Supported Formats

FluentPlayer supports these subtitle file formats:

- **WebVTT** (`.vtt`): The most common web subtitle format. Recommended.
- **SRT** (`.srt`): A simple, widely used subtitle format.

::: tip
If your subtitles are in a different format, use a free online converter to save them as a `.vtt` or `.srt` file before uploading.
:::

## How to Add Subtitles to a Video

1. Go to **FluentPlayer → Media** and open the media you want to add subtitles to.
2. In the right-hand sidebar, click on the **Subtitles** panel under the **Block** tab.
3. Choose your upload method:
    * **Manual Upload:** Click the **Upload** button to add your own `.vtt` or `.srt` subtitle file from your computer.
    * **YouTube Subtitle Import:** For YouTube videos, you can use the **Fetch** button to automatically import existing captions from YouTube.

::: warning
YouTube subtitle import is an admin only feature. Ensure you have permission to use the content before importing.
:::

4. If prompted, set the **language** for the subtitle track (for example, English, Spanish, French).
5. Click **Update** or **Save** to apply the changes.

## Free vs Pro

| Capability | Free | Pro |
|-----------|------|-----|
| Embedded captions in HLS streams play automatically | Yes | Yes |
| Upload your own `.vtt` / `.srt` tracks | — | Yes |
| Import captions from YouTube (hosted subtitle service) | — | Yes |
| Storyboard / hover preview | — | Yes |

::: info Hosted subtitle service
YouTube subtitle import and hover-preview generation are handled by FluentPlayer's hosted subtitle service (default `https://api.fluentplayer.com`, a beta service), using license-signed requests — so these require **FluentPlayer Pro** with an active license.
:::

**Limits to know:** uploaded subtitle files can be up to **5 MB** each, and a single import can select up to **10** remote tracks.

### Advanced Subtitle Features

 * **Hover Preview:** You can click **Generate Hover Preview** to create a preview of the YouTube video independently from the main subtitle import.
 * **Managing Tracks:** You can add **multiple subtitle tracks** for different languages.Once added, subtitle tracks appear in a list where you can click **Edit** to modify them or the **Trash** icon to remove them.
 * **Captions Toggle:** Viewers can switch between them using the **captions toggle** on the control bar and, when the **Settings** menu is enabled, the **Captions** entry inside that menu see [Creating Custom Presets](/guide/customize/creating-custom-presets).

### Removing Subtitles

1. Open the media in the editor.
2. In the subtitles section, remove the track you no longer need.
3. Save the media.

![Remove Subtitle](/guide/public/videos-and-media/subtitles/remove-subtitle-2.webp)

### Styling Captions

You can change how captions look on screen, including font size, text color, and background color. These settings are part of the Preset or can be customized per media item in the Branding & Appearance section. See [Branding & Appearance](/guide/block-editor/branding) for details.

## Example: A Simple WebVTT File

Here is what a basic `.vtt` subtitle file looks like:

```
WEBVTT

00:00:01.000 --> 00:00:04.000
Welcome to FluentPlayer.

00:00:05.000 --> 00:00:08.000
In this video, we will show you the basics.

00:00:09.000 --> 00:00:12.000
Let's get started!
```

Adding subtitles is a simple yet powerful way to make your content more professional and inclusive. By using the **Subtitles** panel in FluentPlayer, you ensure that your message reaches every viewer, regardless of their language or environment.


