'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';

// Tilda block rec1337102151 (T396, dark blue gradient card with form + magazine photo).
// Card 1168x383, gradient from rgba(0,26,50,1) -> rgba(0,73,145,0). Border radius 16 -> 23.
// Title fs 36 -> 52px white bold. "Catalog" tag fs 8 -> 12 on #006bd5.
// Form: email + phone(+31) + privacy + Verzenden btn (#226cd5, fs 20 -> 29).
// Catalog magazine image rotated -9deg on right.

const CATALOG_IMG = '/images/catalog.webp';

export function CatalogForm() {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [agreed, setAgreed] = useState(false);

  return (
    <Section id='catalogus' ariaLabelledby='catalog-title' className='bg-white'>
      <Container>
        <article className='relative mx-auto grid max-w-[1670px] gap-[40px] overflow-hidden rounded-[23px] bg-[linear-gradient(58deg,rgba(0,26,50,1)_0%,rgba(0,26,48,0.74)_62%,rgba(0,73,145,0.5)_100%)] p-[60px] text-white lg:grid-cols-[1fr_1fr] lg:items-center lg:p-[80px]'>
          <div className='relative z-10 max-w-[660px]'>
            <span className='inline-flex h-[24px] items-center justify-center rounded-[7px] bg-[#006bd5] px-[14px] text-[12px] font-semibold uppercase text-white [font-family:Roboto,Arial,sans-serif]'>
              Catalog
            </span>

            <h2
              id='catalog-title'
              className='mt-[24px] text-[52px] font-bold leading-[1.3] tracking-[-1px] text-white [font-family:Roboto,Arial,sans-serif]'
            >
              Vul uw e-mail in om de catalogus te ontvangen
            </h2>

            <form
              className='mt-[40px] space-y-[20px]'
              onSubmit={(e) => e.preventDefault()}
              aria-label='Catalogus aanvragen'
            >
              <input
                type='email'
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='exemple@mail.com'
                className='block h-[72px] w-full rounded-[12px] bg-white px-[20px] text-[20px] text-black outline-none [font-family:Roboto,Arial,sans-serif] placeholder:text-black/40 focus:ring-2 focus:ring-[#66a6e6]'
              />

              <div className='flex h-[72px] items-stretch overflow-hidden rounded-[12px] bg-white ring-1 ring-white/10 focus-within:ring-2 focus-within:ring-[#66a6e6]'>
                <span className='flex items-center gap-[8px] bg-white px-[16px] text-[20px] text-black [font-family:Roboto,Arial,sans-serif]'>
                  <span
                    aria-hidden
                    className='inline-block h-[14px] w-[20px] rounded-[2px] bg-[linear-gradient(to_bottom,#AE1C28_33%,#fff_33%_66%,#21468B_66%)]'
                  />
                  +31
                </span>
                <input
                  type='tel'
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder='00-000-0000'
                  className='h-full flex-1 bg-white px-[12px] text-[20px] text-black outline-none [font-family:Roboto,Arial,sans-serif] placeholder:text-black/40'
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
                  Ik ga akkoord met{' '}
                  <a href='#privacy' className='underline'>
                    het privacybeleid
                  </a>
                </span>
              </label>

              <button
                type='submit'
                className='block h-[86px] w-full rounded-[16px] bg-[#226CD5] text-[29px] font-bold capitalize text-white [font-family:Roboto,Arial,sans-serif]'
              >
                Verzenden
              </button>
            </form>
          </div>

          <div className='relative h-full min-h-[440px]'>
            <div className='absolute inset-0 grid place-items-center'>
              <div className='relative aspect-[768/512] w-full max-w-[660px] -rotate-[9deg]'>
                <Image
                  src={CATALOG_IMG}
                  alt='Valent catalogus'
                  fill
                  sizes='(min-width: 1024px) 50vw, 100vw'
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
