import type { Metadata } from "next";
import { Inter, Amatic_SC } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CookieConsent } from "@/components/CookieConsent";
import "./globals.css";

const inter = Inter({ subsets: ["latin", "latin-ext"], variable: "--font-inter" });
const amatic = Amatic_SC({ weight: ["400", "700"], subsets: ["latin", "latin-ext"], variable: "--font-amatic" });

export const metadata: Metadata = {
  title: {
    default: "Ta Pravá — Průvodce výběrem rostlin",
    template: "%s | Ta Pravá",
  },
  description:
    "Interaktivní průvodce výběrem rostlin pro zahradu, balkon i interiér. Katalog s více než 1 000 rostlinami, filtry, porovnání cen v e-shopech.",
  metadataBase: new URL("https://taprava.cz"),
  openGraph: {
    siteName: "Ta Pravá",
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
    <html lang="cs" className={`${inter.variable} ${amatic.variable} h-full`}>
      <body className="flex min-h-full flex-col font-sans antialiased bg-white text-gray-900">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
