/// <reference types="node" />
import { defineConfig } from 'vitepress'

/**
 * Asset base path. Default is **`/`** so local dev and preview use:
 * `http://localhost:5173/` and `http://localhost:4173/`.
 *
 * For GitHub Pages **project** URLs (`https://user.github.io/repo-name/`), build with
 * `npm run docs:build:gh-pages` or set `VITEPRESS_BASE=/repo-name/`. CI sets this automatically
 * when `GITHUB_ACTIONS` and `GITHUB_REPOSITORY` are present.
 */
function resolveBase(): string {
  const fromEnv = process.env.VITEPRESS_BASE
  if (fromEnv !== undefined && fromEnv !== '') {
    return fromEnv.endsWith('/') ? fromEnv : `${fromEnv}/`
  }

  const ghRepo = process.env.GITHUB_REPOSITORY?.split('/')[1]
  if (ghRepo && process.env.GITHUB_ACTIONS) {
    return `/${ghRepo}/`
  }

  return '/'
}

const base = resolveBase()

// Shared sidebar groups — used in both '/' and '/guide/' keys so they stay in sync.
const guideGroups = [
  {
    text: 'Get Started',
    items: [
      { text: 'What is Fluent Player?', link: '/guide/' },
      { text: 'Installation', link: '/guide/installation' },
      { text: 'Quick Start', link: '/guide/quick-start' },
    ],
  },
  {
    text: 'Managing Your Media',
    items: [
      { text: 'Overview', link: '/guide/videos-and-media/' },
      { text: 'Adding and Editing Videos', link: '/guide/videos-and-media/adding-videos' },
      { text: 'Video Sources', link: '/guide/videos-and-media/video-sources' },
      { text: 'Subtitles & Captions', link: '/guide/videos-and-media/subtitles' },
      { text: 'Multiple Audio Languages', link: '/guide/videos-and-media/multiple-languages' },
      { text: 'Public vs. Private Videos', link: '/guide/videos-and-media/public-vs-private' },
    ],
  },
  {
    text: 'Embedding Your Player',
    items: [
      { text: 'Embedding Overview', link: '/guide/display-embed/' },
      { text: 'Shortcode Embed', link: '/guide/display-embed/shortcode' },
      { text: 'Gutenberg Block', link: '/guide/display-embed/block' },
      { text: 'Dedicated Player URL', link: '/guide/display-embed/dedicated-player-url' },
      { text: 'Timestamp Links', link: '/guide/display-embed/timestamp-links' },
    ],
  },
  {
    text: 'Player Editor',
    items: [
      { text: 'Editor Overview', link: '/guide/block-editor/' },
      { text: 'Media vs Block Tabs', link: '/guide/block-editor/media-tab' },
      {
        text: 'Core Settings',
        collapsed: false,
        items: [
          { text: 'General Settings', link: '/guide/block-editor/general-settings' },
          { text: 'Preset', link: '/guide/block-editor/preset' },
          { text: 'Branding & Appearance', link: '/guide/block-editor/branding' },
        ],
      },
      {
        text: 'Content Structure',
        collapsed: false,
        items: [
          { text: 'Chapters', link: '/guide/block-editor/chapters' },
          { text: 'Timestamp Links', link: '/guide/block-editor/timestamp-links' },
          { text: 'Subtitles', link: '/guide/block-editor/subtitles' },
          { text: 'Multiple Languages', link: '/guide/block-editor/multi-language' },
          { text: 'Timed Content Area (Pro)', link: '/guide/block-editor/timed-content' },
        ],
      },
      {
        text: 'Interactive Elements',
        collapsed: false,
        items: [
          { text: 'Text & Button Overlays', link: '/guide/block-editor/overlays' },
          { text: 'Interactive Layers', link: '/guide/block-editor/interactive-layers' },
          { text: 'Advanced', link: '/guide/block-editor/advanced' },
        ],
      },
    ],
  },
  {
    text: 'Engagement & Conversion',
    items: [
      { text: 'Overview', link: '/guide/engagement/' },
      { text: 'Email Capture Overlay', link: '/guide/engagement/email-capture' },
      { text: 'CTA and Action Bar', link: '/guide/engagement/cta-and-action-bar' },
      { text: 'Email Providers', link: '/guide/engagement/email-providers' },
    ],
  },
  {
    text: 'Player Customization',
    items: [
      { text: 'Overview', link: '/guide/customize/' },
      { text: 'Presets', link: '/guide/customize/presets' },
      { text: 'Skins and Controls', link: '/guide/customize/skins-and-controls' },
      { text: 'Player Behaviors', link: '/guide/customize/behaviors' },
      { text: 'Captions and Branding', link: '/guide/customize/captions-and-branding' },
    ],
  },
  {
    text: 'Playlists (Pro)',
    items: [
      { text: 'Overview', link: '/guide/playlists/' },
      { text: 'Creating a Playlist', link: '/guide/playlists/creating-playlists' },
      { text: 'Playlist Layouts', link: '/guide/playlists/playlist-layouts' },
      { text: 'Appearance & Behavior', link: '/guide/playlists/playlist-settings' },
      { text: 'Embed a Playlist', link: '/guide/playlists/embed-playlist' },
    ],
  },
  {
    text: 'Global Settings',
    items: [
      { text: 'Settings Overview', link: '/guide/settings/' },
      { text: 'General', link: '/guide/settings/general' },
      { text: 'Performance', link: '/guide/settings/performance' },
      { text: 'Branding', link: '/guide/settings/branding' },
      { text: 'Email Integrations', link: '/guide/settings/integrations' },
      { text: 'Storage', link: '/guide/settings/storage' },
      { text: 'YouTube', link: '/guide/settings/youtube' },
      { text: 'Analytics', link: '/guide/settings/analytics' },
      { text: 'Export Data', link: '/guide/settings/export' },
    ],
  },
  {
    text: 'Integrations',
    items: [
      { text: 'Integrations Overview', link: '/guide/integrations/' },
      { text: 'Mux (Pro)', link: '/guide/integrations/mux' },
      { text: 'Bunny Stream (Pro)', link: '/guide/integrations/bunnycdn-stream' },
      { text: 'Bunny Storage (Pro)', link: '/guide/integrations/bunnycdn-storage' },
      { text: 'Built-in Analytics (Pro)', link: '/guide/integrations/analytics' },
      { text: 'Google Analytics', link: '/guide/integrations/google-analytics' },
      { text: 'FluentCommunity (Pro)', link: '/guide/integrations/fluent-community' },
      { text: 'Smartcodes (FluentCRM)', link: '/guide/integrations/smartcodes-personalization' },
    ],
  },
  {
    text: 'Troubleshooting & FAQ',
    items: [
      { text: 'Common Issues & Fixes', link: '/guide/troubleshooting/' },
      { text: 'Frequently Asked Questions', link: '/guide/troubleshooting/faq' },
    ],
  },
]

