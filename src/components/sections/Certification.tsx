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
    <Section ariaLabel="Certificering en kwaliteitsgarantie" className="bg-[#f9f9f9]">
      <Container>
        <div className="mx-auto max-w-[1675px] space-y-6">
          {/* Block 1 — rec1337102001: CE 10-jaar garantie dark card */}
          <article className="overflow-hidden rounded-[16px] bg-[#36383c] px-6 py-10 text-white sm:px-10 sm:py-14 lg:px-[108px] lg:py-[102px]">
            <div className="grid gap-10 lg:grid-cols-[1fr_488px] lg:items-center lg:gap-16">
              {/* Left — heading + inner small "garantie dekt" card */}
              <div>
                {/* Heading — Tilda 36px × 1.44 ≈ 52px, color #fff, weight 800, line 1.4 */}
                <h2 className="text-[26px] font-extrabold leading-[1.4] sm:text-[36px] lg:text-[52px]">
                  VALENT-producten zijn{" "}
                  <span className="text-[#116cd4]">CE-gecertificeerd</span> en
                  omvatten een verlengde garantie van 10 jaar, zoals vermeld in
                  het contract
                </h2>

                {/* Inner card — Tilda 467×100 ≈ 672×144, radius 12, bg #404246, border #505355 */}
                <div className="mt-10 inline-flex items-center gap-5 rounded-[12px] border border-[#505355] bg-[#404246] px-6 py-5 lg:h-[144px] lg:w-full lg:max-w-[672px]">
                  {/* Blue check tile — Tilda 41×1.44 ≈ 59 */}
                  <span className="grid size-[59px] shrink-0 place-items-center rounded-[6px] bg-[radial-gradient(circle_at_center,#3b7ddd_0%,#7ba6e6_100%)]">
                    <CheckIcon className="text-white" width={28} height={28} />
                  </span>
                  {/* Text — Tilda 20px × 1.44 ≈ 29px, color #d9d9d9, line 1.4 */}
                  <p className="text-[18px] leading-[1.4] text-[#d9d9d9] lg:text-[29px]">
                    De garantie dekt PVC-profielen,
                    <br />
                    isolatieglas en beslag
                  </p>
                </div>
              </div>

              {/* Right — circle badge + photo composition */}
              <div className="relative mx-auto h-[460px] w-full max-w-[488px]">
                {/* Big radial circle — Tilda 232×230 ≈ 334×331, blue radial gradient, white border */}
                <div className="absolute right-[10%] top-0 size-[240px] rounded-full border border-[#f5f5f5] bg-[radial-gradient(circle_at_center,#3b7ddd_0%,#7ba6e6_100%)] sm:size-[300px] lg:size-[334px]" />
                {/* Inner circle — Tilda 203×202 ≈ 292×291, blue radial, lighter border */}
                <div className="absolute right-[12%] top-[20px] grid size-[210px] place-items-center rounded-full border border-[#7bb1ff] bg-[radial-gradient(circle_at_center,#3b7ddd_0%,#7ba6e6_100%)] text-center text-white sm:size-[260px] lg:size-[292px]">
                  <span className="px-2">
                    {/* "10 JAAR" — Tilda 30px × 1.44 ≈ 43px */}
                    <span className="block text-[28px] font-extrabold uppercase leading-[1.3] lg:text-[43px]">
                      10 JAAR
                    </span>
                    {/* "productgarantie" — Tilda 20px × 1.44 ≈ 29px */}
                    <span className="block text-[18px] leading-[1.3] text-[#d9d9d9] lg:text-[29px]">
                      productgarantie
                    </span>
                  </span>
                </div>

                {/* CE Conformity placard — Tilda 488×300, white bg with shadow */}
                <div className="absolute bottom-0 right-0 grid w-full max-w-[488px] gap-2 bg-white px-6 py-5 text-[12px] text-[#222] shadow-[20px_-30px_100px_0px_rgba(44,44,44,0.5)] sm:text-[14px] lg:px-8 lg:py-7">
                  <p className="font-bold">CE Conformiteitsverklaring</p>
                  <p>Venster 1 — Softline 82 MD NL</p>
                  <p>Productnaam: raam- of deursysteem</p>
                  <p>Warmtedoorgangscoëfficiënt: 0.82 W/m²K</p>
                  <p>Luchtdoorlatendheid (SR EN 1027): Class 4</p>
                  <p>Waterdichtheid (SR EN 1027:2001): 7A</p>
                  <p>Geluidsisolatiecoëfficiënt Rw: C4</p>
                </div>
              </div>
            </div>
          </article>

          {/* Block 2 — rec1763536941: Klasse A keurmerk + 4 certificate scans */}
          <article className="overflow-hidden rounded-[16px] bg-[#36383c] px-6 py-10 text-white sm:px-10 sm:py-14 lg:px-[108px] lg:py-[124px]">
            {/* Heading — Tilda 36px × 1.44 ≈ 52px, color #fff, weight 800, line 1.4 */}
            <h2 className="text-[26px] font-extrabold leading-[1.4] sm:text-[36px] lg:text-[52px]">
              <strong className="text-[#7bb1ff]">VALENT </strong>
              produceert ramen met Europese PVC-profielen van klasse A, getest
              op langdurige duurzaamheid, structurele stabiliteit en
              milieuveiligheid, vervaardigd met loodvrije (Pb-vrije) materialen
              en conform de geldende EU-normen en regelgeving.
            </h2>

            {/* 4 certificate scans — Tilda 220×284 ≈ 317×409 each, blue gradient ribbon behind */}
            <ul className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4 lg:mt-16 lg:gap-[58px]">
              {CERT_IMAGES.map((src, i) => (
                <li
                  key={src + i}
                  className="relative grid place-items-center pt-6"
                >
                  {/* Blue radial backdrop ribbon — Tilda 220×284 ≈ 317×409, only top corners rounded */}
                  <div className="absolute inset-x-0 top-0 -z-0 h-full rounded-t-[12px] border border-[#505355] bg-[radial-gradient(circle_at_center,rgba(59,125,221,1)_67%,rgba(123,166,230,1)_100%)] opacity-80" />
                  {/* Cert image — Tilda 192×272 ≈ 277×392, no rounding */}
                  <Image
                    src={src}
                    alt={`Klasse A certificaat ${i + 1}`}
                    width={1680}
                    height={2377}
                    className="relative z-10 h-auto w-full max-w-[277px] object-contain"
                    sizes="(min-width: 1024px) 277px, 40vw"
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
