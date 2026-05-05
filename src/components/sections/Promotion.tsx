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

          <article className="relative mt-[24px] overflow-hidden rounded-[16px] bg-[#f5f5f5] p-[20px] text-[#333333] sm:mt-[32px] sm:rounded-[20px] sm:p-[40px] lg:mt-[40px] lg:rounded-[22px] lg:p-[80px]">
            <div className="grid items-center gap-[24px] sm:gap-[32px] lg:grid-cols-[1fr_1fr] lg:gap-[40px]">
              <div className="max-w-[770px]">
                <h3 className="pr-[48px] text-[22px] font-medium leading-[1.3] text-[#333333] [font-family:Roboto,Arial,sans-serif] sm:pr-[60px] sm:text-[32px] lg:pr-0 lg:text-[46px]">
                  Profiteer van{" "}
                  <strong className="font-bold">20% korting</strong> op ramen en
                  ontvang <strong className="font-bold">gratis</strong> een
                  ventilatierooster voor een van jouw ramen
                </h3>

                <p className="mt-[16px] max-w-[470px] text-[15px] font-medium leading-[1.4] text-[#333333] [font-family:Roboto,Arial,sans-serif] sm:mt-[20px] sm:text-[17px] lg:mt-[28px] lg:text-[20px] lg:leading-[1.3]">
                  Geef de promotiecode{" "}
                  <strong className="font-bold">VENTILATIEROOSTER</strong> door
                  aan de manager en profiteer van de aanbieding
                </p>

                <a
                  href="#zeropopup"
                  className="mt-[20px] inline-flex h-[60px] w-full max-w-[400px] items-center justify-center rounded-[12px] bg-[#226CD5] text-[18px] font-bold capitalize text-white [font-family:Roboto,Arial,sans-serif] sm:mt-[28px] sm:h-[76px] sm:rounded-[14px] sm:text-[22px] lg:mt-[36px] lg:h-[86px] lg:rounded-[16px] lg:text-[29px]"
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
              className="absolute right-[16px] top-[16px] grid h-[36px] w-[44px] place-items-center rounded-full bg-[#71a6f1] text-[24px] font-bold leading-none text-white [font-family:Roboto,Arial,sans-serif] sm:right-[40px] sm:top-[28px] sm:h-[48px] sm:w-[58px] sm:text-[34px] lg:right-[60px] lg:top-[40px] lg:h-[58px] lg:w-[70px] lg:text-[43px]"
            >
              %
            </span>
          </article>
        </div>
      </Container>
    </Section>
  );
}
