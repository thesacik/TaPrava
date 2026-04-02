"use client";

import { PlantDetail } from "@/components/PlantDetail";
import { useFavorites } from "@/hooks/useFavorites";
import type { Plant } from "@/types/plants";

export function PlantDetailClient({ plant }: { plant: Plant }) {
  const fav = useFavorites();

  return (
    <PlantDetail
      plant={plant}
      isFavorite={fav.isFavorite(plant.id)}
      onToggleFavorite={() => fav.toggle(plant.id)}
    />
  );
}
