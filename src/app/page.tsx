import { Header } from "@/components/sections/Header";
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
import { Footer } from "@/components/sections/Footer";
import { StructuredData } from "@/components/StructuredData";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <About />
        <Products />
        <Features />
        <Financing />
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
      </main>
      <Footer />
      <StructuredData />
    </>
  );
}
