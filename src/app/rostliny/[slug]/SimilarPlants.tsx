"use client";

import type { Plant } from "@/types/plants";
import { PlantCard } from "@/components/PlantCard";
import { useFavorites } from "@/hooks/useFavorites";

export function SimilarPlants({ plants }: { plants: Plant[] }) {
  const fav = useFavorites();

  if (plants.length === 0) return null;

  return (
    <section className="mx-auto max-w-5xl px-4 pb-12 pt-6">
      <h2 className="mb-5 text-xl font-bold text-gray-900">Podobné rostliny</h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {plants.map((plant) => (
          <PlantCard
            key={plant.id}
            plant={plant}
            isFavorite={fav.isFavorite(plant.id)}
            onToggleFavorite={() => fav.toggle(plant.id)}
          />
        ))}
      </div>
    </section>
  );
}
