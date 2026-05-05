"use client";

import Image from "next/image";
import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { useT } from "@/components/LanguageProvider";

type FaqItem = {
  q: string;
  a: string;
  image?: string;
  link?: string;
  afterLink?: string;
};

export function PvcFAQ() {
  const t = useT();
  const items = t.pvcRamen.faq.items as readonly FaqItem[];
  const [open, setOpen] = useState<number | null>(null);
  return (
    <Section ariaLabelledby="pvc-faq-title" className="bg-[#F5F5F5]">
      <Container>
        <div className="mx-auto max-w-[1200px]">
          <h2
            id="pvc-faq-title"
            className="text-center text-[28px] font-extrabold uppercase leading-[1.2] tracking-tight text-[#082b4b] [font-family:Roboto,Arial,sans-serif] sm:text-[36px] lg:text-[42px]"
          >
            {t.pvcRamen.faq.title}
          </h2>

          <ul className="mx-auto mt-[40px] flex max-w-[1100px] flex-col gap-[12px] lg:mt-[48px]">
            {items.map((it, i) => {
              const isOpen = open === i;
              return (
                <li
                  key={it.q}
                  className="overflow-hidden rounded-[16px] bg-white shadow-[0_2px_8px_rgba(0,0,0,0.04)]"
                >
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-[20px] py-[18px] text-left sm:px-[28px] sm:py-[22px] lg:px-[32px] lg:py-[24px]"
                  >
                    <span className="flex-1 text-[16px] font-semibold leading-[1.4] text-[#505050] [font-family:Roboto,Arial,sans-serif] sm:text-[18px] lg:text-[20px]">
                      {it.q}
                    </span>
                    <span
                      aria-hidden
                      className={`grid size-[40px] shrink-0 place-items-center rounded-full bg-[#F0F0F0] text-[#7d7d7d] transition-transform ${
                        isOpen ? "rotate-45" : "rotate-0"
                      }`}
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      >
                        <path d="M12 5v14M5 12h14" />
                      </svg>
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-[20px] pb-[20px] sm:px-[28px] sm:pb-[24px] lg:px-[32px] lg:pb-[28px]">
                      {it.image && (
                        <div className="mb-[16px] overflow-hidden rounded-[8px]">
                          <Image
                            src={it.image}
                            alt={it.q}
                            width={1100}
                            height={500}
                            sizes="(min-width: 1024px) 1100px, 100vw"
                            loading="lazy"
                            className="h-auto w-full object-contain"
                          />
                        </div>
                      )}
                      <p className="whitespace-pre-line text-[15px] leading-[1.6] text-[#3e3e3e] [font-family:Roboto,Arial,sans-serif] sm:text-[16px] lg:text-[17px]">
                        {it.a}
                      </p>
                      {it.link && (
                        <p className="mt-[8px] break-all text-[13px] leading-[1.5] text-[#3e3e3e] [font-family:Roboto,Arial,sans-serif] sm:text-[14px]">
                          <a
                            href={it.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#1c5fb0] underline"
                          >
                            {it.link}
                          </a>
                        </p>
                      )}
                      {it.afterLink && (
                        <p className="mt-[8px] text-[15px] leading-[1.6] text-[#3e3e3e] [font-family:Roboto,Arial,sans-serif] sm:text-[16px] lg:text-[17px]">
                          {it.afterLink}
                        </p>
                      )}
                    </div>
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
