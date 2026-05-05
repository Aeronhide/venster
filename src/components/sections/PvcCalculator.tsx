"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { useT } from "@/components/LanguageProvider";

type StepOption = { label: string; image?: string };
type StepInput = { label: string; placeholder: string };
type RadioGroup = {
  question: string;
  multi?: boolean;
  options: readonly StepOption[];
};
type StepFinal = {
  heading: string;
  body: string;
  phoneLabel: string;
  phonePlaceholder: string;
  privacyBefore: string;
  privacyLink: string;
  submit: string;
};
type Step = {
  question?: string;
  options?: readonly StepOption[];
  inputs?: readonly StepInput[];
  groups?: readonly RadioGroup[];
  final?: StepFinal;
};

export function PvcCalculator() {
  const t = useT();
  const steps = t.pvcRamen.calculator.steps as readonly Step[];
  const [stepIdx, setStepIdx] = useState(0);
  const [selections, setSelections] = useState<Record<number, number>>({});
  const [inputs, setInputs] = useState<Record<number, string[]>>({});
  const [groups, setGroups] = useState<Record<number, number[][]>>({});
  const [finalPhone, setFinalPhone] = useState("");
  const [finalAgreed, setFinalAgreed] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const router = useRouter();

  const submitFinal = () => {
    if (!finalPhone.trim() || !finalAgreed || submitting) return;
    setSubmitting(true);
    // Simulate brief network delay so the spinner is visible, then navigate.
    setTimeout(() => {
      router.push("/bedankt");
    }, 700);
  };

  const total = steps.length;
  const step = steps[stepIdx];
  const isFinalStep = !!step.final;
  const isInputStep = !isFinalStep && !!step.inputs && step.inputs.length > 0;
  const isGroupStep = !isFinalStep && !!step.groups && step.groups.length > 0;
  const isImageStep =
    !isFinalStep && !isInputStep && !isGroupStep && !!step.options && step.options.some((o) => o.image);

  const selected = selections[stepIdx];
  const stepInputs = inputs[stepIdx] ?? [];
  const stepGroups = groups[stepIdx] ?? [];

  const canContinue = isFinalStep
    ? finalPhone.trim() !== "" && finalAgreed
    : isInputStep
      ? !!step.inputs &&
        step.inputs.every((_, i) => (stepInputs[i] ?? "").trim() !== "")
      : isGroupStep
        ? !!step.groups &&
          step.groups.every(
            (g, i) => g.multi || (stepGroups[i] && stepGroups[i].length > 0)
          )
        : selected !== undefined;

  const choose = (optionIdx: number) =>
    setSelections((s) => ({ ...s, [stepIdx]: optionIdx }));

  const setInput = (fieldIdx: number, value: string) => {
    setInputs((s) => {
      const current = s[stepIdx] ?? [];
      const updated = [...current];
      updated[fieldIdx] = value;
      return { ...s, [stepIdx]: updated };
    });
  };

  const chooseGroup = (groupIdx: number, optionIdx: number, multi: boolean) => {
    setGroups((s) => {
      const current = s[stepIdx] ?? [];
      const updated = [...current];
      const groupCurrent = updated[groupIdx] ?? [];
      if (multi) {
        updated[groupIdx] = groupCurrent.includes(optionIdx)
          ? groupCurrent.filter((x) => x !== optionIdx)
          : [...groupCurrent, optionIdx];
      } else {
        updated[groupIdx] = [optionIdx];
      }
      return { ...s, [stepIdx]: updated };
    });
  };

  const next = () => {
    if (canContinue && stepIdx < total - 1) setStepIdx(stepIdx + 1);
  };
  const prev = () => {
    if (stepIdx > 0) setStepIdx(stepIdx - 1);
  };

  return (
    <Section
      ariaLabelledby="pvc-calculator-title"
      className="bg-[#2D51A3] text-white"
    >
      <Container>
        <div className="mx-auto max-w-[1240px]">
          <h2
            id="pvc-calculator-title"
            className="text-center text-[28px] font-extrabold uppercase leading-[1.2] tracking-tight text-white [font-family:Roboto,Arial,sans-serif] sm:text-[36px] lg:text-[44px]"
          >
            {t.pvcRamen.calculator.title}
          </h2>

          <div className="mx-auto mt-[40px] max-w-[800px] lg:mt-[60px]">
            <fieldset>
              {stepIdx > 0 && step.question && (
                <legend className="mb-[16px] block text-[18px] font-bold leading-[1.4] text-white sm:text-[20px]">
                  {step.question}
                </legend>
              )}

              {isFinalStep && step.final && (
                <div className="mx-auto flex max-w-[640px] flex-col items-center text-center">
                  <h3 className="text-[24px] font-bold leading-[1.25] text-white sm:text-[28px] lg:text-[32px]">
                    {step.final.heading}
                  </h3>
                  <p className="mt-[16px] text-[14px] leading-[1.5] text-white/85 sm:text-[15px]">
                    {step.final.body}
                  </p>

                  <div className="mt-[24px] w-full text-left">
                    <label
                      htmlFor="pvc-calc-final-phone"
                      className="block text-[15px] font-bold uppercase tracking-[0.04em] text-white [font-family:Roboto,Arial,sans-serif]"
                    >
                      {step.final.phoneLabel}
                    </label>
                    <div className="mt-[10px] flex h-[56px] items-stretch overflow-hidden rounded-[10px] bg-white">
                      <span className="flex items-center gap-[8px] border-r border-[#c7c7c7] px-[14px] text-[15px] text-[#050505]">
                        <span
                          aria-hidden
                          className="inline-block h-[14px] w-[20px] rounded-[2px] bg-[linear-gradient(to_bottom,#AE1C28_33%,#fff_33%_66%,#21468B_66%)]"
                        />
                        <span className="text-[12px] text-[#7d7d7d]">▾</span>
                        <span>+31</span>
                      </span>
                      <input
                        id="pvc-calc-final-phone"
                        type="tel"
                        inputMode="numeric"
                        pattern="[0-9]*"
                        value={finalPhone}
                        onChange={(e) =>
                          setFinalPhone(e.target.value.replace(/\D/g, ""))
                        }
                        placeholder={step.final.phonePlaceholder}
                        className="h-full flex-1 bg-white px-[14px] text-[16px] text-[#050505] outline-none placeholder:text-[#9a9a9a]"
                      />
                    </div>

                    <label className="mt-[14px] flex items-start gap-[10px] text-[13px] leading-[1.4] text-white/85 sm:text-[14px]">
                      <input
                        type="checkbox"
                        checked={finalAgreed}
                        onChange={(e) => setFinalAgreed(e.target.checked)}
                        required
                        className="mt-[3px] h-[16px] w-[16px] flex-none accent-white"
                      />
                      <span>
                        {step.final.privacyBefore}
                        <a href="#privacy" className="font-medium underline">
                          {step.final.privacyLink}
                        </a>
                      </span>
                    </label>
                  </div>

                </div>
              )}

              {isInputStep && step.inputs && (
                <div className="mx-auto flex max-w-[480px] flex-col gap-[18px]">
                  {step.inputs.map((field, i) => {
                    const id = `pvc-calc-input-${stepIdx}-${i}`;
                    return (
                      <div key={field.label} className="flex flex-col gap-[10px]">
                        <label
                          htmlFor={id}
                          className="text-[16px] font-bold uppercase tracking-[0.04em] text-white [font-family:Roboto,Arial,sans-serif] sm:text-[18px]"
                        >
                          {field.label}
                        </label>
                        <input
                          id={id}
                          type="text"
                          inputMode="numeric"
                          pattern="[0-9]*"
                          value={stepInputs[i] ?? ""}
                          onChange={(e) =>
                            setInput(i, e.target.value.replace(/\D/g, ""))
                          }
                          placeholder={field.placeholder}
                          className="h-[56px] w-full rounded-[10px] bg-white px-[18px] text-[16px] text-[#222] outline-none [font-family:Roboto,Arial,sans-serif] placeholder:text-[#9a9a9a] focus:ring-2 focus:ring-white"
                        />
                      </div>
                    );
                  })}
                </div>
              )}

              {isGroupStep && step.groups && (
                <div className="flex flex-col gap-[28px]">
                  {step.groups.map((group, gIdx) => {
                    const groupSelected = stepGroups[gIdx] ?? [];
                    const isMulti = !!group.multi;
                    return (
                      <div key={group.question} className="flex flex-col gap-[12px]">
                        <p className="text-[18px] font-bold leading-[1.4] text-white sm:text-[20px]">
                          {group.question}
                        </p>
                        <ul className="flex flex-col gap-[10px]">
                          {group.options.map((opt, i) => {
                            const isSelected = groupSelected.includes(i);
                            return (
                              <li key={opt.label}>
                                <label className="flex cursor-pointer items-center gap-[10px]">
                                  <input
                                    type={isMulti ? "checkbox" : "radio"}
                                    name={`pvc-calc-step-${stepIdx}-group-${gIdx}`}
                                    checked={isSelected}
                                    onChange={() => chooseGroup(gIdx, i, isMulti)}
                                    className="sr-only"
                                  />
                                  <span
                                    aria-hidden
                                    className={`grid size-[20px] shrink-0 place-items-center border-[2px] border-white ${
                                      isMulti ? "rounded-[3px]" : "rounded-full"
                                    } ${isSelected ? "" : "opacity-60"}`}
                                  >
                                    {isSelected && isMulti && (
                                      <svg
                                        width="12"
                                        height="12"
                                        viewBox="0 0 24 24"
                                        aria-hidden
                                        fill="none"
                                        stroke="white"
                                        strokeWidth="3.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      >
                                        <path d="M5 12.5l5 5L20 7" />
                                      </svg>
                                    )}
                                    {isSelected && !isMulti && (
                                      <span className="block size-[10px] rounded-full bg-white" />
                                    )}
                                  </span>
                                  <span className="text-[15px] uppercase tracking-[0.04em] text-white [font-family:Roboto,Arial,sans-serif] sm:text-[16px]">
                                    {opt.label}
                                  </span>
                                </label>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    );
                  })}
                </div>
              )}

              {!isInputStep && !isGroupStep && step.options && (
                isImageStep ? (
                  <ul className="mx-auto flex max-w-[800px] flex-wrap gap-[14px] sm:gap-[16px]">
                    {step.options.map((opt, i) => {
                      const isSelected = selected === i;
                      return (
                        <li key={opt.label} className="w-[140px] sm:w-[155px]">
                          <button
                            type="button"
                            onClick={() => choose(i)}
                            aria-pressed={isSelected}
                            className={`relative flex w-full flex-col rounded-[8px] border-[2px] p-[8px] text-left transition-colors ${
                              isSelected
                                ? "border-white bg-white/10"
                                : "border-white/30 bg-transparent hover:border-white/60"
                            }`}
                          >
                            <span
                              aria-hidden
                              className={`absolute -left-[8px] -top-[8px] grid size-[20px] place-items-center rounded-full bg-white text-[#2D51A3] shadow ${
                                isSelected ? "opacity-100" : "opacity-0"
                              }`}
                            >
                              <svg width="12" height="12" viewBox="0 0 24 24" aria-hidden fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M5 12.5l5 5L20 7" />
                              </svg>
                            </span>

                            <div className="relative aspect-square w-full overflow-hidden rounded-[6px] bg-white/5">
                              {opt.image && (
                                <Image
                                  src={opt.image}
                                  alt={opt.label}
                                  fill
                                  sizes="(min-width: 1024px) 160px, (min-width: 640px) 22vw, 40vw"
                                  loading="lazy"
                                  className="object-contain p-[8%]"
                                />
                              )}
                            </div>
                            <span className="mt-[10px] text-[11px] font-bold uppercase leading-[1.3] tracking-[0.04em] text-white [font-family:Roboto,Arial,sans-serif] sm:text-[12px]">
                              {opt.label}
                            </span>
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                ) : (
                  <div className="mx-auto max-w-[660px]">
                    <ul className="flex flex-col gap-[10px]">
                      {step.options.map((opt, i) => {
                        const isSelected = selected === i;
                        return (
                          <li key={opt.label}>
                            <label className="flex cursor-pointer items-center gap-[10px]">
                              <input
                                type="radio"
                                name={`pvc-calc-step-${stepIdx}`}
                                checked={isSelected}
                                onChange={() => choose(i)}
                                className="sr-only"
                              />
                              <span
                                aria-hidden
                                className={`grid size-[20px] shrink-0 place-items-center rounded-full border-[2px] border-white ${
                                  isSelected ? "" : "opacity-60"
                                }`}
                              >
                                {isSelected && (
                                  <span className="block size-[10px] rounded-full bg-white" />
                                )}
                              </span>
                              <span className="text-[15px] uppercase tracking-[0.04em] text-white [font-family:Roboto,Arial,sans-serif] sm:text-[16px]">
                                {opt.label}
                              </span>
                            </label>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                )
              )}
            </fieldset>

            <div className="mt-[40px] flex items-center justify-between gap-[16px] lg:mt-[56px]">
              {stepIdx > 0 ? (
                <button
                  type="button"
                  onClick={prev}
                  className="inline-flex h-[48px] items-center gap-2 rounded-[10px] bg-white px-[24px] text-[14px] font-bold uppercase text-[#2D51A3] shadow-[0_4px_12px_rgba(0,0,0,0.15)] [font-family:Roboto,Arial,sans-serif]"
                >
                  <span aria-hidden>←</span>
                  {t.pvcRamen.calculator.prev}
                </button>
              ) : (
                <span aria-hidden />
              )}

              {isFinalStep && step.final ? (
                <button
                  type="button"
                  onClick={submitFinal}
                  disabled={!canContinue || submitting}
                  className="inline-flex h-[48px] items-center gap-2 rounded-[10px] bg-white px-[30px] text-[14px] font-bold uppercase text-[#2D51A3] shadow-[0_4px_12px_rgba(0,0,0,0.15)] [font-family:Roboto,Arial,sans-serif] disabled:opacity-50 disabled:shadow-none"
                >
                  {submitting && (
                    <span
                      aria-hidden
                      className="inline-block size-[18px] animate-spin rounded-full border-2 border-[#2D51A3] border-t-transparent"
                    />
                  )}
                  {step.final.submit}
                </button>
              ) : (
                <button
                  type="button"
                  onClick={next}
                  disabled={!canContinue}
                  className="inline-flex h-[48px] items-center gap-2 rounded-[10px] bg-white px-[30px] text-[14px] font-bold uppercase text-[#2D51A3] shadow-[0_4px_12px_rgba(0,0,0,0.15)] [font-family:Roboto,Arial,sans-serif] disabled:opacity-50 disabled:shadow-none"
                >
                  {t.pvcRamen.calculator.next}
                  <span aria-hidden>→</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
