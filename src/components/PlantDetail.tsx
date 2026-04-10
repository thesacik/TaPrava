"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import {
  Sun, CloudSun, Cloud, Droplets, Ruler, Thermometer,
  Leaf, Bug, Flower2, Heart,
} from "lucide-react";
import type { Plant, Mesic, BarvaKvetu } from "@/types/plants";
import { EshopOffers } from "@/components/EshopOffers";
import { PriceLinks } from "@/components/PriceLinks";
import { PlantGallery, type PlantGalleryHandle } from "@/components/PlantGallery";
import { useGalleryPhotos } from "@/hooks/useGalleryPhotos";
import { getThumbUrl } from "@/utils/imageUrl";
import {
  kategorieLabels, svetloLabels, vlhkostLabels, narocnostLabels,
  rychlostRustuLabels, frekvenceZalivkyLabels, barvaKvetuLabels, mesicLabels,
} from "@/utils/labels";

function DetailImage({ src, fallbackSrc, alt }: { src: string; fallbackSrc?: string; alt: string }) {
  const [failed, setFailed] = useState(false);
  const [fallbackFailed, setFallbackFailed] = useState(false);

  if (failed && fallbackSrc && !fallbackFailed) {
    return (
      <Image
        src={fallbackSrc}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover"
        priority
        onError={() => setFallbackFailed(true)}
      />
    );
  }

  if (failed) {
    return (
      <div className="flex h-full items-center justify-center text-primary-light opacity-30">
        <Leaf size={80} />
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes="(max-width: 768px) 100vw, 50vw"
      className="object-cover"
      priority
      onError={() => setFailed(true)}
    />
  );
}

interface PlantDetailProps {
  plant: Plant;
  isFavorite?: boolean;
  onToggleFavorite?: () => void;
}

export function PlantDetail({ plant, isFavorite, onToggleFavorite }: PlantDetailProps) {
  const thumbUrl = getThumbUrl(plant.obrazek, 500);
  const galleryRef = useRef<PlantGalleryHandle>(null);
  const { photos } = useGalleryPhotos(plant.nazevLat);

  const fallbackUrl = photos.length > 0 ? photos[0].url : undefined;

  const buySection = plant.kategorie.includes("pokojova") ? (
    <EshopOffers query={plant.nazevLat || plant.nazevCz} />
  ) : (
    <PriceLinks query={plant.nazevCz} />
  );

  return (
    <div className="mx-auto max-w-5xl px-4 py-8">
      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <button
            type="button"
            onClick={() => galleryRef.current?.openAt(0)}
            className="relative aspect-square w-full cursor-zoom-in overflow-hidden rounded-2xl bg-accent-light"
          >
            {thumbUrl ? (
              <DetailImage src={thumbUrl} fallbackSrc={fallbackUrl} alt={plant.nazevCz} />
            ) : fallbackUrl ? (
              <DetailImage src={fallbackUrl} alt={plant.nazevCz} />
            ) : (
              <div className="flex h-full items-center justify-center text-primary-light opacity-30">
                <Leaf size={80} />
              </div>
            )}
          </button>
          {plant.nazevLat && (
            <PlantGallery
              ref={galleryRef}
              photos={photos}
              mainImage={thumbUrl}
              plantName={plant.nazevCz}
            />
          )}
        </div>

        <div className="md:row-span-2">
          <div className="mb-4 flex items-start justify-between gap-3">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 md:text-3xl">{plant.nazevCz}</h1>
              {plant.nazevLat && (
                <p className="mt-1 text-base italic text-gray-400">{plant.nazevLat}</p>
              )}
            </div>
            {onToggleFavorite && (
              <button
                onClick={onToggleFavorite}
                className={`mt-1 flex-shrink-0 rounded-full p-2 transition ${
                  isFavorite ? "text-red-500" : "text-gray-300 hover:text-red-400"
                }`}
                aria-label={isFavorite ? "Odebrat z oblíbených" : "Přidat do oblíbených"}
              >
                <Heart size={28} fill={isFavorite ? "currentColor" : "none"} />
              </button>
            )}
          </div>

          {plant.popis && (
            <p className="mb-6 text-gray-600 leading-relaxed">{plant.popis}</p>
          )}

          <div className="mb-6 space-y-1">
            <h2 className="mb-2 text-lg font-semibold text-gray-900">Parametry</h2>
            <ParamRow icon={<Leaf size={18} />} label="Typ" value={plant.kategorie.map((k) => kategorieLabels[k]).join(", ")} />
            <ParamRow icon={<SvetloIcon svetlo={plant.svetlo} />} label="Světlo" value={plant.svetlo.map((s) => svetloLabels[s]).join(", ")} />
            <ParamRow icon={<Droplets size={18} />} label="Vlhkost" value={plant.vlhkost.map((v) => vlhkostLabels[v]).join(", ")} />
            {(plant.vyskaMinCm != null || plant.vyskaMaxCm != null) && (
              <ParamRow icon={<Ruler size={18} />} label="Výška" value={`${plant.vyskaMinCm ?? "?"} – ${plant.vyskaMaxCm ?? "?"} cm`} />
            )}
            {plant.narocnost && <ParamRow icon={<span>&#9881;</span>} label="Náročnost" value={narocnostLabels[plant.narocnost]} />}
            {plant.frekvenceZalivky && <ParamRow icon={<Droplets size={18} />} label="Zálivka" value={frekvenceZalivkyLabels[plant.frekvenceZalivky]} />}
            {plant.rychlostRustu && <ParamRow icon={<span>&#128200;</span>} label="Růst" value={rychlostRustuLabels[plant.rychlostRustu]} />}
            {plant.mrazuvzdornostDoC != null && <ParamRow icon={<Thermometer size={18} />} label="Mrazuvzdornost" value={`do ${plant.mrazuvzdornostDoC} °C`} />}
            {plant.barvaKvetu && plant.barvaKvetu.length > 0 && (
              <ParamRow icon={<Flower2 size={18} />} label="Barva květu" value={plant.barvaKvetu.map((b: BarvaKvetu) => barvaKvetuLabels[b]).join(", ")} />
            )}
            {plant.obdobiKveteni && plant.obdobiKveteni.length > 0 && (
              <ParamRow icon={<span>&#128197;</span>} label="Kvetení" value={plant.obdobiKveteni.map((m: Mesic) => mesicLabels[m]).join(", ")} />
            )}
            <ParamRow icon={<Bug size={18} />} label="Pro včely" value={plant.proVcely ? "Ano" : "Ne"} />
            <ParamRow icon={<span>&#127807;</span>} label="Stálezelená" value={plant.stalezelena ? "Ano" : "Ne"} />
          </div>

          {plant.pece && (
            <div className="mb-6 rounded-xl bg-gray-50 p-5">
              <h2 className="mb-2 text-lg font-semibold text-gray-900">Péče</h2>
              <p className="text-sm text-gray-600 leading-relaxed">{plant.pece}</p>
            </div>
          )}
        </div>

        {buySection}
      </div>
    </div>
  );
}

function ParamRow({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex items-center gap-3 rounded-lg px-3 py-2 odd:bg-gray-50">
      <span className="flex w-6 items-center justify-center text-primary">{icon}</span>
      <span className="w-28 flex-shrink-0 text-sm font-medium text-gray-500">{label}</span>
      <span className="text-sm font-medium text-gray-900">{value}</span>
    </div>
  );
}

function SvetloIcon({ svetlo }: { svetlo: string[] }) {
  if (svetlo.includes("slunce")) return <Sun size={18} />;
  if (svetlo.includes("polostin")) return <CloudSun size={18} />;
  return <Cloud size={18} />;
}
