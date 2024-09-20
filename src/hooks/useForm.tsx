// "use client";
import { useState } from "react";

export function useForm(steps: JSX.Element[]) {
  const [currentStep, setCurrentStep] = useState(0);

  function changeStep(index: number, event?: React.FormEvent) {
    event?.preventDefault();

    if (index < 0 || index >= steps.length) return;

    setCurrentStep(index);
  }
  return {
    currentStep,
    currentComponent: steps[currentStep],
    changeStep,
    isLastStep: currentStep + 1 === steps.length,
    isFirstStep: currentStep === 0,
  };
}
