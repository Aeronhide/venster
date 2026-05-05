import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';

type Step = {
  n: string;
  title: string;
  body: string;
  bullets: string[];
  image: string;
};

// Tilda block rec1763499311. Spec is the 1200-breakpoint values × 1.44.
// Card 224x464 → ~322x668. Image 196x133 → ~282x192. Title fs 22 → 32. Body/bullets fs 14 → 20.
const steps: Step[] = [
  {
    n: '01',
    title: 'Technisch advies',
    body: 'U ontvangt een duidelijke technische offerte op basis van uw wensen, inclusief configuratie-opties, materialen en een indicatie van de planning — toegelicht door een gekwalificeerde adviseur.',
    bullets: ['Geen vage aanbiedingen', 'Geen verborgen details'],
    image: '/images/process-step-1.webp',
  },
  {
    n: '02',
    title: 'In-house productie',
    body: 'Uw ramen en deuren worden geproduceerd volgens EU-normen, op basis van bevestigde specificaties.',
    bullets: [
      'Standaard productietijd: ~45 kalenderdagen',
      'Doorlooptijd afhankelijk van configuratie en projectomvang',
    ],
    image: '/images/process-step-2.png',
  },
  {
    n: '03',
    title: 'Veilige verpakking',
    body: 'Alle producten worden professioneel in-house verpakt om transportschade te minimaliseren.',
    bullets: [
      'Bescherming tegen beschadiging',
      'Geschikt voor langeafstandsleveringen binnen de EU',
    ],
    image: '/images/process-step-3.webp',
  },
  {
    n: '04',
    title: 'Geplande levering',
    body: 'Wij coördineren de levering rechtstreeks naar uw adres in Nederland.',
    bullets: ['Geplande logistiek', 'Duidelijke leveringsafstemming vooraf'],
    image: '/images/process-step-4.png',
  },
  {
    n: '05',
    title: 'Turnkey installatie (optioneel)',
    body: 'De installatie wordt uitgevoerd door ervaren lokale teams, inclusief demontage van oude ramen en definitieve afstelling.',
    bullets: ['Eén aanspreekpunt', 'Geen coördinatiezorgen voor u'],
    image: '/images/process-step-5.webp',
  },
];

export function Process() {
  return (
    <Section id='process' ariaLabelledby='process-title' className='bg-white'>
      <h2
        id='process-title'
        className='w-full text-center text-[28px] font-black uppercase leading-[1.2] tracking-tight text-[#082b4b] sm:text-[40px] lg:text-[63px]'
      >
        Een helder en gecontroleerd proces
        <br />— van eerste contact tot installatie
      </h2>
      <Container>
        <ol className='mx-auto mt-12 grid max-w-[1728px] gap-[14px] sm:grid-cols-2 lg:mt-[80px] lg:grid-cols-5'>
          {steps.map((s) => (
            <li
              key={s.n}
              className='relative flex w-full flex-col rounded-[16px] bg-[#F5F5F5] p-[20px] pb-[36px] lg:min-h-[712.4px] lg:max-w-[356.8px]'
            >
              {/* Top photo — fixed 191px tall, sits inside the card with padding, rounded on all sides */}
              <div className='relative h-[191px] w-full overflow-hidden rounded-[16px]'>
                <Image
                  src={s.image}
                  alt=''
                  fill
                  sizes='(min-width: 1024px) 357px, (min-width: 640px) 45vw, 90vw'
                  loading='lazy'
                  className='object-cover'
                />
              </div>

              {/* Numbered badge — half-overlaps the bottom of the rounded image (top = 20px padding + 191 - 26) */}
              <span className='absolute left-1/2 top-[185px] z-10 grid h-[52px] w-[52px] -translate-x-1/2 place-items-center rounded-[8px] bg-[radial-gradient(circle_at_center,#3b7ddd_0%,#7ba6e6_100%)] text-[20px] font-bold text-white shadow-md'>
                {s.n}
              </span>

              {/* Centered content area */}
              <div className='mt-[52px] flex flex-col items-center px-[8px] text-center'>
                <h3 className='text-[28px] font-bold leading-[1.2] text-[#082b4b] lg:text-[32px]'>
                  {s.title}
                </h3>

                <p className='mt-[20px] text-[18px] leading-[1.5] text-[#7b7b7b] lg:text-[20px]'>
                  {s.body}
                </p>

                <ul className='mt-[24px] space-y-[10px] text-[18px] leading-[1.5] text-[#082b4b] lg:text-[20px]'>
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
