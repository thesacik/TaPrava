const SHOP_NAME = "Zahrada-online.cz";
const BASE = "https://www.zahrada-online.cz";

export async function search(query) {
  return [
    {
      shopName: SHOP_NAME,
      name: `Hledat "${query}" na ${SHOP_NAME}`,
      price: null,
      currency: "Kč",
      inStock: null,
      url: `${BASE}/?s=${encodeURIComponent(query)}&post_type=product`,
      image: null,
      isSearchLink: true,
    },
  ];
}
