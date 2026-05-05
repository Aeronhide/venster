export type Lang = "nl" | "en";

export const DEFAULT_LANG: Lang = "nl";

export const translations = {
  nl: {
    htmlLang: "nl",
    common: {
      requestQuote: "Vraag een offerte aan",
      planVisit: "Bezoek plannen",
      send: "Versturen",
      submit: "Verzenden",
      privacy: "privacybeleid",
    },
    header: {
      hours: "Ma–Za | 9:00 – 19:00",
      nav: [
        { href: "#products", label: "Producten" },
        { href: "#why-choose", label: "Voordelen" },
        { href: "#contact", label: "Contact" },
      ],
      cta: "Bel mij terug",
      langSwitchLabel: "English language version",
      langSwitchLabelToNL: "Nederlandse taalversie",
      menuOpen: "Menu openen",
      menuClose: "Menu sluiten",
      phoneAria: "Bel VensterValent",
      whatsappAria: "WhatsApp-chat openen (NL)",
    },
    hero: {
      pill: "VOLGENS NEDERLANDSE NORMEN",
      pillMobile: "Volgens Nederlandse normen",
      headline1: "Ramen en Deuren –",
      headlineHighlight: "vanaf €50 per maand,",
      headline2: "levering door heel Nederland!",
      subhead:
        "PVC-ramen en -deuren, schuifdeuren en rolluiken van hoge kwaliteit – snel geproduceerd en rechtstreeks bij u thuis geleverd!",
      cta: "VRAAG EEN GRATIS OFFERTE AAN",
      ctaMobile: "Vraag een gratis offerte aan",
      cards: {
        price: ["Eerlijke prijs voor", "hoge kwaliteit"],
        delivery: ["Snelle levering in NL", "– 45 dagen"],
        warranty: ["5 jaar - productgarantie"],
        priceShort: ["Eerlijke prijs voor", "hoge kwaliteit"],
        deliveryShort: ["Snelle levering in NL – 45 dagen"],
        warrantyShort: ["5 jaar - productgarantie"],
      },
      stats: [
        { number: "1720+", lines: ["tevreden huishoudens", "geholpen"] },
        { number: "96%", lines: ["van onze klanten", "beveelt ons aan"] },
        { number: "14 +", lines: ["jaar zorg voor uw", "huis"] },
        { number: "8000+", lines: ["geplaatste ramen &", "deuren per jaar"] },
      ],
      googleMapsAria: "Google Maps: locatie Valent",
    },
    about: {
      title: "Over VALENT",
      paragraphs: [
        "VALENT is een Europese fabrikant van PVC ramen en deuren, die huiseigenaren in heel Nederland voorziet van gecertificeerde, energiezuinige oplossingen.",
        "Onze productie en technische activiteiten worden uitgevoerd door een toegewijd backofficeteam, terwijl onze projecten in Nederland worden uitgevoerd via lokale meet-en installatiepartners.",
        "Dit model stelt ons in staat om een strikte kwaliteitscontrole te handhaven, te voldoen aan de EU-normen en concurrerende prijzen aan te bieden zonder afbreuk te doen aan de betrouwbaarheid.",
      ],
      richText: {
        before: "Met meer dan ",
        bold1: "8 jaar productie-ervaring en duizenden voltooide projecten",
        middle: " zijn onze producten ",
        bold2: "CE-gecertificeerd,",
        after:
          " afgestemd op landspecifieke regelgeving en veilig getransporteerd om een vlekkeloze installatie te garanderen.",
      },
      paragraphs2: [
        "Wij geloven dat vertrouwen wordt opgebouwd door transparantie, duidelijke communicatie en consistente resultaten.",
      ],
      richText2: {
        before: "Daarom kiezen onze klanten voor VALENT voor ",
        bold: "eerlijke prijzen, Europese kwaliteit en betrouwbare service.",
      },
      videoPlayAria: "Speel introductievideo Valent af",
    },
    products: {
      title: "ONTDEK ONZE PRODUCTEN",
      cta: "Meer informatie",
      items: [
        {
          title: "PVC Ramen",
          alt: "PVC raam met luiken op een Nederlandse gevel",
          bullets: ["In appartementen", "In particuliere woningen", "Op balkons"],
        },
        {
          title: "Voordeuren",
          alt: "Donkere PVC voordeur met smalle ramen",
          bullets: ["Voor toegang tot het huis", "Voor commerciële ruimtes"],
        },
        {
          title: "Schuifdeuren",
          alt: "Schuifdeur met uitzicht op zee",
          bullets: ["Voor terrassen", "Voor balkons", "Voor prieeltjes"],
        },
        {
          title: "Rolluiken",
          alt: "Modern huis met rolluiken",
          bullets: [
            "Rolluiken voor huizen",
            "Rolluiken voor appartementen",
            "Rolluiken voor winkels",
          ],
        },
      ],
    },
    features: {
      ariaLabel: "Onze merken en componenten",
      crossSectionAlt:
        "Doorsnede van een PVC raam met meervoudig glas en kamerprofiel",
      brandsAlt: "Logo's van VEKA, ROTO en SAINT-GOBAIN componenten",
      bodyBefore: "Onze producten worden gemaakt met PVC-profielen van het gerenommeerde Duitse merk ",
      vekaName: "VEKA",
      bodyMiddle: ", duurzaam hang- en sluitwerk van ",
      rotoName: "ROTO",
      bodyAfter: " en energie-efficiënt glas geleverd door de Franse fabrikant ",
      sgName: "SAINT-GOBAIN",
      bodyEnd: ".",
    },
    financing: {
      title1: "Nieuwe ramen vanaf ca.",
      titleHighlight: "€50 per maand",
      title2: "– via het Nationaal Warmtefonds",
      familyAlt: "Familie krijgt advies over energiezuinige ramen",
      footerLead: "Zo profiteert u van energiezuinige ramen",
      footerHighlight: "zonder financiële druk vooraf.",
      cta: "Vraag vrijblijvend advies aan",
      bodyP1Q: "Wilt u uw woning energiezuiniger maken, maar liever geen grote investering in één keer doen?",
      bodyP1A1: "Wij helpen u bij het verkrijgen van nieuwe ramen ",
      bodyP1Bold1: "vanaf ongeveer €50 per maand",
      bodyP1A2: " via het ",
      bodyP1Bold2: "Nationaal Warmtefonds.",
      stepsLead: "begeleidt u stap voor stap:",
      steps: [
        "controle van de geschiktheid",
        "technische specificaties",
        "ondersteuning bij de aanvraag",
      ],
    },
    partners: {
      title: "Onze partners",
      subtitle: "Onze Duitse partners vertrouwen VALENT\nen waarborgen de kwaliteit van elk raam",
    },
    certification: {
      ariaLabel: "Certificering en kwaliteitsgarantie",
      block1Before: "VALENT-producten zijn ",
      block1Highlight: "CE-gecertificeerd",
      block1After: " en omvatten een verlengde garantie van 10 jaar, zoals vermeld in het contract",
      coverageText: ["De garantie dekt PVC-profielen,", "isolatieglas en beslag"],
      valentAlt: "VALENT certificering",
      block2Brand: "VALENT",
      block2Body:
        " produceert ramen met Europese PVC-profielen van klasse A, getest op langdurige duurzaamheid, structurele stabiliteit en milieuveiligheid, vervaardigd met loodvrije (Pb-vrije) materialen en conform de geldende EU-normen en regelgeving.",
      certAlt: "Klasse A certificaat",
      prevAria: "Vorig certificaat",
      nextAria: "Volgend certificaat",
      goToAria: "Ga naar certificaat",
    },
    whyChoose: {
      title1: "Waarom huiseigenaren in",
      title2: "Nederland voor VALENT kiezen",
      installerAlt: "Valent-installateur",
      reasons: [
        {
          title: "Gecertificeerde Duitse systemen",
          before: "Wij werken met gevestigde Europese leveranciers zoals ",
          bold1: "VEKA-profielen",
          middle: " en ",
          bold2: "ROTO-beslag,",
          after:
            " veelvuldig toegepast in residentiële projecten binnen de EU.",
        },
        {
          title: "Transparante garantie",
          before: "Wij bieden een ",
          bold1: "10-jarige fabrieksgarantie",
          middle: "",
          bold2: "",
          after:
            " op profielen, beglazing en beslag, duidelijk vastgelegd in onze contractdocumentatie.",
        },
        {
          title: "Gecontroleerde productie en levering",
          plain:
            "Alle ramen en deuren worden in-house geproduceerd, kwaliteitsgecontroleerd en veilig verpakt vóór levering naar Nederland.",
        },
        {
          title: "Betrouwbare levertijden",
          before: "De standaard productietijd en levering bedraagt ongeveer ",
          bold1: "45 kalenderdagen,",
          middle: "",
          bold2: "",
          after: " afhankelijk van configuratie en projectspecificaties.",
        },
      ],
      sideCards: [
        {
          titleLines: ["In-house", "productie"],
          body: "Productie, assemblage en verpakking worden volledig binnen ons eigen productieproces uitgevoerd.",
        },
        {
          titleLines: ["Technisch", "advies"],
          body: "Ondersteuning door ervaren projectmanagers, gespecialiseerd in residentiële raam- en deurprojecten.",
        },
        {
          titleLines: ["Kwaliteitscontrole"],
          body: "Kwaliteitscontroles worden uitgevoerd in cruciale productiefasen en vóór verzending.",
        },
      ],
    },
    process: {
      title1: "Een helder en gecontroleerd proces",
      title2: "— van eerste contact tot installatie",
      steps: [
        {
          title: "Technisch advies",
          body: "U ontvangt een duidelijke technische offerte op basis van uw wensen, inclusief configuratie-opties, materialen en een indicatie van de planning — toegelicht door een gekwalificeerde adviseur.",
          bullets: ["Geen vage aanbiedingen", "Geen verborgen details"],
        },
        {
          title: "In-house productie",
          body: "Uw ramen en deuren worden geproduceerd volgens EU-normen, op basis van bevestigde specificaties.",
          bullets: [
            "Standaard productietijd: ~45 kalenderdagen",
            "Doorlooptijd afhankelijk van configuratie en projectomvang",
          ],
        },
        {
          title: "Veilige verpakking",
          body: "Alle producten worden professioneel in-house verpakt om transportschade te minimaliseren.",
          bullets: [
            "Bescherming tegen beschadiging",
            "Geschikt voor langeafstandsleveringen binnen de EU",
          ],
        },
        {
          title: "Geplande levering",
          body: "Wij coördineren de levering rechtstreeks naar uw adres in Nederland.",
          bullets: ["Geplande logistiek", "Duidelijke leveringsafstemming vooraf"],
        },
        {
          title: "Turnkey installatie (optioneel)",
          body: "De installatie wordt uitgevoerd door ervaren lokale teams, inclusief demontage van oude ramen en definitieve afstelling.",
          bullets: ["Eén aanspreekpunt", "Geen coördinatiezorgen voor u"],
        },
      ],
    },
    team: {
      title: "Ons project- en ondersteuningsteam",
      members: [
        {
          name: "Ion Banari – Project & Accountability",
          role: "Projectcoördinatie & verantwoordelijkheid",
          body: "Uw project wordt beheerd door een ervaren coördinatieteam, verantwoordelijk voor communicatie, planning en oplevering.",
        },
        {
          name: "Daniel Banari – Technical & Sales Consultation",
          role: "Technisch advies & offerte",
          body: "Onze sales- en technische managers helpen bij het bepalen van specificaties, prijzen en planning — helder en transparant.",
        },
        {
          name: "Cristian Verejan – Design & Technical Accuracy",
          role: "Ontwerp & technische nauwkeurigheid",
          body: "Elk project wordt ontworpen door ervaren specialisten om een correcte configuratie, nauwkeurige metingen en optimale prestaties te garanderen.",
        },
        {
          name: "Valentin Caț – Design & Technical Accuracy",
          role: "Ontwerp & technische nauwkeurigheid",
          body: "Elk project wordt ontworpen door ervaren specialisten om een correcte configuratie, nauwkeurige metingen en optimale prestaties te garanderen.",
        },
      ],
    },
    installation: {
      tag: "Montage",
      title:
        "Wij bieden het volledige installatiepakket met garantie in heel Nederland aan",
      body:
        "Onze installatiepartners kunnen bij u thuis langskomen om nauwkeurige metingen te verrichten, de oude ramen te verwijderen en de nieuwe te installeren.",
      phoneLabel: "Telefoon",
      phonePlaceholder: "00 000 0000",
      privacyBefore: "Ik ga akkoord met ",
      privacyLink: "het groepsbeleid",
      submit: "Plan een inmeting",
      ariaLabel: "Plan een inmeting",
      installerAlt: "Valent monteur installeert een raam",
    },
    projects: {
      title: "ONZE AFGERONDE PROJECTEN IN NEDERLAND!",
      prevAria: "Vorig project",
      nextAria: "Volgend project",
      goToAria: "Ga naar project",
      altPrefix: "Project",
    },
    ral: {
      title: "Onze producten zijn gecertificeerd met het RAL-keurmerk – de hoogste Europese standaard",
      tag: "Kwaliteit",
      body:
        "Wij gebruiken de modernste geautomatiseerde Elumatec-machines om precisie te waarborgen en menselijke fouten te elimineren bij de productie van geïsoleerde ramen en deuren",
      videoAria: "Speel video over RAL-keurmerk af",
    },
    transport: {
      ariaLabel: "Veilig transport",
      tag: "Veilig transport",
      title: "Wij garanderen een veilige levering van de ramen",
      body:
        "Onze ramen worden zorgvuldig verpakt met meerdere lagen stretchfolie en dikke polystyreen beschermhoeken, waardoor optimale bescherming tijdens het transport wordt gegarandeerd. Dankzij deze geavanceerde verpakkingstechnologie komen de ramen veilig bij u thuis aan, ongeacht de afstand.",
      altPrefix: "Veilig transport van ramen, foto",
    },
    recognition: {
      lead: "Wij ronden meer dan 480 projecten per jaar af —",
      highlight: "96% van onze klanten beveelt VALENT aan",
    },
    catalog: {
      title: "Vul uw e-mail in om de catalogus te ontvangen",
      tag: "Catalogus",
      emailPlaceholder: "exemple@mail.com",
      phonePlaceholder: "00-000-0000",
      privacyBefore: "Ik ga akkoord met ",
      privacyLink: "het privacybeleid",
      submit: "Verzenden",
      ariaLabel: "Catalogus aanvragen",
      catalogAlt: "Valent catalogus",
    },
    sketches: {
      title:
        "Bekijk precies welke ramen er bij u thuis worden geïnstalleerd – u hoeft geen weken te wachten op een beslissing, u kunt vandaag al beginnen",
      lead: "Wij bereiden een volledig project met schetsen voor",
      cta: "Chat met ons op WhatsApp",
    },
    promotion: {
      sectionTitle: "Bekijk de laatste promoties",
      offerBefore: "Profiteer van ",
      offerBold1: "20% korting",
      offerMiddle: " op ramen en ontvang ",
      offerBold2: "gratis",
      offerAfter: " een ventilatierooster voor een van jouw ramen",
      bodyBefore: "Geef de promotiecode ",
      bodyCode: "VENTILATIEROOSTER",
      bodyAfter:
        " door aan de manager en profiteer van de aanbieding tot eind van deze maand",
      cta: "Plan een bezoek",
      ventAlt: "Ventilatierooster gemonteerd op een raam",
    },
    contact: {
      title: "Onze vestigingen",
      phoneLabel: "Telefoon:",
      emailLabel: "E-mail:",
      addressLabel: "Adres:",
      hoursLabel: "Werktijd:",
      hoursValue: "Mon–Sat | 9:00 – 19:00",
      address: "Koornmarktpoort 25C, 8253 TE Dronten, Netherlands",
      cta: "Bezoek plannen",
      explanationLabel: "Toelichting:",
      explanationBody:
        "Ons operationele backoffice in Chișinău verzorgt offertes, contracten en administratieve ondersteuning. Deze structuur stelt ons in staat om concurrerende prijzen, snelle reactietijden en een hoge servicekwaliteit te bieden aan onze klanten in Nederland.",
      legalLabel: "Nederland – Juridisch & Correspondentieadres",
      legalBody: "Koornmarktpoort 25C, Dronten, Nederland",
      backofficeLabel: "Operationeel Backoffice",
      backofficeBody: ["Constantin Vîrnavstraat 8,", "Chișinău, MD-2025", "Republiek Moldavië"],
      copyright: "2024©. YODANEXTPRIM SRL. Alle rechten voorbehouden",
      officeAlt: "VALENT kantoor — productie en showroom",
    },
    footer: {
      productsTitle: "Producten",
      helpTitle: "Help",
      productLinks: [
        { href: "#products", label: "PVC Ramen" },
        { href: "#products", label: "Voordeuren" },
        { href: "#products", label: "Schuifdeuren" },
        { href: "#products", label: "Rolluiken" },
      ],
      helpLinks: [
        { href: "#contact", label: "Q&A" },
        { href: "#blog", label: "Blog" },
        { href: "#privacy", label: "Privacybeleid" },
      ],
    },
    callbackModal: {
      title: "Laat je gegevens achter",
      subtitle:
        "Vul je e-mail en telefoonnummer in — we nemen zo snel mogelijk contact met je op.",
      emailLabel: "E-mail",
      phoneLabel: "Telefoonnummer",
      phonePlaceholder: "6 12345678",
      privacyBefore: "Ik ga akkoord met het ",
      privacyLink: "privacybeleid",
      privacyAfter: ".",
      submit: "Versturen",
      closeAria: "Sluiten",
    },
    skipToContent: "Naar hoofdinhoud",
  },

  en: {
    htmlLang: "en",
    common: {
      requestQuote: "Request a quote",
      planVisit: "Plan a visit",
      send: "Send",
      submit: "Submit",
      privacy: "Privacy Policy",
    },
    header: {
      hours: "Mon–Sat | 9:00 – 19:00",
      nav: [
        { href: "#products", label: "Products" },
        { href: "#why-choose", label: "Benefits" },
        { href: "#contact", label: "Contact" },
      ],
      cta: "Call me back",
      langSwitchLabel: "English language version",
      langSwitchLabelToNL: "Dutch language version",
      menuOpen: "Open menu",
      menuClose: "Close menu",
      phoneAria: "Call VensterValent",
      whatsappAria: "Open WhatsApp chat (NL)",
    },
    hero: {
      pill: "ACCORDING TO DUTCH STANDARDS",
      pillMobile: "According to Dutch standards",
      headline1: "Windows & Doors –",
      headlineHighlight: "from €50 per month,",
      headline2: "delivery across the Netherlands!",
      subhead:
        "PVC windows, doors, sliding doors and shutters of high quality – produced quickly and delivered directly to your home!",
      cta: "REQUEST A FREE QUOTE",
      ctaMobile: "Request a free quote",
      cards: {
        price: ["Fair price for", "high quality"],
        delivery: ["Fast delivery in NL", "– 45 days"],
        warranty: ["5 years - product warranty"],
        priceShort: ["Fair price for", "high quality"],
        deliveryShort: ["Fast delivery in NL – 45 days"],
        warrantyShort: ["5 years - product warranty"],
      },
      stats: [
        { number: "1720+", lines: ["satisfied households", "helped"] },
        { number: "96%", lines: ["of our clients", "recommend us"] },
        { number: "14 +", lines: ["years of care for", "your home"] },
        { number: "8000+", lines: ["windows & doors", "installed per year"] },
      ],
      googleMapsAria: "Google Maps: Valent location",
    },
    about: {
      title: "About VALENT",
      paragraphs: [
        "VALENT is a European manufacturer of PVC windows and doors, supplying homeowners across the Netherlands with certified, energy-efficient solutions.",
        "Our production and technical operations are handled by a dedicated back-office team, while our projects in the Netherlands are delivered through local measurement and installation partners.",
        "This model allows us to maintain strict quality control, comply with EU standards, and offer competitive pricing without compromising reliability.",
      ],
      richText: {
        before: "With over ",
        bold1: "8 years of manufacturing experience and thousands of completed projects",
        middle: ", our products are ",
        bold2: "CE-certified,",
        after:
          " tailored to country-specific regulations, and securely transported to ensure flawless installation.",
      },
      paragraphs2: [
        "We believe trust is built through transparency, clear communication, and consistent results.",
      ],
      richText2: {
        before: "That is why our clients choose VALENT for ",
        bold: "honest pricing, European quality, and dependable service.",
      },
      videoPlayAria: "Play Valent introduction video",
    },
    products: {
      title: "DISCOVER OUR PRODUCTS",
      cta: "Learn more",
      items: [
        {
          title: "PVC Windows",
          alt: "PVC window with shutters on a Dutch facade",
          bullets: ["Apartments under renovation", "Houses", "Balconies"],
        },
        {
          title: "Front Doors",
          alt: "Dark PVC front door with narrow windows",
          bullets: ["For houses", "For businesses"],
        },
        {
          title: "Sliding Doors",
          alt: "Sliding door with sea view",
          bullets: ["For terraces", "For balconies", "For garden pavilions"],
        },
        {
          title: "Roller Shutters",
          alt: "Modern house with roller shutters",
          bullets: [
            "Roller shutters for houses",
            "Roller shutters for apartments",
            "Roller shutters for shops",
          ],
        },
      ],
    },
    features: {
      ariaLabel: "Our brands and components",
      crossSectionAlt:
        "Cross-section of a PVC window with multi-layer glass and chamber profile",
      brandsAlt: "Logos of VEKA, ROTO and SAINT-GOBAIN components",
      bodyBefore: "We use high-quality PVC profiles from the German brand ",
      vekaName: "VEKA",
      bodyMiddle: ", reliable ",
      rotoName: "ROTO",
      bodyAfter: " hardware, and energy-efficient glass by ",
      sgName: "SAINT-GOBAIN",
      bodyEnd: ".",
    },
    financing: {
      title1: "New windows from approx.",
      titleHighlight: "€50 per month",
      title2: "– via the National Warmtefonds",
      familyAlt: "Family receiving advice on energy-efficient windows",
      footerLead: "This way, you benefit from energy-efficient windows",
      footerHighlight: "without upfront financial pressure.",
      cta: "Request free consultation",
      bodyP1Q:
        "Would you like to improve the energy efficiency of your home, but prefer not to make a large upfront investment?",
      bodyP1A1: "We help you obtain new windows ",
      bodyP1Bold1: "starting from approximately €50 per month",
      bodyP1A2: " through the ",
      bodyP1Bold2: "National Warmtefonds.",
      stepsLead: "supports you step by step:",
      steps: [
        "eligibility check",
        "technical specifications",
        "assistance with the application process",
      ],
    },
    partners: {
      title: "Our partners",
      subtitle:
        "Our German partners trust VALENT\nand ensure the quality of every window",
    },
    certification: {
      ariaLabel: "Certification and quality warranty",
      block1Before: "VALENT products are ",
      block1Highlight: "CE-certified",
      block1After:
        " and include an extended 10-year warranty, as stated in the contract",
      coverageText: ["The warranty covers PVC profiles,", "insulating glass, and hardware"],
      valentAlt: "VALENT certification",
      block2Brand: "VALENT",
      block2Body:
        " manufactures windows using European Class A PVC profiles, tested for long-term durability, structural stability, and environmental safety, using lead-free (Pb-free) formulations in full compliance with EU regulations.",
      certAlt: "Class A certificate",
      prevAria: "Previous certificate",
      nextAria: "Next certificate",
      goToAria: "Go to certificate",
    },
    whyChoose: {
      title1: "Why homeowners in",
      title2: "the Netherlands choose VALENT",
      installerAlt: "Valent installer",
      reasons: [
        {
          title: "Certified German systems",
          before: "We work with established European suppliers such as ",
          bold1: "VEKA profiles",
          middle: " and ",
          bold2: "ROTO hardware,",
          after: " widely used in residential projects across the EU.",
        },
        {
          title: "Transparent warranty",
          before: "We provide a ",
          bold1: "10-year manufacturer's warranty",
          middle: "",
          bold2: "",
          after:
            " for profiles, glazing, and hardware, clearly defined in our contract documentation.",
        },
        {
          title: "Controlled production & delivery",
          plain:
            "All windows are manufactured, quality-checked, and securely packaged in-house before delivery to the Netherlands.",
        },
        {
          title: "Reliable lead times",
          before: "Standard production and delivery timelines are approximately ",
          bold1: "45 calendar days,",
          middle: "",
          bold2: "",
          after: " depending on configuration and project scope.",
        },
      ],
      sideCards: [
        {
          titleLines: ["In-house", "production"],
          body: "Manufacturing, assembly, and packaging managed within our own production process.",
        },
        {
          titleLines: ["Technical", "consultation"],
          body: "Support from experienced project managers specialized in residential window projects.",
        },
        {
          titleLines: ["Quality control"],
          body: "Quality checks performed at key production stages and prior to delivery.",
        },
      ],
    },
    process: {
      title1: "A clear, controlled process",
      title2: "— from first call to installation",
      steps: [
        {
          title: "Technical Consultation",
          body: "You receive a clear technical proposal based on your needs, including configuration options, materials, and estimated timelines — explained by a qualified consultant.",
          bullets: ["No vague offers", "No hidden details"],
        },
        {
          title: "In-house Production",
          body: "Your windows and doors are manufactured according to EU standards, based on confirmed specifications.",
          bullets: [
            "Standard production time: ~45 calendar days",
            "Timeline depends on configuration and project scope",
          ],
        },
        {
          title: "Secure Packaging",
          body: "All products are professionally packaged in-house to minimize transport risk.",
          bullets: [
            "Protection against damage",
            "Suitable for long-distance delivery within the EU",
          ],
        },
        {
          title: "Scheduled Delivery",
          body: "We coordinate delivery directly to your address in the Netherlands.",
          bullets: ["Planned logistics", "Clear delivery coordination in advance"],
        },
        {
          title: "Turnkey Installation (Optional)",
          body: "Installation is carried out by experienced local teams, including removal of old windows and final adjustment.",
          bullets: ["One point of contact", "No coordination hassle for you"],
        },
      ],
    },
    team: {
      title: "Our project & support team",
      members: [
        {
          name: "Ion Banari – Project & Accountability",
          role: "Project coordination & responsibility",
          body: "Your project is managed by an experienced coordination team, responsible for communication, planning, and delivery.",
        },
        {
          name: "Daniel Banari – Technical & Sales Consultation",
          role: "Technical consultation & quotation",
          body: "Our sales and technical managers help define specifications, pricing, and timelines — clearly and transparently.",
        },
        {
          name: "Cristian Verejan – Design & Technical Accuracy",
          role: "Design & technical accuracy",
          body: "Each project is designed by experienced specialists to ensure correct configuration, accurate measurements, and optimal performance.",
        },
        {
          name: "Valentin Caț – Design & Technical Accuracy",
          role: "Design & technical accuracy",
          body: "Each project is designed by experienced specialists to ensure correct configuration, accurate measurements, and optimal performance.",
        },
      ],
    },
    installation: {
      tag: "Installation",
      title:
        "We provide a full installation service with warranty across the Netherlands",
      body:
        "Our professional installers take precise measurements, remove old windows, and fit the new ones.",
      phoneLabel: "Phone",
      phonePlaceholder: "00 000 0000",
      privacyBefore: "I agree with ",
      privacyLink: "the group policy",
      submit: "Request a measurement",
      ariaLabel: "Request a measurement",
      installerAlt: "Valent installer fitting a window",
    },
    projects: {
      title: "OUR COMPLETED PROJECTS IN THE NETHERLANDS!",
      prevAria: "Previous project",
      nextAria: "Next project",
      goToAria: "Go to project",
      altPrefix: "Project",
    },
    ral: {
      title:
        "Our products are certified with the RAL quality mark – the highest European standard",
      tag: "Quality",
      body:
        "We use state-of-the-art Elumatec automated machinery to ensure precision and eliminate human error in the production of insulated windows and doors",
      videoAria: "Play video about RAL quality mark",
    },
    transport: {
      ariaLabel: "Safe transport",
      tag: "Safe Delivery",
      title: "We guarantee the safe delivery of your windows",
      body:
        "Each unit is securely packed with multiple layers of stretch film and reinforced polystyrene corners to ensure full protection during transport. With our advanced packaging technology, your windows arrive safely — no matter the distance.",
      altPrefix: "Safe transport of windows, photo",
    },
    recognition: {
      lead: "We complete over 480 projects every year —",
      highlight: "96% of our clients recommend VALENT",
    },
    catalog: {
      title: "Enter your email to receive the catalog",
      tag: "Catalog",
      emailPlaceholder: "example@mail.com",
      phonePlaceholder: "00-000-0000",
      privacyBefore: "I agree with ",
      privacyLink: "the privacy policy",
      submit: "Send",
      ariaLabel: "Request catalog",
      catalogAlt: "Valent catalog",
    },
    sketches: {
      title:
        "See exactly which windows will be installed in your home – no need to wait weeks for a decision, you can start today",
      lead: "We prepare a full project with sketches",
      cta: "Chat with us on WhatsApp",
    },
    promotion: {
      sectionTitle: "CHECK OUT THE LATEST PROMOTIONS",
      offerBefore: "Take advantage of ",
      offerBold1: "20% off",
      offerMiddle: " on windows and receive a ",
      offerBold2: "free",
      offerAfter: " ventilation grille for one of your windows",
      bodyBefore: "Provide the promo code ",
      bodyCode: "VENTILATIONGRILLE",
      bodyAfter:
        " to the manager and take advantage of the offer until the end of this month",
      cta: "Plan a visit",
      ventAlt: "Ventilation grille mounted on a window",
    },
    contact: {
      title: "Our presence",
      phoneLabel: "Phone:",
      emailLabel: "E-mail:",
      addressLabel: "Address:",
      hoursLabel: "Working hours:",
      hoursValue: "Mon–Sat | 9:00 – 19:00",
      address: "Koornmarktpoort 25C, 8253 TE Dronten, Netherlands",
      cta: "Plan a visit",
      explanationLabel: "Sub addresses",
      explanationBody:
        "Our operational back office in Chișinău handles quotations, contracts, and administrative support. This structure allows us to provide competitive pricing, fast response times, and high-quality service for our clients in the Netherlands.",
      legalLabel: "Netherlands – Legal & Correspondence Address",
      legalBody: "Koornmarktpoort 25C, Dronten, The Netherlands",
      backofficeLabel: "Operational Back Office",
      backofficeBody: ["Constantin Vîrnav Street 8,", "Chișinău, MD-2025", "Republic of Moldova"],
      copyright: "2024©. YODANEXTPRIM SRL. All rights reserved",
      officeAlt: "VALENT office — production and showroom",
    },
    footer: {
      productsTitle: "Products",
      helpTitle: "Help",
      productLinks: [
        { href: "#products", label: "PVC Windows" },
        { href: "#products", label: "Front Doors" },
        { href: "#products", label: "Sliding Doors" },
        { href: "#products", label: "Roller Shutters" },
      ],
      helpLinks: [
        { href: "#contact", label: "Q&A" },
        { href: "#blog", label: "Blog" },
        { href: "#privacy", label: "Privacy Policy" },
      ],
    },
    callbackModal: {
      title: "Leave your details",
      subtitle:
        "Enter your email and phone number — we will contact you as soon as possible.",
      emailLabel: "Email",
      phoneLabel: "Phone number",
      phonePlaceholder: "6 12345678",
      privacyBefore: "I agree with the ",
      privacyLink: "privacy policy",
      privacyAfter: ".",
      submit: "Send",
      closeAria: "Close",
    },
    skipToContent: "Skip to main content",
  },
} as const;

export type Translation = (typeof translations)[Lang];
