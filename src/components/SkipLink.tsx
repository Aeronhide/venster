"use client";

import { useT } from "@/components/LanguageProvider";

export function SkipLink() {
  const t = useT();
  return (
    <a
      href="#main"
      className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-fg focus:shadow focus:ring-2 focus:ring-brand"
    >
      {t.skipToContent}
    </a>
  );
}
