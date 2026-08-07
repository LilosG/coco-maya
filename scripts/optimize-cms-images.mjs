// Runs automatically before every build (see package.json "prebuild").
//
// Keystatic's upload flow saves whatever an editor uploads directly into
// public/images/cms/** with no processing — no resizing, no WebP sibling.
// Picture.astro (the site's shared image component) requires that WebP
// sibling to exist for every local raster image; without it, the <picture>
// element's <source> 404s and the whole element fails to render (browsers
// do not fall back to the plain <img> when a type-matched <source> fails).
//
// This script keeps every image under public/images/cms/** in line with
// the site's established convention (matching the original hand-optimized
// images elsewhere in public/images/): max 1800px on the long edge, and a
// WebP sibling alongside every .jpg/.jpeg/.png. It's idempotent — images
// already within bounds with an existing WebP are left alone. Original
// format/extension is always preserved; only WebP is added as a new file.

import sharp from "sharp";
import { readdirSync, statSync, existsSync, renameSync } from "fs";
import { join, extname } from "path";

const CMS_IMAGE_ROOT = "public/images/cms";
const MAX_DIM = 1800;
const JPEG_QUALITY = 85;
const WEBP_QUALITY = 82;

function walk(dir) {
  const out = [];
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) {
      out.push(...walk(full));
    } else if ([".jpg", ".jpeg", ".png"].includes(extname(entry).toLowerCase())) {
      out.push(full);
    }
  }
  return out;
}

async function processImage(path) {
  const ext = extname(path).toLowerCase();
  const webpPath = path.slice(0, -ext.length) + ".webp";

  const meta = await sharp(path).metadata();
  const needsResize = (meta.width ?? 0) > MAX_DIM || (meta.height ?? 0) > MAX_DIM;
  const needsWebp = !existsSync(webpPath);

  if (!needsResize && !needsWebp) return { path, skipped: true };

  // rotate() with no args applies EXIF orientation then strips the tag,
  // matching how browsers display the un-rotated original.
  const base = () => {
    let img = sharp(path).rotate();
    if (needsResize) {
      img = img.resize({ width: MAX_DIM, height: MAX_DIM, fit: "inside", withoutEnlargement: true });
    }
    return img;
  };

  if (needsResize) {
    if (ext === ".png") {
      await base().png({ compressionLevel: 9 }).toFile(path + ".tmp");
    } else {
      await base().jpeg({ quality: JPEG_QUALITY, mozjpeg: true }).toFile(path + ".tmp");
    }
    renameSync(path + ".tmp", path);
  }

  if (needsWebp) {
    await base().webp({ quality: WEBP_QUALITY }).toFile(webpPath);
  }

  return { path, resized: needsResize, webpGenerated: needsWebp };
}

if (!existsSync(CMS_IMAGE_ROOT)) {
  console.log("[optimize-cms-images] No public/images/cms directory yet, nothing to do.");
  process.exit(0);
}

const images = walk(CMS_IMAGE_ROOT);
console.log(`[optimize-cms-images] Scanning ${images.length} image(s) in ${CMS_IMAGE_ROOT}...`);

let changed = 0;
for (const img of images) {
  const result = await processImage(img);
  if (!result.skipped) {
    changed++;
    console.log(`  optimized: ${img}`);
  }
}

console.log(`[optimize-cms-images] Done. ${changed} image(s) optimized, ${images.length - changed} already in good shape.`);
