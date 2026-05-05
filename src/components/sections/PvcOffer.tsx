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
            className="text-balance text-center text-[18px] font-extrabold uppercase leading-[1.25] tracking-tight text-white sm:text-[26px] lg:text-[40px]"
          >
            {t.pvcRamen.offer.title}
          </h2>
          <p className="mx-auto mt-[14px] max-w-[640px] text-center text-[14px] leading-[1.5] text-white/90 sm:mt-[18px] sm:text-[15px] lg:text-[17px]">
            {t.pvcRamen.offer.subtitle}
          </p>

          <form
            onSubmit={(e) => e.preventDefault()}
            aria-label={t.pvcRamen.offer.title}
            className="mx-auto mt-[24px] w-full max-w-[640px] sm:mt-[32px] lg:mt-[40px]"
          >
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
                  inputMode="numeric"
                  pattern="[0-9]*"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))}
                  placeholder={t.pvcRamen.offer.phonePlaceholder}
                  className="h-full min-w-0 flex-1 bg-transparent pr-[16px] text-[16px] text-[#050505] outline-none placeholder:text-[#9a9a9a]"
                />
              </label>

              <button
                type="submit"
                disabled={!phone.trim()}
                className="inline-flex h-[56px] w-full cursor-pointer items-center justify-center rounded-[10px] bg-[#B83430] px-[32px] text-[14px] font-bold uppercase tracking-[0.06em] text-white hover:bg-[#a02b27] disabled:cursor-not-allowed disabled:opacity-60 sm:h-[60px] sm:w-auto sm:px-[40px] sm:text-[15px] lg:h-[64px]"
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
