"use client";

import { useState } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { CheckIcon } from "@/components/ui/Icon";
import { useT } from "@/components/LanguageProvider";

const CERT_IMAGES = [
  "/images/tild6332-6463-4533-b430-656430623637__clasa_a_weng_1510201.webp",
  "/images/tild3966-6363-4464-b534-633266393333__recycled_content_vek.webp",
  "/images/tild3463-6236-4434-a435-626361326264__ro_profile_clasa_a_-.webp",
  "/images/tild3131-3763-4763-a334-323835393264__ro_profile_clasa_a_-.webp",
];

const CERT_FRAME =
  "relative overflow-hidden rounded-t-[12px] [border-top:1px_solid_#5a91e1] [border-left:1px_solid_#5a91e1] [border-right:1px_solid_#5a91e1] [border-bottom:none] bg-[radial-gradient(circle_at_center,rgba(59,125,221,1)_67%,rgba(123,166,230,1)_100%)]";

function CertSlider() {
  const t = useT();
  const [active, setActive] = useState(0);
  const total = CERT_IMAGES.length;

  return (
    <>
      {/* Mobile slider — one cert per view, controls (prev + dots + next) below */}
      <div className="mt-8 pb-8 sm:hidden sm:pb-0">
        {/* Slider — full-width image */}
        <div className={`${CERT_FRAME} h-[320px] w-full`}>
          {CERT_IMAGES.map((src, i) => (
            <Image
              key={src}
              src={src}
              alt={`${t.certification.certAlt} ${i + 1}`}
              fill
              sizes="100vw"
              loading="lazy"
              className={`object-contain object-bottom px-4 transition-opacity duration-500 ease-in-out ${
                i === active ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>

        {/* Controls — prev | dots | next, BELOW the slider */}
        <div className="mt-4 flex items-center justify-center gap-3">
          <button
            type="button"
            aria-label={t.certification.prevAria}
            onClick={() => setActive((i) => (i - 1 + total) % total)}
            className="grid h-[44px] w-[44px] shrink-0 place-items-center rounded-full bg-white text-[#082b4b] shadow"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          <div className="flex items-center gap-1">
            {CERT_IMAGES.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`${t.certification.goToAria} ${i + 1}`}
                aria-current={i === active}
                onClick={() => setActive(i)}
                className="grid h-[24px] w-[24px] place-items-center"
              >
                <span
                  aria-hidden
                  className={`block h-[8px] w-[8px] rounded-full transition-colors ${
                    i === active ? "bg-white" : "bg-white/30"
                  }`}
                />
              </button>
            ))}
          </div>

          <button
            type="button"
            aria-label={t.certification.nextAria}
            onClick={() => setActive((i) => (i + 1) % total)}
            className="grid h-[44px] w-[44px] shrink-0 place-items-center rounded-full bg-white text-[#082b4b] shadow"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 6l6 6-6 6" />
            </svg>
          </button>
        </div>
      </div>

      {/* Desktop / tablet grid — 4 cols, untouched */}
      <ul className="hidden sm:mt-12 sm:grid sm:grid-cols-4 sm:justify-items-center sm:gap-6 lg:mt-16 lg:gap-[58px]">
        {CERT_IMAGES.map((src, i) => (
          <li
            key={src + i}
            className={`${CERT_FRAME} h-[340px] w-full max-w-[320px] lg:h-[415px]`}
          >
            <Image
              src={src}
              alt={`${t.certification.certAlt} ${i + 1}`}
              fill
              sizes="(min-width: 1024px) 320px, 40vw"
              loading="lazy"
              className="object-contain object-bottom px-4"
            />
          </li>
        ))}
      </ul>
    </>
  );
}

export function Certification() {
  const t = useT();
  return (
    <Section
      id="certification"
      ariaLabel={t.certification.ariaLabel}
      className="bg-[#f9f9f9]"
    >
      <Container>
        <div className="mx-auto max-w-[1675px] space-y-[60px] sm:space-y-[100px] lg:space-y-[150px]">
          {/* Block 1 — rec1337102001: CE 10-jaar garantie dark card */}
          <article className="overflow-hidden rounded-[16px] bg-[#36383c] px-5 pt-8 text-white sm:px-8 sm:pt-12 lg:px-[60px] lg:pt-[60px]">
            <div className="grid gap-8 sm:gap-10 lg:grid-cols-[1fr_760px] lg:items-end lg:gap-12">
              {/* Left — heading + inner small "garantie dekt" card */}
              <div className="pb-8 sm:pb-12 lg:pb-[60px]">
                <h2 className="text-[24px] font-extrabold leading-[1.3] sm:text-[36px] sm:leading-[1.4] lg:text-[52px]">
                  {t.certification.block1Before}
                  <span className="text-[#116cd4]">{t.certification.block1Highlight}</span>
                  {t.certification.block1After}
                </h2>

                <div className="mt-6 inline-flex items-center gap-3 rounded-[12px] border border-[#505355] bg-[#404246] px-4 py-4 sm:mt-10 sm:gap-5 sm:px-6 sm:py-5 lg:h-[144px] lg:w-full lg:max-w-[672px]">
                  <span className="grid size-[44px] shrink-0 place-items-center rounded-[6px] bg-[radial-gradient(circle_at_center,#3b7ddd_0%,#7ba6e6_100%)] sm:size-[59px]">
                    <CheckIcon className="text-white" width={28} height={28} />
                  </span>
                  <p className="text-[15px] leading-[1.4] text-[#d9d9d9] sm:text-[18px] lg:text-[29px]">
                    {t.certification.coverageText[0]}
                    <br />
                    {t.certification.coverageText[1]}
                  </p>
                </div>
              </div>

              {/* Right — valent.png pinned to the bottom of the card, fixed 500px tall */}
              <div className="relative mx-auto h-[280px] w-full max-w-[760px] sm:h-[400px] lg:h-[500px]">
                <Image
                  src="/images/valent.png"
                  alt={t.certification.valentAlt}
                  fill
                  sizes="(min-width: 1024px) 760px, 80vw"
                  loading="lazy"
                  className="object-contain object-bottom"
                />
              </div>
            </div>
          </article>

          {/* Block 2 — rec1763536941: Klasse A keurmerk + 4 certificate scans */}
          <article className="flex flex-col overflow-hidden rounded-[16px] bg-[#36383c] px-5 pt-8 text-white sm:px-8 sm:pt-12 lg:px-[60px] lg:pt-[60px]">
            <h2 className="text-[24px] font-extrabold leading-[1.3] sm:text-[36px] sm:leading-[1.4] lg:text-[52px]">
              <strong className="text-[#7bb1ff]">{t.certification.block2Brand} </strong>
              {t.certification.block2Body}
            </h2>

            {/* 4 certificate scans — slider on mobile, 4-col grid on sm+ */}
            <CertSlider />
          </article>
        </div>
      </Container>
    </Section>
  );
}
