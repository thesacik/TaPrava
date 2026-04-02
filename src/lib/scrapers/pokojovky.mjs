const SHOP_NAME = "Pokojovky.cz";
const BASE = "https://www.pokojovky.cz";

export async function search(query) {
  return [
    {
      shopName: SHOP_NAME,
      name: `Hledat "${query}" na ${SHOP_NAME}`,
      price: null,
      currency: "Kč",
      inStock: null,
      url: `${BASE}/pokojovky/search-engine.htm?slovo=${encodeURIComponent(query)}&hledatjak=zbozi`,
      image: null,
      isSearchLink: true,
    },
  ];
}
