"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { useT } from "@/components/LanguageProvider";

const ROTO_IMG = "/images/roto.webp";

export function PvcRoto() {
  const t = useT();
  return (
    <Section ariaLabelledby="pvc-roto-title" className="bg-[#F0F0F0]">
      <Container>
        <div className="mx-auto max-w-[1200px]">
          <h2
            id="pvc-roto-title"
            className="text-center text-[22px] font-extrabold uppercase leading-[1.2] tracking-tight text-[#082b4b] [font-family:Roboto,Arial,sans-serif] sm:text-[30px] lg:text-[42px]"
          >
            {t.pvcRamen.roto.tag}
          </h2>

          <div className="mt-[24px] grid items-start gap-[28px] sm:mt-[40px] sm:gap-[40px] lg:mt-[60px] lg:grid-cols-[1fr_1fr] lg:gap-[60px]">
            {/* Left — body text + bullets */}
            <div className="flex flex-col gap-[20px] text-[#000000] [font-family:Arial,sans-serif] sm:gap-[24px]">
              <p className="text-[14px] font-bold leading-[1.55] sm:text-[16px] lg:text-[18px]">
                {t.pvcRamen.roto.body}
              </p>

              <div>
                <p className="text-[14px] font-bold leading-[1.55] sm:text-[16px] lg:text-[18px]">
                  {t.pvcRamen.roto.bulletsTitle}
                </p>
                <ul className="mt-[8px] list-disc space-y-[6px] pl-[20px] text-[14px] font-bold leading-[1.55] sm:mt-[10px] sm:pl-[24px] sm:text-[16px] lg:text-[18px]">
                  {t.pvcRamen.roto.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right — ROTO photo */}
            <div className="relative mx-auto aspect-[375/450] w-full max-w-[280px] overflow-hidden rounded-[8px] sm:max-w-[375px]">
              <Image
                src={ROTO_IMG}
                alt={t.pvcRamen.roto.title}
                fill
                sizes="(min-width: 1024px) 375px, (min-width: 640px) 375px, 80vw"
                loading="lazy"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
