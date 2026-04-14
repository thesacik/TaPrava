import Link from "next/link";
import { Leaf } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-gray-200 bg-gray-50">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid gap-8 sm:grid-cols-3">
          <div>
            <Link href="/" className="mb-3 flex items-center gap-2 font-bold text-primary-dark">
              <Leaf size={20} className="text-primary" />
              TaPrava.cz
            </Link>
            <p className="text-sm text-gray-500 leading-relaxed">
              Pomůžeme vám najít tu správnou rostlinu pro vaše podmínky.
              Interaktivní průvodce a katalog s více než 1 000 rostlinami.
            </p>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold text-gray-900">Navigace</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/pruvodce" className="text-gray-600 hover:text-primary">Průvodce výběrem</Link></li>
              <li><Link href="/rostliny" className="text-gray-600 hover:text-primary">Katalog rostlin</Link></li>
              <li><Link href="/blog" className="text-gray-600 hover:text-primary">Blog</Link></li>
              <li><Link href="/oblibene" className="text-gray-600 hover:text-primary">Oblíbené</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold text-gray-900">O projektu</h4>
            <p className="text-sm text-gray-500 leading-relaxed">
              Ta Pravá je bezplatný online průvodce, který vám pomůže
              vybrat ideální rostliny pro zahradu, balkon i interiér.
            </p>
            <Link href="/ochrana-osobnich-udaju" className="mt-3 inline-block text-sm text-gray-400 hover:text-primary">
              Ochrana osobních údajů
            </Link>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-200 pt-6 text-center text-xs text-gray-400">
          &copy; {new Date().getFullYear()} TaPrava.cz. Všechna práva vyhrazena.
        </div>
      </div>
    </footer>
  );
}
