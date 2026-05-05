"use client";

import Image from "next/image";
import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { useT } from "@/components/LanguageProvider";

const REVIEW_IMAGES = [
  "/images/reviews/r1.png",
  "/images/reviews/r2.png",
  "/images/reviews/r3.png",
  "/images/reviews/r4.png",
  "/images/reviews/r5.png",
  "/images/reviews/r6.png",
  "/images/reviews/r7.png",
];

export function PvcReviews() {
  const t = useT();
  const [active, setActive] = useState(0);

  const prev = () =>
    setActive((i) => (i - 1 + REVIEW_IMAGES.length) % REVIEW_IMAGES.length);
  const next = () =>
    setActive((i) => (i + 1) % REVIEW_IMAGES.length);

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
    <Section ariaLabelledby="pvc-reviews-title" className="bg-white">
      <Container>
        <div className="mx-auto max-w-[1200px]">
          <h2
            id="pvc-reviews-title"
            className="text-balance text-center text-[22px] font-extrabold uppercase leading-[1.2] tracking-tight text-[#082b4b] [font-family:Roboto,Arial,sans-serif] sm:text-[30px] lg:text-[42px]"
          >
            {t.pvcRamen.reviews.title}
          </h2>

          {/* Slider row — desktop arrows flank the image; mobile shows just the image */}
          <div className="mt-[24px] flex items-center sm:mt-[32px] lg:mx-auto lg:mt-[40px] lg:max-w-[960px] lg:gap-[16px]">
            <button
              type="button"
              aria-label={t.pvcRamen.reviews.prevAria}
              onClick={prev}
              className="hidden h-[40px] w-[40px] shrink-0 place-items-center rounded-full bg-[#E8E8E8] text-[#222222] hover:bg-[#dcdcdc] lg:grid"
            >
              {PrevIcon}
            </button>

            <div className="relative aspect-[860/400] w-full overflow-hidden rounded-[16px] bg-[#f5f5f5]">
              {REVIEW_IMAGES.map((src, i) => (
                <Image
                  key={src}
                  src={src}
                  alt={`${t.pvcRamen.reviews.altPrefix} ${i + 1}`}
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
              aria-label={t.pvcRamen.reviews.nextAria}
              onClick={next}
              className="hidden h-[40px] w-[40px] shrink-0 place-items-center rounded-full bg-[#E8E8E8] text-[#222222] hover:bg-[#dcdcdc] lg:grid"
            >
              {NextIcon}
            </button>
          </div>

          {/* Mobile control row */}
          <div className="mt-[16px] flex items-center justify-center gap-[10px] sm:mt-[20px] sm:gap-[12px] lg:hidden">
            <button
              type="button"
              aria-label={t.pvcRamen.reviews.prevAria}
              onClick={prev}
              className="grid h-[44px] w-[44px] shrink-0 cursor-pointer place-items-center rounded-full bg-[#E8E8E8] text-[#222222]"
            >
              {PrevIcon}
            </button>
            <div className="flex flex-wrap items-center justify-center gap-[4px] sm:gap-[6px]">
              {REVIEW_IMAGES.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`${t.pvcRamen.reviews.goToAria} ${i + 1}`}
                  aria-current={i === active}
                  onClick={() => setActive(i)}
                  className="grid h-[28px] w-[28px] cursor-pointer place-items-center"
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
              aria-label={t.pvcRamen.reviews.nextAria}
              onClick={next}
              className="grid h-[44px] w-[44px] shrink-0 cursor-pointer place-items-center rounded-full bg-[#E8E8E8] text-[#222222]"
            >
              {NextIcon}
            </button>
          </div>

          {/* Desktop dots row */}
          <div className="mx-auto mt-[20px] hidden max-w-[960px] justify-center gap-[6px] lg:flex">
            {REVIEW_IMAGES.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`${t.pvcRamen.reviews.goToAria} ${i + 1}`}
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
