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
  const visible = projects[active] ?? projects[0];

  return (
    <Section ariaLabelledby="projects-title" className="bg-white">
      <Container>
        <h2
          id="projects-title"
          className="text-center text-[28px] font-black uppercase tracking-tight text-[#082b4b] sm:text-[36px] lg:text-[48px]"
        >
          ONZE AFGERONDE PROJECTEN IN NEDERLAND!
        </h2>

        <div className="relative mx-auto mt-[40px] max-w-[1238px] lg:mt-[90px]">
          <div className="relative aspect-[860/550] w-full overflow-hidden rounded-[16px] bg-black">
            <Image
              key={visible}
              src={visible}
              alt={`Project ${active + 1}`}
              fill
              sizes="(min-width: 1024px) 1238px, 92vw"
              className="object-cover"
              priority={active === 0}
            />

            <span className="pointer-events-none absolute left-1/2 top-[24px] inline-flex -translate-x-1/2 items-center justify-center rounded-[16px] bg-[#226CD5] px-[24px] py-[12px] text-[14px] font-bold capitalize text-white [font-family:Roboto,Arial,sans-serif] lg:text-[18px]">
              Gerealiseerde projecten
            </span>

            <button
              type="button"
              aria-label="Vorig project"
              onClick={() =>
                setActive((i) => (i - 1 + projects.length) % projects.length)
              }
              className="absolute left-[16px] top-1/2 grid h-[56px] w-[56px] -translate-y-1/2 place-items-center rounded-full bg-white/90 text-[28px] text-[#082b4b] shadow hover:bg-white"
            >
              ‹
            </button>
            <button
              type="button"
              aria-label="Volgend project"
              onClick={() => setActive((i) => (i + 1) % projects.length)}
              className="absolute right-[16px] top-1/2 grid h-[56px] w-[56px] -translate-y-1/2 place-items-center rounded-full bg-white/90 text-[28px] text-[#082b4b] shadow hover:bg-white"
            >
              ›
            </button>
          </div>

          <div className="mt-[20px] flex flex-wrap justify-center gap-[8px]">
            {projects.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Ga naar project ${i + 1}`}
                onClick={() => setActive(i)}
                className={`h-[8px] w-[8px] rounded-full transition-colors ${
                  i === active ? "bg-[#082b4b]" : "bg-[#c7c7c7]"
                }`}
              />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
