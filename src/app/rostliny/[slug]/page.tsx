import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { allPlants } from "@/utils/plants";
import { toSlug } from "@/utils/slug";
import { getThumbUrl } from "@/utils/imageUrl";
import { kategorieLabels } from "@/utils/labels";
import { PlantDetailClient } from "./PlantDetailClient";

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

  const ogImage = getThumbUrl(plant.obrazek, 500);

  return {
    title: `${plant.nazevCz}${plant.nazevLat ? ` (${plant.nazevLat})` : ""}`,
    description,
    openGraph: {
      title: `${plant.nazevCz} | VyberRostlinu.cz`,
      description,
      ...(ogImage && { images: [{ url: ogImage, width: 1200, height: 630, alt: plant.nazevCz }] }),
    },
  };
}

export default async function PlantPage({ params }: Props) {
  const { slug } = await params;
  const plant = getPlant(slug);
  if (!plant) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: plant.nazevCz,
    ...(plant.nazevLat && { alternateName: plant.nazevLat }),
    description: plant.popis ?? `${plant.nazevCz} — informace o pěstování a péči.`,
    ...(plant.obrazek && { image: getThumbUrl(plant.obrazek, 500) }),
    category: plant.kategorie.map((k) => kategorieLabels[k]).join(", "),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PlantDetailClient plant={plant} />
    </>
  );
}
