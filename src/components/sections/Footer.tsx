"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { site } from "@/lib/site";

const productLinks = [
  { href: "#products", label: "PVC Ramen" },
  { href: "#products", label: "Voordeuren" },
  { href: "#products", label: "Schuifdeuren" },
  { href: "#products", label: "Rolluiken" },
];

const helpLinks = [
  { href: "#contact", label: "Q&A" },
  { href: "#blog", label: "Blog" },
  { href: "#privacy", label: "Privacybeleid" },
];

function SocialLinks({ className = "" }: { className?: string }) {
  return (
    <ul className={`items-center gap-3 ${className}`}>
      <li>
        <a
          href={site.social.facebook}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          className="grid size-10 place-items-center rounded-full bg-brand text-white hover:bg-brand-strong"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <path d="M22 12a10 10 0 10-11.6 9.87v-6.98H7.9V12h2.5V9.8c0-2.47 1.47-3.83 3.72-3.83 1.08 0 2.21.19 2.21.19v2.43h-1.25c-1.23 0-1.61.76-1.61 1.55V12h2.74l-.44 2.89h-2.3v6.98A10 10 0 0022 12z" />
          </svg>
        </a>
      </li>
      <li>
        <a
          href={site.social.instagram}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="grid size-10 place-items-center rounded-full bg-brand text-white hover:bg-brand-strong"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden>
            <rect x="3" y="3" width="18" height="18" rx="5" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
          </svg>
        </a>
      </li>
      <li>
        <a
          href={site.social.youtube}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="YouTube"
          className="grid size-10 place-items-center rounded-full bg-brand text-white hover:bg-brand-strong"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <path d="M23 12s0-3.5-.45-5.16a2.78 2.78 0 00-1.95-1.96C18.93 4.5 12 4.5 12 4.5s-6.93 0-8.6.38a2.78 2.78 0 00-1.96 1.96C1 8.5 1 12 1 12s0 3.5.44 5.17a2.78 2.78 0 001.96 1.95c1.67.38 8.6.38 8.6.38s6.93 0 8.6-.38a2.78 2.78 0 001.95-1.95C23 15.5 23 12 23 12zM10 15.5v-7l6 3.5-6 3.5z" />
          </svg>
        </a>
      </li>
    </ul>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#2d2d33] text-fg-subtle">
      <Container className="py-10 lg:py-14">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[2fr_1fr_1fr] lg:gap-16">
          {/* Logo cluster */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <button
              type="button"
              onClick={() => window.scrollTo(0, 0)}
              className="inline-flex items-center"
              aria-label={site.name}
            >
              <Image
                src="/images/logo_white.svg"
                alt={site.name}
                width={200}
                height={70}
                priority={false}
                className="h-[70px] w-[200px]"
              />
            </button>

            {/* Social — desktop only, sits below the logo */}
            <SocialLinks className="mt-6 hidden lg:flex lg:justify-start" />
          </div>

          {/* Producten — centered on mobile, left-aligned on lg */}
          <nav aria-label="Producten" className="text-center lg:text-left">
            <h3 className="text-xl font-bold text-white">Producten</h3>
            <ul className="mt-6 space-y-4 text-lg text-white/85">
              {productLinks.map((l) => (
                <li key={l.label}>
                  <a className="hover:text-white" href={l.href}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Help — centered on mobile, left-aligned on lg */}
          <nav aria-label="Hulp" className="text-center lg:text-left">
            <h3 className="text-xl font-bold text-white">Help</h3>
            <ul className="mt-6 space-y-4 text-lg text-white/85">
              {helpLinks.map((l) => (
                <li key={l.label}>
                  <a className="hover:text-white" href={l.href}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social — mobile only, anchored to the bottom of the stack */}
          <SocialLinks className="flex justify-center lg:hidden" />
        </div>
      </Container>
    </footer>
  );
}
