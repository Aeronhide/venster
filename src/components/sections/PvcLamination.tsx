"use client";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { useT } from "@/components/LanguageProvider";

const STANDARD_SWATCHES = [
  "bg-[#FFFFFF]",
  "bg-[#F5F1E5]",
  "bg-[#D2D2D2]",
  "bg-[#90A4AE]",
  "bg-[#5C6B73]",
  "bg-[#2D2D33]",
];

const EXTRA_SWATCHES = [
  "bg-[#8C5A38]",
  "bg-[#7E4A2F]",
  "bg-[#5E3923]",
  "bg-[#3F2417]",
  "bg-[#A1845B]",
  "bg-[#C9A877]",
];

function Swatch({ tone }: { tone: string }) {
  return (
    <li
      aria-hidden
      className={`aspect-square rounded-[8px] ring-1 ring-black/10 ${tone}`}
    />
  );
}

export function PvcLamination() {
  const t = useT();
  return (
    <Section ariaLabelledby="pvc-lamination-title" className="bg-white">
      <Container>
        <div className="mx-auto max-w-[1672px]">
          <h2
            id="pvc-lamination-title"
            className="text-center text-[28px] font-black uppercase leading-[1.2] tracking-tight text-[#082b4b] [font-family:Roboto,Arial,sans-serif] sm:text-[40px] lg:text-[63px]"
          >
            {t.pvcRamen.lamination.title}
          </h2>
          <p className="mx-auto mt-[20px] max-w-[900px] text-center text-[16px] leading-[1.5] text-[#3e3e3e] [font-family:Roboto,Arial,sans-serif] sm:text-[18px] lg:text-[20px]">
            {t.pvcRamen.lamination.body}
          </p>

          <div className="mt-[40px] grid gap-[24px] lg:grid-cols-2 lg:gap-[40px]">
            <div className="rounded-[16px] bg-[#f5f5f5] p-[24px] sm:p-[32px] lg:p-[40px]">
              <h3 className="text-[20px] font-bold uppercase text-[#082b4b] sm:text-[24px] lg:text-[28px]">
                {t.pvcRamen.lamination.groupStandard}
              </h3>
              <ul className="mt-[20px] grid grid-cols-6 gap-[12px]">
                {STANDARD_SWATCHES.map((tone, i) => (
                  <Swatch key={i} tone={tone} />
                ))}
              </ul>
            </div>
            <div className="rounded-[16px] bg-[#f5f5f5] p-[24px] sm:p-[32px] lg:p-[40px]">
              <h3 className="text-[20px] font-bold uppercase text-[#082b4b] sm:text-[24px] lg:text-[28px]">
                {t.pvcRamen.lamination.groupExtra}
              </h3>
              <ul className="mt-[20px] grid grid-cols-6 gap-[12px]">
                {EXTRA_SWATCHES.map((tone, i) => (
                  <Swatch key={i} tone={tone} />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
