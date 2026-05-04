import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

const PRODUCT_IMG = "/images/brands-product-section.webp";
const BRANDS_IMG = "/images/brands-logos.webp";

export function Features() {
  return (
    <Section id="merken" ariaLabel="Onze merken en componenten" className="bg-white">
      <Container>
        <div className="mx-auto max-w-7xl rounded-[22px] bg-surface p-4 sm:p-6 lg:p-8">
          <div className="grid gap-6 lg:grid-cols-2 lg:items-stretch">
            <div className="overflow-hidden rounded-[22px] bg-white ring-1 ring-[#ddd]">
              <div className="relative aspect-[4/5] sm:aspect-[16/12]">
                <Image
                  src={PRODUCT_IMG}
                  alt="Doorsnede van een PVC raam met meervoudig glas en kamerprofiel"
                  fill
                  sizes="(min-width: 1024px) 45vw, 90vw"
                  loading="lazy"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <div className="overflow-hidden rounded-[22px] bg-white ring-1 ring-[#ddd]">
                <div className="relative aspect-[16/9]">
                  <Image
                    src={BRANDS_IMG}
                    alt="Logo's van VEKA, ROTO en SAINT-GOBAIN componenten"
                    fill
                    sizes="(min-width: 1024px) 45vw, 90vw"
                    loading="lazy"
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="px-2 text-lg leading-7 text-fg sm:text-[18px] sm:leading-[28px]">
                <p>
                  Onze producten worden gemaakt met PVC-profielen van het
                  gerenommeerde Duitse merk{" "}
                  <strong className="font-bold text-[#2d2c90]">VEKA</strong>,
                  duurzaam hang- en sluitwerk van{" "}
                  <strong className="font-bold text-[#c40000]">ROTO</strong> en
                  energie-efficiënt glas geleverd door de Franse fabrikant{" "}
                  <strong className="font-bold text-[#404d42]">
                    SAINT-GOBAIN
                  </strong>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
