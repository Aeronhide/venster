'use client';

import { useLang } from '@/components/LanguageProvider';

const content = {
  nl: {
    title: 'Privacybeleid',
    intro: [
      'Bij VENSTER VALENT is de bescherming van uw persoonsgegevens in overeenstemming met Verordening (EU) 2016/679 (de "Algemene verordening gegevensbescherming" of "AVG"/"GDPR") een van onze kernprioriteiten.',
      'Wij zetten alle nodige middelen in om te waarborgen dat uw gegevens conform de GDPR-standaarden beschermd blijven. Dit privacybeleid beschrijft hoe wij de persoonsgegevens die u op onze website verstrekt, verzamelen en gebruiken.',
    ],
    sections: [
      {
        h2: '1. Wat is de GDPR/AVG?',
        body: 'De Algemene verordening gegevensbescherming (GDPR/AVG) is een EU-kader dat vanaf 25 mei 2018 van toepassing is. Zij regelt hoe persoonsgegevens worden verwerkt en overgedragen, en vervangt Richtlijn 95/46/EG. Onder de GDPR moet elke "verwerkingsverantwoordelijke" of entiteit die persoonsgegevens verwerkt strikte beveiligingsmaatregelen treffen en volledige transparantie handhaven over het gebruik van die gegevens.',
      },
      {
        h2: '2. Waarom verwerken wij uw persoonsgegevens?',
        body: 'In overeenstemming met onze wettelijke verplichting om uw informatie te beschermen, gebruiken wij persoonsgegevens in onze database uitsluitend om de zakelijke relatie met u uit te voeren. Dit omvat: het verwerken van reserveringen en verkopen, orderregistratie, verzending en levering, het beheren van garanties en reparaties, en het verlenen van klantenondersteuning.',
      },
      {
        h2: '3. Welke persoonsgegevens verzamelen wij?',
        body: 'Wij verzamelen informatie om u de best mogelijke ervaring met onze diensten te bieden. Doorgaans ontvangen wij persoonsgegevens rechtstreeks van u wanneer u:',
        list: [
          'Producten koopt: waaronder uw naam, telefoonnummer, e-mailadres en leveringsadres.',
          'Contact opneemt met de klantenservice: doorgaans met uw naam en contactgegevens om u te helpen.',
          'Met ons interactie heeft: deelname aan wedstrijden, sollicitaties of bezoek aan evenementen.',
        ],
        after: 'Daarnaast kunnen wij aanvullende gegevens verzamelen om de dienstkwaliteit te waarborgen.',
      },
      {
        h2: '4. Hoe gebruiken wij uw persoonsgegevens?',
        body: 'Overeenkomstig EU-Verordening 2016/679 en de wetgeving van de Republiek Moldavië worden persoonsgegevens strikt beperkt tot de relatie tussen venstervalent.nl (YODANEXTPRIM S.R.L.) en de "betrokkene" (de klant). Wij behandelen alle informatie met het hoogste niveau van vertrouwelijkheid.',
        subsections: [
          {
            h3: '4.1. Contractbeheer en klantenrelaties',
            body: 'Wanneer u https://venstervalent.nl/ bezoekt, loggen onze servers automatisch technische gegevens (protocolbestanden). Dit omvat uw verwijzende URL, IP-adres, datum/tijd van toegang, browsertype en besturingssysteem. Wij kunnen uw globale locatie schatten via uw IP-adres; IP-adressen worden echter niet voor geolocatiedoeleinden opgeslagen zodra uw sessie is beëindigd.',
          },
          {
            h3: '4.2. Werving',
            body: 'Als u solliciteert via onze carrièrepagina, verwerken wij uw gegevens om uw kandidatuur te beoordelen. Uw gegevens worden opgeslagen in een beveiligde database die beschermd is tegen onbevoegde toegang.',
          },
          {
            h3: '4.3. Communicatie met klanten',
            body: 'Wij kunnen rechtstreeks — of via externe dienstverleners — contact met u opnemen over producten die u heeft gekocht of diensten waarvoor u zich heeft ingeschreven. Communicatiekanalen: e-mail, sms, telefoongesprekken of geautomatiseerde berichten.',
          },
          {
            h3: '4.4. Wettelijke verplichtingen',
            body: 'Wij werken samen met overheden en wetshandhaving om naleving van de wet te waarborgen. Wij kunnen persoonsgegevens openbaar maken indien een gerechtelijk bevel dit vereist.',
          },
          {
            h3: '4.5. Webanalyse (Google/Yandex)',
            body: 'Wij gebruiken tools zoals Google Analytics en Yandex Metrika om te begrijpen hoe gebruikers met onze site omgaan (bijv. bezochte pagina\'s, tijd op de site, browsertype). Dit helpt ons het platform te optimaliseren.',
          },
          {
            h3: '4.6. Cookiebeleid',
            body: 'Cookies helpen u bij herhaalde bezoeken te herkennen en verbeteren de functionaliteit van de site. Hoewel cookies doorgaans geen gevoelige gegevens bevatten, kunnen de verzamelde gegevens door dienstverleners worden verwerkt op servers buiten uw land.',
          },
          {
            h3: '4.7. Links naar derden',
            body: 'Onze website kan links naar externe sites bevatten. Wij zijn niet verantwoordelijk voor het privacybeleid van derden; wij raden u aan hun beleid te lezen.',
          },
          {
            h3: '4.8. Gepersonaliseerde advertenties',
            body: 'U kunt gerichte advertenties zien op basis van uw surfgedrag of eerdere aankopen. Onze partners gebruiken cookies om de effectiviteit van advertenties te meten en relevante inhoud te tonen.',
          },
        ],
        note: 'Wij kunnen updates sturen over nieuwe producten, speciale aanbiedingen en evenementen. U kunt zich op elk moment afmelden door een e-mail te sturen naar info@venstervalent.nl met het onderwerp "Uitschrijven".',
      },
      {
        h2: '5. Ontvangers van gegevens',
        body: 'Alle partijen die uw persoonsgegevens verwerken, zijn wettelijk verplicht deze te beschermen. Uw informatie kan worden gedeeld met:',
        list: [
          'Medewerkers betrokken bij orderverwerking en logistiek;',
          'Bank- en betaaldienstverleners;',
          'Marktonderzoek- en marketing-/telemarketingpartners;',
          'IT-dienstverleners;',
          'Overheidsinstanties of gerechten, indien wettelijk verplicht.',
        ],
      },
      {
        h2: 'Wettelijk kader',
        body: 'Voor meer informatie kunt u de volgende documenten raadplegen:',
        list: [
          'Wet van de Republiek Moldavië nr. 133 (08.07.2011) inzake de bescherming van persoonsgegevens.',
          'EU-Verordening 2016/679 (GDPR).',
        ],
      },
      {
        h2: 'Contactgegevens',
        body: 'De projectdirecteur is verantwoordelijk voor het beleid inzake gegevensbeveiliging. U kunt contact opnemen via:',
        contact: [
          'E-mail: info@venstervalent.nl',
          'Nederland — Juridisch & correspondentieadres: Koornmarktpoort 25C, Dronten, Nederland',
          'Operationeel backoffice: Constantin Vîrnav Straat 8, Chișinău, MD-2025, Republiek Moldavië',
        ],
      },
    ],
  },
  en: {
    title: 'Privacy Policy',
    intro: [
      'At VENSTER VALENT, protecting your personal data in compliance with Regulation (EU) 2016/679 (the "General Data Protection Regulation" or "GDPR") is one of our core priorities.',
      'We are fully committed to deploying all necessary resources to ensure your data remains protected under GDPR standards. This Privacy Policy outlines how we collect and use the personally identifiable information you provide on our website.',
    ],
    sections: [
      {
        h2: '1. What is GDPR?',
        body: 'The General Data Protection Regulation (GDPR) is an EU framework that came into effect on May 25, 2018. It governs how personal data is processed and moved, replacing Directive 95/46/EC. Under GDPR, any "Data Controller" or entity handling personal data is required to implement strict security measures and maintain full transparency regarding how that data is used.',
      },
      {
        h2: '2. Why do we process your personal data?',
        body: 'In accordance with our legal obligation to safeguard your information, we only use the personal data in our database to conduct our business relationship with you. This includes: processing bookings and sales, order registration, shipping and delivery, managing warranties and repairs, and providing customer support.',
      },
      {
        h2: '3. What personal data do we collect?',
        body: 'We collect information to ensure you receive the best possible experience from our services. Generally, we receive personal data directly from you when you:',
        list: [
          'Purchase products: Including your name, phone number, email, and delivery address.',
          'Contact Customer Support: Typically requiring your name and contact details to assist you.',
          'Engage with us: Participating in contests, applying for jobs, or attending events.',
        ],
        after: 'Additionally, we may collect supplementary data to maintain service quality.',
      },
      {
        h2: '4. How do we use your personal data?',
        body: 'Under EU Regulation 2016/679 and the laws of the Republic of Moldova, personal data is strictly limited to the relationship between venstervalent.nl (YODANEXTPRIM S.R.L.) and the "Data Subject" (the customer). We treat all information with the highest level of confidentiality.',
        subsections: [
          {
            h3: '4.1. Contract Management and Customer Relations',
            body: 'When you visit https://venstervalent.nl/, our servers automatically log technical data. This includes your referring URL, IP address, date/time of access, browser type, and operating system. We may estimate your general location via your IP address; IP addresses are not stored for geolocation once your session ends.',
          },
          {
            h3: '4.2. Recruitment',
            body: 'If you apply through our careers page, we process your data to evaluate your candidacy. Your data is stored in a secure database protected against unauthorized access.',
          },
          {
            h3: '4.3. Customer Communication',
            body: 'We may contact you — directly or via third-party providers — about products you purchased or services you registered for. Communication channels: email, SMS, phone calls, or automated messages.',
          },
          {
            h3: '4.4. Legal Obligations',
            body: 'We cooperate with governments and law enforcement to ensure legal compliance. We may disclose personal data if required by a court order.',
          },
          {
            h3: '4.5. Web Analytics (Google / Yandex)',
            body: 'We use tools such as Google Analytics and Yandex Metrika to understand how users interact with our site (e.g. pages visited, time on site, browser type). This helps us optimize the platform.',
          },
          {
            h3: '4.6. Cookie Policy',
            body: 'Cookies help recognize you on return visits and improve site functionality. While cookies typically do not contain sensitive data, collected information may be processed by service providers on servers outside your country.',
          },
          {
            h3: '4.7. Third-Party Links',
            body: 'Our website may contain links to external sites. We are not responsible for the privacy practices of third parties; we encourage you to read their policies.',
          },
          {
            h3: '4.8. Personalised Advertising',
            body: 'You may see targeted ads based on your browsing behaviour or past purchases. Our partners use cookies to measure ad effectiveness and deliver relevant content.',
          },
        ],
        note: 'We may send updates about new products, special offers, and events. You may opt out at any time by emailing info@venstervalent.nl with the subject "Unsubscribe".',
      },
      {
        h2: '5. Data Recipients',
        body: 'All parties processing your personal data are legally required to protect it. Your information may be shared with:',
        list: [
          'Staff involved in order processing and logistics;',
          'Banking and payment service providers;',
          'Market research and marketing/telemarketing partners;',
          'IT service providers;',
          'Government authorities or courts, where legally required.',
        ],
      },
      {
        h2: 'Legal Framework',
        body: 'For further information, please refer to:',
        list: [
          'Law of the Republic of Moldova No. 133 (08.07.2011) on the protection of personal data.',
          'EU Regulation 2016/679 (GDPR).',
        ],
      },
      {
        h2: 'Contact Details',
        body: 'The Project Director is responsible for our data security policy. You may contact us at:',
        contact: [
          'Email: info@venstervalent.nl',
          'Netherlands — Legal & Correspondence Address: Koornmarktpoort 25C, Dronten, the Netherlands',
          'Operational Back Office: Constantin Vîrnav Street 8, Chișinău, MD-2025, Republic of Moldova',
        ],
      },
    ],
  },
};

