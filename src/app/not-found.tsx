import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center px-4 py-20 text-center">
      <h1 className="text-6xl font-bold text-gray-200">404</h1>
      <p className="mt-4 text-lg text-gray-600">Stránka nebyla nalezena.</p>
      <Link
        href="/"
        className="mt-6 inline-flex rounded-xl bg-primary px-6 py-3 font-semibold text-white transition hover:bg-primary-dark"
      >
        Zpět na úvod
      </Link>
    </div>
  );
}
