#!/usr/bin/env node
/**
 * Generates branded 1200x630 featured/OG images for every doc page, so a link
 * shared on Slack / X / Facebook / LinkedIn previews with that page's own title
 * instead of one generic hero image for the whole site.
 *
 * Sources: `index.md` (home) and `guide/**\/*.md` (excluding `guide/public/`).
 * Output:  public/images/featured/<flat-slug>.png
 *          (root `public/` is the VitePress publicDir, so these are served at
 *          `<base>images/featured/<flat-slug>.png`.)
 *
 * NAMING RULE — the card is named after the flat slug the page is SERVED at, so
 * `.vitepress/config.mts` can find it from `pageData.relativePath` alone (which
 * VitePress has already rewritten by the time transformHead runs).
 *
 * That slug cannot be derived from the file path here: this repo's `rewrites` is
 * a hand-written map with seven deliberate disambiguations that no convention
 * reproduces (`guide/block-editor/branding.md` -> `branding-appearance`,
 * `guide/index.md` -> `introduction`, `guide/settings/integrations.md` ->
 * `email-integrations`, and so on — see CLAUDE.md). So this script PARSES that
 * map straight out of config.mts rather than duplicating it, and fails loudly if
 * a page is missing from it.
 *
 * A `default.png` is also emitted as the fallback for any page with no card.
 *
 * Idempotent: skips any output file that already exists unless --force is
 * passed. Run via `npm run featured:generate` (or `featured:regenerate`).
 */

import { readdirSync, statSync, readFileSync, existsSync, mkdirSync } from 'node:fs'
import { join, relative, dirname, sep } from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const __dirname = dirname(fileURLToPath(import.meta.url))
const REPO_ROOT = join(__dirname, '..')
const GUIDE_DIR = join(REPO_ROOT, 'guide')
const GUIDE_PUBLIC_DIR = join(GUIDE_DIR, 'public')
const OUTPUT_DIR = join(REPO_ROOT, 'public', 'images', 'featured')
const CONFIG_PATH = join(REPO_ROOT, '.vitepress', 'config.mts')
const HOME_PATH = join(REPO_ROOT, 'index.md')
const LOGO_PATH = join(REPO_ROOT, 'public', 'brand', 'fluentplayer_secondary_logo.png')

const FORCE = process.argv.includes('--force')

// FluentPlayer's brand red (#DD1F13, from theme/styles/brand.css) reads as alarm
// across a full 1200x630 field, so the card is a dark cinematic ground with the
// red kept as the accent — which is also what makes the logo's red play mark pop.
const BG_TOP = '#2A1416'
const BG_BOTTOM = '#0A0A0C'
const BRAND_RED = '#DD1F13'
const EYEBROW_COLOR = '#FF9A93'
const FONT_STACK = 'Helvetica, Arial, sans-serif'

const CANVAS_W = 1200
const CANVAS_H = 630
const MARGIN_X = 80
const TEXT_MAX_W = 980

// Logo is 553x116; 340px wide keeps the lockup readable without dominating.
const LOGO_W = 340
const LOGO_X = MARGIN_X
const LOGO_Y = 78

// Kept in step with SITE_URL in config.mts, which defaults to the same origin — the
// DOCS host, not the marketing site at fluentplayer.com.
const FOOTER_TEXT = (process.env.VITEPRESS_SITE_URL ?? 'https://docs.fluentplayer.com')
  .replace(/^https?:\/\//, '')
  .replace(/\/+$/, '')

// -------------------------------------------------------------------------
// Rewrites map — parsed from config.mts, never duplicated
// -------------------------------------------------------------------------

function loadRewrites() {
  const src = readFileSync(CONFIG_PATH, 'utf8')
  const block = src.match(/\n  rewrites:\s*\{([\s\S]*?)\n  \},/)
  if (!block) {
    throw new Error(
      `Could not find the \`rewrites\` block in ${CONFIG_PATH}. If its formatting changed, ` +
        `update loadRewrites() — the card names come from that map.`
    )
  }

  const map = new Map()
  for (const line of block[1].split('\n')) {
    const entry = line.match(/^\s*'([^']+)':\s*'([^']+)',?\s*$/)
    if (entry) map.set(entry[1], entry[2])
  }

  if (map.size === 0) {
    throw new Error(`Parsed the \`rewrites\` block in ${CONFIG_PATH} but found no entries.`)
  }
  return map
}

// -------------------------------------------------------------------------
// File discovery
// -------------------------------------------------------------------------

function walk(dir, files = []) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry)
    const stat = statSync(full)
    if (stat.isDirectory()) {
      if (full === GUIDE_PUBLIC_DIR) continue
      walk(full, files)
    } else if (stat.isFile() && entry.endsWith('.md')) {
      files.push(full)
    }
  }
  return files
}

