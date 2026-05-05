'use client';

import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { useT } from '@/components/LanguageProvider';

const STEP_IMAGES = [
  '/images/process-step-1.webp',
  '/images/process-step-2.png',
  '/images/process-step-3.webp',
  '/images/process-step-4.png',
  '/images/process-step-5.webp',
];

export function Process() {
  const t = useT();
  const steps = t.process.steps.map((step, i) => ({
    ...step,
    n: `0${i + 1}`,
    image: STEP_IMAGES[i],
  }));
  return (
    <Section id='process' ariaLabelledby='process-title' className='bg-white'>
      <h2
        id='process-title'
        className='w-full text-center text-[22px] font-black uppercase leading-[1.2] tracking-tight text-[#082b4b] sm:text-[30px] md:text-[40px] lg:text-[63px]'
      >
        {t.process.title1}
        <br />{t.process.title2}
      </h2>
      <Container>
        <ol className='mx-auto mt-8 grid max-w-[1728px] gap-[14px] sm:mt-12 sm:grid-cols-2 lg:mt-[80px] lg:grid-cols-5'>
          {steps.map((s) => (
            <li
              key={s.n}
              className='relative flex w-full flex-col rounded-[16px] bg-[#F5F5F5] p-[20px] pb-[28px] sm:pb-[36px] lg:min-h-[712.4px] lg:max-w-[356.8px]'
            >
              {/* Top photo — fixed 191px tall, sits inside the card with padding, rounded on all sides */}
              <div className='relative h-[160px] w-full overflow-hidden rounded-[16px] sm:h-[191px]'>
                <Image
                  src={s.image}
                  alt=''
                  fill
                  sizes='(min-width: 1024px) 357px, (min-width: 640px) 45vw, 90vw'
                  loading='lazy'
                  className='object-cover'
                />
              </div>

              {/* Numbered badge — half-overlaps the bottom of the rounded image */}
              <span className='absolute left-1/2 top-[140px] z-10 grid h-[44px] w-[44px] -translate-x-1/2 place-items-center rounded-[8px] bg-[radial-gradient(circle_at_center,#3b7ddd_0%,#7ba6e6_100%)] text-[16px] font-bold text-white shadow-md sm:top-[185px] sm:h-[52px] sm:w-[52px] sm:text-[20px]'>
                {s.n}
              </span>

              {/* Centered content area */}
              <div className='mt-[36px] flex flex-col items-center px-[4px] text-center sm:mt-[52px] sm:px-[8px]'>
                <h3 className='text-[18px] font-bold leading-[1.2] text-[#082b4b] sm:text-[22px] md:text-[28px] lg:text-[32px]'>
                  {s.title}
                </h3>

                <p className='mt-[12px] text-[14px] leading-[1.5] text-[#7b7b7b] sm:mt-[20px] sm:text-[16px] md:text-[18px] lg:text-[20px]'>
                  {s.body}
                </p>

                <ul className='mt-[16px] space-y-[8px] text-[14px] leading-[1.5] text-[#082b4b] sm:mt-[24px] sm:space-y-[10px] sm:text-[16px] md:text-[18px] lg:text-[20px]'>
                  {s.bullets.map((b) => (
                    <li key={b}>
                      <span aria-hidden className='text-[#226CD5]'>
                        ✔
                      </span>{' '}
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
