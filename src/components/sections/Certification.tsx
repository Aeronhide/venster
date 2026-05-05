import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { CheckIcon } from "@/components/ui/Icon";

const CERT_IMAGES = [
  "/images/tild6332-6463-4533-b430-656430623637__clasa_a_weng_1510201.webp",
  "/images/tild3966-6363-4464-b534-633266393333__recycled_content_vek.webp",
  "/images/tild3463-6236-4434-a435-626361326264__ro_profile_clasa_a_-.webp",
  "/images/tild3131-3763-4763-a334-323835393264__ro_profile_clasa_a_-.webp",
];

export function Certification() {
  return (
    <Section
      id="rec1337102001"
      ariaLabel="Certificering en kwaliteitsgarantie"
      className="bg-[#f9f9f9]"
    >
      <Container>
        <div className="mx-auto max-w-[1675px] space-y-[150px]">
          {/* Block 1 — rec1337102001: CE 10-jaar garantie dark card */}
          <article className="overflow-hidden rounded-[16px] bg-[#36383c] px-6 pt-10 text-white sm:px-8 sm:pt-12 lg:px-[60px] lg:pt-[60px]">
            <div className="grid gap-10 lg:grid-cols-[1fr_760px] lg:items-end lg:gap-12">
              {/* Left — heading + inner small "garantie dekt" card */}
              <div className="pb-10 sm:pb-12 lg:pb-[60px]">
                <h2 className="text-[26px] font-extrabold leading-[1.4] sm:text-[36px] lg:text-[52px]">
                  VALENT-producten zijn{" "}
                  <span className="text-[#116cd4]">CE-gecertificeerd</span> en
                  omvatten een verlengde garantie van 10 jaar, zoals vermeld in
                  het contract
                </h2>

                <div className="mt-10 inline-flex items-center gap-5 rounded-[12px] border border-[#505355] bg-[#404246] px-6 py-5 lg:h-[144px] lg:w-full lg:max-w-[672px]">
                  <span className="grid size-[59px] shrink-0 place-items-center rounded-[6px] bg-[radial-gradient(circle_at_center,#3b7ddd_0%,#7ba6e6_100%)]">
                    <CheckIcon className="text-white" width={28} height={28} />
                  </span>
                  <p className="text-[18px] leading-[1.4] text-[#d9d9d9] lg:text-[29px]">
                    De garantie dekt PVC-profielen,
                    <br />
                    isolatieglas en beslag
                  </p>
                </div>
              </div>

              {/* Right — valent.png pinned to the bottom of the card, fixed 500px tall */}
              <div className="relative mx-auto h-[500px] w-full max-w-[760px]">
                <Image
                  src="/images/valent.png"
                  alt="VALENT certificering"
                  fill
                  sizes="(min-width: 1024px) 760px, 80vw"
                  className="object-contain object-bottom"
                />
              </div>
            </div>
          </article>

          {/* Block 2 — rec1763536941: Klasse A keurmerk + 4 certificate scans */}
          <article className="flex flex-col overflow-hidden rounded-[16px] bg-[#36383c] px-6 pt-10 text-white sm:px-8 sm:pt-12 lg:px-[60px] lg:pt-[60px]">
            <h2 className="text-[26px] font-extrabold leading-[1.4] sm:text-[36px] lg:text-[52px]">
              <strong className="text-[#7bb1ff]">VALENT </strong>
              produceert ramen met Europese PVC-profielen van klasse A, getest
              op langdurige duurzaamheid, structurele stabiliteit en
              milieuveiligheid, vervaardigd met loodvrije (Pb-vrije) materialen
              en conform de geldende EU-normen en regelgeving.
            </h2>

            {/* 4 certificate scans — fixed 320×415, border on top + sides only (#5a91e1) */}
            <ul className="mt-12 grid grid-cols-2 justify-items-center gap-6 sm:grid-cols-4 lg:mt-16 lg:gap-[58px]">
              {CERT_IMAGES.map((src, i) => (
                <li
                  key={src + i}
                  className="relative h-[415px] w-full max-w-[320px] overflow-hidden rounded-t-[12px] [border-top:1px_solid_#5a91e1] [border-left:1px_solid_#5a91e1] [border-right:1px_solid_#5a91e1] [border-bottom:none] bg-[radial-gradient(circle_at_center,rgba(59,125,221,1)_67%,rgba(123,166,230,1)_100%)]"
                >
                  <Image
                    src={src}
                    alt={`Klasse A certificaat ${i + 1}`}
                    fill
                    sizes="(min-width: 1024px) 320px, 40vw"
                    className="object-contain object-bottom px-4"
                  />
                </li>
              ))}
            </ul>
          </article>
        </div>
      </Container>
    </Section>
  );
}
