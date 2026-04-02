import * as cheerio from "cheerio";

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

const DEFAULT_HEADERS = {
  "User-Agent":
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
  Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
  "Accept-Language": "cs,en;q=0.5",
};

export async function fetchPage(url) {
  const res = await fetch(url, {
    headers: DEFAULT_HEADERS,
    redirect: "follow",
  });
  if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`);
  const html = await res.text();
  return cheerio.load(html);
}

export function parsePrice(text) {
  if (!text) return null;
  const cleaned = text.replace(/[^\d,.]/g, "").replace(",", ".");
  const num = parseFloat(cleaned);
  return isNaN(num) ? null : num;
}

export function normalizeUrl(url, baseUrl) {
  if (!url) return null;
  if (url.startsWith("http")) return url;
  return new URL(url, baseUrl).href;
}
