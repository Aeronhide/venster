import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

// Tilda block rec1337102071 (T396, dark blue card with 3 truck photos).
// Card 1160x382 #004991 with 22px radius. Title fs 30 -> 43px.
// Body fs 12 -> 17px (#f5f5f5). "Veilig transport" tag fs 13 -> 19px on #006bd5.
// Each truck photo 220x323 -> 317x465. All px values are spec * 1.44 zoom.

const truckImages = [
  "/images/transport-1.webp",
  "/images/transport-2.webp",
  "/images/transport-3.webp",
];

export function Transport() {
  return (
    <Section ariaLabel="Veilig transport" className="bg-white">
      <Container>
        <article className="mx-auto grid max-w-[1670px] gap-[40px] overflow-hidden rounded-[32px] bg-[#004991] p-[60px] text-white lg:grid-cols-[1fr_1.6fr] lg:items-center lg:p-[80px]">
          <div className="max-w-[500px]">
            <span
              aria-hidden
              className="grid h-[66px] w-[66px] place-items-center rounded-[12px] bg-white/10"
            >
              <svg
                width="36"
                height="36"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.6}
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
                className="text-white"
              >
                <rect x="2" y="6" width="3" height="12" rx="0.5" />
                <rect x="6" y="9" width="3" height="9" rx="0.5" />
                <rect x="10" y="3" width="3" height="15" rx="0.5" />
                <rect x="14" y="7" width="3" height="11" rx="0.5" />
                <rect x="18" y="11" width="3" height="7" rx="0.5" />
              </svg>
            </span>

            <span className="mt-[20px] inline-flex h-[28px] items-center justify-center rounded-[7px] bg-[#006bd5] px-[14px] text-[19px] font-semibold text-white [font-family:Roboto,Arial,sans-serif]">
              Veilig transport
            </span>

            <h2 className="mt-[20px] text-[43px] font-bold leading-[1.3] text-white [font-family:Roboto,Arial,sans-serif]">
              Wij garanderen een veilige levering van de ramen
            </h2>

            <p className="mt-[24px] text-[17px] font-semibold leading-[1.3] text-[#f5f5f5] [font-family:Roboto,Arial,sans-serif]">
              Onze ramen worden zorgvuldig verpakt met meerdere lagen
              stretchfolie en dikke polystyreen beschermhoeken, waardoor
              optimale bescherming tijdens het transport wordt gegarandeerd.
              Dankzij deze geavanceerde verpakkingstechnologie komen de ramen
              veilig bij u thuis aan, ongeacht de afstand.
            </p>
          </div>

          <ul className="grid grid-cols-1 gap-[20px] sm:grid-cols-3">
            {truckImages.map((src, i) => (
              <li
                key={src}
                className="relative aspect-[220/323] overflow-hidden rounded-[17px] bg-black/20"
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
        </article>
      </Container>
    </Section>
  );
}
