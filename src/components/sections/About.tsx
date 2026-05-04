import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

const VIDEO_POSTER = "/images/about-video-poster.webp";

export function About() {
  return (
    <Section id="over-ons" ariaLabelledby="over-ons-title" className="bg-surface">
      <Container>
        <div className="mx-auto max-w-7xl rounded-2xl bg-white p-4 sm:p-6 lg:p-10">
          <div className="grid gap-6 lg:grid-cols-2 lg:items-stretch">
            <article className="relative rounded-xl bg-[#c6e0f7] p-8 sm:p-10 lg:p-12">
              <span className="absolute right-6 top-6 grid size-[54px] place-items-center rounded-lg bg-[radial-gradient(circle,#3b7ddd_0%,#3b7ddd_40%,#5b92e2_70%,#7ba6e6_100%)]">
                <Image
                  src="/icons/lightbulb-idea.svg"
                  alt=""
                  width={26}
                  height={26}
                  className="invert brightness-0"
                />
              </span>

              <h2
                id="over-ons-title"
                className="max-w-[10ch] text-4xl font-black uppercase tracking-tight text-brand-ink sm:text-5xl lg:text-[64px] lg:leading-[1.05]"
              >
                Over Valent
              </h2>

              <div className="mt-6 space-y-4 text-base leading-7 text-[#3e3e3e]">
                <p>
                  VALENT is een Europese fabrikant van PVC ramen en deuren, die
                  huiseigenaren in heel Nederland voorziet van gecertificeerde,
                  energiezuinige oplossingen.
                </p>
                <p>
                  Onze productie en technische activiteiten worden uitgevoerd
                  door een toegewijd backofficeteam, terwijl onze projecten in
                  Nederland worden uitgevoerd via lokale meet- en
                  installatiepartners.
                </p>
                <p>
                  Dit model stelt ons in staat om een strikte kwaliteitscontrole
                  te handhaven, te voldoen aan de EU-normen en concurrerende
                  prijzen aan te bieden zonder afbreuk te doen aan de
                  betrouwbaarheid.
                </p>
                <p>
                  Met meer dan{" "}
                  <strong className="font-bold">
                    8 jaar productie-ervaring en duizenden voltooide projecten
                  </strong>{" "}
                  zijn onze producten <strong className="font-bold">CE-gecertificeerd</strong>,
                  afgestemd op landspecifieke regelgeving en veilig
                  getransporteerd om een vlekkeloze installatie te garanderen.
                </p>
                <p>
                  Wij geloven dat vertrouwen wordt opgebouwd door transparantie,
                  duidelijke communicatie en consistente resultaten. Daarom
                  kiezen onze klanten voor VALENT voor{" "}
                  <strong className="font-bold">eerlijke prijzen</strong>,{" "}
                  <strong className="font-bold">
                    Europese kwaliteit en betrouwbare service.
                  </strong>
                </p>
              </div>
            </article>

            <button
              type="button"
              className="group relative block overflow-hidden rounded-xl bg-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
              aria-label="Speel introductievideo Valent af"
            >
              <Image
                src={VIDEO_POSTER}
                alt=""
                width={1280}
                height={720}
                className="h-full w-full object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
              <span className="pointer-events-none absolute inset-0 grid place-items-center">
                <span className="grid h-[68px] w-[98px] place-items-center rounded-xl bg-[rgba(23,35,34,0.9)] shadow-[0_2px_6px_rgba(0,0,0,0.35)]">
                  <span
                    aria-hidden
                    className="block h-0 w-0 translate-x-[2px] border-y-[10px] border-l-[16px] border-y-transparent border-l-white"
                  />
                </span>
              </span>
              <span className="absolute right-3 top-3 inline-flex items-center gap-2 rounded-md bg-white/95 px-3 py-1 text-xs font-bold uppercase text-brand-ink shadow">
                Valent
              </span>
            </button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
