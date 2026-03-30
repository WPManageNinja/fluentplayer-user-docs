# Multiple Languages

If your audience speaks different languages, Fluent Player lets you offer **alternate language versions** of the same video. The player can even switch the video source automatically based on the viewer's browser language.

This is different from subtitles — subtitles add text over the same video, while multiple languages swap the entire video (for example, a version narrated in Spanish instead of English).

## How it works

Each media item has a **language** setting (for example, `en_US` for English). You can then create **language mappings** that link other media items as alternate versions.

Here is an example:

| Media item | Language | Role |
|------------|----------|------|
| "Welcome Video (English)" (ID: 42) | `en_US` | Primary |
| "Welcome Video (Spanish)" (ID: 55) | `es` | Mapped to ID 42 |
| "Welcome Video (French)" (ID: 68) | `fr` | Mapped to ID 42 |

When a viewer whose browser language is set to Spanish visits a page with media ID 42, the player can automatically load the Spanish version (ID 55) instead.

## Setting the primary language

1. Go to **Fluent Player → Media** and open the media you want to configure.
2. In the media settings, find the **language** option.
3. Set it to the primary language of this video (for example, `en_US`).
4. Save.

## Adding language mappings

1. Open the **primary** media item (the one you embed on the page).
2. In the settings, find **language mappings**.
3. Add a mapping by selecting a **language code** (for example, `es`) and the **media ID** of the alternate version.
4. Repeat for each additional language.
5. Save.

**Example:** For media ID 42 (English), you add:
- Language `es` → Media ID 55
- Language `fr` → Media ID 68

## Automatic language switching

When Fluent Player loads on the front end, it detects the viewer's browser language from their HTTP request headers. If a mapping exists for that language, the player switches to the correct video source automatically. The viewer does not need to do anything.

If no mapping exists for the viewer's language, the primary video plays as usual.

## Manual switching (AJAX)

The player can request a different language version after load using authenticated AJAX:

- **`fluent_player_switch_language`** — Pass `original_media_id` and the `fluent_player_frontend` nonce to receive the mapped media payload.
- **`fluent_player_get_media`** — Fetch a media record by `media_id` with the same nonce (used when refreshing data after changes).

These require a valid nonce; they are primarily for the interactive language control in the player UI.

::: tip
Automatic switching is great for international audiences, but make sure you actually create the alternate media items and set up the mappings. Without mappings, the primary video always plays.
:::

## When to use multiple languages vs subtitles

| Approach | Best for |
|----------|----------|
| **Multiple languages** | Videos with voiceover or narration in different languages (different audio tracks) |
| **[Subtitles](/guide/videos-and-media/subtitles)** | Same video with translated text overlays |

You can use both at the same time — for example, a Spanish-narrated video with French subtitles.

## Next steps

- [Subtitles](/guide/videos-and-media/subtitles) — Add text captions to your videos.
- [Adding and Editing Videos](/guide/videos-and-media/adding-videos) — Create the alternate media items.
