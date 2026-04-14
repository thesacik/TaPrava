import type { Metadata } from "next";
import { SeasonalClient } from "./SeasonalClient";

export const metadata: Metadata = {
  title: "Sezónní průvodce zahradníka — co dělat na zahradě každý měsíc",
  description:
    "Měsíc po měsíci: co sázet, co sklízet, jak pečovat o zahradu a pokojové rostliny. Kompletní průvodce zahradními pracemi pro celý rok.",
  alternates: { canonical: "/sezonni-pruvodce" },
  openGraph: {
    title: "Sezónní průvodce zahradníka",
    description:
      "Měsíc po měsíci: co sázet, co sklízet, jak pečovat o zahradu a pokojové rostliny.",
  },
};

export default function SeasonalGuidePage() {
  return <SeasonalClient />;
}
