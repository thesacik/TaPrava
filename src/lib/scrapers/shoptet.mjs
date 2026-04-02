import { fetchPage, parsePrice, normalizeUrl } from "./utils.mjs";

/**
 * Generic Shoptet platform scraper.
 * Uses the store's e-search endpoint with ?q= parameter.
 * The searchPath must be provided (e.g. "/788314273/e-search").
 */
export function createShoptetScraper(baseUrl, shopName, searchPath) {
  return async function search(query) {
    const searchUrl = `${baseUrl}${searchPath}?q=${encodeURIComponent(query)}`;
    const $ = await fetchPage(searchUrl);

    const results = [];
    const seen = new Set();
    const products = $('div.product[data-selector="product"]');

    products.each((i, el) => {
      if (results.length >= 3) return false;
      const $el = $(el);

      const nameEl = $el.find('a[data-selector="name"]').first();
      const name = nameEl.text().trim();
      if (!name) return;

      const href =
        nameEl.attr("href") ||
        $el.find('a[data-link="product"]').first().attr("href");
      const url = normalizeUrl(href, baseUrl);

      if (seen.has(url)) return;
      seen.add(url);

      const priceAttr = $el.attr("data-price");
      const priceText = $el.find(".price-final, .c321").first().text();
      const price = parsePrice(priceAttr) || parsePrice(priceText);

      const inStock = $el.find(".in-stock").length > 0;
      const outOfStock = $el.find(".not-in-stock").length > 0;

      const img = $el.find('a[data-link="product"] img').first().attr("src");
      const image = normalizeUrl(img, baseUrl);

      results.push({
        shopName,
        name,
        price,
        currency: "Kč",
        inStock: outOfStock ? false : inStock ? true : null,
        url,
        image,
      });
    });

    return results;
  };
}
