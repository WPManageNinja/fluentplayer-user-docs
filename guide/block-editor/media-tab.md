# Media vs Block tabs

When the **FluentPlayer Media** block is selected, the WordPress editor **right sidebar** (Inspector) has two tabs at the top: **Media** and **Block**. Both relate to the same video, but they answer different questions.

## Media tab

Use the **Media** tab for **context about the saved media item** (when your block is tied to Fluent Player media in the database):

- **Document-level** fields that belong to the media post itself—commonly **title**, **slug** (if exposed), **visibility** / status, and actions that affect the **media record** rather than only the canvas preview.
- In the **dedicated media editor** (Fluent Player → Media), this tab is where you align what is stored on the **media item** with what you see in the list table.

Exact controls depend on your Fluent Player version and whether you are on a **post** (embed) vs **media** document.

::: tip
If you only see one tab or minimal options, your screen may be focused on **Block** settings—select the block and switch to **Media** to check.
:::

## Block tab

The **Block** tab holds **Fluent Player player configuration** for this embed:

- Branding, General settings, Preset, Chapters, overlays, Interactive layers, Timed content, Multi-language, Subtitles, Timestamp links, Advanced.

This is where you spend most of your time when styling playback, adding chapters, or configuring layers. Every panel in this section of the docs lives under the **Block** tab unless stated otherwise.

## Which tab saves what?

- Changes under **Block** usually map to **media settings** (stored with the media ID) when you are editing a **saved** media item, so embeds that use that ID pick up the same configuration.
- On a **post**, the block still references a **media ID** after you complete the source flow; saving the post persists the association. Saving **media-specific** options typically updates the **Fluent Player media** record via the plugin’s REST layer (behavior matches your version).

If something does not appear on the front end, confirm you **saved** the post or media and that you are viewing the correct **media ID**.

## Next steps

- [Overview](/guide/block-editor/) — Two editing contexts (dedicated media vs post/page)
- [Branding](/guide/block-editor/branding) — First Block panel in the docs list
