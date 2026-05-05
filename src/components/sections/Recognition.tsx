"use client";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { useT } from "@/components/LanguageProvider";

export function Recognition() {
  const t = useT();
  return (
    <Section ariaLabel="Recognition" className="bg-white">
      <Container>
        <p className="mx-auto max-w-[1240px] text-center text-[28px] font-bold leading-[1.3] text-[#333333] [font-family:Roboto,Arial,sans-serif] sm:text-[36px] lg:text-[43px]">
          {t.recognition.lead}
          <br />
          <span className="text-[rgb(48,47,178)]">{t.recognition.highlight}</span>
        </p>

        <p
          aria-label="5 / 5 stars"
          className="mt-[40px] text-center text-[28px] leading-[1] [font-family:Roboto,Arial,sans-serif] sm:text-[36px] lg:text-[43px]"
        >
          <span aria-hidden>⭐⭐⭐⭐⭐</span>
        </p>
      </Container>
    </Section>
  );
}
