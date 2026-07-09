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

// Shared sidebar groups — bound to the '/' sidebar key (all pages live at the site root).
const guideGroups = [
  {
    text: 'Get Started',
    collapsed: true,
    items: [
      { text: 'What is FluentPlayer?', link: '/introduction' },
      { text: 'Installation', link: '/installation' },
      { text: 'Quick Start', link: '/quick-start' },
    ],
  },
  {
    text: 'Managing Your Media',
    collapsed: true,
    items: [
      { text: 'Overview', link: '/videos-and-media' },
      { text: 'Adding and Editing Videos', link: '/adding-videos' },
      { text: 'Video Sources', link: '/video-sources' },
      { text: 'Subtitles & Captions', link: '/subtitles' },
      { text: 'Multiple Audio Languages', link: '/multiple-languages' },
      { text: 'Public vs. Private Videos', link: '/public-vs-private' },
      { text: 'Media Tags (Pro)', link: '/media-tags' },
    ],
  },
  {
    text: 'Embedding Your Player',
    collapsed: true,
    items: [
      { text: 'Embedding Overview', link: '/display-embed' },
      { text: 'Shortcode Embed', link: '/shortcode' },
      { text: 'Gutenberg Block', link: '/block' },
      { text: 'Dedicated Player URL', link: '/dedicated-player-url' },
      { text: 'Timestamp Links', link: '/timestamp-links' },
    ],
  },
  {
    text: 'Player Editor',
    collapsed: true,
    items: [
      { text: 'Editor Overview', link: '/block-editor' },
      { text: 'Media vs Block Tabs', link: '/media-tab' },
      { text: 'Interactive Layers', link: '/interactive-layers' },
      {
        text: 'Core Settings',
        collapsed: true,
        items: [
          { text: 'General Settings', link: '/general-settings' },
          { text: 'Preset', link: '/preset' },
          { text: 'Branding & Appearance', link: '/branding-appearance' },
        ],
      },
      {
        text: 'Content Structure',
        collapsed: true,
        items: [
          { text: 'Chapters', link: '/chapters' },
          { text: 'Timestamp Links', link: '/block-timestamp-links' },
          { text: 'Subtitles', link: '/block-subtitles' },
          { text: 'Multiple Languages', link: '/multi-language' },
          { text: 'Timed Content Area (Pro)', link: '/timed-content' },
          { text: 'Text & Button Overlays (Pro)', link: '/overlays' },
          { text: 'Advanced', link: '/advanced' },
        ],
      },
    ],
  },
  {
    text: 'Engagement & Conversion',
    collapsed: true,
    items: [
      { text: 'Overview', link: '/engagement' },
      { text: 'Email Capture Overlay', link: '/email-capture' },
      { text: 'CTA and Action Bar', link: '/cta-and-action-bar' },
      { text: 'Email Providers', link: '/email-providers' },
    ],
  },
  {
    text: 'Player Customization',
    collapsed: true,
    items: [
      { text: 'Overview', link: '/customize' },
      { text: 'Presets', link: '/presets' },
      { text: 'Creating Custom Presets (Pro)', link: '/creating-custom-presets' },
      { text: 'Player Behaviors', link: '/behaviors' },
    ],
  },
  {
    text: 'Playlists (Pro)',
    collapsed: true,
    items: [
      { text: 'Overview', link: '/playlists' },
      { text: 'Creating a Playlist', link: '/creating-playlists' },
      { text: 'Playlist Layouts', link: '/playlist-layouts' },
      { text: 'Appearance & Behavior', link: '/playlist-settings' },
      { text: 'Embed a Playlist', link: '/embed-playlist' },
      { text: 'Tag-Based Playlists (Pro)', link: '/tag-based-playlists' },
      { text: 'Dedicated Playlist URL (Pro)', link: '/dedicated-playlist-url' },
    ],
  },
  {
    text: 'Global Settings',
    collapsed: true,
    items: [
      { text: 'Settings Overview', link: '/settings' },
      { text: 'General', link: '/general' },
      { text: 'Performance', link: '/performance' },
      { text: 'Branding', link: '/branding' },
      { text: 'Email Integrations', link: '/email-integrations' },
      { text: 'Storage', link: '/storage' },
      { text: 'YouTube', link: '/youtube' },
      { text: 'Analytics', link: '/analytics' },
      { text: 'Export Data', link: '/export' },
      { text: 'Licensing (Pro)', link: '/licensing' },
    ],
  },
  {
    text: 'Integrations',
    collapsed: true,
    items: [
      { text: 'Integrations Overview', link: '/integrations' },
      { text: 'Mux (Pro)', link: '/mux' },
      { text: 'Gumlet (Pro)', link: '/gumlet' },
      { text: 'Bunny Stream (Pro)', link: '/bunnycdn-stream' },
      { text: 'Bunny Storage (Pro)', link: '/bunnycdn-storage' },
      { text: 'Cloudflare R2 & Stream (Pro)', link: '/cloudflare' },
      { text: 'Built-in Analytics (Pro)', link: '/built-in-analytics' },
      { text: 'Google Analytics (Pro)', link: '/google-analytics' },
      { text: 'Mailchimp (Pro)', link: '/mailchimp-integration' },
      { text: 'Webhook (Pro)', link: '/webhook-integration' },
      { text: 'FluentCommunity', link: '/fluent-community' },
      { text: 'Smartcodes (FluentCRM)', link: '/smartcodes-personalization' },
    ],
  },
  {
    text: 'Migration',
    collapsed: true,
    items: [
      { text: 'Migrate from Presto Player (Pro)', link: '/presto-player-migration' },
    ],
  },
  {
    text: 'Developer',
    collapsed: true,
    items: [
      { text: 'Hooks & Filters Reference', link: '/hooks-reference' },
    ],
  },
  {
    text: 'Troubleshooting & Support',
    collapsed: true,
    items: [
      { text: 'Common Issues & Fixes', link: '/troubleshooting' },
      { text: 'Frequently Asked Questions', link: '/faq' },
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
   * Flat URL structure: source files keep their `guide/<section>/` folders on disk,
   * but every page is served from the site root (e.g. `/general-settings`).
   * Section landing pages map to their section name (e.g. `/block-editor`).
   * A few slugs are disambiguated to avoid collisions (e.g. block-editor branding →
   * `/branding-appearance`, settings integrations → `/email-integrations`).
   * Image assets under `guide/public/...` are unaffected (rewrites only remap pages).
   */
  rewrites: {
    'guide/block-editor/advanced.md': 'advanced.md',
    'guide/block-editor/branding.md': 'branding-appearance.md',
    'guide/block-editor/chapters.md': 'chapters.md',
    'guide/block-editor/general-settings.md': 'general-settings.md',
    'guide/block-editor/index.md': 'block-editor.md',
    'guide/block-editor/interactive-layers.md': 'interactive-layers.md',
    'guide/block-editor/media-tab.md': 'media-tab.md',
    'guide/block-editor/multi-language.md': 'multi-language.md',
    'guide/block-editor/overlays.md': 'overlays.md',
    'guide/block-editor/preset.md': 'preset.md',
    'guide/block-editor/subtitles.md': 'block-subtitles.md',
    'guide/block-editor/timed-content.md': 'timed-content.md',
    'guide/block-editor/timestamp-links.md': 'block-timestamp-links.md',
    'guide/changelog.md': 'changelog.md',
    'guide/customize/behaviors.md': 'behaviors.md',
    'guide/customize/creating-custom-presets.md': 'creating-custom-presets.md',
    'guide/customize/index.md': 'customize.md',
    'guide/customize/presets.md': 'presets.md',
    'guide/developer/hooks-reference.md': 'hooks-reference.md',
    'guide/display-embed/block.md': 'block.md',
    'guide/display-embed/dedicated-player-url.md': 'dedicated-player-url.md',
    'guide/display-embed/index.md': 'display-embed.md',
    'guide/display-embed/shortcode.md': 'shortcode.md',
    'guide/display-embed/timestamp-links.md': 'timestamp-links.md',
    'guide/engagement/cta-and-action-bar.md': 'cta-and-action-bar.md',
    'guide/engagement/email-capture.md': 'email-capture.md',
    'guide/engagement/email-providers.md': 'email-providers.md',
    'guide/engagement/index.md': 'engagement.md',
    'guide/index.md': 'introduction.md',
    'guide/installation.md': 'installation.md',
    'guide/integrations/analytics.md': 'built-in-analytics.md',
    'guide/integrations/bunnycdn-storage.md': 'bunnycdn-storage.md',
    'guide/integrations/bunnycdn-stream.md': 'bunnycdn-stream.md',
    'guide/integrations/cloudflare.md': 'cloudflare.md',
    'guide/integrations/fluent-community.md': 'fluent-community.md',
    'guide/integrations/google-analytics.md': 'google-analytics.md',
    'guide/integrations/index.md': 'integrations.md',
    'guide/integrations/mailchimp-integration.md': 'mailchimp-integration.md',
    'guide/integrations/gumlet.md': 'gumlet.md',
    'guide/integrations/mux.md': 'mux.md',
    'guide/integrations/smartcodes-personalization.md': 'smartcodes-personalization.md',
    'guide/integrations/webhook-integration.md': 'webhook-integration.md',
    'guide/migration/presto-player.md': 'presto-player-migration.md',
    'guide/playlists/creating-playlists.md': 'creating-playlists.md',
    'guide/playlists/dedicated-playlist-url.md': 'dedicated-playlist-url.md',
    'guide/playlists/embed-playlist.md': 'embed-playlist.md',
    'guide/playlists/index.md': 'playlists.md',
    'guide/playlists/playlist-layouts.md': 'playlist-layouts.md',
    'guide/playlists/playlist-settings.md': 'playlist-settings.md',
    'guide/playlists/tag-based-playlists.md': 'tag-based-playlists.md',
    'guide/quick-start.md': 'quick-start.md',
    'guide/settings/analytics.md': 'analytics.md',
    'guide/settings/branding.md': 'branding.md',
    'guide/settings/export.md': 'export.md',
    'guide/settings/general.md': 'general.md',
    'guide/settings/index.md': 'settings.md',
    'guide/settings/integrations.md': 'email-integrations.md',
    'guide/settings/licensing.md': 'licensing.md',
    'guide/settings/performance.md': 'performance.md',
    'guide/settings/storage.md': 'storage.md',
    'guide/settings/youtube.md': 'youtube.md',
    'guide/support.md': 'support.md',
    'guide/troubleshooting/faq.md': 'faq.md',
    'guide/troubleshooting/index.md': 'troubleshooting.md',
    'guide/videos-and-media/adding-videos.md': 'adding-videos.md',
    'guide/videos-and-media/index.md': 'videos-and-media.md',
    'guide/videos-and-media/media-tags.md': 'media-tags.md',
    'guide/videos-and-media/multiple-languages.md': 'multiple-languages.md',
    'guide/videos-and-media/public-vs-private.md': 'public-vs-private.md',
    'guide/videos-and-media/subtitles.md': 'subtitles.md',
    'guide/videos-and-media/video-sources.md': 'video-sources.md',
  },

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
      { text: 'Home', link: '/introduction' },
      { text: 'Website', link: 'https://fluentplayer.com/' },
      { text: 'Changelog', link: '/changelog' },
      { text: 'Support', link: '/support' },
    ],

    notFound: {
      title: 'Page not found',
      quote: "This page doesn't exist. Use the menu or go back to the FluentPlayer docs.",
      linkText: 'Take me home',
    },

    sidebar: {
      '/': guideGroups,
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
