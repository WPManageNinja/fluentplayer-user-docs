# FluentCommunity (Pro)

**FluentCommunity** allows you to build powerful learning management systems and community portals. By integrating with FluentPlayer, you can deliver high-quality video lessons while providing students with additional resources, interactive comments, and personalized experiences.

#### What you need

- **Fluent Player Pro** installed and activated.
- **FluentCommunity** installed and your portal/community configured.
- Media items created in **Fluent Player → Media** (or connected sources such as [Mux](/guide/integrations/mux) or [Bunny Stream](/guide/integrations/bunnycdn-stream)).

## Core Integration Features

The integration provides a dedicated suite of tools within the lesson editor to enhance the student experience:

 * **Media Embed Options:** Choose between **Oembed** (pasting a simple URL from YouTube or Vimeo) or **Custom HTML** (pasting iframe code) directly within the lesson sidebar.
 * **Lesson Engagement:** **Enable** or **disable** comments specifically for video lessons to foster student discussion.
 * **Lesson Duration:** Manually set the expected minutes and seconds for a lesson to give students a clear timeline.
 * **Public Previews:** **Toggle** the **Free Preview Lesson** option to allow non-enrolled users to view the content before joining the course.
 * **Smartcodes:** Use personalized tags like <code v-pre>{{user.display_name}}</code> or <code v-pre>{{user.user_email}}</code> within your lesson content to greet members individually.
 * **Resource Management:** **Attach downloadable files** such as PDFs or worksheets directly to the video via the **Documents & Files** section.

## Step By Step Configuration

### 1. Adding the Player Block

Open your lesson editor and click the **(+) icon** to search for the **FluentPlayer block**.

![Fluent Player Block](/guide/public/integrations/fluent-community/fluentplayer-block-1.webp)

You can select an existing video from your **library** or add a new one from sources like **Bunny Stream, Mux, or YouTube**.

### 2. Managing Lesson Settings (Sidebar)

On the right-hand sidebar under the **Lesson** tab, configure the following:

 * **Video Control:** Ensure Enable Video Embed is checked to display your player.
 * **Media Embed:** Switch between **Oembed** and **Custom HTML** to paste external links or iframe codes.
 * **Duration:** Input the total length of the video lesson.

![Mange Lesson setting feature](/guide/public/integrations/fluent-community/integration-feature-2.webp)

### 3. Attaching Student Resources

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
>If you use the Media Embed sidebar option, it will override or work alongside the main player block. Ensure your Oembed link is correct to prevent playback errors.

The FluentCommunity integration turns a simple video into a comprehensive learning experience.

