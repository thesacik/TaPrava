import type { Metadata } from "next";
import { Suspense } from "react";
import { allPlants } from "@/utils/plants";
import { CatalogClient } from "@/components/CatalogClient";

export const metadata: Metadata = {
  title: "Katalog rostlin",
  description:
    "Procházejte katalog s více než 1 000 rostlinami. Filtrujte podle umístění, světla, typu a dalších parametrů.",
  openGraph: {
    title: "Katalog rostlin | Ta Pravá",
    description: "Procházejte katalog s více než 1 000 rostlinami. Filtrujte podle umístění, světla, typu a dalších parametrů.",
  },
};

export default function RostlinyPage() {
  return (
    <>
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
