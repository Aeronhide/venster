"use client";

import Image from "next/image";
import { useT } from "@/components/LanguageProvider";
import { useModal } from "@/components/ModalContext";

const HERO_BG = "/images/banner/banner-bg.webp";
const HERO_PRODUCT = "/images/banner/banner-img.webp";
const GOOGLE_BADGE = "/images/google-reviews-badge.png";
const NL_FLAG = "/images/banner/netherlands_flag.svg";
const ICON_DELIVERY = "/images/banner/time.svg";
const ICON_PRICE = "/images/banner/money.svg";
const ICON_QUALITY = "/images/banner/medal.svg";

// Single canvas matching Tilda's actual 1200 × 660 artboard (lg+ only).
// Below lg we render a stacked mobile-first version of the same content.
// The cqi-based sizes only make sense inside the desktop artboard.

const CLS = {
  bgImage:
    "absolute left-[1.67%] top-0 w-[96.25%] h-[79.24%] rounded-[15px] overflow-hidden",
  bgGradient:
    "absolute left-[1.67%] top-0 w-[96.25%] h-[79.24%] rounded-[15px] [background:linear-gradient(96.8deg,#001A32_0%,rgba(0,26,48,0.74)_62%,rgba(0,26,48,0)_100%)]",
  product: "absolute left-[52.25%] top-[4.39%] w-[35.33%] h-[64.24%]",
  nlPill:
    "absolute left-[5.75%] top-[7.12%] flex w-[500px] items-center rounded-[40px] bg-white px-5 py-3 shadow-[5px_5px_10px_rgba(0,0,0,0.1)]",
  nlPillText:
    "flex-1 self-center text-center font-bold uppercase leading-[26px] text-black text-[18px] whitespace-nowrap",
  headline:
    "absolute left-[6%] top-[14%] w-[42%] font-bold leading-[1.1] text-white text-[56px]",
  subhead:
    "absolute left-[6.08%] top-[44.24%] w-[35.17%] font-normal leading-[1.3125] text-white text-[1.333cqi]",
  cta:
    "absolute left-[5.5%] top-[56.36%] w-[25.92%] h-[9.39%] flex items-center justify-center rounded-[16px] bg-[#226CD5] text-center font-bold uppercase text-white text-[1.5cqi]",
  gmaps:
    "absolute left-[37.17%] top-[57.73%] w-[17.17%] h-[7.42%] flex items-center justify-center rounded-[16px] bg-white px-1.5",
  statsCard:
    "absolute left-[5%] top-[70.3%] z-10 w-[90%] h-[18.64%] rounded-[15px] bg-white shadow-[0_8px_32px_rgba(0,0,0,0.1)] flex items-center justify-around px-[2%]",
};

