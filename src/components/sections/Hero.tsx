import Image from "next/image";

const HERO_BG = "/images/banner/banner-bg.webp";
const HERO_PRODUCT = "/images/banner/banner-img.webp";
const GOOGLE_BADGE = "/images/google-reviews-badge.png";
const NL_FLAG = "/images/banner/netherlands_flag.svg";
const ICON_DELIVERY = "/images/banner/time.svg";
const ICON_PRICE = "/images/banner/money.svg";
const ICON_QUALITY = "/images/banner/medal.svg";

// Single canvas matching Tilda's actual 1200 × 660 artboard.
// Dark BG image covers top 79.24%. A linear-gradient overlay creates the
// dark vignette on the left side. Stats card overlaps the bottom of the BG.

const CLS = {
  // BG image — Tilda spec h=523 → 79.24% of 660
  bgImage:
    "absolute left-[1.67%] top-0 w-[96.25%] h-[79.24%] rounded-[15px] overflow-hidden",
  // Dark gradient overlay on top of bg image — left dark, fades right
  bgGradient:
    "absolute left-[1.67%] top-0 w-[96.25%] h-[79.24%] rounded-[15px] [background:linear-gradient(96.8deg,#001A32_0%,rgba(0,26,48,0.74)_62%,rgba(0,26,48,0)_100%)]",
  // Window product — left=627 top=29 W=424 H=424 (in 1200x660)
  product: "absolute left-[52.25%] top-[4.39%] w-[35.33%] h-[64.24%]",
  // NL pill — exact 500px wide, flag pinned left, text centered
  nlPill:
    "absolute left-[5.75%] top-[7.12%] flex w-[500px] items-center rounded-[40px] bg-white px-5 py-3 shadow-[5px_5px_10px_rgba(0,0,0,0.1)]",
  nlPillText:
    "flex-1 self-center text-center font-bold uppercase leading-[26px] text-black text-[18px] whitespace-nowrap",
  // Headline — exact 56px
  headline:
    "absolute left-[6%] top-[14%] w-[42%] font-bold leading-[1.1] text-white text-[56px]",
  // Subhead — left=73 top=292 (44.24%) w=422 (35.17% in 1200)
  subhead:
    "absolute left-[6.08%] top-[44.24%] w-[35.17%] font-normal leading-[1.3125] text-white text-[1.333cqi]",
  // CTA button — left=66 top=372 (56.36%) w=311 (25.92% in 1200) h=62 (9.39%)
  cta:
    "absolute left-[5.5%] top-[56.36%] w-[25.92%] h-[9.39%] flex items-center justify-center rounded-[16px] bg-[#226CD5] text-center font-bold uppercase text-white text-[1.5cqi]",
  // Google Maps card — left=446 top=381 (57.73%) w=206 (17.17% in 1200) h=49 (7.42%)
  gmaps:
    "absolute left-[37.17%] top-[57.73%] w-[17.17%] h-[7.42%] flex items-center justify-center rounded-[16px] bg-white px-1.5",
  // Stats card — centered, half inside dark bg (which ends at 79.24%) half below
  // Card center sits at the bottom edge of the dark bg
  statsCard:
    "absolute left-[5%] top-[70.3%] z-10 w-[90%] h-[18.64%] rounded-[15px] bg-white shadow-[0_8px_32px_rgba(0,0,0,0.1)] flex items-center justify-around px-[2%]",
};

const CARD = {
  // Card 1 — Eerlijke prijs (left=597 top=176 w=190 h=60 in 1200×660)
  c1Bg:
    "absolute left-[49.75%] top-[26.67%] w-[15.83%] h-[9.09%] rounded-[12px] bg-white shadow-[5px_5px_10px_rgba(0,0,0,0.1)]",
  c1Circle:
    "absolute left-[50.33%] top-[27.73%] w-[3.75%] h-[6.82%] rounded-full bg-[#006BD5]",
  c1Icon:
    "absolute left-[50.92%] top-[28.79%] w-[2.5%] h-[4.55%] flex items-center justify-center",
  c1Text:
    "absolute left-[55.33%] top-[28.33%] w-[11.17%] font-bold leading-[1.2] text-black text-[1.167cqi]",
  // Card 2 — Snelle levering (left=888 top=102 w=218 h=60)
  c2Bg:
    "absolute left-[74%] top-[15.45%] w-[18.17%] h-[9.09%] rounded-[12px] bg-white shadow-[5px_5px_10px_rgba(0,0,0,0.1)]",
  c2Circle:
    "absolute left-[74.67%] top-[16.52%] w-[3.75%] h-[6.82%] rounded-full bg-[#006BD5]",
  c2Icon:
    "absolute left-[75.08%] top-[17.27%] w-[2.75%] h-[5%] flex items-center justify-center",
  c2Text:
    "absolute left-[79.5%] top-[17.27%] w-[11.83%] font-bold leading-[1.2] text-black text-[1.167cqi]",
  // Card 3 — 5 jaar (left=858 top=349 w=222 h=60)
  c3Bg:
    "absolute left-[71.5%] top-[52.88%] w-[18.5%] h-[9.09%] rounded-[12px] bg-white shadow-[5px_5px_10px_rgba(0,0,0,0.1)]",
  c3Circle:
    "absolute left-[72.08%] top-[53.94%] w-[3.75%] h-[6.82%] rounded-full bg-[#006BD5]",
  c3Icon:
    "absolute left-[72.67%] top-[55.15%] w-[2.5%] h-[4.55%] flex items-center justify-center",
  c3Text:
    "absolute left-[76.67%] top-[55.91%] w-[12.92%] font-bold leading-[1.2] text-black text-[1.167cqi]",
};

