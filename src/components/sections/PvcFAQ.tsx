"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { useT } from "@/components/LanguageProvider";

export function PvcFAQ() {
  const t = useT();
  const [open, setOpen] = useState<number | null>(0);
  return (
    <Section ariaLabelledby="pvc-faq-title" className="bg-white">
      <Container>
        <div className="mx-auto max-w-[1240px]">
          <h2
            id="pvc-faq-title"
            className="text-center text-[28px] font-black uppercase leading-[1.2] tracking-tight text-[#082b4b] [font-family:Roboto,Arial,sans-serif] sm:text-[40px] lg:text-[52px]"
          >
            {t.pvcRamen.faq.title}
          </h2>

          <ul className="mt-[40px] divide-y divide-[#e5e7eb] rounded-[16px] bg-[#f9f9f9] ring-1 ring-[#e5e7eb] lg:mt-[60px]">
            {t.pvcRamen.faq.items.map((it, i) => {
              const isOpen = open === i;
              return (
                <li key={it.q}>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-[20px] py-[18px] text-left sm:px-[28px] sm:py-[22px] lg:px-[32px] lg:py-[28px]"
                  >
                    <span className="flex-1 text-[16px] font-bold leading-[1.4] text-[#082b4b] [font-family:Roboto,Arial,sans-serif] sm:text-[18px] lg:text-[22px]">
                      {it.q}
                    </span>
                    <span
                      aria-hidden
                      className={`grid size-[36px] shrink-0 place-items-center rounded-full bg-[#226CD5] text-white transition-transform sm:size-[40px] ${
                        isOpen ? "rotate-45" : "rotate-0"
                      }`}
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                      >
                        <path d="M12 5v14M5 12h14" />
                      </svg>
                    </span>
                  </button>
                  {isOpen && (
                    <p className="px-[20px] pb-[18px] text-[15px] leading-[1.6] text-[#3e3e3e] [font-family:Roboto,Arial,sans-serif] sm:px-[28px] sm:pb-[22px] sm:text-[16px] lg:px-[32px] lg:pb-[28px] lg:text-[18px]">
                      {it.a}
                    </p>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </Container>
    </Section>
  );
}
