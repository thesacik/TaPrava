"use client";

import { useState, useEffect, useCallback, forwardRef, useImperativeHandle } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import type { GalleryPhoto } from "@/app/api/gallery/route";

export interface PlantGalleryHandle {
  openAt: (index: number) => void;
}

interface PlantGalleryProps {
  photos: GalleryPhoto[];
  mainImage?: string;
  plantName: string;
}

export const PlantGallery = forwardRef<PlantGalleryHandle, PlantGalleryProps>(function PlantGallery({ photos, mainImage, plantName }, ref) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [failedUrls, setFailedUrls] = useState<Set<string>>(new Set());

  useImperativeHandle(ref, () => ({
    openAt: (index: number) => setLightboxIndex(index),
  }));

  const markFailed = (url: string) => {
    setFailedUrls((prev) => new Set(prev).add(url));
  };

  const allImages = [
    ...(mainImage ? [{ url: mainImage, attribution: "Wikimedia Commons", license: "" }] : []),
    ...photos,
  ].filter((p) => !failedUrls.has(p.url));

  const goNext = useCallback(() => {
    setLightboxIndex((i) => (i !== null && i < allImages.length - 1 ? i + 1 : i));
  }, [allImages.length]);

  const goPrev = useCallback(() => {
    setLightboxIndex((i) => (i !== null && i > 0 ? i - 1 : i));
  }, []);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  useEffect(() => {
    if (lightboxIndex === null) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      else if (e.key === "ArrowRight") goNext();
      else if (e.key === "ArrowLeft") goPrev();
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightboxIndex, closeLightbox, goNext, goPrev]);

  if (allImages.length <= 1) return null;

  return (
    <>
      <div className="mt-3 grid grid-cols-3 gap-2">
        {allImages.slice(1).map((photo, i) => (
          <button
            key={photo.url}
            onClick={() => setLightboxIndex(i + 1)}
            className="group relative aspect-square overflow-hidden rounded-xl bg-accent-light"
          >
            <Image
              src={photo.url}
              alt={plantName}
              fill
              sizes="(max-width: 768px) 30vw, 150px"
              className="object-cover transition group-hover:scale-105"
              loading="lazy"
              onError={() => markFailed(photo.url)}
            />
          </button>
        ))}
      </div>

      {photos.length > 0 && (
        <p className="mt-2 text-[10px] text-gray-400">
          Foto:{" "}
          {photos
            .filter((p) => !failedUrls.has(p.url))
            .map((p) => p.attribution.replace(/\(c\)\s*/i, "").split(",")[0].trim())
            .filter(Boolean)
            .join(", ")}{" "}
          via iNaturalist
        </p>
      )}

      {lightboxIndex !== null && allImages[lightboxIndex] && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-black/80 p-4"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute right-4 top-4 z-10 rounded-full bg-white/20 p-2 text-white backdrop-blur-sm transition hover:bg-white/40"
          >
            <X size={24} />
          </button>

          {lightboxIndex > 0 && (
            <button
              onClick={(e) => { e.stopPropagation(); goPrev(); }}
              className="absolute left-4 z-10 rounded-full bg-white/20 p-2 text-white backdrop-blur-sm transition hover:bg-white/40"
            >
              <ChevronLeft size={28} />
            </button>
          )}

          {lightboxIndex < allImages.length - 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); goNext(); }}
              className="absolute right-4 z-10 rounded-full bg-white/20 p-2 text-white backdrop-blur-sm transition hover:bg-white/40"
            >
              <ChevronRight size={28} />
            </button>
          )}

          <div className="relative max-h-[85vh] max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <img
              src={allImages[lightboxIndex].url}
              alt={plantName}
              className="max-h-[85vh] rounded-xl object-contain"
            />
          </div>

          <div className="absolute bottom-4 text-sm text-white/60">
            {lightboxIndex + 1} / {allImages.length}
          </div>
        </div>
      )}
    </>
  );
});
