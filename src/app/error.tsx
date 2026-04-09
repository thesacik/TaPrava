"use client";

import { useEffect } from "react";
import { AlertTriangle } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-1 flex-col items-center justify-center px-4 py-20 text-center">
      <AlertTriangle size={48} className="mb-4 text-primary-light opacity-60" />
      <h1 className="text-2xl font-bold text-gray-900">Něco se pokazilo</h1>
      <p className="mt-3 max-w-md text-gray-500">
        Omlouváme se, došlo k neočekávané chybě. Zkuste to prosím znovu nebo se
        vraťte na úvodní stránku.
      </p>
      <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
        <button
          onClick={reset}
          className="inline-flex rounded-xl bg-primary px-6 py-3 font-semibold text-white transition hover:bg-primary-dark"
        >
          Zkusit znovu
        </button>
        <a
          href="/"
          className="inline-flex rounded-xl border-2 border-gray-200 bg-white px-6 py-3 font-semibold text-gray-700 transition hover:border-primary hover:text-primary"
        >
          Zpět na úvod
        </a>
      </div>
    </div>
  );
}
