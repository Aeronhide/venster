"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { useT } from "@/components/LanguageProvider";

const DEFAULT_PRODUCT_IMAGES = [
  "/images/product-pvc-ramen.webp",
  "/images/product-voordeuren.webp",
  "/images/product-schuifdeuren.webp",
  "/images/product-rolluiken.webp",
];

const CTA =
  "mt-auto inline-flex h-[64px] w-full items-center justify-center rounded-[16px] bg-[#226CD5] text-[18px] font-bold capitalize text-white text-center [font-family:Roboto,Arial,sans-serif] sm:h-[80px] sm:text-[22px] lg:h-[104px] lg:text-[29px]";

type ProductsProps = { images?: readonly string[] };

export function Products({ images = DEFAULT_PRODUCT_IMAGES }: ProductsProps = {}) {
  const t = useT();
  const products = t.products.items.map((item, i) => ({
    ...item,
    image: images[i] ?? DEFAULT_PRODUCT_IMAGES[i],
  }));
  return (
    <Section
      id="products"
      ariaLabelledby="producten-title"
      className="bg-[#f9f9f9]"
    >
      <Container>
        <div className="mx-auto max-w-[1672px]">
          <h2
            id="producten-title"
            className="text-center text-[28px] font-black uppercase leading-[1.55] text-[#082b4b] [font-family:Roboto,Arial,sans-serif] sm:text-[40px] lg:text-[63px]"
          >
            {t.products.title}
          </h2>

          <ul className="mt-[48px] grid gap-[24px] sm:grid-cols-2 lg:grid-cols-4 lg:gap-[24px]">
            {products.map((p, idx) => (
              <li
                key={`${p.title}-${idx}`}
                className="flex flex-col rounded-[16px] bg-white p-[20px] shadow-[3px_0_20px_rgba(80,80,80,0.1)] sm:p-[28px] lg:p-[36px]"
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

                <h3 className="mt-[24px] text-[22px] font-bold leading-[1.3] text-[#082b4b] [font-family:Roboto,Arial,sans-serif] sm:text-[28px] lg:text-[35px]">
                  {p.title}
                </h3>

                <ul className="mt-[16px] mb-[24px] flex-1 list-disc space-y-[8px] pl-[24px] text-[18px] leading-[1.55] text-[#3e3e3e] marker:text-[#226CD5] [font-family:Roboto,Arial,sans-serif] sm:mb-[36px] lg:mb-[48px] lg:text-[23px]">
                  {p.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>

                <a href="#zeropopup" className={CTA}>
                  {t.products.cta}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
}
