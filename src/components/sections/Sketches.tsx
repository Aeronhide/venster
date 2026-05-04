import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { WhatsAppIcon } from "@/components/ui/Icon";
import { site } from "@/lib/site";

const SKETCH_IMG = "/images/sketches-bg.webp";

export function Sketches() {
  return (
    <Section ariaLabel="Schetsen en advies" className="bg-white">
      <Container>
        <article className="relative overflow-hidden rounded-[22px]">
          <Image
            src={SKETCH_IMG}
            alt=""
            role="presentation"
            width={1600}
            height={900}
            sizes="(min-width: 1280px) 1280px, 100vw"
            className="absolute inset-0 -z-10 h-full w-full object-cover"
          />

          <div className="relative grid grid-cols-1 lg:grid-cols-2">
            <div className="rounded-2xl bg-white p-8 shadow-[0_10px_30px_rgba(0,0,0,0.15)] sm:p-10 lg:m-10 lg:max-w-md">
              <h2 className="text-2xl font-bold leading-snug text-brand-ink sm:text-3xl">
                Wij stellen het project met schetsen ter beschikking
              </h2>

              <p className="mt-4 text-sm text-fg-muted">
                Elke nodige maatvoering en specificaties leggen wij voor in een
                visueel bruikbare schets. Hierdoor begrijpt u tot op de laatste
                centimeter wat er geleverd, gemonteerd en geïnstalleerd wordt —
                helder en transparant.
              </p>

              <a
                href={site.whatsapp.nl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex w-full items-center justify-center gap-3 rounded-md bg-[#226cd5] py-4 text-base font-bold text-white shadow-[var(--shadow-cta)]"
              >
                Schrijf ons op WhatsApp
                <WhatsAppIcon className="text-[#25D366]" />
              </a>
            </div>

            <div className="relative aspect-[3/2] lg:aspect-auto" />
          </div>
        </article>
      </Container>
    </Section>
  );
}
