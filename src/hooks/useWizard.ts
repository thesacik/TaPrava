"use client";

import { useState, useCallback } from "react";
import type { UserAnswers } from "@/types/plants";

export interface WizardStep {
  id: string;
  question: string;
  options: { value: string; label: string }[];
  multiSelect?: boolean;
}

export function useBranchingWizard(
  getBranch: (answers: UserAnswers) => WizardStep[],
  initialStep: WizardStep
) {
  const [answers, setAnswers] = useState<UserAnswers>({});
  const [history, setHistory] = useState<{ step: WizardStep; answersSnapshot: UserAnswers }[]>([]);
  const [currentStep, setCurrentStep] = useState<WizardStep | null>(initialStep);
  const [branch, setBranch] = useState<WizardStep[] | null>(null);
  const [branchIndex, setBranchIndex] = useState(0);
  const [finished, setFinished] = useState(false);

  const totalSteps = branch ? branch.length + 1 : 1;
  const stepIndex = branch ? branchIndex + 1 : 0;

  const advance = useCallback(
    (newAnswers: UserAnswers, currentStepObj: WizardStep) => {
      setHistory((prev) => [...prev, { step: currentStepObj, answersSnapshot: { ...newAnswers } }]);

      if (!branch) {
        const resolved = getBranch(newAnswers);
        setBranch(resolved);
        setBranchIndex(0);
        setCurrentStep(resolved[0] ?? null);
        if (resolved.length === 0) setFinished(true);
      } else {
        const nextIdx = branchIndex + 1;
        if (nextIdx >= branch.length) {
          setFinished(true);
          setCurrentStep(null);
        } else {
          setBranchIndex(nextIdx);
          setCurrentStep(branch[nextIdx]);
        }
      }
    },
    [branch, branchIndex, getBranch]
  );

  const setAnswer = useCallback(
    (key: string, value: unknown) => {
      const newAnswers = { ...answers, [key]: value };
      setAnswers(newAnswers);
      if (currentStep) advance(newAnswers, currentStep);
    },
    [answers, currentStep, advance]
  );

  const setMultiAnswer = useCallback(
    (updates: Partial<UserAnswers>) => {
      const newAnswers = { ...answers, ...updates };
      setAnswers(newAnswers);
      if (currentStep) advance(newAnswers, currentStep);
    },
    [answers, currentStep, advance]
  );

  const skip = useCallback(() => {
    if (currentStep) advance(answers, currentStep);
  }, [answers, currentStep, advance]);

  const goBack = useCallback(() => {
    if (history.length === 0) return;
    const prev = history[history.length - 1];
    setHistory((h) => h.slice(0, -1));
    setAnswers(prev.answersSnapshot);
    setCurrentStep(prev.step);
    setFinished(false);
    if (history.length === 1) {
      setBranch(null);
      setBranchIndex(0);
    } else {
      setBranchIndex((i) => Math.max(i - 1, 0));
    }
  }, [history]);

  return {
    currentStep,
    answers,
    stepIndex,
    totalSteps,
    isFinished: finished,
    canGoBack: history.length > 0,
    setAnswer,
    setMultiAnswer,
    skip,
    goBack,
  };
}
