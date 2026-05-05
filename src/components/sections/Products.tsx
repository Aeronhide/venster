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
  "mt-auto inline-flex h-[48px] w-full items-center justify-center rounded-[16px] bg-[#226CD5] text-[13px] font-bold capitalize text-white text-center [font-family:Roboto,Arial,sans-serif] sm:h-[64px] sm:text-[18px] md:h-[80px] md:text-[22px] lg:h-[104px] lg:text-[29px]";

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
            className="text-center text-[22px] font-black uppercase leading-[1.3] text-[#082b4b] [font-family:Roboto,Arial,sans-serif] sm:text-[30px] md:text-[40px] lg:text-[63px]"
          >
            {t.products.title}
          </h2>

          <ul className="mt-[28px] grid grid-cols-2 gap-[12px] sm:mt-[48px] sm:gap-[24px] lg:grid-cols-4 lg:gap-[24px]">
            {products.map((p, idx) => (
              <li
                key={`${p.title}-${idx}`}
                className="flex flex-col rounded-[16px] bg-white p-[12px] shadow-[3px_0_20px_rgba(80,80,80,0.1)] sm:p-[24px] md:p-[28px] lg:p-[36px]"
              >
                <div className="relative aspect-[245/230] overflow-hidden rounded-[12px] bg-[#f5f5f5]">
                  <Image
                    src={p.image}
                    alt={p.alt}
                    fill
                    sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 45vw"
                    loading="lazy"
                    className="object-cover"
                  />
                </div>

                <h3 className="mt-[14px] text-[16px] font-bold leading-[1.25] text-[#082b4b] [font-family:Roboto,Arial,sans-serif] sm:mt-[24px] sm:text-[22px] md:text-[28px] lg:text-[35px]">
                  {p.title}
                </h3>

                <ul className="mt-[10px] mb-[16px] flex-1 list-disc space-y-[6px] pl-[20px] text-[14px] leading-[1.45] text-[#3e3e3e] marker:text-[#226CD5] [font-family:Roboto,Arial,sans-serif] sm:mt-[16px] sm:mb-[24px] sm:space-y-[8px] sm:pl-[24px] sm:text-[16px] md:mb-[36px] md:text-[18px] lg:mb-[48px] lg:text-[23px]">
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
