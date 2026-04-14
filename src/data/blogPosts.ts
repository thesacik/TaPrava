export type ContentBlock =
  | { type: "text"; heading?: string; body: string }
  | { type: "tip"; title: string; body: string }
  | { type: "image"; src: string; alt: string; caption?: string }
  | { type: "plantList"; heading?: string; plantIds: string[] };

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  heroImage: string;
  tags: string[];
  metaDescription: string;
  content: ContentBlock[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "10-nejlepsich-pokojovych-rostlin-pro-zacatecniky",
    title: "10 nejlepších pokojových rostlin pro začátečníky",
    excerpt:
      "Nemáte zkušenosti s pěstováním? Nevadí! Tyto rostliny zvládne každý — jsou odolné, nenáročné a krásné.",
    date: "2026-04-14",
    author: "Ta Pravá",
    heroImage: "/images/categories/pokojove.png",
    tags: ["pokojové", "začátečníci", "průvodce"],
    metaDescription:
      "Přehled 10 nejlepších pokojových rostlin pro začátečníky. Nenáročné, odolné a krásné rostliny, které zvládne každý.",
    content: [
      {
        type: "text",
        body: "Chcete si pořídit pokojovou rostlinu, ale bojíte se, že vám uhyne? Máme pro vás dobrou zprávu — existuje celá řada rostlin, které zvládnou i naprostí začátečníci. Vybrali jsme pro vás desítku ověřených krasavců, které se nemusíte bát si pořídit.",
      },
      {
        type: "tip",
        title: "Zlaté pravidlo pro začátečníky",
        body: "Většina pokojových rostlin uhyne spíše přelitím než nedostatkem vody. Raději zalijte méně a častěji kontrolujte půdu prstem — pokud je vlhká, počkejte.",
      },
      {
        type: "text",
        heading: "Proč začít s nenáročnými rostlinami?",
        body: "Nenáročné rostliny odpouštějí chyby v péči. Vydrží zapomenutou zálivku, méně světla i kolísající teplotu. Díky tomu se s nimi naučíte základy pěstování bez stresu a postupně můžete přejít k náročnějším druhům.",
      },
      {
        type: "plantList",
        heading: "Naše top 10 rostlin pro začátečníky",
        plantIds: [
          "monstera-deliciosa",
          "epipremnum-aureum",
          "sansevieria-trifasciata",
          "zamioculcas-zamiifolia",
          "chlorophytum-comosum",
          "spathiphyllum",
          "aloe-vera",
          "crassula-ovata",
          "dracaena-marginata",
          "tradescantia-zebrina",
        ],
      },
      {
        type: "text",
        heading: "Monstera — královna instagramových bytů",
        body: "Monstera je nejen krásná, ale i velmi nenáročná. Stačí jí střední světlo a zálivka jednou týdně. Její typické děrované listy se staly symbolem moderního interiéru. Roste rychle a za rok se z malého sazeničky stane impozantní rostlina.",
      },
      {
        type: "text",
        heading: "Tchýnin jazyk — přežije téměř cokoliv",
        body: "Sansevieria je doslova nezničitelná. Zvládne stín, sucho i zapomenutí na několik týdnů. Navíc je skvělá v čištění vzduchu — NASA ji zařadila mezi nejúčinnější čističky interiérového ovzduší.",
      },
      {
        type: "text",
        heading: "Zamiokulkas — ideální do kanceláře",
        body: "Zamiokulkas je nenáročný na světlo i zálivku. Jeho lesklé listy vypadají téměř jako umělé, ale jsou naprosto živé. Ideální volba pro tmavší místnosti nebo kanceláře.",
      },
      {
        type: "tip",
        title: "Tip na skupinový efekt",
        body: "Seskupte několik různých rostlin na jedno místo — vytvoříte zelený koutek, který vypadá úžasně a rostlinám se bude dařit lépe díky vyšší vlhkosti vzduchu kolem nich.",
      },
      {
        type: "text",
        heading: "Jak začít?",
        body: "Vyberte si 2–3 rostliny z našeho seznamu, pořiďte jim vhodné květináče s odtokem vody a umístěte je na světlé místo bez přímého poledního slunce. Zalijte je jednou týdně a sledujte, jak vám porostou. Za pár měsíců budete chtít víc!",
      },
    ],
  },
  {
    slug: "co-zasadit-na-jare-pruvodce-jarni-vysadbou",
    title: "Co zasadit na jaře: průvodce jarní výsadbou",
    excerpt:
      "Jaro je nejlepší čas pro výsadbu. Přehled rostlin, které zasadit v březnu, dubnu a květnu — a tipy, jak na to.",
    date: "2026-04-10",
    author: "Ta Pravá",
    heroImage: "/images/months/04.png",
    tags: ["zahrada", "jaro", "výsadba"],
    metaDescription:
      "Kompletní průvodce jarní výsadbou. Co zasadit v březnu, dubnu a květnu, jak připravit půdu a tipy pro úspěšný start sezóny.",
    content: [
      {
        type: "text",
        body: "Jaro je pro zahrádkáře nejkrásnější období roku. Příroda se probouzí a je čas dát zahradě nový život. Ať už máte velkou zahradu nebo jen pár truhlíků na balkoně, jaro nabízí spoustu možností.",
      },
      {
        type: "text",
        heading: "Březen — příprava půdy",
        body: "V březnu je ideální čas připravit záhony. Nakypřete půdu, přidejte kompost a naplánujte, co kam zasadíte. Pokud máte skleník nebo pařeniště, můžete začít s předpěstováním — rajčata, papriky a bylinky se sejí již nyní.",
      },
      {
        type: "tip",
        title: "Pozor na pozdní mrazy",
        body: "V Česku mohou mrazy přijít i v květnu (ledoví muži!). Choulostivé rostliny vysazujte ven až po 15. květnu, nebo je mějte připravené zakrýt netkanou textilií.",
      },
      {
        type: "text",
        heading: "Duben — čas sázení",
        body: "Duben je ideální pro výsadbu trvalek, okrasných keřů a ovocných stromů. Půda je již dostatečně prohřátá a vlhká. Vysaďte šeříky, bergénie, kosatce nebo šantu — všechny krásně kvetou a jsou nenáročné na péči.",
      },
      {
        type: "plantList",
        heading: "Nejlepší rostliny pro jarní výsadbu",
        plantIds: [
          "syringa-vulgaris",
          "bergenia-cordifolia",
          "iris-germanica",
          "nepeta-faassenii",
          "salvia-nemorosa",
          "heuchera",
          "thymus-vulgaris",
          "lavandula-angustifolia",
        ],
      },
      {
        type: "text",
        heading: "Květen — bylinkový ráj",
        body: "V květnu můžete vysazovat bylinky — bazalku, mátu, tymián, rozmarýn. Bylinky jsou vděčné rostliny: rychle rostou, krásně voní a využijete je v kuchyni. Většině stačí slunné místo a pravidelná zálivka.",
      },
      {
        type: "tip",
        title: "Mulčování šetří práci",
        body: "Po výsadbě mulčujte záhony kůrou nebo slámou. Mulč udržuje vlhkost, potlačuje plevel a chrání kořeny před výkyvy teplot. Ušetříte si zálivku i pletí.",
      },
      {
        type: "text",
        heading: "Shrnutí",
        body: "Jarní výsadba je základ úspěšné zahradní sezóny. Začněte přípravou půdy v březnu, sázejte trvalky a keře v dubnu a bylinky v květnu. Nebojte se experimentovat — zahrada je nejlepší učitelka.",
      },
    ],
  },
  {
    slug: "jak-pecovat-o-rostliny-na-balkone",
    title: "Jak pečovat o rostliny na balkoně",
    excerpt:
      "Balkon může být krásnou miniaturní zahradou. Poradíme, jaké rostliny vybrat a jak se o ně starat.",
    date: "2026-04-07",
    author: "Ta Pravá",
    heroImage: "/images/categories/balkon.png",
    tags: ["balkon", "péče", "průvodce"],
    metaDescription:
      "Praktický průvodce pěstováním rostlin na balkoně. Výběr vhodných rostlin, zálivka, hnojení a tipy pro krásný balkón po celou sezónu.",
    content: [
      {
        type: "text",
        body: "Nemáte zahradu? Nevadí! I malý balkon se dá proměnit v kvetoucí oázu. Stačí vybrat správné rostliny a dodržet pár základních pravidel. V tomto článku vám poradíme, jak na to.",
      },
      {
        type: "text",
        heading: "Jaký máte balkon?",
        body: "Než začnete nakupovat rostliny, zamyslete se nad podmínkami: Kolik světla balkon dostává? Je orientovaný na jih (hodně slunce), na sever (stín) nebo někde mezi? Fouká tam vítr? Tyto faktory určí, které rostliny se vám budou dařit.",
      },
      {
        type: "tip",
        title: "Jižní vs. severní balkon",
        body: "Na slunný jižní balkon patří levandule, petúnie a bylinky. Na stinný severní se hodí begónie, netykavky a kapradiny. Na východní/západní balkon se hodí téměř cokoliv.",
      },
      {
        type: "text",
        heading: "Výběr nádob",
        body: "Používejte květináče s drenážními otvory — stojatá voda je nepřítel číslo jedna. Větší nádoby jsou lepší než malé: lépe udržují vlhkost a kořeny mají prostor. Pro lehkost na balkoně jsou ideální plastové nebo pryskyřicové květináče.",
      },
      {
        type: "plantList",
        heading: "Nejlepší rostliny na balkon",
        plantIds: [
          "lavandula-angustifolia",
          "petunia-hybrida",
          "pelargonium-zonale",
          "ocimum-basilicum",
          "mentha-piperita",
          "tagetes-patula",
          "thymus-vulgaris",
        ],
      },
      {
        type: "text",
        heading: "Zálivka — klíč k úspěchu",
        body: "Na balkoně rostliny schnout rychleji než na záhonu, protože nádoby se prohřívají ze všech stran. V létě zalijte ráno i večer. Používejte podmísky nebo samozavlažovací truhlíky, pokud cestujete. Nikdy nezalívejte v poledním slunci — kapky na listech fungují jako lupa.",
      },
      {
        type: "tip",
        title: "Hnojení balkonových rostlin",
        body: "Rostliny v nádobách mají omezený přísun živin. Hnojte každých 14 dní tekutým hnojivem od května do září. Bylinky hnojte méně — v bohaté půdě ztrácejí aroma.",
      },
      {
        type: "text",
        heading: "Zimní péče",
        body: "Některé balkónové rostliny (levandule, bylinky) přezimují venku, pokud je zabalíte do jutoviny a nádoby postavíte na polystyren. Choulostivější druhy (petúnie, muškáty) přemístěte dovnitř nebo je pěstujte jako jednoleté.",
      },
    ],
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getLatestPosts(count: number): BlogPost[] {
  return [...blogPosts]
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, count);
}
