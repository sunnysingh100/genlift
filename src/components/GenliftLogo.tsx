import Link from "next/link";

interface GenliftLogoProps {
  size?: "sm" | "md" | "lg";
  showText?: boolean;
  className?: string;
}

export default function GenliftLogo({ size = "md", showText = true, className = "" }: GenliftLogoProps) {
  const iconSizes = {
    sm: { w: 28, h: 28 },
    md: { w: 36, h: 36 },
    lg: { w: 48, h: 48 },
  };

  const textSizes = {
    sm: "text-base",
    md: "text-xl",
    lg: "text-2xl",
  };

  const { w, h } = iconSizes[size];

  return (
    <Link href="/" className={`flex items-center gap-2.5 group ${className}`}>
      {/* Logo Icon Mark */}
      <div className="relative transition-transform duration-300 group-hover:scale-105">
        <svg
          width={w}
          height={h}
          viewBox="0 0 512 512"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id={`logo-main-${size}`} x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="50%" stopColor="#22d3ee" />
              <stop offset="100%" stopColor="#06b6d4" />
            </linearGradient>
            <linearGradient id={`logo-wave-${size}`} x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#06b6d4" />
            </linearGradient>
          </defs>

          {/* Voice waveform bars */}
          <rect x="100" y="228" width="28" height="112" rx="14" fill={`url(#logo-wave-${size})`} opacity="0.45" />
          <rect x="156" y="168" width="28" height="232" rx="14" fill={`url(#logo-wave-${size})`} opacity="0.65" />
          <rect x="216" y="104" width="36" height="360" rx="18" fill={`url(#logo-main-${size})`} />
          <rect x="260" y="104" width="36" height="360" rx="18" fill={`url(#logo-main-${size})`} />
          <rect x="328" y="168" width="28" height="232" rx="14" fill={`url(#logo-wave-${size})`} opacity="0.65" />
          <rect x="384" y="228" width="28" height="112" rx="14" fill={`url(#logo-wave-${size})`} opacity="0.45" />

          {/* Upward lift chevron */}
          <path
            d="M196 96 L256 36 L316 96"
            stroke={`url(#logo-main-${size})`}
            strokeWidth="22"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </svg>
      </div>

      {/* Wordmark */}
      {showText && (
        <span
          className={`${textSizes[size]} font-bold tracking-tight`}
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Gen<span className="gradient-text">lift</span>
        </span>
      )}
    </Link>
  );
}
