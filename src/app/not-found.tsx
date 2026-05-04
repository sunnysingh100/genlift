import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-bg-primary text-center px-6">
      <div className="glass-card p-10 max-w-md w-full">
        <h2 className="text-4xl font-bold mb-2 gradient-text" style={{ fontFamily: "var(--font-heading)" }}>404</h2>
        <h3 className="text-xl font-bold mb-4" style={{ fontFamily: "var(--font-heading)" }}>Page Not Found</h3>
        <p className="text-text-secondary mb-8">The page you are looking for doesn&apos;t exist or has been moved.</p>
        <Link href="/" className="btn-primary py-3! inline-block">
          Return Home
        </Link>
      </div>
    </div>
  );
}
