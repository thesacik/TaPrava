export type ContentBlock =
  | { type: "text"; heading?: string; body: string }
  | { type: "tip"; title: string; body: string }
  | { type: "image"; src: string; alt: string; caption?: string }
  | { type: "plantList"; heading?: string; plantIds: string[] }
  | { type: "video"; src: string; title?: string; caption?: string };

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
      { type: "plantList", plantIds: ["spathiphyllum"] },
      {
        type: "text",
        heading: "Begónie elatior — záplava barev",
        body: "Begónie elatior patří k nejvděčnějším kvetoucím pokojovkám. Kvete v teplých barvách — červená, růžová, oranžová, žlutá i bílá — a to měsíce v kuse. Potřebuje světlé místo bez přímého slunce, pravidelnou zálivku a přihnojení během kvetení. Po odkvětu ji seřízněte a ona znovu vykvete.",
      },
      { type: "plantList", plantIds: ["begonia-elatior"] },
      {
        type: "text",
        heading: "Brambořík (Cyclamen) — zimní hvězda",
        body: "Brambořík kvete od podzimu do jara, kdy většina pokojovek odpočívá. Miluje chlad (15–18 °C) a světlo. Zalijte odspodu — vodu nalijte do misky a po 30 minutách přebytek slijte. Po odkvětu nechte hlízu v suchém substrátu odpočívat přes léto a na podzim obnovte zálivku.",
      },
      { type: "plantList", plantIds: ["cyclamen-persicum"] },
      {
        type: "text",
        heading: "Voskovka (Hoya) — voňavá kráska",
        body: "Voskovka tvoří úchvatné hrozny voskových květů s omamnou vůní, zejména večer. Je to popínavá/převislá rostlina ideální do závěsného košíku. Klíč k květení: hodně světla, mírná zálivka a neřezat stonky po odkvětu — na stejném místě vykvete znovu. Voskovka je trpělivá — poprvé kvete až po 2–3 letech.",
      },
      { type: "plantList", plantIds: ["hoya-carnosa"] },
      {
        type: "text",
        heading: "Ibišek pokojový (Hibiscus) — tropická exotika",
        body: "Pokojový ibišek tvoří velké, nápadné květy v červené, růžové, oranžové nebo žluté barvě. Každý květ vydrží jen den, ale rostlina jich produkuje spoustu. Potřebuje plné slunce (jižní okno), pravidelnou zálivku a hnojení v sezóně. Na zimu omezíte zálivku a přesunete do chladnější místnosti.",
      },
      { type: "plantList", plantIds: ["hibiscus-syriacus"] },
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
  {
    slug: "jak-pestovat-levanduli",
    title: "Jak pěstovat levanduli: návod pro českou zahradu i květináč",
    excerpt:
      "Levandule voní, kvete a láká včely. Jak ji vysadit, stříhat a přezimovat v českém klimatu.",
    date: "2026-04-08",
    author: "Ta Pravá",
    heroImage: "/images/months/07.png",
    tags: ["zahrada", "levandule", "bylinky"],
    metaDescription:
      "Jak pěstovat levanduli v Česku. Výběr odrůdy, výsadba, řez, přezimování a pěstování v květináči krok za krokem.",
    content: [
      {
        type: "text",
        body: "Levandule je symbolem Provence, ale skvěle se daří i v české zahradě. Její fialové květy voní, lákají včely a motýly a vydrží i v suchých a chudých půdách. Stačí dodržet několik pravidel — a levandule vám bude kvést roky.",
      },
      {
        type: "text",
        heading: "Výběr odrůdy pro české klima",
        body: "Nejodolnější je levandule lékařská (Lavandula angustifolia) — přežije mrazy do -20 °C. Oblíbené odrůdy: Hidcote (tmavě fialová, kompaktní), Munstead (světlejší, aromatická), Dwarf Blue (nízká, vhodná do truhlíků). Levandule francouzská (L. stoechas) má efektní květy, ale v Česku nepřezimuje venku. Lavandin (L. × intermedia) dorůstá největších rozměrů a je nejvoňavější.",
      },
      { type: "plantList", plantIds: ["lavandula-angustifolia", "lavandula-stoechas", "lavandula-intermedia"] },
      {
        type: "text",
        heading: "Kde a jak vysadit",
        body: "Levandule miluje plné slunce a propustnou, spíše chudou a vápnitou půdu. Na těžké jílovité půdě hnije — přidejte písek nebo štěrk. Sázejte na jaře (duben–květen) s roztečí 30–40 cm. Nikdy nesázejte do stínu a do vlhké půdy — to je nejčastější příčina neúspěchu.",
      },
      {
        type: "tip",
        title: "Levandule v květináči",
        body: "Skvěle roste v květináči na slunném balkonu. Použijte propustný substrát s pískem, květináč s drenáží. Zalijte jen když je substrát suchý. Na zimu přesuňte do chladné, světlé místnosti nebo květináč obalte a postavte k jižní stěně.",
      },
      {
        type: "text",
        heading: "Řez — klíč k dlouhověkosti",
        body: "Levandule bez řezu dřevnatí, holí se a rozpadá. Stříhejte 2× ročně:\n\n1. Po odkvětu (srpen) — sestřihněte květní stvoly a 2–3 cm zeleného přírůstku.\n\n2. Na jaře (březen–duben) — tvarový řez do kompaktního tvaru. Nikdy nestříhejte do starého dřeva (hnědých holých větví) — z nich levandule nevyraší!",
      },
      {
        type: "text",
        heading: "Přezimování v Česku",
        body: "Levandule lékařská přežije většinu českých zim, pokud je na propustné půdě a chráněném místě. Na zimu zamulčujte kořeny štěpkou. V drsnějších podmínkách zakryjte chvojím. Největší riziko není mráz, ale mokro — zamrzlá voda u kořenů levanduli spolehlivě zahubí.",
      },
    ],
  },
  {
    slug: "jak-pestovat-orchideje-pruvodce-pro-zacatecniky",
    title: "Jak pěstovat orchideje: průvodce pro začátečníky",
    excerpt:
      "Orchideje nejsou tak náročné, jak vypadají. Poradíme, jak je zalévat, přesazovat a přimět znovu kvést.",
    date: "2026-04-07",
    author: "Ta Pravá",
    heroImage: "/images/blog-kvetouci-pokojovky.png",
    tags: ["pokojové", "orchideje", "péče"],
    metaDescription:
      "Jak pěstovat orchideje doma. Zálivka, světlo, hnojení, přesazování a jak přimět Phalaenopsis znovu kvést.",
    content: [
      {
        type: "text",
        body: "Orchideje (zejména Phalaenopsis, motýlí orchidej) jsou nejprodávanější pokojové rostliny v Česku. A přesto se jich lidé bojí — prý jsou náročné. Pravda je opačná: Phalaenopsis je jedna z nejnenáročnějších kvetoucích pokojovek. Stačí pochopit pár pravidel a odměnou budou měsíce květů.",
      },
      {
        type: "text",
        heading: "Světlo a umístění",
        body: "Orchideje chtějí hodně rozptýleného světla, ale ne přímé polední slunce. Ideální je východní nebo západní okno. Na severním okně budou žít, ale nemusí kvést. Na jižním zastíňte záclonkou. Orchidej nesmí být u radiátoru — suchý horký vzduch ji rychle zahubí.",
      },
      {
        type: "text",
        heading: "Zálivka — méně je více",
        body: "Největší chyba je přelévání. Orchideje v přírodě rostou na stromech, kořeny visí ve vzduchu. Zalijte jednou za 7–10 dní: ponořte květináč na 15–20 minut do vlažné vody, pak nechte důkladně okapat. Mezi zálivkami musí substrát (kůra) proschnout. Kořeny mají být stříbrné (suché) a po zálivce zelené.",
      },
      {
        type: "tip",
        title: "Průhledný květináč",
        body: "Orchideje pěstujte v průhledném plastovém květináči — kořeny fotosyntetizují a vy vidíte, kdy je čas zalít (stříbrné kořeny = sucho, zelené = vlhko). Ozdobný obal použijte bez podmisky, aby voda nestála u kořenů.",
      },
      {
        type: "text",
        heading: "Substrát a přesazování",
        body: "Orchideje nerostou v zemině! Používejte speciální orchidejový substrát — borovou kůru, případně s příměsí sphagnum mechu. Přesazujte každé 2–3 roky nebo když kůra začne hnít (tmavne, má kyselý zápach). Přesazujte po odkvětu, opatrně odstraňte starou kůru a hnilé kořeny (měkké, hnědé).",
      },
      {
        type: "text",
        heading: "Jak přimět orchidej znovu kvést",
        body: "Po odkvětu neřežte celý stvol — zkraťte ho nad druhým kolénkem (uzlem). Z kolénka může vyrůst nový výhon s květy. Pokud orchidej nekvete déle než rok, potřebuje chladový impulz: na 4–6 týdnů ji umístěte do chladnější místnosti (15–18 °C, např. ložnice). Teplotní rozdíl mezi dnem a nocí spustí tvorbu poupat.",
      },
      {
        type: "text",
        heading: "Hnojení",
        body: "Přihnojujte speciálním orchidejovým hnojivem (nízká koncentrace) každou druhou zálivku během růstu a kvetení (jaro–podzim). V zimě nehnojte. Nikdy nehnojte do suchého substrátu — vždy nejdřív zalijte a pak přidejte hnojivo do zálivkové vody.",
      },
      {
        type: "tip",
        title: "Vzdušná vlhkost",
        body: "Orchideje pocházejí z tropů a potřebují vlhkost 50–70 %. V bytě s topením bývá 30–40 %. Pomozte jim: rosíte listy (ne květy), postavte květináč na misku s mokrými kamínky nebo používejte zvlhčovač. Skupinka rostlin u sebe navzájem zvyšuje vlhkost.",
      },
    ],
  },
  {
    slug: "jak-se-starat-o-ruze-kompletni-pruvodce",
    title: "Jak se starat o růže: kompletní průvodce péčí",
    excerpt:
      "Růže jsou královny zahrady. Jak je sázet, řezat, hnojit a chránit před chorobami — vše na jednom místě.",
    date: "2026-04-06",
    author: "Ta Pravá",
    heroImage: "/images/months/06.png",
    tags: ["zahrada", "růže", "péče"],
    metaDescription:
      "Jak pěstovat růže. Výsadba, řez, hnojení, ochrana proti chorobám a přezimování růží krok za krokem.",
    content: [
      {
        type: "text",
        body: "Růže provázejí člověka tisíce let a dodnes patří k nejoblíbenějším zahradním rostlinám. Moderní odrůdy jsou odolnější než kdy dřív a s trochou péče vás odmění bohatým kvetením od června do prvních mrazů.",
      },
      {
        type: "text",
        heading: "Typy růží",
        body: "Záhonové (floribundy): nízké, bohatě kvetoucí, ideální do skupin. Velkokvěté (čajohybridy): elegantní velké květy na dlouhých stoncích. Popínavé: pokryjí pergolu, zeď nebo oblouk. Keřové: mohutné, odolné, vhodné do volné výsadby. Pokryvné: nízké, šíří se do plochy, vhodné na svahy. Historické: voňavé, romantické, kvetou většinou jednou za sezónu.",
      },
      {
        type: "plantList",
        heading: "Růže v našem katalogu",
        plantIds: ["rosa-floribunda", "rosa-climbing", "rosa-rugosa", "rosa-canina", "rosa-gallica"],
      },
      {
        type: "text",
        heading: "Výsadba",
        body: "Růže sázejte na podzim (říjen–listopad) nebo na jaře (březen–duben). Vyberte slunné, vzdušné místo — růže potřebují minimálně 6 hodin přímého slunce. Jámu vykopejte 40×40 cm, na dno kompost. Očkovací místo (zduřenina na kmínku) zakopejte 5 cm pod povrch — chrání před mrazem. Zalijte 10 l vody.",
      },
      {
        type: "text",
        heading: "Řez růží",
        body: "Hlavní řez provádějte na jaře (březen–duben), když forsythie začíná kvést. Záhonové a velkokvěté: seřízněte na 3–5 oček nad zemí. Popínavé: odstraňte staré dřevo, zkraťte postranní výhony. Keřové: prosvětlujte střed, odstraňte křížící se a slabé větve. Během léta odstraňujte odkvetlé květy (stimuluje nové kvetení).",
      },
      {
        type: "tip",
        title: "Černá skvrnitost a padlí",
        body: "Dva nejčastější problémy růží. Černá skvrnitost: tmavé skvrny na listech, listy opadávají. Prevence: vzdušné místo, nezalijte přes listy, v předjaří postříkejte měďnatým přípravkem. Padlí: bílý povlak na listech. Prevence: slunné místo, nepřehnojovat dusíkem. Léčba: fungicidní postřik nebo odvar z přesličky.",
      },
      {
        type: "text",
        heading: "Hnojení",
        body: "Růže jsou hladové — hnojte 3× za sezónu: na jaře po řezu (kompost + granulované hnojivo), v červnu po prvním kvetení (hnojivo na růže) a naposledy v červenci. Po srpnu nehnojte — nové výhony by nestihly vyzrát a mráz by je poškodil.",
      },
      {
        type: "text",
        heading: "Přezimování",
        body: "Na podzim přihrňte hlínu nebo kompost ke kořenovému krčku (kopec 15–20 cm). Kmínkové růže obalte jutou. Neřežte na podzim — řez nechte na jaro. Popínavé růže na archu stáhněte k zemi a zakryjte chvojím. Na jaře ochranu odstraňte, jakmile začnou rašit pupeny.",
      },
    ],
  },
  {
    slug: "jak-pestovat-rajcata-na-balkone",
    title: "Jak pěstovat rajčata na balkoně: sklizeň i bez zahrady",
    excerpt:
      "Sladká rajčata z vlastního balkonu? Jde to! Návod od výběru odrůdy po sklizeň v truhlíku.",
    date: "2026-04-05",
    author: "Ta Pravá",
    heroImage: "/images/months/08.png",
    tags: ["balkon", "zelenina", "rajčata"],
    metaDescription:
      "Jak pěstovat rajčata na balkoně v truhlíku. Výběr odrůdy, předpěstování, péče, hnojení a sklizeň krok za krokem.",
    content: [
      {
        type: "text",
        body: "K pěstování rajčat nepotřebujete zahradu. Stačí slunný balkon, dostatečně velký květináč a trocha trpělivosti. Balkonová rajčata mají skvělou chuť — daleko lepší než ta ze supermarketu — a pěstování je překvapivě jednoduché.",
      },
      {
        type: "text",
        heading: "Výběr odrůdy pro balkon",
        body: "Na balkon volte kompaktní determinantní (keříčkové) odrůdy, které nepotřebují vysokou oporu: Balkonzauber, Tumbling Tom (převislé, do závěsných košů), Vilma (česká klasika), Tiny Tim, Losetto. Cherry a koktejlová rajčata se na balkoně daří nejlépe — mají menší plody, ale obrovský výnos a skvělou chuť.",
      },
      {
        type: "text",
        heading: "Předpěstování sazenic",
        body: "Sejte od poloviny března do tepla (20–25 °C) na světlém parapetě. Semena zasejte 1 cm hluboko do vlhkého substrátu. Klíčí za 5–10 dní. Po vyrašení prvních pravých listů (ne děložních) přepichujte do větších kelímků. Na balkon vysaďte až po zmrzlých (po 15. květnu), kdy noční teploty neklesají pod 10 °C.",
      },
      {
        type: "tip",
        title: "Otužování sazenic",
        body: "Týden před výsadbou sazenice otužujte — přes den je dejte na balkon, na noc vraťte dovnitř. Bez otužení dostanou sazenice ‚šok' a zastaví se v růstu na týdny.",
      },
      {
        type: "text",
        heading: "Květináč a substrát",
        body: "Jeden keřík potřebuje minimálně 10–15 l substrátu (ideálně 20 l). Použijte kvalitní univerzální substrát obohacený kompostem. Na dno květináče drenážní vrstvu z keramzitu. Květináč musí mít drenážní otvor — rajčata nesnáší stojatou vodu, ale zároveň potřebují stálou vlhkost.",
      },
      {
        type: "text",
        heading: "Zálivka a hnojení",
        body: "Zalijte ráno k zemi (ne přes listy) — v létě i denně. Nepravidelná zálivka způsobuje praskání plodů. Přihnojujte každých 10–14 dní rajčatovým hnojivem (vyšší podíl draslíku) od chvíle, kdy nasadí první květy. Přehnojení dusíkem = hodně listů, málo plodů.",
      },
      {
        type: "text",
        heading: "Zaštipování a podpora",
        body: "Indeterminantní (tyčkové) odrůdy zaštipujte — odstraňujte zálistky (výhony rostoucí z úžlabí listů). Keříčkové odrůdy zaštipovat nemusíte. Ke každému rajčeti dej tyčku nebo spirálovou podporu. V srpnu ořízněte vrchol — zbývající plody stihnou dozrát.",
      },
      {
        type: "tip",
        title: "Bazalka jako parťák",
        body: "Vysaďte k rajčatům bazalku — údajně odpuzuje škůdce, ale hlavně spolu skvěle chutnají. Na jeden balkon se vejde rajče, bazalka a pár papriček — máte vlastní minifarmu.",
      },
    ],
  },
  {
    slug: "kdy-a-jak-hnojit-travnik",
    title: "Kdy a jak hnojit trávník: kalendář péče o trávník",
    excerpt:
      "Zelený a hustý trávník potřebuje pravidelné hnojení. Kdy hnojit, čím a jak často — přehledný návod.",
    date: "2026-04-04",
    author: "Ta Pravá",
    heroImage: "/images/months/05.png",
    tags: ["zahrada", "trávník", "hnojení"],
    metaDescription:
      "Kdy a jak hnojit trávník. Jarní, letní, podzimní hnojení, výběr hnojiva, vertikutace a provzdušnění krok za krokem.",
    content: [
      {
        type: "text",
        body: "Trávník je nejnáročnější plocha na zahradě — pravidelně ho sekáte a odvážíte živiny. Bez hnojení řídne, žloutne a plní se mechem a plevelem. Přitom stačí hnojit 3–4× ročně správným hnojivem a trávník bude hustý, zelený a odolný.",
      },
      {
        type: "text",
        heading: "Jarní hnojení (březen–duben)",
        body: "Nejdůležitější hnojení roku. Použijte jarní trávníkové hnojivo s vysokým podílem dusíku (N) — nastartuje růst po zimě. Aplikujte, když trávník začíná zelenat a teploty přesahují 8 °C. Před hnojením trávník posekat a shrabat starou trávu. Ideálně rozhoďte hnojivo před deštěm nebo po hnojení zalijte.",
      },
      {
        type: "text",
        heading: "Letní hnojení (červen–červenec)",
        body: "Druhé hnojení udržuje trávník zelený přes léto. Použijte univerzální trávníkové hnojivo s vyváženým poměrem N-P-K. Nehnojte v parnu a suchu — hnojivo může trávu popálit. Aplikujte večer a zalijte. V extrémním suchu raději hnojení vynechte.",
      },
      {
        type: "text",
        heading: "Podzimní hnojení (září–říjen)",
        body: "Podzimní hnojivo má nízký dusík a vysoký draslík (K) — posiluje kořeny a odolnost proti mrazu. Nepoužívejte jarní hnojivo na podzim! Dusík stimuluje měkký růst, který mráz snadno poškodí. Podzimní hnojení je klíčové pro to, aby trávník přežil zimu v dobré kondici.",
      },
      {
        type: "tip",
        title: "Granulované vs. tekuté hnojivo",
        body: "Granulované hnojivo s pozvolným uvolňováním (3 měsíce) je nejpraktičtější — stačí rozhodit a zalít. Tekutá hnojiva působí rychle (vidíte efekt za týden), ale je třeba je aplikovat častěji. Pro většinu zahradníků je granulát ideální volba.",
      },
      {
        type: "text",
        heading: "Vertikutace a provzdušnění",
        body: "Na jaře (duben) proveďte vertikutaci — strojové prořezání plsti (odumřelé trávy) v trávníku. Plsť brání pronikání vody a živin ke kořenům. Po vertikutaci trávník vypadá hrozně, ale za 2–3 týdny se zotaví a bude hustší. Provzdušnění (aerifikace) vidlemi nebo strojem zlepšuje přístup vzduchu ke kořenům — ideální pro zhutnělé půdy.",
      },
      {
        type: "text",
        heading: "Mech a plevel v trávníku",
        body: "Mech signalizuje: kyselou půdu (přidejte vápno), stín, zhutněnou půdu nebo přemokření. Plevel přibývá v řídkém trávníku — nejlepší prevence je hustý, zdravý trávník. Dosevem zahustíte prořídlá místa. Selektivní herbicid ničí dvouděložné plevele, aniž by poškodil trávu.",
      },
    ],
  },
  {
    slug: "jak-predpestovat-sazenice-doma",
    title: "Jak předpěstovat sazenice doma: jarní startér pro zahrádkáře",
    excerpt:
      "Předpěstování doma vám dá měsíční náskok. Jak na to s rajčaty, paprikami, květinami i bylinkami.",
    date: "2026-04-03",
    author: "Ta Pravá",
    heroImage: "/images/months/03.png",
    tags: ["zahrada", "sazenice", "jaro"],
    metaDescription:
      "Jak předpěstovat sazenice doma na parapetě. Kdy začít, co potřebujete, přisvětlování a otužování krok za krokem.",
    content: [
      {
        type: "text",
        body: "Předpěstování sazenic na parapetě vám dá 4–8 týdenní náskok před přímým výsevem. Rajčata, papriky, okurky, cukety, ale i letničky a bylinky — všechny můžete připravit doma a na jaře vysadit silné, zdravé rostliny. A ušetříte za sazenice ze zahradnictví.",
      },
      {
        type: "text",
        heading: "Kdy začít s předpěstováním",
        body: "Papriky a chilli: únor (potřebují nejdelší dobu). Rajčata: polovina března. Okurky a cukety: polovina dubna (rostou rychle). Letničky (afrikány, petúnie): březen. Bylinky (bazalka, koriandr): březen–duben. Klíčové pravidlo: počítejte zpět od data výsadby ven (po 15. květnu) minus doporučený věk sazenic.",
      },
      {
        type: "text",
        heading: "Co budete potřebovat",
        body: "Miniaturní skleníčky nebo kelímky od jogurtů (s drenážním otvorem). Výsevní substrát (jemnější než univerzální). Rozprašovač na vodu. Světlé místo (jižní parapet) nebo přisvětlovací LED. Fólie nebo průhledné víčko na zakrytí do vyklíčení. Etiketky nebo popisky — po vyklíčení se sazenice těžko rozlišují.",
      },
      {
        type: "tip",
        title: "Přisvětlování mění vše",
        body: "Sazenice na parapetě v únoru–březnu nemají dost světla a táhnou se. Levná LED lampička (300–500 Kč) dramaticky změní kvalitu sazenic — budou kompaktní, silné a tmavě zelené. Svítíte 14–16 hodin denně, 10–15 cm nad sazenicemi.",
      },
      {
        type: "text",
        heading: "Postup výsevu",
        body: "1. Naplňte nádoby vlhkým výsevním substrátem.\n\n2. Semena zasejte do hloubky 2× jejich průměr (drobná semena jen na povrch).\n\n3. Zakryjte fólií nebo víčkem — udržuje vlhkost a teplo.\n\n4. Udržujte teplotu 20–25 °C (rajčata, papriky).\n\n5. Po vyklíčení fólii odstraňte a přesuňte na světlo.\n\n6. Po 2–3 pravých listech přepichujte do větších nádob.",
      },
      {
        type: "text",
        heading: "Otužování před výsadbou",
        body: "Týden až dva před vysazením ven sazenice otužujte. Začněte s 1–2 hodinami venku v chráněném polostínu, postupně přidávejte čas a slunce. Poslední 2–3 dny nechte venku i přes noc (pokud nehrozí mráz). Neotužené sazenice dostanou sluneční úžeh a teplotní šok.",
      },
      {
        type: "text",
        heading: "Nejčastější chyby",
        body: "Příliš časný výsev: sazenice přerostou a ztratí kvalitu. Málo světla: sazenice se táhnou a jsou slabé. Přemokření: způsobuje padání klíčních rostlin (plíseň). Přímá výsadba bez otužení: sazenice stagnují nebo uhynou. Příliš hluboký výsev: drobná semena nedokáží prorazit.",
      },
    ],
  },
  {
    slug: "jak-zalozit-vyvyseny-zahon",
    title: "Jak založit vyvýšený záhon: stavba, plnění a výsadba",
    excerpt:
      "Vyvýšený záhon je pohodlný, produktivní a krásný. Jak ho postavit, čím naplnit a co do něj vysadit.",
    date: "2026-04-02",
    author: "Ta Pravá",
    heroImage: "/images/months/04.png",
    tags: ["zahrada", "vyvýšený záhon", "zelenina"],
    metaDescription:
      "Jak založit vyvýšený záhon krok za krokem. Materiály, rozměry, plnění vrstvami a co sázet do vyvýšeného záhonu.",
    content: [
      {
        type: "text",
        body: "Vyvýšený záhon je jedním z nejlepších řešení pro pěstování zeleniny, bylinek i květin. Půda se rychleji prohřívá, lépe se kontroluje kvalita substrátu a pěstování je pohodlnější — nemusíte se ohýbat. Navíc skvěle vypadá a hodí se i na malé zahrady, terasy a zpevněné plochy.",
      },
      {
        type: "text",
        heading: "Rozměry a umístění",
        body: "Šířka: maximálně 120 cm (abyste pohodlně dosáhli do středu z obou stran). Výška: 40–80 cm (čím vyšší, tím pohodlnější práce, ale potřebujete více materiálu). Délka: libovolná. Umístěte na slunné místo (alespoň 6 hodin denně) v severojižním směru pro rovnoměrné osvětlení.",
      },
      {
        type: "text",
        heading: "Z čeho postavit",
        body: "Dřevo: nejčastější a nejlevnější. Použijte modřín, akát nebo tlakově impregnované dřevo (bez kontaktu se zeleninou — vyložte fólií). Vydrží 5–15 let. Gabiony (drátěné koše s kamenem): moderní, trvanlivé, ale dražší. Cihly/beton: trvalé řešení, ale náročnější stavba. Ocelový plech Corten: designový, odolný, s patinou. Vyvarujte se: ošetřeného dřeva železničních pražců (obsahují kreosol).",
      },
      {
        type: "text",
        heading: "Plnění vrstvami — klíč k úspěchu",
        body: "Vyvýšený záhon neplňte jen zeminou — vrstvení organického materiálu vytváří kompostovací efekt, který záhon zahřívá a živí:\n\n1. Spodní vrstva (20 cm): větve, klacky, hrubý dřevní odpad — drenáž a dlouhodobé živiny.\n\n2. Střední vrstva (20 cm): listí, tráva, nedozrálý kompost, sláma — zdroj živin.\n\n3. Horní vrstva (20–30 cm): kvalitní zahradní zemina smíchaná se zralým kompostem — výsadbová vrstva.",
      },
      {
        type: "tip",
        title: "Ochrana proti hrabošům",
        body: "Na dno záhonu dejte pozinkovanou síťovinu (oko 12 mm) — zabrání hrabošům a krtkům ve vstupu zdola. Toto je mnohem jednodušší než řešit škůdce dodatečně.",
      },
      {
        type: "text",
        heading: "Co sázet do vyvýšeného záhonu",
        body: "V prvním roce využijte bohatost živin a sázejte náročné plodiny: rajčata, okurky, cukety, dýně, papriky. V druhém roce přejděte na středně náročné: mrkev, kedlubny, cibule, česnek, hrách. Ve třetím roce pěstujte nenáročné: fazole, hrách, bylinky, saláty. Ve čtvrtém roce záhon přihnojte a cyklus opakujte.",
      },
      {
        type: "text",
        heading: "Péče o vyvýšený záhon",
        body: "Zálivka: vyvýšený záhon prosychá rychleji než záhon v zemi — počítejte s častější zálivkou, zejména v létě. Zvažte kapkovou závlahu. Mulčování: 5 cm slámy nebo trávy na povrchu snižuje odpařování a potlačuje plevel. Doplňování: záhon každý rok trochu klesne — na jaře doplňte vrstvu kompostu.",
      },
    ],
  },
  {
    slug: "jak-pripravit-zahradu-na-zimu",
    title: "Jak připravit zahradu na zimu: podzimní checklist",
    excerpt:
      "Správná příprava na zimu rozhoduje o tom, jak bude zahrada vypadat na jaře. Kompletní checklist pro podzim.",
    date: "2026-04-01",
    author: "Ta Pravá",
    heroImage: "/images/months/10.png",
    tags: ["zahrada", "zima", "podzim"],
    metaDescription:
      "Jak připravit zahradu na zimu. Podzimní práce, řez, mulčování, ochrana rostlin a příprava trávníku krok za krokem.",
    content: [
      {
        type: "text",
        body: "Podzim je pro zahrádkáře stejně důležitý jako jaro. To, co teď uděláte (nebo neuděláte), ovlivní celou příští sezónu. Správná příprava zahrady na zimu chrání rostliny před mrazem, předchází chorobám a dává vám náskok na jaře.",
      },
      {
        type: "text",
        heading: "Říjen: úklid a ochrana",
        body: "Odstraňte odumřelé letničky a napadené rostliny (nekompostujte — spalte nebo do komunálního odpadu). Shrabte padané ovoce — hnijící plody šíří choroby. Skliďte poslední zeleninu. Odklopte a uložte hlízy jiřin, begónií a mečíků do chladné, suché místnosti.",
      },
      {
        type: "text",
        heading: "Ochrana citlivých rostlin",
        body: "Zamulčujte kořenový prostor citlivých keřů a trvalek (10–15 cm listí, slámy nebo kůry). Stálezelené keře (hortenzie, rododendrony) zakryjte jutou proti zimnímu slunci a větru. Kmen mladých ovocných stromů obalte jutou. Růže přihrňte hlínou ke kořenovému krčku. Květináče na terase obalte a izolujte.",
      },
      {
        type: "text",
        heading: "Trávník před zimou",
        body: "Naposledy posekat (ne příliš nakrátko — nechte 5 cm). Aplikujte podzimní hnojivo (vysoký draslík, nízký dusík). Shrabte listí — pod vrstvou listí trávník hnije a tvoří se mech. Pokud je trávník zhutnělý, provzdušněte vidlemi.",
      },
      {
        type: "tip",
        title: "Listí je zlato",
        body: "Nepalte a nevyhazujte listí! Použijte ho jako mulč pod keře a stromy, do kompostu nebo na hromadu pro ježky. Listí je nejlepší přírodní ochrana kořenů proti mrazu a na jaře se z něj stane humus.",
      },
      {
        type: "text",
        heading: "Podzimní výsadba",
        body: "Podzim je ideální doba pro výsadbu stromů, keřů, cibulovin (tulipány, narcisy, krokusy) a česnek. Rostliny zakořeňují přes zimu a na jaře mají náskok. Sázejte od října do první půdy mrzne. Nezapomeňte důkladně zalít — i na podzim!",
      },
      {
        type: "text",
        heading: "Zahradní technika a nástroje",
        body: "Vyčistěte a naolejujte zahradní nářadí. Vypusťte hadice a zavřete venkovní vodní kohoutky (zamrzlá voda je roztrhne). Sekačku vyčistěte, vyměňte olej a naostřete nůž. Zahradní nábytek ukliďte pod střechu nebo zakryjte. Skleník umyjte a zkontrolujte těsnění.",
      },
      {
        type: "text",
        heading: "Kompost na zimu",
        body: "Kompost překryjte vrstvou listí nebo plachtou — udržíte teplotu a vlhkost. Přes zimu kompostovací proces zpomalí, ale nezastaví se úplně. Na jaře budete mít hotový kompost připravený k použití.",
      },
    ],
  },
  {
    slug: "proc-zloutnou-listy-pokojovych-rostlin",
    title: "Proč žloutnou listy pokojových rostlin: příčiny a řešení",
    excerpt:
      "Žluté listy jsou nejčastější problém pokojovek. Jak poznat příčinu a co s tím udělat.",
    date: "2026-03-30",
    author: "Ta Pravá",
    heroImage: "/images/categories/pokojove.png",
    tags: ["pokojové", "problémy", "péče"],
    metaDescription:
      "Proč žloutnou listy pokojových rostlin. 8 nejčastějších příčin, jak je poznat a jak rostlinu zachránit.",
    content: [
      {
        type: "text",
        body: "Žluté listy na pokojovce jsou signál, že něco není v pořádku. Ale co přesně? Příčin může být několik a správná diagnóza je klíčem k záchraně rostliny. V tomto článku projdeme nejčastější důvody žloutnutí listů a poradíme, co s tím.",
      },
      {
        type: "text",
        heading: "1. Přelévání — nejčastější příčina",
        body: "Příznaky: spodní listy žloutnou rovnoměrně, jsou měkké a vodnaté. Substrát je stále vlhký, může zapáchat. Kořeny jsou hnědé a měkké (hniloba). Řešení: nechte substrát důkladně proschnout. Zkontrolujte, zda voda odtéká z drenážního otvoru. U vážnější hniloby přesaďte — odřízněte hnilé kořeny a dejte do čerstvého substrátu.",
      },
      {
        type: "text",
        heading: "2. Nedostatek světla",
        body: "Příznaky: listy postupně blednou a žloutnou, rostlina se natahuje ke světlu. Nové listy jsou menší a světlejší. Řešení: přesuňte rostlinu blíže k oknu. V zimě zvažte přisvětlování LED lampou. Otáčejte květináč, aby rostlina rostla rovnoměrně.",
      },
      {
        type: "text",
        heading: "3. Nedostatek živin",
        body: "Příznaky: starší (spodní) listy žloutnou jako první, žilky mohou zůstat zelené (chloróza). Růst je pomalý. Řešení: přihnojte univerzálním hnojivem pro pokojové rostliny. Pokud jste nepřesazovali 2+ roky, přesaďte do čerstvého substrátu. Během vegetace (jaro–podzim) hnojte každé 2–3 týdny.",
      },
      {
        type: "text",
        heading: "4. Přeschnutí",
        body: "Příznaky: listy nejprve hnědnou na okrajích, pak žloutnou a opadávají. Substrát je suchý, odtahuje se od stěn květináče. Řešení: ponořte květináč na 30 minut do vlažné vody. Nastavte pravidelný režim zálivky. Některé rostliny (kalátea, kapradina) potřebují stále vlhký substrát.",
      },
      {
        type: "text",
        heading: "5. Průvan a teplotní šok",
        body: "Příznaky: listy žloutnou a opadávají náhle, zejména po přesunutí rostliny. Řešení: umístěte rostlinu na stálé místo bez průvanu. Vyhněte se umístění u otevřeného okna v zimě nebo nad radiátorem. Fíkusy jsou na změnu místa obzvlášť citlivé.",
      },
      {
        type: "text",
        heading: "6. Přirozené stárnutí",
        body: "Příznaky: žloutne a opadává jeden nebo dva nejstarší (nejspodnější) listy, zbytek rostliny vypadá zdravě. Řešení: žádné — to je normální. Rostlina odkládá staré listy a přesměrovává energii do nového růstu. Prostě list odstraňte.",
      },
      {
        type: "tip",
        title: "Rychlá diagnostika",
        body: "Zkontrolujte substrát prstem — mokrý (přelévání) nebo prašně suchý (přeschnutí)? Kde listy žloutnou — spodní (přelévání, živiny), horní (světlo, pH)? Žloutnou rovnoměrně (voda) nebo zůstávají zelené žilky (chloróza = železo)? Jsou na listech skvrny nebo škůdci (mouchy, mšice, svilušky)?",
      },
      {
        type: "plantList",
        heading: "Oblíbené pokojovky — poradíme s péčí",
        plantIds: [
          "monstera-deliciosa",
          "ficus-elastica",
          "spathiphyllum",
          "chlorophytum-comosum",
          "epipremnum-aureum",
          "dracaena-marginata",
        ],
      },
    ],
  },
  {
    slug: "jak-se-zbavit-slimaku-na-zahrade",
    title: "Jak se zbavit slimáků na zahradě: účinné a přírodní metody",
    excerpt:
      "Slimáci dokáží zničit úrodu za jednu noc. Poradíme osvědčené metody, jak je zastavit — bez chemie i s ní.",
    date: "2026-03-28",
    author: "Ta Pravá",
    heroImage: "/images/months/05.png",
    tags: ["zahrada", "škůdci", "slimáci"],
    metaDescription:
      "Jak se zbavit slimáků na zahradě. Pasti, bariéry, přírodní nepřátelé a další osvědčené metody proti plzákům.",
    content: [
      {
        type: "text",
        body: "Slimáci (zejména plzák španělský) jsou noční můrou zahrádkářů. Dokáží za jednu vlhkou noc sežrat řadu sazenic a nenechají stát skoro nic — saláty, jahody, hosty, jiřiny. Boj se slimáky vyžaduje kombinaci více metod. Žádná jedna metoda nefunguje stoprocentně.",
      },
      {
        type: "text",
        heading: "Pasti s pivem",
        body: "Klasika, která funguje. Zakopejte misku (kelímek od jogurtu) do země tak, aby okraj byl 1–2 cm nad povrchem (aby nepadali dovnitř užiteční brouci). Nalijte pivo — slimáky láká kvasnicová vůně, vlezou dovnitř a utopí se. Pasti kontrolujte denně a doplňujte. Umístěte na okraj záhonů, ne doprostřed — jinak přilákáte slimáky z celého okolí.",
      },
      {
        type: "text",
        heading: "Bariéry",
        body: "Měděná páska kolem vyvýšeného záhonu — měď reaguje se slizem a dává slimákovi mírný elektrický šok. Popel, kávová sedlina, vaječné skořápky — fungují jako dočasná bariéra na suchu, ale déšť je spláchne. Speciální slimákový plot (ohnutý plech) — mechanická překážka. Vlna z ovčí střiže — slimáci se neradi plazí po suchém rounu.",
      },
      {
        type: "tip",
        title: "Ruční sběr — nejúčinnější metoda",
        body: "Choďte na zahradu za soumraku s baterkou a sbírejte slimáky ručně (rukavice!). Odneste je minimálně 200 m od zahrady, jinak se vrátí. Nebo je vložte do kbelíku s vodou a octem. Denní úkryt odhalíte, když na záhon položíte prkno — ráno pod ním najdete desítky slimáků.",
      },
      {
        type: "text",
        heading: "Přírodní nepřátelé",
        body: "Ježci, žáby, ropuchy, poštolky, drozdi, střevlíci a slíďáci — všichni žerou slimáky. Vytvořte na zahradě prostředí, které je láká: hromady klacků a listí pro ježky, malé jezírko pro žáby, ptačí budky. Kachny a slepice jsou nejefektivnější slimáčí predátoři — pokud máte možnost, využijte je.",
      },
      {
        type: "text",
        heading: "Granule proti slimákům",
        body: "Pokud přírodní metody nestačí, použijte granule na bázi fosforečnanu železitého (Ferramol, Sluggo) — jsou bezpečné pro ježky, domácí zvířata i půdu. Rozsypte kolem ohrožených rostlin. Vyhněte se granulím na bázi methaldehydu (Mesurol) — jsou jedovaté pro ježky a domácí zvířata.",
      },
      {
        type: "text",
        heading: "Prevence",
        body: "Zalijte ráno, ne večer — mokrá zahrada v noci je slimáčí ráj. Odstraňte úkryty: prkna, kameny, hromady listí u záhonů. Pěstujte odolné rostliny: levanduli, rozmarýn, šalvěj, kapucínky — slimáci je nejedí. Mulčujte hrubou štěpkou místo trávy — slimáci se neradi plazí po ostrém povrchu.",
      },
    ],
  },
  {
    slug: "jak-se-zbavit-plevele-bez-chemie",
    title: "Jak se zbavit plevele bez chemie: přírodní a účinné metody",
    excerpt:
      "Plevel nemusíte hubit Roundupem. Existují účinné přírodní metody, které fungují a neničí půdu.",
    date: "2026-03-25",
    author: "Ta Pravá",
    heroImage: "/images/months/04.png",
    tags: ["zahrada", "plevel", "ekologie"],
    metaDescription:
      "Jak se zbavit plevele bez chemie. Mulčování, plečkování, horká voda, ocet a další přírodní metody proti plevelu.",
    content: [
      {
        type: "text",
        body: "Plevel je přirozená součást zahrady, ale na záhonech a v cestách nechceme nikoho navíc. Chemické herbicidy (Roundup, glyfosát) jsou účinné, ale ničí půdní mikroorganismy, ohrožují včely a kontaminují podzemní vodu. Naštěstí existují přírodní metody, které fungují skvěle — jen vyžadují trochu více práce.",
      },
      {
        type: "text",
        heading: "Mulčování — prevence číslo jedna",
        body: "Pokud plevel nemá světlo, nevyroste. Pokryjte záhony 5–10 cm vrstvou mulče: kůrová drť, štěpka, sláma, tráva ze sekačky. Mulč potlačuje 80–90 % plevelů a navíc udržuje vlhkost a vylepšuje půdu. Na cestičky a pod keře funguje i netkaná textilie zakrytá štěrkem nebo kůrou.",
      },
      {
        type: "text",
        heading: "Plečkování a vytrhávání",
        body: "Klasika, která funguje nejlépe. Klíčem je pravidelnost — malý plevel vytrhejte jednou týdně za 15 minut, než ho necháte vyrůst a vysemenit se. Plečkujte za sucha — vytržený plevel na slunci uschne. Za mokra se znovu zakořeňuje. Pampelišky a pcháč vyrývejte i s kořenem, jinak znovu vyraší.",
      },
      {
        type: "text",
        heading: "Vroucí voda",
        body: "Nejjednodušší metoda na plevel v dlažbě a cestách. Zalijte plevel vroucí vodou z konvice — ničí buňky a plevel uhyne do 24 hodin. Opakujte za 2–3 týdny, než vyčerpáte zásobu semen v půdě. Ekologické, zdarma a okamžitě účinné. Nepoužívejte na záhonech — zabili byste i kulturní rostliny.",
      },
      {
        type: "tip",
        title: "Ocet — přírodní herbicid",
        body: "10% kuchyňský ocet postříkaný přímo na listy plevele funguje jako kontaktní herbicid — spaluje nadzemní části. Účinkuje do 24 hodin. Přidejte kapku tekutého mýdla jako smáčedlo. Pozor: ocet zabíjí všechny rostliny, nejen plevel. Stříkejte cíleně. Nefunguje na vytrvalé plevele s hlubokými kořeny.",
      },
      {
        type: "text",
        heading: "Husté výsadby a pokryvné rostliny",
        body: "Příroda nemá ráda holou půdu — pokud ji neobsadíte vy, obsadí ji plevel. Sázejte hustě a používejte pokryvné rostliny: rozchodníky, kakosty, konvalinky, břečťan. V zeleninových záhonech sázejte do hustých bloků místo řad s holou půdou mezi nimi. Zelené hnojení (facélie, hořčice) na prázdném záhoně přes zimu potlačuje plevel a vylepšuje půdu.",
      },
      {
        type: "text",
        heading: "Co nefunguje",
        body: "Sůl: ničí strukturu půdy a zabíjí mikroorganismy. Nikdy nepoužívejte. Jedlá soda: účinek minimální, na půdu škodlivá ve větším množství. Překrytí kartónem: funguje dočasně jako mulč, ale za pár měsíců se rozpadne. Užitečné pouze jako spodní vrstva pod mulč.",
      },
    ],
  },
  {
    slug: "nejkrasnejsi-okrasne-travy-do-zahrady",
    title: "Nejkrásnější okrasné trávy do zahrady: výběr a péče",
    excerpt:
      "Okrasné trávy dodají zahradě vzdušnost, pohyb a krásu i v zimě. Přehled nejlepších druhů pro české zahrady.",
    date: "2026-03-22",
    author: "Ta Pravá",
    heroImage: "/images/months/09.png",
    tags: ["zahrada", "trávy", "inspirace"],
    metaDescription:
      "Nejkrásnější okrasné trávy pro zahradu. Ozdobnice, kavyl, dochan, kostřava a další. Jak sázet a stříhat okrasné trávy.",
    content: [
      {
        type: "text",
        body: "Okrasné trávy jsou jedním z největších trendů v moderním zahradnictví — a právem. Dodávají záhonu vzdušnost, pohyb ve větru, nádherné podzimní barvy a strukturu i v zimě, kdy ostatní trvalky spí. Navíc jsou většinou nenáročné a odolné.",
      },
      {
        type: "text",
        heading: "Ozdobnice čínská (Miscanthus) — královna trav",
        body: "Dorůstá 150–250 cm, tvoří elegantní převislé trsy s hedvábnými latami v pozdním létě. Odrůdy: Gracillimus (úzké listy, vzdušná), Morning Light (stříbřitá), Zebrinus (žluté příčné pruhy). Ideální jako solitér, živý plot nebo pozadí záhonu. Plné slunce, běžná zahradní půda.",
      },
      { type: "plantList", plantIds: ["miscanthus-sinensis"] },
      {
        type: "text",
        heading: "Kavyl (Stipa) — vlnící se moře",
        body: "Kavyl nejtenčí (S. tenuissima) vytváří jemné vláskové trsy, které se vlní v sebemenším vánku. Dorůstá 40–60 cm, je skvělý vpředu záhonu nebo ve štěrkových zahradách. Plné slunce, propustná suchá půda. Krátká životnost (3–4 roky), ale bohatě se vysévá.",
      },
      { type: "plantList", plantIds: ["stipa-tenuissima"] },
      {
        type: "text",
        heading: "Dochan (Pennisetum) — lahvičkovité klasy",
        body: "Dochan psárkovitý má půvabné chlupaté klasy připomínající lahvičky. Dorůstá 40–80 cm. Odrůda Hameln je kompaktní a spolehlivá. Krásný v kombinaci s třapatkami a šalvějemi. Plné slunce, propustná půda. V drsnějších polohách může vymrzat.",
      },
      { type: "plantList", plantIds: ["pennisetum-alopecuroides"] },
      {
        type: "text",
        heading: "Kostřava sivá (Festuca glauca) — modrý polštářek",
        body: "Kompaktní kulovité trsy (20–30 cm) v nádherné ocelově modré barvě. Ideální do skalek, obrub, štěrkových zahrad a truhlíků. Plné slunce, suchá propustná půda. Každé 2–3 roky rozdělte — staré trsy se uprostřed holí.",
      },
      { type: "plantList", plantIds: ["festuca-glauca"] },
      {
        type: "text",
        heading: "Třtina Karl Foerster (Calamagrostis) — vertikální akcent",
        body: "Úzké vzpřímené trsy dorůstají 150–170 cm, klasy se objevují už v červnu. Skvělý vertikální prvek, nezabírá mnoho místa. Snese slunce i polostín, běžnou i vlhčí půdu. Jedna z nejspolehlivějších okrasných trav — nešíří se a drží tvar.",
      },
      { type: "plantList", plantIds: ["calamagrostis-karl-foerster"] },
      {
        type: "tip",
        title: "Kdy a jak stříhat",
        body: "Okrasné trávy NESTŘÍHEJTE na podzim! Suché listy a klasy chrání kořeny před mrazem a vypadají krásně s jinovatkou. Sestřihněte až v březnu–dubnu, těsně než začne nový růst. Svažte trs provázkem a sestřihněte 10–15 cm nad zemí.",
      },
      {
        type: "plantList",
        heading: "Další okrasné trávy v katalogu",
        plantIds: [
          "carex-morrowii",
          "molinia-caerulea",
          "hakonechloa-macra",
        ],
      },
    ],
  },
  {
    slug: "nenarocne-rostliny-ktere-preziji-i-bez-pece",
    title: "Nenáročné rostliny, které přežijí i bez péče",
    excerpt:
      "Nemáte čas nebo zkušenosti? Tyto rostliny zvládnou sucho, zapomětlivost i stín — a přesto vypadají skvěle.",
    date: "2026-03-20",
    author: "Ta Pravá",
    heroImage: "/images/categories/pokojove.png",
    tags: ["pokojové", "zahrada", "začátečníci"],
    metaDescription:
      "Nejnenáročnější rostliny pro byt i zahradu. Pokojovky, které přežijí sucho a stín, a zahradní rostliny bez údržby.",
    content: [
      {
        type: "text",
        body: "Ne každý má zelenou ruku a ne každý chce trávit víkendy zaléváním a přihnojováním. Naštěstí existují rostliny, které zvládnou zapomětlivost, sucho, stín i absenci majitele na dovolenou. Tady je náš výběr těch nejodolnějších.",
      },
      {
        type: "text",
        heading: "Pokojové rostliny ‚k nezabití'",
        body: "Zamiokulkas: snese stín, sucho i zapomenutí na měsíce. Zalijte jednou za 2–3 týdny. Tchýnin jazyk (Sansevieria): vertikální, elegantní, zvládne téměř nulovou zálivku. Pothos (Epipremnum): popínavá/převislá rostlina, roste v šeru, snese nepravidelnou zálivku. Aspidistra: její anglické jméno je ‚cast-iron plant' (železná rostlina). Stín, sucho, zanedbání — zvládne vše. Aloe vera: zalijte jednou za 2–3 týdny, dejte ke světlu, a máte bezúdržbovou rostlinu s léčivými účinky.",
      },
      {
        type: "plantList",
        heading: "Nejodolnější pokojovky",
        plantIds: [
          "zamioculcas-zamiifolia",
          "sansevieria-trifasciata",
          "epipremnum-aureum",
          "aspidistra-elatior",
          "aloe-vera",
          "crassula-ovata",
          "chlorophytum-comosum",
        ],
      },
      {
        type: "text",
        heading: "Zahradní rostliny bez údržby",
        body: "Rozchodník (Sedum): sukulentní trvalka pro slunce a sucho. Kvete na podzim, přežije bez zálivky celé léto. Netřesk (Sempervivum): roste ve štěrbinách, na střechách, ve skalce — doslova kdekoli se sluncem. Levandule: po zakořenění nevyžaduje zálivku. Stačí jednou ročně sestříhat. Dlužicha (Heuchera): barevné listy celý rok, snese stín i slunce. Kostřava sivá: modrý polštářek, který roste v suché půdě a nepotřebuje péči.",
      },
      {
        type: "plantList",
        heading: "Bezúdržbové zahradní rostliny",
        plantIds: [
          "sedum-spectabile",
          "sempervivum-tectorum",
          "lavandula-angustifolia",
          "heuchera",
          "festuca-glauca",
          "echinacea-purpurea",
        ],
      },
      {
        type: "tip",
        title: "Zlaté pravidlo pro lenochy",
        body: "Při výběru rostlin se řiďte pravidlem: pokud pochází z drsného prostředí (poušť, skály, horská louka), pravděpodobně přežije vaši nepéči. Tropické rostliny vyžadující stálou vlhkost (kapradiny, kalátey) jsou pravý opak.",
      },
    ],
  },
  {
    slug: "rostliny-odpuzujici-komary",
    title: "Rostliny odpuzující komáry: přírodní ochrana na zahradě i balkoně",
    excerpt:
      "Některé rostliny přirozeně odpuzují komáry svou vůní. Vysaďte je na terasu, k posezení nebo do truhlíku.",
    date: "2026-03-18",
    author: "Ta Pravá",
    heroImage: "/images/months/07.png",
    tags: ["balkon", "zahrada", "tipy"],
    metaDescription:
      "Které rostliny odpuzují komáry? Levandule, citronela, máta, rozmarýn a další. Přírodní ochrana na zahradě a balkoně.",
    content: [
      {
        type: "text",
        body: "Letní večery na terase kazí jen jedno — komáři. Místo chemických repelentů můžete využít rostliny, které komáry přirozeně odpuzují svými esenciálními oleji. Žádná rostlina není zázračný repelent, ale ve správné kombinaci a umístění dokáží výrazně snížit počet otravného hmyzu.",
      },
      {
        type: "text",
        heading: "Levandule",
        body: "Nejznámější přírodní repelent. Silice linalool a linalyl acetát, které levandule obsahuje, komáry odpuzují. Vysaďte ji podél terasy, k posezení nebo do truhlíků u dveří. Bonus: krásně voní, kvete fialově a láká včely a motýly.",
      },
      { type: "plantList", plantIds: ["lavandula-angustifolia"] },
      {
        type: "text",
        heading: "Šanta kočičí (Nepeta cataria)",
        body: "Studie amerického státního úřadu ukázaly, že nepetalakton (účinná látka šanty) je 10× účinnější než DEET (chemický repelent). Kočky ji milují, komáři nenávidí. Nenáročná trvalka, kvete modře, roste na slunci i v polostínu.",
      },
      { type: "plantList", plantIds: ["nepeta-cataria"] },
      {
        type: "text",
        heading: "Muškát (Pelargonium)",
        body: "Zejména vonné muškáty s citronovým aroma (Pelargonium citrosum, tzv. ‚citrónová pelargónie') jsou účinné proti komárům. Klasické muškáty na balkoně také pomáhají — jejich silice komáry odpuzují. Navíc kvete celé léto a je nenáročná.",
      },
      { type: "plantList", plantIds: ["pelargonium-zonale"] },
      {
        type: "text",
        heading: "Rozmarýn",
        body: "Rozmarýn obsahuje silice (kafr, borneol), které komáry a další hmyz odpuzují. Skvěle roste v truhlíku na slunném balkonu. Dvojí užitek: odpuzuje komáry a dochucuje grilované maso.",
      },
      { type: "plantList", plantIds: ["rosmarinus-officinalis"] },
      {
        type: "text",
        heading: "Máta",
        body: "Mentol v mátě je přirozeným repelentem. Pěstujte v květináči (v záhonu se nekontrolovaně šíří). Umístěte ke dveřím, oknům nebo na stůl na terase. Listy můžete rozmačkat a potřít kůži jako přírodní repelent.",
      },
      { type: "plantList", plantIds: ["mentha-piperita"] },
      {
        type: "tip",
        title: "Jak zvýšit účinnost",
        body: "Samotná přítomnost rostliny nestačí — silice se uvolňují hlavně při poranění listů. Občas listy pomoučte, přetřete nebo postříhejte, aby se aroma uvolnilo. Kombinujte více druhů — koktejl vůní je účinnější než jedna rostlina. Umístěte rostliny tam, kde sedíte — ne na druhou stranu zahrady.",
      },
    ],
  },
  {
    slug: "jedle-kvetiny-do-salatu-a-na-dort",
    title: "Jedlé květiny do salátu a na dort: co kvete a chutná",
    excerpt:
      "Květiny nejsou jen na okrasu. Přehled jedlých květin, které oživí vaše saláty, dezerty i nápoje.",
    date: "2026-03-15",
    author: "Ta Pravá",
    heroImage: "/images/months/06.png",
    tags: ["kuchyně", "zahrada", "jedlé květiny"],
    metaDescription:
      "Jedlé květiny do salátu, na dort a do nápojů. Které květy jsou jedlé, jak je sklízet a jak používat v kuchyni.",
    content: [
      {
        type: "text",
        body: "Jedlé květiny jsou jedním z nejstarších gastronomických trendů — a přesto jsou stále překvapením. Fialky v salátu, lichořeřišnice na chlebíčku, levandule v limonádě nebo růžové lístky na dortu. Jsou krásné, voňavé a často i zdravé. Ale pozor — ne každá květina je jedlá!",
      },
      {
        type: "tip",
        title: "Základní pravidla bezpečnosti",
        body: "Jezte pouze květiny, které jste si sami vypěstovali nebo je koupili jako jedlé. Nikdy nejezte květiny z květinářství — bývají ošetřené pesticidy. Nesbírejte u silnic a na ošetřovaných plochách. Pokud si nejste jistí identifikací, nejezte. Některé krásné květiny (konvalinka, náprstník, oměj) jsou smrtelně jedovaté.",
      },
      {
        type: "text",
        heading: "Lichořeřišnice (Tropaeolum majus)",
        body: "Královna jedlých květin. Květy i listy mají pikantní, lehce pepřnou chuť připomínající rukolu. Barvy od žluté přes oranžovou po červenou. Skvělé do salátů, na chlebíčky, na ozdobu polévek. Semena nakládaná v octu nahrazují kapary. Snadno se pěstuje — zvládne i začátečník.",
      },
      { type: "plantList", plantIds: ["tropaeolum-majus"] },
      {
        type: "text",
        heading: "Violka vonná (Viola odorata) a maceška",
        body: "Drobné fialové květy s jemnou sladkou vůní. Klasická ozdoba dortů a dezertů — krystalizované (potřené bílkem a posypané cukrem) vydrží měsíce. Macešky mají větší květy v širokém barevném spektru, chuť je jemná, lehce travnatá. Obě se hodí do salátů, na zmrzlinu a do nápojů.",
      },
      { type: "plantList", plantIds: ["viola-odorata", "viola-wittrockiana"] },
      {
        type: "text",
        heading: "Brutnák lékařský (Borago officinalis)",
        body: "Jasně modré hvězdicovité květy s okurkovitou chutí. Nádherné v letních nápojích, zamražené v kostkách ledu nebo v salátech. Brutnák je letničky, ale bohatě se vysévá. Celá rostlina je jedlá — mladé listy chutnají jako okurka.",
      },
      { type: "plantList", plantIds: ["borago-officinalis"] },
      {
        type: "text",
        heading: "Slunečnice (Helianthus annuus)",
        body: "Okvětní lístky jsou jedlé — mají lehce hořkou, oříškovou chuť. Loupané semena (slunečnicová jádra) jsou klasika. Skvělé do salátů a pečiva. Poupata se dají grilovat podobně jako artyčoky.",
      },
      { type: "plantList", plantIds: ["helianthus-annuus"] },
      {
        type: "text",
        heading: "Další jedlé květiny",
        body: "Levandule: sladkově kořenitá, do limonád, pečiva a cukru. Rozmarýn: modré kvítky s rozmarýnovou chutí. Hvozdík: sladká hřebíčková chuť, odstraňte bílou patku. Aksamitník (Tagetes): pikantní, citrusová chuť, skvělý do rýžových pokrmů. Růže: okvětní lístky do džemů, sirupů, čajů — odstraňte bílou patku (je hořká). Sedmikráska: jemná travnatá chuť, ideální ozdoba.",
      },
      {
        type: "plantList",
        heading: "Jedlé květiny v katalogu",
        plantIds: ["tagetes-patula", "dianthus-gratianopolitanus", "lavandula-angustifolia"],
      },
    ],
  },
  {
    slug: "jak-pestovat-kiwi-aktinidie-v-cesku",
    title: "Jak pěstovat kiwi (aktinidie) v Česku: exotika na vaší zahradě",
    excerpt:
      "Kiwi v Česku? Ano! Mini kiwi (aktinidie) dozrává i v našem klimatu. Jak ho vysadit, vést a sklízet.",
    date: "2026-03-12",
    author: "Ta Pravá",
    heroImage: "/images/blog-popinave.png",
    tags: ["zahrada", "ovoce", "popínavé"],
    metaDescription:
      "Jak pěstovat kiwi (aktinidie) v českých podmínkách. Mini kiwi, výsadba, opora, řez a sklizeň krok za krokem.",
    content: [
      {
        type: "text",
        body: "Kiwi si většina lidí spojuje s Novým Zélandem, ale aktinidie — příbuzná klasického kiwi — se úspěšně pěstuje i v Česku. Zejména mini kiwi (Actinidia arguta) plodí drobné plody velikosti třešně se sladkou chutí, které se jedí i se slupkou. A je mrazuvzdorná do -25 °C!",
      },
      {
        type: "text",
        heading: "Druhy aktinidií pro české klima",
        body: "Aktinidie ostrolistá (A. arguta, mini kiwi): nejspolehlivější volba. Plody 2–3 cm, sladké, jedí se se slupkou. Mrazuvzdornost do -25 °C. Silný růst, potřebuje pevnou oporu. Aktinidie pestrolistá (A. kolomikta): okrasná i užitková. Listy mají bílo-růžové zbarvení. Menší plody, mrazuvzdornost až -35 °C. Méně plodná, ale nejodolnější.",
      },
      {
        type: "plantList",
        heading: "Aktinidie v katalogu",
        plantIds: ["actinidia-arguta", "actinidia-kolomikta"],
      },
      {
        type: "text",
        heading: "Samčí a samičí rostliny",
        body: "Aktinidie jsou dvoudomé — potřebujete samčí i samičí rostlinu pro opylení a plodnost. Jeden samec opylí až 6 samic. Existují i samoplodné odrůdy (Issai), ale s opylovačem mají vyšší výnos. Pohlaví poznáte až při prvním kvetení (3.–4. rok).",
      },
      {
        type: "text",
        heading: "Výsadba a opora",
        body: "Sázejte na jaře do slunného, závětří chráněného místa. Aktinidie potřebuje pevnou oporu — pergolu, drátěnku nebo treláž. Dorůstá 5–10 m a je velmi silná. Půda humózní, propustná, mírně kyselá. Nesázejte do vápenité půdy. Po výsadbě zamulčujte a pravidelně zalijte v prvních letech.",
      },
      {
        type: "tip",
        title: "Pozor na pozdní jarní mrazy",
        body: "Aktinidie raší relativně brzy (duben) a mladé výhony jsou citlivé na pozdní mrazy. V ohrožených lokalitách zakryjte rašící rostlinu netkanou textilií při předpovědi mrazu. Proto je ideální výsadba u jižní stěny domu, která akumuluje teplo.",
      },
      {
        type: "text",
        heading: "Řez a vedení",
        body: "Aktinidii veďte podobně jako vinnou révu — hlavní ramena po drátěnce, z nich krátké plodonosné výhony. Letní řez (červenec): zkraťte nové přírůstky na 5–6 listů za posledním plodem. Zimní řez (únor–březen): prosvětlete, odstraňte staré dřevo. Neřežte na jaře — míza silně teče a rostlina ‚krvácí'.",
      },
      {
        type: "text",
        heading: "Sklizeň",
        body: "Mini kiwi dozrává v září–říjnu. Plody jsou zralé, když mírně změknou na dotek. Sklízejte postupně — ne všechny dozrávají najednou. Nedozrálé plody dozrají při pokojové teplotě za několik dní (podobně jako rajčata). Úroda z jedné rostliny může být 10–30 kg!",
      },
    ],
  },
  {
    slug: "jak-na-kompostovani-pro-zacatecniky",
    title: "Jak na kompostování pro začátečníky: krok za krokem",
    excerpt:
      "Kompostování je nejlepší způsob, jak z odpadu vyrobit zlato pro zahradu. Návod pro úplné začátečníky.",
    date: "2026-03-10",
    author: "Ta Pravá",
    heroImage: "/images/months/05.png",
    tags: ["zahrada", "kompost", "ekologie"],
    metaDescription:
      "Jak začít kompostovat. Jaký kompostér, co kompostovat, poměr zelené a hnědé složky a jak poznat hotový kompost.",
    content: [
      {
        type: "text",
        body: "Kompostování je nejpřirozenější způsob recyklace — přeměňujete kuchyňský a zahradní odpad na výživnou zeminu pro své rostliny. Zdarma, ekologicky a jednoduše. Pokud máte zahradu, nemáte důvod nekompostovat. A i v bytě můžete kompostovat s vermikompostérem.",
      },
      {
        type: "text",
        heading: "Co kompostovat",
        body: "ZELENÁ složka (bohatá na dusík): slupky od ovoce a zeleniny, kávová sedlina, čajové sáčky (bez svorek), tráva ze sekačky, plevel (bez semen!), zbytky zeleniny.\n\nHNĚDÁ složka (bohatá na uhlík): suché listí, dřevěná štěpka, kartón a papír (nastříhaný), sláma, piliny, větve (nasekané).\n\nPoměr: přibližně 2–3 díly hnědé na 1 díl zelené.",
      },
      {
        type: "text",
        heading: "Co NEKOMPOSTOVAT",
        body: "Maso, kosti, ryby — lákají hlodavce a páchnout. Mléčné výrobky — stejný důvod. Pečivo — plísní a přitahuje myši. Olejem nasáklé zbytky. Nemocné rostliny — choroby přežijí kompostování. Kočičí/psí trus — obsahuje parazity. Popel z uhlí (dřevěný popel v malém množství lze).",
      },
      {
        type: "text",
        heading: "Výběr kompostéru",
        body: "Otevřená hromada: nejjednodušší, ale nejpomalejší. Vhodná na větší zahrady. Dřevěný/plastový kompostér: udržuje teplo a vlhkost, vypadá upraveně. Ideální pro menší zahrady. Rotační kompostér: nejrychlejší (kompost za 4–8 týdnů), ale menší kapacita. Vermikompostér: pro byty a terasy — žížaly zpracovávají odpad na vynikající kompost.",
      },
      {
        type: "tip",
        title: "Zlaté pravidlo: vrstvit, míchat, zavlažit",
        body: "Střídejte zelené a hnědé vrstvy. Jednou za 2–3 týdny kompost promíchejte vidlemi (přísun kyslíku urychluje rozklad). Udržujte vlhkost jako u ždímaného hadru — ne mokrý, ne suchý. Správný kompost voní po lese, ne po hnilobě.",
      },
      {
        type: "text",
        heading: "Jak dlouho trvá kompostování",
        body: "Studený kompost (jen vrstvení bez míchání): 6–12 měsíců. Horký kompost (pravidelné míchání, správný poměr): 2–4 měsíce. Rotační kompostér: 4–8 týdnů. Vermikompostér: 2–3 měsíce. Hotový kompost poznáte podle tmavě hnědé barvy, drobivé struktury a příjemné lesní vůně. Původní materiál už není rozeznatelný.",
      },
      {
        type: "text",
        heading: "Jak kompost používat",
        body: "Zamíchejte do záhonů při výsadbě (obohacuje půdu). Použijte jako mulč kolem keřů a stromů (3–5 cm vrstva). Přidejte do substrátu pro přesazování pokojovek (max. 30 %). Rozhoďte po trávníku jako topdressing na jaře. Připravte kompostový čaj (výluh) pro zálivku. Kompost je nejlepší hnojivo — pomalé, přirozené a komplexní.",
      },
    ],
  },
  {
    slug: "osazovaci-plan-trvalkoveho-zahonu-jak-rozmistit-rostliny",
    title: "Osazovací plán trvalkového záhonu: jak správně rozmístit rostliny",
    excerpt:
      "Krásný trvalkový záhon není náhoda — je za ním promyšlený osazovací plán. Jak rostliny rozdělit do skupin a kam je vysadit.",
    date: "2026-04-09",
    author: "Ta Pravá",
    heroImage: "/images/categories/trvalky.png",
    tags: ["zahrada", "trvalky", "plánování"],
    metaDescription:
      "Jak vytvořit osazovací plán trvalkového záhonu. Funkční skupiny rostlin, hustota výsadby, rozmístění a instrukce pro výsadbu krok za krokem.",
    content: [
      {
        type: "text",
        body: "Trvalkový záhon, který vypadá přirozeně a zároveň harmonicky, nevznikne náhodným rozsázením rostlin z květinářství. Stojí za ním promyšlený osazovací plán — rozdělení rostlin do funkčních skupin podle výšky, charakteru a role v záhonu. V tomto článku vám ukážeme, jak takový plán sestavit a podle něj vysadit záhon, který bude krásný od prvního roku.",
      },
      {
        type: "text",
        heading: "Čtyři funkční skupiny trvalek",
        body: "Moderní přístup k tvorbě trvalkových záhonů pracuje se čtyřmi funkčními skupinami. Každá má v záhonu jinou roli, jinou výšku a jiný podíl na celkové ploše. Jejich správná kombinace vytváří přirozeně vypadající celek s bohatou strukturou.",
      },
      {
        type: "text",
        heading: "1. Solitérní trvalky (5–15 % záhonu)",
        body: "Jsou nejvýraznější a nejmohutnější — tvoří horní patro záhonu. Dorůstají obvykle 120–200 cm a jsou jeho hlavními dominantami. Umísťujeme je do pozadí (u zdi, plotu), nebo doprostřed záhonu, pokud je volně stojící (ostrůvkový). Oproti ostatním trvalkám se plně prosadí až ve druhém–třetím roce. Typické solitérní trvalky: ostrožka zahradní, třapatka lesklá, plamenka latnatá, ozdobnice čínská.",
      },
      {
        type: "plantList",
        heading: "Solitérní trvalky v katalogu",
        plantIds: ["delphinium-elatum", "rudbeckia-nitida", "phlox-paniculata", "miscanthus-sinensis"],
      },
      {
        type: "text",
        heading: "2. Skupinové trvalky (35–60 % záhonu)",
        body: "Tvoří střední patro a jsou zastoupeny největším podílem — svým květenstvím určují charakter celého záhonu. Dorůstají 40–100 cm. Klíčové pravidlo: sázejte je ve skupinkách po 3, 5 nebo 7 kusech stejného druhu (lichý počet vypadá přirozeněji). Opakování stejných skupin na více místech záhonu vytváří vizuální rytmus a soudržnost.",
      },
      {
        type: "plantList",
        heading: "Skupinové trvalky v katalogu",
        plantIds: ["salvia-nemorosa", "rudbeckia-fulgida", "hemerocallis", "nepeta-faassenii", "bergenia-cordifolia", "echinacea-purpurea"],
      },
      {
        type: "text",
        heading: "3. Půdokryvné trvalky (35–50 % záhonu)",
        body: "Nejnižší skupina (10–30 cm), která se sází do popředí, na okraje záhonu a jako výplň prázdných míst mezi skupinovými a solitérními trvalkami. Pokrývají půdu, potlačují plevel a vytvářejí plynulý přechod mezi záhonem a okolním prostorem. Mnohé mají atraktivní listy po celou sezónu.",
      },
      {
        type: "plantList",
        heading: "Půdokryvné trvalky v katalogu",
        plantIds: ["heuchera", "ajuga-reptans", "vinca-minor", "geranium-macrorrhizum"],
      },
      {
        type: "text",
        heading: "4. Vtroušené trvalky (5–10 %, nepovinné)",
        body: "Krátkověké, ale samovolně se vysévající rostliny, které vyplňují prostor v době, kdy ostatní trvalky ještě nedorostly do plné krásy. Dodávají záhonu spontánní, ‚divoký' charakter. Časem se samy přesouvají po záhonu a každý rok vypadají trochu jinak. Typické vtroušené trvalky: orlíček, kohoutek věncový, sporýš argentinský, turan Karvinského.",
      },
      {
        type: "plantList",
        heading: "Vtroušené trvalky v katalogu",
        plantIds: ["aquilegia-vulgaris", "lychnis-coronaria", "verbena-bonariensis", "erigeron-karvinskianus"],
      },
      {
        type: "tip",
        title: "Pravidlo hustoty: 7–9 trvalek na m²",
        body: "Dodržujte hustotu 7–9 rostlin na 1 m², což odpovídá rozestupům 30–35 cm. Zpočátku bude záhon vypadat řídce, ale za 2–3 roky se trvalky rozrostou a vytvoří souvislý porost. Příliš hustá výsadba vede ke konkurenci a slabšímu růstu.",
      },
      {
        type: "text",
        heading: "Jak sestavit osazovací plán krok za krokem",
        body: "1. Zakreslete tvar záhonu na papír nebo do aplikace (stačí ruční náčrt).\n\n2. Jako první rozmístěte solitérní trvalky — jsou dominanty, od nich se odvíjí zbytek.\n\n3. Přidejte skupinové trvalky ve skupinkách po 3–7 kusech. Opakujte stejné druhy na více místech.\n\n4. Doplňte půdokryvné trvalky do popředí, na okraje a mezi mezery.\n\n5. Nakonec rozmístěte vtroušené trvalky nahodile po celém záhonu.\n\n6. Před kopáním rozložte hrnky na záhon podle plánu a zkontrolujte celkový dojem. Teprve pak sázejte.",
      },
      {
        type: "text",
        heading: "Příprava stanoviště a výsadba",
        body: "Před výsadbou zbavte místo veškerého plevele a půdu prokypřete do hloubky 25–30 cm. Těžkou jílovitou půdu vylepšete kompostem a trochou štěrku. Trvalky vysazujte od poloviny března do konce října, ideálně v den doručení. Před výsadbou prolijte kontejnery vodou — můžete je na chvíli ponořit do nádoby s vodou.",
      },
      {
        type: "text",
        heading: "Mulčování — nezapomeňte!",
        body: "Po výsadbě záhon vydatně zalijte (20 l/m²) a celou plochu zamulčujte. Na slunná stanoviště použijte kamennou drť (frakce 8/16 mm) ve vrstvě 5–8 cm, která potlačuje plevel a udržuje vlhkost. Pro stinné záhony se hodí kůrový mulč. Mulč přihrnujte i přes kořenový bal, nejen okolo rostliny.",
      },
      {
        type: "tip",
        title: "Cibuloviny jako jarní bonus",
        body: "V říjnu doplňte záhon cibulovinami (tulipány, narcisy, krokusy, modřence). Opatrně odhrnete mulč, zasadíte cibulky ve skupinkách a mulč vrátíte. Na jaře vás odmění barvami ještě před tím, než se trvalky probudí.",
      },
      {
        type: "video",
        src: "https://www.youtube.com/embed/vxpTBOx_TwA?si=CV7GaMfPtcsayNwb&start=12",
        title: "Jak vysadit trvalkový záhon",
        caption: "Video návod na výsadbu trvalkového záhonu",
      },
    ],
  },
  {
    slug: "jak-daleko-sadit-zivy-plot-od-sousedovy-zahrady",
    title: "Jak daleko sázet živý plot od sousedovy zahrady? Pravidla a zákon",
    excerpt:
      "Chcete vysadit živý plot, ale nevíte, jak daleko od hranice pozemku? Přehled zákonných vzdáleností, praktická doporučení a tipy, jak se vyhnout sousedským sporům.",
    date: "2026-04-16",
    author: "Ta Pravá",
    heroImage: "/images/blog-zivy-plot.png",
    tags: ["zahrada", "živý plot", "zákon", "sousedé"],
    metaDescription:
      "Zákonné vzdálenosti pro výsadbu živého plotu od hranice pozemku. Praktický přehled pravidel dle občanského zákoníku, doporučené druhy a tipy na bezproblémovou výsadbu.",
    content: [
      {
        type: "tip",
        title: "Stručné doporučení — co musíte dodržet",
        body: "Stromy a keře dorůstající přes 3 metry: minimálně 3 metry od hranice pozemku. Keře a stromy do 3 metrů výšky: minimálně 1,5 metru od hranice. Vzdálenost se měří od středu kmene/osy keře k hranici pozemku. Pokud si nejste jisti, sázejte raději o půl metru dál — ušetříte si spory. A vždy si promluvte se sousedem dřív, než začnete kopat.",
      },
      {
        type: "text",
        heading: "Proč na vzdálenosti záleží?",
        body: "Živý plot je krásná věc — poskytuje soukromí, tlumí hluk, chrání zahradu před větrem a je domovem pro ptáky. Jenže na rozdíl od dřevěného plotu rostliny nectí hranice pozemků. Přerůstají k sousedovi, hází stín, pouštějí listí a kořeny se šíří pod plot. Pokud nesázíte správně, může se z krásy stát sousedský spor. A ten může skončit až u soudu — nebo pokácením vašeho krásného plotu.",
      },
      {
        type: "text",
        heading: "Co říká zákon? (§ 1017 občanského zákoníku)",
        body: "Vzdálenosti výsadby od hranice pozemku upravuje § 1017 zákona č. 89/2012 Sb. (občanský zákoník). Pravidlo je jednoduché:\n\nStromy a keře, které mohou kdykoli v budoucnu přesáhnout výšku 3 metry → minimální vzdálenost 3 metry od hranice pozemku.\n\nStromy a keře o nižší výšce (do 3 metrů) → minimální vzdálenost 1,5 metru od hranice pozemku.\n\nZákon nerozlišuje mezi stromy a keři — rozhodující je výška, které může rostlina dosáhnout. Takže i pro výsadbu živého plotu z keřů, které nepřesáhnou 3 metry, platí podmínka minimálně 1,5 metru od hranice.",
      },
      {
        type: "text",
        heading: "Výjimky z pravidla",
        body: "Zákon uvádí několik výjimek, kdy se vzdálenosti nemusí dodržet:\n\nNa sousedním pozemku je les nebo sad — stromy v blízkosti jsou očekávatelné.\n\nStromy tvoří rozhradu — tedy historicky oddělují pozemky.\n\nStrom je zvláště chráněn podle zákona o ochraně přírody.\n\nV praxi se výjimka často uplatňuje i u veřejných pozemků (komunikace, parky), kterým přesahy v rozumné míře nevadí.",
      },
      {
        type: "tip",
        title: "Praktická rada",
        body: "Zákonná vzdálenost je minimum. Pokud sázíte rychle rostoucí dřeviny (zerav, habr, ptačí zob), počítejte s tím, že se za pár let rozrostou. Sázejte raději 2 metry od hranice, i když zákon vyžaduje jen 1,5 — ušetříte si budoucí střih ze sousedovy strany a případné spory.",
      },
      {
        type: "text",
        heading: "Které druhy kam? Doporučení podle vzdálenosti",
        body: "Máte-li prostor jen 1,5 metru od hranice, volte nízké keře do 3 metrů: dřišťál, mochna křovitá, tavolník, zimostráz nebo nízké skalníky. Rostou pomaleji a nevyžadují tak častý řez ze strany souseda.\n\nPokud máte 3 metry a více, můžete sáhnout po vyšších druzích: zerav, habr, buk, tis, ptačí zob nebo bobkovišeň. Tyto druhy vytvoří vysoký a hustý plot, ale vyžadují pravidelný tvarový řez.\n\nPro bambusový plot (fargezie) počítejte s větším odstupem a u invazivních druhů instalujte rizomovou bariéru do hloubky minimálně 60 cm.",
      },
      {
        type: "plantList",
        heading: "Nízké keře na plot do 1,5 m od hranice (do 3 m výšky)",
        plantIds: [
          "berberis-thunbergii",
          "potentilla-fruticosa",
          "spiraea-arguta",
          "buxus-sempervirens",
          "berberis-frikartii",
          "berberis-media",
          "rosa-rugosa",
        ],
      },
      {
        type: "plantList",
        heading: "Vyšší druhy na plot 3 m a více od hranice",
        plantIds: [
          "thuja-occidentalis",
          "carpinus-betulus",
          "taxus-baccata",
          "fagus-sylvatica",
          "ligustrum-vulgare",
          "prunus-lusitanica",
          "fargesia-murielae",
          "cotoneaster-lucidus",
        ],
      },
      {
        type: "text",
        heading: "Co když sousedův plot přerůstá k vám?",
        body: "Občanský zákoník (§ 1016) vám dává právo zasáhnout. U keřů a jiných rostlin (tedy i živých plotů) smíte přesahující části odstranit šetrným způsobem, a to bez nutnosti souseda předem vyzývat. U stromů je to přísnější — musíte nejdřív souseda požádat a dát mu přiměřenou dobu na nápravu.\n\nPozor na slovo \"šetrně\" — neznačí to ruční nůžky místo motorové pily, ale to, že byste neměli rostlinu poškodit nebo zničit. Pokud nešetrným řezem zničíte sousedův plot, nesete za to odpovědnost.",
      },
      {
        type: "text",
        heading: "Stín, listí a plody — co jsou imise?",
        body: "I správně vysazený plot může časem způsobovat problémy. Zákon (§ 1013) zakazuje působit na sousední pozemek imisemi v nepřiměřené míře — a to zahrnuje stín, opad listí, plody i vlhkost.\n\nNe každé spadané listí je problém. Zákon pracuje s pojmy \"míra nepřiměřená místním poměrům\" a \"podstatné omezení obvyklého užívání pozemku\". V zastavěné oblasti se vzrostlými zahradami se pár spadaných listů toleruje. Ale pokud váš plot dlouhodobě bere sousedovi světlo nebo mu zavaluje zahradu jehličím, může soud rozhodnout i o odstranění — i když jste dodrželi zákonné vzdálenosti.",
      },
      {
        type: "tip",
        title: "Pozor na dohody se sousedy",
        body: "Ústní nebo písemná dohoda se sousedem, že můžete sázet blíže k hranici, vás chrání jen dočasně. Pokud soused pozemek prodá, nový majitel dohodou vázán není a může požadovat dodržení zákonných vzdáleností. Jedinou jistotou je zřízení věcného břemene (služebnosti) zapsaného v katastru nemovitostí — to \"běží s pozemkem\" a platí i pro budoucí vlastníky.",
      },
      {
        type: "text",
        heading: "Praktický návod: jak sázet živý plot u hranice",
        body: "1. Změřte vzdálenost od hranice pozemku — ne od plotu, ale od skutečné katastrální hranice. Pokud si nejste jisti, nechte si hranici vytyčit geodétem.\n\n2. Rozhodněte, zda sázíte keře do 3 m výšky (vzdálenost 1,5 m) nebo vyšší druhy (vzdálenost 3 m).\n\n3. Vytyčte linii výsadby provázkem a kolíky, měřeno od osy budoucích keřů.\n\n4. Vykopejte rýhu 40–50 cm širokou a hlubokou, na dno přidejte kompost.\n\n5. Sázejte 3–5 kusů na běžný metr podle druhu.\n\n6. Po výsadbě důkladně zalijte a zamulčujte.\n\n7. Promluvte se sousedem — i když sázíte v souladu se zákonem, dobrý vztah je k nezaplacení.",
      },
      {
        type: "text",
        heading: "Shrnutí",
        body: "Výsadba živého plotu je investice na desítky let. Dodržení zákonných vzdáleností vás chrání před spory i před tím, abyste museli krásný vzrostlý plot pokácet. Sázejte raději o kousek dál, volte druhy přiměřené prostoru a hlavně — mluvte se sousedy. Většina problémů se dá vyřešit rozhovorem přes plot, ne přes právníky.",
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
