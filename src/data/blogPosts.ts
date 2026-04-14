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
  {
    slug: "jak-ochranit-rostliny-pred-mrazem",
    title: "Jak ochránit rostliny před mrazem: praktický průvodce přezimováním",
    excerpt:
      "Mráz dokáže zničit i odolné rostliny, pokud nejsou připravené. Poradíme, jak je ochránit — a které mráz vůbec nevadí.",
    date: "2026-04-07",
    author: "Ta Pravá",
    heroImage: "/images/months/01.png",
    tags: ["zahrada", "zima", "péče"],
    metaDescription:
      "Jak ochránit rostliny před mrazem. Praktické tipy na přezimování, mulčování, zakrývání a přehled mrazuvzdorných rostlin.",
    content: [
      {
        type: "text",
        body: "Mráz je přirozená součást našeho klimatu, ale pro mnohé zahradní i balkónové rostliny může být smrtelný. Přitom stačí několik jednoduchých opatření, aby vaše rostliny zimu přežily v pořádku. A některé druhy mráz dokonce potřebují — vernalizace (chladový impulz) jim pomáhá kvést.",
      },
      {
        type: "text",
        heading: "Kdy začít s ochranou?",
        body: "Ideální je připravit se ještě před prvními mrazy, tedy v říjnu až listopadu. Sledujte předpověď počasí — škodí hlavně náhlé mrazy po teplém podzimu, kdy rostliny ještě neztuhly. Pozor na pozdní jarní mrazy (duben–květen), které mohou poškodit rašící výhony a květy ovocných stromů.",
      },
      {
        type: "text",
        heading: "Mulčování — nejjednodušší ochrana",
        body: "Vrstva mulče (10–15 cm) z listí, slámy, kůry nebo štěpky kolem kořenů chrání rostliny před promrznutím půdy. Mulč funguje jako izolace — udržuje stabilní teplotu a brání zamrznutí kořenového systému. Na jaře mulč odhrňte, aby se půda rychleji prohřála.",
      },
      {
        type: "text",
        heading: "Zakrývání rostlin",
        body: "Citlivé keře a trvalky zakryjte netkanou textilií (agryl), jutou nebo speciálními zimními návleky. Nikdy nepoužívejte igelitovou fólii — pod ní se sráží vlhkost a rostlina hnije. Textilie musí být prodyšná. Kmen mladých stromků obalte jutovou páskou proti mrazovým trhlinám.",
      },
      {
        type: "tip",
        title: "Květináče na balkoně",
        body: "Květináče promrzají rychleji než záhony. Postavte je na polystyrenovou desku (izolace od studené podlahy), obalte bublinkovou fólií nebo jutou a seskupte je k sobě — vzájemně se zahřívají. Citlivé pokojovky přesuňte dovnitř do chladné, světlé místnosti (5–10 °C).",
      },
      {
        type: "text",
        heading: "Zálivka před mrazem",
        body: "Suchá půda promrzá rychleji a hlouběji než vlhká. Před očekávanými mrazy zalijte stálezelené keře, jehličnany a trvalky — zvláště pokud byl podzim suchý. Stálezelené rostliny odpařují vodu i v zimě, a pokud kořeny zamrznou, nedokáží ji doplnit. Vzniká tzv. mrazové sucho, které je častější příčinou úhynu než samotný mráz.",
      },
      {
        type: "text",
        heading: "Řez a hnojení — co nedělat",
        body: "Na podzim nepřihnojujte dusíkem — stimuluje měkký růst, který mráz snadno poškodí. Neprovádějte řez pozdě na podzim — rány nestihnou zacelovat. Trvalky a okrasné trávy nechte přes zimu neořezané — suché nadzemní části chrání kořenový systém.",
      },
      {
        type: "plantList",
        heading: "Rostliny, kterým mráz nevadí (do -30 °C a více)",
        plantIds: [
          "convallaria-majalis",
          "hippophae-rhamnoides",
          "juniperus-communis",
          "cornus-alba",
          "syringa-vulgaris",
          "spiraea-japonica",
          "bergenia-cordifolia",
          "pinus-mugo",
        ],
      },
      {
        type: "text",
        heading: "Které rostliny potřebují extra ochranu?",
        body: "Nejvíce ohrožené jsou: nově vysazené rostliny (nezakořeněné), stálezelené keře (hortenzie, rododendrony, vavříny), středomořské byliny (rozmarýn, levandule), růže (kořenový krček zakopejte hlínou), citlivé trvalky (jiřiny — hlízy vykopat a uskladnit). Každou zimu počítejte s tím, že některé rostliny nepřežijí — to je normální součást zahradničení.",
      },
      {
        type: "tip",
        title: "Sněhová pokrývka je nejlepší izolace",
        body: "Sníh chrání rostliny před mrazem lépe než cokoli jiného — pod 30 cm sněhu se teplota půdy drží kolem 0 °C, i když je venku -20 °C. Neodklízejte sníh ze záhonů. Z keřů a stromů ale opatrně setřepte těžký mokrý sníh, aby se nelámaly větve.",
      },
    ],
  },
  {
    slug: "kvetouci-pokojove-rostliny-ktere-vam-rozkvetu-byt",
    title: "Kvetoucí pokojové rostliny, které vám rozkvetou byt",
    excerpt:
      "Přehled nejkrásnějších kvetoucích pokojovek. Jaké podmínky potřebují a jak je přimět kvést znovu a znovu.",
    date: "2026-04-06",
    author: "Ta Pravá",
    heroImage: "/images/blog-kvetouci-pokojovky.png",
    tags: ["pokojové", "kvetení", "inspirace"],
    metaDescription:
      "Nejkrásnější kvetoucí pokojové rostliny pro váš byt. Tipy na péči, jak podpořit kvetení a přehled oblíbených druhů.",
    content: [
      {
        type: "text",
        body: "Pokojové rostliny nemusí být jen zelené. Existuje celá řada druhů, které vás odmění pravidelnými květy — od elegantních orchidejí přes tropické anturie po nenáročné begónie. Kvetoucí pokojovky dokáží proměnit každý interiér a přinést kousek přírody do bytu i v zimních měsících.",
      },
      {
        type: "text",
        heading: "Lopatkovec (Spathiphyllum) — kvetoucí i ve stínu",
        body: "Lopatkovec je raritou mezi kvetoucími pokojovkami — kvete i v polostínu. Jeho bílé toulcovité květy se objevují několikrát do roka a vydrží týdny. Snáší nižší světlo, ale kvete lépe u okna. Zalijte, když povrch substrátu vyschne. Bonus: lopatkovec čistí vzduch a je nenáročný na péči.",
      },
      {
        type: "text",
        heading: "Begónie elatior — záplava barev",
        body: "Begónie elatior patří k nejvděčnějším kvetoucím pokojovkám. Kvete v teplých barvách — červená, růžová, oranžová, žlutá i bílá — a to měsíce v kuse. Potřebuje světlé místo bez přímého slunce, pravidelnou zálivku a přihnojení během kvetení. Po odkvětu ji seřízněte a ona znovu vykvete.",
      },
      {
        type: "text",
        heading: "Brambořík (Cyclamen) — zimní hvězda",
        body: "Brambořík kvete od podzimu do jara, kdy většina pokojovek odpočívá. Miluje chlad (15–18 °C) a světlo. Zalijte odspodu — vodu nalijte do misky a po 30 minutách přebytek slijte. Po odkvětu nechte hlízu v suchém substrátu odpočívat přes léto a na podzim obnovte zálivku.",
      },
      {
        type: "text",
        heading: "Voskovka (Hoya) — voňavá kráska",
        body: "Voskovka tvoří úchvatné hrozny voskových květů s omamnou vůní, zejména večer. Je to popínavá/převislá rostlina ideální do závěsného košíku. Klíč k květení: hodně světla, mírná zálivka a neřezat stonky po odkvětu — na stejném místě vykvete znovu. Voskovka je trpělivá — poprvé kvete až po 2–3 letech.",
      },
      {
        type: "text",
        heading: "Ibišek pokojový (Hibiscus) — tropická exotika",
        body: "Pokojový ibišek tvoří velké, nápadné květy v červené, růžové, oranžové nebo žluté barvě. Každý květ vydrží jen den, ale rostlina jich produkuje spoustu. Potřebuje plné slunce (jižní okno), pravidelnou zálivku a hnojení v sezóně. Na zimu omezíte zálivku a přesunete do chladnější místnosti.",
      },
      {
        type: "plantList",
        heading: "Kvetoucí pokojovky v našem katalogu",
        plantIds: [
          "spathiphyllum",
          "begonia-elatior",
          "cyclamen-persicum",
          "hoya-carnosa",
          "hibiscus-syriacus",
          "citrus-limon",
          "tradescantia-zebrina",
          "coleus-scutellarioides",
        ],
      },
      {
        type: "text",
        heading: "Jak přimět pokojovky k opětovnému kvetení",
        body: "Mnoho pokojovek po nákupu odkvete a pak už jen zelenají. Většinou jim chybí správné podmínky pro nasazení poupat:\n\n1. Dostatek světla — většina kvetoucích pokojovek potřebuje minimálně 4–6 hodin denního světla.\n\n2. Chladnější zimní odpočinek — brambořík, citroník a mnohé další potřebují 2–3 měsíce chladnějších teplot (10–15 °C).\n\n3. Správné hnojení — během růstu a kvetení přihnojujte hnojivem s vyšším podílem fosforu a draslíku (podpora kvetení), ne dusíku (ten podporuje jen listy).\n\n4. Trpělivost — některé rostliny (voskovka, citroník) kvetou až po několika letech.",
      },
      {
        type: "tip",
        title: "Citroník — kvete a plodí v bytě",
        body: "Citroník je skvělá volba pro slunné okno nebo zimní zahradu. Kvete voňavými bílými květy a při dobrých podmínkách nasadí i plody. Přes léto ho vystavte ven, přes zimu chladná světlá místnost (5–12 °C). Zalijte dešťovou vodou — nesnáší tvrdou vodu z kohoutku.",
      },
    ],
  },
  {
    slug: "rostliny-na-zivy-plot-jak-vybrat-a-vysadit",
    title: "Rostliny na živý plot: jak vybrat, vysadit a udržovat",
    excerpt:
      "Živý plot je krásnější a ekologičtější než betonová zeď. Přehled nejlepších druhů a návod na výsadbu krok za krokem.",
    date: "2026-04-04",
    author: "Ta Pravá",
    heroImage: "/images/blog-zivy-plot.png",
    tags: ["zahrada", "živý plot", "keře"],
    metaDescription:
      "Jaké rostliny na živý plot? Habr, tis, zerav, ptačí zob, buk. Kompletní průvodce výběrem, výsadbou a střihem živého plotu.",
    content: [
      {
        type: "text",
        body: "Živý plot je jednou z nejlepších investic do zahrady. Poskytuje soukromí, tlumí hluk, chrání před větrem, zachytává prach a je domovem pro ptáky a hmyz. Na rozdíl od dřevěného nebo betonového plotu s léty krásnější. Klíčem je správný výběr rostlin a trpělivost.",
      },
      {
        type: "text",
        heading: "Stálezelený, nebo opadavý?",
        body: "Stálezelené ploty (zerav, tis, bobkovišeň) poskytují celoroční soukromí, ale vypadají celý rok stejně. Opadavé ploty (habr, buk) jsou na jaře a v létě nádherně zelené, na podzim získají zlatou barvu a přes zimu propouštějí více světla — ale habr si suché listy drží až do jara. Listnaté ploty jsou ekologicky hodnotnější — kvetou, plodí a nabízejí úkryt hmyzu.",
      },
      {
        type: "text",
        heading: "Nejlepší rostliny na živý plot",
        body: "Habr obecný: nejoblíbenější listnatý plot v ČR. Rychlý růst, snese řez, drží suché listy přes zimu. Vhodný pro většinu stanovišť.\n\nZerav západní (thúje): klasika mezi stálezelenými ploty. Rychlý růst, hustý, cenově dostupný. Nesnese silný řez do starého dřeva.\n\nTis červený: pomalý růst, ale výjimečně dlouhověký a snese i radikální řez. Jedovatý — nevhodný tam, kde se pohybují malé děti.\n\nPtačí zob obecný: nenáročný polozelený keř. Rychle roste, kvete bíle a plody milují ptáci.\n\nBuk lesní: luxusní vzhled, měděné podzimní listy drží přes zimu. Pomalejší růst, ale krásný po celý rok.\n\nBobkovišeň: stálezelená s velkými lesklými listy. Rychlý růst, tropický vzhled, ale citlivější na silné mrazy.",
      },
      {
        type: "plantList",
        heading: "Rostliny na živý plot v katalogu",
        plantIds: [
          "carpinus-betulus",
          "thuja-occidentalis",
          "taxus-baccata",
          "ligustrum-vulgare",
          "fagus-sylvatica",
          "prunus-laurocerasus",
          "buxus-sempervirens",
          "berberis-thunbergii",
          "ilex-aquifolium",
          "pyracantha-coccinea",
        ],
      },
      {
        type: "text",
        heading: "Jak vysadit živý plot",
        body: "1. Vytyčte linii plotu pomocí provázku a kolíků.\n\n2. Vykopejte rýhu 40–50 cm širokou a hlubokou (ne jednotlivé jámy).\n\n3. Na dno přidejte zralý kompost smíchaný s původní zeminou.\n\n4. Sázejte 3–5 rostlin na běžný metr (podle druhu a požadované hustoty).\n\n5. Kořenový krček nechte v úrovni terénu.\n\n6. Zasypejte, udusejte a důkladně zalijte.\n\n7. Zamulčujte kůrou v pásu kolem plotu.",
      },
      {
        type: "tip",
        title: "Kolik rostlin na metr?",
        body: "Habr, buk: 4–5 ks/m. Zerav: 3–4 ks/m. Tis: 3–4 ks/m. Ptačí zob: 4–5 ks/m. Bobkovišeň: 2–3 ks/m. Při dvouřadové výsadbě (cik-cak) je plot hustší, ale potřebujete 1,5× více sazenic.",
      },
      {
        type: "text",
        heading: "Kdy a jak stříhat",
        body: "První řez proveďte hned po výsadbě — zkraťte o třetinu, aby se rostliny větvily od spodu. Tvarový řez provádějte 2× ročně: koncem června a v srpnu/září. Stříhejte tak, aby byl plot nahoře o něco užší než dole (tvar lichobežníku) — spodní větve pak dostanou dostatek světla a neholí se.",
      },
      {
        type: "text",
        heading: "Nejčastější chyby",
        body: "Příliš těsná výsadba: rostliny se tlačí a spodek plotu se holí. Pozdní stříhání: řez v říjnu nestihne dozrát a mráz poškodí čerstvé výhony. Zapomenutá zálivka v prvním roce: nově vysazený plot potřebuje pravidelnou zálivku 1–2 roky. Řez do starého dřeva u zeravů: thúje z holého dřeva nevyraší — na rozdíl od habru nebo tisu.",
      },
    ],
  },
  {
    slug: "prisvetlovani-pokojovych-rostlin-kompletni-pruvodce",
    title: "Přisvětlování pokojových rostlin: kompletní průvodce",
    excerpt:
      "V zimě i v tmavém bytě rostlinám chybí světlo. Jak funguje přisvětlování, co potřebujete a kolik to stojí?",
    date: "2026-04-02",
    author: "Ta Pravá",
    heroImage: "/images/blog-prisvetlovani.png",
    tags: ["pokojové", "péče", "přisvětlování"],
    metaDescription:
      "Kompletní průvodce přisvětlováním pokojových rostlin. Jak vybrat LED lampu, kolik hodin svítit, spotřeba elektřiny a tipy pro začátečníky.",
    content: [
      {
        type: "text",
        body: "Světlo je pro rostliny to, co jídlo pro nás — bez něj nepřežijí. V českých podmínkách je od října do března den krátký a intenzita světla nízká. A pokud máte byt s okny na sever nebo rostliny stojí daleko od okna, mohou strádat i v létě. Řešením je přisvětlování — a díky moderním LED technologiím je dnes dostupné, účinné a levné.",
      },
      {
        type: "text",
        heading: "Proč rostliny potřebují více světla?",
        body: "Rostliny využívají světlo k fotosyntéze — procesu, kterým přeměňují oxid uhličitý a vodu na cukry a kyslík. Bez dostatečného světla rostliny táhnou (etiolace), listy blednou, nové výhony jsou slabé a tenké. Kvetoucí rostliny nenasadí poupata. Suchomilné rostliny (sukulenty, kaktusy) se deformují.",
      },
      {
        type: "text",
        heading: "Jaký typ osvětlení zvolit?",
        body: "Dnes jsou jednoznačnou volbou LED svítidla. Oproti starším technologiím (zářivky, sodíkové výbojky) mají zásadní výhody: spotřebují 60–80 % méně energie, vyzařují minimum tepla (nepoškodí listy), mají životnost 30 000–50 000 hodin a jsou dostupné ve správném světelném spektru pro rostliny.",
      },
      {
        type: "text",
        heading: "Barevné spektrum — fialová, nebo bílá?",
        body: "Rostliny nejvíce využívají červené (630–660 nm) a modré (430–460 nm) světlo. Proto mají specializované rostlinné LED fialovo-růžovou barvu — obsahují pouze tyto vlnové délky. Bílé full-spectrum LED obsahují všechny vlnové délky a svítí přirozeně. Obě varianty fungují skvěle. Bílé LED jsou příjemnější pro lidské oko a interiér, fialové jsou o trochu účinnější na watt.",
      },
      {
        type: "tip",
        title: "PPFD a lux — co sledovat?",
        body: "Lux měří jas pro lidské oko, ale rostliny vnímají světlo jinak. Přesnější jednotka je PPFD (µmol/m²/s) — měří množství fotonů využitelných pro fotosyntézu. Pro většinu pokojovek stačí 50–150 PPFD, pro sukulenty a rajčata 200–400 PPFD. Kvalitní LED lampy tuto hodnotu uvádějí.",
      },
      {
        type: "text",
        heading: "Jak dlouho svítit?",
        body: "Většina pokojových rostlin potřebuje 12–16 hodin světla denně (přirozené + umělé dohromady). V zimě, kdy je den 8 hodin, doplňte 4–8 hodin přisvětlování — ráno a/nebo večer. Používejte časovač (stojí od 100 Kč) — rostliny milují pravidelný režim. Nepřisvětlujte nepřetržitě 24 hodin — i rostliny potřebují tmu pro metabolické procesy.",
      },
      {
        type: "text",
        heading: "Kolik to stojí na elektřině?",
        body: "Překvapivě málo. Typická LED lampa pro 3–5 pokojovek má příkon 20–30 W. Při 8 hodinách denně po dobu 6 zimních měsíců (180 dní):\n\n25 W × 8 h × 180 dní = 36 kWh\n\nPři ceně 6 Kč/kWh je to přibližně 216 Kč za celou zimu — tedy asi 36 Kč měsíčně. I výkonnější 50W panel vyjde na zhruba 70 Kč měsíčně. Investice do svítidla se pohybuje od 300 Kč (lampička s klipem) do 2 000 Kč (kvalitní panel).",
      },
      {
        type: "text",
        heading: "Vzdálenost lampy od rostlin",
        body: "Příliš daleko — rostliny nedostanou dost světla (intenzita klesá se čtvercem vzdálenosti). Příliš blízko — hrozí popálení listů u méně kvalitních lamp. Obecná pravidla: LED panel 20–40 cm nad rostlinami. LED lampička s klipem 15–25 cm. Pokud rostliny táhnou (dlouhé slabé výhony), je světlo moc daleko nebo slabé.",
      },
      {
        type: "tip",
        title: "Co přisvětlovat jako první?",
        body: "Největší užitek z přisvětlování mají: sukulenty a kaktusy (bez světla se deformují), bylinky na parapetu (bazalka, koriandr — zásadně lepší růst), klíčení sazenic na jaře (předpěstování rajčat, paprik), kvetoucí pokojovky (pomáhá nasadit poupata) a citrusy (citroník potřebuje hodně světla celý rok).",
      },
      {
        type: "text",
        heading: "Tipy pro efektivní přisvětlování",
        body: "Kombinujte přirozené a umělé světlo — umístěte lampu tak, aby doplňovala denní světlo, ne aby ho nahrazovala. Bílé stěny a reflexní podložky odrážejí světlo a zvyšují účinnost. Otáčejte rostliny — aby růst byl rovnoměrný ze všech stran. Čistěte listy od prachu — prach snižuje absorpci světla o 20–30 %. A hlavně: pozorujte rostliny. Pokud reagují sytějšími listy, kompaktnějším růstem a kvetením — vaše přisvětlování funguje!",
      },
    ],
  },
  {
    slug: "popinave-rostliny-pruvodce-vyberem-a-pestovanim",
    title: "Popínavé rostliny: průvodce výběrem a pěstováním",
    excerpt:
      "Popínavé rostliny zakryjí plot, zeď i pergolu. Jak se dělí, jak je sázet a které jsou nejlepší do české zahrady.",
    date: "2026-03-30",
    author: "Ta Pravá",
    heroImage: "/images/blog-popinave.png",
    tags: ["zahrada", "popínavé", "pergola"],
    metaDescription:
      "Kompletní průvodce popínavými rostlinami. Samopnoucí, úponkaté, ovíjivé i vzpěrné. Jak sázet, jakou oporu zvolit a jak stříhat.",
    content: [
      {
        type: "text",
        body: "Popínavé rostliny patří k nejefektnějším zahradním prvkům. Zakryjí nevzhlednou zeď, promění pergolu v zelenou oázu, vytvoří zastínění terasy nebo přidají vertikální rozměr malé zahradě. A to často za jedinou sezónu. Klíčem k úspěchu je vybrat správný druh pro dané místo a zajistit vhodnou oporu.",
      },
      {
        type: "text",
        heading: "Jak se popínavé rostliny pnou?",
        body: "Popínavky se dělí do čtyř skupin podle způsobu uchycení:\n\nSamopnoucí — přichytávají se k povrchu vlastními přísavnými kořínky. Nepotřebují oporu, lezou po stěnách, kmenech a skalách. Patří sem břečťan, přísavník (loubinec), trubač a hortenzie popínavá.\n\nÚponkaté — uchycují se tenkými úponky kolem drátů, mříží nebo jiných rostlin. Typickým zástupcem je plamének, vinná réva a mučenka.\n\nOvíjivé — celými výhony se ovíjejí kolem opory. Potřebují svislé tyče, sloupy nebo pergolu. Sem patří vistárie, zimolez ovíjivý a aktinidie (kiwi).\n\nVzpěrné — nemají žádný uchycovací mechanismus. Své výhony zasunují do opory a zaklesávají trny. Typická je popínavá růže a ostružiník. Musíte je k opoře přivazovat.",
      },
      {
        type: "text",
        heading: "Kde a jak sázet",
        body: "Popínavky sázejte na jaře nebo na podzim, v létě se vyhněte horkým dnům. Výsadbová jáma by měla být 20–30 cm od zdi nebo plotu — přímo u paty zdi je půda chudá, suchá a zhutněná. Nakloňte kořenový bal směrem k opoře. Půda by měla být humózní, propustná a na živiny bohatá. Po výsadbě zalijte a zamulčujte.",
      },
      {
        type: "tip",
        title: "Co je treláž?",
        body: "Treláž je mřížová konstrukce ze dřeva, kovu nebo plastu, která slouží jako opora pro popínavky. Připevňuje se na zeď s mezerou 5–10 cm, aby za ní proudil vzduch. Dřevěná treláž vypadá nejpřirozeněji, nerezové dráty jsou nejdiskrétnější a nejtrvanlivější.",
      },
      {
        type: "text",
        heading: "Nejlepší popínavky na slunce",
        body: "Vistárie: královna popínavek. Dlouhé hrozny modrých, bílých nebo růžových květů v květnu. Dorůstá až 15 m, potřebuje pevnou oporu (pergola, zeď). Kvete na starém dřevě — řežte opatrně.\n\nPlamének: obrovské množství odrůd s květy od bílé po tmavě fialovou. Hlava na slunci, nohy ve stínu — zastíněte kořeny nízkou trvalkou. Řez závisí na skupině.\n\nRůže popínavá: klasika pro romantickou zahradu. Potřebuje přivazování k opoře. Řez po odkvětu a na jaře.\n\nTrubač: exoticky vypadající trubkovité květy v oranžové a červené. Samopnoucí, velmi rychlý růst. Pozor — v chladnějších polohách může namrzat.",
      },
      {
        type: "text",
        heading: "Nejlepší popínavky do stínu",
        body: "Břečťan popínavý: nejodolnější stálezelená popínavka. Roste prakticky kdekoli — na slunci, v polostínu i v plném stínu. Samopnoucí, nenáročný, téměř bezúdržbový. Plody jsou jedovaté pro člověka, ale ptáci je milují.\n\nHortenzie popínavá: nádherně kvete bílými květy v červnu. Samopnoucí, ale zpočátku roste pomalu. Po zakořenění (2–3 roky) přidá i 1 m za rok. Ideální na severní stěnu.\n\nLoubinec: samopnoucí, extrémně rychlý růst, nádherné podzimní zbarvení v ohnivě červené. Zcela bezúdržbový. Vhodný na velké plochy — zeď, garáž, plot.",
      },
      {
        type: "plantList",
        heading: "Popínavé rostliny v našem katalogu",
        plantIds: [
          "clematis-jackmanii",
          "wisteria-sinensis",
          "rosa-climbing",
          "hedera-helix",
          "parthenocissus-quinquefolia",
          "campsis-radicans",
          "hydrangea-petiolaris",
          "lonicera-caprifolium",
          "actinidia-arguta",
          "passiflora-incarnata",
        ],
      },
      {
        type: "text",
        heading: "Kdy a jak stříhat",
        body: "Stříhání záleží na druhu a skupině. Obecně: popínavky kvetoucí na starém dřevě (vistárie, některé plaménky) stříhejte po odkvětu. Kvetoucí na novém dřevě (trubač, letní plaménky) stříhejte brzy na jaře. Břečťan a loubinec stříhejte kdykoli — usměrňujte růst, aby nelezl, kam nechcete. Růže popínavé řežte na jaře — odstraňte staré dřevo a zkraťte postranní výhony.",
      },
      {
        type: "tip",
        title: "Poškozují popínavky zeď?",
        body: "Častá obava, ale realita je nuancovanější. Samopnoucí druhy (břečťan, loubinec) se přichytávají k povrchu — na zdravé omítce neškodí, ale na poškozené omítce mohou kořínky vnikat do trhlin. Ovíjivé (vistárie) mají obrovskou sílu a mohou ohýbat trubky a plechy. Řešení: kvalitní treláž s mezerou od zdi, která chrání fasádu a umožňuje údržbu.",
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
