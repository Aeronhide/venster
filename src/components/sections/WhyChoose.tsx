import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { CheckIcon } from "@/components/ui/Icon";

type Reason = { title: string; body: React.ReactNode };

const reasons: Reason[] = [
  {
    title: "Gecertificeerde Duitse systemen",
    body: (
      <>
        Wij werken met gevestigde Europese leveranciers zoals{" "}
        <strong className="font-bold">VEKA-profielen</strong> en{" "}
        <strong className="font-bold">ROTO-beslag,</strong> veelvuldig
        toegepast in residentiële projecten binnen de EU.
      </>
    ),
  },
  {
    title: "Transparante garantie",
    body: (
      <>
        Wij bieden een{" "}
        <strong className="font-bold">10-jarige fabrieksgarantie</strong> op
        profielen, beglazing en beslag, duidelijk vastgelegd in onze
        contractdocumentatie.
      </>
    ),
  },
  {
    title: "Gecontroleerde productie en levering",
    body: "Alle ramen en deuren worden in-house geproduceerd, kwaliteitsgecontroleerd en veilig verpakt vóór levering naar Nederland.",
  },
  {
    title: "Betrouwbare levertijden",
    body: (
      <>
        De standaard productietijd en levering bedraagt ongeveer{" "}
        <strong className="font-bold">45 kalenderdagen,</strong> afhankelijk
        van configuratie en projectspecificaties.
      </>
    ),
  },
];

const sideCards = [
  {
    title: "In-house productie",
    body: "Productie, assemblage en verpakking worden volledig binnen ons eigen productieproces uitgevoerd.",
  },
  {
    title: "Technisch advies",
    body: "Ondersteuning door ervaren projectmanagers, gespecialiseerd in residentiële raam- en deurprojecten.",
  },
  {
    title: "Kwaliteitscontrole",
    body: "Kwaliteitscontroles worden uitgevoerd in cruciale productiefasen en vóór verzending.",
  },
];

export function WhyChoose() {
  return (
    <Section
      id="voordelen"
      ariaLabelledby="why-choose-title"
      className="bg-white"
    >
      <Container>
        <div className="mx-auto max-w-[1675px]">
          {/* Title — Tilda 44px × 1.44 ≈ 63px, color #082b4b, weight 900, uppercase */}
          <h2
            id="why-choose-title"
            className="text-[28px] font-black uppercase leading-[1.3] tracking-tight text-[#082b4b] sm:text-[40px] lg:text-[63px] lg:leading-[1.55]"
          >
            Waarom huiseigenaren in Nederland voor VALENT kiezen
          </h2>

          {/* Two columns: big blue card on left, 3 stacked white cards on right.
              Tilda blue card 780×617, side cards 367×201 each — ratio ~2.13:1 */}
          <div className="mt-10 grid gap-6 lg:grid-cols-[780fr_367fr] lg:gap-[44px]">
            {/* Big blue radial-gradient card */}
            <div className="relative overflow-hidden rounded-[22px] bg-[radial-gradient(ellipse_at_right,#7ba6e6_0%,#3b7ddd_45%,#3b7ddd_100%)] px-6 py-10 sm:px-10 sm:py-12 lg:px-[80px] lg:py-[88px]">
              <ul className="relative z-10 space-y-8">
                {reasons.map((r) => (
                  <li key={r.title} className="flex gap-5">
                    {/* Blue check tile — Tilda 31×30 ≈ 45×43, white check */}
                    <span className="mt-1 grid size-[45px] shrink-0 place-items-center rounded-[6px] bg-white/20 ring-1 ring-white/40">
                      <CheckIcon className="text-white" width={22} height={22} />
                    </span>
                    <div className="flex-1">
                      {/* Title — Tilda 18px × 1.44 ≈ 26px, weight bold */}
                      <h3 className="text-[18px] font-bold uppercase leading-[1.2] text-white lg:text-[26px]">
                        {r.title}
                      </h3>
                      {/* Body — Tilda 18px × 1.44 ≈ 26px */}
                      <p className="mt-2 text-[16px] leading-[1.5] text-white/95 lg:text-[26px] lg:leading-[1.4]">
                        {r.body}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* 3 stacked side cards */}
            <ul className="grid gap-4 lg:gap-6">
              {sideCards.map((c, i) => (
                <li
                  key={c.title}
                  className="relative overflow-hidden rounded-[16px] bg-white p-6 ring-1 ring-[#e5e7eb] lg:p-8"
                >
                  {/* Optional installer photo behind first card on desktop */}
                  {i === 0 && (
                    <Image
                      src="/images/why-choose-installer.webp"
                      alt=""
                      fill
                      sizes="(min-width: 1024px) 28vw, 80vw"
                      className="pointer-events-none absolute inset-0 z-0 object-cover opacity-10"
                    />
                  )}
                  <div className="relative z-10 flex items-start justify-between gap-4">
                    <div>
                      {/* Title — Tilda 26px × 1.44 ≈ 37px, weight bold */}
                      <h3 className="text-[20px] font-bold uppercase text-[#082b4b] lg:text-[37px] lg:leading-[1.2]">
                        {c.title}
                      </h3>
                      {/* Body — Tilda 16px × 1.44 ≈ 23px */}
                      <p className="mt-3 text-[15px] leading-[1.5] text-[#505050] lg:text-[23px]">
                        {c.body}
                      </p>
                    </div>
                    {/* Blue circle icon — Tilda 55×1.44 ≈ 79 */}
                    <span className="grid size-[56px] shrink-0 place-items-center rounded-full bg-[radial-gradient(circle_at_center,#3b7ddd_0%,#7ba6e6_100%)] text-white lg:size-[79px]">
                      <CheckIcon className="text-white" width={28} height={28} />
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </Section>
  );
}
