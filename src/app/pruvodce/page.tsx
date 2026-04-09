import type { Metadata } from "next";
import { WizardClient } from "@/components/WizardClient";

export const metadata: Metadata = {
  title: "Průvodce výběrem rostlin",
  description:
    "Odpovězte na pár otázek a my vám doporučíme ty nejlepší rostliny pro vaše podmínky. Zdarma a bez registrace.",
  openGraph: {
    title: "Průvodce výběrem rostlin | Ta Pravá",
    description: "Odpovězte na pár otázek a my vám doporučíme ty nejlepší rostliny pro vaše podmínky.",
  },
};

export default function PruvodcePage() {
  return <WizardClient />;
}
