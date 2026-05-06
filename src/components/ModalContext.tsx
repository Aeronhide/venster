"use client";

import { createContext, useContext, useState } from "react";
import dynamic from "next/dynamic";

const CallbackModal = dynamic(
  () => import("@/components/CallbackModal").then((m) => m.CallbackModal),
  { ssr: false }
);

type ModalContextType = {
  openCallback: (source?: string) => void;
};

const ModalContext = createContext<ModalContextType>({ openCallback: () => {} });

export function useModal() {
  return useContext(ModalContext);
}

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [source, setSource] = useState<string>("");

  return (
    <ModalContext.Provider
      value={{
        openCallback: (src?: string) => {
          setSource(src ?? "");
          setOpen(true);
        },
      }}
    >
      {children}
      <CallbackModal open={open} onClose={() => setOpen(false)} source={source} />
    </ModalContext.Provider>
  );
}
