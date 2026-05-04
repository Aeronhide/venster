import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

type Product = {
  title: string;
  image: string;
  alt: string;
  bullets: string[];
};

const products: Product[] = [
  {
    title: "PVC Ramen",
    image: "/images/product-pvc-ramen.webp",
    alt: "PVC raam met luiken op een Nederlandse gevel",
    bullets: ["In appartementen", "In particuliere woningen", "Op balkons"],
  },
  {
    title: "Voordeuren",
    image: "/images/product-voordeuren.webp",
    alt: "Donkere PVC voordeur met smalle ramen",
    bullets: ["Voor toegang tot het huis", "Voor commerciële ruimtes"],
  },
  {
    title: "Schuifdeuren",
    image: "/images/product-schuifdeuren.webp",
    alt: "Schuifdeur met uitzicht op zee",
    bullets: ["Voor terrassen", "Voor balkons", "Voor prieeltjes"],
  },
  {
    title: "Rolluiken",
    image: "/images/product-rolluiken.webp",
    alt: "Modern huis met rolluiken",
    bullets: [
      "Rolluiken voor huizen",
      "Rolluiken voor appartementen",
      "Rolluiken voor winkels",
    ],
  },
];

export function Products() {
  return (
    <Section id="producten" ariaLabelledby="producten-title" className="bg-[#f9f9f9]">
      <Container>
        <div className="mx-auto max-w-7xl">
        <h2
          id="producten-title"
          className="text-center text-3xl font-black uppercase tracking-tight text-brand-ink sm:text-4xl lg:text-[44px]"
        >
          Ontdek onze producten
        </h2>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {products.map((p) => (
            <li
              key={p.title}
              className="flex flex-col overflow-hidden rounded-2xl bg-white p-4 shadow-[3px_0_20px_rgba(80,80,80,0.1)]"
            >
              <div className="relative aspect-[1/1] overflow-hidden rounded-xl bg-surface">
                <Image
                  src={p.image}
                  alt={p.alt}
                  fill
                  sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 90vw"
                  loading="lazy"
                  className="object-cover"
                />
              </div>

              <h3 className="mt-6 text-center text-2xl font-bold text-brand-ink">
                {p.title}
              </h3>

              <ul className="mt-4 flex-1 space-y-2 px-2 text-sm text-fg-muted">
                {p.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>

              <a
                href="#contact"
                className="mt-6 inline-flex h-[68px] items-center justify-center rounded-md bg-[#226cd5] px-4 text-base font-bold text-white"
              >
                Meer informatie
              </a>
            </li>
          ))}
        </ul>
        </div>
      </Container>
    </Section>
  );
}
