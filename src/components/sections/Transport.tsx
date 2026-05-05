"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { useT } from "@/components/LanguageProvider";

// Tilda block rec1337102071 (T396, dark blue card with 3 truck photos).
// Card 1160x382 #004991 with 22px radius. Title fs 30 -> 43px.
// Body fs 12 -> 17px (#f5f5f5). "Veilig transport" tag fs 13 -> 19px on #006bd5.
// Each truck photo 220x323 -> 317x465. All px values are spec * 1.44 zoom.

const truckImages = [
  "/images/transport-1.webp",
  "/images/transport-2.webp",
  "/images/transport-3.webp",
];

export function Transport() {
  const t = useT();
  return (
    <Section ariaLabel={t.transport.ariaLabel} className="bg-white">
      <Container>
        <article className="mx-auto grid max-w-[1670px] gap-[24px] overflow-hidden rounded-[20px] bg-[#004991] p-[24px] text-white sm:gap-[32px] sm:rounded-[28px] sm:p-[40px] lg:grid-cols-[1fr_1.6fr] lg:items-center lg:gap-[40px] lg:rounded-[32px] lg:p-[80px]">
          <div className="max-w-[500px]">
            <span
              aria-hidden
              className="grid h-[52px] w-[52px] place-items-center rounded-[10px] bg-white/10 sm:h-[60px] sm:w-[60px] lg:h-[66px] lg:w-[66px] lg:rounded-[12px]"
            >
              <svg
                width="36"
                height="36"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.6}
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
                className="text-white"
              >
                <rect x="2" y="6" width="3" height="12" rx="0.5" />
                <rect x="6" y="9" width="3" height="9" rx="0.5" />
                <rect x="10" y="3" width="3" height="15" rx="0.5" />
                <rect x="14" y="7" width="3" height="11" rx="0.5" />
                <rect x="18" y="11" width="3" height="7" rx="0.5" />
              </svg>
            </span>

            <span className="mt-[16px] inline-flex h-[24px] items-center justify-center rounded-[7px] bg-[#006bd5] px-[12px] text-[14px] font-semibold text-white [font-family:Roboto,Arial,sans-serif] sm:mt-[18px] sm:h-[26px] sm:px-[14px] sm:text-[16px] lg:mt-[20px] lg:h-[28px] lg:text-[19px]">
              {t.transport.tag}
            </span>

            <h2 className="mt-[16px] text-[26px] font-bold leading-[1.3] text-white [font-family:Roboto,Arial,sans-serif] sm:mt-[18px] sm:text-[34px] lg:mt-[20px] lg:text-[43px]">
              {t.transport.title}
            </h2>

            <p className="mt-[16px] text-[15px] font-semibold leading-[1.4] text-[#f5f5f5] [font-family:Roboto,Arial,sans-serif] sm:mt-[20px] sm:text-[16px] lg:mt-[24px] lg:text-[17px] lg:leading-[1.3]">
              {t.transport.body}
            </p>
          </div>

          <ul className="grid grid-cols-1 gap-[12px] sm:grid-cols-3 sm:gap-[16px] lg:gap-[20px]">
            {truckImages.map((src, i) => (
              <li
                key={src}
                className="relative aspect-[3/2] overflow-hidden rounded-[17px] bg-black/20 sm:aspect-[220/323]"
              >
                <Image
                  src={src}
                  alt={`${t.transport.altPrefix} ${i + 1}`}
                  fill
                  sizes="(min-width: 1024px) 22vw, 90vw"
                  loading="lazy"
                  className="object-cover"
                />
              </li>
            ))}
          </ul>
        </article>
      </Container>
    </Section>
  );
}
