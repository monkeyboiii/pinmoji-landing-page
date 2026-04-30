#!/usr/bin/env node
// Mirror DiscourseAssetKit emoji PNGs into public/emojis/<shortcode>.png so
// the SSR'd /s bounce page can serve a per-share OG image at a stable URL.
//
// Source filename pattern: emoji_<shortcode>[_t<n>].png  (DiscourseAssetKit)
// Destination filename:    <shortcode>[_t<n>].png        (matches the iOS
//                                                         shortcode passed in
//                                                         the &e= URL param)
//
// Run from the landing-page repo root: `npm run sync-emojis`
// The committed result is what Cloudflare Pages serves — Cloudflare's build
// only sees this repo, not the parent Pinmoji checkout.
//
// Override the source dir via PINMOJI_EMOJI_SRC if DiscourseAssetKit lives
// somewhere other than the default sibling-submodule location.

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, '..');
const defaultSrc = path.resolve(
  repoRoot,
  '../../submodules/DiscourseAssetKit/Sources/DiscourseAssetKit/Resources/Emojis'
);
const srcDir = process.env.PINMOJI_EMOJI_SRC || defaultSrc;
const destDir = path.join(repoRoot, 'public', 'emojis');

if (!fs.existsSync(srcDir)) {
  console.error(`Emoji source directory not found: ${srcDir}`);
  console.error('Set PINMOJI_EMOJI_SRC to the DiscourseAssetKit emojis dir.');
  process.exit(1);
}

fs.mkdirSync(destDir, { recursive: true });

const PREFIX = 'emoji_';
let copied = 0;
let skipped = 0;

for (const file of fs.readdirSync(srcDir)) {
  if (!file.startsWith(PREFIX) || !file.endsWith('.png')) {
    skipped++;
    continue;
  }
  const shortcodeFile = file.slice(PREFIX.length);
  const srcPath = path.join(srcDir, file);
  const destPath = path.join(destDir, shortcodeFile);
  fs.copyFileSync(srcPath, destPath);
  copied++;
}

console.log(`Copied ${copied} emoji PNG(s) → ${path.relative(repoRoot, destDir)}/`);
if (skipped) console.log(`Skipped ${skipped} non-emoji file(s).`);
