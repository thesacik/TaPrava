import { search as pokojovky } from "./pokojovky.mjs";
import { search as zahradaOnline } from "./zahradaOnline.mjs";
import { search as floradekor } from "./floradekor.mjs";
import { search as ekoaloe } from "./ekoaloe.mjs";
import { search as rostlinkovo } from "./rostlinkovo.mjs";
import { search as dmp } from "./dmp.mjs";
import { search as kytkyshop } from "./kytkyshop.mjs";
import { search as obi } from "./obi.mjs";

const scrapers = [
  { id: "pokojovky", name: "Pokojovky.cz", fn: pokojovky },
  { id: "zahrada-online", name: "Zahrada-online.cz", fn: zahradaOnline },
  { id: "floradekor", name: "FloraDekor.cz", fn: floradekor },
  { id: "ekoaloe", name: "EkoAloe.cz", fn: ekoaloe },
  { id: "rostlinkovo", name: "Rostlinkovo.cz", fn: rostlinkovo },
  { id: "dmp", name: "DMP.cz", fn: dmp },
  { id: "kytkyshop", name: "KytkyShop.cz", fn: kytkyshop },
  { id: "obi", name: "OBI.cz", fn: obi },
];

const SCRAPER_TIMEOUT = 8000;

function withTimeout(promise, ms) {
  return Promise.race([
    promise,
    new Promise((_, reject) =>
      setTimeout(() => reject(new Error("Timeout")), ms)
    ),
  ]);
}

function normalize(text) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

/**
 * Filters scraped results to only keep items whose name matches the search
 * query. All significant query words (length >= 3) must appear in the product
 * name. Search-link results are kept as-is.
 */
function filterByRelevance(items, query) {
  const words = normalize(query)
    .split(/\s+/)
    .filter((w) => w.length >= 3);
  if (words.length === 0) return items;

  return items.filter((item) => {
    if (item.isSearchLink) return true;
    const name = normalize(item.name);
    return words.every((w) => name.includes(w));
  });
}

export async function searchAll(query) {
  const results = await Promise.allSettled(
    scrapers.map(async (s) => {
      try {
        const items = await withTimeout(s.fn(query), SCRAPER_TIMEOUT);
        return items.map((item) => ({
          ...item,
          shopId: s.id,
          shopName: item.shopName || s.name,
        }));
      } catch (err) {
        console.warn(`[${s.id}] scraper failed:`, err.message);
        return [];
      }
    })
  );

  const all = results.flatMap((r) =>
    r.status === "fulfilled" ? r.value : []
  );
  return filterByRelevance(all, query);
}
