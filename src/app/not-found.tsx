import Link from "next/link";
import { SearchX, Leaf, Search, Sparkles } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center px-4 py-20 text-center">
      <SearchX size={56} className="mb-5 text-primary-light opacity-50" />
      <h1 className="text-3xl font-bold text-gray-900">Stránka nenalezena</h1>
      <p className="mt-3 max-w-md text-gray-500">
        Omlouváme se, ale hledaná stránka neexistuje nebo byla přesunuta.
        Zkuste hledat v katalogu nebo se vraťte na úvodní stránku.
      </p>

      <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row">
        <Link
          href="/rostliny"
          className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 font-semibold text-white transition hover:bg-primary-dark"
        >
          <Search size={18} />
          Procházet katalog
        </Link>
        <Link
          href="/pruvodce"
          className="inline-flex items-center gap-2 rounded-xl border-2 border-gray-200 bg-white px-6 py-3 font-semibold text-gray-700 transition hover:border-primary hover:text-primary"
        >
          <Sparkles size={18} />
          Průvodce výběrem
        </Link>
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-xl border-2 border-gray-200 bg-white px-6 py-3 font-semibold text-gray-700 transition hover:border-primary hover:text-primary"
        >
          <Leaf size={18} />
          Zpět na úvod
        </Link>
      </div>
    </div>
  );
}
