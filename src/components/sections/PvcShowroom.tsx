"use client";

import Image from "next/image";
import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { useT } from "@/components/LanguageProvider";

const SHOWROOM_IMAGES = [
  "/images/shouroom/s1.webp",
  "/images/shouroom/s2.webp",
  "/images/shouroom/s3.webp",
  "/images/shouroom/s4.webp",
  "/images/shouroom/s5.jpg",
  "/images/shouroom/s6.jpg",
  "/images/shouroom/s7.jpg",
  "/images/shouroom/s8.webp",
  "/images/shouroom/s9.webp",
  "/images/shouroom/s10.webp",
  "/images/shouroom/s11.webp",
  "/images/shouroom/s12.webp",
  "/images/shouroom/s13.webp",
  "/images/shouroom/s14.webp",
  "/images/shouroom/s15.webp",
];

export function PvcShowroom() {
  const t = useT();
  const [active, setActive] = useState(0);

  const prev = () =>
    setActive((i) => (i - 1 + SHOWROOM_IMAGES.length) % SHOWROOM_IMAGES.length);
  const next = () => setActive((i) => (i + 1) % SHOWROOM_IMAGES.length);

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
    <Section ariaLabelledby="pvc-showroom-title" className="bg-white">
      <Container>
        <div className="mx-auto max-w-[1200px]">
          <h2
            id="pvc-showroom-title"
            className="text-center text-[28px] font-black uppercase leading-[1.2] tracking-tight text-[#082b4b] [font-family:Roboto,Arial,sans-serif] sm:text-[36px] lg:text-[48px]"
          >
            {t.pvcRamen.showroom.title}
          </h2>
          <p className="mx-auto mt-[20px] max-w-[900px] text-center text-[16px] leading-[1.5] text-[#3e3e3e] [font-family:Roboto,Arial,sans-serif] sm:text-[18px] lg:text-[22px]">
            {t.pvcRamen.showroom.body}
          </p>

          {/* Slider row — desktop arrows flank the image; mobile arrows go below */}
          <div className="mt-[32px] flex items-center lg:mx-auto lg:mt-[40px] lg:max-w-[960px] lg:gap-[16px]">
            {/* Desktop prev */}
            <button
              type="button"
              aria-label="Vorig beeld"
              onClick={prev}
              className="hidden h-[40px] w-[40px] shrink-0 place-items-center rounded-full bg-[#E8E8E8] text-[#222222] hover:bg-[#dcdcdc] lg:grid"
            >
              {PrevIcon}
            </button>

            {/* Slider image */}
            <div className="relative aspect-[860/550] w-full overflow-hidden rounded-[20px] bg-[#f5f5f5] lg:rounded-[16px]">
              {SHOWROOM_IMAGES.map((src, i) => (
                <Image
                  key={src}
                  src={src}
                  alt={`Showroom Valent — beeld ${i + 1}`}
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

            {/* Desktop next */}
            <button
              type="button"
              aria-label="Volgend beeld"
              onClick={next}
              className="hidden h-[40px] w-[40px] shrink-0 place-items-center rounded-full bg-[#E8E8E8] text-[#222222] hover:bg-[#dcdcdc] lg:grid"
            >
              {NextIcon}
            </button>
          </div>

          {/* Mobile control row — prev + dots + next BELOW the slider */}
          <div className="mt-[20px] flex items-center justify-center gap-[12px] lg:hidden">
            <button
              type="button"
              aria-label="Vorig beeld"
              onClick={prev}
              className="grid h-[40px] w-[40px] shrink-0 place-items-center rounded-full bg-[#E8E8E8] text-[#222222]"
            >
              {PrevIcon}
            </button>
            <div className="flex items-center gap-[8px]">
              {SHOWROOM_IMAGES.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Ga naar beeld ${i + 1}`}
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
            <button
              type="button"
              aria-label="Volgend beeld"
              onClick={next}
              className="grid h-[40px] w-[40px] shrink-0 place-items-center rounded-full bg-[#E8E8E8] text-[#222222]"
            >
              {NextIcon}
            </button>
          </div>

          {/* Desktop dots row */}
          <div className="mx-auto mt-[20px] hidden max-w-[960px] justify-center gap-[8px] lg:flex">
            {SHOWROOM_IMAGES.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Ga naar beeld ${i + 1}`}
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
