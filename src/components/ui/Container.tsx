import type { ReactNode } from "react";

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`w-full px-4 sm:px-6 lg:px-10 xl:px-16 ${className}`}>
      {children}
    </div>
  );
}
