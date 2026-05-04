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

// Tilda block rec1763499311. Spec is the 1200-breakpoint values × 1.44.
// Card 224x464 → ~322x668. Image 196x133 → ~282x192. Title fs 22 → 32. Body/bullets fs 14 → 20.
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
    <Section id="proces" ariaLabelledby="process-title" className="bg-white">
      <Container>
        <h2
          id="process-title"
          className="mx-auto max-w-[1100px] text-center text-[28px] font-black uppercase leading-[1.2] tracking-tight text-[#082b4b] sm:text-[40px] lg:text-[63px]"
        >
          Een helder en gecontroleerd proces — van eerste contact tot installatie
        </h2>

        <ol className="mx-auto mt-12 grid max-w-[1728px] gap-[14px] sm:grid-cols-2 lg:mt-[80px] lg:grid-cols-5">
          {steps.map((s) => (
            <li
              key={s.n}
              className="flex flex-col rounded-[16px] bg-[#f5f5f5] p-[20px]"
            >
              <div className="relative h-[192px] w-full overflow-hidden rounded-[12px] bg-white">
                <Image
                  src={s.image}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 282px, (min-width: 640px) 45vw, 90vw"
                  loading="lazy"
                  className="object-cover"
                />
              </div>

              <div className="mt-[24px] flex items-center gap-[12px]">
                <span className="grid h-[62px] w-[62px] place-items-center rounded-[16px] bg-[#226CD5] text-[20px] font-bold text-white">
                  {s.n}
                </span>
                <h3 className="text-[22px] font-bold leading-[1.2] text-[#082b4b]">
                  {s.title}
                </h3>
              </div>

              <p className="mt-[16px] text-[16px] leading-[1.4] text-[#7b7b7b]">
                {s.body}
              </p>

              <ul className="mt-[16px] space-y-[8px] text-[16px] leading-[1.4] text-[#082b4b]">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-[8px]">
                    <span aria-hidden className="text-[#226CD5]">✔</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
