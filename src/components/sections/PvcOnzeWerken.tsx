"use client";

import Image from "next/image";
import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { useT } from "@/components/LanguageProvider";

const WERKEN_IMAGES = [
  "/images/onze-werken/w1.webp",
  "/images/onze-werken/w2.webp",
  "/images/onze-werken/w3.webp",
  "/images/onze-werken/w4.webp",
  "/images/onze-werken/w5.webp",
  "/images/onze-werken/w6.webp",
  "/images/onze-werken/w7.webp",
  "/images/onze-werken/w8.webp",
  "/images/onze-werken/w9.webp",
  "/images/onze-werken/w10.webp",
  "/images/onze-werken/w11.jpg",
  "/images/onze-werken/w12.webp",
  "/images/onze-werken/w13.webp",
  "/images/onze-werken/w14.webp",
  "/images/onze-werken/w15.webp",
];

export function PvcOnzeWerken() {
  const t = useT();
  const [active, setActive] = useState(0);

  const prev = () =>
    setActive((i) => (i - 1 + WERKEN_IMAGES.length) % WERKEN_IMAGES.length);
  const next = () =>
    setActive((i) => (i + 1) % WERKEN_IMAGES.length);

  const PrevIcon = (
    <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 18l-6-6 6-6" />
    </svg>
  );
  const NextIcon = (
    <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 6l6 6-6 6" />
    </svg>
  );

  return (
    <Section ariaLabelledby="pvc-onze-werken-title" className="bg-white">
      <Container>
        <div className="mx-auto max-w-[1200px]">
          <h2
            id="pvc-onze-werken-title"
            className="text-center text-[22px] font-extrabold uppercase leading-[1.2] tracking-tight text-[#082b4b] [font-family:Roboto,Arial,sans-serif] sm:text-[30px] md:text-[36px] lg:text-[42px]"
          >
            {t.pvcRamen.onzeWerken.title}
          </h2>

          {/* Slider row — desktop arrows flank the image; mobile shows just the image */}
          <div className="mt-[24px] flex items-center sm:mt-[32px] lg:mx-auto lg:mt-[40px] lg:max-w-[960px] lg:gap-[16px]">
            <button
              type="button"
              aria-label={t.pvcRamen.onzeWerken.prevAria}
              onClick={prev}
              className="hidden h-[40px] w-[40px] shrink-0 place-items-center rounded-full bg-[#E8E8E8] text-[#222222] hover:bg-[#dcdcdc] lg:grid"
            >
              {PrevIcon}
            </button>

            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[20px] bg-[#f5f5f5] sm:aspect-[860/550] lg:rounded-[16px]">
              {WERKEN_IMAGES.map((src, i) => (
                <Image
                  key={src}
                  src={src}
                  alt={`${t.pvcRamen.onzeWerken.altPrefix} ${i + 1}`}
                  fill
                  sizes="(min-width: 1024px) 860px, 100vw"
                  priority={i === 0}
                  loading={i === 0 ? "eager" : "lazy"}
                  className={`object-contain transition-opacity duration-500 ease-in-out ${
                    i === active ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              aria-label={t.pvcRamen.onzeWerken.nextAria}
              onClick={next}
              className="hidden h-[40px] w-[40px] shrink-0 place-items-center rounded-full bg-[#E8E8E8] text-[#222222] hover:bg-[#dcdcdc] lg:grid"
            >
              {NextIcon}
            </button>
          </div>

          {/* Mobile control row */}
          <div className="mt-[16px] flex items-center justify-center gap-[8px] sm:gap-[12px] lg:hidden">
            <button
              type="button"
              aria-label={t.pvcRamen.onzeWerken.prevAria}
              onClick={prev}
              className="grid h-[44px] w-[44px] shrink-0 place-items-center rounded-full bg-[#E8E8E8] text-[#222222]"
            >
              {PrevIcon}
            </button>
            <div className="flex max-w-full flex-wrap items-center justify-center gap-[2px]">
              {WERKEN_IMAGES.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`${t.pvcRamen.onzeWerken.goToAria} ${i + 1}`}
                  aria-current={i === active}
                  onClick={() => setActive(i)}
                  className="grid h-[44px] w-[20px] place-items-center sm:w-[24px]"
                >
                  <span
                    aria-hidden
                    className={`block h-[8px] w-[8px] rounded-full ${
                      i === active ? "bg-[#222222]" : "bg-[#c7c7c7]"
                    }`}
                  />
                </button>
              ))}
            </div>
            <button
              type="button"
              aria-label={t.pvcRamen.onzeWerken.nextAria}
              onClick={next}
              className="grid h-[44px] w-[44px] shrink-0 place-items-center rounded-full bg-[#E8E8E8] text-[#222222]"
            >
              {NextIcon}
            </button>
          </div>

          {/* Desktop dots row */}
          <div className="mx-auto mt-[20px] hidden max-w-[960px] flex-wrap justify-center gap-[6px] lg:flex">
            {WERKEN_IMAGES.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`${t.pvcRamen.onzeWerken.goToAria} ${i + 1}`}
                aria-current={i === active}
                onClick={() => setActive(i)}
                className="grid h-[24px] w-[24px] place-items-center"
              >
                <span
                  aria-hidden
                  className={`block h-[8px] w-[8px] rounded-full ${
                    i === active ? "bg-[#222222]" : "bg-[#c7c7c7]"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
