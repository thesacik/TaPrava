export default function Loading() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <div className="mb-8 h-8 w-64 animate-pulse rounded-lg bg-gray-200" />
      <div className="mb-4 h-4 w-96 max-w-full animate-pulse rounded bg-gray-100" />
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="overflow-hidden rounded-2xl border border-gray-200 bg-white">
            <div className="aspect-[4/3] animate-pulse bg-gray-100" />
            <div className="space-y-2 p-4">
              <div className="h-5 w-3/4 animate-pulse rounded bg-gray-200" />
              <div className="h-3 w-1/2 animate-pulse rounded bg-gray-100" />
              <div className="flex gap-2 pt-1">
                <div className="h-4 w-4 animate-pulse rounded-full bg-gray-100" />
                <div className="h-4 w-4 animate-pulse rounded-full bg-gray-100" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