export function Hero() {
  return (
    <section
      aria-label="Introductie"
      className="relative mx-auto mt-8 w-[calc(100%-64px)] aspect-[1200/660] font-sans [container-type:inline-size]"
    >
      {/* BG image */}
      <div className={CLS.bgImage}>
        <Image
          src={HERO_BG}
          alt=""
          role="presentation"
          fill
          sizes="100vw"
          quality={85}
          priority
          fetchPriority="high"
          className="object-cover object-center"
        />
      </div>

      {/* Dark gradient overlay — creates the dark left vignette */}
      <div className={CLS.bgGradient} aria-hidden />

      {/* Window product image */}
      <div className={CLS.product}>
        <Image
          src={HERO_PRODUCT}
          alt=""
          role="presentation"
          fill
          sizes="40vw"
          quality={85}
          priority
          className="object-contain"
        />
      </div>

      {/* NL pill — flag pinned left, text centered in remaining space */}
      <div className={CLS.nlPill}>
        <Image
          src={NL_FLAG}
          alt=""
          width={32}
          height={26}
          className="block h-[26px] w-[32px] shrink-0 self-center object-contain"
        />
        <span className={CLS.nlPillText}>VOLGENS NEDERLANDSE NORMEN</span>
      </div>

      {/* Headline */}
      <div className={CLS.headline}>
        Ramen en Deuren –{" "}
        <br />
        <span className="text-[#006BD5]">vanaf €50 per maand,</span>{" "}
        levering door heel Nederland!
      </div>

      {/* Subhead */}
      <div className={CLS.subhead}>
        PVC-ramen en -deuren, schuifdeuren en rolluiken van hoge kwaliteit –
        snel geproduceerd en rechtstreeks bij u thuis geleverd!
      </div>

      {/* CTA */}
      <a href="#contact" className={CLS.cta}>
        VRAAG EEN GRATIS OFFERTE AAN
      </a>

      {/* Google Maps card */}
      <a
        href="https://www.google.com/maps/place/VALENT.MD/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Google Maps: locatie Valent"
        className={CLS.gmaps}
      >
        <Image
          src={GOOGLE_BADGE}
          alt="Google reviews"
          width={188}
          height={34}
          className="h-auto w-[92%] object-contain"
        />
      </a>

      {/* Card 1 — Eerlijke prijs */}
      <div className={CARD.c1Bg} />
      <div className={CARD.c1Circle} />
      <div className={CARD.c1Icon}>
        <Image
          src={ICON_PRICE}
          alt=""
          width={30}
          height={30}
          className="h-full w-full brightness-0 invert object-contain"
        />
      </div>
      <div className={CARD.c1Text}>
        <div>Eerlijke prijs voor</div>
        <div>hoge kwaliteit</div>
      </div>

      {/* Card 2 — Snelle levering */}
      <div className={CARD.c2Bg} />
      <div className={CARD.c2Circle} />
      <div className={CARD.c2Icon}>
        <Image
          src={ICON_DELIVERY}
          alt=""
          width={33}
          height={33}
          className="h-full w-full brightness-0 invert object-contain"
        />
      </div>
      <div className={CARD.c2Text}>
        <div>Snelle levering in NL – 45 dagen</div>
      </div>

      {/* Card 3 — 5 jaar */}
      <div className={CARD.c3Bg} />
      <div className={CARD.c3Circle} />
      <div className={CARD.c3Icon}>
        <Image
          src={ICON_QUALITY}
          alt=""
          width={30}
          height={30}
          className="h-full w-full brightness-0 invert object-contain"
        />
      </div>
      <div className={CARD.c3Text}>
        <div>5 jaar - productgarantie</div>
      </div>

      {/* Stats card overlapping bottom of dark bg */}
      <div className={CLS.statsCard}>
        <Stat number="1720+" lines={["tevreden huishoudens", "geholpen"]} />
        <Stat number="96%" lines={["van onze klanten", "beveelt ons aan"]} />
        <Stat number="14 +" lines={["jaar zorg voor uw", "huis"]} />
        <Stat number="8000+" lines={["geplaatste ramen &", "deuren per jaar"]} />
      </div>
    </section>
  );
}

function Stat({ number, lines }: { number: string; lines: string[] }) {
  return (
    <div className="flex items-start justify-center gap-2">
      <div className="text-center">
        <div className="font-bold leading-[1.1] tracking-[-0.02em] text-[#052142] text-[3.667cqi]">
          {number}
        </div>
        <div className="mt-1 text-[1cqi] uppercase leading-[1.2] text-[#191919]">
          {lines.map((l, i) => (
            <div key={i}>{l}</div>
          ))}
        </div>
      </div>
      <CheckIcon className="mt-[1cqi] h-[2cqi] w-[2cqi] shrink-0" />
    </div>
  );
}

function CheckIcon({ className }: { className: string }) {
  return (
    <div className={className}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 24 24"
        aria-hidden
        className="block"
      >
        <circle cx="12" cy="12" r="11" fill="#006BD5" />
        <path
          d="M7 12.5l3.2 3.2L17 9"
          stroke="#FFFFFF"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
    </div>
  );
}
