"use client";

import { ExternalLink, Loader2, Search, ShoppingCart } from "lucide-react";
import { useEshopSearch } from "@/hooks/useEshopSearch";
import type { EshopResult } from "@/types/plants";

export function EshopOffers({ query }: { query: string | undefined }) {
  const { loading, results, error } = useEshopSearch(query);

  if (!query) return null;

  if (loading) {
    return (
      <div className="mt-6 border-t border-gray-200 pt-6">
        <h2 className="mb-3 flex items-center gap-2 text-lg font-semibold text-gray-900">
          <ShoppingCart size={20} /> Kde koupit
        </h2>
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <Loader2 size={20} className="animate-spin" />
          Hledáme v e-shopech...
        </div>
      </div>
    );
  }

  if (error || results.length === 0) {
    return (
      <div className="mt-6 border-t border-gray-200 pt-6">
        <h2 className="mb-3 flex items-center gap-2 text-lg font-semibold text-gray-900">
          <ShoppingCart size={20} /> Kde koupit
        </h2>
        <p className="text-sm italic text-gray-400">Tuto rostlinu jsme v e-shopech nenašli.</p>
      </div>
    );
  }

  const products = results.filter((r) => !r.isSearchLink);
  const searchLinks = results.filter((r) => r.isSearchLink);

  return (
    <div className="mt-6 border-t border-gray-200 pt-6">
      <h2 className="mb-3 flex items-center gap-2 text-lg font-semibold text-gray-900">
        <ShoppingCart size={20} /> Kde koupit
      </h2>

      {products.length > 0 && (
        <div className="space-y-2">
          {products.map((item, i) => (
            <ProductCard key={`${item.shopId}-${i}`} item={item} />
          ))}
        </div>
      )}

      {searchLinks.length > 0 && (
        <div className="mt-4">
          <p className="mb-2 text-xs text-gray-400">
            {products.length > 0 ? "Zkusit hledat v dalších e-shopech:" : "Hledejte v těchto e-shopech:"}
          </p>
          <div className="flex flex-wrap gap-2">
            {searchLinks.map((item) => (
              <a
                key={item.shopId}
                href={item.url ?? "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 px-3 py-1.5 text-xs font-medium text-gray-600 transition hover:border-primary hover:text-primary"
              >
                <Search size={12} /> {item.shopName}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function ProductCard({ item }: { item: EshopResult }) {
  return (
    <a
      href={item.url ?? "#"}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white p-3 transition hover:border-primary/30 hover:shadow-sm"
    >
      {item.image && (
        <img src={item.image} alt={item.name} className="h-14 w-14 flex-shrink-0 rounded-lg object-cover bg-gray-100" loading="lazy" />
      )}
      <div className="flex-1 min-w-0">
        <p className="text-[11px] font-semibold uppercase tracking-wide text-gray-400">{item.shopName}</p>
        <p className="truncate text-sm font-medium text-gray-900">{item.name}</p>
        <div className="mt-0.5 flex items-center gap-2">
          {item.price != null && (
            <span className="text-sm font-bold text-primary-dark">{item.price.toLocaleString("cs-CZ")} {item.currency}</span>
          )}
          {item.inStock === true && <span className="rounded-full bg-green-100 px-2 py-0.5 text-[10px] font-semibold text-green-800">Skladem</span>}
          {item.inStock === false && <span className="rounded-full bg-red-50 px-2 py-0.5 text-[10px] font-semibold text-red-700">Není skladem</span>}
        </div>
      </div>
      <ExternalLink size={16} className="flex-shrink-0 text-gray-300" />
    </a>
  );
}
