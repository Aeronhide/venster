"use client";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { CheckIcon } from "@/components/ui/Icon";
import { useT } from "@/components/LanguageProvider";

export function PvcAdvantages() {
  const t = useT();
  return (
    <Section ariaLabelledby="pvc-advantages-title" className="bg-white">
      <Container>
        <div className="mx-auto max-w-[1100px]">
          <h2
            id="pvc-advantages-title"
            className="text-center text-[28px] font-extrabold uppercase leading-[1.2] tracking-tight text-[#082b4b] [font-family:Roboto,Arial,sans-serif] sm:text-[36px] lg:text-[42px]"
          >
            {t.pvcRamen.advantages.title}
          </h2>

          <div className="mx-auto mt-[28px] flex max-w-[1000px] flex-col gap-[18px] lg:mt-[36px] lg:gap-[20px]">
            {t.pvcRamen.advantages.intro.map((p, i) => (
              <p
                key={i}
                className="text-[15px] leading-[1.6] text-[#3e3e3e] [font-family:Roboto,Arial,sans-serif] sm:text-[16px] lg:text-[17px]"
              >
                {p}
              </p>
            ))}
          </div>

          <ul className="mx-auto mt-[36px] grid max-w-[1000px] gap-x-[40px] gap-y-[28px] sm:grid-cols-2 lg:mt-[48px] lg:gap-x-[60px] lg:gap-y-[36px]">
            {t.pvcRamen.advantages.items.map((it) => (
              <li key={it.name} className="flex gap-[16px]">
                <span className="grid size-[28px] shrink-0 place-items-center rounded-full bg-[#226CD5] sm:size-[32px]">
                  <CheckIcon className="text-white" width={16} height={16} />
                </span>
                <div className="flex-1">
                  <h3 className="text-[17px] font-bold leading-[1.3] text-[#082b4b] [font-family:Roboto,Arial,sans-serif] sm:text-[18px] lg:text-[20px]">
                    {it.name}
                  </h3>
                  <p className="mt-[8px] text-[14px] leading-[1.55] text-[#505050] [font-family:Roboto,Arial,sans-serif] sm:text-[15px] lg:text-[16px]">
                    {it.body}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
}
