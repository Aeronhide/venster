'use client';

import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { CheckIcon } from '@/components/ui/Icon';
import { useT } from '@/components/LanguageProvider';

const SIDE_CARD_ICONS = ['/images/box.svg', '/images/tech_call.svg', '/images/doc_check.svg'];

export function WhyChoose() {
  const t = useT();
  return (
    <Section
      id='why-choose'
      ariaLabelledby='why-choose-title'
      className='bg-[#F5F5F5]'
    >
      <Container>
        <div className='mx-auto max-w-[1675px]'>
          {/* Title — Tilda 44px × 1.44 ≈ 63px, color #082b4b, weight 900, uppercase */}
          <h2
            id='why-choose-title'
            className='text-[28px] font-black uppercase leading-[1.3] tracking-tight text-[#082b4b] sm:text-[40px] lg:text-[63px] lg:leading-[1.55]'
          >
            {t.whyChoose.title1}
            <br />
            {t.whyChoose.title2}
          </h2>

          {/* 2 columns: blue card (with person image inside, on the right) | white cards */}
          <div className='mt-10 grid gap-6 lg:grid-cols-[780fr_367fr] lg:gap-[20px]'>
            {/* Big blue radial-gradient card. Inside: bullets on the left, person image on the right */}
            <div className='overflow-hidden rounded-[22px] bg-[radial-gradient(ellipse_at_right,#7ba6e6_0%,#3b7ddd_45%,#3b7ddd_100%)] px-5 pt-6 sm:px-8 sm:pt-10 lg:px-[44px] lg:pt-[48px]'>
              <div className='flex flex-col gap-6 sm:gap-8 lg:flex-row lg:items-end lg:gap-[40px]'>
                <ul className='flex-1 space-y-6 pb-6 sm:space-y-8 sm:pb-10 lg:pb-[48px]'>
                  {t.whyChoose.reasons.map((r) => (
                    <li key={r.title} className='flex gap-3 sm:gap-5'>
                      <span className='mt-1 grid size-[36px] shrink-0 place-items-center rounded-[6px] bg-white/20 ring-1 ring-white/40 sm:size-[45px]'>
                        <CheckIcon
                          className='text-white'
                          width={22}
                          height={22}
                        />
                      </span>
                      <div className='flex-1'>
                        <h3 className='text-[17px] font-bold uppercase leading-[1.2] text-white sm:text-[18px] lg:text-[26px]'>
                          {r.title}
                        </h3>
                        <p className='mt-2 text-[15px] leading-[1.5] text-white/95 sm:text-[16px] lg:text-[26px] lg:leading-[1.4]'>
                          {'plain' in r ? (
                            r.plain
                          ) : (
                            <>
                              {r.before}
                              {r.bold1 && <strong className='font-bold'>{r.bold1}</strong>}
                              {r.middle}
                              {r.bold2 && <strong className='font-bold'>{r.bold2}</strong>}
                              {r.after}
                            </>
                          )}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>

                {/* Installer photo — pinned bottom of card, 2× larger */}
                <Image
                  src='/images/why-choose-installer.png'
                  alt={t.whyChoose.installerAlt}
                  width={520}
                  height={680}
                  loading='lazy'
                  className='hidden h-auto w-[520px] max-w-[45%] shrink-0 self-end object-contain object-bottom lg:block'
                  sizes='520px'
                />
              </div>
            </div>

            {/* Side cards — equal-height grid so each card content can center vertically */}
            <ul className='grid gap-4 lg:h-full lg:grid-rows-3 lg:gap-6'>
              {t.whyChoose.sideCards.map((c, idx) => (
                <li
                  key={c.body}
                  className='flex flex-col justify-center rounded-[16px] bg-white p-5 ring-1 ring-[#e5e7eb] lg:p-6'
                >
                  {/* Title + icon row — fixed min-height so 1-line and 2-line titles produce the same row size */}
                  <div className='flex min-h-[56px] items-center justify-between gap-4 lg:min-h-[79px]'>
                    <h3 className='text-[20px] font-bold text-[#050505] [text-shadow:var(--t396-shadow-text-x,0px)_var(--t396-shadow-text-y,0px)_var(--t396-shadow-text-blur,0px)_rgba(var(--t396-shadow-text-color),var(--t396-shadow-text-opacity,100%))] lg:text-[37px] lg:leading-[1.2]'>
                      {c.titleLines.map((line, i) => (
                        <span key={i}>
                          {line}
                          {i < c.titleLines.length - 1 && <br />}
                        </span>
                      ))}
                    </h3>
                    <span className='grid size-[56px] shrink-0 place-items-center rounded-[16px] bg-[radial-gradient(circle_at_center,#3b7ddd_0%,#7ba6e6_100%)] lg:size-[79px]'>
                      <Image
                        src={SIDE_CARD_ICONS[idx]}
                        alt=''
                        width={40}
                        height={40}
                        loading='lazy'
                        className='h-[28px] w-[28px] lg:h-[40px] lg:w-[40px]'
                      />
                    </span>
                  </div>
                  {/* Body below */}
                  <p className='mt-3 text-[15px] leading-[1.5] text-[#918e8e] [text-shadow:var(--t396-shadow-text-x,0px)_var(--t396-shadow-text-y,0px)_var(--t396-shadow-text-blur,0px)_rgba(var(--t396-shadow-text-color),var(--t396-shadow-text-opacity,100%))] lg:text-[23px]'>
                    {c.body}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </Section>
  );
}
