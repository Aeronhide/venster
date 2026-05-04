---
name: no-inline-styles
description: Project rule for venster-valent — never use the React `style` prop. Every visual property must be expressed as a Tailwind v4 class. Use arbitrary value notation (`w-[420px]`, `bg-[#226CD5]`, `text-[3.69cqi]`, `top-[57.73%]`) for one-off design tokens. Triggers when writing or editing any `.tsx`/`.jsx` component file.
---

# No inline styles — Tailwind classes only

## The rule

Do **not** write `style={{ ... }}` on any JSX element. Express every visual property as a Tailwind class.

This applies to:
- Static colors, font weights, sizes, spacing → `bg-[#226CD5]`, `font-bold`, `text-[18px]`
- Position values from a Figma/Tilda spec → `left-[6.37%]`, `top-[7.12%]`, `w-[26.22%]`
- Container query font sizes → `text-[3.69cqi]`
- Box shadows → `shadow-[5px_5px_10px_rgba(0,0,0,0.1)]`
- Border radius → `rounded-[12px]` or `rounded-full`
- Aspect ratios → `aspect-[1083/660]`
- Custom CSS properties → `[container-type:inline-size]`

## Why

Tailwind's JIT scans source files for **literal class strings**. Inline styles bypass the design system, defeat caching/diffing of CSS, and prevent design-token consistency. Mixing both creates two sources of truth that drift.

## How to handle dynamic / computed values

Tailwind only sees classes that appear as **literal strings** in source. So `className={`top-[${value}%]`}` will **not** generate the class — Tailwind cannot evaluate template literals at build time.

Three valid patterns, in order of preference:

### 1. Pre-compute values into static class literals

When the values come from a fixed spec (e.g. Tilda px → percentage), compute them once and embed the result as a literal string in the JSX:

```tsx
// Tilda spec: left=627, top=29, w=424, h=424 in 1083x660 canvas
<Image className="absolute left-[57.9%] top-[4.39%] w-[39.15%] h-[64.24%]" ... />
```

Add a comment showing the original px values so the source-of-truth is documented.

### 2. Define a class-name lookup constant

When the same set of computed positions is reused, declare them as `const` strings at the top of the file. Tailwind's scanner sees them as literals:

```tsx
const POS = {
  card1: "absolute left-[55.13%] top-[26.67%] w-[17.54%] h-[9.09%]",
  card2: "absolute left-[82.0%]  top-[15.45%] w-[20.13%] h-[9.09%]",
} as const;

<div className={POS.card1} />
```

### 3. Choose from a finite set with conditional logic

```tsx
const sizeClass =
  size === "sm" ? "h-[40px] w-[40px]" :
  size === "md" ? "h-[56px] w-[56px]" :
                  "h-[72px] w-[72px]";
```

## What's NOT allowed

```tsx
// ❌ Inline style for static value
<div style={{ background: "#226CD5", borderRadius: 8 }} />

// ❌ Inline style for computed value
<div style={{ left: `${x}%`, top: `${y}%` }} />

// ❌ Mixing inline + tailwind
<div className="font-bold" style={{ color: "#FFFFFF" }} />

// ❌ Template literal inside className (Tailwind won't see it)
<div className={`left-[${pctX(627)}]`} />
```

## What IS allowed

```tsx
// ✅ All Tailwind classes, including arbitrary values
<div className="bg-[#226CD5] rounded-[8px] absolute left-[57.9%] top-[4.39%]" />

// ✅ Conditional class composition
<div className={`absolute ${active ? "opacity-100" : "opacity-0"}`} />
```

## Allowed exceptions (very narrow)

The `style` prop may be used **only when** there is no Tailwind alternative AND the value is genuinely runtime-dynamic (not derivable from a fixed spec). Examples:
- A draggable element whose `left/top` is set by mouse coordinates
- A progress bar whose `width` is bound to live state changing every frame
- Setting CSS custom properties (`--my-var`) consumed by an animation

If you reach for `style={{}}`, first ask: *can I pre-compute this and write it as a class literal?* In almost every case for static designs (Figma/Tilda translations), the answer is yes.

## No "design canvas" anti-pattern

Do **not** translate Figma/Tilda layouts as a fixed-width absolute-positioned canvas (e.g. an artboard scaled with `transform: scale()`, or absolute coords on a 1920×1056 box). It produces unreadable HTML, breaks at small widths, prevents semantic structure, and makes typography decisions the browser would otherwise make naturally.

For headers, footers, navs, content rows: use **flex** or **grid** with normal block-level structure. Use Tilda/Figma px values to inform the **gap, padding, and explicit width/height** of items — not their absolute positions.

```tsx
// ❌ Bad — absolute canvas
<div className="relative aspect-[1200/70]">
  <a className="absolute left-[1%]  top-[12.86%] w-[12.92%]" />
  <a className="absolute left-[18.33%] top-1/2 -translate-y-1/2" />
  ...
</div>

// ✅ Good — flex with explicit sizes/gaps from the spec
<header className="flex h-[100px] items-center justify-between px-3">
  <a className="block w-[155px] h-[53px]" />
  <nav className="flex items-center gap-[100px]">...</nav>
  <div className="flex items-center gap-3">...</div>
</header>
```

The absolute-canvas pattern is acceptable **only** for designs that are intrinsically position-based (e.g. a hero banner with a product photo plus floating cards layered over it where positions matter). Even then, use `aspect-ratio` + `%` positioning + `cqi` font sizes — never `transform: scale()` driven by JavaScript.

## When refactoring an existing file

1. List every `style={{...}}` in the file.
2. For each property, compute the literal value and replace with the matching Tailwind arbitrary class.
3. Delete the `style` prop.
4. Verify the file compiles (`npx tsc --noEmit`).
5. Verify the design still matches visually (run dev server, take a screenshot if helpful).
