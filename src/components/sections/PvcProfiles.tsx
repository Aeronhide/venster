"use client";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { useT } from "@/components/LanguageProvider";

export function PvcProfiles() {
  const t = useT();
  return (
    <Section ariaLabelledby="pvc-profiles-title" className="bg-[#f9f9f9]">
      <Container>
        <div className="mx-auto max-w-[1672px]">
          <h2
            id="pvc-profiles-title"
            className="text-center text-[28px] font-black uppercase leading-[1.2] tracking-tight text-[#082b4b] [font-family:Roboto,Arial,sans-serif] sm:text-[40px] lg:text-[63px]"
          >
            {t.pvcRamen.profiles.title}
          </h2>

          <ul className="mt-[40px] grid gap-[24px] sm:grid-cols-2 lg:mt-[60px] lg:grid-cols-3">
            {t.pvcRamen.profiles.items.map((p) => (
              <li
                key={p.name}
                className="flex flex-col rounded-[16px] bg-white p-[20px] shadow-[3px_0_20px_rgba(80,80,80,0.1)] sm:p-[28px] lg:p-[36px]"
              >
                <span className="inline-flex h-[24px] w-fit items-center justify-center rounded-[7px] bg-[#006bd5] px-[12px] text-[14px] font-semibold uppercase text-white sm:h-[27px] sm:text-[15px]">
                  {p.spec}
                </span>
                <h3 className="mt-[16px] text-[24px] font-bold leading-[1.3] text-[#082b4b] [font-family:Roboto,Arial,sans-serif] sm:text-[28px] lg:text-[35px]">
                  {p.name}
                </h3>
                <p className="mt-[12px] flex-1 text-[16px] leading-[1.55] text-[#3e3e3e] [font-family:Roboto,Arial,sans-serif] lg:text-[20px]">
                  {p.body}
                </p>
                <a
                  href="#contact"
                  className="mt-[20px] inline-flex h-[64px] w-full items-center justify-center rounded-[16px] bg-[#226CD5] text-[16px] font-bold capitalize text-white [font-family:Roboto,Arial,sans-serif] sm:h-[72px] sm:text-[18px] lg:h-[80px] lg:text-[22px]"
                >
                  {t.pvcRamen.profiles.cta}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
}
