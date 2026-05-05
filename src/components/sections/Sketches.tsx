import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { WhatsAppIcon } from "@/components/ui/Icon";
import { site } from "@/lib/site";

// Tilda block rec1337102171 (T396, blueprint background w/ white card overlay).
// Outer photo 1153x602 -> aspect-[1153/602]. Inner white card 400x335 -> 576x482.
// Title #333 fs 30 -> 43px. Body #7b7b7b fs 12 -> 17px.
// CTA "Schrijf ons op WhatsApp" h:60 w:300 fs 19 -> h:86 w:432 fs:27. bg #226cd5.

const SKETCH_BG = "/images/sketches-bg.webp";

export function Sketches() {
  return (
    <Section ariaLabel="Schetsen en advies" className="bg-white">
      <Container>
        <article className="relative mx-auto min-h-[420px] max-w-[1670px] overflow-hidden rounded-[16px] bg-black sm:min-h-[480px] sm:rounded-[20px] lg:aspect-[1153/602] lg:min-h-0 lg:rounded-[22px]">
          <Image
            src={SKETCH_BG}
            alt=""
            role="presentation"
            fill
            sizes="(min-width: 1280px) 1670px, 100vw"
            loading="lazy"
            className="object-cover"
          />

          <div className="absolute inset-0 flex items-center p-[16px] sm:p-[40px] lg:p-[100px]">
            <div className="w-full max-w-[576px] rounded-[16px] bg-white p-[20px] text-center shadow-[0_20px_40px_rgba(0,0,0,0.25)] sm:rounded-[20px] sm:p-[40px] lg:rounded-[22px] lg:p-[56px]">
              <h2 className="text-[22px] font-bold leading-[1.3] text-[#333333] [font-family:Roboto,Arial,sans-serif] sm:text-[32px] lg:text-[43px]">
                Wij stellen het project met schetsen ter beschikking
              </h2>

              <p className="mt-[16px] text-[14px] font-semibold leading-[1.4] text-[#7b7b7b] [font-family:Roboto,Arial,sans-serif] sm:mt-[24px] sm:text-[16px] lg:mt-[28px] lg:text-[17px]">
                Alle nodige materialen om uw partner te laten zien welke ramen
                in uw huis geplaatst zullen worden.
                <br />
                Nu hoeft de beslissing tot vervanging geen weken meer te duren
                &ndash;
                <br />u kunt vandaag nog beginnen
              </p>

              <a
                href={site.whatsapp.nl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-[20px] inline-flex h-[60px] w-full max-w-[432px] items-center justify-center gap-[10px] rounded-[12px] bg-[#226CD5] text-[18px] font-bold capitalize text-white [font-family:Roboto,Arial,sans-serif] sm:mt-[28px] sm:h-[76px] sm:gap-[12px] sm:rounded-[14px] sm:text-[22px] lg:mt-[36px] lg:h-[86px] lg:gap-[14px] lg:rounded-[16px] lg:text-[27px]"
              >
                Schrijf ons op WhatsApp
                <WhatsAppIcon className="h-[20px] w-[20px] text-white sm:h-[24px] sm:w-[24px] lg:h-[28px] lg:w-[28px]" />
              </a>
            </div>
          </div>
        </article>
      </Container>
    </Section>
  );
}
