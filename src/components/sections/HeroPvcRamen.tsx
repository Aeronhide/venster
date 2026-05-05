"use client";

import Image from "next/image";
import { useState } from "react";
import { useT } from "@/components/LanguageProvider";

const HERO_BG = "/images/rvc_banner.png";
const GOOGLE_BADGE = "/images/google-reviews-badge.png";

// Mirror of Hero.tsx — same 1200x660 canvas (lg+) + same mobile stacked dark banner.
// Only the banner content changes: two glass cards (features + form) instead of
// pill / headline / subhead / CTA / product image / 3 floating chips.
// The stats card position and treatment are identical to home Hero.

const CLS = {
  bgImage:
    "absolute left-[1.67%] top-0 w-[96.25%] h-[79.24%] rounded-[15px] overflow-hidden",
  featuresWrap:
    "absolute left-[5%] top-[8.5%] flex w-[42%] flex-col gap-[1.4cqi]",
  featuresTitleCard:
    "rounded-[14px] bg-[#473536] shadow-[5px_5px_10px_rgba(0,0,0,0.15)] px-[3.2cqi] py-[2.4cqi]",
  featuresListCard:
    "rounded-[14px] bg-[#473536] shadow-[5px_5px_10px_rgba(0,0,0,0.15)] px-[3.2cqi] py-[2.6cqi]",
  formCard:
    "absolute left-[53%] top-[8.5%] w-[42%] rounded-[14px] bg-[#082b4b]/85 backdrop-blur-[6px] shadow-[5px_5px_10px_rgba(0,0,0,0.15)] px-[3.5cqi] py-[3cqi]",
  statsCard:
    "absolute left-[5%] top-[70.3%] z-10 w-[90%] h-[18.64%] rounded-[15px] bg-white shadow-[0_8px_32px_rgba(0,0,0,0.1)] flex items-center justify-around px-[2%]",
};

