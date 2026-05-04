import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

const PROMO_IMG = "/images/promo-bg.webp";
const VENT_IMG = "/images/promo-ventilator.webp";

export function Promotion() {
  return (
    <Section ariaLabel="Actie 20% korting" className="bg-white">
      <Container>
        <article className="relative overflow-hidden rounded-[22px] bg-brand-ink text-white">
          <Image
            src={PROMO_IMG}
            alt=""
            role="presentation"
            fill
            sizes="(min-width: 1024px) 1024px, 100vw"
            className="absolute inset-0 -z-10 object-cover opacity-30"
          />

          <div className="relative grid gap-8 p-6 sm:p-10 lg:grid-cols-[3fr_2fr] lg:p-14">
            <div>
              <span className="absolute right-6 top-6 grid size-10 place-items-center rounded-md bg-brand text-white">
                <span className="text-base font-bold">%</span>
              </span>

              <h2 className="text-2xl font-bold leading-snug sm:text-3xl lg:text-[36px]">
                Profiteer van{" "}
                <span className="text-brand-soft underline decoration-brand-soft underline-offset-4">
                  20% korting
                </span>{" "}
                op ramen en ontvang gratis een ventilatierooster voor een van
                jouw ramen
              </h2>

              <p className="mt-4 text-sm text-white/85">
                Geef de promocode{" "}
                <strong className="font-bold text-white">
                  VENTILATIEROOSTER
                </strong>{" "}
                door aan de manager om te profiteren van de aanbieding.
              </p>

              <a
                href="#contact"
                className="mt-6 inline-flex items-center justify-center rounded-md bg-[#226cd5] px-8 py-3 text-sm font-bold uppercase text-white shadow-[var(--shadow-cta)]"
              >
                Plan een bezoek
              </a>
            </div>

            <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-black/30">
              <Image
                src={VENT_IMG}
                alt="Ventilatierooster bij raam"
                fill
                sizes="(min-width: 1024px) 35vw, 90vw"
                loading="lazy"
                className="object-cover"
              />
            </div>
          </div>
        </article>
      </Container>
    </Section>
  );
}
