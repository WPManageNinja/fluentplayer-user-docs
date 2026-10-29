# Managing Authoring Permissions

WordPress Administrators have full access to FluentPlayer by default.

FluentPlayer also allows Editors to work with player content without giving them access to sensitive administrative areas such as plugin settings, integrations, licensing, and migration tools.

By default, Editors can:

- Create and manage media
- Configure media settings
- Add and manage layers
- View and apply available player presets

This is controlled through a WordPress capability that can be customized for different user roles.

## Default Authoring Capability

FluentPlayer uses the following WordPress capability for authoring access:

```php
edit_others_posts
```

In a standard WordPress installation, this capability is normally available to Editors and Administrators.

| WordPress role | FluentPlayer authoring access by default |
|----------------|------------------------------------------|
| Administrator  | Yes |
| Editor         | Yes |
| Author         | No |
| Contributor    | No |
| Subscriber     | No |

Custom roles may behave differently depending on the capabilities assigned to them.

## What Editors Can Access

Users with the required authoring capability can work with FluentPlayer content from supported WordPress editing interfaces.

This includes creating and managing shared media items, editing player configuration, working with layers, and selecting available presets while authoring content.

However, this permission does not provide access to FluentPlayer's administrative configuration areas.

Editors cannot normally manage:

- Global FluentPlayer settings
- Storage-provider configuration
- API credentials
- Plugin integrations
- Licensing
- Migration tools
- Other administrator-only settings

These areas continue to require the WordPress `manage_options` capability.

::: warning
FluentPlayer uses a shared media library. Users with authoring access may be able to edit or delete media created by other users. Only grant this permission to trusted roles.
:::

## Changing the Authoring Capability

Developers can customize the required authoring capability using the following filter:

```php
fluent_player/authoring_capability
```

The filter must return a valid WordPress capability.

Basic example:

```php
add_filter('fluent_player/authoring_capability', function ($capability) {
    return 'publish_posts';
});
```

In this example, any user who has the `publish_posts` capability can access FluentPlayer authoring features.

## Allow Authors to Use FluentPlayer

Authors do not have the default `edit_others_posts` capability. To allow Authors to author FluentPlayer content, change the required capability to `publish_posts`:

```php
add_filter('fluent_player/authoring_capability', function ($capability) {
    return 'publish_posts';
});
```

On a standard WordPress installation, this allows:

- Authors
- Editors
- Administrators

Contributors and Subscribers remain excluded because they do not normally have the `publish_posts` capability.

## Limit Authoring Access to Administrators

To remove authoring access from Editors and allow only Administrators, use the `manage_options` capability:

```php
add_filter('fluent_player/authoring_capability', function ($capability) {
    return 'manage_options';
});
```

Administrators have the `manage_options` capability by default, so this code does not restrict Administrator access. It changes FluentPlayer authoring from Editor-and-Administrator access to Administrator-only access.

## Allow Contributors to Use FluentPlayer

To allow Contributors and higher roles, you can use the `edit_posts` capability:

```php
add_filter('fluent_player/authoring_capability', function ($capability) {
    return 'edit_posts';
});
```

On a standard WordPress installation, this normally includes:

- Contributors
- Authors
- Editors
- Administrators

Use this configuration carefully. FluentPlayer authoring permissions apply to the shared media library and may include actions such as updating or deleting existing media.

## Use a Custom Capability

For more precise control, you can make FluentPlayer require a dedicated custom capability:

```php
add_filter('fluent_player/authoring_capability', function ($capability) {
    return 'manage_fluent_player_authoring';
});
```

The custom capability must then be assigned to the required roles or users through custom code or a role-management plugin. For example, you could assign it only to selected Editors instead of allowing every user with the standard Editor role.

::: info
Administrators do not automatically receive every custom capability. When using a custom capability, make sure it is also assigned to the Administrator role when Administrators should retain authoring access.
:::

## Use Capabilities, Not Role Names

The filter expects a WordPress capability, not a WordPress role.

Correct:

```php
return 'publish_posts';
```

Incorrect:

```php
return 'author';
```

Examples of valid capabilities include:

- `edit_posts`
- `publish_posts`
- `edit_others_posts`
- `manage_options`
- A properly registered custom capability

## Where to Add the Code

You can add the filter through:

- A custom WordPress plugin
- A must-use plugin
- A child theme's `functions.php` file
- A trusted code-snippet plugin

Do not modify FluentPlayer's plugin files directly. Any changes made inside the plugin files will be removed when the plugin is updated.

## Recommended Configuration

For most websites, the default capability is recommended:

```php
edit_others_posts
```

It allows Administrators and trusted Editors to manage FluentPlayer content while excluding Authors, Contributors, and Subscribers.

Use `publish_posts` when Authors also need access.

Use `manage_options` when FluentPlayer authoring should remain available only to Administrators.

For websites requiring more precise role management, use a dedicated custom capability.

## Troubleshooting Permission Issues

If a user cannot access FluentPlayer authoring features after changing the capability, check the following:

- Confirm that the code snippet is active.
- Confirm that the filter returns a valid capability.
- Check whether the user's role has the returned capability.
- Check whether a role-management or security plugin has modified the role's permissions.
- Test using a separate non-administrator account.
- Clear any persistent object cache after changing role capabilities.

Changing the authoring capability does not grant access to FluentPlayer's global settings or other administrator-only configuration areas.
