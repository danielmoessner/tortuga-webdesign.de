import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const PROJECT_ROOT = process.cwd();
const PORTFOLIO_DIR = path.join(PROJECT_ROOT, "content", "portfolio");
const PUBLIC_DIR = path.join(PROJECT_ROOT, "public");

const TARGET_WIDTH = 420;
const WEBP_QUALITY = 80;
const JPEG_QUALITY = 82;

function isSupportedImageExtension(ext) {
  return [".jpg", ".jpeg", ".png"].includes(ext.toLowerCase());
}

function stripLeadingSlash(p) {
  return p.startsWith("/") ? p.slice(1) : p;
}

function buildVariantPaths(publicUrl) {
  if (typeof publicUrl !== "string") return null;
  if (!publicUrl.startsWith("/media/")) return null;

  const ext = path.extname(publicUrl);
  if (!ext) return null;
  if (!isSupportedImageExtension(ext)) return null;

  const fileName = path.basename(publicUrl);
  const baseName = fileName.slice(0, -ext.length);
  const normalizedExt = ext.toLowerCase();

  const webpUrl = `/media/opt/${baseName}.${TARGET_WIDTH}.opt.webp`;
  const fallbackUrl = `/media/opt/${baseName}.${TARGET_WIDTH}.opt${normalizedExt}`;

  const srcPath = path.join(PUBLIC_DIR, stripLeadingSlash(publicUrl));
  const webpPath = path.join(PUBLIC_DIR, stripLeadingSlash(webpUrl));
  const fallbackPath = path.join(PUBLIC_DIR, stripLeadingSlash(fallbackUrl));

  return {
    publicUrl,
    ext: normalizedExt,
    srcPath,
    webpUrl,
    webpPath,
    fallbackUrl,
    fallbackPath,
  };
}

async function fileStatOrNull(filePath) {
  try {
    return await fs.stat(filePath);
  } catch {
    return null;
  }
}

async function ensureDirForFile(filePath) {
  await fs.mkdir(path.dirname(filePath), { recursive: true });
}

async function optimizeOne(publicUrl) {
  const variant = buildVariantPaths(publicUrl);
  if (!variant) return { status: "skipped", reason: "unsupported", publicUrl };

  const srcStat = await fileStatOrNull(variant.srcPath);
  if (!srcStat)
    return { status: "skipped", reason: "missing-source", publicUrl };

  const [webpStat, fallbackStat] = await Promise.all([
    fileStatOrNull(variant.webpPath),
    fileStatOrNull(variant.fallbackPath),
  ]);

  const upToDate =
    webpStat &&
    fallbackStat &&
    webpStat.mtimeMs >= srcStat.mtimeMs &&
    fallbackStat.mtimeMs >= srcStat.mtimeMs;

  if (upToDate) return { status: "skipped", reason: "up-to-date", publicUrl };

  await Promise.all([
    ensureDirForFile(variant.webpPath),
    ensureDirForFile(variant.fallbackPath),
  ]);

  const pipeline = sharp(variant.srcPath).rotate().resize({
    width: TARGET_WIDTH,
    withoutEnlargement: true,
  });

  const webpPipeline = pipeline.clone().webp({ quality: WEBP_QUALITY });

  let fallbackPipeline;
  if (variant.ext === ".jpg" || variant.ext === ".jpeg") {
    fallbackPipeline = pipeline
      .clone()
      .jpeg({ quality: JPEG_QUALITY, mozjpeg: true });
  } else if (variant.ext === ".png") {
    fallbackPipeline = pipeline.clone().png({ compressionLevel: 9 });
  } else {
    return { status: "skipped", reason: "unsupported", publicUrl };
  }

  await Promise.all([
    webpPipeline.toFile(variant.webpPath),
    fallbackPipeline.toFile(variant.fallbackPath),
  ]);

  return { status: "optimized", publicUrl };
}

async function main() {
  const entries = await fs.readdir(PORTFOLIO_DIR, { withFileTypes: true });
  const jsonFiles = entries
    .filter((e) => e.isFile() && e.name.endsWith(".json"))
    .map((e) => path.join(PORTFOLIO_DIR, e.name));

  const imageUrls = new Set();

  for (const filePath of jsonFiles) {
    const raw = await fs.readFile(filePath, "utf8");
    const json = JSON.parse(raw);
    if (typeof json.image === "string") imageUrls.add(json.image);
  }

  const results = {
    optimized: 0,
    skippedUpToDate: 0,
    skippedMissing: 0,
    skippedUnsupported: 0,
  };

  for (const imageUrl of imageUrls) {
    const r = await optimizeOne(imageUrl);

    if (r.status === "optimized") results.optimized += 1;
    else if (r.reason === "up-to-date") results.skippedUpToDate += 1;
    else if (r.reason === "missing-source") results.skippedMissing += 1;
    else results.skippedUnsupported += 1;
  }

  console.log(
    `[image-opt] optimized=${results.optimized} upToDate=${results.skippedUpToDate} missing=${results.skippedMissing} unsupported=${results.skippedUnsupported}`,
  );

  if (results.skippedMissing > 0) {
    console.warn(
      "[image-opt] Warning: some portfolio images are referenced but missing from public/media.",
    );
  }
}

await main();
