import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

type Member = {
  name: string;
  role: string;
  body: string;
  image: string;
};

// Tilda blocks rec1763549301 (title) + rec1763549311 (T923 carousel of 4 cards).
// Title fontsize 50 → 72. Card 260 wide. Card title fs 20 → 29. Body fs ≈14 → 20.
const team: Member[] = [
  {
    name: "Ion Banari – Project & Accountability",
    role: "Projectcoördinatie & verantwoordelijkheid",
    body: "Uw project wordt beheerd door een ervaren coördinatieteam, verantwoordelijk voor communicatie, planning en oplevering.",
    image: "/images/team-1.webp",
  },
  {
    name: "Daniel Banari – Technical & Sales Consultation",
    role: "Technisch advies & offerte",
    body: "Onze sales- en technische managers helpen bij het bepalen van specificaties, prijzen en planning — helder en transparant.",
    image: "/images/team-2.webp",
  },
  {
    name: "Cristian Verejan – Design & Technical Accuracy",
    role: "Ontwerp & technische nauwkeurigheid",
    body: "Elk project wordt ontworpen door ervaren specialisten om een correcte configuratie, nauwkeurige metingen en optimale prestaties te garanderen.",
    image: "/images/team-3.webp",
  },
  {
    name: "Valentin Caț – Design & Technical Accuracy",
    role: "Ontwerp & technische nauwkeurigheid",
    body: "Elk project wordt ontworpen door ervaren specialisten om een correcte configuratie, nauwkeurige metingen en optimale prestaties te garanderen.",
    image: "/images/team-4.webp",
  },
];

export function Team() {
  return (
    <Section ariaLabelledby="team-title" className="bg-[#f5f5f5]">
      <Container>
        <h2
          id="team-title"
          className="text-center text-[28px] font-black uppercase leading-[1.3] tracking-tight text-[#082b4b] sm:text-[40px] lg:text-[72px]"
        >
          Ons project- en ondersteuningsteam
        </h2>

        <ul className="-mx-2 mt-[40px] flex snap-x snap-mandatory items-stretch gap-4 overflow-x-auto px-2 pb-4 sm:mx-auto sm:grid sm:max-w-[1500px] sm:grid-cols-2 sm:gap-[20px] sm:overflow-visible sm:px-0 sm:pb-0 lg:mt-[60px] lg:grid-cols-4">
          {team.map((m) => (
            <li
              key={m.name}
              className="flex w-[88%] shrink-0 snap-center flex-col overflow-hidden rounded-[16px] bg-white sm:w-auto sm:shrink"
            >
              <div className="relative aspect-square w-full overflow-hidden bg-[#f5f5f5]">
                <Image
                  src={m.image}
                  alt={m.name}
                  fill
                  sizes="(min-width: 1024px) 374px, (min-width: 640px) 45vw, 90vw"
                  loading="lazy"
                  className="object-cover"
                />
              </div>

              <div className="flex flex-1 flex-col p-[20px] text-center sm:p-[24px]">
                <h3 className="text-[18px] font-semibold leading-[1.3] text-[#082b4b] sm:text-[20px]">
                  {m.name}
                </h3>
                <p className="mt-[12px] text-[15px] leading-[1.5] text-[#191919] sm:text-[16px]">
                  <strong className="font-bold">{m.role}</strong>
                  <br />
                  {m.body}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
