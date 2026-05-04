"use client";

import Image from "next/image";
import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

const INSTALLER_IMG =
  "/images/tild3239-6661-4231-b039-393332646261__valent-112_1.webp";

export function InstallationForm() {
  const [phone, setPhone] = useState("");
  const [agreed, setAgreed] = useState(false);
  return (
    <Section
      id="inmeting"
      ariaLabelledby="installation-title"
      className="bg-surface"
    >
      <Container>
        <div className="grid gap-6 overflow-hidden rounded-2xl bg-white p-4 sm:p-6 lg:grid-cols-2 lg:p-10">
          <div className="relative overflow-hidden rounded-xl bg-surface">
            <Image
              src={INSTALLER_IMG}
              alt="Valent monteur installeert een raam"
              width={900}
              height={700}
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="flex flex-col justify-center px-2 lg:px-8">
            <span className="inline-flex items-center self-start rounded-md bg-brand px-3 py-1 text-xs font-bold uppercase text-white">
              Montage
            </span>

            <h2
              id="installation-title"
              className="mt-4 text-2xl font-bold leading-snug text-brand-ink sm:text-3xl lg:text-[32px]"
            >
              Wij bieden het volledige installatiepakket met garantie in heel
              Nederland aan
            </h2>

            <p className="mt-4 text-sm text-fg-muted">
              Onze installatiepartners kunnen bij u thuis langskomen om
              nauwkeurige metingen te verrichten, de oude ramen te verwijderen
              en de nieuwe te installeren.
            </p>

            <form
              className="mt-6 space-y-4"
              onSubmit={(e) => e.preventDefault()}
              aria-label="Plan een inmeting"
            >
              <div className="flex items-stretch overflow-hidden rounded-md ring-1 ring-border">
                <span className="flex items-center gap-2 bg-surface px-3 text-sm">
                  <span
                    aria-hidden
                    className="inline-block h-3 w-5 rounded-sm bg-[linear-gradient(to_bottom,#AE1C28_33%,#fff_33%_66%,#21468B_66%)]"
                  />
                  +31
                </span>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="00 000 0000"
                  className="flex-1 bg-white px-3 py-3 text-sm text-fg outline-none"
                  required
                />
              </div>

              <label className="flex items-start gap-2 text-xs text-fg-muted">
                <input
                  type="checkbox"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  required
                  className="mt-0.5"
                />
                <span>
                  Ik ga akkoord met{" "}
                  <a
                    href="#privacy"
                    className="font-medium text-brand underline"
                  >
                    het groepsbeleid
                  </a>
                </span>
              </label>

              <button
                type="submit"
                className="w-full rounded-md bg-[#226cd5] py-4 text-base font-bold text-white shadow-[var(--shadow-cta)]"
              >
                Plan een inmeting
              </button>
            </form>
          </div>
        </div>
      </Container>
    </Section>
  );
}
