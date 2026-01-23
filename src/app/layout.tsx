import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rift Valley Traders | Premium African Commodities",
  description:
    "Connecting the world's most discerning buyers with Africa's finest commodities. Premium coffee, rare spices, and heritage goods sourced directly from the heart of the Rift Valley since 1987.",
  keywords: [
    "African commodities",
    "premium coffee",
    "Ethiopian coffee",
    "Kenyan coffee",
    "rare spices",
    "heritage grains",
    "direct trade",
    "sustainable sourcing",
    "East Africa trade",
  ],
  authors: [{ name: "Rift Valley Traders" }],
  openGraph: {
    title: "Rift Valley Traders | Premium African Commodities",
    description:
      "Premium coffee, rare spices, and heritage goods sourced directly from the heart of the Rift Valley.",
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
