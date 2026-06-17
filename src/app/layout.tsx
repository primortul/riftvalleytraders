import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rift Valley Traders | African Specialty & Commodity Trade",
  description:
    "Connecting global markets with Africa's finest commodities since 1987. Single-origin coffee, spices, and heritage goods for discerning buyers, plus bulk grain, sugar, and commodity trade at scale.",
  keywords: [
    "African commodities",
    "premium coffee",
    "Ethiopian coffee",
    "Kenyan coffee",
    "rare spices",
    "heritage grains",
    "bulk grain trade",
    "commodity trading",
    "wheat maize rice supply",
    "sugar trade",
    "cotton cocoa cashew",
    "direct trade",
    "sustainable sourcing",
    "East Africa trade",
  ],
  authors: [{ name: "Rift Valley Traders" }],
  openGraph: {
    title: "Rift Valley Traders | African Specialty & Commodity Trade",
    description:
      "Single-origin specialty goods for discerning buyers, plus bulk grain and commodity trade at scale — sourced from the heart of the Rift Valley.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
