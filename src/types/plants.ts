export type UmisteniMVP = "venku" | "interier" | "balkon_terasa" | "nadoba";

export type Svetlo = "slunce" | "polostin" | "stin";

export type Vlhkost = "suche" | "bezne" | "vlhke";

export type Kategorie =
  | "trvalka"
  | "letnicka"
  | "ker"
  | "strom"
  | "popinava"
  | "travina"
  | "bylinka"
  | "pokojova";

export type Narocnost = "nizka" | "stredni" | "vyssi";

export type VelikostKategorie = "mala" | "stredni" | "velka";

export type BarvaKvetu =
  | "bila"
  | "zluta"
  | "oranzova"
  | "ruzova"
  | "cervena"
  | "fialova"
  | "modra"
  | "zelena";

export type Mesic = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export type RychlostRustu = "pomaly" | "stredni" | "rychly";

export type Toxicita = "ne" | "mirna" | "ano" | "nezname";

export type FrekvenceZalivky = "nizka" | "stredni" | "vyssi";

export type Ocekavani =
  | "kvety"
  | "okrasne_listy"
  | "vune"
  | "jedlost"
  | "stalezelena"
  | "pro_opylovace"
  | "zelen";

export interface Plant {
  id: string;
  nazevCz: string;
  nazevLat?: string;
  kategorie: Kategorie[];
  umisteni: UmisteniMVP[];
  svetlo: Svetlo[];
  vlhkost: Vlhkost[];
  vyskaMinCm?: number;
  vyskaMaxCm?: number;
  sirkaMinCm?: number;
  sirkaMaxCm?: number;
  velikostKategorie?: VelikostKategorie;
  barvaKvetu?: BarvaKvetu[];
  obdobiKveteni?: Mesic[];
  stalezelena?: boolean;
  vune?: boolean;
  proVcely?: boolean;
  proMotyly?: boolean;
  jedla?: boolean;
  bezpecnaProDeti?: boolean;
  bezpecnaProPsy?: boolean;
  bezpecnaProKocky?: boolean;
  toxicita?: Toxicita;
  narocnost?: Narocnost;
  frekvenceZalivky?: FrekvenceZalivky;
  mrazuvzdornostDoC?: number;
  vhodnaDoNadoby?: boolean;
  rychlostRustu?: RychlostRustu;
  obrazek?: string;
  obrazekOverride?: string;
  popis?: string;
  pece?: string;
  tagy?: string[];
}

export interface UserAnswers {
  umisteni?: UmisteniMVP;
  svetlo?: Svetlo;
  vlhkost?: Vlhkost;
  kategorie?: Kategorie;
  velikost?: VelikostKategorie;
  narocnost?: Narocnost;
  ocekavani?: Ocekavani[];
  bezpecnostDeti?: boolean;
  bezpecnostMazlici?: boolean;
  chciVuni?: boolean;
  proVcely?: boolean;
  vhodnaDoNadoby?: boolean;
  barvaKvetu?: BarvaKvetu;
  mesicKveteni?: Mesic;
}

export interface ScoredPlant {
  plant: Plant;
  score: number;
  reasons: string[];
}

export interface EshopResult {
  shopId: string;
  shopName: string;
  name: string;
  price: number | null;
  currency: string;
  inStock: boolean | null;
  url: string | null;
  image: string | null;
  isSearchLink?: boolean;
}
