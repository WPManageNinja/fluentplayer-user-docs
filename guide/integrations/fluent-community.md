# FluentCommunity (Pro)

The **FluentPlayer** integration allows you to transform your FluentCommunity portal into a fully branded, professional, and video-enabled experience. Instead of relying on the default look of third-party embeds, FluentPlayer ensures all video content from community posts to course lessons is consistent and perfectly matches your community’s style.

#### What you need

- **FluentPlayer Pro** installed and activated.
- **FluentCommunity** installed and your portal/community configured.
- Media items created in **FluentPlayer → Media** (or connected sources such as [Mux](/guide/integrations/mux) or [Bunny Stream](/guide/integrations/bunnycdn-stream)).

## Core Integration Features

 * **Member Video Uploads:** Allow members to upload videos directly to community Spaces in formats like MP4, M3U8, and MOV.
 * **Unified Branding:** Force external links (YouTube, Vimeo, HLS) to render with your custom FluentPlayer design and brand colors.
 * **Lesson Resources:** Attach downloadable files (PDFs, worksheets) directly to your video lessons.
 * **Smartcodes:** Personalize lesson content using tags like `##user.display_name##` to greet students individually.

## Step By Step Configuration

### 1. Enabling the Integration

If you do not have FluentPlayer installed, you can do so directly from your portal:

 - Go to **FluentCommunity > Settings > Features & Addons**.
 - Find the FluentPlayer module under **Recommended Plugins** and click **Install FluentPlayer**.

![Install FluentPlayer](/guide/public/integrations/fluent-community/install-fluentplayer-1.webp)

 - Once installed, click the **Player Settings** button on the FluentPlayer module to open the configuration panel.
 - Toggle **Enable FluentPlayer** to **ON**.



### 2. Customizing Appearance and Behaviors

In the Player Settings slide-in panel, you can fine-tune how videos look and act:

 * **Select Player Skin:** Choose from layouts like **Modern, Classic, Simple, Floating, or Minimal**.
 * **Set Brand Color:** Define a primary hex color for the progress bar and active controls.
 * **Toggle Controls:** Enable or disable specific buttons like **Volume**, **Fullscreen**, **Picture** in Picture, or the **Captions** Toggle.
 * **Set [Behaviors](/guide/customize/behaviors):** **Configure Muted Autoplay** for feed environments or **Save Play Position** so members can resume videos exactly where they left off.

### 3. Managing Video Uploads & Embeds

Control how your community members interact with video content:

 * **Enable Video Uploads:** **Turn** this toggle **ON** to allow direct file uploads in community posts.
 * **Permissions:** Restrict who can upload videos choose from Admins, Admins and Moderators, or Everyone.
 * **Play Embedded Videos With FluentPlayer:** Turn this **ON** to force external links (like YouTube or Vimeo) to use your custom branded player.

![Customize FluentPlayer](/guide/public/integrations/fluent-community/customize-fluentplayer-2.webp)

## How to Add Videos to Community Posts or Spaces

Once permissions are configured, members can easily share video content within the community feed:

 - Navigate to the community **Feed** or a specific **Space**.
 - Click the "What's happening?" box to create a new post.
 - Click the **Video Icon** in the post toolbar.

![Create Post](/guide/public/integrations/fluent-community/whats-happening-3.webp)

 - Choose your source in the Attach Video popup:

   * **Oembed:** **Paste** a simple URL (e.g., from YouTube or Vimeo).
   * **HTML Code:** Paste an iframe or custom embed code.
   * **Upload Video:** Drag and drop or select a video file from your device.
 - Click **Embed** or **Upload**.
 - Select your target **Space** and click **Post**.

![Post](/guide/public/integrations/fluent-community/post-4.webp)

## How to Add Video Lessons to Courses

For course creators, FluentPlayer integrates directly into the lesson editor using the Gutenberg block system:

### 1. Adding the Player Block

Open your lesson editor and click the **(+) icon** to search for the **FluentPlayer block**.

![FluentPlayer Block](/guide/public/integrations/fluent-community/fluentplayer-block-1.webp)

You can select an existing video from your **library** or add a new one from sources like **Bunny Stream, Mux, or YouTube**.

### 2. Configuring Lesson Settings (Sidebar)

Use the right-hand sidebar under the **Lesson** tab to manage specific lesson details:

 * **Video Visibility:** Ensure **Enable Video Embed** is checked.
 * **Media Embed:** You can also use the sidebar to paste **Oembed** links or **Custom HTML** if you prefer not to use the block editor.
 * **Lesson Duration:** Input the total length of the video so students can track their progress.
 * **Comments:** **Toggle** comments ON to allow students to discuss the lesson content.

![Mange Lesson setting feature](/guide/public/integrations/fluent-community/integration-feature-2.webp)

### 3. Attaching Documents 

 - Scroll to the **Documents & Files** section in the sidebar.
 - Click **Manage Documents & Files**.
 - A popup will appear where you can upload files that students can view and download alongside the video.

>[!Note]
> Uploading documents requires a Pro upgrade.

### 4. Personalizing with Smartcodes

 - Open the **Smartcodes** dropdown in the sidebar to see a list of available tags.
 - Copy tags like `##user.profile_link##` to insert dynamic member data into your lesson description.

![Documents & Files Manage](/guide/public/integrations/fluent-community/documents-and-files-3.webp)

>[!Note]
>To save server storage, it is highly recommended to restrict video uploads to **Admins** and **Moderators** only via the **Player Settings** in the community configuration panel.

## Embedding a playlist in lessons (Pro)

Besides single videos, you can embed an entire **FluentPlayer playlist** inside FluentCommunity lessons and portal content using the **FluentPlayer Playlist** block:

1. In the lesson editor, click **(+)** and search for **FluentPlayer Playlist**.
2. Select an existing playlist (or a [tag-based playlist](/guide/playlists/tag-based-playlists)).
3. Configure the [layout and appearance](/guide/playlists/playlist-layouts) as you would anywhere else.

This is ideal for course modules where a lesson should present a sequence of videos rather than a single clip. See the [Playlists documentation](/guide/playlists/) for creating and styling playlists.

By combining advanced playback controls with direct community uploads and lesson-specific features like document attachments, FluentPlayer provides a seamless, distraction-free environment for both social interaction and professional learning.

