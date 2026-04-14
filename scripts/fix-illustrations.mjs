/**
 * Detects botanical illustrations in plants.json and attempts to find
 * real photo replacements from Wikimedia Commons, writing results to
 * the `obrazekOverride` field.
 *
 * Usage: node scripts/fix-illustrations.mjs
 *   --dry-run   Only report, don't write changes (default)
 *   --apply     Write changes to plants.json
 */

import { readFileSync, writeFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

const __dirname = dirname(fileURLToPath(import.meta.url));
const PLANTS_PATH = join(__dirname, "../src/data/plants.json");

const ILLUSTRATION_PATTERNS = [
  /K%C3%B6hler/i, /Kohler/i, /Koehler/i,
  /Medizinal.?Pflanzen/i,
  /Illustration_/i,
  /Flora_Batava/i,
  /Thom%C3%A9/i, /Thomé/i, /Thome_/i,
  /Sturm.*Flora/i,
  /Botanical_Magazine/i, /Bot[_.]?Mag/i,
  /Plantarum_/i,
  /Curtis.*Botanical/i,
  /Flore_m%C3%A9dicale/i, /Flore_medicale/i,
  /Deutschlands_Flora/i,
  /Bilder_ur_Nordens/i, /Billeder_af_Nordens/i, /Nordens_Flora/i,
  /Atlas_des_plantes/i,
  /Clean.?illustration/i, /Cleaned.?Illustration/i,
  /Hortus_/i,
  /Icones_/i,
  /Materia_Medica/i,
  /Engraving/i,
  /Drawing/i,
  /_-_DPLA_/i,
];

function isIllustration(url) {
  if (!url) return false;
  return ILLUSTRATION_PATTERNS.some((p) => p.test(url));
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function searchWikimediaPhoto(latinName) {
  const params = new URLSearchParams({
    action: "query",
    generator: "search",
    gsrnamespace: "6",
    gsrsearch: `${latinName} photo`,
    gsrlimit: "10",
    prop: "imageinfo",
    iiprop: "url|mime|size",
    iiurlwidth: "500",
    format: "json",
    origin: "*",
  });

  const res = await fetch(
    `https://commons.wikimedia.org/w/api.php?${params}`,
    { signal: AbortSignal.timeout(8000) },
  );
  if (!res.ok) return null;
  const data = await res.json();
  const pages = data.query?.pages;
  if (!pages) return null;

  for (const page of Object.values(pages)) {
    const info = page.imageinfo?.[0];
    if (!info) continue;
    if (!info.mime?.startsWith("image/")) continue;
    if (info.mime === "image/svg+xml") continue;
    const title = page.title?.toLowerCase() || "";
    if (isIllustration(title)) continue;
    if (title.includes("icon") || title.includes("logo") || title.includes("map")) continue;
    if ((info.width || 0) < 200 || (info.height || 0) < 200) continue;
    return info.thumburl || info.url;
  }
  return null;
}

async function main() {
  const dryRun = !process.argv.includes("--apply");
  const plants = JSON.parse(readFileSync(PLANTS_PATH, "utf-8"));

  const illustrations = [];
  for (let i = 0; i < plants.length; i++) {
    const p = plants[i];
    if (isIllustration(p.obrazek) && !p.obrazekOverride) {
      illustrations.push({ idx: i, id: p.id, name: p.nazevCz, lat: p.nazevLat });
    }
  }

  console.log(`Found ${illustrations.length} plants with botanical illustrations (no existing override)\n`);

  if (illustrations.length === 0) {
    console.log("Nothing to do.");
    return;
  }

  let found = 0;
  let notFound = 0;
  const results = [];

  for (let i = 0; i < illustrations.length; i++) {
    const { idx, id, name, lat } = illustrations[i];
    const searchTerm = lat || name;
    process.stdout.write(`[${i + 1}/${illustrations.length}] ${name} (${searchTerm})... `);

    try {
      const url = await searchWikimediaPhoto(searchTerm);
      if (url) {
        found++;
        results.push({ idx, id, name, url, status: "found" });
        if (!dryRun) {
          plants[idx].obrazekOverride = url;
        }
        console.log("FOUND");
      } else {
        notFound++;
        results.push({ idx, id, name, url: null, status: "not_found" });
        console.log("NOT FOUND");
      }
    } catch (err) {
      notFound++;
      results.push({ idx, id, name, url: null, status: "error", error: err.message });
      console.log(`ERROR: ${err.message}`);
    }

    await sleep(300);
  }

  console.log(`\n--- Summary ---`);
  console.log(`Total illustrations: ${illustrations.length}`);
  console.log(`Replacements found: ${found}`);
  console.log(`Not found:          ${notFound}`);

  if (!dryRun && found > 0) {
    writeFileSync(PLANTS_PATH, JSON.stringify(plants, null, 2) + "\n", "utf-8");
    console.log(`\nWrote ${found} overrides to plants.json`);
  } else if (dryRun) {
    console.log(`\nDry run — no changes written. Use --apply to write.`);
  }

  console.log("\n--- Details ---");
  for (const r of results) {
    const icon = r.status === "found" ? "✓" : "✗";
    console.log(`${icon} ${r.name} (${r.id}): ${r.url ?? r.status}`);
  }
}

main().catch(console.error);
