import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export function Recognition() {
  return (
    <Section
      ariaLabel="Erkenning en aanbevelingen"
      className="bg-white !py-12 sm:!py-16"
    >
      <Container>
        <div className="text-center">
          <p className="text-xl font-bold text-brand-ink sm:text-2xl">
            We voeren jaarlijks meer dan
          </p>
          <p className="mt-2 text-xl font-bold text-brand-ink sm:text-2xl">
            480 projecten uit en al onze beoordelingen hebben de status
          </p>
          <p className="mt-3 text-2xl font-black uppercase text-[#3b3bc5] sm:text-3xl">
            Aanbevolen
          </p>
          <div
            aria-hidden
            className="mx-auto mt-4 h-3 w-48 bg-[repeating-linear-gradient(to_right,#191919_0_8px,transparent_8px_14px)] sm:w-64"
          />
        </div>
      </Container>
    </Section>
  );
}
