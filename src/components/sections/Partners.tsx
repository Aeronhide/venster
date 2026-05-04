import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

const partners = [
  { name: "VEKA", style: "font-black text-2xl tracking-tight text-black" },
  { name: "Roto", style: "font-bold text-2xl text-[#c40000]" },
  { name: "VBH", style: "font-bold text-2xl text-fg-muted" },
  { name: "OPP", style: "font-bold text-xl text-[#9bbcd6]" },
  { name: "Dr.Hahn", style: "font-bold text-xl text-black" },
  { name: "greenteQ", style: "font-bold text-xl text-[#85a86c]" },
];

export function Partners() {
  return (
    <Section ariaLabelledby="partners-title" className="bg-white !py-12 sm:!py-16">
      <Container>
        <div className="mx-auto max-w-7xl">
        <div className="grid gap-6 lg:grid-cols-[auto_1fr] lg:items-center lg:gap-16">
          <h2
            id="partners-title"
            className="text-2xl font-bold tracking-tight text-fg sm:text-3xl"
          >
            Onze partners
          </h2>
          <p className="text-sm text-fg-muted sm:text-right sm:text-base">
            Onze Duitse partners vertrouwen VALENT
            <br className="hidden sm:block" />
            en waarborgen de kwaliteit van elk raam
          </p>
        </div>

        <ul className="mt-10 grid grid-cols-3 items-center gap-6 sm:grid-cols-6 sm:gap-8">
          {partners.map((p) => (
            <li
              key={p.name}
              className="flex h-20 items-center justify-center rounded-md bg-white px-4 ring-1 ring-border/40 shadow-sm"
            >
              <span className={p.style}>{p.name}</span>
            </li>
          ))}
        </ul>
        </div>
      </Container>
    </Section>
  );
}
