"use client";

import { useEffect, useState } from "react";
import { useLang } from "@/components/LanguageProvider";

type CallbackModalProps = {
  open: boolean;
  onClose: () => void;
};

type FormStatus = "idle" | "loading" | "success" | "error" | "rate_limited";

export function CallbackModal({ open, onClose }: CallbackModalProps) {
  const { t, lang } = useLang();
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [status, setStatus] = useState<FormStatus>("idle");

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
      setStatus("idle");
    };
  }, [open, onClose]);

  if (!open) return null;

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "loading") return;
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ form_type: "callback", email, phone, lang, website: "" }),
      });
      const data: { success: boolean; code?: string } = await res.json();
      if (data.success) {
        setStatus("success");
        setTimeout(() => {
          onClose();
          setEmail("");
          setPhone("");
          setAgreed(false);
        }, 1500);
      } else if (data.code === "rate_limited") {
        setStatus("rate_limited");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

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
        <button
          type="button"
          aria-label={t.callbackModal.closeAria}
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
          {t.callbackModal.title}
        </h2>
        <p className="mt-[16px] text-[16px] leading-[1.5] text-[#505050] sm:text-[18px]">
          {t.callbackModal.subtitle}
        </p>

        {status === "success" ? (
          <div
            role="status"
            aria-live="polite"
            className="mt-[28px] rounded-[16px] bg-[#e6f4ea] p-[24px] text-[16px] text-[#1a5c2a]"
          >
            {t.contactForm.success}
          </div>
        ) : (
          <form className="mt-[28px] space-y-[20px]" onSubmit={handleSubmit}>
            <input
              type="text"
              name="website"
              className="hidden"
              aria-hidden="true"
              tabIndex={-1}
              autoComplete="off"
              defaultValue=""
              readOnly
            />

            <div>
              <label htmlFor="cb-email" className="block text-[16px] font-bold text-[#050505]">
                {t.callbackModal.emailLabel}
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
                {t.callbackModal.phoneLabel}
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
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder={t.callbackModal.phonePlaceholder}
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
                {t.callbackModal.privacyBefore}
                <a href={lang === "en" ? "/en/privacy" : "/privacy"} target="_blank" rel="noopener" className="font-bold text-[#226CD5] underline">
                  {t.callbackModal.privacyLink}
                </a>
                {t.callbackModal.privacyAfter}
              </span>
            </label>

            <button
              type="submit"
              disabled={status === "loading"}
              className="block h-[72px] w-full rounded-[16px] bg-[#226CD5] text-[22px] font-bold uppercase text-white disabled:cursor-not-allowed disabled:opacity-60 [font-family:Roboto,Arial,sans-serif]"
            >
              {status === "loading" ? t.contactForm.sending : t.callbackModal.submit}
            </button>

            {(status === "error" || status === "rate_limited") && (
              <p role="alert" aria-live="assertive" className="text-[14px] text-[#c0392b]">
                {status === "rate_limited" ? t.contactForm.rateLimited : t.contactForm.error}
              </p>
            )}
          </form>
        )}
      </div>
    </div>
  );
}
