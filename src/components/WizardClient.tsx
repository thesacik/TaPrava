"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, SkipForward, ChevronRight } from "lucide-react";
import type { UserAnswers, Ocekavani, Svetlo, Vlhkost, Kategorie, VelikostKategorie, Narocnost } from "@/types/plants";
import { useBranchingWizard, type WizardStep } from "@/hooks/useWizard";
import {
  svetloLabels, svetloInterierLabels, vlhkostLabels,
  kategorieVenkuLabels, velikostLabels, velikostInterierLabels,
  velikostBalkonLabels, narocnostWizardLabels, ocekavaniLabels, ocekavaniBalkonLabels,
} from "@/utils/labels";

const firstStep: WizardStep = {
  id: "umisteni",
  question: "Kam bude rostlina umístěná?",
  options: [
    { value: "venku", label: "Venku na zahradě" },
    { value: "interier", label: "V interiéru (pokojovka)" },
    { value: "balkon_terasa", label: "Na balkoně / terase" },
  ],
};

const venkuSteps: WizardStep[] = [
  { id: "svetlo", question: "Kolik tam je světla?", options: (Object.keys(svetloLabels) as Svetlo[]).map((k) => ({ value: k, label: svetloLabels[k] })) },
  { id: "vlhkost", question: "Jaká je tam vláha?", options: (Object.keys(vlhkostLabels) as Vlhkost[]).map((k) => ({ value: k, label: vlhkostLabels[k] })) },
  { id: "kategorie", question: "Jaký typ rostliny hledáte?", options: (Object.keys(kategorieVenkuLabels) as Kategorie[]).map((k) => ({ value: k, label: kategorieVenkuLabels[k]! })) },
  { id: "ocekavani", question: "Co od rostliny očekáváte?", options: (Object.keys(ocekavaniLabels) as Ocekavani[]).map((k) => ({ value: k, label: ocekavaniLabels[k] })), multiSelect: true },
  { id: "velikost", question: "Jak velkou rostlinu chcete?", options: (Object.keys(velikostLabels) as VelikostKategorie[]).map((k) => ({ value: k, label: velikostLabels[k] })) },
];

const interierSteps: WizardStep[] = [
  { id: "svetlo", question: "Kam chcete rostlinu umístit?", options: (Object.keys(svetloInterierLabels) as Svetlo[]).map((k) => ({ value: k, label: svetloInterierLabels[k] })) },
  { id: "velikost", question: "Jak velkou rostlinu chcete?", options: (Object.keys(velikostInterierLabels) as VelikostKategorie[]).map((k) => ({ value: k, label: velikostInterierLabels[k] })) },
  { id: "narocnost", question: "Kolik péče jí chcete věnovat?", options: (Object.keys(narocnostWizardLabels) as Narocnost[]).map((k) => ({ value: k, label: narocnostWizardLabels[k] })) },
  { id: "bezpecnost", question: "Je něco, na co dát pozor?", options: [{ value: "bezpecna_pro_deti", label: "Bezpečná pro děti" }, { value: "bezpecna_pro_mazlicky", label: "Bezpečná pro domácí mazlíčky" }], multiSelect: true },
];

const balkonSteps: WizardStep[] = [
  { id: "svetlo", question: "Kolik tam je světla?", options: (Object.keys(svetloLabels) as Svetlo[]).map((k) => ({ value: k, label: svetloLabels[k] })) },
  { id: "ocekavani", question: "Co od rostliny očekáváte?", options: (Object.keys(ocekavaniBalkonLabels) as Ocekavani[]).map((k) => ({ value: k, label: ocekavaniBalkonLabels[k]! })), multiSelect: true },
  { id: "velikost", question: "Jak velkou rostlinu chcete?", options: (Object.keys(velikostBalkonLabels) as VelikostKategorie[]).map((k) => ({ value: k, label: velikostBalkonLabels[k] })) },
  { id: "narocnost", question: "Kolik péče jí chcete věnovat?", options: (Object.keys(narocnostWizardLabels) as Narocnost[]).map((k) => ({ value: k, label: narocnostWizardLabels[k] })) },
];

function getBranch(answers: UserAnswers): WizardStep[] {
  switch (answers.umisteni) {
    case "venku": return venkuSteps;
    case "interier": return interierSteps;
    case "balkon_terasa": return balkonSteps;
    default: return venkuSteps;
  }
}

