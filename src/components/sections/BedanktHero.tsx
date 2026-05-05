"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { useT } from "@/components/LanguageProvider";

const CATALOG_IMG = "/images/catalog.webp";

export function BedanktHero() {
  const t = useT();
  return (
    <Section
      ariaLabelledby="bedankt-title"
      className="bg-white !py-20 sm:!py-28 lg:!py-40"
    >
      <Container>
        <div className="mx-auto grid max-w-[1240px] items-center gap-[40px] lg:grid-cols-[1fr_1fr] lg:gap-[60px]">
          {/* Catalog image — left */}
          <div className="relative grid aspect-[768/512] w-full place-items-center">
            <div className="relative aspect-[768/512] w-full max-w-[640px] -rotate-[6deg]">
              <Image
                src={CATALOG_IMG}
                alt={t.bedankt.catalogAlt}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                priority
                className="object-contain drop-shadow-[0_30px_50px_rgba(0,0,0,0.18)]"
              />
            </div>
          </div>

          {/* Right column */}
          <div className="text-center lg:text-left">
            <h1
              id="bedankt-title"
              className="text-[36px] font-black uppercase leading-[1.1] tracking-tight text-[#082b4b] [font-family:Roboto,Arial,sans-serif] sm:text-[48px] lg:text-[56px]"
            >
              {t.bedankt.title}
            </h1>

            <p className="mx-auto mt-[24px] max-w-[520px] text-[16px] leading-[1.6] text-[#3e3e3e] [font-family:Roboto,Arial,sans-serif] sm:text-[18px] lg:mx-0">
              {t.bedankt.bodyBefore}
              <strong className="font-bold">{t.bedankt.bodyHighlight}</strong>
              {t.bedankt.bodyAfter}
            </p>

            <a
              href="#catalog"
              className="mt-[28px] inline-flex h-[56px] items-center justify-center rounded-[12px] bg-[#226CD5] px-[40px] text-[16px] font-bold uppercase tracking-[0.04em] text-white [font-family:Roboto,Arial,sans-serif] sm:h-[64px] sm:text-[18px]"
            >
              {t.bedankt.cta}
            </a>
          </div>
        </div>
      </Container>
    </Section>
  );
}
