"use client";

import { useState } from "react";
import type { Plant } from "@/types/plants";
import { PlantCard } from "@/components/PlantCard";
import { useFavorites } from "@/hooks/useFavorites";

const PAGE_SIZE = 12;

export function CategoryGrid({ plants }: { plants: Plant[] }) {
  const [visible, setVisible] = useState(PAGE_SIZE);
  const fav = useFavorites();

  const shown = plants.slice(0, visible);
  const hasMore = visible < plants.length;

  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {shown.map((plant) => (
          <PlantCard
            key={plant.id}
            plant={plant}
            isFavorite={fav.isFavorite(plant.id)}
            onToggleFavorite={() => fav.toggle(plant.id)}
          />
        ))}
      </div>

      {hasMore && (
        <div className="mt-8 text-center">
          <button
            onClick={() => setVisible((v) => v + PAGE_SIZE)}
            className="rounded-xl bg-primary px-6 py-3 font-semibold text-white transition hover:bg-primary-dark"
          >
            Zobrazit další rostliny ({plants.length - visible} zbývá)
          </button>
        </div>
      )}
    </>
  );
}
