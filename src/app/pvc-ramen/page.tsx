import { HeroPvcRamen } from "@/components/sections/HeroPvcRamen";
import { PvcProfiles } from "@/components/sections/PvcProfiles";
import { PvcShowroom } from "@/components/sections/PvcShowroom";
import { PvcLamination } from "@/components/sections/PvcLamination";
import { PvcGlassTypes } from "@/components/sections/PvcGlassTypes";
import { PvcRoto } from "@/components/sections/PvcRoto";
import { PvcAccessories } from "@/components/sections/PvcAccessories";
import { PvcAdvantages } from "@/components/sections/PvcAdvantages";
import { PvcFAQ } from "@/components/sections/PvcFAQ";
import { Process } from "@/components/sections/Process";
import { InstallationForm } from "@/components/sections/InstallationForm";
import { Projects } from "@/components/sections/Projects";
import { Certification } from "@/components/sections/Certification";
import { Recognition } from "@/components/sections/Recognition";
import { Team } from "@/components/sections/Team";
import { CatalogForm } from "@/components/sections/CatalogForm";
import { Contact } from "@/components/sections/Contact";

export default function PvcRamenPage() {
  return (
    <>
      <HeroPvcRamen />
      <PvcProfiles />
      <PvcShowroom />
      <PvcLamination />
      <PvcGlassTypes />
      <PvcRoto />
      <PvcAccessories />
      <PvcAdvantages />
      <div className="bg-[#F5F5F5]">
        <Process />
        <InstallationForm />
        <Projects />
        <Certification />
        <PvcFAQ />
        <Recognition />
        <Team />
        <CatalogForm />
        <Contact />
      </div>
    </>
  );
}
