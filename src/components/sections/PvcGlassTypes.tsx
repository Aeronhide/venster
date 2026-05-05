"use client";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { useT } from "@/components/LanguageProvider";

export function PvcGlassTypes() {
  const t = useT();
  return (
    <Section ariaLabelledby="pvc-glass-title" className="bg-[#f9f9f9]">
      <Container>
        <div className="mx-auto max-w-[1672px]">
          <h2
            id="pvc-glass-title"
            className="text-center text-[28px] font-black uppercase leading-[1.2] tracking-tight text-[#082b4b] [font-family:Roboto,Arial,sans-serif] sm:text-[40px] lg:text-[63px]"
          >
            {t.pvcRamen.glass.title}
          </h2>

          <ul className="mt-[40px] grid gap-[20px] sm:grid-cols-2 lg:mt-[60px] lg:grid-cols-4">
            {t.pvcRamen.glass.items.map((g, i) => (
              <li
                key={g.name}
                className="relative flex flex-col rounded-[16px] bg-white p-[24px] shadow-[3px_0_20px_rgba(80,80,80,0.08)] lg:p-[28px]"
              >
                <span className="grid h-[44px] w-[44px] place-items-center rounded-[10px] bg-[radial-gradient(circle_at_center,#3b7ddd_0%,#7ba6e6_100%)] text-[18px] font-bold text-white sm:h-[52px] sm:w-[52px] sm:text-[20px]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-[16px] text-[20px] font-bold leading-[1.3] text-[#082b4b] [font-family:Roboto,Arial,sans-serif] sm:text-[22px] lg:text-[24px]">
                  {g.name}
                </h3>
                <p className="mt-[12px] text-[15px] leading-[1.55] text-[#3e3e3e] [font-family:Roboto,Arial,sans-serif] sm:text-[16px] lg:text-[18px]">
                  {g.body}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
}
