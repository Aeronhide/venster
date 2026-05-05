"use client";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { useT } from "@/components/LanguageProvider";

export function PvcVisit() {
  const t = useT();
  return (
    <Section ariaLabelledby="pvc-visit-title" className="bg-[#F5F5F5]">
      <Container>
        <div className="mx-auto max-w-[800px] text-center [font-family:Roboto,Arial,sans-serif]">
          <h2
            id="pvc-visit-title"
            className="text-[18px] font-bold leading-[1.4] text-[#082b4b] sm:text-[20px] lg:text-[22px]"
          >
            {t.pvcRamen.visit.title}
          </h2>

          <div className="mt-[20px] space-y-[6px] text-[15px] leading-[1.6] text-[#3e3e3e] sm:text-[16px] lg:text-[17px]">
            <p>{t.pvcRamen.visit.city}</p>
            <p>{t.pvcRamen.visit.street}</p>
            <p>
              {t.pvcRamen.visit.phoneLabel}
              <strong className="font-bold text-[#082b4b]">
                {t.pvcRamen.visit.phone}
              </strong>
            </p>
            <p>
              {t.pvcRamen.visit.emailLabel}
              <a
                href={`mailto:${t.pvcRamen.visit.email}`}
                className="font-bold text-[#082b4b] hover:underline"
              >
                {t.pvcRamen.visit.email}
              </a>
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
