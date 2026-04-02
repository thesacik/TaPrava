import { fetchPage, parsePrice, normalizeUrl } from "./utils.mjs";

const BASE = "https://www.rostlinkovo.cz";
const SHOP_NAME = "Rostlinkovo.cz";

export async function search(query) {
  const url = `${BASE}/?s=${encodeURIComponent(query)}`;

  let $;
  try {
    $ = await fetchPage(url);
  } catch {
    return [searchLink(query)];
  }

  const results = [];
  const seen = new Set();

  $("a[href*='/produkt/']").each((_, el) => {
    if (results.length >= 3) return false;
    const $el = $(el);

    const name = $el.text().trim();
    if (!name || name.length < 3 || /^-?\d+%$/.test(name)) return;

    const href = $el.attr("href");
    if (!href || seen.has(href)) return;
    seen.add(href);

    let price = null;
    let img = null;
    let container = $el;
    for (let i = 0; i < 6; i++) {
      container = container.parent();
      if (!container.length) break;

      if (!price) {
        const ins = container.find("ins .woocommerce-Price-amount bdi");
        const priceEl =
          ins.length > 0
            ? ins.last()
            : container.find(".woocommerce-Price-amount bdi").last();
        const t = priceEl.text().trim();
        if (t) price = parsePrice(t);
      }

      if (!img) {
        const imgEl = container.find("img").first();
        const src = imgEl.attr("data-src") || imgEl.attr("src");
        if (src) img = normalizeUrl(src, BASE);
      }
    }

    const productUrl = normalizeUrl(href, BASE);
    const outOfStock =
      $el.closest(".out-of-stock, .outofstock").length > 0;

    results.push({
      shopName: SHOP_NAME,
      name,
      price,
      currency: "Kč",
      inStock: outOfStock ? false : price ? true : null,
      url: productUrl,
      image: img,
    });
  });

  if (results.length === 0) return [searchLink(query)];
  return results;
}

function searchLink(query) {
  return {
    shopName: SHOP_NAME,
    name: `Hledat "${query}" na ${SHOP_NAME}`,
    price: null,
    currency: "Kč",
    inStock: null,
    url: `${BASE}/?s=${encodeURIComponent(query)}`,
    image: null,
    isSearchLink: true,
  };
}
