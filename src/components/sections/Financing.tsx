import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

const FAMILY_IMG = "/images/financing-family.webp";

const steps = [
  { label: "controle van de geschiktheid", icon: "/images/financing/check.svg" },
  { label: "technische specificaties", icon: "/images/financing/specs.svg" },
  { label: "ondersteuning bij de aanvraag", icon: "/images/question_mark.png" },
];

export function Financing() {
  return (
    <Section
      id="financing"
      ariaLabelledby="financing-title"
      className="!pt-0"
    >
      <Container>
        <div className="mx-auto max-w-[1488px]">
          {/* Title — Tilda 44px × 1.44 ≈ 63px */}
          <h2
            id="financing-title"
            className="text-center text-[28px] font-black uppercase leading-[1.4] tracking-tight text-[#082b4b] sm:text-[40px] lg:text-[63px] lg:leading-[1.55]"
          >
            Nieuwe ramen vanaf ca.{" "}
            <span className="text-[#006bd5]">€50 per maand</span> – via het
            Nationaal Warmtefonds
          </h2>

          {/* Two-column: left ~55% (image + footer text + CTA), right ~45% (text + bullets) */}
          <div className="mt-12 grid gap-10 lg:grid-cols-[55fr_45fr] lg:items-start lg:gap-[60px]">
            {/* LEFT column */}
            <div className="flex flex-col gap-[60px]">
              {/* Family photo */}
              <div className="overflow-hidden rounded-[22px]">
                <Image
                  src={FAMILY_IMG}
                  alt="Familie krijgt advies over energiezuinige ramen"
                  width={1280}
                  height={854}
                  loading="lazy"
                  className="h-auto w-full object-cover"
                  sizes="(min-width: 1024px) 55vw, 100vw"
                />
              </div>

              {/* Footer text + CTA, sits below the image with 60px gap */}
              <div>
                <p className="text-[18px] uppercase leading-[1.3] text-[#191919] lg:text-[22px]">
                  Zo profiteert u van energiezuinige ramen{" "}
                  <strong className="font-bold text-[#006bd5]">
                    zonder financiële druk vooraf.
                  </strong>
                </p>

                <a
                  href="#zeropopup"
                  className="mt-8 inline-flex h-[64px] w-full max-w-[430px] items-center justify-center rounded-[16px] bg-[#226CD5] px-8 text-center text-[20px] font-bold capitalize text-white [font-family:Roboto,Arial,sans-serif] sm:h-[80px] lg:h-[86px] lg:text-[24px]"
                >
                  Vraag vrijblijvend advies aan
                </a>
              </div>
            </div>

            {/* RIGHT column — body + sub-heading + 3 bullets */}
            <div className="flex flex-col">
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

              <p className="mt-[28px] text-[20px] uppercase leading-[1] text-[#191919] lg:mt-[40px] lg:text-[29px]">
                <strong className="font-bold text-[#006bd5]">VALENT</strong>{" "}
                begeleidt u stap voor stap:
              </p>

              <ul className="mt-8 space-y-6">
                {steps.map((s) => {
                  const isQuestion = s.icon.endsWith("question_mark.png");
                  return (
                    <li key={s.label} className="flex items-center gap-4 lg:gap-5">
                      <span className="grid size-[44px] shrink-0 place-items-center rounded-full bg-[#006bd5] lg:size-[65px]">
                        <Image
                          src={s.icon}
                          alt=""
                          width={isQuestion ? 44 : 30}
                          height={isQuestion ? 44 : 30}
                          loading="lazy"
                          className={
                            isQuestion
                              ? "h-[28px] w-[28px] lg:h-[44px] lg:w-[44px]"
                              : "h-[20px] w-[20px] lg:h-[30px] lg:w-[30px]"
                          }
                        />
                      </span>
                      <span className="text-[20px] font-bold text-[#505050] lg:text-[23px]">
                        {s.label}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
