"use client";

import Image from "next/image";
import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

const projects = [
  "/images/tild3734-3938-4938-b465-633866373039___1.webp",
  "/images/tild6432-6233-4132-a139-386538646261__6_1.webp",
  "/images/tild3463-6236-4434-a435-626361326264__ro_profile_clasa_a_-.webp",
  "/images/tild3735-6138-4835-a135-323164336231__valentin_cat.webp",
  "/images/tild6332-6463-4533-b430-656430623637__clasa_a_weng_1510201.webp",
  "/images/tild6333-3335-4935-b564-666161306463__glis.webp",
];

export function Projects() {
  const [active, setActive] = useState(0);
  const visible = projects[active] ?? projects[0];

  return (
    <Section
      ariaLabelledby="projects-title"
      className="bg-surface"
    >
      <Container>
        <h2
          id="projects-title"
          className="text-center text-2xl font-black uppercase tracking-tight text-brand-ink sm:text-3xl lg:text-[36px]"
        >
          Onze afgeronde projecten in Nederland!
        </h2>

        <div className="relative mt-10">
          <div className="absolute left-1/2 top-0 z-10 -translate-x-1/2 -translate-y-1/2 grid h-16 w-16 place-items-center rounded-full bg-white text-xs font-bold text-brand-ink shadow ring-1 ring-border/40">
            <Image
              src="/icons/nl-flag-circle.svg"
              alt=""
              width={28}
              height={28}
              className="rounded-full"
            />
            <span className="sr-only">Valent Nederland</span>
          </div>

          <div className="relative aspect-[16/9] overflow-hidden rounded-xl bg-black ring-1 ring-border/30 sm:aspect-[16/8]">
            <Image
              key={visible}
              src={visible}
              alt={`Project ${active + 1}`}
              fill
              sizes="(min-width: 1024px) 800px, 90vw"
              className="object-cover"
            />

            <button
              type="button"
              aria-label="Vorig project"
              onClick={() =>
                setActive((i) => (i - 1 + projects.length) % projects.length)
              }
              className="absolute left-3 top-1/2 -translate-y-1/2 grid h-10 w-10 place-items-center rounded-full bg-white/90 text-fg shadow hover:bg-white"
            >
              ‹
            </button>
            <button
              type="button"
              aria-label="Volgend project"
              onClick={() => setActive((i) => (i + 1) % projects.length)}
              className="absolute right-3 top-1/2 -translate-y-1/2 grid h-10 w-10 place-items-center rounded-full bg-white/90 text-fg shadow hover:bg-white"
            >
              ›
            </button>

            <span className="absolute bottom-4 left-1/2 inline-flex -translate-x-1/2 items-center gap-2 rounded-md bg-[#226cd5] px-4 py-2 text-xs font-bold uppercase text-white">
              <Image
                src="/icons/nl-flag-circle.svg"
                alt=""
                width={18}
                height={18}
                className="rounded-full"
              />
              Gerealiseerde projecten
            </span>
          </div>

          <div className="mt-5 flex justify-center gap-2">
            {projects.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Ga naar project ${i + 1}`}
                onClick={() => setActive(i)}
                className={`h-2 w-2 rounded-full ${
                  i === active ? "bg-brand-ink" : "bg-border"
                }`}
              />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
