"use client";

import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { useT } from "@/components/LanguageProvider";

const partners = [
  { name: "VEKA", src: "/images/partners/veka.svg" },
  { name: "Roto", src: "/images/partners/roto.svg" },
  { name: "Saint-Gobain", src: "/images/partners/saint.svg" },
  { name: "Hoppe", src: "/images/partners/hoppe.svg" },
  { name: "Dr. Hahn", src: "/images/partners/hahn.svg" },
  { name: "greenteQ", src: "/images/partners/greente.svg" },
];

export function Partners() {
  const t = useT();
  return (
    <Section
      ariaLabelledby="partners-title"
      className="!py-12 sm:!py-16"
    >
      <div className="w-full px-2 sm:px-4 lg:px-6">
        <div className="grid gap-6 lg:grid-cols-[auto_1fr] lg:items-center lg:gap-16">
          <h2
            id="partners-title"
            className="text-2xl font-bold tracking-tight text-fg sm:text-3xl"
          >
            {t.partners.title}
          </h2>
          <p className="text-sm text-fg-muted sm:text-right sm:text-base">
            {t.partners.subtitle.split("\n").map((line, i, arr) => (
              <span key={i}>
                {line}
                {i < arr.length - 1 && <br className="hidden sm:block" />}
                {i < arr.length - 1 && <span className="sm:hidden"> </span>}
              </span>
            ))}
          </p>
        </div>

        <ul className="-mx-2 mt-8 flex snap-x snap-mandatory items-center gap-3 overflow-x-auto px-2 pb-2 sm:mx-0 sm:mt-10 sm:grid sm:grid-cols-3 sm:gap-6 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-6 lg:gap-8">
          {partners.map((p) => (
            <li
              key={p.name}
              className="flex h-[80px] w-[160px] shrink-0 snap-start items-center justify-center rounded-[16px] bg-white px-4 sm:h-[100px] sm:w-auto sm:shrink sm:px-6"
            >
              <Image
                src={p.src}
                alt={p.name}
                width={140}
                height={56}
                loading="lazy"
                className="h-[40px] w-auto max-w-full object-contain sm:h-[56px]"
              />
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
