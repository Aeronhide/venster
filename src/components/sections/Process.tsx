import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

type Step = {
  n: string;
  title: string;
  body: string;
  bullets: string[];
  image: string;
};

const steps: Step[] = [
  {
    n: "01",
    title: "Technisch advies",
    body: "U ontvangt een duidelijke technische offerte op basis van uw wensen, inclusief configuratie-opties, materialen en een indicatie van de planning — toegelicht door een gekwalificeerde adviseur.",
    bullets: ["Geen vage aanbiedingen", "Geen verborgen details"],
    image: "/images/process-step-1.webp",
  },
  {
    n: "02",
    title: "In-house productie",
    body: "Uw ramen en deuren worden geproduceerd volgens EU-normen, op basis van bevestigde specificaties.",
    bullets: [
      "Standaard productietijd: ~45 kalenderdagen",
      "Doorlooptijd afhankelijk van configuratie en projectomvang",
    ],
    image: "/images/process-step-2.webp",
  },
  {
    n: "03",
    title: "Veilige verpakking",
    body: "Alle producten worden professioneel in-house verpakt om transportschade te minimaliseren.",
    bullets: [
      "Bescherming tegen beschadiging",
      "Geschikt voor langeafstandsleveringen binnen de EU",
    ],
    image: "/images/process-step-3.webp",
  },
  {
    n: "04",
    title: "Geplande levering",
    body: "Wij coördineren de levering rechtstreeks naar uw adres in Nederland.",
    bullets: ["Geplande logistiek", "Duidelijke leveringsafstemming vooraf"],
    image: "/images/process-step-4.webp",
  },
  {
    n: "05",
    title: "Turnkey installatie (optioneel)",
    body: "De installatie wordt uitgevoerd door ervaren lokale teams, inclusief demontage van oude ramen en definitieve afstelling.",
    bullets: ["Eén aanspreekpunt", "Geen coördinatiezorgen voor u"],
    image: "/images/process-step-5.webp",
  },
];

export function Process() {
  return (
    <Section
      id="proces"
      ariaLabelledby="process-title"
      className="bg-white"
    >
      <Container>
        <h2
          id="process-title"
          className="text-center text-3xl font-black uppercase leading-tight tracking-tight text-brand-ink sm:text-4xl lg:text-[40px] lg:leading-[1.2]"
        >
          Een helder en gecontroleerd proces
          <br />
          — van eerste contact tot installatie
        </h2>

        <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((s) => (
            <li
              key={s.n}
              className="flex flex-col rounded-2xl bg-white p-5 ring-1 ring-border/40 shadow-sm"
            >
              <div className="relative">
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-surface">
                  <Image
                    src={s.image}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 18vw, (min-width: 640px) 45vw, 90vw"
                    loading="lazy"
                    className="object-cover"
                  />
                </div>
                <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 grid h-9 w-9 place-items-center rounded-md bg-brand text-sm font-bold text-white shadow">
                  {s.n}
                </span>
              </div>
              <h3 className="mt-7 text-center text-base font-bold text-brand-ink">
                {s.title}
              </h3>
              <p className="mt-3 text-xs leading-relaxed text-fg-muted">
                {s.body}
              </p>
              <ul className="mt-3 space-y-1 text-[11px] text-fg-muted/90">
                {s.bullets.map((b) => (
                  <li key={b}>• {b}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
