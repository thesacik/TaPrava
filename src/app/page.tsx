import Link from "next/link";
import Image from "next/image";
import {
  Leaf, Search, Sparkles, TreeDeciduous, Flower, Home,
  Shrub, Sprout, CalendarDays,
} from "lucide-react";
import { allPlants } from "@/utils/plants";

export default function HomePage() {
  const totalPlants = allPlants.length;
  const categories = [
    { icon: Flower, label: "Pokojové rostliny", href: "/pokojove-rostliny", desc: "Pro váš interiér", image: "/images/categories/pokojove.png" },
    { icon: Leaf, label: "Trvalky", href: "/trvalky", desc: "Kvetou rok co rok", image: "/images/categories/trvalky.png" },
    { icon: Shrub, label: "Keře", href: "/kere", desc: "Struktura zahrady", image: "/images/categories/kere.png" },
    { icon: TreeDeciduous, label: "Stromy", href: "/stromy", desc: "Stín a majestát", image: "/images/categories/stromy.png" },
    { icon: Sprout, label: "Bylinky", href: "/bylinky", desc: "Kuchyně i lékárna", image: "/images/categories/bylinky.png" },
    { icon: Home, label: "Na balkon", href: "/rostliny-na-balkon", desc: "Do truhlíku i květináče", image: "/images/categories/balkon.png" },
  ];

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-accent-light via-white to-white">
        <div className="mx-auto max-w-6xl px-4 py-20 text-center md:py-28">
          <h1 className="mx-auto max-w-3xl font-[family-name:var(--font-amatic)] text-5xl font-bold tracking-tight text-gray-900 md:text-6xl lg:text-7xl">
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
              className="group relative flex h-48 flex-col items-center justify-center gap-1 overflow-hidden rounded-2xl text-center shadow-sm transition hover:shadow-lg"
            >
              <Image
                src={cat.image}
                alt={cat.label}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition duration-300 group-hover:scale-105"
                quality={75}
              />
              <div className="absolute inset-0 bg-black/45 transition duration-300 group-hover:bg-black/55" />
              <div className="relative z-10">
                <cat.icon size={28} className="mx-auto mb-1 text-white drop-shadow" />
                <span className="text-lg font-bold text-white drop-shadow">{cat.label}</span>
                <span className="mt-0.5 block text-sm text-white/80">{cat.desc}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden border-t border-gray-100">
        <Image
          src="/images/seasonal-banner.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
          quality={75}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 mx-auto max-w-6xl px-4 py-20 text-center">
          <CalendarDays size={40} className="mx-auto mb-4 text-white" />
          <h2 className="mb-3 text-2xl font-bold text-white md:text-3xl">
            Sezónní průvodce zahradníka
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-white/80">
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
            name: "Ta Pravá",
            url: "https://taprava.cz",
            description: "Interaktivní průvodce výběrem rostlin pro zahradu, balkon i interiér.",
            potentialAction: {
              "@type": "SearchAction",
              target: "https://taprava.cz/rostliny?q={search_term_string}",
              "query-input": "required name=search_term_string",
            },
          }),
        }}
      />
    </>
  );
}
