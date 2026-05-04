import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

// Tilda block rec1342840611 (T396, light gray card with promo offer + ventilator photo).
// Card #f5f5f5 with 22px radius. Top tag fs 47 -> 68px uppercase #333.
// Main title fs 32 -> 46px #333 with strong on "20% korting" and "gratis".
// Subtitle fs 14 -> 20px #333. "%" badge: 48x40 #71a6f1 round-full, "%" 30 -> 43px white.
// Image right (1000x600 -> 1440x864). CTA "PLAN EEN BEZOEK" fs 20 -> 29px white #226cd5.

const VENT_IMG = "/images/promo-ventilator.webp";

export function Promotion() {
  return (
    <Section ariaLabel="Actie 20% korting" className="bg-white">
      <Container>
        <div className="mx-auto max-w-[1670px]">
          <h2 className="text-center text-[28px] font-bold uppercase leading-[1.2] text-[#333333] [font-family:Roboto,Arial,sans-serif] sm:text-[44px] lg:text-[68px]">
            Bekijk de laatste promoties
          </h2>

          <article className="relative mt-[40px] overflow-hidden rounded-[22px] bg-[#f5f5f5] p-[40px] text-[#333333] sm:p-[60px] lg:p-[80px]">
            <div className="grid items-center gap-[40px] lg:grid-cols-[1fr_1fr]">
              <div className="max-w-[770px]">
                <h3 className="text-[26px] font-medium leading-[1.3] text-[#333333] [font-family:Roboto,Arial,sans-serif] sm:text-[34px] lg:text-[46px]">
                  Profiteer van{" "}
                  <strong className="font-bold">20% korting</strong> op ramen en
                  ontvang <strong className="font-bold">gratis</strong> een
                  ventilatierooster voor een van jouw ramen
                </h3>

                <p className="mt-[28px] max-w-[470px] text-[17px] font-medium leading-[1.3] text-[#333333] [font-family:Roboto,Arial,sans-serif] sm:text-[20px]">
                  Geef de promotiecode{" "}
                  <strong className="font-bold">VENTILATIEROOSTER</strong> door
                  aan de manager en profiteer van de aanbieding
                </p>

                <a
                  href="#zeropopup"
                  className="mt-[36px] inline-flex h-[86px] w-full max-w-[400px] items-center justify-center rounded-[16px] bg-[#226CD5] text-[29px] font-bold capitalize text-white [font-family:Roboto,Arial,sans-serif]"
                >
                  Plan een bezoek
                </a>
              </div>

              <div className="relative aspect-[1000/600] w-full">
                <Image
                  src={VENT_IMG}
                  alt="Ventilatierooster gemonteerd op een raam"
                  fill
                  sizes="(min-width: 1024px) 50vw, 90vw"
                  loading="lazy"
                  className="object-contain"
                />
              </div>
            </div>

            <span
              aria-hidden
              className="absolute right-[60px] top-[40px] grid h-[58px] w-[70px] place-items-center rounded-full bg-[#71a6f1] text-[43px] font-bold leading-none text-white [font-family:Roboto,Arial,sans-serif] sm:right-[80px]"
            >
              %
            </span>
          </article>
        </div>
      </Container>
    </Section>
  );
}
