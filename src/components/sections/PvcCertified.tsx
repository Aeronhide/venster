"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { useT } from "@/components/LanguageProvider";

const CERT_IMG = "/images/valent-prod.jpg";

export function PvcCertified() {
  const t = useT();
  return (
    <Section ariaLabelledby="pvc-certified-title" className="bg-white">
      <Container>
        <div className="mx-auto max-w-[1100px]">
          <h2
            id="pvc-certified-title"
            className="text-center text-[28px] font-extrabold uppercase leading-[1.2] tracking-tight text-[#082b4b] [font-family:Roboto,Arial,sans-serif] sm:text-[36px] lg:text-[42px]"
          >
            {t.pvcRamen.certified.title}
          </h2>

          <div className="mt-[32px] lg:mt-[48px]">
            <div className="relative mx-auto aspect-[800/282] w-full max-w-[900px]">
              <Image
                src={CERT_IMG}
                alt={t.pvcRamen.certified.alt}
                fill
                sizes="(min-width: 1024px) 900px, 100vw"
                loading="lazy"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
