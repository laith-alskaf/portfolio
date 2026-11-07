// Fails the build if the generated site is not what search engines and AI crawlers need.
// Run after `npm run build`. Used by CI before anything is published.

import fs from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";

const root = process.cwd();
const dist = path.join(root, "dist");
const load = (rel) => import(pathToFileURL(path.join(root, rel)).href);
const { SITE_URL } = await load("src/content/site.js");
const { projects } = await load("src/content/projects.js");
const base = new URL(SITE_URL).pathname;

const problems = [];
const bad = (msg) => problems.push(msg);
const exists = (rel) => fs.access(path.join(dist, rel)).then(() => true, () => false);
const read = (rel) => fs.readFile(path.join(dist, rel), "utf8");

const pages = [
  { out: "index.html", url: SITE_URL, label: "home" },
  ...projects.map((p) => ({
    out: path.join("p", p.id, "index.html"),
    url: `${SITE_URL}p/${encodeURIComponent(p.id)}/`,
    label: p.id,
    name: p.text.en.name,
  })),
];

const titles = new Map();
for (const page of pages) {
  if (!(await exists(page.out))) {
    bad(`${page.label}: ${page.out} was not generated`);
    continue;
  }
  const html = await read(page.out);

  const rootMatch = /<div id="root">([\s\S]*?)<\/div>\s*<script/.exec(html);
  const body = rootMatch ? rootMatch[1] : "";
  if (!body.includes("<h1")) bad(`${page.label}: no pre-rendered <h1> inside #root`);
  if (page.name && !body.includes(page.name)) bad(`${page.label}: project name "${page.name}" missing from page body`);

  const title = (/<title>([\s\S]*?)<\/title>/.exec(html) || [])[1];
  if (!title) bad(`${page.label}: no <title>`);
  else if (titles.has(title)) bad(`${page.label}: duplicate <title> with ${titles.get(title)}`);
  else titles.set(title, page.label);

  const desc = (/<meta name="description" content="([^"]*)"/.exec(html) || [])[1];
  if (!desc || desc.length < 50) bad(`${page.label}: missing or too-short meta description`);
  if (desc && desc.length > 330) bad(`${page.label}: meta description is ${desc.length} chars`);

  const canonical = (/<link rel="canonical" href="([^"]*)"/.exec(html) || [])[1];
  if (canonical !== page.url) bad(`${page.label}: canonical is "${canonical}", expected "${page.url}"`);

  const ldBlocks = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];
  if (ldBlocks.length !== 1) bad(`${page.label}: expected 1 JSON-LD block, found ${ldBlocks.length}`);
  for (const m of ldBlocks) {
    try {
      JSON.parse(m[1]);
    } catch (e) {
      bad(`${page.label}: JSON-LD is not valid JSON (${e.message})`);
    }
  }

  if (/href="#\/(p\/)?/.test(html)) bad(`${page.label}: still contains old hash links (#/...)`);

  if (page.label === "home") {
    const linked = projects.filter((p) => html.includes(`href="${base}p/${encodeURIComponent(p.id)}/"`));
    if (linked.length !== projects.length) {
      const missing = projects.filter((p) => !linked.includes(p)).map((p) => p.id);
      bad(`home: no crawlable link to project page(s): ${missing.join(", ")}`);
    }
  }

  // every script/style the page references must exist in dist
  for (const m of html.matchAll(/(?:src|href)="(\/[^"#?]*\.(?:js|css|svg|png))"/g)) {
    const rel = m[1].startsWith(base) ? m[1].slice(base.length) : null;
    if (rel && !(await exists(rel))) bad(`${page.label}: references missing file ${m[1]}`);
  }
}

if (!(await exists("404.html"))) bad("404.html was not generated");
else if (!(await read("404.html")).includes('name="robots" content="noindex"')) bad("404.html is not marked noindex");

if (!(await exists("sitemap.xml"))) bad("sitemap.xml was not generated");
else {
  const sm = await read("sitemap.xml");
  const count = (sm.match(/<loc>/g) || []).length;
  if (count !== pages.length) bad(`sitemap.xml lists ${count} urls, expected ${pages.length}`);
  for (const page of pages) if (!sm.includes(`<loc>${page.url}</loc>`)) bad(`sitemap.xml is missing ${page.url}`);
}

if (!(await exists("llms.txt"))) bad("llms.txt was not generated");
else {
  const llms = await read("llms.txt");
  for (const p of projects) if (!llms.includes(p.text.en.name)) bad(`llms.txt does not mention ${p.text.en.name}`);
}

if (problems.length) {
  console.error(`verify-dist: ${problems.length} problem(s)\n` + problems.map((p) => `  - ${p}`).join("\n"));
  process.exit(1);
}
console.log(`verify-dist: OK — ${pages.length} pages, unique titles, canonical + JSON-LD valid, sitemap and llms.txt complete`);
