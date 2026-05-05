"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { useT } from "@/components/LanguageProvider";

const GLASS_IMAGES = [
  "/images/sorten/sr1.webp",
  "/images/sorten/sr2.jpg",
  "/images/sorten/sr3.webp",
  "/images/sorten/sr4.jpg",
];

export function PvcGlassTypes() {
  const t = useT();
  return (
    <Section ariaLabelledby="pvc-glass-title" className="bg-white">
      <Container>
        <div className="mx-auto max-w-[1240px]">
          <h2
            id="pvc-glass-title"
            className="text-center text-[22px] font-black uppercase leading-[1.2] tracking-tight text-[#082b4b] [font-family:Roboto,Arial,sans-serif] sm:text-[30px] lg:text-[42px]"
          >
            {t.pvcRamen.glass.title}
          </h2>

          <ul className="mt-[24px] grid grid-cols-2 gap-x-[12px] gap-y-[20px] sm:mt-[32px] sm:grid-cols-4 sm:gap-x-[28px] sm:gap-y-[28px] lg:mt-[48px] lg:gap-x-[40px]">
            {t.pvcRamen.glass.items.map((g, i) => (
              <li key={g.name} className="flex flex-col">
                <div className="relative aspect-square w-full overflow-hidden rounded-[6px] bg-[#f5f5f5]">
                  <Image
                    src={GLASS_IMAGES[i]}
                    alt={g.name}
                    fill
                    sizes="(min-width: 1024px) 280px, (min-width: 640px) 22vw, 45vw"
                    loading="lazy"
                    className="object-cover"
                  />
                </div>
                <p className="mt-[10px] text-[13px] font-bold leading-[1.3] text-[#3e3e3e] [font-family:Roboto,Arial,sans-serif] sm:mt-[14px] sm:text-[14px] lg:text-[16px]">
                  {g.name}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
}
