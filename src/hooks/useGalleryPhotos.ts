"use client";

import { useState, useEffect } from "react";
import type { GalleryPhoto } from "@/app/api/gallery/route";

export function useGalleryPhotos(species: string | undefined) {
  const [photos, setPhotos] = useState<GalleryPhoto[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!species) return;
    let cancelled = false;
    setLoading(true);

    fetch(`/api/gallery?species=${encodeURIComponent(species)}`)
      .then((r) => r.json())
      .then((data) => {
        if (!cancelled && data.photos?.length) {
          setPhotos(data.photos);
        }
      })
      .catch(() => {})
      .finally(() => { if (!cancelled) setLoading(false); });

    return () => { cancelled = true; };
  }, [species]);

  return { photos, loading };
}
