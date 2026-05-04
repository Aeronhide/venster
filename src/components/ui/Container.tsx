import type { ReactNode } from "react";

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`w-full px-2 sm:px-4 lg:px-6 ${className}`}>
      {children}
    </div>
  );
}
