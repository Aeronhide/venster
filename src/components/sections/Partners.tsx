import Image from "next/image";
import { Section } from "@/components/ui/Section";

const partners = [
  { name: "VEKA", src: "/images/partners/veka.svg" },
  { name: "Roto", src: "/images/partners/roto.svg" },
  { name: "Saint-Gobain", src: "/images/partners/saint.svg" },
  { name: "Hoppe", src: "/images/partners/hoppe.svg" },
  { name: "Dr. Hahn", src: "/images/partners/hahn.svg" },
  { name: "greenteQ", src: "/images/partners/greente.svg" },
];

export function Partners() {
  return (
    <Section
      ariaLabelledby="partners-title"
      className="!py-12 sm:!py-16"
    >
      <div className="w-full px-2 sm:px-4 lg:px-6">
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
              className="flex h-[100px] items-center justify-center rounded-[16px] bg-white px-6"
            >
              <Image
                src={p.src}
                alt={p.name}
                width={140}
                height={56}
                className="h-[56px] w-auto max-w-full object-contain"
              />
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
