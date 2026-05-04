import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  metadataBase: new URL("https://genlift.online"),
  title: "Genlift - Custom AI Voice Agents for Your Business",
  description:
    "Genlift builds and deploys custom AI voice agents for small and medium-sized businesses. Automate calls, capture leads 24/7, and delight customers with human-like voice AI.",
  keywords: [
    "AI voice agents",
    "voice AI agency",
    "custom voice bots",
    "AI phone agents",
    "business automation",
    "voice assistant",
    "Genlift",
  ],
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/apple-touch-icon.svg", sizes: "180x180", type: "image/svg+xml" },
    ],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Genlift - Custom AI Voice Agents for Your Business",
    description:
      "We build and deploy custom AI voice agents that handle calls, capture leads, and automate customer interactions for SMBs across industries.",
    url: "https://genlift.online",
    siteName: "Genlift",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Genlift - Custom AI Voice Agents for Your Business",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Genlift - Custom AI Voice Agents for Your Business",
    description:
      "Custom AI voice agents built for your business. 24/7 availability, human-like conversations, seamless integrations.",
    images: ["/og-image.png"],
  },
  robots: "index, follow",
  other: {
    "theme-color": "#3b82f6",
    "msapplication-TileColor": "#050816",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Outfit:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-full flex flex-col font-sans" style={{ fontFamily: "var(--font-body)" }}>
        {children}
      </body>
    </html>
  );
}
