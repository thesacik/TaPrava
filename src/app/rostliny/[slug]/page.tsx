import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { allPlants } from "@/utils/plants";
import { toSlug } from "@/utils/slug";
import { getPlantImageUrl } from "@/utils/imageUrl";
import { kategorieLabels } from "@/utils/labels";
import { getSimilarPlants } from "@/utils/similarPlants";
import { PlantDetailClient } from "./PlantDetailClient";
import { SimilarPlants } from "./SimilarPlants";

interface Props {
  params: Promise<{ slug: string }>;
}

function getPlant(slug: string) {
  return allPlants.find((p) => toSlug(p.nazevCz, p.id) === slug);
}

export async function generateStaticParams() {
  return allPlants.map((plant) => ({
    slug: toSlug(plant.nazevCz, plant.id),
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const plant = getPlant(slug);
  if (!plant) return { title: "Rostlina nenalezena" };

  const typeLabel = plant.kategorie.map((k) => kategorieLabels[k]).join(", ");
  const description = plant.popis
    ? plant.popis.slice(0, 155)
    : `${plant.nazevCz} (${plant.nazevLat ?? ""}) — ${typeLabel}. Zjistěte podmínky pěstování, péči a kde koupit.`;

  const ogImage = getPlantImageUrl(plant.obrazek, plant.obrazekOverride, 500);

  return {
    title: `${plant.nazevCz}${plant.nazevLat ? ` (${plant.nazevLat})` : ""}`,
    description,
    alternates: { canonical: `/rostliny/${slug}` },
    openGraph: {
      title: `${plant.nazevCz} | Ta Pravá`,
      description,
      ...(ogImage && { images: [{ url: ogImage, width: 1200, height: 630, alt: plant.nazevCz }] }),
    },
  };
}

export default async function PlantPage({ params }: Props) {
  const { slug } = await params;
  const plant = getPlant(slug);
  if (!plant) notFound();

  const similar = getSimilarPlants(plant, 4);
  const categoryLabel = plant.kategorie.map((k) => kategorieLabels[k]).join(", ");

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: plant.nazevCz,
    ...(plant.nazevLat && { alternateName: plant.nazevLat }),
    description: plant.popis ?? `${plant.nazevCz} — informace o pěstování a péči.`,
    ...(plant.obrazek && { image: getPlantImageUrl(plant.obrazek, plant.obrazekOverride, 500) }),
    category: categoryLabel,
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Domů", item: "https://taprava.cz" },
      { "@type": "ListItem", position: 2, name: "Katalog rostlin", item: "https://taprava.cz/rostliny" },
      { "@type": "ListItem", position: 3, name: plant.nazevCz, item: `https://taprava.cz/rostliny/${slug}` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <nav aria-label="Breadcrumb" className="mx-auto max-w-5xl px-4 pt-4">
        <ol className="flex flex-wrap items-center gap-1 text-sm text-gray-400">
          <li>
            <Link href="/" className="transition hover:text-primary">Domů</Link>
          </li>
          <li><ChevronRight size={14} /></li>
          <li>
            <Link href="/rostliny" className="transition hover:text-primary">Katalog</Link>
          </li>
          <li><ChevronRight size={14} /></li>
          <li className="truncate font-medium text-gray-600">{plant.nazevCz}</li>
        </ol>
      </nav>

      <PlantDetailClient plant={plant} />
      <SimilarPlants plants={similar} />
    </>
  );
}
