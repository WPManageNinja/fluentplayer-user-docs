---
title: "Smartcodes and Personalization"
description: "Use FluentPlayer Smartcodes to personalize titles, overlays, email capture, and timed content. Free user/site/date/media tags plus FluentCRM contact tags."
---

# Smartcodes and Personalization

**Smartcodes** let you create a personalized viewing experience by dropping dynamic placeholders into the player’s text elements. When the page is viewed, FluentPlayer replaces each placeholder with real data—such as the viewer’s name, the site name, or the current date.

::: info Free vs Pro
The **`user`**, **`site`**, **`date`**, and **`media`** smartcode groups work in the **free** plugin. The **`contact`** group pulls data from **FluentCRM** and is only available when FluentCRM is installed (the deeper CRM personalization is part of the Pro/CRM experience).
:::

### What are Smartcodes?

Smartcodes are dynamic placeholders (merge tags) that look like double braces, such as <code v-pre>{{user.display_name}}</code> or <code v-pre>{{contact.first_name}}</code>. When a logged-in user or a known contact views your video, FluentPlayer automatically replaces these tags with the matching data (from the WordPress user, the site, or—if available—their **FluentCRM** profile).


### Where to Use Smartcodes

You can insert Smartcodes into several areas of the player to engage your audience:

* **Video Titles:** Create a personalized welcome by adding a name to the title overlay.
* **Interactive Layers:** Use them inside CTA buttons or Text Overlays (e.g., *"Hey <code v-pre>{{contact.first_name}}</code>, check this out!"*).
* **Email Capture:** Pre fill or personalize the message on your lead generation forms.
* **Timed Content:** Display personalized instructions or notes in the area below the player.


## How to Configure Personalization

### 1. Connect FluentCRM

* Go to **FluentPlayer Pro** → **Settings** → **Integrations**.
* Locate the **FluentCRM** card and ensure it is **Enabled**.

>[!Note]
>Since FluentCRM is WordPress native, no API keys are required.

![Connect FluentCRM](/guide/public/integrations/smartcodes-personalization/enable-fluentcrm-1.webp)

### 2. Insert Smartcodes in the Editor

* Open your video in the **Media** editor.
* In the **Block** tab, look for any text field like **Title Overlay** or **[Overlay Text/Button](/overlays)**.
* Click the **Tag icon (three dot)** next to the text field to open the Smartcode selector.
* Choose the data you want to display (e.g., Display Name, First Name, Email).

![Connect FluentCRM](/guide/public/integrations/smartcodes-personalization/overlay-text-2.webp)

### 3. Test the Experience

* Log in to your site as a test user that exists in your FluentCRM contact list.
* View the page containing your video. The placeholders should now show your actual contact details.


## Available Smartcode Examples

**Free** smartcodes (no FluentCRM required):

| Data Type | Smartcode |
| :--- | :--- |
| **Display Name** | <code v-pre>{{user.display_name}}</code> |
| **First Name** | <code v-pre>{{user.first_name}}</code> |
| **Email Address** | <code v-pre>{{user.email}}</code> |
| **Site Name** | <code v-pre>{{site.name}}</code> |
| **Current Date** | <code v-pre>{{date.now}}</code> |
| **Media Title** | <code v-pre>{{media.title}}</code> |

The free **`user`** group includes `display_name`, `first_name`, `last_name`, `email`, `login`, `id`, and `role`.

**FluentCRM** smartcodes (require FluentCRM):

| Data Type | Smartcode |
| :--- | :--- |
| **First Name** | <code v-pre>{{contact.first_name}}</code> |
| **Email Address** | <code v-pre>{{contact.user_email}}</code> |
| **Full Name** | <code v-pre>{{contact.full_name}}</code> |

::: warning Important
Smartcodes only work for **identified** visitors (logged in users or those who have previously submitted a form). Anonymous visitors see the fallback (default) text. The `contact` tags also require the viewer to exist in FluentCRM.
:::


Smartcodes take your video marketing to the next level by making every viewer feel seen. Whether you are greeting a student in a course or offering a personalized deal to a lead, this integration helps build a stronger connection with your audience.


