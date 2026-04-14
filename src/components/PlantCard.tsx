"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Sun, CloudSun, Cloud, Droplets, Bug, Leaf, Heart } from "lucide-react";
import type { Plant } from "@/types/plants";
import { getPlantImageUrl } from "@/utils/imageUrl";
import { toSlug } from "@/utils/slug";

interface PlantCardProps {
  plant: Plant;
  reasons?: string[];
  rank?: number;
  isFavorite?: boolean;
  onToggleFavorite?: () => void;
}

function SvetloIcon({ svetlo }: { svetlo: string[] }) {
  if (svetlo.includes("slunce")) return <Sun size={16} className="text-amber-500" />;
  if (svetlo.includes("polostin")) return <CloudSun size={16} className="text-lime-600" />;
  return <Cloud size={16} className="text-gray-400" />;
}

function PlantImage({ src, alt }: { src: string; alt: string }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className="flex h-full items-center justify-center text-primary-light opacity-40">
        <Leaf size={48} />
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      className="object-cover transition group-hover:scale-105"
      loading="lazy"
      onError={() => setFailed(true)}
    />
  );
}

export function PlantCard({ plant, reasons, rank, isFavorite, onToggleFavorite }: PlantCardProps) {
  const thumbUrl = getPlantImageUrl(plant.obrazek, plant.obrazekOverride, 400);
  const slug = toSlug(plant.nazevCz, plant.id);

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md">
      <Link href={`/rostliny/${slug}`} className="relative aspect-[4/3] bg-accent-light">
        {thumbUrl ? (
          <PlantImage src={thumbUrl} alt={plant.nazevCz} />
        ) : (
          <div className="flex h-full items-center justify-center text-primary-light opacity-40">
            <Leaf size={48} />
          </div>
        )}
        {rank != null && (
          <span className="absolute left-2.5 top-2.5 rounded-full bg-primary px-2.5 py-0.5 text-xs font-bold text-white">
            #{rank}
          </span>
        )}
      </Link>

      {onToggleFavorite && (
        <button
          onClick={(e) => { e.preventDefault(); onToggleFavorite(); }}
          className={`absolute right-2.5 top-2.5 z-10 flex h-9 w-9 items-center justify-center rounded-full backdrop-blur-sm transition ${
            isFavorite
              ? "bg-white/90 text-red-500"
              : "bg-white/70 text-gray-400 hover:text-red-400"
          }`}
          aria-label={isFavorite ? "Odebrat z oblíbených" : "Přidat do oblíbených"}
        >
          <Heart size={18} fill={isFavorite ? "currentColor" : "none"} />
        </button>
      )}

      <Link href={`/rostliny/${slug}`} className="flex flex-1 flex-col gap-1 p-4">
        <h3 className="font-semibold text-gray-900 leading-snug">{plant.nazevCz}</h3>
        {plant.nazevLat && (
          <p className="text-xs italic text-gray-400">{plant.nazevLat}</p>
        )}

        <div className="mt-1.5 flex items-center gap-2">
          <SvetloIcon svetlo={plant.svetlo} />
          {plant.vlhkost.includes("vlhke") && <Droplets size={16} className="text-blue-400" />}
          {plant.proVcely && <Bug size={16} className="text-amber-600" />}
        </div>

        {reasons && reasons.length > 0 && (
          <ul className="mt-2 space-y-0.5">
            {reasons.slice(0, 2).map((r, i) => (
              <li key={i} className="text-xs text-primary">
                <span className="mr-1 font-bold">&#10003;</span>{r}
              </li>
            ))}
          </ul>
        )}
      </Link>
    </div>
  );
}
