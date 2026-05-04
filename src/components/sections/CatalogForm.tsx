"use client";

import Image from "next/image";
import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

const CATALOG_IMG =
  "/images/tild3263-3933-4039-a265-393363393135__12.webp";

export function CatalogForm() {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [agreed, setAgreed] = useState(false);

  return (
    <Section
      id="catalogus"
      ariaLabelledby="catalog-title"
      className="bg-brand-ink text-white"
    >
      <Container>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="inline-flex items-center rounded-md bg-brand px-3 py-1 text-xs font-bold uppercase text-white">
              Catalog
            </span>
            <h2
              id="catalog-title"
              className="mt-4 text-2xl font-bold leading-snug sm:text-3xl lg:text-[32px]"
            >
              Vul uw e-mail in om de catalogus te ontvangen
            </h2>

            <form
              className="mt-8 space-y-4"
              onSubmit={(e) => e.preventDefault()}
              aria-label="Catalogus aanvragen"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="naam@mail.nl"
                className="w-full rounded-md bg-white px-4 py-4 text-base text-fg outline-none ring-1 ring-white/10 focus:ring-brand-soft"
              />

              <div className="flex items-stretch overflow-hidden rounded-md ring-1 ring-white/10">
                <span className="flex items-center gap-2 bg-white/95 px-3 text-sm text-fg">
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
                  className="flex-1 bg-white px-3 py-4 text-base text-fg outline-none"
                />
              </div>

              <label className="flex items-start gap-2 text-xs text-white/80">
                <input
                  type="checkbox"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  required
                  className="mt-0.5"
                />
                <span>
                  Ik ga akkoord met{" "}
                  <a href="#privacy" className="underline">
                    het groepsbeleid
                  </a>
                </span>
              </label>

              <button
                type="submit"
                className="w-full rounded-md bg-[#226cd5] py-4 text-base font-bold text-white shadow-[var(--shadow-cta)]"
              >
                Verzenden
              </button>
            </form>
          </div>

          <div className="relative">
            <Image
              src={CATALOG_IMG}
              alt="Valent catalogus"
              width={760}
              height={520}
              className="rounded-xl shadow-2xl"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}
