"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { useT } from "@/components/LanguageProvider";

export function PvcOffer() {
  const t = useT();
  const [phone, setPhone] = useState("");

  return (
    <Section ariaLabelledby="pvc-offer-title" className="bg-[#2D51A3]">
      <Container>
        <div className="mx-auto max-w-[1100px] [font-family:Roboto,Arial,sans-serif]">
          <h2
            id="pvc-offer-title"
            className="text-center text-[24px] font-extrabold uppercase leading-[1.2] tracking-tight text-white sm:text-[32px] lg:text-[40px]"
          >
            {t.pvcRamen.offer.title}
          </h2>
          <p className="mx-auto mt-[18px] max-w-[640px] text-center text-[15px] leading-[1.5] text-white/90 sm:text-[16px] lg:text-[17px]">
            {t.pvcRamen.offer.subtitle}
          </p>

          <form
            onSubmit={(e) => e.preventDefault()}
            aria-label={t.pvcRamen.offer.title}
            className="mx-auto mt-[32px] w-full max-w-[640px] lg:mt-[40px]"
          >
            <p className="text-[13px] text-white/85">
              {t.pvcRamen.offer.phoneHint}
            </p>

            <div className="mt-[10px] flex flex-col gap-[12px] sm:flex-row sm:items-stretch sm:gap-[12px]">
              <label
                htmlFor="pvc-offer-phone"
                className="flex h-[56px] flex-1 items-stretch overflow-hidden rounded-[10px] bg-white"
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
                  inputMode="numeric"
                  pattern="[0-9]*"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))}
                  placeholder={t.pvcRamen.offer.phonePlaceholder}
                  className="h-full flex-1 bg-transparent pr-[16px] text-[16px] text-[#050505] outline-none placeholder:text-[#9a9a9a]"
                />
              </label>

              <button
                type="submit"
                disabled={!phone.trim()}
                className="inline-flex h-[56px] items-center justify-center rounded-[10px] bg-[#B83430] px-[36px] text-[14px] font-bold uppercase tracking-[0.06em] text-white hover:bg-[#a02b27] disabled:opacity-60"
              >
                {t.pvcRamen.offer.cta}
              </button>
            </div>
          </form>
        </div>
      </Container>
    </Section>
  );
}