export default defineConfig({
  title: 'FluentPlayer',
  description: 'Documentation for the FluentPlayer WordPress plugin — video players, playlists, and streaming.',
  base,
  lang: 'en-US',
  lastUpdated: true,
  /**
   * `false` = `.html` URLs — works on GitHub Pages and simple static hosts (refresh / deep links OK).
   * Set `true` only if your host rewrites URLs (e.g. Netlify) — otherwise pages can 404 after deploy.
   */
  cleanUrls: false,

  /** Repo README is for GitHub only; excluding avoids an extra `/readme` route. */
  srcExclude: ['README.md'],

  head: [
    ['meta', { name: 'generator', content: 'FluentPlayer' }],
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        href: `${base}brand/fluentplayer_primary_icon.png`,
      },
    ],
  ],

  themeConfig: {
    logo: {
      light: '/brand/fluentplayer_primary_logo.png',
      dark: '/brand/fluentplayer_secondary_logo.png',
    },
    siteTitle: 'FluentPlayer',
    nav: [
      { text: 'Guide', link: '/guide/' },
      { text: 'Reference', link: '/reference/' },
    ],

    notFound: {
      title: 'Page not found',
      quote: "This page doesn't exist. Use the menu or go back to the Fluent Player docs.",
      linkText: 'Take me home',
    },

    sidebar: {
      '/': [
        ...guideGroups,
        {
          text: 'Reference',
          items: [
            { text: 'Reference Overview', link: '/reference/' },
            { text: 'Feature Catalog', link: '/reference/feature-catalog' },
            { text: 'Shortcodes Reference', link: '/reference/shortcodes' },
            { text: 'Settings Reference', link: '/reference/settings' },
            { text: 'Plugin Overview (Technical)', link: '/reference/plugin-overview' },
          ],
        },
      ],
      '/guide/': guideGroups,
      '/reference/': [
        {
          text: 'Reference',
          items: [
            { text: 'Reference Overview', link: '/reference/' },
            { text: 'Feature Catalog', link: '/reference/feature-catalog' },
            { text: 'Shortcodes Reference', link: '/reference/shortcodes' },
            { text: 'Settings Reference', link: '/reference/settings' },
            { text: 'Plugin Overview (Technical)', link: '/reference/plugin-overview' },
          ],
        },
      ],
    },

    socialLinks: [
      // Add your repo or social links when ready
      // { icon: 'github', link: 'https://github.com/...' },
    ],

    search: {
      provider: 'local',
    },

    footer: {
      message: 'FluentPlayer WordPress Plugin Documentation.',
      copyright: 'Copyright © FluentPlayer',
    },

    // editLink: { pattern: 'https://github.com/.../edit/main/:path', text: 'Edit this page on GitHub' },
  },

  markdown: {
    lineNumbers: true,
  },
})
