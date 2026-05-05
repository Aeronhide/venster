"use client";

import Image from "next/image";
import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

// Tilda blocks rec1338569481 (title) + rec1337102161 (T670 image gallery, 16 slides at 860x550 → ~1238x792).
const projects = [
  "/images/tild3135-6536-4538-a434-656433326238__1_1_3_1.webp",
  "/images/tild6562-3166-4230-a434-336633363065__2_1_2_1.webp",
  "/images/tild6534-6433-4138-a232-396335393233__3_1_1_1.webp",
  "/images/tild6663-3038-4563-b030-663332613635__4_1_1_1.webp",
  "/images/tild6136-6230-4739-b466-343734393262__5.webp",
  "/images/tild6432-6233-4132-a139-386538646261__6_1.webp",
  "/images/tild3263-3966-4161-b933-393365316563__7.webp",
  "/images/tild6262-3539-4630-b932-333063326165__8.webp",
  "/images/tild6230-6133-4435-a562-663634633466__9.webp",
  "/images/tild3166-6234-4539-a436-393665653531__10.webp",
  "/images/tild3130-6335-4864-b465-396130646239__11.webp",
  "/images/tild3263-3933-4039-a265-393363393135__12.webp",
  "/images/tild3761-6639-4930-b037-326430643437__13.webp",
  "/images/tild6636-6131-4431-b333-373965386330__14.webp",
  "/images/tild3562-3063-4332-a432-366662383234__15.webp",
  "/images/tild6436-6361-4163-b961-623033353033__16.webp",
];

export function Projects() {
  const [active, setActive] = useState(0);

  return (
    <Section ariaLabelledby="projects-title" className="bg-white">
      <Container>
        <h2
          id="projects-title"
          className="text-center text-[28px] font-black uppercase tracking-tight text-[#082b4b] sm:text-[36px] lg:text-[48px]"
        >
          ONZE AFGERONDE PROJECTEN IN NEDERLAND!
        </h2>

        {(() => {
          const prev = () =>
            setActive((i) => (i - 1 + projects.length) % projects.length);
          const next = () => setActive((i) => (i + 1) % projects.length);
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
          const dots = (
            <div className="flex flex-wrap justify-center gap-[8px]">
              {projects.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Ga naar project ${i + 1}`}
                  onClick={() => setActive(i)}
                  className={`h-[8px] w-[8px] rounded-full ${
                    i === active ? "bg-[#082b4b]" : "bg-[#c7c7c7]"
                  }`}
                />
              ))}
            </div>
          );
          return (
            <>
              {/* Slider row — desktop arrows flank the image; mobile shows just the image */}
              <div className="mt-[28px] flex items-center lg:mx-auto lg:mt-[90px] lg:max-w-[960px] lg:gap-[16px]">
                {/* Desktop prev — hidden on mobile */}
                <button
                  type="button"
                  aria-label="Vorig project"
                  onClick={prev}
                  className="hidden h-[56px] w-[56px] shrink-0 place-items-center rounded-full bg-white text-[#082b4b] shadow ring-1 ring-black/5 hover:bg-[#f5f5f5] lg:grid"
                >
                  {PrevIcon}
                </button>

                {/* Slider image — full-width on mobile inside the section's padding */}
                <div className="relative aspect-[860/550] w-full overflow-hidden rounded-[20px] bg-black lg:rounded-[16px]">
                  {projects.map((src, i) => (
                    <Image
                      key={src}
                      src={src}
                      alt={`Project ${i + 1}`}
                      fill
                      sizes="(min-width: 1024px) 1238px, 100vw"
                      priority={i === 0}
                      loading={i === 0 ? "eager" : "lazy"}
                      className={`object-cover transition-opacity duration-500 ease-in-out ${
                        i === active ? "opacity-100" : "opacity-0"
                      }`}
                    />
                  ))}
                </div>

                {/* Desktop next — hidden on mobile */}
                <button
                  type="button"
                  aria-label="Volgend project"
                  onClick={next}
                  className="hidden h-[56px] w-[56px] shrink-0 place-items-center rounded-full bg-white text-[#082b4b] shadow ring-1 ring-black/5 hover:bg-[#f5f5f5] lg:grid"
                >
                  {NextIcon}
                </button>
              </div>

              {/* Mobile control row — prev + dots + next BELOW the slider */}
              <div className="mt-[20px] flex items-center justify-center gap-[12px] lg:hidden">
                <button
                  type="button"
                  aria-label="Vorig project"
                  onClick={prev}
                  className="grid h-[44px] w-[44px] shrink-0 place-items-center rounded-full bg-white text-[#082b4b] shadow ring-1 ring-black/5 hover:bg-[#f5f5f5]"
                >
                  {PrevIcon}
                </button>
                {dots}
                <button
                  type="button"
                  aria-label="Volgend project"
                  onClick={next}
                  className="grid h-[44px] w-[44px] shrink-0 place-items-center rounded-full bg-white text-[#082b4b] shadow ring-1 ring-black/5 hover:bg-[#f5f5f5]"
                >
                  {NextIcon}
                </button>
              </div>

              {/* Desktop dots row */}
              <div className="mx-auto mt-[20px] hidden max-w-[960px] lg:block">
                {dots}
              </div>
            </>
          );
        })()}
      </Container>
    </Section>
  );
}
