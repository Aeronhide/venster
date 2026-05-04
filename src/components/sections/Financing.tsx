import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { CheckIcon } from "@/components/ui/Icon";

const FAMILY_IMG = "/images/financing-family.webp";

const steps = [
  "controle van de geschiktheid",
  "technische specificaties",
  "ondersteuning bij de aanvraag",
];

export function Financing() {
  return (
    <Section id="financiering" ariaLabelledby="financing-title">
      <Container>
        <div className="mx-auto max-w-[1488px]">
          {/* Title — Tilda 44px × 1.44 ≈ 63px, color #082b4b, weight 900 */}
          <h2
            id="financing-title"
            className="text-center text-[28px] font-black uppercase leading-[1.4] tracking-tight text-[#082b4b] sm:text-[40px] lg:text-[63px] lg:leading-[1.55]"
          >
            Nieuwe ramen vanaf ca.{" "}
            <span className="text-[#346de1]">€50 per maand</span> – via het
            Nationaal Warmtefonds
          </h2>

          {/* Two-column layout: left = family photo, right = body + bullets + CTA */}
          <div className="mt-12 grid gap-10 lg:grid-cols-[600px_1fr] lg:items-start lg:gap-[94px]">
            {/* Family photo — Tilda 600x400 ≈ 864x576, rounded-22 */}
            <div className="overflow-hidden rounded-[22px]">
              <Image
                src={FAMILY_IMG}
                alt="Familie krijgt advies over energiezuinige ramen"
                width={1280}
                height={854}
                className="h-auto w-full object-cover"
                sizes="(min-width: 1024px) 600px, 100vw"
              />
            </div>

            {/* Right column */}
            <div className="flex flex-col">
              {/* Body — Tilda 16px × 1.44 ≈ 23px, color #505050, line 1.5 */}
              <p className="text-[18px] leading-[1.5] text-[#505050] lg:text-[23px]">
                Wilt u uw woning energiezuiniger maken, maar liever geen grote
                investering in één keer doen?
                <br />
                Wij helpen u bij het verkrijgen van nieuwe ramen{" "}
                <strong className="font-bold">
                  vanaf ongeveer €50 per maand
                </strong>{" "}
                via het{" "}
                <strong className="font-bold">Nationaal Warmtefonds.</strong>
              </p>

              {/* Sub-heading — Tilda 20px × 1.44 ≈ 29px, uppercase */}
              <p className="mt-[40px] text-[20px] uppercase leading-[1] text-[#191919] lg:text-[29px]">
                <strong className="font-bold text-[#346de1]">VALENT</strong>{" "}
                begeleidt u stap voor stap:
              </p>

              {/* 3 numbered icon-bullets. Tilda circle 45×1.44 ≈ 65, bg #006bd5 */}
              <ul className="mt-8 space-y-6">
                {steps.map((label) => (
                  <li key={label} className="flex items-center gap-5">
                    <span className="grid size-[65px] shrink-0 place-items-center rounded-full bg-[#006bd5]">
                      <CheckIcon className="text-white" width={28} height={28} />
                    </span>
                    <span className="text-[18px] font-bold text-[#505050] lg:text-[23px]">
                      {label}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Footer line + CTA */}
              <div className="mt-[60px]">
                <p className="text-[18px] uppercase leading-[1] text-[#191919] lg:text-[29px]">
                  Zo profiteert u van energiezuinige ramen{" "}
                  <strong className="font-bold text-[#346de1]">
                    zonder financiële druk vooraf.
                  </strong>
                </p>

                {/* Blue CTA — canonical style: bg-[#226CD5] text-white font-bold uppercase rounded-[16px] */}
                <a
                  href="#zeropopup"
                  className="mt-8 inline-flex h-[72px] w-full max-w-[432px] items-center justify-center rounded-[16px] bg-[#226CD5] px-8 text-center text-[18px] font-bold capitalize text-white [font-family:Roboto,Arial,sans-serif] transition-colors hover:bg-[#66a6e6] lg:text-[20px]"
                >
                  Vraag vrijblijvend advies aan
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
