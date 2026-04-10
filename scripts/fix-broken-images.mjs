import { readFileSync, writeFileSync } from "fs";
import https from "https";

const PLANTS_PATH = new URL("../src/data/plants.json", import.meta.url);
const plants = JSON.parse(readFileSync(PLANTS_PATH, "utf-8"));

const BROKEN_FILES = new Set([
  "Caryopteris_x_clandonensis_01.jpg",
  "Laburnum_watereri_flowers.jpg",
  "Physocarpus_opulifolius_Diabolo_01.JPG",
  "Enkianthus_campanulatus_(flower_s3).jpg",
  "Abies_alba_001.JPG",
  "Pinus_strobus_Torulosa1.jpg",
  "Silver_Birch_%28Bhojpatra%29_I_IMG_3405.jpg",
  "Juniperus_scopulorum_UGA3.jpg",
  "Spiraea_cinerea_'Grefsheim'.jpg",
  "Platanus_hispanica_bark_01_by_Line1.jpg",
  "Jasminum_nudiflorum1.jpg",
  "Sedum_kamtschaticum_var._ellacombeanum_01.jpg",
  "Pinus_densiflora_Umbraculifera_01.jpg",
  "Primula_denticulata_01.jpg",
  "Salvia_x_superba_a1.jpg",
  "Cotoneaster_salicifolius_var._floccosus.jpg",
  "Achillea_tomentosa_-_Gold_Coin.jpg",
  "Echinacea_pallida_2.jpg",
  "Festuca_mairei_-_Botanischer_Garten_M%C3%BCnchen-Nymphenburg_-_DSC07851.JPG",
  "Berberis_stenophylla1.jpg",
  "Lonicera_x_heckrottii_01.jpg",
  "Mentha_suaveolens_002.JPG",
  "Allium_tuberosum_002.JPG",
  "Trollius_chinensis_%27Golden_Queen%27%2C_opvallende_bloem_met_warme_oranjeachtige_kleur._Locatie%2C_Tuinreservaat_Jonkervallei_05.jpg",
  "Sedum_floriferum.jpg",
  "Hylotelephium_ewersii.jpg",
  "Pinus_heldreichii_Pirin.jpg",
  "Primula_capitata.jpg",
  "Magnolia_sieboldii_flower.jpg",
  "Epimedium_youngianum_Niveum.jpg",
  "Cotoneaster_radicans_Eichholz.jpg",
  "Syringa_patula_'Miss_Kim'.jpg",
  "Thymus_mastichina_1.jpg",
  "Allium_cowanii_01.jpg",
  "Coreopsis_tripteris_001.jpg",
  "Anemone_leveillei.jpg",
  "Artemisia_lactiflora_01.jpg",
  "Pinus_pumila_Mount_Ontake.jpg",
  "Actinidia_kolomikta_leaves.jpg",
]);

function isBroken(url) {
  if (!url) return false;
  const fileMatch = url.match(/[?&]f=([^&]+)/);
  if (fileMatch) return BROKEN_FILES.has(decodeURIComponent(fileMatch[1]));
  const pathFile = url.split("/").pop()?.replace(/^\d+px-/, "");
  return pathFile ? BROKEN_FILES.has(pathFile) : false;
}

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

function fetchJson(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { "User-Agent": "TaPrava.cz image fixer" } }, (res) => {
      let data = "";
      res.on("data", (c) => (data += c));
      res.on("end", () => {
        try { resolve(JSON.parse(data)); }
        catch { reject(new Error("Invalid JSON")); }
      });
    }).on("error", reject);
  });
}

async function searchWikimedia(latinName) {
  const params = new URLSearchParams({
    action: "query",
    generator: "search",
    gsrnamespace: "6",
    gsrsearch: latinName,
    gsrlimit: "3",
    prop: "imageinfo",
    iiprop: "url",
    iiurlwidth: "500",
    format: "json",
  });
  try {
    const data = await fetchJson(`https://commons.wikimedia.org/w/api.php?${params}`);
    const pages = data.query?.pages;
    if (!pages) return null;
    for (const page of Object.values(pages)) {
      const info = page.imageinfo?.[0];
      if (info?.thumburl && !info.thumburl.includes(".svg")) {
        return info.thumburl;
      }
    }
  } catch {}
  return null;
}

async function searchINaturalist(latinName) {
  try {
    const params = new URLSearchParams({
      taxon_name: latinName,
      photos: "true",
      quality_grade: "research",
      photo_license: "cc-by,cc-by-nc,cc-by-sa,cc-by-nc-sa,cc0",
      per_page: "1",
      order_by: "votes",
    });
    const data = await fetchJson(`https://api.inaturalist.org/v1/observations?${params}`);
    const photo = data.results?.[0]?.photos?.[0];
    if (photo?.url) {
      return photo.url.replace("square", "medium");
    }
  } catch {}
  return null;
}

async function main() {
  const broken = plants.filter((p) => isBroken(p.obrazek));
  console.log(`Found ${broken.length} plants with known broken images.\n`);

  let fixedWiki = 0;
  let fixedINat = 0;
  let unfixed = 0;

  for (const plant of broken) {
    const idx = plants.indexOf(plant);
    console.log(`  ${plant.nazevCz} (${plant.nazevLat})`);

    const wikiUrl = await searchWikimedia(plant.nazevLat);
    if (wikiUrl) {
      plants[idx].obrazek = wikiUrl;
      console.log(`    -> Wikimedia: OK`);
      fixedWiki++;
      await sleep(500);
      continue;
    }

    await sleep(300);
    const inatUrl = await searchINaturalist(plant.nazevLat);
    if (inatUrl) {
      plants[idx].obrazek = inatUrl;
      console.log(`    -> iNaturalist: OK`);
      fixedINat++;
      await sleep(500);
      continue;
    }

    console.log(`    -> No replacement found`);
    unfixed++;
    await sleep(300);
  }

  writeFileSync(PLANTS_PATH, JSON.stringify(plants, null, 2) + "\n", "utf-8");

  console.log(`\nDone!`);
  console.log(`  Fixed via Wikimedia: ${fixedWiki}`);
  console.log(`  Fixed via iNaturalist: ${fixedINat}`);
  console.log(`  Unfixed: ${unfixed}`);
}

main();
