# venster-valent

Local Next.js 16 study build modeled on the layout of an existing commercial site.

## Important — Not For Distribution

This is a **private local experiment**. The `reference/` directory holds a mirror of a third-party commercial site (HTML, CSS, images) used only for offline visual comparison while building. It is gitignored and must not be committed, deployed, hosted, or otherwise distributed. Asset rights belong to their respective owners.

To take this further as a portfolio piece, replace all images, copy, and brand references first.

## Stack

- Next.js 16.2 (App Router, RSC)
- React 19
- Tailwind CSS v4 (CSS-first `@theme`)
- TypeScript
- `next/font` — Inter (substitute for the proprietary Tilda Sans used by the original)

## Scripts

- `npm run dev`
- `npm run build`
- `npm start`
- `npm run lint`

## Layout

```
src/
  app/           # routes, root layout, globals.css, sitemap, robots
  components/
    ui/          # primitives (Container, Button, Section)
    sections/    # page sections
  lib/           # site config, structured data
public/images/   # mirrored imagery (local-only)
reference/       # mirrored upstream site (gitignored)
```
