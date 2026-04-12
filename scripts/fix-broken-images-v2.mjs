import { readFileSync, writeFileSync } from "fs";

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

const PLANTS_PATH = new URL("../src/data/plants.json", import.meta.url);
const plants = JSON.parse(readFileSync(PLANTS_PATH, "utf-8"));

const broken = JSON.parse(readFileSync("/tmp/broken-plants.json", "utf-8"));
const brokenIndices = new Set(broken.map((b) => b.idx));

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

async function searchWikimediaAPI(latinName) {
  const url =
    "https://commons.wikimedia.org/w/api.php?" +
    new URLSearchParams({
      action: "query",
      generator: "search",
      gsrsearch: `${latinName} filetype:bitmap`,
      gsrnamespace: "6",
      gsrlimit: "5",
      prop: "imageinfo",
      iiprop: "url|extmetadata",
      iiurlwidth: "500",
      format: "json",
      formatversion: "2",
    });

  const resp = await fetch(url, {
    headers: { "User-Agent": "TaPrava.cz plant guide" },
    signal: AbortSignal.timeout(10000),
  });
  const data = await resp.json();

  if (!data.query?.pages) return null;

  for (const page of data.query.pages) {
    const info = page.imageinfo?.[0];
    if (!info?.thumburl) continue;
    const ext = info.thumburl.split(".").pop()?.toLowerCase();
    if (!["jpg", "jpeg", "png"].includes(ext)) continue;
    return info.thumburl;
  }
  return null;
}

async function searchINaturalist(latinName) {
  const url =
    "https://api.inaturalist.org/v1/observations?" +
    new URLSearchParams({
      taxon_name: latinName,
      photos: "true",
      quality_grade: "research",
      photo_license: "cc-by,cc-by-nc,cc-by-sa,cc-by-nc-sa,cc0",
      per_page: "3",
      order_by: "votes",
    });

  const resp = await fetch(url, {
    headers: { "User-Agent": "TaPrava.cz plant guide" },
    signal: AbortSignal.timeout(8000),
  });
  const data = await resp.json();

  for (const obs of data.results || []) {
    for (const photo of obs.photos || []) {
      if (photo.url) {
        return photo.url.replace("/square.", "/medium.");
      }
    }
  }
  return null;
}

async function main() {
  console.log(`Fixing ${broken.length} broken plant images...\n`);

  let fixedWiki = 0;
  let fixedINat = 0;
  let unfixed = 0;

  for (let i = 0; i < broken.length; i++) {
    const { idx, name, lat } = broken[i];
    const plant = plants[idx];
    const latinName = lat || plant.nazevLat;

    if (!latinName) {
      console.log(`  SKIP (no Latin name): ${name}`);
      unfixed++;
      continue;
    }

    process.stdout.write(`  [${i + 1}/${broken.length}] ${name} (${latinName})...`);

    let newUrl = null;

    try {
      newUrl = await searchWikimediaAPI(latinName);
    } catch {}

    if (newUrl) {
      plants[idx].obrazek = newUrl;
      fixedWiki++;
      console.log(` WIKI OK`);
    } else {
      await sleep(200);
      try {
        newUrl = await searchINaturalist(latinName);
      } catch {}

      if (newUrl) {
        plants[idx].obrazek = newUrl;
        fixedINat++;
        console.log(` INAT OK`);
      } else {
        console.log(` NOT FOUND`);
        unfixed++;
      }
    }

    if ((i + 1) % 5 === 0) await sleep(300);
  }

  writeFileSync(PLANTS_PATH, JSON.stringify(plants, null, 2) + "\n", "utf-8");

  console.log(`\n--- Summary ---`);
  console.log(`Fixed via Wikimedia: ${fixedWiki}`);
  console.log(`Fixed via iNaturalist: ${fixedINat}`);
  console.log(`Total fixed: ${fixedWiki + fixedINat}`);
  console.log(`Still broken: ${unfixed}`);
  console.log(`\nplants.json updated.`);
}

main();
