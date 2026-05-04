"use client";

import Image from "next/image";
import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

// Tilda block rec1337102011. Card 1160x471 (#f5f5f5, radius 22). Image 573x382, title fs 28 → 40,
// body fs 14 → 20, "Montage" tag fs 12 → 17, button "Plan een inmeting" 330x60 → 475x86, fs 20 → 29.
const INSTALLER_IMG =
  "/images/tild3239-6661-4231-b039-393332646261__valent-112_1.webp";

export function InstallationForm() {
  const [phone, setPhone] = useState("");
  const [agreed, setAgreed] = useState(false);

  return (
    <Section
      id="inmeting"
      ariaLabelledby="installation-title"
      className="bg-white"
    >
      <Container>
        <article className="mx-auto grid max-w-[1670px] gap-[24px] overflow-hidden rounded-[22px] bg-[#f5f5f5] p-[24px] sm:p-[40px] lg:grid-cols-[825px_1fr] lg:gap-[80px] lg:p-[88px]">
          <div className="relative h-[280px] w-full overflow-hidden rounded-[22px] bg-white sm:h-[420px] lg:h-[550px]">
            <Image
              src={INSTALLER_IMG}
              alt="Valent monteur installeert een raam"
              fill
              sizes="(min-width: 1024px) 825px, 100vw"
              className="object-cover"
            />
          </div>

          <div className="flex flex-col justify-start">
            <span className="inline-flex h-[27px] w-fit items-center justify-center rounded-[7px] bg-[#006bd5] px-[14px] text-[17px] font-semibold uppercase text-white">
              Montage
            </span>

            <h2
              id="installation-title"
              className="mt-[24px] text-[24px] font-bold leading-[1.3] text-[#333333] sm:text-[32px] lg:text-[40px]"
            >
              Wij bieden het volledige installatiepakket met garantie in heel
              Nederland aan
            </h2>

            <p className="mt-[24px] text-[16px] leading-[1.5] text-[#7b7b7b] lg:text-[20px]">
              Onze installatiepartners kunnen bij u thuis langskomen om
              nauwkeurige metingen te verrichten, de oude ramen te verwijderen
              en de nieuwe te installeren.
            </p>

            <form
              className="mt-[32px] flex flex-col gap-[20px]"
              onSubmit={(e) => e.preventDefault()}
              aria-label="Plan een inmeting"
            >
              <label className="flex flex-col gap-[6px]">
                <span className="text-[14px] text-[#7b7b7b]">Telefoon</span>
                <div className="flex h-[72px] items-stretch overflow-hidden rounded-[12px] bg-white ring-1 ring-[#c7c7c7]">
                  <span className="flex items-center gap-[8px] border-r border-[#c7c7c7] bg-white px-[16px] text-[16px] text-[#333333]">
                    <span
                      aria-hidden
                      className="inline-block h-[12px] w-[18px] overflow-hidden rounded-[2px] bg-[linear-gradient(to_bottom,#AE1C28_33%,#fff_33%_66%,#21468B_66%)]"
                    />
                    +31
                  </span>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="00 000 0000"
                    className="flex-1 bg-white px-[16px] text-[16px] text-[#333333] outline-none"
                    required
                  />
                </div>
              </label>

              <label className="flex items-start gap-[10px] text-[14px] leading-[1.4] text-[#7b7b7b]">
                <input
                  type="checkbox"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  required
                  className="mt-[4px] h-[16px] w-[16px] accent-[#226CD5]"
                />
                <span>
                  Ik ga akkoord met{" "}
                  <a
                    href="#privacy"
                    className="font-medium text-[#226CD5] underline"
                  >
                    het groepsbeleid
                  </a>
                </span>
              </label>

              <button
                type="submit"
                className="mt-[8px] inline-flex h-[86px] w-full items-center justify-center rounded-[16px] bg-[#226CD5] px-[24px] text-[20px] font-bold capitalize text-white [font-family:Roboto,Arial,sans-serif] lg:text-[24px]"
              >
                Plan een inmeting
              </button>
            </form>
          </div>
        </article>
      </Container>
    </Section>
  );
}
