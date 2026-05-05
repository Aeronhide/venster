'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { useLang } from '@/components/LanguageProvider';

// Tilda block rec1337102151 (T396, dark blue gradient card with form + magazine photo).
// Card 1168x383, gradient from rgba(0,26,50,1) -> rgba(0,73,145,0). Border radius 16 -> 23.
// Title fs 36 -> 52px white bold. "Catalog" tag fs 8 -> 12 on #006bd5.
// Form: email + phone(+31) + privacy + Verzenden btn (#226cd5, fs 20 -> 29).
// Catalog magazine image rotated -9deg on right.

const CATALOG_IMG = '/images/catalog.webp';

type FormStatus = 'idle' | 'loading' | 'success' | 'error' | 'rate_limited';

export function CatalogForm() {
  const { t, lang } = useLang();
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [agreed, setAgreed] = useState(false);
  const [status, setStatus] = useState<FormStatus>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === 'loading') return;
    setStatus('loading');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ form_type: 'catalog', email, phone, lang, website: '' }),
      });
      const data: { success: boolean; code?: string } = await res.json();
      if (data.success) {
        setStatus('success');
      } else if (data.code === 'rate_limited') {
        setStatus('rate_limited');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  return (
    <Section id='catalog' ariaLabelledby='catalog-title' className='bg-white'>
      <Container>
        <article className='relative mx-auto grid max-w-[1670px] gap-[40px] overflow-hidden rounded-[23px] bg-[linear-gradient(58deg,rgba(0,26,50,1)_0%,rgba(0,26,48,0.74)_62%,rgba(0,73,145,0.5)_100%)] p-[24px] text-white sm:p-[40px] lg:grid-cols-[1fr_1fr] lg:items-center lg:p-[80px]'>
          <div className='relative z-10 max-w-[660px]'>
            <span className='inline-flex h-[24px] items-center justify-center rounded-[7px] bg-[#006bd5] px-[14px] text-[12px] font-semibold uppercase text-white [font-family:Roboto,Arial,sans-serif]'>
              {t.catalog.tag}
            </span>

            <h2
              id='catalog-title'
              className='mt-[24px] text-[28px] font-bold leading-[1.3] tracking-[-1px] text-white [font-family:Roboto,Arial,sans-serif] sm:text-[36px] lg:text-[52px]'
            >
              {t.catalog.title}
            </h2>

            {status === 'success' ? (
              <div
                role='status'
                aria-live='polite'
                className='mt-[40px] rounded-[16px] bg-white/10 p-[24px] text-[16px] text-white'
              >
                {t.contactForm.success}
              </div>
            ) : (
              <form
                className='mt-[40px] space-y-[20px]'
                onSubmit={handleSubmit}
                aria-label={t.catalog.ariaLabel}
              >
                <input
                  type='text'
                  name='website'
                  className='hidden'
                  aria-hidden='true'
                  tabIndex={-1}
                  autoComplete='off'
                  defaultValue=''
                  readOnly
                />

                <label htmlFor='catalog-email' className='sr-only'>
                  {t.callbackModal.emailLabel}
                </label>
                <input
                  id='catalog-email'
                  type='email'
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t.catalog.emailPlaceholder}
                  className='block h-[64px] w-full rounded-[12px] bg-white px-[20px] text-[18px] text-black outline-none [font-family:Roboto,Arial,sans-serif] placeholder:text-black/40 focus:ring-2 focus:ring-[#66a6e6] sm:h-[72px] sm:text-[20px]'
                />

                <div className='flex h-[64px] items-stretch overflow-hidden rounded-[12px] bg-white ring-1 ring-white/10 focus-within:ring-2 focus-within:ring-[#66a6e6] sm:h-[72px]'>
                  <span className='flex items-center gap-[8px] bg-white px-[16px] text-[18px] text-black [font-family:Roboto,Arial,sans-serif] sm:text-[20px]'>
                    <span
                      aria-hidden
                      className='inline-block h-[14px] w-[20px] rounded-[2px] bg-[linear-gradient(to_bottom,#AE1C28_33%,#fff_33%_66%,#21468B_66%)]'
                    />
                    +31
                  </span>
                  <label htmlFor='catalog-phone' className='sr-only'>
                    {t.callbackModal.phoneLabel}
                  </label>
                  <input
                    id='catalog-phone'
                    type='tel'
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder={t.catalog.phonePlaceholder}
                    className='h-full flex-1 bg-white px-[12px] text-[18px] text-black outline-none [font-family:Roboto,Arial,sans-serif] placeholder:text-black/40 sm:text-[20px]'
                  />
                </div>

                <label className='flex items-start gap-[8px] text-[14px] text-white/85 [font-family:Roboto,Arial,sans-serif]'>
                  <input
                    type='checkbox'
                    checked={agreed}
                    onChange={(e) => setAgreed(e.target.checked)}
                    required
                    className='mt-[4px] h-[16px] w-[16px] flex-none accent-[#226CD5]'
                  />
                  <span>
                    {t.catalog.privacyBefore}
                    <a href={lang === 'en' ? '/en/privacy' : '/privacy'} target='_blank' rel='noopener' className='underline'>
                      {t.catalog.privacyLink}
                    </a>
                  </span>
                </label>

                <button
                  type='submit'
                  disabled={status === 'loading'}
                  className='block h-[64px] w-full rounded-[16px] bg-[#226CD5] text-[18px] font-bold capitalize text-white disabled:cursor-not-allowed disabled:opacity-60 [font-family:Roboto,Arial,sans-serif] sm:h-[72px] sm:text-[22px] lg:h-[86px] lg:text-[29px]'
                >
                  {status === 'loading' ? t.contactForm.sending : t.catalog.submit}
                </button>

                {(status === 'error' || status === 'rate_limited') && (
                  <p role='alert' aria-live='assertive' className='text-[14px] text-red-300'>
                    {status === 'rate_limited' ? t.contactForm.rateLimited : t.contactForm.error}
                  </p>
                )}
              </form>
            )}
          </div>

          <div className='relative h-full min-h-[280px] sm:min-h-[360px] lg:min-h-[440px]'>
            <div className='absolute inset-0 grid place-items-center'>
              <div className='relative aspect-[768/512] w-full max-w-[660px] -rotate-[9deg]'>
                <Image
                  src={CATALOG_IMG}
                  alt={t.catalog.catalogAlt}
                  fill
                  sizes='(min-width: 1024px) 50vw, 100vw'
                  loading='lazy'
                  className='object-contain drop-shadow-[0_30px_50px_rgba(0,0,0,0.5)]'
                />
              </div>
            </div>
          </div>
        </article>
      </Container>
    </Section>
  );
}
