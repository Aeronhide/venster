'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useLang } from '@/components/LanguageProvider';
import { useModal } from '@/components/ModalContext';

const PHONE_DISPLAY = '+31 853016849';
const PHONE_HREF = 'tel:+31853016849';
const WHATSAPP_HREF = 'https://wa.me/3197010266613';

// Tilda spec — header artboard 1200x70 logical, rendered at zoom 1.44 → ~100px tall
// Nav text 14px, phone 14px, hours 10px, CTA 20px
// Logo 155x53, icons 45x45, UK flag 60x36, CTA 233x45
// All elements vertically centered within the 100px bar
// Sizes are Tilda spec × 1.44 zoom (matches what renders on venstervalent.nl)
const NAV_LINK = "text-[20px] leading-[32px] text-fg hover:text-brand";

const CTA =
  "inline-flex h-[65px] w-[290px] items-center justify-center rounded-[16px] bg-[#226CD5] text-[22px] font-bold leading-[28px] text-white text-center uppercase [font-family:Roboto,Arial,sans-serif]";

export function Header() {
  const { lang, t, toggleLang } = useLang();
  const nav = t.header.nav;
  const HOURS = t.header.hours;
  const [open, setOpen] = useState(false);
  const { openCallback } = useModal();
  const pathname = usePathname();
  const homeBase = lang === 'en' ? '/en' : '/';
  const isHome = pathname === '/' || pathname === '/en';
  const navHref = (anchor: string) => isHome ? anchor : `${homeBase}${anchor}`;

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 h-[64px] w-full bg-white sm:h-[80px] lg:h-[101px]">
      <div className="mx-auto flex h-full items-center px-3 lg:px-4">
        {/* Logo + nav grouped tight on the left */}
        <a
          href={homeBase}
          aria-label={lang === 'nl' ? 'Valent — Nederlandse homepage' : 'Valent — English homepage'}
          className="block shrink-0"
        >
          <Image
            src="/images/header/logo.png"
            alt="Valent"
            width={155}
            height={53}
            priority
            className="h-[40px] w-auto sm:h-[52px] lg:h-[76px] lg:w-[223px]"
          />
        </a>

        {/* Nav close to logo */}
        <nav
          aria-label={lang === 'nl' ? 'Hoofdmenu' : 'Main menu'}
          className="hidden lg:flex items-center gap-[58px] ml-[40px]"
        >
          {nav.map((item) => (
            <a key={item.href} href={navHref(item.href)} className={NAV_LINK}>
              {item.label}
            </a>
          ))}
        </nav>

        {/* Spacer — pushes flag to center */}
        <div className="hidden flex-1 lg:block" />

        {/* Lang switcher (desktop) — UK flag when current is NL, Dutch flag when current is EN */}
        <button
          type="button"
          onClick={toggleLang}
          aria-label={
            lang === 'nl' ? t.header.langSwitchLabel : t.header.langSwitchLabelToNL
          }
          className="hidden h-[52px] w-[86px] shrink-0 overflow-hidden rounded-[4px] lg:block"
        >
          {lang === 'nl' ? <UKFlag /> : <DutchFlag />}
        </button>

        {/* Spacer — pushes the right cluster to the far right */}
        <div className="hidden flex-1 lg:block" />

        {/* Right cluster — phone+hours, phone icon, WhatsApp, CTA */}
        <div className="hidden lg:flex items-center gap-[16px]">
          {/* Phone + hours stacked — Tilda 14/10 × 1.44 = 20/14 */}
          <div className="flex flex-col items-end gap-[8px] leading-tight">
            <a
              href={PHONE_HREF}
              className="text-[20px] font-bold leading-[28px] text-[#226CD5]"
            >
              {PHONE_DISPLAY}
            </a>
            <span className="text-[14px] leading-[20px] text-black">
              {HOURS}
            </span>
          </div>

          {/* Icon buttons grouped tight together */}
          <div className="flex items-center gap-[4px]">
          {/* Phone icon button — enlarged */}
          <a
            href={PHONE_HREF}
            aria-label={t.header.phoneAria}
            className="grid h-[65px] w-[65px] place-items-center rounded-[16px] bg-[#F5F5F5]"
          >
            <svg
              viewBox="0 0 34 34"
              fill="none"
              role="img"
              className="h-[58px] w-[58px]"
              aria-hidden
            >
              <rect width='34' height='34' rx='6' fill='#F5F5F5' />
              <path
                fill='#226CD5'
                d='M14.4 12.9c-.18-.4-.37-.4-.55-.41-.14 0-.31 0-.47 0-.16 0-.43.06-.65.29-.23.24-.86.82-.86 2 0 1.18.88 2.32 1.01 2.48.12.16 1.7 2.66 4.21 3.62 2.09.8 2.51.64 2.96.6.46-.04 1.46-.6 1.67-1.16.2-.56.2-1.04.14-1.14-.06-.1-.23-.16-.47-.28s-1.46-.7-1.69-.78c-.23-.08-.4-.12-.56.12s-.65.78-.79.94c-.15.16-.29.18-.54.06-.25-.12-1.05-.39-2-1.21-.74-.62-1.24-1.4-1.39-1.63-.14-.24.02-.36.1-.49.1-.1.23-.27.35-.4.12-.13.16-.23.24-.39.08-.16.04-.3-.02-.42-.06-.12-.55-1.34-.76-1.83Z'
              />
            </svg>
          </a>

          {/* WhatsApp icon button */}
          <a
            href={WHATSAPP_HREF}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t.header.whatsappAria}
            className="grid h-[65px] w-[65px] place-items-center rounded-[16px] bg-[#F5F5F5]"
          >
            <svg
              viewBox="0 0 34 34"
              fill="none"
              role="img"
              aria-hidden
              className="h-[58px] w-[58px]"
            >
              <rect width='34' height='34' rx='6' fill='#F5F5F5' />
              <path
                d='M11.05 16.95c0 1.05.27 2.07.79 2.97L11 23l3.17-.83c.88.48 1.86.73 2.86.73h.01c3.29 0 5.97-2.67 5.97-5.95.0-1.59-.62-3.08-1.75-4.21S18.62 11 17.02 11c-3.29 0-5.97 2.67-5.97 5.95Z'
                fill='url(#wgrad)'
              />
              <path
                d='M15.66 14.53c-.1-.24-.2-.25-.3-.25h-.25c-.09 0-.23.04-.36.18-.12.15-.47.5-.47 1.21s.48 1.4.55 1.5c.07.1.93 1.6 2.29 2.18 1.13.48 1.36.39 1.61.36.25-.02.8-.32.91-.66.11-.34.11-.63.08-.69-.03-.06-.12-.1-.26-.17l-.81-.39c-.12-.05-.21-.07-.3.07-.09.15-.35.41-.42.5-.08.1-.15.11-.29.04-.13-.07-.57-.21-1.08-.67-.4-.38-.67-.85-.75-.99-.08-.15-.01-.23.06-.3.06-.06.13-.16.2-.25.07-.08.09-.14.14-.24.04-.1.02-.18-.01-.25-.04-.07-.3-.79-.42-1.07Z'
                fill='white'
              />
              <defs>
                <linearGradient
                  id='wgrad'
                  x1='17'
                  y1='23'
                  x2='17'
                  y2='11'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#1FAF38' />
                  <stop offset='1' stopColor='#60D669' />
                </linearGradient>
              </defs>
            </svg>
          </a>
          </div>

          {/* CTA — opens callback modal */}
          <button
            type='button'
            onClick={() => openCallback("Header — desktop CTA (Bel mij terug)")}
            className={CTA}
          >
            {t.header.cta}
          </button>
        </div>

        {/* Mobile right cluster — lang flag, phone, WhatsApp, hamburger */}
        <div className='ml-auto flex items-center gap-1.5 lg:hidden'>
          {/* Language switcher — UK flag when NL active, Dutch flag when EN active */}
          <button
            type='button'
            onClick={toggleLang}
            aria-label={
              lang === 'nl'
                ? t.header.langSwitchLabel
                : t.header.langSwitchLabelToNL
            }
            className='h-[22px] w-[34px] overflow-hidden rounded-[3px] sm:h-[26px] sm:w-[40px]'
          >
            {lang === 'nl' ? <UKFlag /> : <DutchFlag />}
          </button>

          {/* Phone icon — desktop SVG cropped tighter so the glyph fills the button */}
          <a
            href={PHONE_HREF}
            aria-label={t.header.phoneAria}
            className='grid h-[40px] w-[40px] place-items-center rounded-[10px] bg-[#F5F5F5]'
          >
            <svg
              viewBox='9 9.5 16 14'
              fill='none'
              role='img'
              aria-hidden
              className='h-[24px] w-[24px]'
            >
              <path
                fill='#226CD5'
                d='M14.4 12.9c-.18-.4-.37-.4-.55-.41-.14 0-.31 0-.47 0-.16 0-.43.06-.65.29-.23.24-.86.82-.86 2 0 1.18.88 2.32 1.01 2.48.12.16 1.7 2.66 4.21 3.62 2.09.8 2.51.64 2.96.6.46-.04 1.46-.6 1.67-1.16.2-.56.2-1.04.14-1.14-.06-.1-.23-.16-.47-.28s-1.46-.7-1.69-.78c-.23-.08-.4-.12-.56.12s-.65.78-.79.94c-.15.16-.29.18-.54.06-.25-.12-1.05-.39-2-1.21-.74-.62-1.24-1.4-1.39-1.63-.14-.24.02-.36.1-.49.1-.1.23-.27.35-.4.12-.13.16-.23.24-.39.08-.16.04-.3-.02-.42-.06-.12-.55-1.34-.76-1.83Z'
              />
            </svg>
          </a>

          {/* WhatsApp icon — desktop SVG cropped tighter so the glyph fills the button */}
          <a
            href={WHATSAPP_HREF}
            target='_blank'
            rel='noopener noreferrer'
            aria-label={t.header.whatsappAria}
            className='grid h-[40px] w-[40px] place-items-center rounded-[10px] bg-[#F5F5F5]'
          >
            <svg
              viewBox='8.5 8.5 17 17'
              fill='none'
              role='img'
              aria-hidden
              className='h-[24px] w-[24px]'
            >
              <path
                d='M11.05 16.95c0 1.05.27 2.07.79 2.97L11 23l3.17-.83c.88.48 1.86.73 2.86.73h.01c3.29 0 5.97-2.67 5.97-5.95.0-1.59-.62-3.08-1.75-4.21S18.62 11 17.02 11c-3.29 0-5.97 2.67-5.97 5.95Z'
                fill='url(#wgrad-m)'
              />
              <path
                d='M15.66 14.53c-.1-.24-.2-.25-.3-.25h-.25c-.09 0-.23.04-.36.18-.12.15-.47.5-.47 1.21s.48 1.4.55 1.5c.07.1.93 1.6 2.29 2.18 1.13.48 1.36.39 1.61.36.25-.02.8-.32.91-.66.11-.34.11-.63.08-.69-.03-.06-.12-.1-.26-.17l-.81-.39c-.12-.05-.21-.07-.3.07-.09.15-.35.41-.42.5-.08.1-.15.11-.29.04-.13-.07-.57-.21-1.08-.67-.4-.38-.67-.85-.75-.99-.08-.15-.01-.23.06-.3.06-.06.13-.16.2-.25.07-.08.09-.14.14-.24.04-.1.02-.18-.01-.25-.04-.07-.3-.79-.42-1.07Z'
                fill='white'
              />
              <defs>
                <linearGradient
                  id='wgrad-m'
                  x1='17'
                  y1='23'
                  x2='17'
                  y2='11'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#1FAF38' />
                  <stop offset='1' stopColor='#60D669' />
                </linearGradient>
              </defs>
            </svg>
          </a>

          {/* Hamburger — smaller (40x40 vs previous 44x44) */}
          <button
            type='button'
            aria-label={open ? t.header.menuClose : t.header.menuOpen}
            aria-expanded={open}
            aria-controls='mobile-nav'
            onClick={() => setOpen((v) => !v)}
            className='grid h-[40px] w-[40px] place-items-center rounded-[10px] ring-1 ring-border text-[#050505]'
          >
            <span className='sr-only'>Menu</span>
            <svg width='20' height='20' viewBox='0 0 24 24' aria-hidden>
              {open ? (
                <path
                  d='M6 6l12 12M18 6L6 18'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2.6'
                  strokeLinecap='round'
                />
              ) : (
                <path
                  d='M4 7h16M4 12h16M4 17h16'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2.6'
                  strokeLinecap='round'
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div
          id='mobile-nav'
          className='lg:hidden fixed inset-x-0 bottom-0 top-[64px] sm:top-[80px] z-40 overflow-y-auto border-t border-border/60 bg-white'
        >
          <div className='flex min-h-full flex-col px-5 py-6'>
            <ul className='flex flex-col divide-y divide-border/60'>
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    onClick={() => setOpen(false)}
                    className='block py-4 text-lg font-semibold text-[#050505] hover:text-brand'
                    href={navHref(item.href)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className='mt-6 flex flex-col gap-3'>
              <button
                type='button'
                onClick={() => {
                  setOpen(false);
                  openCallback("Header — mobile menu CTA (Bel mij terug)");
                }}
                className={CTA + ' w-full'}
              >
                {t.header.cta}
              </button>

              <a
                href={PHONE_HREF}
                onClick={() => setOpen(false)}
                className='flex h-[64px] w-full items-center justify-center gap-3 rounded-[16px] bg-[#F5F5F5] text-[18px] font-bold text-[#226CD5]'
              >
                <svg viewBox='0 0 24 24' className='h-6 w-6' fill='currentColor' aria-hidden>
                  <path d='M6.6 10.8c1.4 2.8 3.8 5.2 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.5.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.4.6 3.5.1.4 0 .8-.3 1l-2.2 2.3z' />
                </svg>
                {PHONE_DISPLAY}
              </a>

              <a
                href={WHATSAPP_HREF}
                target='_blank'
                rel='noopener noreferrer'
                onClick={() => setOpen(false)}
                className='flex h-[64px] w-full items-center justify-center gap-3 rounded-[16px] bg-[#1FAF38] text-[18px] font-bold text-white'
              >
                <svg viewBox='0 0 24 24' className='h-6 w-6' fill='currentColor' aria-hidden>
                  <path d='M20 3.5A11 11 0 003 19l-1 4 4-1a11 11 0 0014-18.5zM12 21c-1.7 0-3.4-.5-4.8-1.4l-.3-.2-2.4.6.6-2.3-.2-.4A9 9 0 1112 21zm5-6.5c-.3-.2-1.7-.8-2-1-.3-.1-.5-.1-.7.1l-.9 1c-.2.2-.3.2-.6.1-.3-.2-1.2-.5-2.4-1.4-.9-.7-1.5-1.6-1.7-1.9-.2-.3 0-.5.1-.6l.4-.5c.1-.2.2-.3.3-.5 0-.2 0-.3-.1-.5l-.9-2.1c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.3.3-1 1-1 2.4 0 1.4 1 2.7 1.2 2.9.1.2 2 3.1 4.9 4.4.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.7-.7 1.9-1.4.2-.6.2-1.2.2-1.3 0-.1-.2-.2-.5-.3z' />
                </svg>
                WhatsApp
              </a>

              <p className='mt-2 text-center text-sm text-fg-subtle'>
                {HOURS}
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

function UKFlag() {
  return (
    <svg viewBox='0 0 60 36' aria-hidden className='h-full w-full'>
      <rect width='60' height='36' fill='#012169' />
      <path d='M0 0L60 36M60 0L0 36' stroke='#FFFFFF' strokeWidth='6' />
      <path d='M0 0L60 36M60 0L0 36' stroke='#C8102E' strokeWidth='3' />
      <path d='M30 0V36M0 18H60' stroke='#FFFFFF' strokeWidth='10' />
      <path d='M30 0V36M0 18H60' stroke='#C8102E' strokeWidth='6' />
    </svg>
  );
}

function DutchFlag() {
  return (
    <svg viewBox='0 0 60 36' aria-hidden className='h-full w-full' preserveAspectRatio='none'>
      <rect width='60' height='12' fill='#AE1F28' />
      <rect y='12' width='60' height='12' fill='#FFFFFF' />
      <rect y='24' width='60' height='12' fill='#20478B' />
    </svg>
  );
}