// -------------------------------------------------------------------------
// Titles + labels
// -------------------------------------------------------------------------

function titleCaseSlug(slug) {
  return slug
    .split('-')
    .map((word) => (word ? word.charAt(0).toUpperCase() + word.slice(1) : word))
    .join(' ')
}

function stripMarkdown(text) {
  return text
    .replace(/\*\*(.*?)\*\*/g, '$1')
    .replace(/\*(.*?)\*/g, '$1')
    .replace(/`([^`]*)`/g, '$1')
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
    .trim()
}

/** First `# H1` in the file, else the home hero, else the slug. */
function extractTitle(mdPath, fallbackSlug) {
  const content = readFileSync(mdPath, 'utf8')

  for (const line of content.split(/\r?\n/)) {
    const match = line.trim().match(/^#\s+(.+)$/)
    if (match) return stripMarkdown(match[1])
  }

  // The home page uses `layout: home` with no H1 — fall back to its hero.
  const heroName = content.match(/^\s{2}name:\s*["']?(.+?)["']?\s*$/m)
  const heroText = content.match(/^\s{2}text:\s*["']?(.+?)["']?\s*$/m)
  if (heroName) return heroText ? `${heroName[1]} ${heroText[1]}` : heroName[1]

  return titleCaseSlug(fallbackSlug)
}

function escapeXml(text) {
  return text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
}

// -------------------------------------------------------------------------
// Title layout
// -------------------------------------------------------------------------
//
// librsvg returns no text metrics, so line breaking approximates: bold Helvetica
// averages ~0.55em per character over mixed-case English. Walk the sizes from
// largest down and take the first that fits, so short titles stay big and long
// ones step down instead of running off the canvas.

const CHAR_WIDTH_RATIO = 0.55
const FONT_SIZE_TIERS = [66, 58, 50, 44, 38]
const MAX_LINES = 3

function wrapAt(title, fontSize) {
  const budget = Math.floor(TEXT_MAX_W / (fontSize * CHAR_WIDTH_RATIO))
  const lines = []
  let current = ''

  for (const word of title.split(/\s+/)) {
    const attempt = current ? `${current} ${word}` : word
    if (attempt.length <= budget || !current) {
      current = attempt
    } else {
      lines.push(current)
      current = word
    }
  }
  if (current) lines.push(current)

  return { lines, budget }
}

function layoutTitle(title) {
  for (const fontSize of FONT_SIZE_TIERS) {
    const { lines } = wrapAt(title, fontSize)
    if (lines.length <= MAX_LINES) return { fontSize, lines }
  }

  const fontSize = FONT_SIZE_TIERS[FONT_SIZE_TIERS.length - 1]
  const { lines, budget } = wrapAt(title, fontSize)
  lines.length = MAX_LINES
  lines[MAX_LINES - 1] = `${lines[MAX_LINES - 1].slice(0, budget - 1).replace(/\s+$/, '')}…`
  return { fontSize, lines }
}

// -------------------------------------------------------------------------
// SVG template
// -------------------------------------------------------------------------

function buildSvg({ title, eyebrow }) {
  const { fontSize, lines } = layoutTitle(title)
  const lineHeight = Math.round(fontSize * 1.2)

  // Bottom-anchored above the footer, so one-, two- and three-line cards share
  // the same optical baseline.
  const blockBottom = 500
  const firstBaseline = blockBottom - (lines.length - 1) * lineHeight

  const tspans = lines
    .map(
      (line, i) =>
        `<tspan x="${MARGIN_X}" y="${firstBaseline + i * lineHeight}">${escapeXml(line)}</tspan>`
    )
    .join('')

  return `<svg width="${CANVAS_W}" height="${CANVAS_H}" viewBox="0 0 ${CANVAS_W} ${CANVAS_H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${BG_TOP}"/>
      <stop offset="100%" stop-color="${BG_BOTTOM}"/>
    </linearGradient>
    <radialGradient id="glow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="${BRAND_RED}" stop-opacity="0.42"/>
      <stop offset="100%" stop-color="${BRAND_RED}" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="${CANVAS_W}" height="${CANVAS_H}" fill="url(#bg)"/>
  <circle cx="1090" cy="530" r="360" fill="url(#glow)"/>
  <circle cx="1130" cy="570" r="250" fill="#FFFFFF" opacity="0.03"/>
  <rect x="${MARGIN_X - 24}" y="0" width="4" height="${CANVAS_H}" fill="${BRAND_RED}" opacity="0.55"/>
  <text x="${MARGIN_X}" y="268" font-family="${FONT_STACK}" font-size="22" font-weight="700" letter-spacing="4" fill="${EYEBROW_COLOR}">${escapeXml(
    eyebrow.toUpperCase()
  )}</text>
  <text font-family="${FONT_STACK}" font-weight="700" font-size="${fontSize}" fill="#FFFFFF">${tspans}</text>
  <text x="${MARGIN_X}" y="574" font-family="${FONT_STACK}" font-size="18" font-weight="400" letter-spacing="1" fill="#FFFFFF" opacity="0.55">${FOOTER_TEXT}</text>
</svg>`
}

async function renderCard({ title, eyebrow, outPath, logo }) {
  await sharp(Buffer.from(buildSvg({ title, eyebrow })))
    .composite([{ input: logo, left: LOGO_X, top: LOGO_Y }])
    // Flat gradient + text compresses well at max effort, and this is lossless.
    .png({ compressionLevel: 9, effort: 10 })
    .toFile(outPath)
}

// -------------------------------------------------------------------------
// Main
// -------------------------------------------------------------------------

async function main() {
  if (!existsSync(LOGO_PATH)) {
    throw new Error(`Logo source not found at ${LOGO_PATH}`)
  }
  if (!existsSync(OUTPUT_DIR)) {
    mkdirSync(OUTPUT_DIR, { recursive: true })
  }

  const rewrites = loadRewrites()

  // Resized once and reused — re-decoding the same PNG 80+ times is pure waste.
  const logo = await sharp(LOGO_PATH).resize({ width: LOGO_W }).png().toBuffer()

  const jobs = [
    {
      outPath: join(OUTPUT_DIR, 'default.png'),
      title: 'FluentPlayer Documentation',
      eyebrow: 'Documentation',
    },
  ]

  if (existsSync(HOME_PATH)) {
    jobs.push({
      outPath: join(OUTPUT_DIR, 'index.png'),
      title: extractTitle(HOME_PATH, 'fluentplayer'),
      eyebrow: 'Documentation',
    })
  }

  const unmapped = []

  for (const filePath of walk(GUIDE_DIR).sort()) {
    const relPath = relative(REPO_ROOT, filePath).split(sep).join('/')
    const target = rewrites.get(relPath)

    if (!target) {
      unmapped.push(relPath)
      continue
    }

    const slug = target.replace(/\.md$/, '')
    const parts = relPath.split('/') // guide/[<section>/]<file>.md
    const section = parts.length > 2 ? titleCaseSlug(parts[1]) : 'Documentation'

    jobs.push({
      outPath: join(OUTPUT_DIR, `${slug}.png`),
      title: extractTitle(filePath, slug),
      eyebrow: section,
    })
  }

  if (unmapped.length) {
    throw new Error(
      `${unmapped.length} page(s) have no \`rewrites\` entry in config.mts, so their served ` +
        `URL — and therefore their card name — is unknown:\n  ${unmapped.join('\n  ')}`
    )
  }

  let generated = 0
  let skipped = 0

  for (const job of jobs) {
    if (existsSync(job.outPath) && !FORCE) {
      skipped++
      continue
    }
    await renderCard({ ...job, logo })
    generated++
  }

  console.log(`Featured images: generated ${generated}, skipped ${skipped}.`)

  // A renamed or deleted page leaves its card behind, and nothing else would
  // ever notice. Report them rather than deleting — the call is the author's.
  const expected = new Set(jobs.map((job) => job.outPath.split(sep).pop()))
  const orphans = readdirSync(OUTPUT_DIR).filter(
    (name) => name.endsWith('.png') && !expected.has(name)
  )
  if (orphans.length) {
    console.log(
      `\n${orphans.length} card(s) no longer match a page — delete them if the page is gone:`
    )
    orphans.forEach((name) => console.log(`  public/images/featured/${name}`))
  }
}

main().catch((err) => {
  console.error(err.message ?? err)
  process.exitCode = 1
})
