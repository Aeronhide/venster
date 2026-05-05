"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
    ym: (id: number, method: string, options?: Record<string, unknown>) => void;
  }
}

const GTM_ID = "GTM-PFQ3RBWK";
const YM_ID = 98070381;

function injectScripts() {
  // Google Tag Manager
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
  const gtm = document.createElement("script");
  gtm.async = true;
  gtm.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`;
  document.head.appendChild(gtm);

  // Yandex Metrika
  (function (
    m: Window,
    e: Document,
    t: string,
    r: string,
    i: string,
  ) {
    type YmFn = ((...args: unknown[]) => void) & { a?: unknown[]; l?: number };
    const w = m as unknown as Record<string, YmFn>;
    w[i] = w[i] || function (...args: unknown[]) { (w[i].a = w[i].a || []).push(args); };
    w[i].l = 1 * (new Date() as unknown as number);
    const k = e.createElement(t) as HTMLScriptElement;
    const a = e.getElementsByTagName(t)[0];
    k.async = true;
    k.src = r;
    a.parentNode?.insertBefore(k, a);
  })(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

  window.ym(YM_ID, "init", {
    clickmap: true,
    trackLinks: true,
    accurateTrackBounce: true,
    webvisor: true,
  });
}

export function Analytics() {
  useEffect(() => {
    let fired = false;
    let injectTimer: ReturnType<typeof setTimeout>;

    function trigger() {
      if (fired) return;
      fired = true;
      EVENTS.forEach((e) => window.removeEventListener(e, trigger));
      // 3 s delay after first real user interaction
      injectTimer = setTimeout(injectScripts, 3_000);
    }

    const EVENTS = ["scroll", "touchstart", "pointerdown", "click", "keydown"] as const;
    EVENTS.forEach((e) =>
      window.addEventListener(e, trigger, { once: true, passive: true })
    );

    return () => {
      EVENTS.forEach((e) => window.removeEventListener(e, trigger));
      clearTimeout(injectTimer);
    };
  }, []);

  return null;
}
