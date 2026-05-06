import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Products } from "@/components/sections/Products";
import { Features } from "@/components/sections/Features";
import { Financing } from "@/components/sections/Financing";
import { Partners } from "@/components/sections/Partners";
import { Certification } from "@/components/sections/Certification";
import { WhyChoose } from "@/components/sections/WhyChoose";
import { Process } from "@/components/sections/Process";
import { Team } from "@/components/sections/Team";
import { InstallationForm } from "@/components/sections/InstallationForm";
import { Projects } from "@/components/sections/Projects";
import { RAL } from "@/components/sections/RAL";
import { Transport } from "@/components/sections/Transport";
import { Recognition } from "@/components/sections/Recognition";
import { CatalogForm } from "@/components/sections/CatalogForm";
import { Sketches } from "@/components/sections/Sketches";
import { Promotion } from "@/components/sections/Promotion";
import { Contact } from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "Venster Valent — PVC Windows, Doors & Roller Shutters across the Netherlands",
  description:
    "PVC windows, doors, roller shutters and sliding doors with European certification. " +
    "5-year warranty, delivery within 45 days, fair prices. " +
    "Consultation, measurement and installation across the Netherlands.",
  alternates: {
    canonical: `${SITE_URL}/en`,
    languages: {
      nl: SITE_URL,
      en: `${SITE_URL}/en`,
    },
  },
};

export default function EnHome() {
  return (
    <>
      <Hero />
      <About />
      <Products />
      <Features />
      <Financing />
      <div className="bg-[#F5F5F5]">
        <Partners />
        <Certification />
        <WhyChoose />
        <Process />
        <Team />
        <InstallationForm />
        <Projects />
        <RAL />
        <Transport />
        <Recognition />
        <CatalogForm />
        <Sketches />
        <Promotion />
        <Contact />
      </div>
    </>
  );
}
