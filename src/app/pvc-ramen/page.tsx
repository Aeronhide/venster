import { HeroPvcRamen } from "@/components/sections/HeroPvcRamen";
import { PvcProfiles } from "@/components/sections/PvcProfiles";
import { PvcCalculator } from "@/components/sections/PvcCalculator";
import { PvcShowroom } from "@/components/sections/PvcShowroom";
import { PvcLamination } from "@/components/sections/PvcLamination";
import { PvcGlassTypes } from "@/components/sections/PvcGlassTypes";
import { PvcRoto } from "@/components/sections/PvcRoto";
import { PvcAccessories } from "@/components/sections/PvcAccessories";
import { PvcAdvantages } from "@/components/sections/PvcAdvantages";
import { PvcConsult } from "@/components/sections/PvcConsult";
import { PvcOnzeWerken } from "@/components/sections/PvcOnzeWerken";
import { PvcFAQ } from "@/components/sections/PvcFAQ";
import { Products } from "@/components/sections/Products";
import { Process } from "@/components/sections/Process";
import { InstallationForm } from "@/components/sections/InstallationForm";
import { Projects } from "@/components/sections/Projects";
import { Certification } from "@/components/sections/Certification";
import { Recognition } from "@/components/sections/Recognition";
import { Team } from "@/components/sections/Team";
import { CatalogForm } from "@/components/sections/CatalogForm";
import { Contact } from "@/components/sections/Contact";

const PVC_PRODUCT_IMAGES = [
  "/images/ontdek/on1.jpg",
  "/images/ontdek/on2.jpg",
  "/images/ontdek/on3.jpg",
  "/images/ontdek/on4.webp",
];

export default function PvcRamenPage() {
  return (
    <>
      <HeroPvcRamen />
      <PvcProfiles />
      <PvcCalculator />
      <PvcShowroom />
      <PvcLamination />
      <PvcGlassTypes />
      <PvcRoto />
      <PvcAccessories />
      <Products images={PVC_PRODUCT_IMAGES} />
      <Process />
      <PvcConsult />
      <PvcOnzeWerken />
      <PvcAdvantages />
      <div className="bg-[#F5F5F5]">
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
