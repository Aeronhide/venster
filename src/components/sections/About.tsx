import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

// Tilda block rec1763457411 — "Over VALENT"
// Outer container: 1161x679 rounded 16, white bg
// Left blue card: 530x597 #c6e0f7 rounded 12
//   Title: 44px (×1.44 = 63px), font-weight 700, uppercase, color #082b4b
//   Body: 16px (×1.44 = 23px), color #3e3e3e, line-height 1.7
//   Lightbulb: 46×46 (×1.44 = 66×66) rounded 8 (→12), radial gradient #3b7ddd → #7ba6e6
//   Inner SVG: 22×22 (×1.44 = 32×32)
// Right video poster: 530×351 rounded 12 (×1.44 → 763×505)

const VIDEO_POSTER = "/images/about-video-poster.webp";

export function About() {
  return (
    <Section
      id="about"
      ariaLabelledby="over-ons-title"
      className="bg-[#f5f5f5]"
    >
      <Container>
        <div className="mx-auto max-w-[1672px] rounded-[16px] bg-white p-3 sm:p-6 lg:p-[40px]">
          <div className="grid gap-6 lg:grid-cols-2 lg:items-start">
            {/* Left blue card */}
            <article className="relative rounded-[12px] bg-[#c6e0f7] p-6 sm:p-8 lg:p-[52px]">
              <span
                aria-hidden
                className="absolute right-[24px] top-[24px] grid h-[66px] w-[66px] place-items-center rounded-[12px] bg-[radial-gradient(circle_at_center,#3b7ddd_0%,#3b7ddd_40%,#7ba6e6_100%)] lg:right-[52px] lg:top-[42px]"
              >
                <Image
                  src="/images/idea.svg"
                  alt=""
                  width={32}
                  height={32}
                  loading="lazy"
                  className="h-[32px] w-[32px]"
                />
              </span>

              <h2
                id="over-ons-title"
                className="max-w-[550px] text-[28px] font-bold uppercase leading-[1.3] text-[#082b4b] [font-family:Roboto,Arial,sans-serif] sm:text-[40px] lg:text-[63px]"
              >
                Over VALENT
              </h2>

              <div className="mt-[28px] max-w-[665px] space-y-[16px] text-[18px] leading-[1.7] text-[#3e3e3e] [font-family:Roboto,Arial,sans-serif] sm:text-[20px] lg:text-[23px]">
                <p>
                  VALENT is een Europese fabrikant van PVC ramen en deuren, die
                  huiseigenaren in heel Nederland voorziet van gecertificeerde,
                  energiezuinige oplossingen.
                </p>
                <p>
                  Onze productie en technische activiteiten worden uitgevoerd
                  door een toegewijd backofficeteam, terwijl onze projecten in
                  Nederland worden uitgevoerd via lokale meet-en
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
                  zijn onze producten{" "}
                  <strong className="font-bold">CE-gecertificeerd,</strong>{" "}
                  afgestemd op landspecifieke regelgeving en veilig
                  getransporteerd om een vlekkeloze installatie te garanderen.
                </p>
                <p>
                  Wij geloven dat vertrouwen wordt opgebouwd door transparantie,
                  duidelijke communicatie en consistente resultaten.
                </p>
                <p>
                  Daarom kiezen onze klanten voor VALENT voor{" "}
                  <strong className="font-bold">
                    eerlijke prijzen, Europese kwaliteit en betrouwbare service.
                  </strong>
                </p>
              </div>

              {/* Video poster — mobile/tablet, inside the blue card at the bottom */}
              <button
                type="button"
                aria-label="Speel introductievideo Valent af"
                className="group relative mt-8 block h-[260px] w-full overflow-hidden rounded-[12px] bg-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#226CD5] sm:mt-10 sm:h-[360px] lg:hidden"
              >
                <Image
                  src={VIDEO_POSTER}
                  alt=""
                  fill
                  sizes="100vw"
                  loading="lazy"
                  className="object-cover"
                />
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-0 grid place-items-center"
                >
                  <span className="grid h-[64px] w-[96px] place-items-center rounded-[16px] bg-[rgba(23,35,34,0.9)] shadow-[0_4px_10px_rgba(0,0,0,0.35)] sm:h-[80px] sm:w-[120px]">
                    <span className="block h-0 w-0 translate-x-[3px] border-y-[14px] border-l-[22px] border-y-transparent border-l-white" />
                  </span>
                </span>
              </button>
            </article>

            {/* Right video poster — desktop only, sits as the second grid column */}
            <button
              type="button"
              aria-label="Speel introductievideo Valent af"
              className="group relative hidden h-[500px] w-full overflow-hidden rounded-[12px] bg-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#226CD5] lg:block"
            >
              <Image
                src={VIDEO_POSTER}
                alt=""
                fill
                sizes="50vw"
                loading="lazy"
                className="object-cover"
              />
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 grid place-items-center"
              >
                <span className="grid h-[98px] w-[140px] place-items-center rounded-[16px] bg-[rgba(23,35,34,0.9)] shadow-[0_4px_10px_rgba(0,0,0,0.35)]">
                  <span className="block h-0 w-0 translate-x-[3px] border-y-[14px] border-l-[22px] border-y-transparent border-l-white" />
                </span>
              </span>
            </button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
