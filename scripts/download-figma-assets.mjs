// One-off script: downloads Figma MCP asset URLs into /public/images.
// Asset URLs expire after 7 days, so re-run requires fresh URLs from Figma MCP.
import { writeFile, mkdir } from "node:fs/promises";

const dir = new URL("../public/images/", import.meta.url);
await mkdir(dir, { recursive: true });

const downloads = [
  ["process-step-1.webp", "https://www.figma.com/api/mcp/asset/05475818-c817-41aa-810b-e90f5ed01d05"],
  ["process-step-2.webp", "https://www.figma.com/api/mcp/asset/06a26d9e-a1cf-4df0-83d3-bb5c60b40ee1"],
  ["process-step-3.webp", "https://www.figma.com/api/mcp/asset/60085203-ec0b-4058-aff1-3439e8c2ca2b"],
  ["process-step-4.webp", "https://www.figma.com/api/mcp/asset/5222c139-e3d7-420f-84d3-98b4e0e7ca14"],
  ["process-step-5.webp", "https://www.figma.com/api/mcp/asset/d82f1233-a42e-41de-9bac-1147945adf9e"],
  ["team-1.webp", "https://www.figma.com/api/mcp/asset/4dc2cc48-2d68-4c8f-8076-fdd810f2a775"],
  ["team-2.webp", "https://www.figma.com/api/mcp/asset/590bd958-9dbe-4f49-aff7-a24d432a2f3f"],
  ["team-3.webp", "https://www.figma.com/api/mcp/asset/99980ea6-f2ac-4db1-a897-138a17855b91"],
  ["team-4.webp", "https://www.figma.com/api/mcp/asset/8a5fb59a-0305-4b74-a1bd-b8ab792f09a7"],
  ["ral-poster.webp", "https://www.figma.com/api/mcp/asset/fa3e5ec0-eac2-4f10-83ac-0b06f43bfcad"],
  ["why-choose-installer.webp", "https://www.figma.com/api/mcp/asset/ef873195-02b2-4d33-b21c-7e589d76158d"],
];

const results = await Promise.all(
  downloads.map(async ([name, url]) => {
    try {
      const res = await fetch(url);
      if (!res.ok) return `FAIL ${name}: HTTP ${res.status}`;
      const buf = Buffer.from(await res.arrayBuffer());
      await writeFile(new URL(name, dir), buf);
      return `OK   ${name}: ${buf.byteLength} bytes`;
    } catch (e) {
      return `FAIL ${name}: ${e.message}`;
    }
  })
);

for (const r of results) console.log(r);
