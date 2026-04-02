import { createShoptetScraper } from "./shoptet.mjs";

const SHOP_NAME = "KytkyShop.cz";
const BASE = "https://www.kytkyshop.cz";

const baseScraper = createShoptetScraper(BASE, SHOP_NAME, "/1226054961/e-search");

export async function search(query) {
  try {
    const results = await baseScraper(query);
    if (results.length > 0) return results;
  } catch {
    // rate-limited or unavailable — fall through to search link
  }

  return [
    {
      shopName: SHOP_NAME,
      name: `Hledat "${query}" na ${SHOP_NAME}`,
      price: null,
      currency: "Kč",
      inStock: null,
      url: `${BASE}/?s=${encodeURIComponent(query)}`,
      image: null,
      isSearchLink: true,
    },
  ];
}
