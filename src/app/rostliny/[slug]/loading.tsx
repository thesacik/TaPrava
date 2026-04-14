export default function PlantLoading() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-8">
      <div className="grid gap-8 md:grid-cols-2">
        <div className="aspect-square animate-pulse rounded-2xl bg-gray-100" />
        <div className="space-y-4">
          <div className="h-8 w-3/4 animate-pulse rounded-lg bg-gray-200" />
          <div className="h-4 w-1/2 animate-pulse rounded bg-gray-100" />
          <div className="mt-4 space-y-2">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="h-10 animate-pulse rounded-lg bg-gray-50" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
