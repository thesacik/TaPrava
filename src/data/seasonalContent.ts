import type { Mesic } from "@/types/plants";

export interface MonthlyTask {
  title: string;
  text: string;
}

export interface MonthContent {
  month: Mesic;
  name: string;
  slug: string;
  heroTitle: string;
  intro: string;
  gardenTasks: MonthlyTask[];
  indoorTasks: MonthlyTask[];
  plantingTips: string;
  metaDescription: string;
}

export const monthlyContent: Record<Mesic, MonthContent> = {
  1: {
    month: 1,
    name: "Leden",
    slug: "leden",
    heroTitle: "Zahrada v lednu — plánujte novou sezónu",
    intro:
      "V lednu zahrada odpočívá pod sněhem, ale zahradník by neměl spát. Je to ideální čas na plánování záhonů, objednávání semen a kontrolu uskladněných hlíz a cibulovin. V interiéru se věnujte pokojovým rostlinám, které teď potřebují méně vody a žádné hnojení.",
    gardenTasks: [
      {
        title: "Plánujte záhony",
        text: "Nakreslete si plán zahrady, rozhodněte co kde poroste. Objednejte semena a sazenice z katalogů, dokud je plný výběr.",
      },
      {
        title: "Kontrolujte uskladněné hlízy",
        text: "Zkontrolujte dahlie, gladioly a begónie uložené ve sklepě. Odstraňte nahnilé kusy, aby se hniloby nešířily.",
      },
      {
        title: "Starejte se o ptáky",
        text: "Doplňujte krmítka a udržujte napáječky nezamrzlé. Ptáci vám na jaře oplatí pomoc hubením škůdců.",
      },
      {
        title: "Ochrana před mrazem",
        text: "Při silných mrazech zkontrolujte zimní ochranu citlivých keřů a růží. Doplňte mulč kolem kořenových krčků.",
      },
    ],
    indoorTasks: [
      {
        title: "Omezte zálivku",
        text: "Většina pokojových rostlin je v zimním klidu. Zalijte až když je substrát suchý do hloubky 3–4 cm. Přelití v zimě je nejčastější příčina kořenové hniloby.",
      },
      {
        title: "Zvyšte vlhkost vzduchu",
        text: "Topení vysušuje vzduch. Roste rostliny nebo postavte misky s vodou k radiátorům. Seskupte rostliny blízko k sobě — vzájemně si zvyšují vlhkost.",
      },
      {
        title: "Kontrolujte škůdce",
        text: "V suchém teplém bytě se daří sviluškám a mšicím. Pravidelně kontrolujte spodní stranu listů a při nálezu ošetřete.",
      },
    ],
    plantingTips: "V lednu nesázíme venku. Na parapetu můžete začít s předpěstováním chilli papriček — mají dlouhou vegetační dobu a potřebují časný start.",
    metaDescription: "Co dělat na zahradě v lednu. Plánování záhonů, kontrola uskladněných hlíz, péče o pokojové rostliny v zimě a tipy pro zahradníky.",
  },
  2: {
    month: 2,
    name: "Únor",
    slug: "unor",
    heroTitle: "Zahrada v únoru — probouzení do nové sezóny",
    intro:
      "Únor je přelomový měsíc. Dny se prodlužují, první sněženky a krokusy naznačují příchod jara. Na parapetu už naplno běží předpěstování letniček a rajčat. Venku můžete v bezmrazých dnech začít s řezem ovocných stromů.",
    gardenTasks: [
      {
        title: "Řez ovocných stromů",
        text: "V bezmrazých dnech (nad 0 °C) provádějte zimní řez jabloní a hrušní. Odstraňte suché, nemocné a křížící se větve. Třešně a švestky řežte až v létě.",
      },
      {
        title: "Předpěstujte rajčata a papriky",
        text: "Od poloviny února vysévejte rajčata, papriky a lilek na teplém parapetu (20–25 °C). Použijte výsevní substrát a zajistěte dostatek světla.",
      },
      {
        title: "Připravte záhony",
        text: "Pokud půda není zmrzlá, začněte s přípravou záhonů — rozhrňte kompost, urovnejte povrch. Nepracujte s mokrou hlínou, zhutníte ji.",
      },
      {
        title: "Výsev letniček",
        text: "Začněte s předpěstováním pomalu rostoucích letniček: petúnie, lobelky, begónie. Potřebují teplo, světlo a 8–10 týdnů do výsadby ven.",
      },
    ],
    indoorTasks: [
      {
        title: "Přesazování pokojovek",
        text: "Konec února je ideální čas pro přesazení pokojových rostlin do většího květináče s čerstvým substrátem. Přesazujte pouze pokud je kořenový bal zcela prorostlý.",
      },
      {
        title: "Postupně zvyšte zálivku",
        text: "S prodlužujícími se dny se rostliny probouzejí. Mírně zvyšte zálivku a začněte přihnojovat slabým roztokem hnojiva.",
      },
      {
        title: "Řízkování pokojovek",
        text: "Mnoho pokojovek (pothos, tradeskantie, filodendron) snadno množíte vodními řízky. Odstřihněte výhon s 2–3 uzly a ponořte do vody u okna.",
      },
    ],
    plantingTips: "Vysévejte na parapetu: rajčata, papriky, chilli, lilek, petúnie, lobelky, begónie. Venku v bezmrazých dnech můžete sázet ovocné stromky s holým kořenem.",
    metaDescription: "Co dělat na zahradě v únoru. Řez ovocných stromů, předpěstování rajčat a paprik, přesazování pokojovek a příprava na jarní sezónu.",
  },
  3: {
    month: 3,
    name: "Březen",
    slug: "brezen",
    heroTitle: "Zahrada v březnu — jaro klepe na dveře",
    intro:
      "Březen je startovní měsíc zahradní sezóny. Kvetou krokusy, narcisy a forsythie. Venku už se naplno pracuje — řez keřů a růží, příprava záhonů, první výsevy. Je to vzrušující doba, kdy se zahrada probouzí k životu.",
    gardenTasks: [
      {
        title: "Řez růží a keřů",
        text: "Řežte letní kvetoucí keře (budleje, hortenzie latnaté) a růže. Odstraňte mrtvé dřevo, zkraťte výhony na 3–5 oček. Jarní kvetoucí keře (forsythie, šeříky) NEŘEŽTE — kvetou na loňském dřevě.",
      },
      {
        title: "Vysévejte zeleninu",
        text: "Na záhon: hrášek, bob, ředkvičky, mrkev, špenát, salát. Na parapetu pokračujte s rajčaty, paprikami a okurkami.",
      },
      {
        title: "Hnojte trávník",
        text: "Jakmile trávník začne růst, aplikujte jarní hnojivo s vyšším obsahem dusíku. Provzdušněte trávník hráběmi nebo vertikutátorem.",
      },
      {
        title: "Dělte trvalky",
        text: "Březen je ideální pro dělení přerostlých trvalek (hostiy, denivek, astilbe). Vyryjte trs, rozdělte na části s kořeny a listy, ihned vysaďte a zalijte.",
      },
    ],
    indoorTasks: [
      {
        title: "Více světla, více vody",
        text: "Dny se výrazně prodlužují. Otočte pokojovky, aby rostly rovnoměrně. Zvyšte frekvenci zálivky a začněte pravidelně hnojit (1× za 2 týdny).",
      },
      {
        title: "Pikýrování semenáčků",
        text: "Semenáčky rajčat, paprik a letniček přesaďte do samostatných kelímků, jakmile mají 2 pravé listy. Manipulujte za listy, ne za stonek.",
      },
      {
        title: "Otužujte sazenice",
        text: "Ke konci března začněte sazenice postupně otužovat — vystavujte je na pár hodin denně venkovnímu vzduchu (balkon, okno).",
      },
    ],
    plantingTips: "Venku: hrášek, bob, cibule, česnek, ředkvičky, špenát, petržel, mrkev. Sazenice jahod a ovocných keřů. Na parapetu: rajčata, okurky, dýně, cukety.",
    metaDescription: "Co dělat na zahradě v březnu. Řez růží a keřů, první výsevy zeleniny, dělení trvalek a jarní příprava záhonů. Kompletní průvodce.",
  },
  4: {
    month: 4,
    name: "Duben",
    slug: "duben",
    heroTitle: "Zahrada v dubnu — všechno roste a kvete",
    intro:
      "Duben je jeden z nejhezčích měsíců v zahradě. Kvetou tulipány, narcisy, magnólie a ovocné stromy. Práce je spousta — výsadba, výsevy, péče o trávník. Pozor na pozdní přízemní mrazíky, které mohou překvapit až do poloviny měsíce.",
    gardenTasks: [
      {
        title: "Vysazujte trvalky a keře",
        text: "Duben je optimální doba pro výsadbu trvalek, keřů a popínavých rostlin z kontejneru. Půda je dostatečně prohřátá a vlhká.",
      },
      {
        title: "Vysévejte přímo na záhon",
        text: "Slunečnice, aksamitníky, kosmeji, fazole, kukuřici — od poloviny dubna vysévejte přímo ven. Choulostivé druhy chraňte netkanou textilií.",
      },
      {
        title: "Ošetřete trávník",
        text: "Pokud jste nestihli v březnu: vertikutace, dosev holých míst, hnojení. Začněte pravidelně sekat — první sečení nastavte sekačku výš.",
      },
      {
        title: "Pozor na mrazíky",
        text: "Sledujte předpověď — noční mrazy do −3 °C se mohou objevit do poloviny dubna. Kvetoucí ovocné stromy a rané sazenice chraňte netkanou textilií.",
      },
    ],
    indoorTasks: [
      {
        title: "Pokojovky ven na balkon",
        text: "Otužilé pokojovky (fíkusy, dracény, juky) můžete ke konci dubna přemístit na chráněný balkon. Začněte postupně — nejprve na pár hodin denně.",
      },
      {
        title: "Přesazování pokračuje",
        text: "Pokud jste nestihli přesadit v únoru/březnu, ještě je čas. Kaktusy a sukulenty přesazujte do propustného substrátu.",
      },
      {
        title: "Zvyšte hnojení",
        text: "Pokojovky jsou nyní v plném růstu. Přihnojujte každé 2 týdny tekutým hnojivem. Kvetoucí druhy hnojivem pro kvetoucí rostliny.",
      },
    ],
    plantingTips: "Venku: letničky do záhonů (po polovině měsíce), trvalky z kontejneru, cibuloviny letních květin (dahlie, gladioly — konec dubna). Zelenina: salát, kedlubny, zelí, brokolice.",
    metaDescription: "Co dělat na zahradě v dubnu. Výsadba trvalek a keřů, výsevy na záhon, péče o trávník a ochrana před pozdními mrazíky.",
  },
  5: {
    month: 5,
    name: "Květen",
    slug: "kveten",
    heroTitle: "Zahrada v květnu — sezóna v plném proudu",
    intro:
      "Květen je nejdůležitější měsíc zahradníka. Po zmrzlých (kolem 15. května) konečně můžete vysadit ven všechny teplomilné rostliny. Zahrada exploduje barvami — kvetou pivoňky, kosatce, šeříky a první růže. Tempo práce je nejvyšší v celém roce.",
    gardenTasks: [
      {
        title: "Po zmrzlých — vysazujte vše",
        text: "Po 15. květnu (Žofie, Servác, Bonifác) vysaďte ven rajčata, papriky, okurky, dýně, letničky, dahlie. Před tím otužujte 1–2 týdny.",
      },
      {
        title: "Mulčujte záhony",
        text: "Mulčování potlačí plevele, zadrží vlhkost a vylepší půdu. Aplikujte 5–7 cm kůrového mulče, štěpky nebo kompostu kolem rostlin.",
      },
      {
        title: "Krmte růže",
        text: "Růže jsou teď hladové. Aplikujte speciální hnojivo pro růže. Kontrolujte padlí a mšice — při prvním nálezu ošetřete.",
      },
      {
        title: "Sázejte letní cibuloviny",
        text: "Pokud jste nestihli v dubnu: dahlie, gladioly, lilie, begónie hlíznaté. Sázejte do prohřáté půdy hlízou nahoru.",
      },
    ],
    indoorTasks: [
      {
        title: "Pokojovky na letní pobyt",
        text: "Většinu pokojových rostlin přesuňte na balkon nebo terasu do polostínu. Pozor — přímé slunce po zimě může spálit listy. Adaptujte postupně.",
      },
      {
        title: "Množení řízky",
        text: "Květen je ideální na zelené řízky pokojovek i zahradních rostlin. Stříhejte 10–15 cm výhony, odstraňte spodní listy a zapíchněte do vlhkého substrátu.",
      },
      {
        title: "Regulujte zálivku",
        text: "Rostliny na balkoně schnout rychleji než uvnitř. V teplých dnech kontrolujte substrát denně, zejména v malých nádobách.",
      },
    ],
    plantingTips: "Po zmrzlých (15. 5.): rajčata, papriky, okurky, cukety, dýně, fazole, kukuřice, bazalka. Letničky: petúnie, muškáty, surfinie, begónie. Dahlie a gladioly do záhonů.",
    metaDescription: "Co dělat na zahradě v květnu. Výsadba po zmrzlých, mulčování záhonů, péče o růže a letní přesun pokojových rostlin na balkon.",
  },
  6: {
    month: 6,
    name: "Červen",
    slug: "cerven",
    heroTitle: "Zahrada v červnu — růže, levandule a první sklizeň",
    intro:
      "Červen je měsícem růží a levandule. Zahrada je na vrcholu kvetení, první jahody a ředkvičky putují na stůl. Hlavní práce teď spočívá v zálivce, odplevelení a pravidelném hnojení. Užívejte si zahradu — je v nejlepší formě.",
    gardenTasks: [
      {
        title: "Zalijte pravidelně",
        text: "V suchém červnu zalijte hluboce 2–3× týdně ráno. Kapková závlaha šetří vodu a je efektivnější. Povrchové kropení podporuje mělké kořeny a plísně.",
      },
      {
        title: "Odstraňujte odkvetlé",
        text: "Pravidelně odstraňujte odkvetlé květy růží, letniček a trvalek. Rostlina pak investuje energii do dalších poupat místo do semen.",
      },
      {
        title: "Sklízejte bylinky",
        text: "Bylinky sklízejte před nebo na začátku kvetení — mají nejsilnější aroma. Sušte, zamrazujte nebo konzervujte v oleji.",
      },
      {
        title: "Letní řez keřů",
        text: "Řežte jarní kvetoucí keře (forsythie, šeříky) hned po odkvětu. Zkraťte odkvetlé výhony o třetinu.",
      },
    ],
    indoorTasks: [
      {
        title: "Stínění a větrání",
        text: "Přímé letní slunce může spálit i sluncomilné pokojovky. Zastíňte jižní okna roletou nebo závojem. Větrejte, ale pozor na průvan.",
      },
      {
        title: "Častější zálivka",
        text: "Teploty stoupají — pokojovky potřebují zálivku 2–3× týdně. Rostliny na balkoně možná i denně. Kontrolujte podmísky — nechte je prázdné.",
      },
      {
        title: "Hnojení na plný výkon",
        text: "Pokojovky jsou v plné vegetaci. Hnojte každé 1–2 týdny. Orchideje speciálním hnojivem, kaktusy hnojivem s nižším dusíkem.",
      },
    ],
    plantingTips: "Vysévejte dvouletky pro příští rok: macešky, topolovky, náprstníky. Dosévejte salát, ředkvičky, fazolky na přísev. Sázejte chryzantémy a podzimní astry.",
    metaDescription: "Co dělat na zahradě v červnu. Zálivka, odstraňování odkvetlých květů, sklizeň bylinek a péče o pokojové rostliny v létě.",
  },
  7: {
    month: 7,
    name: "Červenec",
    slug: "cervenec",
    heroTitle: "Zahrada v červenci — sklizeň a letní péče",
    intro:
      "Červenec je měsícem hojnosti. Zrají rajčata, okurky, cukety a letní ovoce. Zahrada vyžaduje pravidelnou zálivku a pozornost vůči škůdcům a chorobám. Letničky jsou na vrcholu kvetení. Najděte si čas i na odpočinek ve stínu zahrady.",
    gardenTasks: [
      {
        title: "Zálivka je priorita č. 1",
        text: "V horkých dnech zalijte vydatně ráno nebo pozdě večer. Rajčata, okurky a cukety potřebují stabilní vlhkost — nepravidelná zálivka způsobuje praskání plodů.",
      },
      {
        title: "Sklízejte průběžně",
        text: "Rajčata, okurky, cukety a fazolky sklízejte pravidelně — stimuluje to další plodnost. Cukety sklízejte malé (20 cm), velké jsou vodnaté.",
      },
      {
        title: "Letní řez ovocných stromů",
        text: "Třešně, višně a švestky řežte v červenci/srpnu po sklizni. Letní řez omezuje růst a podporuje tvorbu plodonosného obrostu.",
      },
      {
        title: "Živé ploty — druhý řez",
        text: "Stříhané živé ploty (habr, ptačí zob) dostávají v červenci druhý tvarovací řez sezóny.",
      },
    ],
    indoorTasks: [
      {
        title: "Ochrana před přehřátím",
        text: "Při teplotách nad 35 °C trpí i pokojovky. Sukulenty a kaktusy zvládnou teplo, ale tropické rostliny stíněte a rosíte listy.",
      },
      {
        title: "Dovolená — zajistěte zálivku",
        text: "Před odjezdem na dovolenou: zalijte důkladně, přesuňte do polostínu, použijte samozavlažovací koule nebo knoty do misky s vodou.",
      },
      {
        title: "Kontrola škůdců",
        text: "Horko a sucho přejí sviluškám. Rosíte listy a kontrolujte spodní stranu. Při nálezu ošetřete insekticidním mýdlem.",
      },
    ],
    plantingTips: "Vysévejte pro podzimní sklizeň: endivii, fenykl, ředkvičky, špenát pozdní. Sázejte podzimní cibuloviny na rychlení (hyacinty). Řízkujte levanduli a šalvěj.",
    metaDescription: "Co dělat na zahradě v červenci. Zálivka, sklizeň rajčat a ovoce, letní řez stromů a ochrana pokojovek před horkem.",
  },
  8: {
    month: 8,
    name: "Srpen",
    slug: "srpen",
    heroTitle: "Zahrada v srpnu — sklizeň a plánování podzimu",
    intro:
      "Srpen je měsícem plné sklizně a prvních příprav na podzim. Rajčata, papriky a cukety dávají maximum, ovocné stromy se ohýbají pod tíhou plodů. Zároveň je čas sázet podzimní cibuloviny a plánovat další sezónu.",
    gardenTasks: [
      {
        title: "Sázejte jahody",
        text: "Srpen je nejlepší měsíc pro výsadbu jahod. Sazenice zasazené teď zakoření a příští rok dají plnou sklizeň.",
      },
      {
        title: "Vysévejte podsevem",
        text: "Na prázdná místa po sklizených zelenině vysévejte zelené hnojení (hořčice, facélie) nebo rychlou zeleninu (ředkvičky, rukola, špenát).",
      },
      {
        title: "Konzervujte úrodu",
        text: "Zpracujte přebytky — zavařujte rajčata, sušte bylinky, zamrazujte fazolky a bylinky. Připravte domácí pesto z bazalky.",
      },
      {
        title: "Řízkujte stálezelené",
        text: "Řežte polozdřevnatělé řízky stálezelených keřů (buxus, levandule, rozmarýn). Zapíchněte do vlhkého substrátu s perlitem.",
      },
    ],
    indoorTasks: [
      {
        title: "Přenášejte pokojovky dovnitř",
        text: "Ke konci srpna začněte tropické pokojovky přesouvat zpět dovnitř. Noční teploty pod 15 °C vadí většině tropických druhů.",
      },
      {
        title: "Kontrola po letním pobytu venku",
        text: "Před přesunem dovnitř důkladně zkontrolujte rostliny — škůdci zachycení venku se v bytě rychle přemnoží. Ošetřete preventivně.",
      },
      {
        title: "Podzimní přihnojení",
        text: "Přejděte na hnojivo s vyšším obsahem draslíku — připraví rostliny na zimní klid a posílí jejich odolnost.",
      },
    ],
    plantingTips: "Sázejte: jahody, kosatce, pivoňky, podzimní krokusy. Vysévejte: špenát, polníček, endivii pro podzim. Sázejte stálezelené keře (thúje, tisy) — mají čas zakořenit před zimou.",
    metaDescription: "Co dělat na zahradě v srpnu. Výsadba jahod, sklizeň a konzervování, řízkování keřů a příprava zahrady na podzim.",
  },
  9: {
    month: 9,
    name: "Září",
    slug: "zari",
    heroTitle: "Zahrada v září — podzim barví zahradu",
    intro:
      "Září přináší babí léto, teplé dny a chladné noci. Zahrada se barví do podzimních tónů — kvetou astry, rozchodníky a okrasné trávy se třpytí v ranní rose. Je čas sázet jarní cibuloviny, stálezelené a nové trvalky.",
    gardenTasks: [
      {
        title: "Sázejte jarní cibuloviny",
        text: "Od září sázejte tulipány, narcisy, krokusy, hyacinty a sněženky. Sázejte do hloubky 2–3× výšky cibulky. Čím později zasadíte tulipány, tím lépe (ideál: říjen–listopad).",
      },
      {
        title: "Výsadba trvalek a keřů",
        text: "Podzimní výsadba je pro trvalky a keře ideální — půda je ještě teplá a vlhká. Rostliny zakoření před zimou a na jaře vyrazí silněji.",
      },
      {
        title: "Zakládejte nové trávníky",
        text: "Září je nejlepší měsíc pro setí a pokládání trávníku. Teplá půda a ranní rosa zajistí rychlé klíčení a zakořenění.",
      },
      {
        title: "Sklízejte ovoce",
        text: "Sklízejte jablka, hrušky a švestky. Pozdní odrůdy jablek sklízejte před prvními mrazy. Skladujte v chladnu, temnu a při vyšší vlhkosti.",
      },
    ],
    indoorTasks: [
      {
        title: "Všechny pokojovky dovnitř",
        text: "Přeneste zbývající pokojovky z balkonu dovnitř. Adaptace: umístěte nejprve na nejsvětlejší místo a postupně snižujte zálivku.",
      },
      {
        title: "Rychlení cibulovin",
        text: "Kupte hyacinty a narcisy na rychlení. Zasaďte do misky s kamínky a vodou. Za 6–8 týdnů budete mít voňavé květy v bytě.",
      },
      {
        title: "Postupně snižujte hnojení",
        text: "Od října přestaňte hnojit — většina pokojovek se připravuje na zimní klid. Přebytek živin v zimě škodí.",
      },
    ],
    plantingTips: "Sázejte: jarní cibuloviny, trvalky, keře, stromy. Vysévejte: polníček, zimní špenát, rukolu. Zakládejte nové trávníky. Sázejte česnek pro jarní sklizeň.",
    metaDescription: "Co dělat na zahradě v září. Výsadba jarních cibulovin, zakládání trávníků, podzimní výsadba trvalek a sklizeň ovoce.",
  },
  10: {
    month: 10,
    name: "Říjen",
    slug: "rijen",
    heroTitle: "Zahrada v říjnu — příprava na zimu",
    intro:
      "Říjen je měsícem příprav na zimu. Listnaté stromy září podzimními barvami, poslední astry a chrysantémy dodávají zahradě barvu. Je čas hrabat listí, sázet cibuloviny, zazimovat citlivé rostliny a uklidit zahradu.",
    gardenTasks: [
      {
        title: "Hrabte a kompostujte listí",
        text: "Listí z trávníku odstraňte — pod vrstvou listí trávník hnije. Použijte ho jako mulč na záhony, nebo kompostujte. Listí z nemocných stromů spalte.",
      },
      {
        title: "Sázejte tulipány",
        text: "Říjen je ideální čas pro výsadbu tulipánů — pozdní výsadba snižuje riziko tulipánového ohně. Narcisy a krokusy by měly být zasazené nejpozději teď.",
      },
      {
        title: "Zazimujte dahlie a gladioly",
        text: "Po prvním mrazu vyryjte hlízy dahlií a gladiolů. Nechte oschnout, odstraňte zbytek listí a uložte do krabice s rašelinou ve sklepě (5–10 °C).",
      },
      {
        title: "Ošetřete růže",
        text: "Odstraňte spadané listí (prevence chorob). Růže zatím neřežte — řez provedete až na jaře. Na konci října nahrnete zeminu k bázi růží na ochranu před mrazem.",
      },
    ],
    indoorTasks: [
      {
        title: "Omezujte zálivku",
        text: "S kratšími dny a nižšími teplotami se metabolismus zpomaluje. Zalijte méně často — přelití v chladném bytě je cesta ke kořenové hnilobě.",
      },
      {
        title: "Přesuňte od radiátorů",
        text: "S začátkem topné sezóny umístěte pokojovky dál od radiátorů. Suchý horký vzduch jim nesvědčí. Postavte misky s vodou k radiátorům.",
      },
      {
        title: "Konec hnojení",
        text: "Přestaňte hnojit všechny pokojovky (s výjimkou právě kvetoucích). Přihnojování v zimním klidu oslabuje kořenový systém.",
      },
    ],
    plantingTips: "Sázejte: tulipány, česnek ozimý, cibule ozimá. Stromy a keře s balem. Dokončete výsadbu trvalek. Vysévejte zelené hnojení na prázdné záhony.",
    metaDescription: "Co dělat na zahradě v říjnu. Výsadba tulipánů, zazimování dahlií, péče o růže a příprava zahrady na zimu.",
  },
  11: {
    month: 11,
    name: "Listopad",
    slug: "listopad",
    heroTitle: "Zahrada v listopadu — ukládání k zimnímu spánku",
    intro:
      "V listopadu se zahrada ukládá ke spánku. Poslední listy opadávají, první mrazíky připomínají blížící se zimu. Je čas dokončit zimní přípravu — ochránit citlivé rostliny, vyčistit záhony a uložit nářadí. Práce ubývá, čas na plánování přibývá.",
    gardenTasks: [
      {
        title: "Zimní ochrana",
        text: "Chraňte citlivé keře (hortenzie velkokvěté, rhododendrony mladé) netkanou textilií nebo chvojím. Kořenovou zónu zamulčujte 10 cm listí nebo kůry.",
      },
      {
        title: "Ukliďte záhony",
        text: "Odstraňte zbytky letniček a zeleninových kultur. Trvalky neseřezávejte celé — suché stébla chrání srdce rostliny a vypadají hezky s jinovatkou.",
      },
      {
        title: "Zazimujte nářadí",
        text: "Vyčistěte, naostřete a namažte zahradní nářadí. Vypusťte vodu ze zahradních hadic a zavírkou. Uložte sekačku po posledním sečení.",
      },
      {
        title: "Stále můžete sázet stromy",
        text: "Listnaté stromy a keře s holým kořenem lze sázet do doby, než zamrzne půda. Podzimní výsadba je levnější a úspěšnější.",
      },
    ],
    indoorTasks: [
      {
        title: "Minimum zálivky",
        text: "Většina pokojovek je v plném zimním klidu. Zalijte pouze když substrát vyschne na 4–5 cm. Kaktusy a sukulenty téměř nezalévejte.",
      },
      {
        title: "Doplňte světlo",
        text: "Krátké dny znamenají málo světla. Přesuňte rostliny blíže k oknům. U vzácnějších tropických druhů zvažte přisvětlení LED lampou.",
      },
      {
        title: "Adventní hvězda a vánoční kaktus",
        text: "Vánoční kaktusy a poinsettie se teď připravují na kvetení. Vánoční kaktus potřebuje 6–8 týdnů krátkého dne (12+ hodin tmy) k nasazení poupat.",
      },
    ],
    plantingTips: "Stále můžete sázet stromy a keře s holým kořenem (do zamrznutí půdy). Vyložte česnek ozimý, pokud jste nestihli v říjnu.",
    metaDescription: "Co dělat na zahradě v listopadu. Zimní ochrana rostlin, úklid záhonů, zazimování nářadí a péče o pokojovky v zimním klidu.",
  },
  12: {
    month: 12,
    name: "Prosinec",
    slug: "prosinec",
    heroTitle: "Zahrada v prosinci — klid a příprava na nový rok",
    intro:
      "Prosinec je nejklidnější měsíc na zahradě. Pod sněhem nebo mrazem spí cibuloviny a hlízy, které na jaře explodují barvami. Je čas na odpočinek, studium katalogů a plánování příštího roku. V interiéru si užívejte kvetoucí poinsettie a vánoční kaktusy.",
    gardenTasks: [
      {
        title: "Kontrolujte zimní ochranu",
        text: "Po silných mrazech nebo sněžení zkontrolujte, zda ochranné materiály drží na místě. Setřeste těžký mokrý sníh z větví stálezelených keřů — mohou se zlomit.",
      },
      {
        title: "Krmte ptáky a zvěř",
        text: "V mrazivém prosinci jsou ptáci závislí na krmítkách. Doplňujte slunečnice, lůj a jablka. Udržujte napáječky nezamrzlé.",
      },
      {
        title: "Plánujte další rok",
        text: "Projděte si zápisky ze sezóny. Co se dařilo? Co byste změnili? Objednejte semena a sazenice, dokud je nejširší výběr.",
      },
      {
        title: "Řezání větviček",
        text: "Na svatou Barboru (4. 12.) řežte větvičky třešní a šeříků — ve váze v teple rozkvetou na Vánoce. Tradice říká, že předpoví příchod jara.",
      },
    ],
    indoorTasks: [
      {
        title: "Poinsettie — jak nepřijít o barvu",
        text: "Vánoční hvězda nesnáší průvan, chlad pod 15 °C a přelití. Zalijte teprve když substrát vyschne. Umístěte na světlé teplé místo, ale ne k radiátoru.",
      },
      {
        title: "Minimum zálivky a žádné hnojení",
        text: "Pokojovky jsou v nejhlubším zimním klidu. Většinu zalévejte jen 1× za 2–3 týdny. Nehnojte vůbec až do konce února.",
      },
      {
        title: "Hyacinty a narcisy z rychlení",
        text: "Pokud jste v září/říjnu nasadili cibuloviny na rychlení, teď by měly začínat kvést. Užijte si jejich vůni v zimních měsících.",
      },
    ],
    plantingTips: "V prosinci nesázíme venku. Na parapetu můžete nasadit klíčky (řeřicha, mungo) — za 5–7 dní máte čerstvou zeleň i v zimě.",
    metaDescription: "Co dělat na zahradě v prosinci. Kontrola zimní ochrany, krmení ptáků, plánování další sezóny a péče o vánoční rostliny.",
  },
};

export function getMonthContent(month: Mesic): MonthContent {
  return monthlyContent[month];
}

export function getAllMonths(): MonthContent[] {
  return Object.values(monthlyContent);
}
