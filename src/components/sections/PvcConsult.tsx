"use client";

import Image from "next/image";
import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { useLang } from "@/components/LanguageProvider";
import { isPhoneValid, PHONE_MIN_DIGITS } from "@/lib/phone";

const CONSULT_IMG = "/images/per1.webp";

type FormStatus =
  | "idle"
  | "loading"
  | "success"
  | "error"
  | "rate_limited"
  | "phone_too_short";

export function PvcConsult() {
  const { t, lang } = useLang();
  const [phone, setPhone] = useState("");
  const [agreed, setAgreed] = useState(false);
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
          form_type: "pvc_consult",
          phone: `+31${phone}`,
          lang,
          website: "",
          page_url: typeof window !== "undefined" ? window.location.href : "",
          source: "PVC Ramen — Gratis consult sectie",
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
    <Section ariaLabelledby="pvc-consult-title" className="bg-white">
      <Container>
        <div className="mx-auto max-w-[1200px]">
          <h2
            id="pvc-consult-title"
            className="text-center text-[22px] font-extrabold uppercase leading-[1.2] tracking-tight text-[#082b4b] [font-family:Roboto,Arial,sans-serif] sm:text-[30px] md:text-[36px] lg:text-[42px]"
          >
            {t.pvcRamen.consult.title}
          </h2>
          <p className="mx-auto mt-[12px] max-w-[640px] text-center text-[15px] font-bold leading-[1.4] text-[#000] [font-family:Roboto,Arial,sans-serif] sm:mt-[18px] sm:text-[16px] md:text-[18px] lg:text-[20px]">
            {t.pvcRamen.consult.subtitle}
          </p>

          <div className="mt-[28px] grid items-center gap-[28px] sm:mt-[40px] sm:gap-[40px] lg:mt-[60px] lg:grid-cols-[1fr_1fr] lg:gap-[60px]">
            {/* Left — form (renders first; stacks above image on mobile/tablet) */}
            <form
              className="mx-auto w-full max-w-[520px] [font-family:Roboto,Arial,sans-serif]"
              onSubmit={handleSubmit}
              aria-label={t.pvcRamen.consult.title}
            >
              <p className="text-[12px] text-[#7d7d7d] sm:text-[13px]">
                {t.pvcRamen.consult.phoneHint}
              </p>

              <label
                htmlFor="pvc-consult-phone"
                className="mt-[8px] flex h-[52px] items-stretch border-b border-[#b3b3b3] sm:h-[60px]"
              >
                <span className="sr-only">+31</span>
                <span className="flex items-center gap-[8px] pr-[12px] text-[15px] font-medium text-[#050505] sm:gap-[10px] sm:pr-[14px] sm:text-[16px]">
                  <span
                    aria-hidden
                    className="inline-block h-[14px] w-[20px] rounded-[2px] bg-[linear-gradient(to_bottom,#AE1C28_33%,#fff_33%_66%,#21468B_66%)]"
                  />
                  +31
                </span>
                <input
                  id="pvc-consult-phone"
                  type="tel"
                  required
                  inputMode="numeric"
                  pattern="[0-9]*"
                  autoComplete="tel"
                  minLength={PHONE_MIN_DIGITS}
                  value={phone}
                  onChange={(e) =>
                    setPhone(e.target.value.replace(/\D/g, ""))
                  }
                  placeholder={t.pvcRamen.consult.phonePlaceholder}
                  className="h-full min-w-0 flex-1 bg-transparent text-[16px] text-[#050505] outline-none placeholder:text-[#9a9a9a]"
                />
              </label>

              <label className="mt-[16px] flex flex-wrap items-start gap-[10px] text-[12px] leading-[1.4] text-[#3e3e3e] sm:mt-[18px] sm:text-[13px]">
                <input
                  type="checkbox"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  required
                  className="mt-[2px] h-[18px] w-[18px] flex-none accent-[#226CD5]"
                />
                <span className="min-w-0 flex-1">
                  {t.pvcRamen.consult.privacyBefore}
                  <a href="/privacy" className="font-medium text-[#226CD5] underline">
                    {t.pvcRamen.consult.privacyLink}
                  </a>
                </span>
              </label>

              <input type="text" name="website" className="hidden" aria-hidden="true" tabIndex={-1} autoComplete="off" defaultValue="" readOnly />

              {status === "success" ? (
                <div role="status" aria-live="polite" className="mt-[20px] rounded-[10px] bg-[#e6f4ea] px-[16px] py-[14px] text-[14px] text-[#1a5c2a] sm:mt-[22px]">
                  {t.contactForm.success}
                </div>
              ) : (
                <>
                  <button
                    type="submit"
                    disabled={!phone.trim() || !agreed || status === "loading"}
                    className="mt-[20px] inline-flex h-[48px] w-full max-w-full items-center justify-center gap-[8px] rounded-[10px] bg-[#2D51A3] px-[24px] text-[13px] font-bold uppercase tracking-[0.04em] text-white shadow-[0_4px_12px_rgba(0,0,0,0.15)] disabled:opacity-50 disabled:shadow-none sm:mt-[22px] sm:h-[52px] sm:w-auto sm:px-[36px] sm:text-[14px] lg:h-[56px]"
                  >
                    {status === "loading" && (
                      <span aria-hidden className="inline-block size-[16px] animate-spin rounded-full border-2 border-white border-t-transparent" />
                    )}
                    {status === "loading" ? t.contactForm.sending : t.pvcRamen.consult.cta}
                  </button>
                  {(status === "error" || status === "rate_limited" || status === "phone_too_short") && (
                    <p role="alert" aria-live="assertive" className="mt-[10px] text-[13px] text-[#c0392b]">
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

            {/* Right — adviser photo (stacks below form on mobile/tablet) */}
            <div className="relative aspect-[640/420] w-full overflow-hidden rounded-[12px]">
              <Image
                src={CONSULT_IMG}
                alt={t.pvcRamen.consult.alt}
                fill
                sizes="(min-width: 1024px) 600px, 100vw"
                loading="lazy"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
