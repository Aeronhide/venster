import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";
import { Privacy } from "@/components/sections/Privacy";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Privacybeleid",
  description:
    "Privacybeleid van Venster Valent (YODANEXTPRIM S.R.L.) — AVG/GDPR en verwerking van persoonsgegevens.",
  robots: { index: true, follow: true },
  alternates: {
    canonical: `${SITE_URL}/privacy`,
    languages: {
      nl: `${SITE_URL}/privacy`,
      en: `${SITE_URL}/en/privacy`,
    },
  },
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main id="main">
        <Privacy />
      </main>
      <Footer />
    </>
  );
}