type Section = {
  h2: string;
  body?: string;
  list?: readonly string[];
  after?: string;
  subsections?: readonly { h3: string; body: string }[];
  note?: string;
  contact?: readonly string[];
};

function renderSection(s: Section, idx: number) {
  const sec = s;
  return (
    <div key={idx}>
      <h2 className='mt-[28px] text-[20px] font-bold text-[#050505] first:mt-0'>{sec.h2}</h2>
      {sec.body && <p className='mt-[8px] text-[15px] leading-[1.6] text-[#444]'>{sec.body}</p>}
      {sec.list && (
        <ul className='mt-[8px] list-disc pl-[20px] space-y-[4px]'>
          {sec.list.map((item, i) => (
            <li key={i} className='text-[15px] leading-[1.6] text-[#444]'>{item}</li>
          ))}
        </ul>
      )}
      {sec.after && <p className='mt-[8px] text-[15px] leading-[1.6] text-[#444]'>{sec.after}</p>}
      {sec.subsections?.map((sub, i) => (
        <div key={i}>
          <h3 className='mt-[20px] text-[16px] font-semibold text-[#050505]'>{sub.h3}</h3>
          <p className='mt-[6px] text-[15px] leading-[1.6] text-[#444]'>{sub.body}</p>
        </div>
      ))}
      {sec.note && (
        <div className='mt-[16px] rounded-[8px] border-l-4 border-[#226CD5] bg-[#f8fafc] px-[16px] py-[12px]'>
          <p className='text-[14px] leading-[1.6] text-[#444]'>{sec.note}</p>
        </div>
      )}
      {sec.contact && (
        <ul className='mt-[8px] space-y-[4px]'>
          {sec.contact.map((line, i) => (
            <li key={i} className='text-[15px] leading-[1.6] text-[#444]'>{line}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export function Privacy() {
  const { lang } = useLang();
  const c = content[lang];
  const homeHref = lang === 'en' ? '/en' : '/';
  const homeLabel = lang === 'en' ? 'Home' : 'Home';

  return (
    <section
      id='privacy'
      aria-labelledby='privacy-title'
      className='bg-white py-[64px] lg:py-[96px]'
    >
      <div className='mx-auto max-w-[820px] px-[20px]'>
        <nav aria-label='Breadcrumb' className='mb-[24px]'>
          <ol className='flex items-center gap-[8px] text-[14px] text-[#7b7b7b]'>
            <li>
              <a href={homeHref} className='hover:text-[#226CD5] hover:underline'>
                {homeLabel}
              </a>
            </li>
            <li aria-hidden className='select-none'>›</li>
            <li aria-current='page' className='text-[#050505]'>
              {c.title}
            </li>
          </ol>
        </nav>

        <h1
          id='privacy-title'
          className='text-[28px] font-bold text-[#050505] sm:text-[36px]'
        >
          {c.title}
        </h1>

        {c.intro.map((p, i) => (
          <p key={i} className='mt-[16px] text-[15px] leading-[1.6] text-[#444]'>
            {p}
          </p>
        ))}

        <div className='mt-[32px] space-y-[8px]'>
          {c.sections.map((s, i) => renderSection(s, i))}
        </div>
      </div>
    </section>
  );
}
