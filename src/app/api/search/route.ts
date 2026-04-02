import { NextRequest, NextResponse } from "next/server";

const cache = new Map<string, { results: unknown[]; ts: number }>();
const CACHE_TTL = 5 * 60 * 1000;

export async function GET(request: NextRequest) {
  const q = request.nextUrl.searchParams.get("q")?.trim();
  if (!q) {
    return NextResponse.json({ results: [] });
  }

  const cached = cache.get(q);
  if (cached && Date.now() - cached.ts < CACHE_TTL) {
    return NextResponse.json({ results: cached.results });
  }

  try {
    const { searchAll } = await import("@/lib/scrapers/index.mjs");
    const results = await searchAll(q);
    cache.set(q, { results, ts: Date.now() });
    return NextResponse.json({ results });
  } catch (err) {
    console.error("Search API error:", err);
    return NextResponse.json({ results: [], error: "Search failed" }, { status: 500 });
  }
}
