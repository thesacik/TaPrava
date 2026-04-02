import { fetchPage, parsePrice, normalizeUrl } from "./utils.mjs";

const BASE = "https://www.dmp.cz";
const SHOP_NAME = "DMP.cz";

export async function search(query) {
  const url = `${BASE}/search?q=${encodeURIComponent(query)}&type=product`;
  const $ = await fetchPage(url);
  const results = [];
  const seen = new Set();

  $("li.grid__item").each((i, el) => {
    if (results.length >= 3) return false;
    const $el = $(el);

    const nameEl = $el.find("h3.card__heading a").first();
    const name = nameEl.text().trim();
    if (!name) return;

    const rawHref = nameEl.attr("href");
    if (!rawHref || !rawHref.includes("/products/")) return;

    const href = rawHref.split("?")[0];
    const productUrl = normalizeUrl(href, BASE);

    if (seen.has(productUrl)) return;
    seen.add(productUrl);

    const priceText = $el.find(".price-item--regular").first().text();
    const price = parsePrice(priceText);

    let img = $el.find(".card__media img, .media img").first().attr("src");
    if (img && img.startsWith("//")) img = `https:${img}`;

    const soldOut = $el.find(".badge--soldout, .sold-out").length > 0;

    results.push({
      shopName: SHOP_NAME,
      name,
      price,
      currency: "Kč",
      inStock: soldOut ? false : price ? true : null,
      url: productUrl,
      image: img || null,
    });
  });

  if (results.length === 0) {
    results.push({
      shopName: SHOP_NAME,
      name: `Hledat "${query}" na ${SHOP_NAME}`,
      price: null,
      currency: "Kč",
      inStock: null,
      url: `${BASE}/search?q=${encodeURIComponent(query)}&type=product`,
      image: null,
      isSearchLink: true,
    });
  }

  return results;
}
