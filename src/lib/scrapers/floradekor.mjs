const SHOP_NAME = "FloraDekor.cz";
const BASE = "https://www.floradekor.cz";

export async function search(query) {
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
