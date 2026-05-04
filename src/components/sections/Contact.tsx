import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { site } from "@/lib/site";

// Tilda block rec1763574201 (T396, ONZE VESTIGINGEN with f5f5f5 inner card).
// Title fs 30 -> 43px white bold uppercase ('ONZE VESTIGINGEN').
// Inner card #f5f5f5 1040x560 -> aspect ~13:7. Office img 440x293 -> 634x422 left.
// Right column: Telefoon/E-mail/Adres/Werktijd labels fs 12 -> 17px,
// values fs 18 -> 26px (#006bd5). CTA "Bezoek plannen" fs 20 -> 29px white #226cd5.
// Below card: 3 cols (Toelichting / Juridisch / Operationeel) fs 14 -> 20px.
// Footer "2024©. YODANEXTPRIM SRL..." fs 12 -> 17px.

const OFFICE_IMG =
  "/images/tild3239-6661-4231-b039-393332646261__valent-112_1.webp";

const PHONE_DISPLAY = site.phone.nl; // "+31 970 102 666 13"
const PHONE_TEL = site.phone.nl.replace(/\s/g, ""); // "+3197010266613"
const EMAIL = site.email;

export function Contact() {
  return (
    <Section
      id="contact"
      ariaLabelledby="contact-title"
      className="bg-[#082b4b] text-white"
    >
      <Container>
        <h2
          id="contact-title"
          className="text-center text-[28px] font-bold uppercase leading-[1.3] text-white [font-family:Roboto,Arial,sans-serif] sm:text-[36px] lg:text-[43px]"
        >
          Onze vestigingen
        </h2>

        <div className="mx-auto mt-[40px] max-w-[1500px] rounded-[22px] bg-[#f5f5f5] p-[28px] text-[#333333] sm:p-[40px] lg:p-[60px]">
          <div className="grid items-center gap-[40px] lg:grid-cols-[634px_1fr]">
            <div className="relative aspect-[440/293] w-full overflow-hidden rounded-[16px] bg-black/5">
              <Image
                src={OFFICE_IMG}
                alt="VALENT kantoor — productie en showroom"
                fill
                sizes="(min-width: 1024px) 634px, 100vw"
                className="object-cover"
              />
            </div>

            <dl className="flex flex-col gap-[18px] [font-family:Roboto,Arial,sans-serif]">
              <div>
                <dt className="text-[17px] font-bold text-[#333333]">
                  Telefoon:
                </dt>
                <dd className="mt-[2px]">
                  <a
                    href={`tel:${PHONE_TEL}`}
                    className="text-[26px] font-medium text-[#006bd5]"
                  >
                    {PHONE_DISPLAY}
                  </a>
                </dd>
              </div>

              <div>
                <dt className="text-[17px] font-bold text-[#333333]">
                  E-mail:
                </dt>
                <dd className="mt-[2px]">
                  <a
                    href={`mailto:${EMAIL}`}
                    className="text-[26px] font-medium text-[#006bd5]"
                  >
                    {EMAIL}
                  </a>
                </dd>
              </div>

              <div>
                <dt className="text-[17px] font-bold text-[#333333]">Adres:</dt>
                <dd className="mt-[2px] text-[26px] font-medium text-[#006bd5]">
                  Koornmarktpoort 25C, 8253 TE Dronten, Netherlands
                </dd>
              </div>

              <div>
                <dt className="text-[17px] font-bold text-[#333333]">
                  Werktijd:
                </dt>
                <dd className="mt-[2px] text-[26px] font-medium text-[#006bd5]">
                  Mon&ndash;Sat | 9:00 &ndash; 19:00
                </dd>
              </div>

              <a
                href="#zeropopup"
                className="mt-[12px] inline-flex h-[86px] w-full max-w-[400px] items-center justify-center rounded-[16px] bg-[#226CD5] text-[29px] font-bold capitalize text-white"
              >
                Bezoek plannen
              </a>
            </dl>
          </div>

          <div className="mt-[60px] grid gap-[40px] border-t border-black/10 pt-[40px] text-[20px] leading-[1.5] text-[#333333] [font-family:Roboto,Arial,sans-serif] md:grid-cols-3">
            <div>
              <p className="font-bold">Toelichting:</p>
              <p className="mt-[8px]">
                Ons operationele backoffice in Chișinău verzorgt offertes,
                contracten en administratieve ondersteuning. Deze structuur
                stelt ons in staat om concurrerende prijzen, snelle
                reactietijden en een hoge servicekwaliteit te bieden aan onze
                klanten in Nederland.
              </p>
            </div>

            <div>
              <p className="font-bold">
                Nederland &ndash; Juridisch &amp; Correspondentieadres
              </p>
              <p className="mt-[8px]">Koornmarktpoort 25C, Dronten, Nederland</p>
            </div>

            <div>
              <p className="font-bold">Operationeel Backoffice</p>
              <p className="mt-[8px]">
                Constantin Vîrnavstraat 8,
                <br />
                Chișinău, MD-2025
                <br />
                Republiek Moldavië
              </p>
            </div>
          </div>
        </div>

        <p className="mt-[40px] text-center text-[17px] text-white/70 [font-family:Roboto,Arial,sans-serif]">
          2024©. YODANEXTPRIM SRL. Alle rechten voorbehouden
        </p>
      </Container>
    </Section>
  );
}
