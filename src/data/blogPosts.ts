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
  {
    slug: "jak-na-sazeni-keru",
    title: "Jak na sázení keřů: kompletní průvodce",
    excerpt:
      "Keře tvoří páteř zahrady. Poradíme, kdy a jak je správně vysadit, aby se jim dařilo od prvního dne.",
    date: "2026-04-05",
    author: "Ta Pravá",
    heroImage: "/images/categories/kere.png",
    tags: ["zahrada", "keře", "výsadba"],
    metaDescription:
      "Kompletní průvodce sázením keřů. Kdy sázet, jak připravit jámu, správná hloubka výsadby a péče po zasazení.",
    content: [
      {
        type: "text",
        body: "Keře dodávají zahradě strukturu, barvu a intimitu. Ať už sázíte kvetoucí šeřík, hustý tavolník na živý plot nebo voňavý pustoryl — správná výsadba je základ úspěchu. V tomto článku vás provedeme celým procesem krok za krokem.",
      },
      {
        type: "text",
        heading: "Kdy sázet keře?",
        body: "Nejlepší doba pro výsadbu keřů je podzim (září–listopad) nebo časné jaro (březen–duben). Podzimní výsadba má výhodu — keř zakořeňuje přes zimu a na jaře má náskok. Kontejnerové keře lze sázet po celou vegetační sezónu, pokud zajistíte dostatečnou zálivku. Vyhněte se výsadbě v mrazech a v parném létě.",
      },
      {
        type: "tip",
        title: "Prostokořenné vs. kontejnerové",
        body: "Prostokořenné keře (bez substrátu) jsou levnější, ale sázejí se pouze na podzim nebo brzy na jaře. Kontejnerové keře mají kořenový bal a lze je sázet kdykoli. Před výsadbou kontejnerového keře jemně rozvolněte kořeny, pokud jsou stočené kolem balu.",
      },
      {
        type: "text",
        heading: "Jak připravit výsadbovou jámu",
        body: "Vykopejte jámu dvakrát širší a stejně hlubokou jako kořenový bal. Na dno přidejte vrstvu zralého kompostu smíchaného s původní zeminou. Pokud je půda těžká jílovitá, přidejte hrst písku pro lepší drenáž. Keř umístěte tak, aby kořenový krček (místo přechodu kmínku do kořenů) byl v úrovni okolního terénu — nikdy hlouběji!",
      },
      {
        type: "text",
        heading: "Správný postup výsadby",
        body: "Keř vyjměte z kontejneru, rozvolněte kořeny a umístěte do připravené jámy. Zasypejte směsí zeminy a kompostu, jemně udusejte a důkladně zalijte — i 10–20 litrů vody. Kolem keře vytvořte mělkou mísu, která zadrží vodu při dalším zalévání. Nakonec zamulčujte 5–7 cm vrstvou kůry nebo štěpky.",
      },
      {
        type: "plantList",
        heading: "Oblíbené keře pro zahradu",
        plantIds: [
          "syringa-vulgaris",
          "forsythia-intermedia",
          "hydrangea-macrophylla",
          "spiraea-japonica",
          "weigela-florida",
          "philadelphus-coronarius",
          "buddleja-davidii",
          "deutzia-gracilis",
        ],
      },
      {
        type: "tip",
        title: "Zálivka po výsadbě",
        body: "V prvním roce po výsadbě zalijte keř 1–2× týdně vydatně (10 l). Povrchové rosení nepomáhá — voda musí proniknout ke kořenům. Od druhého roku jsou většinou keře soběstačné, pokud není extrémní sucho.",
      },
      {
        type: "text",
        heading: "Řez po výsadbě",
        body: "Čerstvě vysazené keře zkraťte přibližně o třetinu — stimulujete tím větvení a keř bude hustší. Výjimkou jsou jehličnany a stálezelené keře, které se po výsadbě neřežou. U keřů kvetoucích na starém dřevě (šeřík, forsythie) řežte až po prvním kvetení.",
      },
    ],
  },
  {
    slug: "jak-pestovat-bylinky-v-kvetinaci",
    title: "Jak pěstovat bylinky v květináči: 7 bylinek, které zvládne každý",
    excerpt:
      "Čerstvé bylinky z vlastního květináče — na parapetu, balkoně i terase. Poradíme, jak na pažitku, bazalku, koriandr a další.",
    date: "2026-04-03",
    author: "Ta Pravá",
    heroImage: "/images/categories/bylinky.png",
    tags: ["bylinky", "květináč", "balkon"],
    metaDescription:
      "Návod na pěstování bylinek v květináči. Bazalka, pažitka, koriandr, rozmarýn, máta, tymián a oregano — jak na to krok za krokem.",
    content: [
      {
        type: "text",
        body: "Čerstvé bylinky z vlastního květináče mají nesrovnatelně lepší aroma než sušené z obchodu. Nepotřebujete zahradu — stačí slunný parapet, balkon nebo terasa. Vybrali jsme 7 nejlepších bylinek do květináče a ke každé přidáváme konkrétní tipy.",
      },
      {
        type: "tip",
        title: "Základní pravidla pro bylinky v nádobě",
        body: "Používejte květináče s drenážním otvorem — bylinky nesnáší stojatou vodu. Substrát smíchejte s perlitem nebo pískem (poměr 3:1) pro lepší propustnost. Většina bylinek chce plné slunce, tedy minimálně 6 hodin denně.",
      },
      {
        type: "text",
        heading: "1. Bazalka — královna kuchyně",
        body: "Bazalka miluje teplo a slunce. Sejte od dubna do tepla (klíčí při 20 °C+) nebo kupujte sazenice. Zalijte pravidelně, ale ne přes listy. Průběžně odtrhávejte květní výhony — bazalka pak roste hustěji a déle vydrží. V květináči vydrží celé léto, v zimě na parapetu s dostatkem světla i déle.",
      },
      {
        type: "text",
        heading: "2. Pažitka — nenáročná a vytrvalá",
        body: "Pažitka je vytrvalá bylinka, která přežije i zimu venku. Snáší polostín a vlhčí půdu. Stříhejte ji 2–3 cm nad zemí a rychle naroste zpět. Její fialové květy jsou jedlé a krásně vypadají v salátech. Jednou za 2–3 roky pažitku rozdělte — omlazuje ji to.",
      },
      {
        type: "text",
        heading: "3. Koriandr — rychlý a voňavý",
        body: "Koriandr roste rychle, ale také rychle vykvétá (jde do semene). Trik: sejte každé 3 týdny novou dávku, abyste měli stále čerstvé listy. Preferuje chladnější podmínky — v parném létě vykvétá rychleji. Listy i semena jsou jedlé, každé s jiným aroma.",
      },
      {
        type: "text",
        heading: "4. Rozmarýn — středomořský stálice",
        body: "Rozmarýn je stálezelený keřík, který v květináči roste léta. Vyžaduje plné slunce a propustnou půdu — nikdy ne přemokřenou. Zalijte až když je substrát suchý na dotek. Na zimu přesuňte do chladné, světlé místnosti (5–10 °C). V Česku venku nepřezimuje.",
      },
      {
        type: "text",
        heading: "5. Máta — roste jako divá",
        body: "Máta je agresivní bylinka, která se v záhonu nekontrolovatelně šíří — proto je květináč ideální řešení! Snáší polostín a vlhčí půdu. Existuje spousta odrůd: peprná, citronová, čokoládová, marocká. Sklízejte průběžně a máta bude košatější.",
      },
      {
        type: "text",
        heading: "6. Tymián — suchomilný a odolný",
        body: "Tymián pochází ze Středomoří a miluje slunce a sucho. V květináči mu dopřejte lehký, propustný substrát. Zalijte jednou týdně — přelití je hlavní příčina úhynu. Na zimu tymián většinou přežije venku, pokud květináč zabalíte do jutoviny a postavíte na polystyren.",
      },
      {
        type: "text",
        heading: "7. Oregano — italská klasika",
        body: "Oregano (dobromysl) je vytrvalá bylinka s výrazným aroma. Roste v plném slunci v propustné půdě. Je nenáročné na zálivku — stačí jednou týdně. V létě kvete drobnými růžovými kvítky, které lákají včely. Na zimu nadzemní část uschne, ale na jaře znovu vyraší.",
      },
      {
        type: "plantList",
        heading: "Všechny bylinky v našem katalogu",
        plantIds: [
          "ocimum-basilicum",
          "allium-schoenoprasum",
          "coriandrum-sativum",
          "rosmarinus-officinalis",
          "mentha-piperita",
          "thymus-vulgaris",
          "origanum-vulgare",
        ],
      },
      {
        type: "tip",
        title: "Společný květináč? Opatrně!",
        body: "Nekombinujte suchomilné bylinky (rozmarýn, tymián, oregano) s vlhkomilnými (máta, bazalka). Mají zcela jiné nároky na zálivku. Mátu vždy pěstujte zvlášť — utlačí všechno kolem sebe.",
      },
    ],
  },
  {
    slug: "jak-pestovat-jahody",
    title: "Jak pěstovat jahody: na záhonu, v truhlíku i vertikálně",
    excerpt:
      "Sladké jahody z vlastní zahrady nebo balkonu. Kompletní návod od výběru odrůdy po sklizeň.",
    date: "2026-04-01",
    author: "Ta Pravá",
    heroImage: "/images/months/06.png",
    tags: ["zahrada", "ovoce", "jahody"],
    metaDescription:
      "Kompletní průvodce pěstováním jahod. Jak sázet, zalévat, hnojit a sklízet jahody — na záhonu i v květináči na balkoně.",
    content: [
      {
        type: "text",
        body: "Jahody patří k nejoblíbenějšímu drobnému ovoci. Jsou sladké, zdravé a pěstovat je může opravdu každý — na záhoně, v truhlíku na balkoně, i ve vertikálním květináči. Stačí slunné místo, dobrá půda a trocha péče.",
      },
      {
        type: "text",
        heading: "Výběr odrůdy",
        body: "Existují tři hlavní typy: jednorázově plodící (velké plody v červnu), remontantní (plodí opakovaně do podzimu) a měsíční jahody (drobné plody, ale celé léto). Pro začátečníky doporučujeme remontantní odrůdy — sklízíte průběžně od června do října.",
      },
      {
        type: "plantList",
        heading: "Jahody v našem katalogu",
        plantIds: ["fragaria-vesca"],
      },
      {
        type: "text",
        heading: "Kdy a jak sázet",
        body: "Jahody sázejte na jaře (březen–duben) nebo v pozdním létě (srpen–září). Podzimní výsadba dává rostlinám čas zakořenit a na jaře sklízíte plnou úrodu. Sázejte do řad s roztečí 30 cm mezi rostlinami a 50 cm mezi řadami. Srdíčko (růstový bod) musí zůstat nad zemí!",
      },
      {
        type: "tip",
        title: "Mulčování je klíčové",
        body: "Pod jahody mulčujte slámou, dřevěnou štěpkou nebo speciální jahodovou textilií. Mulč brání plodům ležet na mokré zemi (hniloby), potlačuje plevel a udržuje vlhkost. Proto se jahodám anglicky říká \"strawberry\" — berry ze slámy!",
      },
      {
        type: "text",
        heading: "Zálivka a hnojení",
        body: "Jahody potřebují pravidelnou zálivku, zejména během kvetení a zrání plodů. Zalijte k zemi, ne přes listy — snížíte riziko plísní. Přihnojte na jaře kompostem nebo granulovaným hnojivem na jahody. Během plodění přidávejte draselné hnojivo (popel, kalimagnezia).",
      },
      {
        type: "text",
        heading: "Jahody na balkoně",
        body: "Jahody se skvěle hodí do truhlíků, závěsných košů i vertikálních květináčů. Zvolte nádobu hlubokou alespoň 20 cm. Použijte kvalitní substrát s perlitem, zalijte pravidelně (v létě i denně) a přihnojujte každé dva týdny. Remontantní odrůdy v truhlíku plodí celé léto.",
      },
      {
        type: "tip",
        title: "Obměna záhonu",
        body: "Jahodníky stárnou — po 3–4 letech klesá úroda. Každý rok vysazujte nové sazenice (z odnožů) na nové místo. Staré rostliny kompostujte. Jahody nedělejte po sobě na stejný záhon — hrozí choroby.",
      },
      {
        type: "text",
        heading: "Nejčastější problémy",
        body: "Šedá plíseň (botrytis): odstraňte napadené plody, mulčujte, zajistěte vzdušnost. Slimáci: nastražte pasti s pivem nebo granule. Ptáci: zakryjte síťovinou. Mšice: postřik odvarem z kopřiv nebo mýdlovou vodou.",
      },
    ],
  },
  {
    slug: "jak-vyrobit-zizali-caj",
    title: "Jak vyrobit žížalí čaj: nejlepší přírodní hnojivo",
    excerpt:
      "Žížalí čaj je tekuté zlato pro vaše rostliny. Naučte se ho vyrobit doma z vermikompostu — je to snadné a zdarma.",
    date: "2026-03-28",
    author: "Ta Pravá",
    heroImage: "/images/months/05.png",
    tags: ["hnojení", "ekologie", "návod"],
    metaDescription:
      "Návod na výrobu žížalího čaje z vermikompostu. Jak připravit, ředit a aplikovat nejlepší přírodní hnojivo pro pokojové i zahradní rostliny.",
    content: [
      {
        type: "text",
        body: "Žížalí čaj (neboli výluh z vermikompostu) je jedním z nejúčinnějších přírodních hnojiv, které si můžete vyrobit doma zcela zdarma. Je plný prospěšných mikroorganismů, humusových kyselin a živin v lehce vstřebatelné formě. Vaše rostliny ho milují — pokojové, balkónové i zahradní.",
      },
      {
        type: "text",
        heading: "Co je žížalí čaj?",
        body: "Žížalí čaj je vodní výluh ze zralého vermikompostu (kompostu zpracovaného žížalami). Nejedná se o tekutinu, která odtéká z vermikompostéru (ta se nazývá výtok a bývá méně kvalitní). Pravý žížalí čaj se vyrábí louhováním hotového vermikompostu ve vodě za přístupu vzduchu.",
      },
      {
        type: "text",
        heading: "Co budete potřebovat",
        body: "Kbelík nebo nádoba (10–20 l), zralý vermikompost (1–2 l), stará punčocha nebo pytlíkový filtr, akvarijní čerpadlo s hadicí a vzduchováním (volitelné, ale výrazně zlepšuje kvalitu), voda bez chlóru (dešťová nebo odstátá z kohoutku přes noc). Případně lžíce melasy jako potrava pro mikroorganismy.",
      },
      {
        type: "text",
        heading: "Postup výroby — krok za krokem",
        body: "1. Naplňte punčochu nebo filtr vermikompostem a zavažte.\n\n2. Ponořte do kbelíku s vodou (poměr přibližně 1 díl kompostu na 5 dílů vody).\n\n3. Pokud máte akvarijní čerpadlo, zapněte probublávání — aerobní proces podporuje růst prospěšných bakterií.\n\n4. Nechte louhovat 24–48 hodin za občasného promíchání.\n\n5. Vyjměte pytlík s kompostem (vrátíte zpět do vermikompostéru). Čaj je hotový!",
      },
      {
        type: "tip",
        title: "Proč vzduchování?",
        body: "Probublávání vzduchem podporuje aerobní bakterie, které jsou pro rostliny nejprospěšnější. Bez vzduchování vzniká anaerobní výluh — stále užitečný, ale méně účinný a může zapáchat. Pokud nemáte čerpadlo, alespoň čaj 3–4× denně důkladně promíchejte.",
      },
      {
        type: "text",
        heading: "Jak žížalí čaj aplikovat",
        body: "Hotový čaj zřeďte vodou v poměru 1:10 (jedna část čaje, deset částí vody). Zalijte rostliny ke kořenům nebo použijte jako listový postřik (přes jemný rozprašovač). Aplikujte ráno nebo večer, ne v poledním slunci. Opakujte každých 14 dní během vegetační sezóny.",
      },
      {
        type: "tip",
        title: "Používejte čerstvý",
        body: "Žížalí čaj obsahuje živé mikroorganismy — použijte ho do 24–48 hodin po výrobě. Delším stáním mikroorganismy odumírají a účinek klesá. Nevyrábějte zásoby, ale raději menší dávky častěji.",
      },
      {
        type: "text",
        heading: "Pro jaké rostliny se hodí?",
        body: "Žížalí čaj je univerzální — hodí se pro pokojové rostliny, bylinky, zeleninu, jahody, keře i stromy. Obzvlášť ho ocení rajčata, papriky, okurky a rostliny náročné na živiny. Nemůžete jím rostliny přehnojit — na rozdíl od chemických hnojiv je šetrný a přirozený.",
      },
      {
        type: "text",
        heading: "Nemáte vermikompostér?",
        body: "Žížalí čaj můžete koupit hotový v zahradnictvích, ale vlastní vermikompostér je skvělá investice. Stojí od 500 Kč, zabere minimum místa (i v bytě pod dřezem) a kromě hnojiva získáte i zralý vermikompost pro přesazování a vylepšování půdy. Žížaly zpracují vaše kuchyňské odpady — slupky, kávovou sedlinu, čajové sáčky.",
      },
    ],
  },
  {
    slug: "jak-se-zbavit-msic",
    title: "Jak se zbavit mšic: přírodní i účinné metody",
    excerpt:
      "Mšice jsou nejčastějším škůdcem na zahradě i v bytě. Poradíme, jak se jich zbavit bez chemie i s ní.",
    date: "2026-03-25",
    author: "Ta Pravá",
    heroImage: "/images/months/07.png",
    tags: ["škůdci", "zahrada", "pokojové"],
    metaDescription:
      "Jak se zbavit mšic přírodními i chemickými metodami. Osvědčené domácí postřiky, prevence a biologická ochrana proti mšicím.",
    content: [
      {
        type: "text",
        body: "Mšice jsou drobní sající hmyz, který napadá téměř všechny rostliny — od růží přes bylinky po pokojové květiny. Vysávají rostlinné šťávy, oslabují rostlinu a přenášejí virové choroby. Dobrou zprávou je, že se jich dá poměrně snadno zbavit, často i bez chemie.",
      },
      {
        type: "text",
        heading: "Jak mšice poznat",
        body: "Mšice jsou 1–3 mm velké, zelené, černé, hnědé nebo růžové. Shromažďují se na nových výhoncích, pod listy a kolem poupat. Typickým projevem je slepování listů medovicí (lepkavý výměšek), zkroucené deformované listy a přítomnost mravenců, kteří mšice ‚chovají' kvůli medovici.",
      },
      {
        type: "text",
        heading: "Metoda 1: Mýdlová voda",
        body: "Nejjednodušší a nejúčinnější domácí metoda. Rozpusťte 1 lžíci tekutého mýdla (nejlépe draselného/zahradnického) v 1 litru vlažné vody. Postříkejte napadené části rostliny ze všech stran, zejména spodní stranu listů. Mýdlo rozpustí voskový obal mšic. Opakujte každé 3–4 dny.",
      },
      {
        type: "tip",
        title: "Nepoužívejte jar nebo saponáty",
        body: "Běžné saponáty obsahují přísady, které mohou rostlinám uškodit. Použijte čisté draselné mýdlo (prodává se jako zahradnické mýdlo) nebo kastilské mýdlo. Alternativně poslouží i jemné dětské mýdlo bez parfemace.",
      },
      {
        type: "text",
        heading: "Metoda 2: Kopřivový odvar",
        body: "Nasbírejte 1 kg čerstvých kopřiv, zalijte 10 l vody a nechte 24 hodin louhovat (ne kvasit!). Přeceďte a postřikujte napadené rostliny. Kopřivový odvar mšice odpuzuje a zároveň posiluje rostliny — obsahuje dusík, železo a křemík. Je zcela ekologický a zdarma.",
      },
      {
        type: "text",
        heading: "Metoda 3: Biologická ochrana",
        body: "Přirození nepřátelé mšic jsou slunéčka sedmitečná, zlatoočky, pestřenky a ptáci. Vytvořte na zahradě prostředí, které je láká: nechte kousek zahrady ‚divoký', pověste ptačí budky, vysaďte kvetoucí rostliny pro pestřenky. Jedno slunéčko sežere až 100 mšic denně!",
      },
      {
        type: "text",
        heading: "Metoda 4: Odvar z česneku",
        body: "Rozmačkejte 5 stroužků česneku, zalijte 1 litrem vroucí vody a nechte 24 hodin louhovat. Přeceďte, přidejte kapku mýdla (jako smáčedlo) a postříkejte rostliny. Česneková silice účinně odpuzuje mšice. Opakujte každý týden.",
      },
      {
        type: "text",
        heading: "Kdy sáhnout po chemii",
        body: "Pokud přírodní metody nezabírají nebo je napadení masivní, použijte přípravky na bázi pyrethrinu (přírodní insekticid z chryzantém) nebo neonikotinoidů. Vždy čtěte etiketu, dodržujte ochranné lhůty a nestříkejte v době letu včel. Chemii na jedlé rostliny (bylinky, zeleninu) používejte jen jako poslední možnost.",
      },
      {
        type: "tip",
        title: "Prevence je nejlepší obrana",
        body: "Zdravé, dobře živené rostliny odolávají mšicím lépe. Nepřehnojujte dusíkem (měkké výhony lákají mšice). Kontrolujte rostliny pravidelně — chyťte napadení včas. Vysaďte levanduli nebo šantu v blízkosti ohrožených rostlin — jejich vůně mšice odpuzuje.",
      },
    ],
  },
  {
    slug: "kdy-a-jak-presazovat-pokojove-rostliny",
    title: "Kdy a jak přesazovat pokojové rostliny",
    excerpt:
      "Přesazování je pro pokojové rostliny jako restart. Kdy je správný čas, jaký substrát zvolit a jak na to krok za krokem.",
    date: "2026-03-20",
    author: "Ta Pravá",
    heroImage: "/images/categories/pokojove.png",
    tags: ["pokojové", "péče", "průvodce"],
    metaDescription:
      "Kdy a jak přesazovat pokojové rostliny. Správný čas, výběr květináče, substrát a postup přesazování krok za krokem.",
    content: [
      {
        type: "text",
        body: "Přesazování je jednou z nejdůležitějších věcí, které můžete pro své pokojové rostliny udělat. Starý vyčerpaný substrát vyměníte za čerstvý, kořeny dostanou prostor a rostlina dostane nový impulz k růstu. Ale pozor — přesazovat v nesprávný čas nebo nesprávně může uškodit.",
      },
      {
        type: "text",
        heading: "Kdy přesazovat?",
        body: "Ideální čas je jaro (únor–duben), kdy rostliny začínají novou vegetační sezónu. Přesazování v tomto období dává rostlině celé léto na to, aby zakořenila v novém substrátu. Nikdy nepřesazujte v zimě (rostlina odpočívá) ani rostlinu, která právě kvete — stres může způsobit opadání květů.",
      },
      {
        type: "text",
        heading: "Signály, že je čas přesadit",
        body: "Kořeny vyrůstají z drenážního otvoru. Voda proteče květináčem okamžitě, aniž by se vsákla. Růst se zpomalil, přestože světlo a zálivka jsou v pořádku. Rostlina je nestabilní a padá. Substrát je zbělalý (zasolený) nebo se začal rozpadat.",
      },
      {
        type: "tip",
        title: "O kolik větší květináč?",
        body: "Vždy jen o 2–3 cm v průměru větší než dosavadní. Příliš velký květináč = příliš mnoho vlhkého substrátu kolem malých kořenů = hniloba. Výjimkou jsou rychle rostoucí druhy (monstera, filodendron), kde můžete zvolit o 4–5 cm větší nádobu.",
      },
      {
        type: "text",
        heading: "Výběr substrátu",
        body: "Univerzální substrát s příměsí perlitu (pro propustnost) vyhovuje většině pokojovek. Sukulenty a kaktusy potřebují písčitý substrát s minimem rašeliny. Orchideje rostou v kůře, ne v zemině. Kapradiny a kalátey ocení substrát s vyšším podílem rašeliny pro vlhkost. Vždy volte kvalitní substrát — levné směsi se časem zhutní.",
      },
      {
        type: "text",
        heading: "Postup přesazování",
        body: "1. Den předem rostlinu zalijte — snadněji vyjde z květináče. 2. Nový květináč vyložte střepem přes drenážní otvor. 3. Nasypte vrstvu čerstvého substrátu na dno. 4. Opatrně vyjměte rostlinu, setřeste starý substrát a odřízněte hnilé kořeny. 5. Umístěte do nového květináče, dosypte substrát a jemně udusejte. 6. Zalijte a postavte na stálé místo.",
      },
      {
        type: "plantList",
        heading: "Oblíbené pokojovky k přesazení",
        plantIds: [
          "monstera-deliciosa",
          "ficus-elastica",
          "spathiphyllum",
          "chlorophytum-comosum",
          "dracaena-marginata",
          "zamioculcas-zamiifolia",
          "epipremnum-aureum",
          "aloe-vera",
        ],
      },
      {
        type: "tip",
        title: "Péče po přesazení",
        body: "Po přesazení nehnojte 4–6 týdnů — čerstvý substrát obsahuje dostatek živin a kořeny potřebují čas na zahojení. Nestavte rostlinu na přímé slunce. Zalijte mírně a pak vyčkejte, až substrát proschne, než zalijete znovu.",
      },
      {
        type: "text",
        heading: "Kdy nepřesazovat, ale jen doplnit",
        body: "U velkých rostlin (fíkusy, dracény), které se těžko přesazují, stačí každé jaro odebrat horních 3–5 cm starého substrátu a nahradit čerstvým. Říká se tomu ‚topdressing' a rostlina tím získá živiny bez stresu z přesazování.",
      },
    ],
  },
  {
    slug: "jedovate-rostliny-pro-kocky-a-psy",
    title: "Jedovaté rostliny pro kočky a psy: na co si dát pozor",
    excerpt:
      "Které pokojové i zahradní rostliny mohou ohrozit vaše mazlíčky? Přehled nebezpečných druhů a bezpečných alternativ.",
    date: "2026-03-15",
    author: "Ta Pravá",
    heroImage: "/images/categories/pokojove.png",
    tags: ["bezpečnost", "pokojové", "mazlíčci"],
    metaDescription:
      "Přehled jedovatých rostlin nebezpečných pro kočky a psy. Které rostliny mohou ohrozit mazlíčky a jaké bezpečné alternativy zvolit.",
    content: [
      {
        type: "text",
        body: "Pokud máte doma kočku nebo psa, výběr rostlin vyžaduje zvýšenou pozornost. Mnoho oblíbených pokojových i zahradních rostlin obsahuje látky, které mohou mazlíčkům způsobit trávicí potíže, podráždění nebo v krajním případě i vážnější otravu. Připravili jsme přehled nejčastějších nebezpečných druhů a bezpečných alternativ.",
      },
      {
        type: "text",
        heading: "Proč jsou některé rostliny nebezpečné?",
        body: "Rostliny se brání býložravcům pomocí chemických látek — alkaloidů, glykosidů, oxalátů a dalších. Pro člověka jsou tyto látky většinou neškodné (nedáváme si je do úst), ale kočky a psi rostliny okusují, žvýkají nebo olizují. Kočky jsou obzvláště ohrožené, protože nemají enzymy pro odbourání některých toxinů.",
      },
      {
        type: "plantList",
        heading: "Nejčastější jedovaté pokojové rostliny",
        plantIds: [
          "monstera-deliciosa",
          "spathiphyllum",
          "epipremnum-aureum",
          "ficus-elastica",
          "sansevieria-trifasciata",
          "zamioculcas-zamiifolia",
          "dracaena-marginata",
          "philodendron-scandens",
          "aloe-vera",
          "crassula-ovata",
        ],
      },
      {
        type: "text",
        heading: "Monstera, filodendron a pothos",
        body: "Tyto oblíbené pokojovky obsahují krystalky šťavelanu vápenatého, které při okousání způsobují pálení a otok úst, slinění, zvracení a potíže s polykáním. Otravu většinou provází silná bolest — zvíře obvykle přestane žvýkat po prvním kousnutí. Přesto může dojít k otoku dýchacích cest.",
      },
      {
        type: "text",
        heading: "Tchýnin jazyk a zamiokulkas",
        body: "Obsahují saponiny, které při požití způsobují nevolnost, zvracení a průjem. U koček mohou vyvolat i nadměrné slinění. Naštěstí nemají příjemnou chuť, takže k vážné otravě dochází vzácně — ale je lepší nepodceňovat.",
      },
      {
        type: "plantList",
        heading: "Nebezpečné zahradní rostliny",
        plantIds: [
          "taxus-baccata",
          "rhododendron-hybridum",
          "delphinium-elatum",
          "lupinus-polyphyllus",
          "buxus-sempervirens",
          "hydrangea-macrophylla",
          "iris-germanica",
          "aquilegia-vulgaris",
        ],
      },
      {
        type: "text",
        heading: "Tis, rododendron a ostrožka — pozor na zahradě",
        body: "Tis červený je jednou z nejjedovatějších rostlin v českých zahradách — všechny části kromě dužiny plodu jsou silně jedovaté. Rododendron obsahuje grayanotoxiny, které mohou způsobit zvracení, srdeční arytmie a kolaps. Ostrožka a náprstník obsahují alkaloidy nebezpečné pro srdce. U těchto rostlin je kontakt vážnou záležitostí a vyžaduje okamžitou návštěvu veterináře.",
      },
      {
        type: "tip",
        title: "Co dělat při otravě",
        body: "Pokud máte podezření, že mazlíček sežral jedovatou rostlinu: 1. Nevyvolávejte zvracení (některé toxiny poškozují i při zpětném průchodu). 2. Poznamenejte si název rostliny a vyfotografujte ji. 3. Okamžitě kontaktujte veterináře nebo veterinární pohotovost. 4. Vezměte s sebou vzorek rostliny.",
      },
      {
        type: "plantList",
        heading: "Bezpečné alternativy pro domácnost s mazlíčky",
        plantIds: [
          "chlorophytum-comosum",
          "calathea-orbifolia",
          "aspidistra-elatior",
          "pilea-peperomioides",
          "maranta-leuconeura",
          "hoya-carnosa",
          "echeveria-elegans",
        ],
      },
      {
        type: "text",
        heading: "Jak minimalizovat riziko",
        body: "Umístěte jedovaté rostliny mimo dosah — na vysoké poličky, do závěsných košů nebo do uzavřených místností. Kočky jsou šplhavci, takže ‚mimo dosah' pro kočku prakticky neexistuje — u koček raději volte bezpečné druhy. Nabídněte kočce kočičí trávu jako bezpečnou alternativu k okusování. V katalogu TaPrava.cz můžete filtrovat rostliny bezpečné pro mazlíčky.",
      },
    ],
  },
  {
    slug: "planovani-a-vysadba-trvalkovych-zahonu",
    title: "Plánování a výsadba trvalkových záhonů",
    excerpt:
      "Jak naplánovat záhon, který kvete od jara do podzimu. Výběr trvalek, kombinace a praktické tipy pro krásný výsledek.",
    date: "2026-03-10",
    author: "Ta Pravá",
    heroImage: "/images/categories/trvalky.png",
    tags: ["zahrada", "trvalky", "plánování"],
    metaDescription:
      "Jak naplánovat a vysadit trvalkový záhon. Výběr rostlin, kombinace výšek a barev, sezónní plánování a praktické tipy.",
    content: [
      {
        type: "text",
        body: "Dobře naplánovaný trvalkový záhon je jako orchestr — každá rostlina hraje svou roli ve správný čas a celek vytváří harmonii barev, textur a výšek od jara do podzimu. Na rozdíl od letniček trvalky nemusíte každý rok znovu kupovat — jednou vysadíte a těšíte se z nich roky.",
      },
      {
        type: "text",
        heading: "Krok 1: Analyzujte stanoviště",
        body: "Než začnete vybírat rostliny, pozorujte záhon: Kolik hodin denně na něj svítí slunce? Je půda spíše suchá, nebo vlhká? Písčitá, nebo jílovitá? Tyto faktory určují, které trvalky se vám budou dařit. Nepokoušejte se sázet slunomilné trvalky do stínu — vždy pracujte s podmínkami, které máte.",
      },
      {
        type: "text",
        heading: "Krok 2: Plánujte dobu kvetení",
        body: "Základ úspěchu je kombinace trvalek, které kvetou postupně celou sezónu. Rozdělte si rostliny do tří skupin: jarní (březen–květen: bergénie, kosatce, šanta), letní (červen–srpen: třapatky, denivky, plamenky, šalvěje) a podzimní (září–listopad: astry, rozchodníky, okrasné trávy). Cílem je, aby vždy něco kvetlo.",
      },
      {
        type: "tip",
        title: "Pravidlo třetin",
        body: "V každém záhonu by měla být přibližně třetina rostlin kvetoucích na jaře, třetina v létě a třetina na podzim. Přidejte okrasné trávy a stálezelené trvalky pro strukturu i v zimě.",
      },
      {
        type: "text",
        heading: "Krok 3: Komponujte výšky",
        body: "Vzadu (nebo uprostřed u ostrůvkového záhonu) umístěte vysoké trvalky (120–180 cm): třapatky, plamenky, okrasné trávy. Uprostřed střední výšky (50–100 cm): šalvěje, denivky, kakosty, čechravy. Vpředu nízké trvalky a půdopokryvné (10–40 cm): dlužichy, šanta, rozchodníky, bergénie. Toto vrstvení vytváří hloubku a dynamiku.",
      },
      {
        type: "plantList",
        heading: "Osvědčené trvalky pro slunný záhon",
        plantIds: [
          "echinacea-purpurea",
          "rudbeckia-fulgida",
          "salvia-nemorosa",
          "hemerocallis",
          "nepeta-faassenii",
          "geranium-rozanne",
          "phlox-paniculata",
          "heuchera",
        ],
      },
      {
        type: "text",
        heading: "Krok 4: Barevná harmonie",
        body: "Omezte se na 2–3 hlavní barvy a jejich odstíny. Osvědčené kombinace: fialová + žlutá (šalvěj + třapatka), růžová + bílá + stříbrná (echinacey + plamenky + stachys), teplé tóny oranžová + červená + žlutá (denivky + rudbekie). Bílá barva funguje jako univerzální ‚smiřovač' — vložte ji mezi konfliktnější barvy.",
      },
      {
        type: "plantList",
        heading: "Trvalky pro stinný záhon",
        plantIds: [
          "hosta",
          "astilbe",
          "bergenia-cordifolia",
          "geranium-macrorrhizum",
        ],
      },
      {
        type: "tip",
        title: "Sázejte ve skupinách",
        body: "Nikdy nesázejte trvalky po jednom kuse náhodně — efekt je chaotický. Sázejte ve skupinách 3, 5 nebo 7 kusů jednoho druhu (vždy lichý počet — vypadá přirozeněji). Opakujte stejné druhy na několika místech záhonu pro vizuální rytmus.",
      },
      {
        type: "text",
        heading: "Krok 5: Výsadba a péče",
        body: "Před výsadbou rozložte hrnky na záhon a upravte rozmístění, než začnete kopat. Dodržujte doporučené rozestupy — trvalky se za 2–3 roky rozrostou a zaplní mezery. V prvním roce mulčujte a pravidelně zalijte. Od druhého roku jsou většinou trvalky soběstačné. Na jaře přihnojte kompostem a každé 3–4 roky přerostlé trsy rozdělte.",
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
