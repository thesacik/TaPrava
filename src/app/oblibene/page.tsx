import type { Metadata } from "next";
import { FavoritesClient } from "./FavoritesClient";

export const metadata: Metadata = {
  title: "Oblíbené rostliny",
  description: "Vaše uložené oblíbené rostliny na jednom místě.",
};

export default function OblíbenéPage() {
  return (
    <>
      <div className="border-b border-gray-100 bg-gray-50/50">
        <div className="mx-auto max-w-6xl px-4 py-8">
          <h1 className="text-2xl font-bold text-gray-900 md:text-3xl">Oblíbené rostliny</h1>
          <p className="mt-2 text-gray-500">
            Vaše uložené rostliny na jednom místě. Přidejte si je kliknutím na srdíčko.
          </p>
        </div>
      </div>
      <FavoritesClient />
    </>
  );
}
