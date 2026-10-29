/// <reference types="node" />
import { defineConfig } from 'vitepress'
import { existsSync, readdirSync, statSync } from 'node:fs'
import { dirname, join, relative, sep } from 'node:path'
import { fileURLToPath } from 'node:url'

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

/**
 * Absolute site origin + base, used only for social/link-preview image URLs
 * (crawlers do not resolve root-relative paths). Override with `VITEPRESS_SITE_URL`.
 */
const SITE_URL = (() => {
  // The DOCS origin, not the marketing site. `https://fluentplayer.com` is a different
  // host that serves none of these pages or assets, so pointing og:url / og:image there
  // makes every scraper fetch a 404 and drop the preview entirely.
  const origin = (process.env.VITEPRESS_SITE_URL ?? 'https://docs.fluentplayer.com').replace(
    /\/+$/,
    ''
  )
  return `${origin}${base}`
})()

/**
 * Per-page link-preview cards.
 *
 * `scripts/generate-featured-images.mjs` renders a branded 1200x630 PNG carrying each
 * page's own title into `public/images/featured/<flat-slug>.png`, which the root
 * publicDir serves at `<base>images/featured/<flat-slug>.png`.
 *
 * The card is named after the flat slug the page is SERVED at — and by the time
 * `transformHead` runs, `pageData.relativePath` is already the rewritten flat path
 * (`adding-videos.md`, not `docs/videos-and-media/adding-videos.md`), so the lookup is
 * just the basename. The generator resolves the same slug by parsing the `rewrites` map
 * below, which is why the seven hand-picked slugs there need no second copy anywhere.
 *
 * Anything without a generated card falls back to `default.png`, which the generator
 * also emits — so a shared link is never left with no preview at all.
 */
const FEATURED_DIR = join(dirname(fileURLToPath(import.meta.url)), '..', 'public', 'images', 'featured')

