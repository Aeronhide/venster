import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand whitespace-nowrap";

const variants: Record<Variant, string> = {
  primary:
    "bg-brand text-white hover:bg-brand-strong shadow-[var(--shadow-cta)]",
  secondary:
    "bg-white text-brand-ink ring-1 ring-border hover:ring-brand hover:text-brand",
  ghost:
    "bg-transparent text-fg hover:bg-surface",
};

const sizes: Record<Size, string> = {
  md: "h-11 px-5 text-sm",
  lg: "h-13 px-7 text-base",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  className?: string;
};

type AnchorProps = CommonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "className"> & {
    href: string;
  };

type ButtonProps = CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className"> & {
    href?: undefined;
  };

export function Button(props: AnchorProps | ButtonProps) {
  const { variant = "primary", size = "md", className = "", children } = props;
  const cls = `${base} ${variants[variant]} ${sizes[size]} ${className}`;
  if ("href" in props && props.href !== undefined) {
    const { href, ...rest } = props as AnchorProps;
    return (
      <a href={href} className={cls} {...rest}>
        {children}
      </a>
    );
  }
  const { href: _h, ...rest } = props as ButtonProps;
  void _h;
  return (
    <button type="button" className={cls} {...rest}>
      {children}
    </button>
  );
}
