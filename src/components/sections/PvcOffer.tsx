"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { useLang } from "@/components/LanguageProvider";
import { isPhoneValid, PHONE_MIN_DIGITS } from "@/lib/phone";

type FormStatus =
  | "idle"
  | "loading"
  | "success"
  | "error"
  | "rate_limited"
  | "phone_too_short";

export function PvcOffer() {
  const { t, lang } = useLang();
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState<FormStatus>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "loading") return;
    if (!isPhoneValid(phone)) {
      setStatus("phone_too_short");
      return;
    }
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          form_type: "pvc_offer",
          phone: `+31${phone}`,
          lang,
          website: "",
          page_url: typeof window !== "undefined" ? window.location.href : "",
          source: "PVC Ramen — Offerte vergelijken sectie",
        }),
      });
      const data: { success: boolean; code?: string } = await res.json();
      if (data.success) {
        setStatus("success");
      } else if (data.code === "rate_limited") {
        setStatus("rate_limited");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <Section ariaLabelledby="pvc-offer-title" className="bg-[#2D51A3]">
      <Container>
        <div className="mx-auto max-w-[1100px] [font-family:Roboto,Arial,sans-serif]">
          <h2
            id="pvc-offer-title"
            className="text-balance text-center text-[18px] font-extrabold uppercase leading-[1.25] tracking-tight text-white sm:text-[26px] lg:text-[40px]"
          >
            {t.pvcRamen.offer.title}
          </h2>
          <p className="mx-auto mt-[14px] max-w-[640px] text-center text-[14px] leading-[1.5] text-white/90 sm:mt-[18px] sm:text-[15px] lg:text-[17px]">
            {t.pvcRamen.offer.subtitle}
          </p>

          <form
            onSubmit={handleSubmit}
            aria-label={t.pvcRamen.offer.title}
            className="mx-auto mt-[24px] w-full max-w-[640px] sm:mt-[32px] lg:mt-[40px]"
          >
            <input type="text" name="website" className="hidden" aria-hidden="true" tabIndex={-1} autoComplete="off" defaultValue="" readOnly />

            {status === "success" ? (
              <div role="status" aria-live="polite" className="mt-[16px] rounded-[10px] bg-white/15 px-[16px] py-[14px] text-[14px] text-white">
                {t.contactForm.success}
              </div>
            ) : (
              <>
                <p className="text-[12px] text-white/85 sm:text-[13px]">
                  {t.pvcRamen.offer.phoneHint}
                </p>

                <div className="mt-[10px] flex flex-col gap-[10px] sm:flex-row sm:items-stretch sm:gap-[12px]">
                  <label
                    htmlFor="pvc-offer-phone"
                    className="flex h-[56px] w-full items-stretch overflow-hidden rounded-[10px] bg-white sm:h-[60px] sm:w-auto sm:flex-1 lg:h-[64px]"
                  >
                    <span className="sr-only">+31</span>
                    <span className="flex items-center gap-[10px] pl-[18px] pr-[12px] text-[16px] font-medium text-[#050505]">
                      <span
                        aria-hidden
                        className="inline-block h-[14px] w-[20px] rounded-[2px] bg-[linear-gradient(to_bottom,#AE1C28_33%,#fff_33%_66%,#21468B_66%)]"
                      />
                      +31
                    </span>
                    <input
                      id="pvc-offer-phone"
                      type="tel"
                      required
                      inputMode="numeric"
                      pattern="[0-9]*"
                      autoComplete="tel"
                      minLength={PHONE_MIN_DIGITS}
                      value={phone}
                      onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))}
                      placeholder={t.pvcRamen.offer.phonePlaceholder}
                      className="h-full min-w-0 flex-1 bg-transparent pr-[16px] text-[16px] text-[#050505] outline-none placeholder:text-[#9a9a9a]"
                    />
                  </label>

                  <button
                    type="submit"
                    disabled={!phone.trim() || status === "loading"}
                    className="inline-flex h-[56px] w-full cursor-pointer items-center justify-center gap-[8px] rounded-[10px] bg-[#B83430] px-[32px] text-[14px] font-bold uppercase tracking-[0.06em] text-white hover:bg-[#a02b27] disabled:cursor-not-allowed disabled:opacity-60 sm:h-[60px] sm:w-auto sm:px-[40px] sm:text-[15px] lg:h-[64px]"
                  >
                    {status === "loading" && (
                      <span aria-hidden className="inline-block size-[16px] animate-spin rounded-full border-2 border-white border-t-transparent" />
                    )}
                    {status === "loading" ? t.contactForm.sending : t.pvcRamen.offer.cta}
                  </button>
                </div>
                {(status === "error" || status === "rate_limited" || status === "phone_too_short") && (
                  <p role="alert" aria-live="assertive" className="mt-[10px] text-[13px] text-white/90">
                    {status === "rate_limited"
                      ? t.contactForm.rateLimited
                      : status === "phone_too_short"
                        ? t.contactForm.phoneTooShort
                        : t.contactForm.error}
                  </p>
                )}
              </>
            )}
          </form>
        </div>
      </Container>
    </Section>
  );
}
