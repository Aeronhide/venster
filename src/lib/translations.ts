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
    pvcRamen: {
      headline: "PVC RAMEN",
      features: [
        "Opmeten en levering",
        "Professionele montage",
        "Prijzen van de fabrikant",
        "Gratis advies van een ingenieur",
        "5 jaar garantie",
      ],
      rating: "4.8",
      ratingAria: "Google reviews — 4.8 van 5 sterren",
      formTitle: "Ontvang een GRATIS BEREKENING in 5 MINUTEN!",
      formPhoneLabel: "Uw telefoonnummer",
      formPhonePlaceholder: "00 000 0000",
      formPrivacyBefore: "Ik ga akkoord met het ",
      formPrivacyLink: "privacybeleid",
      formSubmit: "OFFERTE AANVRAGEN",
      profiles: {
        title: "PROFIELEN VOOR PVC-RAMEN",
        cta: "Prijs ontdekken",
        items: [
          {
            name: "Gealan S8000",
            spec: "74 mm",
            body: "5-kamer profiel met uitstekende warmte- en geluidsisolatie, ideaal voor moderne residentiële projecten.",
          },
          {
            name: "Gealan Linear",
            spec: "74 mm",
            body: "Slank, eigentijds raamprofiel met smalle middenstijl — meer glas, meer licht, meer zicht.",
          },
          {
            name: "Gealan S9000",
            spec: "82 mm",
            body: "6-kamer premium profiel met topklasse isolatiewaarden en een levensduur van 50 jaar.",
          },
        ],
      },
      showroom: {
        title: "SHOWROOM VALENT.MD",
        body: "Kom langs om samen met ons de ramen en deuren te kiezen die u nodig hebt, op het adres: Chișinău, strada Constantin Vârnav, 8.",
        cta: "Bezoek plannen",
      },
      calculator: {
        title: "CALCULATOR VOOR PVC-RAMEN",
        next: "Verder",
        prev: "Terug",
        steps: [
          {
            question: "Kies waar u ramen nodig heeft.",
            options: [
              { label: "Appartement" },
              { label: "Privéhuis" },
              { label: "Kantoor" },
              { label: "Anders" },
            ],
          },
          {
            question: "Kies het aantal vleugels.",
            options: [
              { label: "Enkelvoudig raam", image: "/images/calculator/f1.svg" },
              { label: "Dubbelraam", image: "/images/calculator/f2.svg" },
              { label: "Drievluik", image: "/images/calculator/f3.svg" },
              { label: "Balkondeur", image: "/images/calculator/f4.svg" },
              { label: "Enkelvoudig raam met balkondeur", image: "/images/calculator/f5.svg" },
              { label: "Dubbelraam met balkondeur", image: "/images/calculator/f6.svg" },
            ],
          },
          {
            inputs: [
              { label: "Hoogte, mm", placeholder: "Hoogte, mm" },
              { label: "Breedte, mm", placeholder: "Breedte, mm" },
            ],
          },
          {
            groups: [
              {
                question: "Kies de kleur van het venster",
                options: [
                  { label: "Witte ramen" },
                  { label: "Gelamineerde ramen" },
                ],
              },
              {
                question: "Aantal rijen glas in een dubbele beglazing",
                options: [
                  { label: "2 rijen glas" },
                  { label: "3 rijen glas" },
                ],
              },
            ],
          },
          {
            groups: [
              {
                question: "Kies accessoires",
                multi: true,
                options: [
                  { label: "Raamkozijn" },
                  { label: "Afslootingen" },
                  { label: "Afvoeren" },
                  { label: "Horren" },
                ],
              },
              {
                question: "Levering",
                options: [
                  { label: "In de stad Chișinău" },
                  { label: "Buiten Chișinău" },
                  { label: "In Europa" },
                ],
              },
              {
                question: "Heeft u montage nodig?",
                options: [
                  { label: "Ja" },
                  { label: "Nee" },
                ],
              },
            ],
          },
          {
            final: {
              heading: "Gefeliciteerd! Alles is klaar voor de berekening!",
              body: "Op uw verzoek zijn er verschillende berekeningsopties mogelijk. Geef uw telefoonnummer door, dan sturen wij u een berekening toe, zodat u ons aanbod met andere aanbiedingen kunt vergelijken!",
              phoneLabel: "Tel/Viber/Whatsapp",
              phonePlaceholder: "00-000-0000",
              privacyBefore: "Ik ga akkoord met het ",
              privacyLink: "privacybeleid",
              submit: "De kosten berekenen",
            },
          },
        ],
      },
      lamination: {
        title: "LAMINERINGSVARIANTEN",
        groupStandard: "Standaardgroep",
        groupExtra: "Extra groep",
        body:
          "Kies uit een breed assortiment foliekleuren en houtdecoren — van klassiek wit en antraciet tot natuurlijke houtlook.",
      },
      glass: {
        title: "SOORTEN GLAS",
        items: [
          { name: "4 seizoenen glas (4S)", body: "Combineert warmte-isolatie in de winter met zonwering in de zomer." },
          { name: "LOW-E-glas", body: "Verlaagt het warmteverlies en bespaart op stookkosten." },
          { name: "Reflecterend glas in bronskleur", body: "Beperkt zonneschittering en biedt extra privacy overdag." },
          { name: "Zandgestraald glas", body: "Decoratief mat glas voor badkamers, deuren en privacy zones." },
        ],
      },
      roto: {
        tag: "ROTO-mechanisme",
        title: "ROTO-beslag voor PVC-ramen en deuren",
        body:
          "ROTO-beslag is bedoeld voor ramen en deuren van PVC, met verschillende soorten openingen en verschillende geometrieën.",
        bulletsTitle: "Voordelen van ROTO-beslag:",
        bullets: [
          "Hoge corrosiebestendigheid.",
          "Metalen scharnieren dragen tot 130 kg, vergeleken met 80–100 kg bij andere fabrikanten.",
          "ROTO is de Europese marktleider op het gebied van beslagproductie.",
        ],
      },
      accessories: {
        title: "RAAMACCESSOIRES",
        items: [
          { name: "Plissé-hor", body: "Insectenwering die discreet wegplooit als u hem niet nodig heeft." },
          { name: "Vensterbanken", body: "Op maat gemaakte binnen- en buitendorpels in passende kleuren." },
          { name: "Getijden", body: "Aluminium afwateringsprofielen voor een waterdichte gevelafwerking." },
        ],
      },
      advantages: {
        title: "VOORDELEN VAN PVC-RAMEN",
        intro: [
          "Of u nu aan het bouwen of renoveren bent, de keuze voor PVC-ramen is altijd de juiste, want het is een investering voor het leven. Wij produceren hoogwaardige PVC-deuren en -ramen, die ongetwijfeld de meest betrouwbare en praktische keuze voor uw huis zullen zijn. Elk jaar groeit het aantal tevreden klanten. Zonder PVC-ramen kunnen wij ons leven niet meer weg te denken. Bovendien bieden wij u de mogelijkheid om PVC-ramen rechtstreeks bij de fabrikant te kopen tegen betaalbare prijzen.",
          "Na het bestuderen van de lijst met voordelen die ze hun eigenaar bieden, ligt de keuze voor kunststof producten voor de hand. Naast hun elegantie en moderne design hebben PVC-ramen nog een hele reeks andere voordelen, waardoor ze erg in trek zijn:",
        ],
        items: [
          {
            name: "Warmte-isolatie",
            body: "De ideale oplossing om tot 76% warmte-energie te besparen en de kosten voor het verwarmen van uw huis te verlagen.",
          },
          {
            name: "Hoge geluidsisolatie",
            body: "Externe geluiden zullen geen ongemak meer veroorzaken.",
          },
          {
            name: "Hoge duurzaamheid",
            body: "Dat is wat PVC-producten met een gemiddelde levensduur van 50 jaar kenmerkt.",
          },
          {
            name: "Eenvoudig onderhoud",
            body: "U hoeft niet te schilderen en hoeft niet te worstelen met roest, en af en toe schoonmaken met water en zeep is niet zo vermoeiend.",
          },
        ],
      },
      onzeWerken: {
        title: "Onze werken",
        prevAria: "Vorige slide",
        nextAria: "Volgende slide",
        goToAria: "Ga naar slide",
        altPrefix: "Werken — slide",
      },
      reviews: {
        title: "Wat klanten over ons zeggen",
        prevAria: "Vorige beoordeling",
        nextAria: "Volgende beoordeling",
        goToAria: "Ga naar beoordeling",
        altPrefix: "Klantbeoordeling",
      },
      team: {
        title: "Het team van Valent.MD",
        subtitle: "Met een team van enthousiastelingen kun je bijna alles bereiken!",
      },
      offer: {
        title: "HEEFT U EEN OFFERTE VAN EEN ANDER BEDRIJF ONTVANGEN?",
        subtitle:
          "Vul het formulier in en onze manager neemt binnen 5 minuten contact met u op met een persoonlijk aanbod.",
        phoneHint: "Geef het juiste telefoonnummer op!",
        phonePlaceholder: "00-000-0000",
        cta: "Verzenden",
        privacyBefore: "Door op de knop te klikken gaat u akkoord met de ",
        privacyLink: "verwerking van persoonsgegevens",
      },
      visit: {
        title: "We kijken uit naar uw komst!",
        city: "Chisinau,",
        street: "Konstantin Vyrnav-straat 8",
        phoneLabel: "Telefoon: ",
        phone: "+373 760 38 022",
        emailLabel: "E-mail: ",
        email: "info@venstervalent.nl",
      },
      certified: {
        title: "Valent-producten zijn CE-gecertificeerd",
        alt: "VALENT CE-certificering — technische tekening",
      },
      consult: {
        title: "Heb je professionele advies nodig?",
        subtitle:
          "Laat hieronder uw contactgegevens achter en wij nemen zo spoedig mogelijk contact met u op!",
        phoneHint: "Geef het juiste telefoonnummer op!",
        phonePlaceholder: "00-000-0000",
        privacyBefore: "Ik ga akkoord met het ",
        privacyLink: "privacybeleid",
        cta: "Een consult aanvragen",
        alt: "Valent adviseur met catalogus",
      },
      faq: {
        title: "VRAGEN EN ANTWOORDEN",
        items: [
          {
            q: "Waar bent u?",
            a: "We zien je graag op het volgende adres: Chișinău, ul. Konstantin Vârnav, 8.",
            image: "/images/col1.webp",
            link: "https://www.google.com/maps/place/VALENT.MD/@46.9969094,28.8292334,18z/data=!3m1!4b1!4m6!3m5!1s0x40c97d283c774acd:0x4cc7516e78e0e49d!8m2!3d46.9969081!4d28.8301438!16s%2Fg%2F11h1drqhnr?entry=ttu",
            afterLink: "Openingstijden: maandag t/m vrijdag, 9:00 - 18:00 uur.",
          },
          {
            q: "Met welke profielen werkt u?",
            a: "Wij zijn partner van de Duitse fabrikant GEALAN.\nWij produceren ramen en deuren uit de volgende series:\nGEALAN S8000 74 mm\nGEALAN LINEAR 74 mm\nGEALAN S9000 82 mm,\nmet een levensduur van 50 jaar.",
          },
          {
            q: "Welke garantie biedt u?",
            a: "Na voltooiing van de werkzaamheden krijgt u 5 jaar garantie op uw project, op het profiel, het glas, de mechanismen en de montagewerkzaamheden.",
          },
          {
            q: "Hoe lang duurt het voordat u de bestelling uitvoert?",
            a: "De uitvoeringstermijn hangt af van het type profiel dat u kiest. Voor projecten met PVC-profielen bedraagt de uitvoeringstermijn 21-45 werkdagen.",
          },
          {
            q: "LOW-E-glas of 4S-glas?",
            a: "Wij raden u aan het type glas te kiezen op basis van de regio waar u woont en de hoeveelheid licht die uw woning binnenkomt.\nAls u in een gebied woont dat blootgesteld is aan zonlicht, raden wij u aan om 4-seizoenen glas te kiezen, omdat dit bescherming biedt tegen fel zonlicht en uw woning in de zomer koel houdt.\nAls u in een schaduwrijke omgeving woont, raden wij u aan om LOW-E-glas te kiezen voor meer licht in uw huis.",
          },
          {
            q: "Hoe kom je van condens op ramen af?",
            a: "Condensatie op ramen ontstaat meestal door hoge luchtvochtigheid en slechte luchtcirculatie. Het probleem kan worden opgelost door: 1) regelmatig te ventileren; 2) de luchtvochtigheid tussen 30 en 60% te houden; 3) ervoor zorgen dat warme lucht bij de ramen kan komen (blokkeer radiatoren niet met brede vensterbanken). Installeer indien mogelijk een ventilatieklep voor een constante toevoer van verse lucht.",
          },
          {
            q: "Wanneer moeten ramen worden geplaatst: vóór of na de renovatie van de muren?",
            a: "Wij raden aan om ramen te plaatsen voordat u begint met de afwerking. Zo kunt u de montagesneden en voegen netjes afwerken en voorkomt u dat de nieuwe afwerking tijdens de plaatsing beschadigd raakt.",
          },
        ],
      },
    },
    bedankt: {
      title: "BEDANKT!",
      bodyBefore:
        "Het VensterValent-team neemt zo snel mogelijk contact met je op. In de tussentijd nodigen we je uit om een kijkje te nemen in ons portfolio – misschien doe je nog wat inspiratie op! Bovendien ontvang je van ons ",
      bodyHighlight: "gratis onze productcatalogus",
      bodyAfter: " als cadeau",
      cta: "Catalogus",
      catalogAlt: "Valent productcatalogus",
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
    pvcRamen: {
      headline: "PVC WINDOWS",
      features: [
        "Measurement and delivery",
        "Professional installation",
        "Manufacturer prices",
        "Free engineer consultation",
        "5 year warranty",
      ],
      rating: "4.8",
      ratingAria: "Google reviews — 4.8 out of 5 stars",
      formTitle: "Get a FREE QUOTE in 5 MINUTES!",
      formPhoneLabel: "Your phone number",
      formPhonePlaceholder: "00 000 0000",
      formPrivacyBefore: "I agree with the ",
      formPrivacyLink: "privacy policy",
      formSubmit: "REQUEST QUOTE",
      profiles: {
        title: "PVC WINDOW PROFILES",
        cta: "Discover the price",
        items: [
          {
            name: "Gealan S8000",
            spec: "74 mm",
            body: "5-chamber profile with excellent thermal and acoustic insulation, ideal for modern residential projects.",
          },
          {
            name: "Gealan Linear",
            spec: "74 mm",
            body: "Slim, contemporary window profile with a narrow centre mullion — more glass, more light, more view.",
          },
          {
            name: "Gealan S9000",
            spec: "82 mm",
            body: "6-chamber premium profile with top-tier insulation values and a 50-year service life.",
          },
        ],
      },
      showroom: {
        title: "VALENT.MD SHOWROOM",
        body: "Stop by to choose the windows and doors you need together with us, at the address: Chișinău, Constantin Vârnav street 8.",
        cta: "Plan a visit",
      },
      calculator: {
        title: "PVC WINDOW CALCULATOR",
        next: "Continue",
        prev: "Back",
        steps: [
          {
            question: "Choose where you need windows.",
            options: [
              { label: "Apartment" },
              { label: "Private house" },
              { label: "Office" },
              { label: "Other" },
            ],
          },
          {
            question: "Choose the number of sashes.",
            options: [
              { label: "Single window", image: "/images/calculator/f1.svg" },
              { label: "Double window", image: "/images/calculator/f2.svg" },
              { label: "Triple window", image: "/images/calculator/f3.svg" },
              { label: "Balcony door", image: "/images/calculator/f4.svg" },
              { label: "Single window with balcony door", image: "/images/calculator/f5.svg" },
              { label: "Double window with balcony door", image: "/images/calculator/f6.svg" },
            ],
          },
          {
            inputs: [
              { label: "Height, mm", placeholder: "Height, mm" },
              { label: "Width, mm", placeholder: "Width, mm" },
            ],
          },
          {
            groups: [
              {
                question: "Choose the window color",
                options: [
                  { label: "White windows" },
                  { label: "Laminated windows" },
                ],
              },
              {
                question: "Number of glass panes in double glazing",
                options: [
                  { label: "2 panes" },
                  { label: "3 panes" },
                ],
              },
            ],
          },
          {
            groups: [
              {
                question: "Choose accessories",
                multi: true,
                options: [
                  { label: "Window frame" },
                  { label: "Locks" },
                  { label: "Drainage" },
                  { label: "Insect screens" },
                ],
              },
              {
                question: "Delivery",
                options: [
                  { label: "In Chișinău city" },
                  { label: "Outside Chișinău" },
                  { label: "In Europe" },
                ],
              },
              {
                question: "Do you need installation?",
                options: [
                  { label: "Yes" },
                  { label: "No" },
                ],
              },
            ],
          },
          {
            final: {
              heading: "Congratulations! Everything is ready for the calculation!",
              body: "Various calculation options are possible at your request. Please provide your phone number and we will send you a calculation so you can compare our offer with others!",
              phoneLabel: "Tel / Viber / Whatsapp",
              phonePlaceholder: "00-000-0000",
              privacyBefore: "I agree with the ",
              privacyLink: "privacy policy",
              submit: "Calculate the cost",
            },
          },
        ],
      },
      lamination: {
        title: "LAMINATION VARIANTS",
        groupStandard: "Standard group",
        groupExtra: "Extra group",
        body:
          "Choose from a wide range of foil colours and wood decors — from classic white and anthracite to natural wood looks.",
      },
      glass: {
        title: "GLASS TYPES",
        items: [
          { name: "4 seasons glass (4S)", body: "Combines thermal insulation in winter with solar shading in summer." },
          { name: "LOW-E glass", body: "Reduces heat loss and saves on heating costs." },
          { name: "Reflective bronze glass", body: "Limits glare and provides extra daytime privacy." },
          { name: "Sandblasted glass", body: "Decorative frosted glass for bathrooms, doors, and privacy zones." },
        ],
      },
      roto: {
        tag: "ROTO mechanism",
        title: "ROTO hardware for PVC windows and doors",
        body:
          "ROTO hardware is designed for PVC windows and doors with various opening types and geometries.",
        bulletsTitle: "Benefits of ROTO hardware:",
        bullets: [
          "High corrosion resistance.",
          "Metal hinges support up to 130 kg, compared with 80–100 kg from other manufacturers.",
          "ROTO is the European market leader in hardware production.",
        ],
      },
      accessories: {
        title: "WINDOW ACCESSORIES",
        items: [
          { name: "Pleated screen", body: "Insect screen that folds away discreetly when you don't need it." },
          { name: "Window sills", body: "Bespoke interior and exterior sills in matching colours." },
          { name: "Drip flashings", body: "Aluminium drainage profiles for a watertight facade finish." },
        ],
      },
      advantages: {
        title: "BENEFITS OF PVC WINDOWS",
        intro: [
          "Whether you are building or renovating, choosing PVC windows is always the right decision — it is an investment for life. We produce high-quality PVC doors and windows that will undoubtedly be the most reliable and practical choice for your home. Each year, the number of satisfied customers grows. Today it is hard to imagine life without PVC windows. We also give you the opportunity to buy PVC windows directly from the manufacturer at affordable prices.",
          "After studying the list of benefits they offer their owner, the choice of plastic products is obvious. In addition to their elegance and modern design, PVC windows have a whole range of other advantages, which is why they are so popular:",
        ],
        items: [
          {
            name: "Thermal insulation",
            body: "The ideal solution to save up to 76% of heat energy and reduce the cost of heating your home.",
          },
          {
            name: "High acoustic insulation",
            body: "External noise will no longer cause discomfort.",
          },
          {
            name: "High durability",
            body: "PVC products are characterised by an average service life of 50 years.",
          },
          {
            name: "Easy maintenance",
            body: "No need to paint, no rust to fight, and the occasional cleaning with water and soap is hardly tiring.",
          },
        ],
      },
      onzeWerken: {
        title: "Our works",
        prevAria: "Previous slide",
        nextAria: "Next slide",
        goToAria: "Go to slide",
        altPrefix: "Our works — slide",
      },
      reviews: {
        title: "What clients say about us",
        prevAria: "Previous review",
        nextAria: "Next review",
        goToAria: "Go to review",
        altPrefix: "Client review",
      },
      team: {
        title: "The Valent.MD team",
        subtitle: "With a team of enthusiasts you can achieve almost anything!",
      },
      offer: {
        title: "HAVE YOU RECEIVED A QUOTE FROM ANOTHER COMPANY?",
        subtitle:
          "Fill out the form, and our manager will contact you within 5 minutes with a personalized offer.",
        phoneHint: "Please enter the correct phone number!",
        phonePlaceholder: "00-000-0000",
        cta: "Submit",
        privacyBefore: "By clicking the button you agree to the ",
        privacyLink: "processing of personal data",
      },
      visit: {
        title: "We look forward to your visit!",
        city: "Chisinau,",
        street: "Konstantin Vyrnav street 8",
        phoneLabel: "Phone: ",
        phone: "+373 760 38 022",
        emailLabel: "E-mail: ",
        email: "info@venstervalent.nl",
      },
      certified: {
        title: "VALENT products are CE-certified",
        alt: "VALENT CE certification — technical drawing",
      },
      consult: {
        title: "Need professional advice?",
        subtitle:
          "Leave your contact details below and we will get back to you as soon as possible!",
        phoneHint: "Please enter a valid phone number",
        phonePlaceholder: "00-000-0000",
        privacyBefore: "I agree with the ",
        privacyLink: "privacy policy",
        cta: "Request a consult",
        alt: "Valent adviser with catalog",
      },
      faq: {
        title: "QUESTIONS AND ANSWERS",
        items: [
          {
            q: "Where are you located?",
            a: "We'd love to see you at: Chișinău, Konstantin Vârnav street 8.",
            image: "/images/col1.webp",
            link: "https://www.google.com/maps/place/VALENT.MD/@46.9969094,28.8292334,18z/data=!3m1!4b1!4m6!3m5!1s0x40c97d283c774acd:0x4cc7516e78e0e49d!8m2!3d46.9969081!4d28.8301438!16s%2Fg%2F11h1drqhnr?entry=ttu",
            afterLink: "Opening hours: Monday to Friday, 9:00 - 18:00.",
          },
          {
            q: "Which profiles do you work with?",
            a: "We are a partner of the German manufacturer GEALAN.\nWe produce windows and doors from the following series:\nGEALAN S8000 74 mm\nGEALAN LINEAR 74 mm\nGEALAN S9000 82 mm,\nwith a service life of 50 years.",
          },
          {
            q: "What warranty do you offer?",
            a: "After completion of the work, you receive a 5-year warranty on your project — on the profile, the glass, the mechanisms, and the installation work.",
          },
          {
            q: "How long does it take to fulfil the order?",
            a: "The lead time depends on the chosen profile type. For PVC projects, the lead time is 21-45 working days.",
          },
          {
            q: "LOW-E glass or 4S glass?",
            a: "We recommend choosing the glass type based on the region where you live and the amount of light entering your home.\nIf you live in an area exposed to direct sunlight, we recommend 4-seasons glass — it protects against bright sunlight and keeps your home cool in summer.\nIf you live in a shaded environment, we recommend LOW-E glass for more light inside.",
          },
          {
            q: "How do you get rid of condensation on windows?",
            a: "Condensation on windows usually appears because of high humidity and poor air circulation. You can fix it by: 1) ventilating regularly; 2) keeping humidity between 30 and 60%; 3) making sure warm air can reach the windows (don't block radiators with wide window sills). If possible, install a ventilation valve for a constant supply of fresh air.",
          },
          {
            q: "When should windows be installed: before or after wall renovation?",
            a: "We recommend installing the windows before you start the finishing work. This way you can finish the installation cuts and joints neatly and avoid damage during installation.",
          },
        ],
      },
    },
    bedankt: {
      title: "THANK YOU!",
      bodyBefore:
        "The VensterValent team will contact you as soon as possible. In the meantime we invite you to take a look at our portfolio — you might find some inspiration! On top of that, you'll receive ",
      bodyHighlight: "our free product catalogue",
      bodyAfter: " as a gift",
      cta: "Catalogue",
      catalogAlt: "Valent product catalogue",
    },
    skipToContent: "Skip to main content",
  },
} as const;

export type Translation = (typeof translations)[Lang];
