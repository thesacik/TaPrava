const BASE = "https://www.obi.cz";
const SHOP_NAME = "OBI.cz";

export async function search(query) {
  const searchUrl = `${BASE}/search/${encodeURIComponent(query)}/`;

  return [
    {
      shopName: SHOP_NAME,
      name: `Hledat "${query}" na ${SHOP_NAME}`,
      price: null,
      currency: "Kč",
      inStock: null,
      url: searchUrl,
      image: null,
      isSearchLink: true,
    },
  ];
}
