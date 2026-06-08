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
      { text: 'What is FluentPlayer?', link: '/guide/' },
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
      { text: 'Media Tags (Pro)', link: '/guide/videos-and-media/media-tags' },
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
      { text: 'Creating Custom Presets (Pro)', link: '/guide/customize/creating-custom-presets' },
      { text: 'Player Behaviors', link: '/guide/customize/behaviors' },
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
      { text: 'Tag-Based Playlists (Pro)', link: '/guide/playlists/tag-based-playlists' },
      { text: 'Dedicated Playlist URL (Pro)', link: '/guide/playlists/dedicated-playlist-url' },
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
      { text: 'Licensing (Pro)', link: '/guide/settings/licensing' },
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
      { text: 'Mailchimp (Pro)', link: '/guide/integrations/mailchimp-integration' },
      { text: 'Webhook (Pro)', link: '/guide/integrations/webhook-integration' },
      { text: 'FluentCommunity (Pro)', link: '/guide/integrations/fluent-community' },
      { text: 'Smartcodes (FluentCRM)', link: '/guide/integrations/smartcodes-personalization' },
    ],
  },
  {
    text: 'Developer',
    items: [
      { text: 'Hooks & Filters Reference', link: '/guide/developer/hooks-reference' },
    ],
  },
  {
    text: 'Troubleshooting & Support',
    items: [
      { text: 'Common Issues & Fixes', link: '/guide/troubleshooting/' },
      { text: 'Frequently Asked Questions', link: '/guide/troubleshooting/faq' },
    ],
  },
]

export default defineConfig({
  /** Must match deploy URL (e.g. `/repo-name/` on GitHub Pages project sites). See `resolveBase()`. */
  base,
  title: 'FluentPlayer',
  lang: 'en-US',
  lastUpdated: false,
  /**
   * Clean URLs hide `.html` from links.
   * Ensure your host rewrites route requests to the generated HTML files.
   */
  cleanUrls: true,

  /**
   * Files that live in the repo but must not become site pages.
   * - `README.md` is for GitHub only (avoids an extra `/readme` route).
   * - `documentation-gaps.md` is an internal audit/planning artifact (it also
   *   contains literal `{{ }}` smartcode examples that would break Vue rendering).
   */
  srcExclude: ['README.md', 'documentation-gaps.md'],

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
    /** Logo only in the navbar (no text beside it). `config.title` still sets the HTML `<title>`. */
    siteTitle: false,
    nav: [
      { text: 'Home', link: '/guide/' },
      { text: 'Website', link: 'https://fluentplayer.com/' },
      { text: 'Changelog', link: '/guide/changelog' },
      { text: 'Support', link: '/guide/support' },
    ],

    notFound: {
      title: 'Page not found',
      quote: "This page doesn't exist. Use the menu or go back to the FluentPlayer docs.",
      linkText: 'Take me home',
    },

    sidebar: {
      '/': guideGroups,
      '/guide/': guideGroups,
    },

    socialLinks: [
      // Add your repo or social links when ready
      // { icon: 'github', link: 'https://github.com/...' },
    ],

    search: {
      provider: 'local',
    },

    footer: {
      copyright: 'Copyright © FluentPlayer',
    },

    // editLink: { pattern: 'https://github.com/.../edit/main/:path', text: 'Edit this page on GitHub' },
  },

  markdown: {
    lineNumbers: true,
  },
})
