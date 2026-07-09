# FluentCRM

**FluentCRM** is a WordPress-native CRM and email marketing plugin. Because it runs entirely on your own server, the integration with FluentPlayer requires no API keys just install both plugins and enable the connection. Once connected, FluentPlayer can route email subscribers directly into your FluentCRM lists and tags, and personalize your video overlays using CRM contact data.

## What You Can Do with FluentCRM and FluentPlayer

- **Capture leads during playback**: Pause the video at a set timestamp and show an email sign-up form. Submissions go straight into FluentCRM contacts.
- **Segment subscribers automatically**: Assign new contacts to specific FluentCRM lists and tags at the moment they submit.
- **Enable double opt-in**: Send a FluentCRM confirmation email before marking a contact as subscribed.
- **Personalize player text**: Use FluentCRM contact data (name, email) as smartcodes in overlays, titles, and timed content. See [Smartcodes and Personalization](/smartcodes-personalization).

#### Before You Begin

- **FluentCRM** plugin is installed and active on your WordPress site.
- **FluentPlayer** (free) is installed and active.
- You have at least one **FluentCRM list** created to receive new contacts.

## Step 1: Enable the FluentCRM Integration

Make sure FluentCRM is installed and activated on your WordPress site. Once activated, the integration between FluentPlayer and FluentCRM is enabled automatically no additional setup is required.

![Enabled](/guide/public/integrations/fluentcrm/enabled-fluentcrm-1.webp)

## Step 2: Add an Email Capture Layer to Your Video

The FluentCRM integration works through the [Email Capture Overlay](/email-capture). Follow these steps to add one to any video.

### Open the Interactive Layers Panel

1. Go to **FluentPlayer → Media** and open the video you want to gate.
2. In the right sidebar, select the **Block** tab.
3. Expand the **Interactive Layers** panel.
4. Click **+ Add Layer**.

![Add Layer](/guide/public/integrations/fluentcrm/add-layer-2.webp)

### Select Email Capture

In the **Choose Layer Type** popup, click **Email Capture** to open the layer configuration window.

![Email Capture](/guide/public/integrations/fluentcrm/email-capture-3.webp)

## Step 3: Set the Display Time

Expand the **Display** accordion panel on the right side of the popup.

Enter the exact timestamp in the **Start Time** fields (Hours, Minutes, Seconds). When the video reaches this point during playback, it will pause and show the email form.

Use the **video preview** on the left to scrub the timeline and confirm the timing looks right before saving.

![Display TIme](/guide/public/integrations/fluentcrm/set-display-time-4.webp)

## Step 4: Connect FluentCRM as the Email Provider

Expand the **Email Providers** accordion panel.

1. Click **+ Add Provider**.
2. From the **Select Provider** dropdown, choose **FluentCRM**.


### Assign Lists and Tags

Inside the FluentCRM provider settings:

- **Lists** — Click the Lists field and select which FluentCRM list(s) new subscribers should be added to.
- **Tags** — Click the Tags field to assign one or more segmentation tags to each new contact.

[Screenshot: The FluentCRM provider settings panel showing the Lists and Tags fields with example selections.]

### Enable Double Opt-In (Optional)

Toggle **Double Opt-In** on if you want FluentCRM to save the contact as **Pending** first and send a confirmation email before marking them as subscribed. This is recommended when consent is important.

Once you have configured the provider, make sure the **Active** toggle is on, then click **Add** to attach the provider to this layer.

::: tip
You can attach multiple providers to a single email capture layer. For example, you can send the same submission to both FluentCRM and a [Webhook](/webhook-integration) at the same time.
:::


![Add Email Provider](/guide/public/integrations/fluentcrm/add-email-provider-5.webp)

## Step 5: Customize the Form Content

Expand the **Content** accordion panel to control the text viewers see on the overlay.

| Field | Purpose |
|-------|---------|
| **Headline** | Main message above the email input (e.g., "Enter your email to keep watching") |
| **Email Placeholder** | Hint text inside the input field (e.g., "Email Address") |
| **Button Text** | Label on the submit button (e.g., "Subscribe") |
| **Bottom Text** | Small text below the button, such as a privacy note |
| **Confirmation Message** | Text shown after a successful submission |
| **Auto-Dismiss After (Seconds)** | How long the success message stays visible before closing |
| **Dismiss Button Text** | Label on the button that closes the success screen |


![Customize the Content](/guide/public/integrations/fluentcrm/customize-form-content-6.webp)

## Step 6: Configure Skip Controls

Expand the **Controls** accordion panel.

- **Allow Skipping: On**: A **Skip** button appears on the form. Viewers can close the overlay and continue watching without submitting their email. This is a **soft opt-in**.
- **Allow Skipping: Off**: No Skip button. Viewers must submit their email to continue watching. This is a **hard gate**.

::: warning
Turning off skipping creates a strict content gate viewers cannot watch the rest of the video without submitting the form. Use this only when gating is intentional and the video content justifies the friction.
:::

![Control](/guide/public/integrations/fluentcrm/control-skiping-7.webp)

## Step 7: Customize Appearance

Expand the **Appearance** accordion panel to style the overlay to match your site.

- **Button Color**: Set the background and text colors for the submit button.
- **Layer Color**: Set the background color of the overlay container.
- **Border Radius (PX)**: Control the roundness of the overlay and button corners.

## Step 8: Set Conditions (Optional)

Expand the **Conditions** accordion panel to show the email capture layer only when certain rules are met.

1. Toggle **Conditions** on.
2. Choose **Any** (at least one rule must match) or **All** (every rule must match).
3. Add condition rows using the **Field**, **Operator**, and **Value** dropdowns.

Common conditions include:

- **Viewer is logged in**: Only show the form to logged-in users.
- **Viewer is CRM contact**: Show only to existing FluentCRM contacts.
- **Viewer has CRM tag**: Target subscribers with a specific tag.
- **URL query parameter**: Show or hide based on a URL value.

![Appearance](/guide/public/integrations/fluentcrm/appearance-8.webp)

## Step 9: Save and Publish

1. Review the layer position in the video timeline preview on the left side of the popup.
2. Click **Add Layer** at the bottom of the popup to apply the layer.
3. Click **Publish** or **Save** in the top right of your WordPress editor to make the layer live.

## Where Submissions Are Stored

Every email submitted through the overlay is saved in two places:

- **FluentPlayer → Analytics → Emails** - A record of all submissions collected through the player, exportable as a list regardless of which provider is connected.
- **FluentCRM → Contacts** — The contact is created or updated in FluentCRM with the lists and tags you configured.

## Personalizing Your Video with FluentCRM Data

Once FluentCRM is connected, you can use **FluentCRM Smartcodes** to display personalized text inside your player overlays, titles, and timed content. For example:

- Show a viewer's first name in a CTA overlay: <code v-pre>{{contact.first_name}}</code>
- Display their email in timed content: <code v-pre>{{contact.user_email}}</code>

See the full reference on the [Smartcodes and Personalization](/smartcodes-personalization) page.

