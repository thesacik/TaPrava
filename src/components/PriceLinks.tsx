import { ExternalLink, Search, ShoppingCart } from "lucide-react";
import { priceComparators, gardenShops, type ShopLink } from "@/utils/shopLinks";

interface PriceLinksProps {
  query: string;
}

function LinkChip({ shop, query }: { shop: ShopLink; query: string }) {
  return (
    <a
      href={shop.buildUrl(query)}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 bg-white px-3.5 py-2 text-sm font-medium text-gray-700 transition hover:border-primary hover:text-primary hover:shadow-sm"
    >
      <Search size={14} className="opacity-50" />
      {shop.name}
      <ExternalLink size={12} className="opacity-40" />
    </a>
  );
}

export function PriceLinks({ query }: PriceLinksProps) {
  if (!query) return null;

  return (
    <div className="mt-6 border-t border-gray-200 pt-6">
      <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold text-gray-900">
        <ShoppingCart size={20} /> Kde koupit
      </h2>

      <div className="space-y-4">
        <div>
          <p className="mb-2 text-xs font-medium uppercase tracking-wide text-gray-400">
            Cenové srovnávače
          </p>
          <div className="flex flex-wrap gap-2">
            {priceComparators.map((shop) => (
              <LinkChip key={shop.id} shop={shop} query={query} />
            ))}
          </div>
        </div>

        <div>
          <p className="mb-2 text-xs font-medium uppercase tracking-wide text-gray-400">
            Zahradní e-shopy
          </p>
          <div className="flex flex-wrap gap-2">
            {gardenShops.map((shop) => (
              <LinkChip key={shop.id} shop={shop} query={query} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
