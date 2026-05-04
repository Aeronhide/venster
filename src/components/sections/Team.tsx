import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

type Member = {
  name: string;
  role: string;
  body: string;
  image: string;
};

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
    <Section ariaLabelledby="team-title" className="bg-white">
      <Container>
        <h2
          id="team-title"
          className="text-center text-3xl font-black uppercase leading-tight tracking-tight text-brand-ink sm:text-4xl lg:text-[44px] lg:leading-[1.15]"
        >
          Ons project- en
          <br />
          ondersteuningsteam
        </h2>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((m) => (
            <li
              key={m.name}
              className="flex flex-col overflow-hidden rounded-2xl bg-white p-4 shadow-sm ring-1 ring-border/40"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-surface">
                <Image
                  src={m.image}
                  alt={m.name}
                  fill
                  sizes="(min-width: 1024px) 22vw, 45vw"
                  loading="lazy"
                  className="object-cover"
                />
              </div>
              <h3 className="mt-5 text-sm font-bold text-brand-ink">
                {m.name}
              </h3>
              <p className="mt-1 text-xs font-bold text-brand-ink">{m.role}</p>
              <p className="mt-3 text-xs leading-relaxed text-fg-muted">
                {m.body}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
