import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

const truckImages = [
  "/images/transport-1.webp",
  "/images/transport-2.webp",
  "/images/transport-3.webp",
];

export function Transport() {
  return (
    <Section ariaLabel="Veilig transport" className="bg-white">
      <Container>
        <article className="overflow-hidden rounded-[22px] bg-brand p-6 text-white sm:p-10 lg:p-14">
          <div className="grid gap-10 lg:grid-cols-[1fr_2fr] lg:items-center">
            <div>
              <span
                aria-hidden
                className="grid size-[58px] place-items-center rounded-md bg-white/15"
              >
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden
                >
                  <rect x="1" y="3" width="15" height="13" />
                  <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
                  <circle cx="5.5" cy="18.5" r="2.5" />
                  <circle cx="18.5" cy="18.5" r="2.5" />
                </svg>
              </span>
              <span className="mt-4 inline-flex items-center rounded-md bg-white/20 px-3 py-1 text-xs font-bold uppercase">
                Veilig transport
              </span>
              <h2 className="mt-4 text-2xl font-bold leading-snug sm:text-3xl lg:text-[32px]">
                Wij garanderen een veilige levering van de ramen
              </h2>
              <p className="mt-4 text-sm text-white/85">
                Onze ramen worden zorgvuldig verpakt met meerdere lagen
                schokvrije en stress-bestendige beschermlagen, waardoor optimale
                bescherming tijdens het transport wordt gegarandeerd. Dankzij
                deze geavanceerde verpakkingstechnologie komen de ramen veilig
                bij u thuis aan, ongeacht de afstand.
              </p>
            </div>

            <ul className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {truckImages.map((src, i) => (
                <li
                  key={src}
                  className="relative aspect-[3/4] overflow-hidden rounded-xl bg-black/20"
                >
                  <Image
                    src={src}
                    alt={`Veilig transport van ramen, foto ${i + 1}`}
                    fill
                    sizes="(min-width: 1024px) 22vw, 90vw"
                    loading="lazy"
                    className="object-cover"
                  />
                </li>
              ))}
            </ul>
          </div>
        </article>
      </Container>
    </Section>
  );
}
