"use client";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { CheckIcon } from "@/components/ui/Icon";
import { useT } from "@/components/LanguageProvider";

export function PvcRoto() {
  const t = useT();
  return (
    <Section ariaLabelledby="pvc-roto-title" className="bg-white">
      <Container>
        <article className="mx-auto max-w-[1672px] overflow-hidden rounded-[16px] bg-[#36383c] px-5 py-8 text-white sm:px-8 sm:py-12 lg:px-[60px] lg:py-[60px]">
          <div className="grid gap-[24px] lg:grid-cols-[1fr_1fr] lg:gap-[60px]">
            <div>
              <span className="inline-flex h-[28px] items-center justify-center rounded-[7px] bg-[#006bd5] px-[14px] text-[14px] font-semibold uppercase text-white sm:text-[16px] lg:text-[18px]">
                {t.pvcRamen.roto.tag}
              </span>
              <h2
                id="pvc-roto-title"
                className="mt-[20px] text-[26px] font-extrabold leading-[1.3] [font-family:Roboto,Arial,sans-serif] sm:text-[34px] lg:text-[44px]"
              >
                {t.pvcRamen.roto.title}
              </h2>
              <p className="mt-[20px] text-[16px] leading-[1.5] text-white/85 [font-family:Roboto,Arial,sans-serif] sm:text-[18px] lg:text-[20px]">
                {t.pvcRamen.roto.body}
              </p>
            </div>

            <div className="rounded-[12px] border border-white/10 bg-white/5 p-[20px] sm:p-[28px] lg:p-[32px]">
              <p className="text-[16px] font-bold uppercase tracking-[0.04em] text-[#7bb1ff] sm:text-[18px] lg:text-[20px]">
                {t.pvcRamen.roto.bulletsTitle}
              </p>
              <ul className="mt-[16px] space-y-[14px]">
                {t.pvcRamen.roto.bullets.map((b) => (
                  <li key={b} className="flex gap-3">
                    <span className="mt-[2px] grid size-[28px] shrink-0 place-items-center rounded-[6px] bg-[radial-gradient(circle_at_center,#3b7ddd_0%,#7ba6e6_100%)]">
                      <CheckIcon className="text-white" width={18} height={18} />
                    </span>
                    <p className="text-[15px] leading-[1.5] text-white/95 [font-family:Roboto,Arial,sans-serif] sm:text-[16px] lg:text-[18px]">
                      {b}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </article>
      </Container>
    </Section>
  );
}
