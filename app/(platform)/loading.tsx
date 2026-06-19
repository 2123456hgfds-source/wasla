export default function PlatformLoading() {
  return (
    <div className="animate-pulse space-y-6">
      <div className="space-y-2">
        <div className="h-7 w-40 rounded-md bg-surface" />
        <div className="h-4 w-64 rounded-md bg-surface" />
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="h-24 rounded-lg border border-border bg-card" />
        ))}
      </div>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <div className="h-72 rounded-lg border border-border bg-card lg:col-span-2" />
        <div className="h-72 rounded-lg border border-border bg-card" />
      </div>
    </div>
  );
}
