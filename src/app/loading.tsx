export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-bg-primary">
      <div className="flex flex-col items-center gap-6">
        {/* Animated spinner */}
        <div className="relative w-12 h-12">
          <div
            className="absolute inset-0 rounded-full border-2 border-transparent animate-spin"
            style={{
              borderTopColor: "var(--color-accent-blue)",
              borderRightColor: "var(--color-accent-cyan)",
              animationDuration: "0.8s",
            }}
          />
        </div>
        <span
          className="text-sm text-text-muted tracking-wider uppercase"
          style={{ fontFamily: "var(--font-body)" }}
        >
          Loading...
        </span>
      </div>
    </div>
  );
}
