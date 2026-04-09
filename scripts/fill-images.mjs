import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { execSync } from "child_process";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PLANTS_PATH = path.join(__dirname, "..", "src", "data", "plants.json");
const API = "https://commons.wikimedia.org/w/api.php";
const DELAY_MS = 200;

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

function buildThumbUrl(filename, width = 500) {
  const encoded = encodeURIComponent(filename.replace(/ /g, "_"));
  return `https://commons.wikimedia.org/w/thumb.php?f=${encoded}&w=${width}`;
}

function curlJson(url) {
  try {
    const out = execSync(`curl -s --max-time 10 "${url}"`, {
      encoding: "utf8",
      timeout: 15000,
    });
    return JSON.parse(out);
  } catch {
    return null;
  }
}

function searchCommonsImage(query) {
  const params = new URLSearchParams({
    action: "query",
    generator: "search",
    gsrnamespace: "6",
    gsrsearch: query,
    gsrlimit: "5",
    prop: "imageinfo",
    iiprop: "url|mime",
    format: "json",
  });

  const data = curlJson(`${API}?${params}`);
  if (!data?.query?.pages) return null;

  const pages = Object.values(data.query.pages).sort(
    (a, b) => a.index - b.index
  );

  for (const page of pages) {
    const info = page.imageinfo?.[0];
    if (!info) continue;
    const mime = info.mime || "";
    if (!mime.startsWith("image/")) continue;
    if (mime === "image/svg+xml") continue;

    const title = page.title?.replace("File:", "") || "";
    if (!title) continue;

    const lower = title.toLowerCase();
    if (
      lower.includes("icon") ||
      lower.includes("logo") ||
      lower.includes("map") ||
      lower.includes("distribution") ||
      lower.includes("range_map") ||
      lower.includes("koeh-")
    )
      continue;

    return buildThumbUrl(title);
  }
  return null;
}

function findImageForPlant(plant) {
  const lat = plant.nazevLat || "";

  // Strategy 1: Full Latin name
  if (lat) {
    const clean = lat.replace(/[×']/g, "").replace(/\s+/g, " ").trim();
    const url = searchCommonsImage(clean);
    if (url) return { url, strategy: "latin" };
  }

  // Strategy 2: Genus + first species word only
  if (lat) {
    const parts = lat.replace(/[×']/g, "").split(/\s+/).filter(Boolean);
    if (parts.length >= 2) {
      const genusSpecies = `${parts[0]} ${parts[1]}`;
      const url = searchCommonsImage(genusSpecies);
      if (url) return { url, strategy: "genus+species" };
    }
  }

  // Strategy 3: Genus only
  if (lat) {
    const genus = lat.split(/\s+/)[0].replace(/[×']/g, "");
    if (genus.length > 2) {
      const url = searchCommonsImage(genus);
      if (url) return { url, strategy: "genus" };
    }
  }

  // Strategy 4: Czech name
  const cz = plant.nazevCz || "";
  if (cz) {
    const url = searchCommonsImage(cz);
    if (url) return { url, strategy: "czech" };
  }

  return { url: null, strategy: "none" };
}

async function main() {
  const plants = JSON.parse(fs.readFileSync(PLANTS_PATH, "utf8"));
  const missing = plants.filter((p) => !p.obrazek || !p.obrazek.trim());

  console.log(`Celkem rostlin: ${plants.length}`);
  console.log(`Bez obrázku: ${missing.length}`);
  console.log("---");

  let found = 0;
  let notFound = 0;
  const failures = [];

  for (let i = 0; i < missing.length; i++) {
    const plant = missing[i];
    const label = plant.nazevLat || plant.nazevCz;
    process.stdout.write(`[${i + 1}/${missing.length}] ${label}... `);

    const result = findImageForPlant(plant);
    if (result.url) {
      plant.obrazek = result.url;
      found++;
      console.log(`OK (${result.strategy})`);
    } else {
      notFound++;
      failures.push(label);
      console.log("NOT FOUND");
    }

    await sleep(DELAY_MS);
  }

  fs.writeFileSync(PLANTS_PATH, JSON.stringify(plants, null, 2), "utf8");

  console.log("\n--- SOUHRN ---");
  console.log(`Nalezeno: ${found}`);
  console.log(`Nenalezeno: ${notFound}`);
  if (failures.length) {
    console.log("Chybějící:");
    failures.forEach((f) => console.log(`  - ${f}`));
  }
}

main().catch(console.error);
