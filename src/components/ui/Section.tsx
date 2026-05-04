import type { ElementType, ReactNode } from "react";

type SectionProps = {
  id?: string;
  as?: ElementType;
  children: ReactNode;
  className?: string;
  ariaLabelledby?: string;
  ariaLabel?: string;
};

export function Section({
  id,
  as: Tag = "section",
  children,
  className = "",
  ariaLabelledby,
  ariaLabel,
}: SectionProps) {
  return (
    <Tag
      id={id}
      aria-labelledby={ariaLabelledby}
      aria-label={ariaLabel}
      className={`scroll-mt-24 py-16 sm:py-20 lg:py-24 ${className}`}
    >
      {children}
    </Tag>
  );
}
