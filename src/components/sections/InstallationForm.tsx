'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { useLang } from '@/components/LanguageProvider';
import { isPhoneValid, PHONE_MIN_DIGITS } from '@/lib/phone';

// Tilda block rec1337102011. Card 1160x471 (#f5f5f5, radius 22). Image 573x382, title fs 28 → 40,
// body fs 14 → 20, "Montage" tag fs 12 → 17, button "Plan een inmeting" 330x60 → 475x86, fs 20 → 29.
const INSTALLER_IMG = '/images/valent_img.webp';

type FormStatus =
  | 'idle'
  | 'loading'
  | 'success'
  | 'error'
  | 'rate_limited'
  | 'phone_too_short';

export function InstallationForm() {
  const { t, lang } = useLang();
  const [phone, setPhone] = useState('');
  const [agreed, setAgreed] = useState(false);
  const [status, setStatus] = useState<FormStatus>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === 'loading') return;
    if (!isPhoneValid(phone)) {
      setStatus('phone_too_short');
      return;
    }
    setStatus('loading');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          form_type: 'installation',
          phone,
          lang,
          website: '',
          page_url: typeof window !== 'undefined' ? window.location.href : '',
          source: 'Inmeting formulier (homepage)',
        }),
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
    <Section
      id='installation'
      ariaLabelledby='installation-title'
      className='bg-white'
    >
      <Container>
        <article className='mx-auto grid max-w-[1670px] gap-[24px] overflow-hidden rounded-[22px] bg-[#f5f5f5] p-[24px] sm:p-[40px] lg:grid-cols-[825px_1fr] lg:gap-[80px] lg:p-[88px]'>
          <div className='relative h-[280px] w-full overflow-hidden rounded-[22px] bg-white sm:h-[420px] lg:h-[550px]'>
            <Image
              src={INSTALLER_IMG}
              alt={t.installation.installerAlt}
              fill
              sizes='(min-width: 1024px) 825px, 100vw'
              loading='lazy'
              className='object-cover'
            />
          </div>

          <div className='flex flex-col justify-start'>
            <span className='inline-flex h-[27px] w-fit items-center justify-center rounded-[7px] bg-[#006bd5] px-[14px] text-[17px] font-semibold uppercase text-white'>
              {t.installation.tag}
            </span>

            <h2
              id='installation-title'
              className='mt-[24px] text-[24px] font-bold leading-[1.3] text-[#333333] sm:text-[32px] lg:text-[40px]'
            >
              {t.installation.title}
            </h2>

            <p className='mt-[24px] text-[16px] leading-[1.5] text-[#7b7b7b] lg:text-[20px]'>
              {t.installation.body}
            </p>

            {status === 'success' ? (
              <div
                role='status'
                aria-live='polite'
                className='mt-[32px] rounded-[16px] bg-[#e6f4ea] p-[24px] text-[16px] text-[#1a5c2a]'
              >
                {t.contactForm.success}
              </div>
            ) : (
              <form
                className='mt-[32px] flex flex-col gap-[20px]'
                onSubmit={handleSubmit}
                aria-label={t.installation.ariaLabel}
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

                <label className='flex flex-col gap-[6px]'>
                  <span className='text-[14px] text-[#7b7b7b]'>{t.installation.phoneLabel}</span>
                  <div className='flex h-[72px] items-stretch overflow-hidden rounded-[12px] bg-white ring-1 ring-[#c7c7c7]'>
                    <span className='flex items-center gap-[8px] border-r border-[#c7c7c7] bg-white px-[16px] text-[16px] text-[#333333]'>
                      <span
                        aria-hidden
                        className='inline-block h-[12px] w-[18px] overflow-hidden rounded-[2px] bg-[linear-gradient(to_bottom,#AE1C28_33%,#fff_33%_66%,#21468B_66%)]'
                      />
                      +31
                    </span>
                    <input
                      type='tel'
                      inputMode='tel'
                      autoComplete='tel'
                      minLength={PHONE_MIN_DIGITS}
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder={t.installation.phonePlaceholder}
                      className='flex-1 bg-white px-[16px] text-[16px] text-[#333333] outline-none'
                      required
                    />
                  </div>
                </label>

                <label className='flex items-start gap-[10px] text-[14px] leading-[1.4] text-[#7b7b7b]'>
                  <input
                    type='checkbox'
                    checked={agreed}
                    onChange={(e) => setAgreed(e.target.checked)}
                    required
                    className='mt-[4px] h-[16px] w-[16px] accent-[#226CD5]'
                  />
                  <span>
                    {t.installation.privacyBefore}
                    <a
                      href={lang === 'en' ? '/en/privacy' : '/privacy'}
                    target='_blank'
                    rel='noopener'
                      className='font-medium text-[#226CD5] underline'
                    >
                      {t.installation.privacyLink}
                    </a>
                  </span>
                </label>

                <button
                  type='submit'
                  disabled={status === 'loading'}
                  className='mt-[8px] inline-flex h-[64px] w-full items-center justify-center rounded-[16px] bg-[#226CD5] px-[24px] text-[18px] font-bold capitalize text-white disabled:cursor-not-allowed disabled:opacity-60 [font-family:Roboto,Arial,sans-serif] sm:h-[72px] sm:text-[20px] lg:h-[86px] lg:text-[24px]'
                >
                  {status === 'loading' ? t.contactForm.sending : t.installation.submit}
                </button>

                {(status === 'error' || status === 'rate_limited' || status === 'phone_too_short') && (
                  <p role='alert' aria-live='assertive' className='text-[14px] text-[#c0392b]'>
                    {status === 'rate_limited'
                      ? t.contactForm.rateLimited
                      : status === 'phone_too_short'
                        ? t.contactForm.phoneTooShort
                        : t.contactForm.error}
                  </p>
                )}
              </form>
            )}
          </div>
        </article>
      </Container>
    </Section>
  );
}
