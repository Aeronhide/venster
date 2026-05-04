import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

const reasons = [
  {
    title: "GECERTIFICEERDE DUITSE SYSTEMEN",
    body:
      "Wij werken met gevestigde Europese leveranciers zoals VEKA-profielen en ROTO-beslag, veelvuldig toegepast in residentiële projecten binnen de EU.",
  },
  {
    title: "TRANSPARANTE GARANTIE",
    body:
      "Wij bieden een 10-jarige fabrieksgarantie op profielen, beglazing en beslag, duidelijk vastgelegd in onze contractdocumentatie.",
  },
  {
    title: "GECONTROLEERDE PRODUCTIE EN LEVERING",
    body:
      "Alle ramen en deuren worden in-house geproduceerd, kwaliteitsgecontroleerd en veilig verpakt vóór levering naar Nederland.",
  },
  {
    title: "BETROUWBARE LEVERTIJDEN",
    body:
      "De standaard productietijd en levering bedraagt ongeveer 45 kalenderdagen, afhankelijk van configuratie en projectspecificaties.",
  },
];

const sideCards = [
  {
    title: "In-house productie",
    body:
      "Productie, assemblage en verpakking worden volledig binnen ons eigen productieproces uitgevoerd.",
  },
  {
    title: "Technisch advies",
    body:
      "Ondersteuning door ervaren projectmanagers, gespecialiseerd in residentiële raam- en deurprojecten.",
  },
  {
    title: "Kwaliteitscontrole",
    body:
      "Kwaliteitscontroles worden uitgevoerd in cruciale productiefasen en vóór verzending.",
  },
];

export function WhyChoose() {
  return (
    <Section
      id="voordelen"
      ariaLabelledby="why-choose-title"
      className="bg-white"
    >
      <Container>
        <h2
          id="why-choose-title"
          className="text-3xl font-black uppercase leading-tight tracking-tight text-brand-ink sm:text-4xl lg:text-[44px] lg:leading-[1.15]"
        >
          Waarom huiseigenaren in
          <br />
          Nederland voor Valent kiezen
        </h2>

        <div className="mt-10 grid gap-6 lg:grid-cols-[2fr_1fr] lg:gap-8">
          <div className="relative overflow-hidden rounded-[22px] bg-[radial-gradient(ellipse_at_right,#7ba6e6_0%,#3b7ddd_45%,#3b7ddd_100%)] p-6 sm:p-10">
            <div className="relative z-10 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-center">
              <ul className="max-w-md space-y-5 text-white">
                {reasons.map((r) => (
                  <li key={r.title} className="flex gap-3">
                    <span className="mt-1 grid size-5 shrink-0 place-items-center rounded-full bg-white/90 text-brand-strong">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        aria-hidden
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={3}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <div>
                      <h3 className="text-xs font-bold uppercase">{r.title}</h3>
                      <p className="mt-1 text-sm leading-snug text-white/90">
                        {r.body}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="relative mx-auto hidden aspect-square w-full max-w-md lg:block">
                <Image
                  src="/images/why-choose-installer.webp"
                  alt="Valent-installateur monteert een raam"
                  fill
                  sizes="(min-width: 1024px) 28vw, 80vw"
                  loading="lazy"
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          <ul className="grid gap-4">
            {sideCards.map((c) => (
              <li
                key={c.title}
                className="rounded-2xl bg-surface p-5 ring-1 ring-border/50"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-bold text-brand-ink">
                      {c.title}
                    </h3>
                    <p className="mt-2 text-sm text-fg-muted">{c.body}</p>
                  </div>
                  <span className="grid size-10 shrink-0 place-items-center rounded-md bg-brand text-white">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      aria-hidden
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M3 21V9l9-6 9 6v12h-7v-7h-4v7H3z" />
                    </svg>
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
}
