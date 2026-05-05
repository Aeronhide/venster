"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { useT } from "@/components/LanguageProvider";

const TEAM_IMAGES = [
  "/images/team-1.webp",
  "/images/team-2.webp",
  "/images/team-3.webp",
  "/images/team-4.webp",
];

type TeamProps = {
  title?: string;
  subtitle?: string;
};

export function Team({ title, subtitle }: TeamProps = {}) {
  const t = useT();
  const team = t.team.members.map((m, i) => ({ ...m, image: TEAM_IMAGES[i] }));
  const heading = title ?? t.team.title;
  return (
    <Section ariaLabelledby="team-title" className="bg-[#f5f5f5]">
      <Container>
        <h2
          id="team-title"
          className="text-balance text-center text-[24px] font-black uppercase leading-[1.2] tracking-tight text-[#082b4b] sm:text-[40px] sm:leading-[1.3] lg:text-[72px]"
        >
          {heading}
        </h2>
        {subtitle && (
          <p className="mx-auto mt-[12px] max-w-[900px] text-center text-[14px] leading-[1.5] text-[#191919] [font-family:Roboto,Arial,sans-serif] sm:mt-[16px] sm:text-[18px] lg:mt-[20px] lg:text-[20px]">
            {subtitle}
          </p>
        )}

        <ul className="-mx-2 mt-[28px] flex snap-x snap-mandatory items-stretch gap-3 overflow-x-auto px-2 pb-4 sm:mx-auto sm:mt-[40px] sm:grid sm:max-w-[1500px] sm:grid-cols-2 sm:gap-[20px] sm:overflow-visible sm:px-0 sm:pb-0 lg:mt-[60px] lg:grid-cols-4">
          {team.map((m) => (
            <li
              key={m.name}
              className="flex w-[85%] shrink-0 snap-center flex-col overflow-hidden rounded-[16px] bg-white sm:w-auto sm:shrink"
            >
              <div className="relative aspect-square w-full overflow-hidden bg-[#f5f5f5]">
                <Image
                  src={m.image}
                  alt={m.name}
                  fill
                  sizes="(min-width: 1024px) 374px, (min-width: 640px) 45vw, 90vw"
                  loading="lazy"
                  className="object-cover"
                />
              </div>

              <div className="flex flex-1 flex-col p-[16px] text-center sm:p-[24px]">
                <h3 className="text-[16px] font-semibold leading-[1.3] text-[#082b4b] sm:text-[20px]">
                  {m.name}
                </h3>
                <p className="mt-[8px] text-[14px] leading-[1.5] text-[#191919] sm:mt-[12px] sm:text-[16px]">
                  <strong className="font-bold">{m.role}</strong>
                  <br />
                  {m.body}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
