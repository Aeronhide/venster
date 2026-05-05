"use client";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { useT } from "@/components/LanguageProvider";

export function PvcShowroom() {
  const t = useT();
  return (
    <Section ariaLabelledby="pvc-showroom-title" className="bg-white">
      <Container>
        <div className="mx-auto max-w-[1670px] overflow-hidden rounded-[16px] bg-[radial-gradient(ellipse_at_right,#7ba6e6_0%,#3b7ddd_45%,#3b7ddd_100%)] p-[28px] text-white sm:p-[48px] lg:p-[80px]">
          <div className="grid gap-[24px] lg:grid-cols-[1fr_auto] lg:items-center lg:gap-[40px]">
            <div className="max-w-[900px]">
              <h2
                id="pvc-showroom-title"
                className="text-[28px] font-bold uppercase leading-[1.2] [font-family:Roboto,Arial,sans-serif] sm:text-[40px] lg:text-[52px]"
              >
                {t.pvcRamen.showroom.title}
              </h2>
              <p className="mt-[20px] text-[16px] leading-[1.5] text-white/95 [font-family:Roboto,Arial,sans-serif] sm:text-[18px] lg:text-[22px]">
                {t.pvcRamen.showroom.body}
              </p>
            </div>
            <a
              href="https://www.google.com/maps/place/VALENT.MD/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-[64px] w-full max-w-[400px] items-center justify-center rounded-[16px] bg-white text-[18px] font-bold capitalize text-[#082b4b] [font-family:Roboto,Arial,sans-serif] sm:h-[72px] sm:text-[22px] lg:h-[86px] lg:text-[24px]"
            >
              {t.pvcRamen.showroom.cta}
            </a>
          </div>
        </div>
      </Container>
    </Section>
  );
}
