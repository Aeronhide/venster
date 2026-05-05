"use client";

import { useEffect, useState } from "react";

type CallbackModalProps = {
  open: boolean;
  onClose: () => void;
};

export function CallbackModal({ open, onClose }: CallbackModalProps) {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [agreed, setAgreed] = useState(false);

  // Lock body scroll while open + close on Escape
  useEffect(() => {
    if (!open) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = original;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="callback-modal-title"
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-black/50 p-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-h-[90vh] max-w-[640px] overflow-y-auto rounded-[16px] bg-white p-[24px] shadow-2xl sm:p-[32px] lg:p-[48px]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          type="button"
          aria-label="Sluiten"
          onClick={onClose}
          className="absolute right-[16px] top-[16px] grid h-[44px] w-[44px] place-items-center rounded-[8px] bg-[#F5F5F5] text-[#222] hover:bg-[#e5e5e5]"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>

        <h2
          id="callback-modal-title"
          className="text-[28px] font-bold text-[#050505] sm:text-[32px]"
        >
          Laat je gegevens achter
        </h2>
        <p className="mt-[16px] text-[16px] leading-[1.5] text-[#505050] sm:text-[18px]">
          Vul je e-mail en telefoonnummer in — we nemen zo snel mogelijk contact
          met je op.
        </p>

        <form
          className="mt-[28px] space-y-[20px]"
          onSubmit={(e) => {
            e.preventDefault();
            onClose();
          }}
        >
          <div>
            <label htmlFor="cb-email" className="block text-[16px] font-bold text-[#050505]">
              E-mail
            </label>
            <input
              id="cb-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-[8px] block h-[64px] w-full rounded-[16px] border-2 border-[#226CD5] bg-white px-[20px] text-[18px] text-[#050505] outline-none [font-family:Roboto,Arial,sans-serif] focus:ring-2 focus:ring-[#66a6e6]"
            />
          </div>

          <div>
            <label htmlFor="cb-phone" className="block text-[16px] font-bold text-[#050505]">
              Telefoonnummer
            </label>
            <div className="mt-[8px] flex h-[64px] items-stretch overflow-hidden rounded-[16px] border border-[#c7c7c7] bg-white">
              <span className="flex items-center gap-[8px] border-r border-[#c7c7c7] px-[16px] text-[18px] text-[#050505] [font-family:Roboto,Arial,sans-serif]">
                <span aria-hidden className="inline-block h-[14px] w-[20px] rounded-[2px] bg-[linear-gradient(to_bottom,#AE1C28_33%,#fff_33%_66%,#21468B_66%)]" />
                <span className="text-[14px] text-[#7d7d7d]">▾</span>
                <span>+31</span>
              </span>
              <input
                id="cb-phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="6 12345678"
                className="h-full flex-1 bg-white px-[16px] text-[18px] text-[#050505] outline-none placeholder:text-[#9a9a9a]"
              />
            </div>
          </div>

          <label className="flex items-center gap-[12px] text-[16px] text-[#050505]">
            <input
              type="checkbox"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              required
              className="h-[20px] w-[20px] flex-none accent-[#226CD5]"
            />
            <span>
              Ik ga akkoord met het{" "}
              <a href="#privacy" className="font-bold text-[#226CD5] underline">
                privacybeleid
              </a>
              .
            </span>
          </label>

          <button
            type="submit"
            className="block h-[72px] w-full rounded-[16px] bg-[#226CD5] text-[22px] font-bold uppercase text-white [font-family:Roboto,Arial,sans-serif]"
          >
            Versturen
          </button>
        </form>
      </div>
    </div>
  );
}
