import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin", "latin-ext"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: {
    default: "VyberRostlinu.cz — Průvodce výběrem rostlin",
    template: "%s | VyberRostlinu.cz",
  },
  description:
    "Interaktivní průvodce výběrem rostlin pro zahradu, balkon i interiér. Katalog s více než 1 000 rostlinami, filtry, porovnání cen v e-shopech.",
  metadataBase: new URL("https://vyberrostlinu.cz"),
  openGraph: {
    siteName: "VyberRostlinu.cz",
    locale: "cs_CZ",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs" className={`${inter.variable} h-full`}>
      <body className="flex min-h-full flex-col font-sans antialiased bg-white text-gray-900">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
