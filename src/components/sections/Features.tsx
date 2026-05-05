import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

// Tilda block rec1337101961 — Brands / components
// Outer wrapper bg #ffffff
// Inner container: 1160×583 (×1.44 → ~1670×839), bg #f5f5f5, rounded 22
// Left card: 530×561 (×1.44 → 763×808) bg white rounded 22 — window cross-section image
// Right top card: 530×447 (×1.44 → 763×644) rounded 22 — brand logos image
// Right body text: 18px (×1.44 = 26px), color #000000, line-height 1.55, weight 400, width 468 (×1.44 = 674)
// Brand colors (from inline styles):
//   VEKA  rgb(45, 44, 144)  → #2d2c90
//   ROTO  rgb(233, 8, 8)    → #e90808
//   SAINT-GOBAIN rgb(64, 77, 66) → #404d42

const PRODUCT_IMG = "/images/brands-product-section.webp";
const BRANDS_IMG = "/images/brands-logos.webp";

export function Features() {
  return (
    <Section
      id="features"
      ariaLabel="Onze merken en componenten"
      className="bg-white"
    >
      <Container>
        <div className="mx-auto max-w-[1672px] rounded-[22px] bg-[#f5f5f5] p-4 sm:p-6 lg:p-[40px]">
          <div className="grid gap-[24px] lg:grid-cols-2 lg:items-center">
            {/* Left — window cross-section */}
            <div className="overflow-hidden rounded-[22px] border border-[#DDDDDD] bg-white">
              <div className="relative aspect-[530/561]">
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

            {/* Right — image + body text wrapped in a single rounded card */}
            <div className="flex max-h-[640px] flex-col gap-[32px] overflow-hidden rounded-[22px] bg-[#DDDDDD] p-[32px] lg:p-[40px]">
              <div className="overflow-hidden rounded-[16px] bg-white">
                <div className="relative aspect-[530/447]">
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

              <p className="max-w-[674px] text-[20px] font-normal leading-[1.55] text-[#000000] [font-family:Roboto,Arial,sans-serif] lg:text-[26px]">
                Onze producten worden gemaakt met PVC-profielen van het
                gerenommeerde Duitse merk{" "}
                <strong className="font-bold text-[#2d2c90]">VEKA</strong>,
                duurzaam hang- en sluitwerk van{" "}
                <strong className="font-bold text-[#e90808]">ROTO</strong> en
                energie-efficiënt glas geleverd door de Franse fabrikant{" "}
                <strong className="font-bold text-[#404d42]">
                  SAINT-GOBAIN
                </strong>
                .
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
