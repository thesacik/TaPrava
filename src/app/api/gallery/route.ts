import { NextRequest, NextResponse } from "next/server";

interface CacheEntry {
  photos: GalleryPhoto[];
  ts: number;
}

export interface GalleryPhoto {
  url: string;
  attribution: string;
  license: string;
}

const cache = new Map<string, CacheEntry>();
const CACHE_TTL = 24 * 60 * 60 * 1000;
const INATURALIST_API = "https://api.inaturalist.org/v1/observations";

export async function GET(request: NextRequest) {
  const species = request.nextUrl.searchParams.get("species")?.trim();
  if (!species) {
    return NextResponse.json({ photos: [] });
  }

  const cached = cache.get(species);
  if (cached && Date.now() - cached.ts < CACHE_TTL) {
    return NextResponse.json({ photos: cached.photos });
  }

  try {
    const params = new URLSearchParams({
      taxon_name: species,
      photos: "true",
      quality_grade: "research",
      photo_license: "cc-by,cc-by-nc,cc-by-sa,cc-by-nc-sa,cc0",
      per_page: "3",
      order_by: "votes",
    });

    const res = await fetch(`${INATURALIST_API}?${params}`, {
      headers: { "User-Agent": "TaPrava.cz plant guide" },
      signal: AbortSignal.timeout(5000),
    });

    if (!res.ok) {
      return NextResponse.json({ photos: [] });
    }

    const data = await res.json();

    const photos: GalleryPhoto[] = (data.results ?? [])
      .map((obs: Record<string, unknown>) => {
        const photo = (obs.photos as Record<string, unknown>[])?.[0];
        if (!photo) return null;
        const url = (photo.url as string)?.replace("square", "medium");
        if (!url) return null;
        return {
          url,
          attribution: (photo.attribution as string) ?? "",
          license: (photo.license_code as string) ?? "",
        };
      })
      .filter(Boolean) as GalleryPhoto[];

    cache.set(species, { photos, ts: Date.now() });
    return NextResponse.json({ photos });
  } catch {
    return NextResponse.json({ photos: [] });
  }
}
