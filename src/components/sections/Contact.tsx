import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { site } from "@/lib/site";

const OFFICE_IMG =
  "/images/tild3239-6661-4231-b039-393332646261__valent-112_1.webp";

export function Contact() {
  return (
    <Section
      id="contact"
      ariaLabelledby="contact-title"
      className="bg-brand-ink text-white !py-16"
    >
      <Container>
        <h2
          id="contact-title"
          className="text-center text-2xl font-bold uppercase tracking-tight sm:text-3xl"
        >
          Onze vestigingen
        </h2>

        <div className="mt-8 rounded-2xl bg-surface p-4 text-fg sm:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-fg-subtle/20">
              <Image
                src={OFFICE_IMG}
                alt="Valent kantoor — productie en showroom"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>

            <dl className="grid gap-5 px-2 text-sm">
              <div>
                <dt className="text-xs text-fg-muted">Telefoon:</dt>
                <dd className="mt-1">
                  <a
                    href={`tel:${site.phone.nl.replace(/\s/g, "")}`}
                    className="text-base font-bold text-brand hover:text-brand-strong"
                  >
                    {site.phone.nl}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs text-fg-muted">E-mail:</dt>
                <dd className="mt-1">
                  <a
                    href={`mailto:${site.email}`}
                    className="text-base font-bold text-brand hover:text-brand-strong"
                  >
                    {site.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs text-fg-muted">Adres:</dt>
                <dd className="mt-1 text-sm font-bold text-brand">
                  Koornmarktpoort 25C, 8253 TE Dronten, Netherlands
                </dd>
              </div>
              <div>
                <dt className="text-xs text-fg-muted">Werktijd:</dt>
                <dd className="mt-1 text-sm font-bold text-brand">
                  Mon–Sat | 9:00 – 19:00
                </dd>
              </div>

              <a
                href={`tel:${site.phone.nl.replace(/\s/g, "")}`}
                className="mt-2 inline-flex items-center justify-center rounded-md bg-[#226cd5] px-6 py-4 text-base font-bold text-white shadow-[var(--shadow-cta)]"
              >
                Bezoek plannen
              </a>
            </dl>
          </div>

          <div className="mt-10 grid gap-8 border-t border-border/50 pt-8 text-xs text-fg-muted sm:grid-cols-3">
            <div>
              <p className="font-bold text-fg">Toelichting:</p>
              <p className="mt-2">
                Ons operationele backoffice in Chișinău verzorgt offertes,
                contracten en administratieve ondersteuning. Deze structuur
                stelt ons in staat om concurrerende prijzen, snelle
                reactietijden en een hoge servicekwaliteit te bieden aan onze
                klanten in Nederland.
              </p>
            </div>
            <div>
              <p className="font-bold text-fg">
                Nederland — Juridisch &amp; Correspondentieadres
              </p>
              <p className="mt-2">Koornmarktpoort 25C,</p>
              <p>Dronten, Nederland</p>
            </div>
            <div>
              <p className="font-bold text-fg">Operationeel Backoffice</p>
              <p className="mt-2">Constantin Vîrnavstraat 8,</p>
              <p>Chișinău, MD-2025</p>
              <p>Republiek Moldavië</p>
            </div>
          </div>
        </div>

        <p className="mt-6 text-center text-xs text-white/40">
          2024©. YODANEXTPRIM SRL. Alle rechten voorbehouden.
        </p>
      </Container>
    </Section>
  );
}
