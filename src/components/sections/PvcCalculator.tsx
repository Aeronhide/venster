"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { useLang } from "@/components/LanguageProvider";
import { isPhoneValid, PHONE_MIN_DIGITS } from "@/lib/phone";

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
  const { t, lang } = useLang();
  const steps = t.pvcRamen.calculator.steps as readonly Step[];
  const [stepIdx, setStepIdx] = useState(0);
  const [selections, setSelections] = useState<Record<number, number>>({});
  const [inputs, setInputs] = useState<Record<number, string[]>>({});
  const [groups, setGroups] = useState<Record<number, number[][]>>({});
  const [finalPhone, setFinalPhone] = useState("");
  const [finalAgreed, setFinalAgreed] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const router = useRouter();

  const submitFinal = async () => {
    if (!finalPhone.trim() || !finalAgreed || submitting) return;
    if (!isPhoneValid(finalPhone)) {
      setSubmitError(t.contactForm.phoneTooShort);
      return;
    }
    setSubmitting(true);
    setSubmitError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          form_type: "pvc_calculator",
          phone: `+31${finalPhone}`,
          lang,
          website: "",
          page_url: typeof window !== "undefined" ? window.location.href : "",
          source: "PVC Ramen — Calculator (laatste stap)",
        }),
      });
      const data: { success: boolean; code?: string } = await res.json();
      if (data.success) {
        router.push("/bedankt");
      } else {
        setSubmitError(data.code === "rate_limited" ? t.contactForm.rateLimited : t.contactForm.error);
        setSubmitting(false);
      }
    } catch {
      setSubmitError(t.contactForm.error);
      setSubmitting(false);
    }
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
            className="text-center text-[22px] font-extrabold uppercase leading-[1.2] tracking-tight text-white [font-family:Roboto,Arial,sans-serif] sm:text-[30px] lg:text-[44px]"
          >
            {t.pvcRamen.calculator.title}
          </h2>

          <div className="mx-auto mt-[28px] max-w-[800px] sm:mt-[40px] lg:mt-[60px]">
            <fieldset className="min-w-0">
              {stepIdx > 0 && step.question && (
                <legend className="mb-[14px] block text-[16px] font-bold leading-[1.4] text-white sm:text-[18px] lg:text-[20px]">
                  {step.question}
                </legend>
              )}

              {isFinalStep && step.final && (
                <div className="mx-auto flex max-w-[640px] flex-col items-center text-center">
                  <h3 className="text-[20px] font-bold leading-[1.25] text-white sm:text-[24px] lg:text-[32px]">
                    {step.final.heading}
                  </h3>
                  <p className="mt-[12px] text-[14px] leading-[1.5] text-white/85 sm:text-[15px] lg:text-[16px]">
                    {step.final.body}
                  </p>

                  <div className="mt-[20px] w-full min-w-0 text-left sm:mt-[24px]">
                    <label
                      htmlFor="pvc-calc-final-phone"
                      className="block text-[13px] font-bold uppercase tracking-[0.04em] text-white [font-family:Roboto,Arial,sans-serif] sm:text-[14px] lg:text-[15px]"
                    >
                      {step.final.phoneLabel}
                    </label>
                    <div className="mt-[8px] flex h-[48px] min-w-0 items-stretch overflow-hidden rounded-[10px] bg-white sm:mt-[10px] sm:h-[52px] lg:h-[56px]">
                      <span className="flex shrink-0 items-center gap-[6px] border-r border-[#c7c7c7] px-[10px] text-[14px] text-[#050505] sm:gap-[8px] sm:px-[14px] sm:text-[15px]">
                        <span
                          aria-hidden
                          className="inline-block h-[12px] w-[18px] rounded-[2px] bg-[linear-gradient(to_bottom,#AE1C28_33%,#fff_33%_66%,#21468B_66%)] sm:h-[14px] sm:w-[20px]"
                        />
                        <span className="text-[12px] text-[#7d7d7d]">▾</span>
                        <span>+31</span>
                      </span>
                      <input
                        id="pvc-calc-final-phone"
                        type="tel"
                        required
                        inputMode="numeric"
                        pattern="[0-9]*"
                        autoComplete="tel"
                        minLength={PHONE_MIN_DIGITS}
                        value={finalPhone}
                        onChange={(e) =>
                          setFinalPhone(e.target.value.replace(/\D/g, ""))
                        }
                        placeholder={step.final.phonePlaceholder}
                        className="h-full min-w-0 flex-1 bg-white px-[12px] text-[16px] text-[#050505] outline-none placeholder:text-[#9a9a9a] sm:px-[14px]"
                      />
                    </div>

                    <label className="mt-[12px] flex items-start gap-[10px] text-[12px] leading-[1.4] text-white/85 sm:mt-[14px] sm:text-[13px] lg:text-[14px]">
                      <input
                        type="checkbox"
                        checked={finalAgreed}
                        onChange={(e) => setFinalAgreed(e.target.checked)}
                        required
                        className="mt-[3px] h-[16px] w-[16px] flex-none accent-white"
                      />
                      <span>
                        {step.final.privacyBefore}
                        <a href="/privacy" className="font-medium underline">
                          {step.final.privacyLink}
                        </a>
                      </span>
                    </label>
                    {submitError && (
                      <p role="alert" aria-live="assertive" className="mt-[10px] text-[12px] text-white/90 sm:text-[13px]">
                        {submitError}
                      </p>
                    )}
                  </div>

                </div>
              )}

              {isInputStep && step.inputs && (
                <div className="mx-auto flex max-w-[480px] flex-col gap-[16px] sm:gap-[18px]">
                  {step.inputs.map((field, i) => {
                    const id = `pvc-calc-input-${stepIdx}-${i}`;
                    return (
                      <div key={field.label} className="flex flex-col gap-[8px] sm:gap-[10px]">
                        <label
                          htmlFor={id}
                          className="text-[14px] font-bold uppercase tracking-[0.04em] text-white [font-family:Roboto,Arial,sans-serif] sm:text-[16px] lg:text-[18px]"
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
                          className="h-[48px] w-full rounded-[10px] bg-white px-[14px] text-[16px] text-[#222] outline-none [font-family:Roboto,Arial,sans-serif] placeholder:text-[#9a9a9a] focus:ring-2 focus:ring-white sm:h-[52px] sm:px-[18px] lg:h-[56px]"
                        />
                      </div>
                    );
                  })}
                </div>
              )}

              {isGroupStep && step.groups && (
                <div className="flex flex-col gap-[20px] sm:gap-[24px] lg:gap-[28px]">
                  {step.groups.map((group, gIdx) => {
                    const groupSelected = stepGroups[gIdx] ?? [];
                    const isMulti = !!group.multi;
                    return (
                      <div key={group.question} className="flex flex-col gap-[10px] sm:gap-[12px]">
                        <p className="text-[16px] font-bold leading-[1.4] text-white sm:text-[18px] lg:text-[20px]">
                          {group.question}
                        </p>
                        <ul className="flex flex-col gap-[8px] sm:gap-[10px]">
                          {group.options.map((opt, i) => {
                            const isSelected = groupSelected.includes(i);
                            return (
                              <li key={opt.label}>
                                <label className="flex min-h-[44px] cursor-pointer items-center gap-[10px] py-[6px]">
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
                                  <span className="text-[14px] uppercase tracking-[0.04em] text-white [font-family:Roboto,Arial,sans-serif] sm:text-[15px] lg:text-[16px]">
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
                  <ul className="mx-auto grid max-w-[800px] grid-cols-2 gap-[12px] sm:grid-cols-[repeat(auto-fill,minmax(140px,1fr))] sm:gap-[14px] lg:gap-[16px]">
                    {step.options.map((opt, i) => {
                      const isSelected = selected === i;
                      return (
                        <li key={opt.label} className="min-w-0">
                          <button
                            type="button"
                            onClick={() => choose(i)}
                            aria-pressed={isSelected}
                            className={`relative flex min-h-[44px] w-full flex-col rounded-[8px] border-[2px] p-[8px] text-left transition-colors ${
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
                                  sizes="(min-width: 1024px) 160px, (min-width: 640px) 22vw, 45vw"
                                  loading="lazy"
                                  className="object-contain p-[8%]"
                                />
                              )}
                            </div>
                            <span className="mt-[8px] text-[11px] font-bold uppercase leading-[1.3] tracking-[0.04em] text-white [font-family:Roboto,Arial,sans-serif] sm:mt-[10px] sm:text-[12px]">
                              {opt.label}
                            </span>
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                ) : (
                  <div className="mx-auto max-w-[660px]">
                    <ul className="grid grid-cols-2 gap-x-[12px] gap-y-[8px] sm:flex sm:flex-col sm:gap-[10px]">
                      {step.options.map((opt, i) => {
                        const isSelected = selected === i;
                        return (
                          <li key={opt.label}>
                            <label className="flex min-h-[44px] cursor-pointer items-center gap-[10px] py-[6px]">
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
                              <span className="text-[14px] uppercase tracking-[0.04em] text-white [font-family:Roboto,Arial,sans-serif] sm:text-[15px] lg:text-[16px]">
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

            <div className="mt-[28px] flex items-center justify-between gap-[12px] sm:mt-[40px] sm:gap-[16px] lg:mt-[56px]">
              {stepIdx > 0 ? (
                <button
                  type="button"
                  onClick={prev}
                  className="inline-flex h-[48px] flex-1 items-center justify-center gap-[6px] rounded-[10px] bg-white px-[16px] text-[13px] font-bold uppercase text-[#2D51A3] shadow-[0_4px_12px_rgba(0,0,0,0.15)] [font-family:Roboto,Arial,sans-serif] sm:flex-none sm:gap-2 sm:px-[24px] sm:text-[14px] lg:h-[52px]"
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
                  className="inline-flex h-[48px] flex-1 items-center justify-center gap-[6px] rounded-[10px] bg-white px-[16px] text-[13px] font-bold uppercase text-[#2D51A3] shadow-[0_4px_12px_rgba(0,0,0,0.15)] [font-family:Roboto,Arial,sans-serif] disabled:opacity-50 disabled:shadow-none sm:flex-none sm:gap-2 sm:px-[30px] sm:text-[14px] lg:h-[52px]"
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
                  className="inline-flex h-[48px] flex-1 items-center justify-center gap-[6px] rounded-[10px] bg-white px-[16px] text-[13px] font-bold uppercase text-[#2D51A3] shadow-[0_4px_12px_rgba(0,0,0,0.15)] [font-family:Roboto,Arial,sans-serif] disabled:opacity-50 disabled:shadow-none sm:flex-none sm:gap-2 sm:px-[30px] sm:text-[14px] lg:h-[52px]"
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
