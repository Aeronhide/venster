import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

// Tilda block rec1337102091 — full-width centered text + 5-star line.
// Title fs 30 -> 43px (#333333). "AANBEVOLEN" highlighted color rgb(48, 47, 178).
// Stars fs 30 -> 43px below title.

export function Recognition() {
  return (
    <Section ariaLabel="Erkenning en aanbevelingen" className="bg-white">
      <Container>
        <p className="mx-auto max-w-[1240px] text-center text-[28px] font-bold leading-[1.3] text-[#333333] [font-family:Roboto,Arial,sans-serif] sm:text-[36px] lg:text-[43px]">
          We voeren jaarlijks meer dan
          <br />
          480 projecten uit en al onze beoordelingen hebben de status{" "}
          <span className="text-[rgb(48,47,178)]">AANBEVOLEN</span>
        </p>

        <p
          aria-label="Vijf van vijf sterren"
          className="mt-[40px] text-center text-[28px] leading-[1] [font-family:Roboto,Arial,sans-serif] sm:text-[36px] lg:text-[43px]"
        >
          <span aria-hidden>⭐⭐⭐⭐⭐</span>
        </p>
      </Container>
    </Section>
  );
}
