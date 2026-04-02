"use client";

import Link from "next/link";
import { Leaf } from "lucide-react";
import { allPlants } from "@/utils/plants";
import { PlantCard } from "@/components/PlantCard";
import { useFavorites } from "@/hooks/useFavorites";

export function FavoritesClient() {
  const fav = useFavorites();
  const plants = allPlants.filter((p) => fav.isFavorite(p.id));

  if (plants.length === 0) {
    return (
      <div className="mx-auto max-w-6xl px-4 py-20 text-center">
        <Leaf size={48} className="mx-auto mb-4 text-primary-light opacity-40" />
        <p className="mb-6 text-gray-500">Zatím nemáte žádné oblíbené rostliny.</p>
        <Link
          href="/rostliny"
          className="inline-flex rounded-xl bg-primary px-6 py-3 font-semibold text-white transition hover:bg-primary-dark"
        >
          Procházet katalog
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {plants.map((plant) => (
          <PlantCard
            key={plant.id}
            plant={plant}
            isFavorite
            onToggleFavorite={() => fav.toggle(plant.id)}
          />
        ))}
      </div>
    </div>
  );
}
