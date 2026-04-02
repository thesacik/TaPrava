import type {
  UmisteniMVP, Svetlo, Vlhkost, Kategorie, VelikostKategorie,
  Narocnost, BarvaKvetu, RychlostRustu, FrekvenceZalivky, Mesic, Ocekavani,
} from "@/types/plants";

export const umisteniLabels: Record<UmisteniMVP, string> = {
  venku: "Venku na zahradě",
  interier: "V interiéru",
  balkon_terasa: "Na balkoně / terase",
  nadoba: "V nádobě / květináči",
};

export const svetloLabels: Record<Svetlo, string> = {
  slunce: "Plné slunce",
  polostin: "Polostín",
  stin: "Stín",
};

export const svetloInterierLabels: Record<Svetlo, string> = {
  slunce: "Na přímé světlo (u okna, jižní strana)",
  polostin: "Polostín (nepřímé světlo)",
  stin: "Stín (tmavší kout)",
};

export const vlhkostLabels: Record<Vlhkost, string> = {
  suche: "Spíše suché",
  bezne: "Normální",
  vlhke: "Spíše vlhké",
};

export const kategorieLabels: Record<Kategorie, string> = {
  trvalka: "Trvalka",
  letnicka: "Letničky",
  ker: "Keř",
  strom: "Strom",
  popinava: "Popínavá",
  travina: "Okrasná tráva",
  bylinka: "Bylinka",
  pokojova: "Pokojová",
};

export const kategorieVenkuLabels: Partial<Record<Kategorie, string>> = {
  trvalka: "Trvalka",
  letnicka: "Letničky",
  ker: "Keř",
  strom: "Strom",
  popinava: "Popínavá",
  travina: "Okrasná tráva",
  bylinka: "Bylinka",
};

export const velikostLabels: Record<VelikostKategorie, string> = {
  mala: "Malá (do 40 cm)",
  stredni: "Střední (40–120 cm)",
  velka: "Velká (nad 120 cm)",
};

export const velikostInterierLabels: Record<VelikostKategorie, string> = {
  mala: "Menší (do 20 cm)",
  stredni: "Střední (do 50 cm)",
  velka: "Větší (nad 50 cm)",
};

export const velikostBalkonLabels: Record<VelikostKategorie, string> = {
  mala: "Malou do truhlíku",
  stredni: "Střední do květináče",
  velka: "Velkou do velkého květináče",
};

export const narocnostLabels: Record<Narocnost, string> = {
  nizka: "Nenáročná",
  stredni: "Středně náročná",
  vyssi: "Náročnější",
};

export const narocnostWizardLabels: Record<Narocnost, string> = {
  nizka: "Minimum péče",
  stredni: "Běžná péče",
  vyssi: "Klidně i náročnější",
};

export const barvaKvetuLabels: Record<BarvaKvetu, string> = {
  bila: "Bílá",
  zluta: "Žlutá",
  oranzova: "Oranžová",
  ruzova: "Růžová",
  cervena: "Červená",
  fialova: "Fialová",
  modra: "Modrá",
  zelena: "Zelená",
};

export const rychlostRustuLabels: Record<RychlostRustu, string> = {
  pomaly: "Pomalý",
  stredni: "Střední",
  rychly: "Rychlý",
};

export const frekvenceZalivkyLabels: Record<FrekvenceZalivky, string> = {
  nizka: "Málo",
  stredni: "Středně",
  vyssi: "Často",
};

export const mesicLabels: Record<Mesic, string> = {
  1: "Leden", 2: "Únor", 3: "Březen", 4: "Duben", 5: "Květen", 6: "Červen",
  7: "Červenec", 8: "Srpen", 9: "Září", 10: "Říjen", 11: "Listopad", 12: "Prosinec",
};

export const ocekavaniLabels: Record<Ocekavani, string> = {
  kvety: "Barevné květy",
  okrasne_listy: "Okrasné listy",
  vune: "Příjemnou vůni",
  jedlost: "Jedlé plody nebo bylinky",
  stalezelena: "Celoroční zeleň",
  pro_opylovace: "Láká včely a motýly",
  zelen: "Zeleň po celou sezónu",
};

export const ocekavaniBalkonLabels: Partial<Record<Ocekavani, string>> = {
  kvety: "Barevné květy",
  jedlost: "Bylinky a jedlé rostliny",
  vune: "Příjemnou vůni",
  zelen: "Zeleň po celou sezónu",
};
