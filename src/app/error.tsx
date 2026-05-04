"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log a safe summary — avoid leaking full stack traces in production
    console.error("Page error:", error.message, error.digest ?? "");
  }, [error]);

  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-bg-primary text-center px-6">
      <div className="glass-card p-10 max-w-md w-full">
        <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: "var(--font-heading)" }}>Something went wrong!</h2>
        <p className="text-text-secondary mb-8">We apologize for the inconvenience. An unexpected error occurred.</p>
        <div className="flex flex-col gap-4">
          <button
            onClick={() => reset()}
            className="btn-primary py-3!"
          >
            Try again
          </button>
          <Link href="/" className="btn-ghost py-3!">
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
}
