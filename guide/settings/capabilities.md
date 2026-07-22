# Authoring Capabilities

By default, FluentPlayer restricts content authoring to WordPress users with the **Administrator** role. You can extend authoring access to **Editors** (or any custom role) using the `fluent_player/authoring_capability` filter.

## What Editors Can Do

Users with the **Editor** role (or the capability granted by the filter) can perform the following actions in FluentPlayer:

| Action | Default role required |
|--------|-----------------------|
| Add, edit, and delete **Media** items | Editor or higher |
| Configure **Interactive Layers** (email capture, CTA, Hotspots, Ads, Forms) | Editor or higher |
| Create and edit **Custom Presets** | Editor or higher |
| Manage **Playlists** | Editor or higher |
| View **Analytics** | Editor or higher |

::: info
**Global Settings** (Integrations, Storage, Licensing, Branding) remain restricted to Administrators. Editors cannot access the Settings menu.
:::

## Changing the Authoring Capability

Use the `fluent_player/authoring_capability` filter in your theme's `functions.php` or a custom plugin to override the default capability:

```php
add_filter( 'fluent_player/authoring_capability', function( $capability ) {
    return 'edit_posts'; // grants access to anyone who can edit posts (Editor and above)
} );
```

### Common Capability Values

| Value | Who gets access |
|-------|----------------|
| `manage_options` | Administrators only (default) |
| `edit_others_posts` | Editors and Administrators |
| `edit_posts` | Authors, Editors, and Administrators |
| `read` | All logged-in users |

### Custom Role Example

If you use a plugin like **Members** or **User Role Editor** to define custom roles, pass the exact capability slug your role uses:

```php
add_filter( 'fluent_player/authoring_capability', function( $capability ) {
    return 'manage_video_content'; // a custom capability on your site
} );
```

::: warning
Granting authoring access allows those users to add, edit, and delete FluentPlayer media items and presets. Make sure the role you target is appropriate for that level of access on your site.
:::

## Related Pages

- [Creating Custom Presets](/creating-custom-presets) — preset authoring now available to Editors
- [Interactive Layers](/interactive-layers) — layer management now available to Editors
- [Global Settings](/settings) — still restricted to Administrators
