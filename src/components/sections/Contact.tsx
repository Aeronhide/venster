'use client';

import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { site } from '@/lib/site';
import { useT } from '@/components/LanguageProvider';

// Tilda block rec1763574201 (T396, ONZE VESTIGINGEN with f5f5f5 inner card).
// Title fs 30 -> 43px white bold uppercase ('ONZE VESTIGINGEN').
// Inner card #f5f5f5 1040x560 -> aspect ~13:7. Office img 440x293 -> 634x422 left.
// Right column: Telefoon/E-mail/Adres/Werktijd labels fs 12 -> 17px,
// values fs 18 -> 26px (#006bd5). CTA "Bezoek plannen" fs 20 -> 29px white #226cd5.
// Below card: 3 cols (Toelichting / Juridisch / Operationeel) fs 14 -> 20px.
// Footer "2024©. YODANEXTPRIM SRL..." fs 12 -> 17px.

const OFFICE_IMG = '/images/valent_corner.webp';

const PHONE_DISPLAY = site.phone.nl; // "+31 970 102 666 13"
const PHONE_TEL = site.phone.nl.replace(/\s/g, ''); // "+3197010266613"
const EMAIL = site.email;

export function Contact() {
  const t = useT();
  return (
    <Section id='contact' ariaLabelledby='contact-title'>
      <Container>
        <div className='mx-auto rounded-[32px] bg-[#082b4b] p-[28px] text-white sm:p-[40px] lg:p-[60px]'>
          <h2
            id='contact-title'
            className='text-center text-[28px] font-bold uppercase leading-[1.3] text-white [font-family:Roboto,Arial,sans-serif] sm:text-[36px] lg:text-[43px]'
          >
            {t.contact.title}
          </h2>

          <div className='mx-auto mt-[40px] max-w-[1500px] rounded-[22px] bg-[#f5f5f5] p-[28px] text-[#333333] sm:p-[40px] lg:p-[60px]'>
            <div className='grid items-center gap-[40px] lg:grid-cols-[634px_1fr]'>
              <div className='relative aspect-[440/293] w-full overflow-hidden rounded-[16px] bg-black/5'>
                <Image
                  src={OFFICE_IMG}
                  alt={t.contact.officeAlt}
                  fill
                  sizes='(min-width: 1024px) 634px, 100vw'
                  loading='lazy'
                  className='object-cover'
                />
              </div>

              <dl className='flex flex-col gap-[18px] [font-family:Roboto,Arial,sans-serif]'>
                <div>
                  <dt className='text-[17px] font-bold text-[#333333]'>
                    {t.contact.phoneLabel}
                  </dt>
                  <dd className='mt-[2px]'>
                    <a
                      href={`tel:${PHONE_TEL}`}
                      className='text-[26px] font-medium text-[#006bd5]'
                    >
                      {PHONE_DISPLAY}
                    </a>
                  </dd>
                </div>

                <div>
                  <dt className='text-[17px] font-bold text-[#333333]'>
                    {t.contact.emailLabel}
                  </dt>
                  <dd className='mt-[2px]'>
                    <a
                      href={`mailto:${EMAIL}`}
                      className='break-all text-[20px] font-medium text-[#006bd5] sm:text-[22px] lg:text-[26px]'
                    >
                      {EMAIL}
                    </a>
                  </dd>
                </div>

                <div>
                  <dt className='text-[17px] font-bold text-[#333333]'>
                    {t.contact.addressLabel}
                  </dt>
                  <dd className='mt-[2px] text-[20px] font-medium text-[#006bd5] sm:text-[22px] lg:text-[26px]'>
                    {t.contact.address}
                  </dd>
                </div>

                <div>
                  <dt className='text-[17px] font-bold text-[#333333]'>
                    {t.contact.hoursLabel}
                  </dt>
                  <dd className='mt-[2px] text-[20px] font-medium text-[#006bd5] sm:text-[22px] lg:text-[26px]'>
                    {t.contact.hoursValue}
                  </dd>
                </div>

                <a
                  href='#zeropopup'
                  className='mt-[12px] inline-flex h-[64px] w-full max-w-[400px] items-center justify-center rounded-[16px] bg-[#226CD5] text-[18px] font-bold capitalize text-white sm:h-[72px] sm:text-[22px] lg:h-[86px] lg:text-[29px]'
                >
                  {t.contact.cta}
                </a>
              </dl>
            </div>

            <div className='mt-[32px] grid gap-[40px] border-t border-black/10 pt-[24px] text-[16px] leading-[1.5] text-[#333333] [font-family:Roboto,Arial,sans-serif] sm:mt-[60px] sm:pt-[40px] sm:text-[18px] md:grid-cols-[1.6fr_1fr_1fr] md:text-[20px]'>
              <div>
                <p className='font-bold'>{t.contact.explanationLabel}</p>
                <p className='mt-[8px]'>{t.contact.explanationBody}</p>
              </div>

              <div>
                <p className='font-bold'>{t.contact.legalLabel}</p>
                <p className='mt-[8px]'>{t.contact.legalBody}</p>
              </div>

              <div>
                <p className='font-bold'>{t.contact.backofficeLabel}</p>
                <p className='mt-[8px]'>
                  {t.contact.backofficeBody.map((line, i) => (
                    <span key={i}>
                      {line}
                      {i < t.contact.backofficeBody.length - 1 && <br />}
                    </span>
                  ))}
                </p>
              </div>
            </div>
          </div>

          <p className='mt-[24px] text-center text-[17px] text-white/70 [font-family:Roboto,Arial,sans-serif] sm:mt-[40px]'>
            {t.contact.copyright}
          </p>
        </div>
      </Container>
    </Section>
  );
}
