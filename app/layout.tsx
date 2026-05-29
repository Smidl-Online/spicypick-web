import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = "https://spicypick.app";
const ogImage = `${siteUrl}/og.png`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "SpicyPick — Daily social dilemmas. Vote, debate, judge.",
    template: "%s · SpicyPick",
  },
  description:
    "A fresh social dilemma every day. Cast your verdict, see how the world voted, climb the leaderboards and challenge friends.",
  keywords: [
    "SpicyPick",
    "social dilemmas",
    "daily game",
    "polls",
    "Wordle-like",
    "moral dilemma",
    "voting",
  ],
  authors: [{ name: "Šmídl Online" }],
  openGraph: {
    title: "SpicyPick — Daily social dilemmas",
    description:
      "A fresh social dilemma every day. Vote, debate, climb leaderboards.",
    url: siteUrl,
    siteName: "SpicyPick",
    images: [{ url: ogImage, width: 1200, height: 630, alt: "SpicyPick" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SpicyPick — Daily social dilemmas",
    description: "Vote, debate, judge. A fresh dilemma every day.",
    images: [ogImage],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0a0a14",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
