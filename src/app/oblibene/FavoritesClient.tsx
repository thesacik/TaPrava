"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Leaf } from "lucide-react";
import { allPlants } from "@/utils/plants";
import { PlantCard } from "@/components/PlantCard";
import { useFavorites } from "@/hooks/useFavorites";
import type { Kategorie } from "@/types/plants";
import { kategorieLabels } from "@/utils/labels";

export function FavoritesClient() {
  const fav = useFavorites();
  const plants = allPlants.filter((p) => fav.isFavorite(p.id));
  const [filter, setFilter] = useState<Kategorie | null>(null);

  const categories = useMemo(() => {
    const counts = new Map<Kategorie, number>();
    for (const p of plants) {
      for (const k of p.kategorie) {
        counts.set(k, (counts.get(k) ?? 0) + 1);
      }
    }
    return [...counts.entries()].sort((a, b) => b[1] - a[1]);
  }, [plants]);

  const filtered = filter ? plants.filter((p) => p.kategorie.includes(filter)) : plants;

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
      <div className="mb-6 flex flex-wrap items-center gap-2">
        <button
          onClick={() => setFilter(null)}
          className={`rounded-full border px-3 py-1.5 text-sm font-medium transition ${
            !filter ? "border-primary bg-accent-light text-primary-dark" : "border-gray-200 text-gray-600 hover:border-gray-300"
          }`}
        >
          Vše ({plants.length})
        </button>
        {categories.map(([k, count]) => (
          <button
            key={k}
            onClick={() => setFilter(filter === k ? null : k)}
            className={`rounded-full border px-3 py-1.5 text-sm font-medium transition ${
              filter === k ? "border-primary bg-accent-light text-primary-dark" : "border-gray-200 text-gray-600 hover:border-gray-300"
            }`}
          >
            {kategorieLabels[k]} ({count})
          </button>
        ))}
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((plant) => (
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
