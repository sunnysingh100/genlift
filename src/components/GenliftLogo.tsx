import Link from "next/link";
import Image from "next/image";

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
      {/* Logo Image */}
      <div className="relative transition-transform duration-300 group-hover:scale-105">
        <Image
          src="/genlift-logo.png"
          alt="Genlift Logo"
          width={w}
          height={h}
          priority
          style={{ width: "auto", height: "auto", maxWidth: w, maxHeight: h }}
        />
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
