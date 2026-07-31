export default function EpicsLoading() {
  return (
    <div className="p-8 max-w-7xl mx-auto w-full animate-pulse">
      {/* Breadcrumbs Skeleton */}
      <div className="flex gap-2 mb-6">
        <div className="h-4 w-16 bg-surface-highest rounded"></div>
        <div className="h-4 w-2 bg-surface-highest rounded"></div>
        <div className="h-4 w-20 bg-surface-highest rounded"></div>
      </div>

      {/* Header Skeleton */}
      <div className="flex justify-between items-center mb-8">
        <div className="h-10 w-48 bg-surface-highest rounded-lg"></div>
        <div className="flex gap-4">
          <div className="h-10 w-64 bg-surface-highest rounded-lg"></div>
          <div className="h-10 w-28 bg-surface-highest rounded-lg"></div>
        </div>
      </div>

      {/* Grid Skeleton */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="bg-white rounded-xl p-6 border border-surface-low"
          >
            <div className="flex justify-between items-start mb-6">
              <div className="h-6 w-20 bg-surface-highest rounded"></div>
              <div className="h-6 w-6 bg-surface-highest rounded-full"></div>
            </div>

            <div className="h-6 w-3/4 bg-surface-highest rounded mb-8"></div>

            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-full bg-surface-highest"></div>
              <div className="space-y-2">
                <div className="h-3 w-16 bg-surface-highest rounded"></div>
                <div className="h-4 w-24 bg-surface-highest rounded"></div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-surface-low">
              <div className="h-4 w-32 bg-surface-highest rounded"></div>
              <div className="h-4 w-24 bg-surface-highest rounded"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
