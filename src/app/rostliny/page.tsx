import type { Metadata } from "next";
import { Suspense } from "react";
import { allPlants } from "@/utils/plants";
import { toSlug } from "@/utils/slug";
import { CatalogClient } from "@/components/CatalogClient";

export const metadata: Metadata = {
  title: "Katalog rostlin",
  description:
    "Procházejte katalog s více než 1 000 rostlinami. Filtrujte podle umístění, světla, typu a dalších parametrů.",
  alternates: { canonical: "/rostliny" },
  openGraph: {
    title: "Katalog rostlin | Ta Pravá",
    description: "Procházejte katalog s více než 1 000 rostlinami. Filtrujte podle umístění, světla, typu a dalších parametrů.",
  },
};

export default function RostlinyPage() {
  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Katalog rostlin",
    description: `Katalog s ${allPlants.length} rostlinami pro zahradu, balkon i interiér.`,
    numberOfItems: allPlants.length,
    itemListElement: allPlants.slice(0, 50).map((plant, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: plant.nazevCz,
      url: `https://taprava.cz/rostliny/${toSlug(plant.nazevCz, plant.id)}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />
      <div className="border-b border-gray-100 bg-gray-50/50">
        <div className="mx-auto max-w-6xl px-4 py-8">
          <h1 className="text-2xl font-bold text-gray-900 md:text-3xl">Katalog rostlin</h1>
          <p className="mt-2 text-gray-500">
            {allPlants.length.toLocaleString("cs-CZ")} rostlin k procházení. Použijte filtry pro zúžení výběru.
          </p>
        </div>
      </div>
      <Suspense>
        <CatalogClient plants={allPlants} />
      </Suspense>
    </>
  );
}
