import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

const VIDEO_POSTER = "/images/ral-poster.webp";

export function RAL() {
  return (
    <Section ariaLabel="RAL keurmerk" className="bg-white">
      <Container>
        <article className="overflow-hidden rounded-[22px] bg-[#1f2530] p-6 text-white sm:p-10 lg:p-14">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-center">
            <div>
              <span className="inline-flex items-center rounded-md bg-brand px-3 py-1 text-xs font-bold uppercase text-white">
                Kwaliteit
              </span>
              <h2 className="mt-4 text-2xl font-bold leading-tight sm:text-3xl lg:text-[32px]">
                Onze producten zijn bekroond met het{" "}
                <span className="text-brand-soft">RAL-keurmerk</span> – de
                hoogste kwaliteitsstandaard in Europa
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-white/80">
                Uitgerust met de nieuwste automatische Elumatec-installaties en
                -machines, computerondersteund. Dit voorkomt mogelijke
                menselijke fouten die kunnen optreden in het productieproces
                van isolerende kozijnen (isolerende ramen en deuren).
              </p>
            </div>

            <button
              type="button"
              aria-label="Speel video over RAL-keurmerk af"
              className="group relative block overflow-hidden rounded-xl bg-black"
            >
              <Image
                src={VIDEO_POSTER}
                alt=""
                width={1200}
                height={700}
                className="h-full w-full object-cover opacity-90"
                sizes="(min-width: 1024px) 55vw, 100vw"
              />
              <span className="pointer-events-none absolute inset-0 grid place-items-center">
                <span className="grid h-[68px] w-[98px] place-items-center rounded-xl bg-[rgba(23,35,34,0.9)] shadow-[0_2px_6px_rgba(0,0,0,0.35)]">
                  <span
                    aria-hidden
                    className="block h-0 w-0 translate-x-[2px] border-y-[10px] border-l-[16px] border-y-transparent border-l-white"
                  />
                </span>
              </span>
              <span className="absolute right-3 top-3 inline-flex items-center gap-2 rounded-md bg-white/95 px-3 py-1 text-xs font-bold uppercase text-brand-ink">
                Valent
              </span>
            </button>
          </div>
        </article>
      </Container>
    </Section>
  );
}