function featuredImageFor(relativePath: string): string {
  const name = `${relativePath.replace(/\.md$/, '')}.png`
  const file = existsSync(join(FEATURED_DIR, name)) ? name : 'default.png'
  return `${SITE_URL}images/featured/${file}`
}

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
      { text: 'Elementor Widget', link: '/elementor' },
      { text: 'Divi 5 Module', link: '/divi' },
      { text: 'Lightbox Embed (Pro)', link: '/lightbox' },
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
          { text: 'Muted Preview', link: '/muted-preview' },
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
      { text: 'Branding', link: '/branding' },
      { text: 'Email Integrations', link: '/email-integrations' },
      { text: 'Storage', link: '/storage' },
      { text: 'YouTube', link: '/youtube' },
      { text: 'Analytics', link: '/analytics' },
      { text: 'Export Data', link: '/export' },
      { text: 'Authoring Capabilities', link: '/capabilities' },
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
      { text: 'Vimeo', link: '/vimeo' },
      { text: 'Bunny Stream (Pro)', link: '/bunnycdn-stream' },
      { text: 'Bunny Storage (Pro)', link: '/bunnycdn-storage' },
      { text: 'Cloudflare R2 & Stream (Pro)', link: '/cloudflare' },
      { text: 'Built-in Analytics (Pro)', link: '/built-in-analytics' },
      { text: 'Google Analytics (Pro)', link: '/google-analytics' },
      { text: 'Mailchimp (Pro)', link: '/mailchimp-integration' },
      { text: 'Webhook (Pro)', link: '/webhook-integration' },
      { text: 'FluentCommunity', link: '/fluent-community' },
      { text: 'FluentCRM', link: '/fluentcrm' },
      { text: 'Fluent Forms', link: '/fluent-forms' },
      { text: 'Smartcodes (FluentCRM)', link: '/smartcodes-personalization' },
      { text: 'LearnDash', link: '/learndash' },
    ],
  },
  {
    text: 'Migration',
    collapsed: true,
    items: [
      { text: 'Migrate from Presto Player', link: '/presto-player-migration' },
    ],
  },
  {
    text: 'Developer',
    collapsed: true,
    items: [
      { text: 'Hooks & Filters Reference', link: '/hooks-reference' },
      { text: 'Privacy-Enhanced Mode', link: '/privacy-enhanced-mode' },
      { text: 'Deferring Embeds', link: '/deferred-embeds' },
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

const config = defineConfig({
  /** Must match deploy URL (e.g. `/repo-name/` on GitHub Pages project sites). See `resolveBase()`. */
  base,
  title: 'FluentPlayer',
  /** Default meta description — also the fallback for link previews (og/twitter). */
  description:
    'Official documentation for FluentPlayer — the WordPress video and media player plugin by WPManageNinja.',
  lang: 'en-US',
  lastUpdated: false,
  /**
   * Clean URLs hide `.html` from links.
   * Ensure your host rewrites route requests to the generated HTML files.
   */
  cleanUrls: true,

  /**
   * Flat URL structure: source files keep their `docs/<section>/` folders on disk,
   * but every page is served from the site root (e.g. `/general-settings`).
   * The source folder was renamed from `guide/` to `docs/`; only the keys below changed,
   * every served slug (the values) is untouched, so no live URL moved.
   * Section landing pages map to their section name (e.g. `/block-editor`).
   * A few slugs are disambiguated to avoid collisions (e.g. block-editor branding →
   * `/branding-appearance`, settings integrations → `/email-integrations`).
   * Image assets under `docs/public/...` are unaffected (rewrites only remap pages).
   */
  rewrites: {
    'docs/block-editor/advanced.md': 'advanced.md',
    'docs/block-editor/branding.md': 'branding-appearance.md',
    'docs/block-editor/chapters.md': 'chapters.md',
    'docs/block-editor/general-settings.md': 'general-settings.md',
    'docs/block-editor/index.md': 'block-editor.md',
    'docs/block-editor/interactive-layers.md': 'interactive-layers.md',
    'docs/block-editor/media-tab.md': 'media-tab.md',
    'docs/block-editor/multi-language.md': 'multi-language.md',
    'docs/block-editor/overlays.md': 'overlays.md',
    'docs/block-editor/muted-preview.md': 'muted-preview.md',
    'docs/block-editor/preset.md': 'preset.md',
    'docs/block-editor/subtitles.md': 'block-subtitles.md',
    'docs/block-editor/timed-content.md': 'timed-content.md',
    'docs/block-editor/timestamp-links.md': 'block-timestamp-links.md',
    'docs/changelog.md': 'changelog.md',
    'docs/customize/behaviors.md': 'behaviors.md',
    'docs/customize/creating-custom-presets.md': 'creating-custom-presets.md',
    'docs/customize/index.md': 'customize.md',
    'docs/customize/presets.md': 'presets.md',
    'docs/developer/deferred-embeds.md': 'deferred-embeds.md',
    'docs/developer/privacy-enhanced-mode.md': 'privacy-enhanced-mode.md',
    'docs/developer/hooks-reference.md': 'hooks-reference.md',
    'docs/display-embed/block.md': 'block.md',
    'docs/display-embed/dedicated-player-url.md': 'dedicated-player-url.md',
    'docs/display-embed/divi.md': 'divi.md',
    'docs/display-embed/lightbox.md': 'lightbox.md',
    'docs/display-embed/elementor.md': 'elementor.md',
    'docs/display-embed/index.md': 'display-embed.md',
    'docs/display-embed/shortcode.md': 'shortcode.md',
    'docs/display-embed/timestamp-links.md': 'timestamp-links.md',
    'docs/engagement/cta-and-action-bar.md': 'cta-and-action-bar.md',
    'docs/engagement/email-capture.md': 'email-capture.md',
    'docs/engagement/email-providers.md': 'email-providers.md',
    'docs/engagement/index.md': 'engagement.md',
    'docs/index.md': 'introduction.md',
    'docs/installation.md': 'installation.md',
    'docs/integrations/analytics.md': 'built-in-analytics.md',
    'docs/integrations/bunnycdn-storage.md': 'bunnycdn-storage.md',
    'docs/integrations/bunnycdn-stream.md': 'bunnycdn-stream.md',
    'docs/integrations/cloudflare.md': 'cloudflare.md',
    'docs/integrations/fluent-community.md': 'fluent-community.md',
    'docs/integrations/fluent-forms.md': 'fluent-forms.md',
    'docs/integrations/fluentcrm.md': 'fluentcrm.md',
    'docs/integrations/learndash.md': 'learndash.md',
    'docs/integrations/google-analytics.md': 'google-analytics.md',
    'docs/integrations/index.md': 'integrations.md',
    'docs/integrations/mailchimp-integration.md': 'mailchimp-integration.md',
    'docs/integrations/gumlet.md': 'gumlet.md',
    'docs/integrations/mux.md': 'mux.md',
    'docs/integrations/smartcodes-personalization.md': 'smartcodes-personalization.md',
    'docs/integrations/vimeo.md': 'vimeo.md',
    'docs/integrations/webhook-integration.md': 'webhook-integration.md',
    'docs/migration/presto-player.md': 'presto-player-migration.md',
    'docs/playlists/creating-playlists.md': 'creating-playlists.md',
    'docs/playlists/dedicated-playlist-url.md': 'dedicated-playlist-url.md',
    'docs/playlists/embed-playlist.md': 'embed-playlist.md',
    'docs/playlists/index.md': 'playlists.md',
    'docs/playlists/playlist-layouts.md': 'playlist-layouts.md',
    'docs/playlists/playlist-settings.md': 'playlist-settings.md',
    'docs/playlists/tag-based-playlists.md': 'tag-based-playlists.md',
    'docs/quick-start.md': 'quick-start.md',
    'docs/settings/analytics.md': 'analytics.md',
    'docs/settings/branding.md': 'branding.md',
    'docs/settings/capabilities.md': 'capabilities.md',
    'docs/settings/export.md': 'export.md',
    'docs/settings/general.md': 'general.md',
    'docs/settings/index.md': 'settings.md',
    'docs/settings/integrations.md': 'email-integrations.md',
    'docs/settings/licensing.md': 'licensing.md',
    'docs/settings/storage.md': 'storage.md',
    'docs/settings/youtube.md': 'youtube.md',
    'docs/support.md': 'support.md',
    'docs/troubleshooting/faq.md': 'faq.md',
    'docs/troubleshooting/index.md': 'troubleshooting.md',
    'docs/videos-and-media/adding-videos.md': 'adding-videos.md',
    'docs/videos-and-media/index.md': 'videos-and-media.md',
    'docs/videos-and-media/media-tags.md': 'media-tags.md',
    'docs/videos-and-media/multiple-languages.md': 'multiple-languages.md',
    'docs/videos-and-media/public-vs-private.md': 'public-vs-private.md',
    'docs/videos-and-media/subtitles.md': 'subtitles.md',
    'docs/videos-and-media/video-sources.md': 'video-sources.md',
  },

  /**
   * Files that live in the repo but must not become site pages.
   * - `README.md` is for GitHub only (avoids an extra `/readme` route).
   * - `documentation-gaps.md` is an internal audit/planning artifact (it also
   *   contains literal `{{ }}` smartcode examples that would break Vue rendering).
   * - `CLAUDE.md` is repo guidance for Claude Code, not a doc page (avoids a `/CLAUDE` route).
   */
  srcExclude: ['README.md', 'documentation-gaps.md', 'CLAUDE.md'],

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
    /**
     * Link-preview (Open Graph / Twitter) tags that never vary per page.
     * The per-page `og:title` / `og:description` / `og:url` / `og:image` are added in
     * `transformHead` — `og:image` must NOT be repeated here, since scrapers take the
     * first one they find and a static tag would shadow every per-page card.
     */
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:site_name', content: 'FluentPlayer Documentation' }],
    ['meta', { property: 'og:image:width', content: '1200' }],
    ['meta', { property: 'og:image:height', content: '630' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
  ],

  /**
   * VitePress only emits `<meta name="description">` on its own; social scrapers prefer
   * the `og:` equivalents. Mirror the page's resolved title/description into them so a
   * shared link shows the real page name instead of a generic fallback.
   */
  transformHead({ pageData, title, description }) {
    const path = pageData.relativePath.replace(/(index)?\.md$/, '').replace(/\/$/, '')
    const image = featuredImageFor(pageData.relativePath)

    return [
      ['meta', { property: 'og:title', content: title }],
      ['meta', { property: 'og:description', content: description }],
      ['meta', { property: 'og:url', content: `${SITE_URL}${path}` }],
      ['meta', { property: 'og:image', content: image }],
      ['meta', { property: 'og:image:alt', content: title }],
      ['meta', { name: 'twitter:title', content: title }],
      ['meta', { name: 'twitter:description', content: description }],
      ['meta', { name: 'twitter:image', content: image }],
    ]
  },

  themeConfig: {
    logo: {
      light: '/brand/fluentplayer_primary_logo.png',
      dark: '/brand/fluentplayer_secondary_logo.png',
    },
    /** Logo only in the navbar (no text beside it). `config.title` still sets the HTML `<title>`. */
    siteTitle: false,
    nav: [
      { text: 'Home', link: '/introduction' },
      { text: 'Try It Free', link: 'https://try.wpmanageninja.com/?products=fluent-player' },
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

/**
 * URL guard. Every page is served at the flat slug its `rewrites` entry gives it. A page
 * under `docs/` with no entry would silently go live at `/docs/<section>/<file>` instead —
 * a wrong, indexable URL — and the build would not notice. So: fail the build (warn in dev)
 * when a doc has no entry, or an entry points at a file that no longer exists.
 */
function assertEveryDocIsRewritten(rewrites: Record<string, string>) {
  const root = join(dirname(fileURLToPath(import.meta.url)), '..')
  const docsDir = join(root, 'docs')
  const walk = (dir: string, out: string[] = []): string[] => {
    for (const entry of readdirSync(dir)) {
      const full = join(dir, entry)
      if (statSync(full).isDirectory()) {
        if (full !== join(docsDir, 'public')) walk(full, out)
      } else if (entry.endsWith('.md')) {
        out.push(relative(root, full).split(sep).join('/'))
      }
    }
    return out
  }

  const unmapped = walk(docsDir).filter((file) => !(file in rewrites))
  const stale = Object.keys(rewrites).filter((file) => !existsSync(join(root, file)))
  if (!unmapped.length && !stale.length) return

  const message = [
    unmapped.length &&
      `Docs with no \`rewrites\` entry in .vitepress/config.mts (they would be served at a /docs/... URL):\n  ${unmapped.join('\n  ')}`,
    stale.length && `\`rewrites\` entries whose file does not exist:\n  ${stale.join('\n  ')}`,
  ]
    .filter(Boolean)
    .join('\n')

  if (process.argv.includes('build')) throw new Error(message)
  console.warn(`\n[url-guard] ${message}\n`)
}

assertEveryDocIsRewritten(config.rewrites as Record<string, string>)

export default config
