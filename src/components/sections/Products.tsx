import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

// Tilda block rec1337101951 — "ONTDEK ONZE PRODUCTEN"
// Background #f9f9f9
// Heading: 44px (×1.44 = 63px), font-weight 900, color #082b4b, uppercase, centered
// Cards (4): 281×549 (×1.44 → 405×791), bg white, rounded 16, shadow 3px 0 20px rgba(80,80,80,0.1)
//   Inner image: 245×230 (×1.44 → 353×331) rounded 12
//   Card title: 24px (×1.44 = 35px) font-bold, color #082b4b
//   Bullet text: 16px (×1.44 = 23px), color #3e3e3e
//   CTA "Meer informatie": 245×72 (×1.44 → 353×104), font 20×1.44=29px,
//     bg #226CD5 text-white font-bold uppercase rounded-[16px] (project rule)

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

const CTA =
  "mt-auto inline-flex h-[104px] w-full items-center justify-center rounded-[16px] bg-[#226CD5] text-[24px] font-bold capitalize text-white text-center [font-family:Roboto,Arial,sans-serif] lg:text-[29px]";

export function Products() {
  return (
    <Section
      id="rec1337101951"
      ariaLabelledby="producten-title"
      className="bg-[#f9f9f9]"
    >
      <Container>
        <div className="mx-auto max-w-[1672px]">
          <h2
            id="producten-title"
            className="text-center text-[40px] font-black uppercase leading-[1.55] text-[#082b4b] [font-family:Roboto,Arial,sans-serif] sm:text-[52px] lg:text-[63px]"
          >
            ONTDEK ONZE PRODUCTEN
          </h2>

          <ul className="mt-[48px] grid gap-[24px] sm:grid-cols-2 lg:grid-cols-4 lg:gap-[24px]">
            {products.map((p) => (
              <li
                key={p.title}
                className="flex flex-col rounded-[16px] bg-white p-[36px] shadow-[3px_0_20px_rgba(80,80,80,0.1)]"
              >
                <div className="relative aspect-[245/230] overflow-hidden rounded-[12px] bg-[#f5f5f5]">
                  <Image
                    src={p.image}
                    alt={p.alt}
                    fill
                    sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 90vw"
                    loading="lazy"
                    className="object-cover"
                  />
                </div>

                <h3 className="mt-[24px] text-[28px] font-bold leading-[1.3] text-[#082b4b] [font-family:Roboto,Arial,sans-serif] lg:text-[35px]">
                  {p.title}
                </h3>

                <ul className="mt-[16px] mb-[48px] flex-1 list-disc space-y-[8px] pl-[24px] text-[18px] leading-[1.55] text-[#3e3e3e] marker:text-[#226CD5] [font-family:Roboto,Arial,sans-serif] lg:text-[23px]">
                  {p.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>

                <a href="#zeropopup" className={CTA}>
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
