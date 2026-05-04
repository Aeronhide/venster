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
        <article className="mx-auto grid max-w-[1670px] gap-[40px] overflow-hidden rounded-[32px] bg-black p-[60px] text-white lg:grid-cols-[610px_1fr] lg:items-center lg:p-[80px]">
          <div className="max-w-[610px]">
            <span className="inline-flex h-[27px] items-center justify-center rounded-[7px] bg-[#006bd5] px-[14px] text-[17px] font-semibold text-white [font-family:Roboto,Arial,sans-serif]">
              Kwaliteit
            </span>

            <h2 className="mt-[28px] text-[43px] font-bold leading-[1.3] text-white [font-family:Roboto,Arial,sans-serif]">
              Onze producten zijn bekroond met het RAL-keurmerk &ndash; de
              hoogste kwaliteitsstandaard in Europa
            </h2>

            <p className="mt-[24px] text-[22px] font-semibold leading-[1.3] text-[#d2d2d2] [font-family:Roboto,Arial,sans-serif]">
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
              className="object-cover opacity-90"
            />
            <span className="pointer-events-none absolute inset-0 grid place-items-center">
              <span className="grid h-[98px] w-[140px] place-items-center rounded-[16px] bg-black/70 transition-colors group-hover:bg-black/85">
                <span
                  aria-hidden
                  className="block h-0 w-0 translate-x-[3px] border-y-[14px] border-l-[22px] border-y-transparent border-l-white"
                />
              </span>
            </span>
          </a>
        </article>
      </Container>
    </Section>
  );
}
