"use client";

import Image from "next/image";
import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { useT } from "@/components/LanguageProvider";

const CONSULT_IMG = "/images/per1.webp";

export function PvcConsult() {
  const t = useT();
  const [phone, setPhone] = useState("");
  const [agreed, setAgreed] = useState(false);

  return (
    <Section ariaLabelledby="pvc-consult-title" className="bg-white">
      <Container>
        <div className="mx-auto max-w-[1200px]">
          <h2
            id="pvc-consult-title"
            className="text-center text-[28px] font-extrabold uppercase leading-[1.2] tracking-tight text-[#082b4b] [font-family:Roboto,Arial,sans-serif] sm:text-[36px] lg:text-[42px]"
          >
            {t.pvcRamen.consult.title}
          </h2>
          <p className="mx-auto mt-[18px] max-w-[640px] text-center text-[16px] font-bold leading-[1.4] text-[#000] [font-family:Roboto,Arial,sans-serif] sm:text-[18px] lg:text-[20px]">
            {t.pvcRamen.consult.subtitle}
          </p>

          <div className="mt-[40px] grid items-center gap-[40px] lg:mt-[60px] lg:grid-cols-[1fr_1fr] lg:gap-[60px]">
            {/* Left — form */}
            <form
              className="mx-auto w-full max-w-[520px] [font-family:Roboto,Arial,sans-serif]"
              onSubmit={(e) => e.preventDefault()}
              aria-label={t.pvcRamen.consult.title}
            >
              <p className="text-[13px] text-[#7d7d7d]">
                {t.pvcRamen.consult.phoneHint}
              </p>

              <label
                htmlFor="pvc-consult-phone"
                className="mt-[8px] flex h-[60px] items-stretch border-b border-[#b3b3b3]"
              >
                <span className="sr-only">+31</span>
                <span className="flex items-center gap-[10px] pr-[14px] text-[16px] font-medium text-[#050505]">
                  <span
                    aria-hidden
                    className="inline-block h-[14px] w-[20px] rounded-[2px] bg-[linear-gradient(to_bottom,#AE1C28_33%,#fff_33%_66%,#21468B_66%)]"
                  />
                  +31
                </span>
                <input
                  id="pvc-consult-phone"
                  type="tel"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  value={phone}
                  onChange={(e) =>
                    setPhone(e.target.value.replace(/\D/g, ""))
                  }
                  placeholder={t.pvcRamen.consult.phonePlaceholder}
                  className="h-full flex-1 bg-transparent text-[16px] text-[#050505] outline-none placeholder:text-[#9a9a9a]"
                />
              </label>

              <label className="mt-[18px] flex items-start gap-[10px] text-[13px] leading-[1.4] text-[#3e3e3e]">
                <input
                  type="checkbox"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  required
                  className="mt-[3px] h-[16px] w-[16px] flex-none accent-[#226CD5]"
                />
                <span>
                  {t.pvcRamen.consult.privacyBefore}
                  <a href="#privacy" className="font-medium text-[#226CD5] underline">
                    {t.pvcRamen.consult.privacyLink}
                  </a>
                </span>
              </label>

              <button
                type="submit"
                disabled={!phone.trim() || !agreed}
                className="mt-[22px] inline-flex h-[56px] items-center justify-center rounded-[10px] bg-[#2D51A3] px-[36px] text-[14px] font-bold uppercase tracking-[0.04em] text-white shadow-[0_4px_12px_rgba(0,0,0,0.15)] disabled:opacity-50 disabled:shadow-none"
              >
                {t.pvcRamen.consult.cta}
              </button>
            </form>

            {/* Right — adviser photo */}
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
