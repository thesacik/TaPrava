import Link from "next/link";
import {
  Leaf, Search, Sparkles, TreeDeciduous, Flower, Home,
  Shrub, Sprout, CalendarDays,
} from "lucide-react";
import { allPlants } from "@/utils/plants";

export default function HomePage() {
  const totalPlants = allPlants.length;
  const categories = [
    { icon: Flower, label: "Pokojové rostliny", href: "/pokojove-rostliny", desc: "Pro váš interiér" },
    { icon: Leaf, label: "Trvalky", href: "/trvalky", desc: "Kvetou rok co rok" },
    { icon: Shrub, label: "Keře", href: "/kere", desc: "Struktura zahrady" },
    { icon: TreeDeciduous, label: "Stromy", href: "/stromy", desc: "Stín a majestát" },
    { icon: Sprout, label: "Bylinky", href: "/bylinky", desc: "Kuchyně i lékárna" },
    { icon: Home, label: "Na balkon", href: "/rostliny-na-balkon", desc: "Do truhlíku i květináče" },
  ];

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-accent-light via-white to-white">
        <div className="mx-auto max-w-6xl px-4 py-20 text-center md:py-28">
          <h1 className="mx-auto max-w-3xl text-4xl font-extrabold tracking-tight text-primary-dark md:text-5xl lg:text-6xl">
            Najděte tu správnou rostlinu pro vaše podmínky
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-gray-600 leading-relaxed">
            Interaktivní průvodce a katalog s {totalPlants.toLocaleString("cs-CZ")}+ rostlinami.
            Odpovězte na pár otázek a dostanete doporučení na míru.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/pruvodce"
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-7 py-4 text-lg font-semibold text-white shadow-lg transition hover:bg-primary-dark"
            >
              <Sparkles size={22} />
              Pomoci s výběrem
            </Link>
            <Link
              href="/rostliny"
              className="inline-flex items-center gap-2 rounded-xl border-2 border-gray-200 bg-white px-7 py-4 text-lg font-semibold text-gray-800 shadow-sm transition hover:border-primary hover:text-primary"
            >
              <Search size={22} />
              Procházet katalog
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="mb-8 text-center text-2xl font-bold text-gray-900 md:text-3xl">
          Populární kategorie
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat) => (
            <Link
              key={cat.label}
              href={cat.href}
              className="group flex flex-col items-center gap-3 rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-sm transition hover:border-primary hover:shadow-md"
            >
              <cat.icon size={36} className="text-primary transition group-hover:scale-110" />
              <span className="text-lg font-semibold text-gray-900">{cat.label}</span>
              <span className="text-sm text-gray-500">{cat.desc}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-t border-gray-100 bg-accent-light">
        <div className="mx-auto max-w-6xl px-4 py-16 text-center">
          <CalendarDays size={40} className="mx-auto mb-4 text-primary" />
          <h2 className="mb-3 text-2xl font-bold text-gray-900 md:text-3xl">
            Sezónní průvodce zahradníka
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-gray-600">
            Co sázet, co sklízet a jak pečovat o zahradu — měsíc po měsíci.
            Praktické tipy pro zahradu i pokojové rostliny.
          </p>
          <Link
            href="/sezonni-pruvodce"
            className="inline-flex items-center gap-2 rounded-xl bg-primary px-7 py-4 text-lg font-semibold text-white shadow-lg transition hover:bg-primary-dark"
          >
            <CalendarDays size={22} />
            Otevřít průvodce
          </Link>
        </div>
      </section>

      <section className="border-t border-gray-100 bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="mb-10 text-center text-2xl font-bold text-gray-900 md:text-3xl">
            Jak to funguje
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { step: "1", title: "Odpovězte na otázky", desc: "Řeknete nám, kam rostlinu chcete a jaké máte podmínky." },
              { step: "2", title: "Dostanete doporučení", desc: "Navrhneme vám nejlepší rostliny a vysvětlíme proč." },
              { step: "3", title: "Porovnejte ceny", desc: "U každé rostliny vidíte, kde ji koupit a za kolik." },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-white">
                  {item.step}
                </div>
                <h3 className="mb-2 text-lg font-semibold text-gray-900">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "VyberRostlinu.cz",
            url: "https://vyberrostlinu.cz",
            description: "Interaktivní průvodce výběrem rostlin pro zahradu, balkon i interiér.",
            potentialAction: {
              "@type": "SearchAction",
              target: "https://vyberrostlinu.cz/rostliny?q={search_term_string}",
              "query-input": "required name=search_term_string",
            },
          }),
        }}
      />
    </>
  );
}