export function WizardClient() {
  const router = useRouter();
  const wizard = useBranchingWizard(getBranch, firstStep);

  const didRedirect = useRef(false);

  useEffect(() => {
    if (!wizard.isFinished || didRedirect.current) return;
    didRedirect.current = true;

    const a = { ...wizard.answers };
    if (a.umisteni === "interier") a.kategorie = "pokojova";
    if (a.umisteni === "balkon_terasa") a.vhodnaDoNadoby = true;

    const params = new URLSearchParams();
    Object.entries(a).forEach(([k, v]) => {
      if (v === undefined || v === null) return;
      if (Array.isArray(v)) params.set(k, v.join(","));
      else params.set(k, String(v));
    });
    router.push(`/rostliny?${params.toString()}`);
  }, [wizard.isFinished, wizard.answers, router]);

  if (wizard.isFinished) return null;

  const step = wizard.currentStep;
  if (!step) return null;

  return (
    <div className="flex min-h-[calc(100dvh-4rem)] items-center justify-center px-4 py-12">
      <div className="w-full max-w-lg">
        <div className="mb-8">
          <div className="mb-4 flex items-center justify-between">
            {wizard.canGoBack ? (
              <button onClick={wizard.goBack} className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-gray-600 shadow-sm transition hover:bg-gray-100">
                <ArrowLeft size={22} />
              </button>
            ) : (
              <div className="w-10" />
            )}
            <span className="text-sm font-semibold text-gray-400">{wizard.stepIndex + 1} / {wizard.totalSteps}</span>
            <button onClick={wizard.skip} className="flex items-center gap-1 text-sm font-medium text-gray-400 transition hover:text-gray-600">
              <SkipForward size={16} /> Přeskočit
            </button>
          </div>
          <div className="h-1.5 overflow-hidden rounded-full bg-gray-200">
            <div className="h-full rounded-full bg-primary transition-all duration-300" style={{ width: `${((wizard.stepIndex + 1) / wizard.totalSteps) * 100}%` }} />
          </div>
        </div>

        <h2 className="mb-8 text-center text-2xl font-bold text-primary-dark md:text-3xl">{step.question}</h2>

        {step.multiSelect ? (
          <MultiSelect step={step} wizard={wizard} />
        ) : (
          <div className="space-y-3">
            {step.options.map((opt) => (
              <button
                key={opt.value}
                onClick={() => wizard.setAnswer(step.id, opt.value)}
                className="w-full rounded-2xl border-2 border-gray-200 bg-white px-6 py-5 text-center text-lg font-medium text-gray-800 shadow-sm transition hover:border-primary hover:shadow-md active:scale-[0.98]"
              >
                {opt.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function MultiSelect({ step, wizard }: { step: WizardStep; wizard: ReturnType<typeof useBranchingWizard> }) {
  const [selected, setSelected] = useState<Set<string>>(new Set());

  const toggle = (v: string) => setSelected((prev) => {
    const next = new Set(prev);
    if (next.has(v)) next.delete(v); else next.add(v);
    return next;
  });

  const confirm = () => {
    const values = [...selected];
    if (step.id === "ocekavani") {
      wizard.setAnswer("ocekavani", values as Ocekavani[]);
    } else if (step.id === "bezpecnost") {
      const updates: Partial<UserAnswers> = {};
      if (values.includes("bezpecna_pro_deti")) updates.bezpecnostDeti = true;
      if (values.includes("bezpecna_pro_mazlicky")) updates.bezpecnostMazlici = true;
      wizard.setMultiAnswer(updates);
    }
    setSelected(new Set());
  };

  return (
    <>
      <p className="mb-4 text-center text-sm text-gray-400">Můžete vybrat i více možností</p>
      <div className="mb-6 space-y-3">
        {step.options.map((opt) => (
          <button
            key={opt.value}
            onClick={() => toggle(opt.value)}
            className={`w-full rounded-2xl border-2 px-6 py-5 text-center text-lg font-medium shadow-sm transition active:scale-[0.98] ${
              selected.has(opt.value)
                ? "border-primary bg-accent-light text-primary-dark shadow-primary/10"
                : "border-gray-200 bg-white text-gray-800"
            }`}
          >
            {opt.label}
          </button>
        ))}
      </div>
      <button
        onClick={confirm}
        className="mx-auto flex items-center gap-2 rounded-2xl bg-primary px-8 py-4 text-lg font-semibold text-white shadow-lg transition hover:bg-primary-dark active:scale-[0.98]"
      >
        Pokračovat <ChevronRight size={20} />
      </button>
    </>
  );
}
