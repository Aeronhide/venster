"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { useT } from "@/components/LanguageProvider";

const PROFILE_IMAGES = [
  "/images/prof1.png",
  "/images/prof2.png",
  "/images/prof3.png",
];

export function PvcProfiles() {
  const t = useT();
  return (
    <Section ariaLabelledby="pvc-profiles-title" className="bg-white">
      <Container>
        <div className="mx-auto max-w-[1240px]">
          <h2
            id="pvc-profiles-title"
            className="text-center text-[22px] font-black uppercase leading-[1.2] tracking-tight text-[#082b4b] [font-family:Roboto,Arial,sans-serif] sm:text-[30px] lg:text-[48px]"
          >
            {t.pvcRamen.profiles.title}
          </h2>

          <ul className="mt-[24px] grid grid-cols-1 gap-[16px] sm:mt-[32px] sm:grid-cols-2 sm:gap-[20px] lg:mt-[60px] lg:grid-cols-3 lg:gap-[40px]">
            {t.pvcRamen.profiles.items.map((p, i) => (
              <li
                key={p.name}
                className="flex flex-col overflow-hidden rounded-[8px] bg-[#B0C5D9] shadow-[0_4px_16px_rgba(0,0,0,0.08)]"
              >
                {/* Profile image — already contains specs (Uf, model, mm, gaskets) */}
                <div className="relative aspect-[360/350] w-full">
                  <Image
                    src={PROFILE_IMAGES[i]}
                    alt={p.name}
                    fill
                    sizes="(min-width: 1024px) 360px, (min-width: 640px) 45vw, 90vw"
                    loading="lazy"
                    className="object-cover"
                  />
                </div>

                {/* Title + CTA */}
                <div className="flex flex-col items-center px-[20px] pb-[20px] pt-[18px] sm:px-[24px] sm:pb-[24px] sm:pt-[22px] lg:px-[30px] lg:pb-[29px] lg:pt-[27px]">
                  <h3 className="text-center text-[18px] font-semibold leading-[1.35] text-black [font-family:Roboto,Arial,sans-serif] sm:text-[20px] lg:text-[24px]">
                    {p.name}
                  </h3>
                  <a
                    href="#contact"
                    className="mt-[16px] inline-flex h-[48px] items-center justify-center rounded-[10px] bg-[#2D51A3] px-[20px] text-[13px] font-semibold uppercase text-white [font-family:Roboto,Arial,sans-serif] sm:mt-[20px] sm:h-[44px] sm:text-[14px] lg:mt-[24px] lg:h-[40px]"
                  >
                    {t.pvcRamen.profiles.cta}
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
}
