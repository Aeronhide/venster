"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { useT } from "@/components/LanguageProvider";

const ACCESSORY_IMAGES = [
  "/images/rama/rama1.webp",
  "/images/rama/rama2.jpg",
  "/images/rama/rama3.webp",
];

export function PvcAccessories() {
  const t = useT();
  return (
    <Section ariaLabelledby="pvc-accessories-title" className="bg-white">
      <Container>
        <div className="mx-auto max-w-[1100px]">
          <h2
            id="pvc-accessories-title"
            className="text-center text-[22px] font-extrabold uppercase leading-[1.2] tracking-tight text-[#082b4b] [font-family:Roboto,Arial,sans-serif] sm:text-[30px] lg:text-[42px]"
          >
            {t.pvcRamen.accessories.title}
          </h2>

          <ul className="mt-[24px] grid grid-cols-1 gap-x-[16px] gap-y-[24px] sm:mt-[40px] sm:grid-cols-3 sm:gap-x-[40px] sm:gap-y-[28px] lg:mt-[48px] lg:gap-x-[60px]">
            {t.pvcRamen.accessories.items.map((a, i) => (
              <li key={a.name} className="flex flex-col items-center text-center">
                <div className="relative aspect-square w-full max-w-[320px] overflow-hidden rounded-[6px] bg-[#f5f5f5] sm:max-w-none">
                  <Image
                    src={ACCESSORY_IMAGES[i]}
                    alt={a.name}
                    fill
                    sizes="(min-width: 1024px) 320px, (min-width: 640px) 30vw, 90vw"
                    loading="lazy"
                    className="object-cover"
                  />
                </div>
                <p className="mt-[12px] text-[14px] font-bold text-[#000000] [font-family:Roboto,Arial,sans-serif] sm:mt-[16px] sm:text-[15px] lg:text-[18px]">
                  {a.name}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
}
