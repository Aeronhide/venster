import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";
import { Privacy } from "@/components/sections/Privacy";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | Venster Valent",
  description:
    "Privacy Policy of Venster Valent (YODANEXTPRIM S.R.L.) — GDPR and personal data processing.",
  robots: { index: true, follow: true },
  alternates: {
    canonical: `${SITE_URL}/en/privacy`,
    languages: {
      nl: `${SITE_URL}/privacy`,
      en: `${SITE_URL}/en/privacy`,
    },
  },
};

export default function EnPrivacyPage() {
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
