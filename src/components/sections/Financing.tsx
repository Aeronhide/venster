import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

const FAMILY_IMG = "/images/financing-family.webp";

const steps = [
  { icon: "/icons/check-mark.svg", label: "controle van de geschiktheid" },
  { icon: "/icons/envelope.svg", label: "technische specificaties" },
  { icon: "/icons/support-help.png", label: "ondersteuning bij de aanvraag" },
];

export function Financing() {
  return (
    <Section id="financiering" ariaLabelledby="financing-title">
      <Container>
        <div className="mx-auto max-w-7xl">
        <h2
          id="financing-title"
          className="text-center text-3xl font-black uppercase tracking-tight text-brand-ink sm:text-4xl lg:text-[44px] lg:leading-[1.5]"
        >
          Nieuwe ramen vanaf ca.{" "}
          <span className="text-[#346de1]">€50 per maand</span> –
          <br />
          via het Nationaal Warmtefonds
        </h2>

        <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-12">
          <div className="overflow-hidden rounded-[22px]">
            <Image
              src={FAMILY_IMG}
              alt="Familie krijgt advies over energiezuinige ramen"
              width={864}
              height={576}
              className="h-full w-full object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>

          <div className="flex flex-col">
            <p className="text-base text-fg-muted leading-7">
              Wilt u uw woning energiezuiniger maken, maar liever geen grote
              investering in één keer doen? Wij helpen u bij het verkrijgen van
              nieuwe ramen{" "}
              <strong className="font-bold">vanaf ongeveer €50 per maand</strong>{" "}
              via het{" "}
              <strong className="font-bold">Nationaal Warmtefonds.</strong>
            </p>

            <p className="mt-7 text-sm font-bold uppercase text-fg">
              <span className="text-[#346de1]">VALENT</span> begeleidt u stap
              voor stap:
            </p>

            <ul className="mt-6 space-y-6">
              {steps.map((s) => (
                <li key={s.label} className="flex items-center gap-5">
                  <span className="grid size-[64px] shrink-0 place-items-center rounded-full bg-brand">
                    <Image
                      src={s.icon}
                      alt=""
                      width={36}
                      height={36}
                      className="invert brightness-0"
                    />
                  </span>
                  <span className="text-base font-bold text-fg-muted">
                    {s.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12">
          <p className="text-sm uppercase text-fg">
            Zo profiteert u van energiezuinige ramen
          </p>
          <p className="mt-2 text-sm font-bold uppercase text-[#346de1]">
            Zonder financiële druk vooraf.
          </p>

          <a
            href="#contact"
            className="mt-6 inline-flex h-[68px] items-center justify-center rounded-md bg-[#226cd5] px-10 text-base font-bold text-white shadow-[var(--shadow-cta)]"
          >
            Vraag vrijblijvend advies aan
          </a>
        </div>
        </div>
      </Container>
    </Section>
  );
}
