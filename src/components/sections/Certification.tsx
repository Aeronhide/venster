import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export function Certification() {
  return (
    <Section ariaLabel="Certificering en kwaliteitsgarantie" className="bg-white">
      <Container>
        <article className="relative overflow-hidden rounded-[22px] bg-[#1f2530] p-8 text-white sm:p-12 lg:p-16">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
            <div>
              <h2 className="text-2xl font-bold leading-snug sm:text-3xl lg:text-[36px]">
                VALENT-producten zijn{" "}
                <span className="text-[#3b82f6]">CE-gecertificeerd</span> en
                omvatten een verlengde garantie van 10 jaar, zoals vermeld in
                het contract
              </h2>

              <div className="mt-8 inline-flex items-center gap-3 rounded-md bg-white/5 p-4 ring-1 ring-white/10">
                <span className="grid size-[44px] shrink-0 place-items-center rounded-md bg-[#3b82f6]">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    aria-hidden
                    fill="none"
                    stroke="white"
                    strokeWidth={3}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <p className="text-sm leading-snug text-white/85 sm:text-base">
                  De garantie dekt PVC-profielen,
                  <br />
                  isolatieglas en beslag
                </p>
              </div>
            </div>

            <div className="relative mt-4 flex items-center justify-center">
              <span className="absolute right-[15%] top-0 grid size-[120px] place-items-center rounded-full bg-[#3b82f6] text-center text-white shadow-lg sm:size-[150px]">
                <span>
                  <span className="block text-2xl font-bold sm:text-3xl">
                    10 JAAR
                  </span>
                  <span className="text-xs sm:text-sm">productgarantie</span>
                </span>
              </span>
              <div className="mt-16 grid gap-2 rounded bg-white/95 px-4 py-3 text-[10px] text-fg sm:text-xs">
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

        <article className="mt-6 overflow-hidden rounded-[22px] bg-[#1f2530] p-8 text-white sm:p-12 lg:p-16">
          <p className="text-base leading-7 sm:text-lg">
            <strong className="text-[#3b82f6]">VALENT</strong> produceert ramen
            met Europese PVC-profielen van klasse A, getest op langdurige
            duurzaamheid, structurele stabiliteit en milieuveiligheid,
            vervaardigd met loodvrije (Pb-vrije) materialen en conform de
            geldende EU-normen en regelgeving.
          </p>

          <ul className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
            {Array.from({ length: 4 }).map((_, i) => (
              <li
                key={i}
                className="grid aspect-[3/4] place-items-center rounded-lg bg-white p-3 text-[8px] text-fg/70"
              >
                <CertificateMock />
              </li>
            ))}
          </ul>
        </article>
      </Container>
    </Section>
  );
}

function CertificateMock() {
  return (
    <div className="grid h-full w-full place-items-center text-center leading-tight">
      <div className="space-y-1">
        <div className="mx-auto h-2 w-1/2 rounded bg-fg/20" />
        <div className="mx-auto h-1 w-1/3 rounded bg-fg/10" />
        <div className="mx-auto mt-2 h-12 w-full rounded bg-fg/5" />
        <div className="mx-auto mt-1 h-12 w-full rounded bg-fg/5" />
        <div className="mx-auto mt-2 h-1 w-1/4 rounded bg-fg/10" />
      </div>
    </div>
  );
}
