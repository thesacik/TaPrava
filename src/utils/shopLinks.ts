export interface ShopLink {
  id: string;
  name: string;
  buildUrl: (query: string) => string;
}

export const priceComparators: ShopLink[] = [
  {
    id: "zbozi",
    name: "Zboží.cz",
    buildUrl: (q) => `https://www.zbozi.cz/hledej/?q=${encodeURIComponent(q)}`,
  },
  {
    id: "heureka",
    name: "Heureka.cz",
    buildUrl: (q) => `https://www.heureka.cz/?h%5Bfraze%5D=${encodeURIComponent(q)}`,
  },
];

export const gardenShops: ShopLink[] = [
  {
    id: "hornbach",
    name: "Hornbach.cz",
    buildUrl: (q) => `https://www.hornbach.cz/s/${encodeURIComponent(q)}/`,
  },
  {
    id: "obi",
    name: "OBI.cz",
    buildUrl: (q) => `https://www.obi.cz/search/${encodeURIComponent(q)}/`,
  },
  {
    id: "zahradyonline",
    name: "ZahradyOnline.cz",
    buildUrl: (q) => `https://www.zahradyonline.cz/vyhledavani/?string=${encodeURIComponent(q)}`,
  },
  {
    id: "itrvalky",
    name: "iTrvalky.cz",
    buildUrl: (q) => `https://www.itrvalky.cz/vyhledavani/?string=${encodeURIComponent(q)}`,
  },
  {
    id: "sazeniceonline",
    name: "SazeniceOnline.cz",
    buildUrl: (q) => `https://sazeniceonline.cz/search?q=${encodeURIComponent(q)}`,
  },
];
