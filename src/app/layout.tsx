import type { Metadata, Viewport } from "next";
import { Roboto } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { SITE_URL, site } from "@/lib/site";
import { ScrollToTopOnMount } from "@/components/ScrollToTopOnMount";
import { LanguageProvider } from "@/components/LanguageProvider";
import { ModalProvider } from "@/components/ModalContext";
import { SkipLink } from "@/components/SkipLink";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { StructuredData } from "@/components/StructuredData";
import { Analytics } from "@/components/Analytics";

const roboto = Roboto({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "700", "900"],
  display: "swap",
  variable: "--font-roboto",
  preload: true,
});

const tildaSans = localFont({
  src: "../../public/fonts/TildaSans-VF.woff2",
  variable: "--font-tilda",
  weight: "100 900",
  display: "swap",
  preload: true,
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#006bd5",
  colorScheme: "light",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s | ${site.name}`,
  },
  description:
    "PVC ramen, deuren, rolluiken en schuifpuien met Europese certificering. " +
    "5 jaar garantie, levering binnen 45 dagen, eerlijke prijzen. " +
    "Adviesgesprek, opmeting en montage in heel Nederland.",
  applicationName: site.name,
  generator: "Next.js",
  keywords: [
    "PVC ramen",
    "kunststof kozijnen",
    "voordeur",
    "schuifpui",
    "rolluiken",
    "VEKA",
    "Nederland",
    "ramen op maat",
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  publisher: site.name,
  formatDetection: { email: false, address: false, telephone: false },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: site.locale,
    url: SITE_URL,
    siteName: site.name,
    title: `${site.name} — ${site.tagline}`,
    description:
      "PVC ramen en deuren met VEKA-profielen, ROTO-beslag en SAINT-GOBAIN glas.",
    images: [
      {
        url: "/images/tild3239-6661-4231-b039-393332646261__valent-112_1.webp",
        width: 1200,
        height: 630,
        alt: `${site.name} — productie en montage`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.tagline}`,
    description:
      "PVC ramen en deuren op maat met Europese certificering.",
    images: ["/images/tild3239-6661-4231-b039-393332646261__valent-112_1.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang={site.language} className={`${roboto.variable} ${tildaSans.variable} antialiased`}>
      <body className="min-h-dvh bg-bg text-fg font-sans">
        {/* GTM noscript — only active when JS is disabled */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=GTM-PFQ3RBWK`}
            height="0"
            width="0"
            className="invisible hidden"
          />
        </noscript>
        <LanguageProvider>
          <ModalProvider>
            <SkipLink />
            <ScrollToTopOnMount />
            <Analytics />
            <Header />
            <main id="main">{children}</main>
            <Footer />
            <StructuredData />
          </ModalProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
