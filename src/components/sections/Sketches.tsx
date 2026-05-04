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
        <article className="relative mx-auto aspect-[1153/602] max-w-[1670px] overflow-hidden rounded-[22px] bg-black">
          <Image
            src={SKETCH_BG}
            alt=""
            role="presentation"
            fill
            sizes="(min-width: 1280px) 1670px, 100vw"
            className="object-cover"
          />

          <div className="absolute inset-0 flex items-center p-[40px] sm:p-[60px] lg:p-[100px]">
            <div className="w-full max-w-[576px] rounded-[22px] bg-white p-[40px] text-center shadow-[0_20px_40px_rgba(0,0,0,0.25)] sm:p-[56px]">
              <h2 className="text-[26px] font-bold leading-[1.3] text-[#333333] [font-family:Roboto,Arial,sans-serif] sm:text-[36px] lg:text-[43px]">
                Wij stellen het project met schetsen ter beschikking
              </h2>

              <p className="mt-[28px] text-[17px] font-semibold leading-[1.4] text-[#7b7b7b] [font-family:Roboto,Arial,sans-serif]">
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
                className="mt-[36px] inline-flex h-[86px] w-full max-w-[432px] items-center justify-center gap-[14px] rounded-[16px] bg-[#226CD5] text-[27px] font-bold capitalize text-white [font-family:Roboto,Arial,sans-serif]"
              >
                Schrijf ons op WhatsApp
                <WhatsAppIcon className="h-[28px] w-[28px] text-white" />
              </a>
            </div>
          </div>
        </article>
      </Container>
    </Section>
  );
}
