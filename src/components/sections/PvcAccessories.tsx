"use client";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { useT } from "@/components/LanguageProvider";

export function PvcAccessories() {
  const t = useT();
  return (
    <Section ariaLabelledby="pvc-accessories-title" className="bg-white">
      <Container>
        <div className="mx-auto max-w-[1672px]">
          <h2
            id="pvc-accessories-title"
            className="text-center text-[28px] font-black uppercase leading-[1.2] tracking-tight text-[#082b4b] [font-family:Roboto,Arial,sans-serif] sm:text-[40px] lg:text-[63px]"
          >
            {t.pvcRamen.accessories.title}
          </h2>

          <ul className="mt-[40px] grid gap-[24px] sm:grid-cols-3 lg:mt-[60px] lg:gap-[32px]">
            {t.pvcRamen.accessories.items.map((a) => (
              <li
                key={a.name}
                className="rounded-[16px] bg-[#f5f5f5] p-[24px] sm:p-[32px] lg:p-[40px]"
              >
                <h3 className="text-[22px] font-bold leading-[1.3] text-[#082b4b] [font-family:Roboto,Arial,sans-serif] sm:text-[26px] lg:text-[30px]">
                  {a.name}
                </h3>
                <p className="mt-[12px] text-[15px] leading-[1.55] text-[#3e3e3e] [font-family:Roboto,Arial,sans-serif] sm:text-[16px] lg:text-[18px]">
                  {a.body}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
}
