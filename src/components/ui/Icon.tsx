import type { SVGProps } from "react";

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

export function PhoneIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden {...stroke} {...props}>
      <path d="M22 16.92V21a1 1 0 0 1-1.09 1 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 3.21 4.09 1 1 0 0 1 4.2 3h4.09a1 1 0 0 1 1 .75 12.84 12.84 0 0 0 .7 2.81 1 1 0 0 1-.23 1.05L8.09 9.29a16 16 0 0 0 6 6l1.68-1.68a1 1 0 0 1 1.05-.23 12.84 12.84 0 0 0 2.81.7 1 1 0 0 1 .75 1Z" />
    </svg>
  );
}

export function WhatsAppIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden fill="currentColor" {...props}>
      <path d="M20.52 3.48A11.88 11.88 0 0 0 12.06 0C5.45 0 .07 5.38.07 12a11.9 11.9 0 0 0 1.6 6L0 24l6.16-1.62a12 12 0 0 0 5.9 1.51h.01c6.6 0 11.99-5.38 11.99-12 0-3.2-1.25-6.21-3.54-8.41ZM12.07 21.8h-.01a9.78 9.78 0 0 1-4.99-1.37l-.36-.21-3.66.96.98-3.57-.23-.37a9.81 9.81 0 0 1-1.5-5.24c0-5.42 4.42-9.83 9.85-9.83 2.63 0 5.1 1.03 6.96 2.89a9.78 9.78 0 0 1 2.89 6.95c-.01 5.43-4.43 9.83-9.93 9.79Zm5.4-7.36c-.3-.15-1.76-.87-2.04-.97-.27-.1-.47-.15-.67.15s-.77.97-.94 1.17c-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.6-.91-2.2-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.21 5.09 4.5.71.3 1.27.49 1.7.62.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2-1.41.25-.7.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35Z" />
    </svg>
  );
}

export function CheckIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden {...stroke} {...props}>
      <path d="M5 13l4 4L19 7" />
    </svg>
  );
}

export function ArrowRightIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden {...stroke} {...props}>
      <path d="M5 12h14M13 5l7 7-7 7" />
    </svg>
  );
}

export function StarIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden fill="currentColor" {...props}>
      <path d="M12 2.5l2.95 6.55 7.05.62-5.34 4.66 1.62 6.92L12 17.77l-6.28 3.48 1.62-6.92L2 9.67l7.05-.62L12 2.5Z" />
    </svg>
  );
}
