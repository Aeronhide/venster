"use client";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { CheckIcon } from "@/components/ui/Icon";
import { useT } from "@/components/LanguageProvider";

export function PvcAdvantages() {
  const t = useT();
  return (
    <Section
      ariaLabelledby="pvc-advantages-title"
      className="bg-[#F5F5F5]"
    >
      <Container>
        <div className="mx-auto max-w-[1672px]">
          <h2
            id="pvc-advantages-title"
            className="text-center text-[28px] font-black uppercase leading-[1.2] tracking-tight text-[#082b4b] [font-family:Roboto,Arial,sans-serif] sm:text-[40px] lg:text-[63px]"
          >
            {t.pvcRamen.advantages.title}
          </h2>

          <ul className="mt-[40px] grid gap-[20px] sm:grid-cols-2 lg:mt-[60px] lg:grid-cols-4 lg:gap-[24px]">
            {t.pvcRamen.advantages.items.map((it) => (
              <li
                key={it.name}
                className="flex flex-col rounded-[16px] bg-white p-[24px] ring-1 ring-[#e5e7eb] sm:p-[28px] lg:p-[32px]"
              >
                <span className="grid size-[52px] place-items-center rounded-[10px] bg-[radial-gradient(circle_at_center,#3b7ddd_0%,#7ba6e6_100%)] sm:size-[60px]">
                  <CheckIcon className="text-white" width={28} height={28} />
                </span>
                <h3 className="mt-[20px] text-[20px] font-bold leading-[1.3] text-[#082b4b] [font-family:Roboto,Arial,sans-serif] sm:text-[22px] lg:text-[26px]">
                  {it.name}
                </h3>
                <p className="mt-[12px] text-[15px] leading-[1.55] text-[#505050] [font-family:Roboto,Arial,sans-serif] sm:text-[16px] lg:text-[18px]">
                  {it.body}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
}