export function HeroPvcRamen() {
  const t = useT();

  return (
    <section className="font-sans">
      {/* === Mobile / tablet (stacked) — same pattern as home Hero mobile === */}
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
          </div>

          {/* Two cards stacked inside the dark banner */}
          <div className="relative grid gap-3 px-4 py-6 sm:gap-4 sm:px-6 sm:py-8">
            <FeaturesCardMobile />
            <FormCardMobile />
          </div>
        </div>

        {/* Stats card — same divide-x grid + Stat row as home mobile */}
        <div className="mt-3 grid grid-cols-2 divide-x divide-y divide-[#e5e7eb] overflow-hidden rounded-[16px] bg-white shadow-[0_8px_24px_rgba(0,0,0,0.06)] ring-1 ring-[#e5e7eb] sm:grid-cols-4 sm:divide-y-0">
          {t.hero.stats.map((s) => (
            <MobileStat key={s.number} number={s.number} lines={[...s.lines]} />
          ))}
        </div>
      </div>

      {/* === Desktop artboard (lg+) — copied from home Hero, 1200x660 canvas === */}
      <div className="relative mx-auto mt-8 hidden w-[calc(100%-64px)] aspect-[1200/660] [container-type:inline-size] lg:block">
        <div className={CLS.bgImage}>
          <Image
            src={HERO_BG}
            alt=""
            role="presentation"
            fill
            sizes="100vw"
            quality={75}
            priority
            fetchPriority="high"
            className="object-cover object-center"
          />
        </div>

        {/* LEFT — title card + list card + google badge */}
        <div className={CLS.featuresWrap}>
          <article className={CLS.featuresTitleCard}>
            <h1 className="text-[3.667cqi] font-bold uppercase leading-[1] tracking-tight text-white">
              {t.pvcRamen.headline}
            </h1>
          </article>
          <article className={CLS.featuresListCard}>
            <ul className="space-y-[1.2cqi]">
              {t.pvcRamen.features.map((f) => (
                <li
                  key={f}
                  className="flex items-baseline gap-[1cqi] text-[1.5cqi] font-bold leading-[1.25] text-white"
                >
                  <span aria-hidden className="leading-none">•</span>
                  {f}
                </li>
              ))}
            </ul>
          </article>
          <a
            href="https://www.google.com/maps/place/VALENT.MD/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t.pvcRamen.ratingAria}
            className="inline-flex h-[3.6cqi] w-[14cqi] items-center justify-center rounded-[10cqi] bg-white px-[0.6cqi] shadow-[3px_3px_8px_rgba(0,0,0,0.15)]"
          >
            <Image
              src={GOOGLE_BADGE}
              alt=""
              width={188}
              height={34}
              className="h-auto w-[90%] object-contain"
            />
          </a>
        </div>

        {/* RIGHT — form card */}
        <article className={CLS.formCard}>
          <FormCardContent />
        </article>

        {/* Stats card — exactly the same as home Hero */}
        <div className={CLS.statsCard}>
          {t.hero.stats.map((s) => (
            <Stat key={s.number} number={s.number} lines={[...s.lines]} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----- Card content shared between desktop and mobile (with size-scoped classes) ----- */

function FormCardContent() {
  const t = useT();
  const [phone, setPhone] = useState("");
  const [agreed, setAgreed] = useState(false);

  return (
    <>
      <h2 className="text-[2.2cqi] font-bold leading-[1.25] text-white">
        {t.pvcRamen.formTitle}
      </h2>
      <form
        className="mt-[2cqi] space-y-[1.4cqi]"
        onSubmit={(e) => e.preventDefault()}
        aria-label={t.pvcRamen.formTitle}
      >
        <label
          htmlFor="rvc-banner-phone-d"
          className="block text-[1.1cqi] font-medium text-white/85"
        >
          {t.pvcRamen.formPhoneLabel}
        </label>
        <div className="flex h-[5.5cqi] items-stretch overflow-hidden rounded-[12px] bg-white">
          <span className="flex items-center gap-[0.6cqi] border-r border-[#c7c7c7] px-[1.4cqi] text-[1.4cqi] text-[#050505]">
            <span
              aria-hidden
              className="inline-block h-[1.2cqi] w-[1.7cqi] rounded-[2px] bg-[linear-gradient(to_bottom,#AE1C28_33%,#fff_33%_66%,#21468B_66%)]"
            />
            +31
          </span>
          <input
            id="rvc-banner-phone-d"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder={t.pvcRamen.formPhonePlaceholder}
            className="h-full flex-1 bg-white px-[1.2cqi] text-[1.4cqi] text-[#050505] outline-none placeholder:text-[#9a9a9a]"
          />
        </div>
        <label className="flex items-start gap-[0.8cqi] text-[1cqi] leading-[1.4] text-white/85">
          <input
            type="checkbox"
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
            required
            className="mt-[0.15cqi] h-[1.4cqi] w-[1.4cqi] flex-none accent-[#226CD5]"
          />
          <span>
            {t.pvcRamen.formPrivacyBefore}
            <a href="#privacy" className="font-medium underline">
              {t.pvcRamen.formPrivacyLink}
            </a>
          </span>
        </label>
        <button
          type="submit"
          className="block h-[5cqi] w-full rounded-[12px] bg-[#C40000] text-[1.4cqi] font-bold uppercase tracking-tight text-white"
        >
          {t.pvcRamen.formSubmit}
        </button>
      </form>
    </>
  );
}

function FeaturesCardMobile() {
  const t = useT();
  return (
    <div className="flex flex-col gap-3 sm:gap-4">
      <article className="rounded-[14px] bg-[#473536] px-5 py-5 sm:px-7 sm:py-6">
        <h1 className="text-[28px] font-bold uppercase leading-[1] tracking-tight text-white sm:text-[36px]">
          {t.pvcRamen.headline}
        </h1>
      </article>
      <article className="rounded-[14px] bg-[#473536] px-5 py-5 sm:px-7 sm:py-6">
        <ul className="space-y-3 sm:space-y-4">
          {t.pvcRamen.features.map((f) => (
            <li
              key={f}
              className="flex items-baseline gap-3 text-[15px] font-bold leading-[1.3] text-white sm:text-[17px]"
            >
              <span aria-hidden className="leading-none">•</span>
              {f}
            </li>
          ))}
        </ul>
      </article>
      <a
        href="https://www.google.com/maps/place/VALENT.MD/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t.pvcRamen.ratingAria}
        className="inline-flex h-[42px] w-full max-w-[220px] items-center justify-center rounded-[12px] bg-white px-2 shadow-[3px_3px_8px_rgba(0,0,0,0.15)]"
      >
        <Image
          src={GOOGLE_BADGE}
          alt=""
          width={188}
          height={34}
          className="h-auto w-[90%] object-contain"
        />
      </a>
    </div>
  );
}

function FormCardMobile() {
  const t = useT();
  const [phone, setPhone] = useState("");
  const [agreed, setAgreed] = useState(false);
  return (
    <article className="rounded-[14px] bg-[#082b4b]/85 px-5 py-6 backdrop-blur-[6px] sm:px-7 sm:py-7">
      <h2 className="text-[18px] font-bold leading-[1.25] text-white sm:text-[22px]">
        {t.pvcRamen.formTitle}
      </h2>
      <form
        className="mt-4 space-y-3 sm:mt-5 sm:space-y-4"
        onSubmit={(e) => e.preventDefault()}
        aria-label={t.pvcRamen.formTitle}
      >
        <label
          htmlFor="rvc-banner-phone-m"
          className="block text-[13px] font-medium text-white/85 sm:text-[14px]"
        >
          {t.pvcRamen.formPhoneLabel}
        </label>
        <div className="flex h-[56px] items-stretch overflow-hidden rounded-[12px] bg-white sm:h-[64px]">
          <span className="flex items-center gap-2 border-r border-[#c7c7c7] px-3 text-[15px] text-[#050505]">
            <span
              aria-hidden
              className="inline-block h-[14px] w-[20px] rounded-[2px] bg-[linear-gradient(to_bottom,#AE1C28_33%,#fff_33%_66%,#21468B_66%)]"
            />
            +31
          </span>
          <input
            id="rvc-banner-phone-m"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder={t.pvcRamen.formPhonePlaceholder}
            className="h-full flex-1 bg-white px-3 text-[16px] text-[#050505] outline-none placeholder:text-[#9a9a9a]"
          />
        </div>
        <label className="flex items-start gap-2 text-[12px] leading-[1.4] text-white/85 sm:text-[13px]">
          <input
            type="checkbox"
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
            required
            className="mt-[2px] h-[16px] w-[16px] flex-none accent-[#226CD5]"
          />
          <span>
            {t.pvcRamen.formPrivacyBefore}
            <a href="#privacy" className="font-medium underline">
              {t.pvcRamen.formPrivacyLink}
            </a>
          </span>
        </label>
        <button
          type="submit"
          className="block h-[52px] w-full rounded-[12px] bg-[#C40000] text-[14px] font-bold uppercase tracking-tight text-white sm:h-[60px] sm:text-[16px]"
        >
          {t.pvcRamen.formSubmit}
        </button>
      </form>
    </article>
  );
}

/* ----- Atoms ----- */

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

function CheckIcon({ className }: { className: string }) {
  return (
    <div className={className}>
      <svg width="100%" height="100%" viewBox="0 0 24 24" aria-hidden className="block">
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