const CARD = {
  c1Bg:
    "absolute left-[49.75%] top-[26.67%] w-[15.83%] h-[9.09%] rounded-[12px] bg-white shadow-[5px_5px_10px_rgba(0,0,0,0.1)]",
  c1Circle:
    "absolute left-[50.33%] top-[27.73%] w-[3.75%] h-[6.82%] rounded-full bg-[#006BD5]",
  c1Icon:
    "absolute left-[50.92%] top-[28.79%] w-[2.5%] h-[4.55%] flex items-center justify-center",
  c1Text:
    "absolute left-[55.33%] top-[28.33%] w-[11.17%] font-bold leading-[1.2] text-black text-[1.167cqi]",
  c2Bg:
    "absolute left-[74%] top-[15.45%] w-[18.17%] h-[9.09%] rounded-[12px] bg-white shadow-[5px_5px_10px_rgba(0,0,0,0.1)]",
  c2Circle:
    "absolute left-[74.67%] top-[16.52%] w-[3.75%] h-[6.82%] rounded-full bg-[#006BD5]",
  c2Icon:
    "absolute left-[75.08%] top-[17.27%] w-[2.75%] h-[5%] flex items-center justify-center",
  c2Text:
    "absolute left-[79.5%] top-[17.27%] w-[11.83%] font-bold leading-[1.2] text-black text-[1.167cqi]",
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
  const t = useT();
  const { openCallback } = useModal();
  return (
    <section className="font-sans">
      {/* === Mobile / tablet (stacked) === */}
      <div className="mx-auto mt-3 w-[calc(100%-16px)] sm:mt-4 sm:w-[calc(100%-32px)] lg:hidden">
        <div className="relative overflow-hidden rounded-[16px]">
          {/* Background photo + dark gradient */}
          <div className="absolute inset-0">
            <Image
              src={HERO_BG}
              alt=""
              role="presentation"
              fill
              sizes="100vw"
              quality={75}
              priority
              fetchPriority="high"
              className="object-cover"
            />
            <div className="absolute inset-0 [background:linear-gradient(180deg,rgba(0,26,50,0.92)_0%,rgba(0,26,48,0.78)_55%,rgba(0,26,48,0.55)_100%)]" />
          </div>

          {/* Content */}
          <div className="relative px-5 pt-6 pb-8 text-white sm:px-7 sm:pt-8">
            {/* NL pill */}
            <div className="inline-flex max-w-full items-center gap-2 rounded-full bg-white px-3 py-2 shadow-[3px_3px_8px_rgba(0,0,0,0.15)]">
              <Image
                src={NL_FLAG}
                alt=""
                width={22}
                height={18}
                className="h-[18px] w-[22px] shrink-0 object-contain"
              />
              <span className="text-[11px] font-bold uppercase leading-[1.2] text-black sm:text-[13px]">
                {t.hero.pillMobile}
              </span>
            </div>

            {/* Headline */}
            <h1 className="mt-5 text-[26px] font-bold leading-[1.15] sm:text-[34px]">
              {t.hero.headline1}{" "}
              <span className="text-[#66A6E6]">{t.hero.headlineHighlight}</span>{" "}
              {t.hero.headline2}
            </h1>

            {/* Subhead */}
            <p className="mt-4 text-[14px] leading-[1.45] text-white/90 sm:text-[16px]">
              {t.hero.subhead}
            </p>

            {/* CTA */}
            <button
              type="button"
              onClick={() => openCallback("Homepage Hero — CTA (mobile)")}
              className="mt-5 inline-flex h-[56px] w-full items-center justify-center rounded-[16px] bg-[#226CD5] px-3 text-center text-[14px] font-bold uppercase leading-[1.1] text-white sm:h-[64px] sm:text-[16px]"
            >
              {t.hero.ctaMobile}
            </button>

            {/* Google Maps badge */}
            <a
              href="https://www.google.com/maps/place/VALENT.MD/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t.hero.googleMapsAria}
              className="mt-4 inline-flex h-[42px] w-full max-w-[220px] items-center justify-center rounded-[12px] bg-white px-2"
            >
              <Image
                src={GOOGLE_BADGE}
                alt="Google reviews"
                width={188}
                height={34}
                className="h-auto w-[90%] object-contain"
              />
            </a>

            {/* Product image */}
            <div className="mt-6 grid place-items-center">
              <Image
                src={HERO_PRODUCT}
                alt=""
                role="presentation"
                width={420}
                height={420}
                loading="lazy"
                className="h-auto w-[68%] max-w-[360px] object-contain"
              />
            </div>

            {/* Floating feature cards — flattened to a 3-up grid on mobile */}
            <ul className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-3">
              <FeatureCard icon={ICON_PRICE} lines={[...t.hero.cards.price]} />
              <FeatureCard icon={ICON_DELIVERY} lines={[...t.hero.cards.delivery]} />
              <FeatureCard icon={ICON_QUALITY} lines={[...t.hero.cards.warranty]} />
            </ul>
          </div>
        </div>

        {/* Stats card — improved: full-width, clean white card with subtle border + shadow */}
        <div className="mt-3 grid grid-cols-2 divide-x divide-y divide-[#e5e7eb] overflow-hidden rounded-[16px] bg-white shadow-[0_8px_24px_rgba(0,0,0,0.06)] ring-1 ring-[#e5e7eb] sm:grid-cols-4 sm:divide-y-0">
          {t.hero.stats.map((s) => (
            <MobileStat key={s.number} number={s.number} lines={[...s.lines]} />
          ))}
        </div>
      </div>

      {/* === Desktop artboard (lg+) — original 1200×660 layout untouched === */}
      <div
        id="top-desktop"
        className="relative mx-auto mt-8 hidden w-[calc(100%-64px)] aspect-[1200/660] [container-type:inline-size] lg:block"
      >
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

        <div className={CLS.bgGradient} aria-hidden />

        <div className={CLS.product}>
          <Image
            src={HERO_PRODUCT}
            alt=""
            role="presentation"
            fill
            sizes="40vw"
            quality={75}
            loading="eager"
            className="object-contain"
          />
        </div>

        <div className={CLS.nlPill}>
          <Image
            src={NL_FLAG}
            alt=""
            width={32}
            height={26}
            className="block h-[26px] w-[32px] shrink-0 self-center object-contain"
          />
          <span className={CLS.nlPillText}>{t.hero.pill}</span>
        </div>

        <h1 className={CLS.headline}>
          {t.hero.headline1}{" "}
          <br />
          <span className="text-[#006BD5]">{t.hero.headlineHighlight}</span>{" "}
          {t.hero.headline2}
        </h1>

        <div className={CLS.subhead}>{t.hero.subhead}</div>

        <button
          type="button"
          onClick={() => openCallback("Homepage Hero — CTA (desktop)")}
          className={CLS.cta}
        >
          {t.hero.cta}
        </button>

        <a
          href="https://www.google.com/maps/place/VALENT.MD/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={t.hero.googleMapsAria}
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
          {t.hero.cards.price.map((line, i) => (
            <div key={i}>{line}</div>
          ))}
        </div>

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
          {t.hero.cards.deliveryShort.map((line, i) => (
            <div key={i}>{line}</div>
          ))}
        </div>

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
          {t.hero.cards.warrantyShort.map((line, i) => (
            <div key={i}>{line}</div>
          ))}
        </div>

        <div className={CLS.statsCard}>
          {t.hero.stats.map((s) => (
            <Stat key={s.number} number={s.number} lines={[...s.lines]} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ icon, lines }: { icon: string; lines: string[] }) {
  return (
    <li className="flex items-center gap-3 rounded-[12px] bg-white px-3 py-2 shadow-[3px_3px_10px_rgba(0,0,0,0.15)]">
      <span className="grid size-[36px] shrink-0 place-items-center rounded-full bg-[#006BD5]">
        <Image
          src={icon}
          alt=""
          width={20}
          height={20}
          className="h-[20px] w-[20px] brightness-0 invert object-contain"
        />
      </span>
      <span className="text-[13px] font-bold leading-[1.2] text-black">
        {lines.map((l, i) => (
          <span key={i} className="block">
            {l}
          </span>
        ))}
      </span>
    </li>
  );
}

function MobileStat({ number, lines }: { number: string; lines: string[] }) {
  return (
    <div className="flex items-start justify-between gap-2 px-4 py-4 sm:px-3 sm:py-5">
      <div className="min-w-0 text-left">
        <div className="text-[22px] font-bold leading-[1.05] tracking-[-0.02em] text-[#052142] sm:text-[24px]">
          {number}
        </div>
        <div className="mt-1 text-[11px] uppercase leading-[1.2] text-[#191919]">
          {lines.map((l, i) => (
            <div key={i}>{l}</div>
          ))}
        </div>
      </div>
      <CheckIcon className="mt-1 h-[18px] w-[18px] shrink-0 sm:h-[20px] sm:w-[20px]" />
    </div>
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
