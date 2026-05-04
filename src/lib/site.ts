export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const site = {
  name: "Venster Valent",
  tagline: "PVC ramen, deuren en rolluiken — in heel Nederland",
  locale: "nl_NL",
  language: "nl",
  hours: "Ma–Za, 09:00–19:00",
  phone: {
    nl: "+31 970 102 666 13",
    md1: "+373 760 380 22",
    md2: "+373 788 555 58",
  },
  whatsapp: {
    nl: "https://wa.me/3197010266613",
    md1: "https://wa.me/37376038022",
    md2: "https://wa.me/37378855558",
  },
  email: "info@venstervalent.nl",
  offices: [
    {
      country: "Nederland",
      address: "Showroom & afhaalpunt — bezoek op afspraak",
      city: "Nederland",
    },
    {
      country: "Moldavië",
      address: "Productie & hoofdkantoor",
      city: "Chișinău",
    },
  ],
  social: {
    facebook: "https://www.facebook.com/valentermopane",
    instagram: "https://www.instagram.com/convalentprimsrl/",
    youtube: "https://www.youtube.com/channel/UC0KzgtGUQTkLICvvOd-YHZA",
  },
} as const;

export const nav = [
  { href: "#producten", label: "Producten" },
  { href: "#voordelen", label: "Voordelen" },
  { href: "#proces", label: "Hoe werkt het" },
  { href: "#contact", label: "Contact" },
] as const;
