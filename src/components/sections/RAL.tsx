import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

// Tilda block rec1337102051 (T396, dark card with factory video).
// Card 1160x499 black with 22px radius. Title fs 30 -> 43px. Body fs 15 -> 22px (#d2d2d2).
// "Kwaliteit" tag fs 12 -> 17px on #006bd5. Video tile 604x345 -> aspect 604/345 (~1.75:1).
// Sizes use raw px from spec * 1.44 zoom (per project_tilda_zoom_144 memory).

const VIDEO_POSTER = "/images/ral-poster.webp";
const YOUTUBE_URL = "https://www.youtube.com/watch?v=K16eBIkdkzU";

export function RAL() {
  return (
    <Section ariaLabel="RAL keurmerk" className="bg-white">
      <Container>
        <article className="mx-auto grid max-w-[1670px] gap-[24px] overflow-hidden rounded-[20px] bg-black p-[24px] text-white sm:gap-[32px] sm:rounded-[28px] sm:p-[40px] lg:grid-cols-[610px_1fr] lg:items-center lg:gap-[40px] lg:rounded-[32px] lg:p-[80px]">
          <div className="max-w-[610px]">
            <span className="inline-flex h-[24px] items-center justify-center rounded-[7px] bg-[#006bd5] px-[12px] text-[14px] font-semibold text-white [font-family:Roboto,Arial,sans-serif] sm:h-[27px] sm:px-[14px] sm:text-[17px]">
              Kwaliteit
            </span>

            <h2 className="mt-[20px] text-[26px] font-bold leading-[1.3] text-white [font-family:Roboto,Arial,sans-serif] sm:mt-[24px] sm:text-[34px] lg:mt-[28px] lg:text-[43px]">
              Onze producten zijn bekroond met het RAL-keurmerk &ndash; de
              hoogste kwaliteitsstandaard in Europa
            </h2>

            <p className="mt-[16px] text-[16px] font-semibold leading-[1.4] text-[#d2d2d2] [font-family:Roboto,Arial,sans-serif] sm:mt-[20px] sm:text-[18px] lg:mt-[24px] lg:text-[22px] lg:leading-[1.3]">
              Uitgerust met de nieuwste automatische Elumatec-installaties en
              -machines, computerondersteund.
              <br />
              Dit voorkomt mogelijke menselijke fouten die kunnen optreden in
              het productieproces
              <br />
              van isolerende kozijnen (isolerende ramen en deuren)
            </p>
          </div>

          <a
            href={YOUTUBE_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Speel video over RAL-keurmerk af"
            className="group relative block aspect-[604/345] w-full overflow-hidden rounded-[22px] bg-black"
          >
            <Image
              src={VIDEO_POSTER}
              alt=""
              role="presentation"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              loading="lazy"
              className="object-cover opacity-90"
            />
            <span className="pointer-events-none absolute inset-0 grid place-items-center">
              <span className="grid h-[64px] w-[92px] place-items-center rounded-[12px] bg-black/70 transition-colors group-hover:bg-black/85 sm:h-[80px] sm:w-[114px] sm:rounded-[14px] lg:h-[98px] lg:w-[140px] lg:rounded-[16px]">
                <span
                  aria-hidden
                  className="block h-0 w-0 translate-x-[2px] border-y-[10px] border-l-[16px] border-y-transparent border-l-white sm:translate-x-[3px] sm:border-y-[12px] sm:border-l-[18px] lg:border-y-[14px] lg:border-l-[22px]"
                />
              </span>
            </span>
          </a>
        </article>
      </Container>
    </Section>
  );
}
