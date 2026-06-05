# FluentPlayer – User Documentation

Official user documentation for [FluentPlayer](https://fluentplayer.com), the WordPress video and media plugin by WPManageNinja.

Built with [VitePress](https://vitepress.dev/).

## What's Inside

This documentation covers everything users need to get started with and master FluentPlayer:

- **Getting Started** – Installation, quick start, and overview
- **Videos & Media** – Adding videos, sources, subtitles, multi-language audio, visibility
- **Display & Embed** – Shortcodes, Gutenberg blocks, dedicated URLs, timestamp links
- **Block Editor** – Full reference for the player block sidebar panels
- **Customization** – Presets, skins, branding, controls, and player appearance
- **Engagement** – Email capture, CTA overlays, action bars
- **Playlists (Pro)** – Standard, Learning, and Grid layouts
- **Integrations** – Mux, BunnyCDN, Google Analytics, Mailchimp, Webhooks
- **Settings** – Global configuration, storage, performance, analytics
- **Troubleshooting** – FAQ and support resources

## Local Development

```bash
# Install dependencies
npm install

# Start dev server
npm run docs:dev
```

The site will be available at `http://localhost:5173/`.

## Build

```bash
# Production build
npm run docs:build

# Preview the production build
npm run docs:preview

# Build for GitHub Pages (sets base path automatically)
npm run docs:build:gh-pages
```

## Project Structure

```
.
├── .vitepress/          # VitePress config, theme, and components
├── guide/               # Documentation content (Markdown)
│   ├── block-editor/    # Block editor panels reference
│   ├── customize/       # Player customization docs
│   ├── display-embed/   # Embedding methods (shortcode, block, URL)
│   ├── engagement/      # Email capture, CTAs, overlays
│   ├── integrations/    # Third-party integrations
│   ├── playlists/       # Playlist creation and management
│   ├── settings/        # Global settings reference
│   ├── troubleshooting/ # FAQ and common issues
│   └── videos-and-media/# Media management docs
├── public/              # Static assets (images, brand files)
└── index.md             # Homepage
```

## Contributing

1. Create a new branch from `master`.
2. Make your changes in the `guide/` directory.
3. Run `npm run docs:dev` to preview locally.
4. Open a pull request.

## Tech Stack

- [VitePress](https://vitepress.dev/) (v1.6+)
- [Vue 3](https://vuejs.org/)
- Markdown with VitePress extensions (containers, frontmatter, etc.)
