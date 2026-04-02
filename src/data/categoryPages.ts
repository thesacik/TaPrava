import type { Kategorie, UmisteniMVP } from "@/types/plants";

export interface CategoryTip {
  title: string;
  text: string;
}

export interface CategoryFAQ {
  question: string;
  answer: string;
}

export interface CategoryPageDef {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  longDescription: string;
  tips: CategoryTip[];
  faqs: CategoryFAQ[];
  filterKategorie?: Kategorie;
  filterUmisteni?: UmisteniMVP;
}

export const categoryPages: CategoryPageDef[] = [
  {
    slug: "pokojove-rostliny",
    title: "Pokojové rostliny",
    metaTitle: "Pokojové rostliny — průvodce výběrem pro váš interiér",
    metaDescription:
      "Najděte ideální pokojovou rostlinu pro váš byt nebo dům. Přehled oblíbených pokojovek s nároky na světlo, zálivku a péči. Tipy pro začátečníky i zkušené pěstitele.",
    intro:
      "Pokojové rostliny oživí každý interiér, čistí vzduch a pozitivně ovlivňují náladu. Ať hledáte nenáročnou rostlinu do tmavšího bytu, nebo efektní kus do prosluněného obýváku — v našem katalogu najdete tu pravou.",
    longDescription:
      "Výběr pokojové rostliny závisí především na světelných podmínkách v místnosti, na tom, kolik času chcete péči věnovat, a na tom, zda máte doma děti nebo domácí mazlíčky. Většina pokojovek pochází z tropických oblastí, proto oceňují vyšší vlhkost vzduchu a nepřímé světlo. Některé druhy, jako jsou sanseverie nebo zamiokulkas, zvládnou i tmavší kouty a občasné zapomenutí na zálivku.",
    tips: [
      {
        title: "Světlo je základ",
        text: "Většina pokojových rostlin potřebuje jasné nepřímé světlo. Přímé polední slunce může listy spálit, zatímco v temném koutě budou rostliny strádat. Ideální je místo u východního nebo západního okna.",
      },
      {
        title: "Přelití je horší než sucho",
        text: "Nejčastější příčinou úhynu pokojových rostlin je přemokření. Vždy nechte vrchní vrstvu substrátu proschnout a používejte květináč s drenážním otvorem.",
      },
      {
        title: "Vlhkost vzduchu",
        text: "V zimě klesá vlhkost vzduchu v bytě i pod 30 %. Tropické rostliny ocení rosení listů, misku s keramzitem a vodou, nebo zvlhčovač vzduchu.",
      },
      {
        title: "Bezpečnost v domácnosti",
        text: "Pokud máte malé děti nebo zvířata, volte netoxické druhy — například chlorofytum, peperomie nebo chamedoreu. V našem katalogu snadno vyfiltrujete bezpečné rostliny.",
      },
    ],
    faqs: [
      {
        question: "Jaké pokojové rostliny jsou nejlepší pro začátečníky?",
        answer:
          "Pro začátečníky doporučujeme sanseverii (tchýnin jazyk), zamiokulkas, pothos (šplhavnici) nebo chlorofytum. Tyto rostliny tolerují nepravidelnou zálivku, zvládnou i méně světla a jsou velmi odolné.",
      },
      {
        question: "Jak často zalévat pokojové rostliny?",
        answer:
          "Frekvence zálivky závisí na druhu, velikosti květináče, substrátu a ročním období. Obecné pravidlo: zalijte, když je vrchní 2–3 cm substrátu suchá. V zimě většina pokojovek potřebuje méně vody než v létě.",
      },
      {
        question: "Které pokojové rostliny čistí vzduch?",
        answer:
          "Podle studie NASA patří mezi nejúčinnější čističky vzduchu šplhavnice zlatá (pothos), spathiphyllum (lopatkovec), dracéna, sansevieria a fikus. Tyto rostliny absorbují formaldehyd, benzen a další škodliviny.",
      },
    ],
    filterKategorie: "pokojova",
  },
  {
    slug: "trvalky",
    title: "Trvalky do zahrady",
    metaTitle: "Trvalky — odolné rostliny, které kvetou rok co rok",
    metaDescription:
      "Trvalky jsou páteří každé zahrady. Přehled trvalek s informacemi o období kvetení, nárocích na stanoviště a tipy na kombinace. Najděte trvalky pro slunce i stín.",
    intro:
      "Trvalky jsou vytrvalé byliny, které na zahradě přežívají mnoho let a každou sezónu znovu vykvétají. Jsou základem trvale udržitelné zahrady — jednou vysadíte a těšíte se z nich roky. Od jarních prvosinek po podzimní astry, vždy najdete trvalku pro každé stanoviště.",
    longDescription:
      "Trvalky tvoří páteř záhonů a zajišťují barvu od jara do podzimu. Klíčem k úspěchu je výběr podle stanoviště — světlo, vlhkost a typ půdy určují, které druhy se budou dařit. Správnou kombinací časně, středně a pozdně kvetoucích trvalek vytvoříte záhon, který kvete nepřetržitě celou sezónu. Většina trvalek po několika letech potřebuje dělit, což je zároveň skvělý způsob, jak rozmnožit oblíbené kusy.",
    tips: [
      {
        title: "Plánujte dobu kvetení",
        text: "Kombinujte trvalky s různou dobou kvetení, abyste měli kvetoucí záhon od března do listopadu. Jarní cibuloviny → letní trvalky (denivky, echinacey) → podzimní astry a rozchodníky.",
      },
      {
        title: "Respektujte stanoviště",
        text: "Slunomilné trvalky (levandule, šalvěje, echinacey) na sluneční záhon, stínomilné (bohyšky, brunnery, bergénie) do podrostů stromů. Špatné umístění = slabé kvetení.",
      },
      {
        title: "Mulčujte záhony",
        text: "Vrstva mulče (kůra, štěpka, kompost) 5–7 cm potlačuje plevele, udržuje vlhkost a chrání kořeny před mrazem. Na jaře mulč doplňte.",
      },
      {
        title: "Dělte pravidelně",
        text: "Většinu trvalek dělte každé 3–4 roky na jaře nebo na podzim. Dělení omlazuje rostlinu, zlepšuje kvetení a získáte nové sazenice zdarma.",
      },
    ],
    faqs: [
      {
        question: "Jaké trvalky kvetou celé léto?",
        answer:
          "Mezi trvalky s nejdelší dobou kvetení patří echinacey (třapatky), denivky, rudbeckie, šalvěje, gaury a koreopse. Při pravidelném odstraňování odkvetlých květů (deadheading) kvetou od června do září.",
      },
      {
        question: "Které trvalky jsou vhodné do stínu?",
        answer:
          "Do stínu se skvěle hodí bohyšky (hosty), brunnery, bergénie, plicníky, astilbe, konvalinky a kapradiny. Většina stínomilných trvalek má dekorativní listy, které zahradu oživí i bez výrazných květů.",
      },
      {
        question: "Kdy je nejlepší čas sázet trvalky?",
        answer:
          "Ideální doba pro výsadbu trvalek je jaro (březen–květen) nebo podzim (září–říjen). Podzimní výsadba dává rostlinám čas zakořenit před zimou. V létě sázejte jen s důkladnou zálivkou.",
      },
    ],
    filterKategorie: "trvalka",
  },
  {
    slug: "kere",
    title: "Okrasné keře",
    metaTitle: "Keře na zahradu — okrasné i kvetoucí keře pro každé stanoviště",
    metaDescription:
      "Vyberte si keře do zahrady — od kvetoucích hortenzií a šeříků po stálezelené buxusy. Přehled keřů s nároky na péči, řez a stanoviště.",
    intro:
      "Keře tvoří strukturu zahrady a poskytují celoroční zájem — od jarního kvetení přes letní listovou zeleň až po podzimní zbarvení. Dobře vybraný keř může sloužit jako solitéra, živý plot, nebo podrost pod stromy.",
    longDescription:
      "Okrasné keře se dělí na opadavé (šeříky, hortenzie, forsythie) a stálezelené (buxusy, rhododendrony, cesmíny). Při výběru zvažte konečnou velikost keře, aby nepřerostl vyhrazený prostor. Většina keřů potřebuje pravidelný řez — jednak pro udržení tvaru, jednak pro podporu kvetení. Správně řezané keře jsou hustší, zdravější a bohatěji kvetou.",
    tips: [
      {
        title: "Správný řez je klíčový",
        text: "Keře kvetoucí na jaře (forsythie, šeříky) řežte hned po odkvětu. Keře kvetoucí v létě (hortenzie, budleje) řežte na jaře před rašením. Špatný řez = žádné květy.",
      },
      {
        title: "Plánujte velikost",
        text: "Před výsadbou zjistěte konečnou výšku a šířku keře. Keř zasazený příliš blízko domu nebo plotu brzy začne přerůstat a bude vyžadovat drastický řez.",
      },
      {
        title: "Živé ploty z keřů",
        text: "Pro stříhaný živý plot volte hustě rostoucí druhy (habr, buxus, tůje). Pro volně rostoucí plot zvolte kvetoucí keře (tavolník, šípková růže, dřišťál) — méně práce, více přírody.",
      },
      {
        title: "Stálezelené vs. opadavé",
        text: "Stálezelené keře poskytují strukturu i v zimě, ale bývají pomalejší. Opadavé keře obvykle bohatěji kvetou a podzimní zbarvení listů je bonusem.",
      },
    ],
    faqs: [
      {
        question: "Jaké keře kvetou na jaře?",
        answer:
          "Na jaře kvetou forsythie (zlatý déšť), šeříky, magnólie, rododendrony, azalky, kaliny a tavolníky. Většina z nich kvete na loňském dřevě, proto je důležité řezat je až po odkvětu.",
      },
      {
        question: "Které keře jsou vhodné jako živý plot?",
        answer:
          "Pro stříhaný živý plot: habr, buxus, ptačí zob, tůje. Pro volně rostoucí: tavolník, dřišťál, mochna, šípková růže. Výška plotu, frekvence stříhání a požadavek na stálezelenost určují nejlepší volbu.",
      },
      {
        question: "Jak pečovat o hortenzie?",
        answer:
          "Hortenzie milují polostín, vlhkou kyselou půdu a pravidelnou zálivku. Velkokvěté hortenzie (macrophylla) řežte jen suché květy, latnaté (paniculata) můžete řezat radikálně na jaře. Barvu květů u macrophylla ovlivňuje pH půdy — kyselá = modrá, zásaditá = růžová.",
      },
    ],
    filterKategorie: "ker",
  },
  {
    slug: "stromy",
    title: "Okrasné stromy",
    metaTitle: "Stromy do zahrady — okrasné, ovocné i stálezelené stromy",
    metaDescription:
      "Vyberte strom do zahrady — od malých okrasných po vzrostlé stínící stromy. Průvodce výběrem s informacemi o velikosti, rychlosti růstu a nárocích.",
    intro:
      "Stromy jsou nejdůležitějším prvkem zahrady — poskytují stín, intimitu, čistí vzduch a zvyšují hodnotu nemovitosti. Výběr stromu je rozhodnutí na desítky let, proto se vyplatí vybírat pečlivě podle velikosti zahrady a podmínek stanoviště.",
    longDescription:
      "Při výběru stromu je nejdůležitější jeho konečná velikost. Malé zahrady oceňují kompaktní druhy jako japonské javory, okrasné třešně nebo muchovníky. Větší zahrady pojmou i majestátní duby, buky nebo lípy. Nezapomínejte na kořenový systém — některé stromy mají agresivní kořeny, které mohou poškodit stavby nebo potrubí. Ovocné stromy spojují užitek s krásou a existují i sloupovité kultivary pro malé prostory.",
    tips: [
      {
        title: "Myslete na konečnou velikost",
        text: "Malý stromek z kontejneru může za 20 let dorůst 15 metrů. Před výsadbou si zjistěte dospělou výšku a šířku koruny a udržujte dostatečný odstup od budov a sítí.",
      },
      {
        title: "Správný čas výsadby",
        text: "Stromy s balem sázejte na podzim (říjen–listopad) nebo brzy na jaře. Kontejnerové stromy lze sázet po celou vegetační sezónu, ale vyžadují důkladnou zálivku.",
      },
      {
        title: "Zálivka v prvních letech",
        text: "Nově vysazený strom potřebuje pravidelnou zálivku minimálně první 2–3 roky, než se dostatečně zakoření. V suchém létě zalijte vydatně 1–2× týdně.",
      },
      {
        title: "Řez a tvarování",
        text: "Výchovný řez provádějte v prvních letech pro vytvoření správné korunky. Pozdější řez zaměřte na odstranění suchých, křížících se a nemocných větví.",
      },
    ],
    faqs: [
      {
        question: "Jaký strom do malé zahrady?",
        answer:
          "Do malé zahrady se hodí stromy s kompaktní korunou: japonský javor (Acer palmatum), okrasná třešeň, muchovník, šácholan (magnólie) nebo okrasná jabloň. Tyto druhy obvykle dorůstají 3–6 metrů.",
      },
      {
        question: "Jak rychle roste strom?",
        answer:
          "Rychlost růstu se liší: rychle rostoucí stromy (bříza, vrba, topol) přirůstají 50–100 cm ročně, středně rychlé (javor, lípa) 30–50 cm, pomalu rostoucí (dub, buk, jalovec) 15–30 cm ročně. Rychle rostoucí stromy mívají křehčí dřevo.",
      },
      {
        question: "Které stromy jsou vhodné jako stínítko?",
        answer:
          "Pro stín na terase nebo u domu volte stromy se širokou korunou: katalpa, platan, lípa, ořešák, ambroň nebo nahovětvec. Pro menší zahrady japonský javor nebo dřezovec (Gleditsia) — má jemnou krajkovitou korunu, která propouští filtrované světlo.",
      },
    ],
    filterKategorie: "strom",
  },
  {
    slug: "bylinky",
    title: "Bylinky",
    metaTitle: "Bylinky na zahradu i balkon — pěstování, využití a péče",
    metaDescription:
      "Přehled bylinek pro zahradu, balkon i kuchyňský parapet. Jak pěstovat bazalku, rozmarýn, tymián a další. Tipy na výsev, sklizeň a využití.",
    intro:
      "Bylinky patří k nejužitečnějším rostlinám — krásně voní, lákají opylovače, jsou nezbytné v kuchyni a mnohé mají i léčivé účinky. Pěstovat je můžete prakticky kdekoli — na záhonu, v truhlíku na balkoně, nebo na okenním parapetu.",
    longDescription:
      "Většina kuchyňských bylinek pochází ze Středomoří a miluje slunce, teplo a propustnou půdu. Mezi nejoblíbenější patří bazalka, rozmarýn, tymián, oregano, máta a pažitka. Bylinky se dělí na jednoleté (bazalka, koriandr), dvouleté (petržel) a vytrvalé (rozmarýn, tymián, šalvěj). Pravidelná sklizeň bylinkám prospívá — podporuje větvení a zabraňuje předčasnému květu.",
    tips: [
      {
        title: "Slunce a drenáž",
        text: "Středomořské bylinky (rozmarýn, tymián, šalvěj, oregano) vyžadují plné slunce a dobře propustnou půdu. Do substrátu přidejte písek nebo perlit. Přemokřené kořeny = zahnívání.",
      },
      {
        title: "Sklízejte pravidelně",
        text: "Čím více sklízíte, tím více bylinky rostou. Stříhejte vždy nad očkem nebo listovým uzlem. Když bylinka začne kvést, listy ztrácejí aroma — květy včas odstřihněte.",
      },
      {
        title: "Bylinky v kombinaci",
        text: "Ne všechny bylinky spolu vycházejí. Máta je agresivní — pěstujte ji zvlášť v nádobě. Bazalka a rajčata jsou skvělý pár. Rozmarýn, tymián a šalvěj mají podobné nároky a hodí se k sobě.",
      },
      {
        title: "Zimování bylinek",
        text: "Vytrvalé středomořské bylinky (rozmarýn, levandule) přezimujte ve studené světlé místnosti. Tymián a šalvěj většinou přežijí i venku. Jednoleté bylinky před mrazem sklízejte a sušte.",
      },
    ],
    faqs: [
      {
        question: "Jaké bylinky pěstovat na balkoně?",
        answer:
          "Na slunném balkoně se daří bazalce, rozmarýnu, tymiánu, oreganu, pažitce a chilli papričkám. Na polostinný balkon zvolte mátu, meduňku nebo petržel. Všechny bylinky na balkoně potřebují pravidelnou zálivku — substráty v nádobách schnout rychleji.",
      },
      {
        question: "Kdy vysévat bylinky?",
        answer:
          "Většinu bylinek vysévejte od března (předpěstování na parapetu) nebo od května přímo ven. Bazalku vysévejte v dubnu do tepla (klíčí při 20 °C+). Petržel a pažitku lze vysévat již v březnu přímo ven. Vytrvalé bylinky kupujte jako sazenice.",
      },
      {
        question: "Jak sušit bylinky?",
        answer:
          "Bylinky sklízejte ráno po oschnutí rosy. Svažte do svazků a pověste kvítím dolů na suchém, vzdušném a tmavém místě. Sušení trvá 1–2 týdny. Alternativně sušte v troubě na 40 °C s pootevřenými dvířky. Usušené bylinky skladujte ve vzduchotěsných nádobách.",
      },
    ],
    filterKategorie: "bylinka",
  },
  {
    slug: "letni-kvetiny",
    title: "Letničky a letní květiny",
    metaTitle: "Letničky — jednoleté květiny pro bohatou barevnost celé léto",
    metaDescription:
      "Letničky přinášejí do zahrady rychlou a výraznou barvu. Přehled jednoletých květin s dobou kvetení, výsevem a tipy pro truhlíky i záhony.",
    intro:
      "Letničky jsou jednoleté rostliny, které za jedinou sezónu vyrostou, vykvetou a vytvoří semena. Jejich předností je rychlý růst, bohaté kvetení a nepřeberná nabídka barev. Jsou ideální pro truhlíky, záhony i doplnění mezer mezi trvalkami.",
    longDescription:
      "Na rozdíl od trvalek musíte letničky každý rok vysévat nebo kupovat znovu, ale odměnou je explozivní barevnost po celé léto. Mezi nejoblíbenější patří petunie, surfinie, muškáty, afrikány, zinnie, kosmeji a slunečnice. Letničky jsou skvělou volbou pro začínající zahradníky — rychle rostou, rychle kvetou a nedělají problémy. Pro maximální efekt je vysazujte v skupinách jedné barvy nebo v promyšlených barevných kombinacích.",
    tips: [
      {
        title: "Předpěstujte z osiva",
        text: "Mnoho letniček (petunie, lobelky, afrikány) vyžaduje předpěstování od února–března na teplém parapetu. Vysazujte ven až po zmrzlých (po 15. květnu). Rychlé letničky (kosmeji, slunečnice) můžete vysévat přímo ven v květnu.",
      },
      {
        title: "Odstraňujte odkvetlé květy",
        text: "Pravidelné odstraňování odkvetlých květů (deadheading) stimuluje tvorbu nových poupat. U petunií a surfinií stříhejte dlouhé výhony na polovinu — rostlina se zahustí a znovu kvete.",
      },
      {
        title: "Hnojte pravidelně",
        text: "Letničky jsou náročné na živiny — kvetou celé léto. Přihnojujte každé 1–2 týdny tekutým hnojivem pro kvetoucí rostliny. Letničky v truhlících potřebují hnojení častěji než na záhoně.",
      },
      {
        title: "Truhlíkové kombinace",
        text: "Osvědčená kombinace pro truhlík: převislé surfinie na okraji, vzpřímené muškáty uprostřed, drobnokvěté lobelky jako výplň. Barevně ladějte do 2–3 tónů.",
      },
    ],
    faqs: [
      {
        question: "Jaké letničky kvetou celé léto?",
        answer:
          "Nejdéle kvetou petunie, surfinie, muškáty, afrikány (tagetes), begónie, verbeny, zinnie a lobelky. Při pravidelném hnojení a odstraňování odkvetlých květů kvetou nepřetržitě od června do prvních mrazíků.",
      },
      {
        question: "Jaký je rozdíl mezi letničkami a trvalkami?",
        answer:
          "Letničky dokončí celý životní cyklus (klíčení → růst → květ → semeno → odumření) za jednu sezónu. Trvalky přežívají více let a každou sezónu znovu vyrostou z kořenů. Letničky mají obvykle bohatší a delší kvetení, ale musíte je každý rok obnovovat.",
      },
      {
        question: "Kdy vysazovat letničky ven?",
        answer:
          "Letničky citlivé na mráz (petunie, muškáty, begónie) vysazujte ven po zmrzlých, tedy po 15. květnu. Odolnější druhy (macešky, hledíky, chrpy) zvládnou i lehký mráz a lze je vysadit již v dubnu.",
      },
    ],
    filterKategorie: "letnicka",
  },
  {
    slug: "popinave-rostliny",
    title: "Popínavé rostliny",
    metaTitle: "Popínavé rostliny — na pergolu, plot i zeď",
    metaDescription:
      "Popínavé rostliny ozdobí pergolu, plot, zeď i oblouk. Přehled popínavek s nároky na stanoviště, rychlostí růstu a tipy pro pěstování.",
    intro:
      "Popínavé rostliny využívají vertikální prostor a dokážou proměnit holou zeď, plot nebo pergolu v živou zelenou stěnu. Od romantických pnoucích růží a voňavého jasmínu po rychle rostoucí přísavník — popínavky přinášejí do zahrady nový rozměr.",
    longDescription:
      "Popínavé rostliny se liší způsobem uchycení: úponkaté (hrachor, klematis) potřebují mříž nebo drátěnku, ovijavé (wistérie, fazol) se obtáčejí kolem podpěry, přísavné (přísavník, břečťan) se drží přímo zdi pomocí přísavek. Způsob uchycení určuje, jakou oporu musíte poskytnout. Některé popínavky jsou velmi razantní — wistérie nebo přísavník mohou poškodit omítku, pokud nemají dostatečný prostor.",
    tips: [
      {
        title: "Zvolte správnou oporu",
        text: "Úponkaté popínavky (klematis, luštěniny) potřebují mříž s oky 10–15 cm. Ovijavé (wistérie, chmel) potřebují silný sloupek nebo pergolu. Přísavné (břečťan, přísavník) nepotřebují oporu, ale mohou poškodit fasádu.",
      },
      {
        title: "Kombinujte doby kvetení",
        text: "Zasaďte k sobě popínavky kvetoucí v různou dobu: jarní klematis Montana → letní pnoucí růže → podzimní zbarvení přísavníku. Získáte celoroční zajímavost na jedné opoře.",
      },
      {
        title: "Řez klematisů",
        text: "Klematisy se dělí do 3 řezových skupin podle doby kvetení. Špatný řez = žádné květy. Skupina 1 (jarní) se neřeže, skupina 2 (velkokvěté letní) mírně, skupina 3 (pozdně letní) radikálně na jaře.",
      },
      {
        title: "Zelená stěna pro soukromí",
        text: "Pro rychlé zastínění plotu nebo pergoly sáhněte po chmelové révě (jednoletá, rychlá), břečťanu (stálezelený) nebo wistérii (luxusní kvetení). Přísavník virginský přináší spektakulární podzimní zbarvení.",
      },
    ],
    faqs: [
      {
        question: "Jaké popínavé rostliny rostou nejrychleji?",
        answer:
          "Nejrychleji rostou chmelová réva (jednoletá, až 6 m za sezónu), fazol šarlatový, břečťan a přísavník. Ze stálezelených je rychlý břečťan. Z kvetoucích dosahuje wistérie impozantních rozměrů, ale plný efekt přichází až po 3–5 letech.",
      },
      {
        question: "Která popínavka je nejlepší na pergolu?",
        answer:
          "Na pergolu se hodí wistérie (nádherné hrozny květů), pnoucí růže, klematis nebo okrasná réva. Wistérie vyžaduje pevnou konstrukci — dospělá rostlina je velmi těžká. Pro rychlý efekt kombinujte trvalé popínavky s jednoletými (fazol, lichořeřišnice).",
      },
      {
        question: "Jak pěstovat klematis?",
        answer:
          "Klematis miluje slunce nahoře a stín u kořenů — kořenovou zónu zastíňte nízkými trvalkami nebo mulčem. Sázejte o 5–10 cm hlouběji než v kontejneru. Zajistěte mříž a pravidelně přivazujte nové výhony.",
      },
    ],
    filterKategorie: "popinava",
  },
  {
    slug: "okrasne-travy",
    title: "Okrasné trávy",
    metaTitle: "Okrasné trávy — elegance a pohyb v zahradě po celý rok",
    metaDescription:
      "Okrasné trávy přinášejí do zahrady lehkost, texturu a pohyb. Přehled okrasných travin s nároky na stanoviště a tipy pro péči.",
    intro:
      "Okrasné trávy přinášejí do zahrady pohyb, zvuk a texturu, které jiné rostliny nenabídnou. Jemné klasy se vlní ve větru, na podzim se zbarví do teplých tónů a v zimě působí krásně pokryté jinovatkou. Jsou nenáročné, elegantní a skvěle doplňují jak moderní, tak přírodní zahrady.",
    longDescription:
      "Okrasné trávy se dělí na teplomilné (miscanthus, pennisetum, panicum) — ty raší pozdě na jaře a dorůstají během léta, a chladnomilné (stipa, festuca, molinia) — ty rostou už od jara. Většina travin potřebuje plné slunce a propustnou půdu. Jsou ideální pro prérijní výsadby v kombinaci s echinaceami, šalvějemi a rudbeckiemi. Jedinou pravidelnou péčí je sestřih na jaře před rašením.",
    tips: [
      {
        title: "Stříhejte až na jaře",
        text: "Nikdy nestříhejte okrasné trávy na podzim. Suché stébla chrání srdce trávy před mrazem a vypadají krásně s jinovatkou. Sestřihněte na 10–15 cm nad zemí na konci února nebo v březnu.",
      },
      {
        title: "Sázejte ve skupinách",
        text: "Jednotlivá tráva může vypadat ztracená. Sázejte ve skupinách 3–5 kusů pro silnější efekt. Menší trávy (festuca, stipa) vysazujte v blocích 7–9 kusů.",
      },
      {
        title: "Prérijní styl",
        text: "Kombinujte okrasné trávy s trvalkami: miscanthus + echinacey, stipa + šalvěje, molinia + astry. Prérijní záhony jsou nízkoúdržbové a krásné od léta do zimy.",
      },
      {
        title: "Pozor na rozpínavost",
        text: "Některé trávy (třtina, bambus) se agresivně rozrůstají výběžky. Sázejte je do rizomové bariéry nebo volte trsnaté druhy (miscanthus, pennisetum), které zůstávají na místě.",
      },
    ],
    faqs: [
      {
        question: "Jaké okrasné trávy jsou nejlepší pro začátečníky?",
        answer:
          "Pro začátečníky doporučujeme miscanthus (ozdobnice čínská) — dorůstá 150–200 cm a je efektní, festuca glauca (kostřava sivá) — kompaktní stříbrná tráva, a pennisetum (dochan) — krásné klasy v létě. Všechny jsou nenáročné a potřebují jen jarní sestřih.",
      },
      {
        question: "Mohou okrasné trávy růst ve stínu?",
        answer:
          "Většina okrasných travin preferuje plné slunce, ale některé zvládnou polostín: hakonechloa (japonská tráva), carex (ostřice) a molinia (bezkolenec). Ve stínu trávy méně kvetou, ale listy zůstávají dekorativní.",
      },
      {
        question: "Jak velké dorůstají okrasné trávy?",
        answer:
          "Záleží na druhu: miniaturní festuca 20–30 cm, střední pennisetum a stipa 60–100 cm, velké miscanthus a cortaderia (pampová tráva) 150–300 cm. Vždy si ověřte konečnou velikost, abyste trávu zasadili na správné místo.",
      },
    ],
    filterKategorie: "travina",
  },
  {
    slug: "rostliny-na-balkon",
    title: "Rostliny na balkon a terasu",
    metaTitle: "Rostliny na balkon — květiny, bylinky i zelenina do truhlíků",
    metaDescription:
      "Vyberte nejlepší rostliny na balkon a terasu. Přehled květin, bylinek a rostlin do truhlíků a květináčů s tipy pro pěstování na balkónech.",
    intro:
      "I malý balkon může být zelenou oázou. Ať máte slunný jih nebo stinný sever, existují rostliny, které se vašim podmínkám přizpůsobí. Truhlíky, květináče, závěsné koše — s trochou kreativity proměníte každý balkon v mini zahradu.",
    longDescription:
      "Balkonové zahradničení má svá specifika: omezený prostor, rychle vysychající substrát, vítr a často extrémní teploty. Klíčem k úspěchu je výběr rostlin podle orientace balkonu — jižní balkon v létě sálá a vyžaduje odolné druhy, severní balkon potřebuje stínomilné rostliny. Nezapomínejte na pravidelnou zálivku (v létě i 2× denně) a hnojení, protože rostliny v nádobách mají omezený přístup k živinám. Investujte do kvalitního substrátu s hydrogelom, který zadržuje vodu.",
    tips: [
      {
        title: "Orientace balkonu rozhoduje",
        text: "Jižní balkon: pelargónie, petunie, levandule, rozmarýn. Východní/západní: fuchsie, begónie, hortenzie. Severní: balzamíny, kapradiny, břečťan, bohyšky v nádobách.",
      },
      {
        title: "Zálivka je priorita",
        text: "Truhlíky schnout mnohem rychleji než záhon. V létě zalijte ráno a večer. Používejte substráty s hydrogelom nebo samozavlažovací truhlíky — ušetří čas a rostliny netrpí.",
      },
      {
        title: "Využijte vertikálu",
        text: "Na malém balkoně pěstujte nahoru — závěsné koše, žebříkové regály, popínavky na mříži. Získáte více zelené plochy bez zabírání podlahy.",
      },
      {
        title: "Bylinky a zelenina",
        text: "Na slunném balkoně úspěšně vypěstujete rajčata cherry, papričky, jahody, bazalku, pažitku i salát. Jedna samozavlažovací nádoba s bylinkami může nahradit nákup v obchodě.",
      },
    ],
    faqs: [
      {
        question: "Jaké rostliny na severní (stinný) balkon?",
        answer:
          "Na stinný balkon se hodí begónie, balzamíny (netýkavky), fuchsie, břečťan, kapradiny, hostiy v nádobách a vřesy. Z jedlých rostlin zvládne polostín máta, meduňka a petržel. Klíčem je dostatek vlhkosti — ve stínu substrát sice schne pomaleji, ale rostliny potřebují pravidelnou zálivku.",
      },
      {
        question: "Jak přezimovat balkonové rostliny?",
        answer:
          "Letničky (petunie, muškáty) se obvykle na jaře kupují nové, ale muškáty lze přezimovat ve studené světlé místnosti. Trvalky v nádobách jsou citlivější na mráz než na záhoně — obalte květináč bublinkovou fólií nebo přesuňte do neprůzmrzné místnosti. Stálezelené (buxus, břečťan) nechte venku, ale zalijte před mrazem.",
      },
      {
        question: "Jaké truhlíky a květináče vybrat?",
        answer:
          "Plastové jsou lehké a levné, ale přehřívají se na slunci. Terakotové dýchají, ale jsou těžké a mohou prasknout mrazem. Sklolaminát je kompromis — lehký a odolný. Vždy volte nádoby s drenážním otvorem. Minimální hloubka 20 cm pro letničky, 30+ cm pro trvalky a keříky.",
      },
    ],
    filterUmisteni: "balkon_terasa",
  },
];

export function getCategoryBySlug(slug: string): CategoryPageDef | undefined {
  return categoryPages.find((c) => c.slug === slug);
}
