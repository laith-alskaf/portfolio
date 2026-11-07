// Build step 3 of 3 (after the client build and the SSR build).
// Turns the single-page app into real static pages so that search engines AND AI crawlers
// (which do not run JavaScript) can read it:
//
//   dist/index.html                 home
//   dist/p/<project>/index.html     one page per project, with its own title, description and structured data
//   dist/404.html                   same shell, marked noindex
//   dist/sitemap.xml, dist/llms.txt generated from the content files, so they never drift

import fs from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";

const root = process.cwd();
const dist = path.join(root, "dist");
const load = (rel) => import(pathToFileURL(path.join(root, rel)).href);

const { SITE_URL, SEO } = await load("src/content/site.js");
const { projects } = await load("src/content/projects.js");
const { person } = await load("src/content/profile.js");
const { render } = await load("dist-ssr/entry-server.js");

const base = new URL(SITE_URL).pathname; // "/portfolio/" on github.io, "/" on a custom domain
const projectUrl = (slug) => `${SITE_URL}p/${encodeURIComponent(slug)}/`;
const template = await fs.readFile(path.join(dist, "index.html"), "utf8");

const esc = (s) =>
  String(s).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const jsonLd = (obj) =>
  `<script type="application/ld+json">${JSON.stringify(obj).replace(/</g, "\\u003c")}</script>`;

function clip(text, max = 158) {
  const t = String(text).replace(/\s+/g, " ").trim();
  if (t.length <= max) return t;
  const cut = t.slice(0, max - 1);
  return cut.slice(0, cut.lastIndexOf(" ")).replace(/[,.;:\s]+$/, "") + "…";
}

const personNode = {
  "@type": "Person",
  name: person.name,
  jobTitle: "Software Engineer",
  description: SEO.summary,
  url: SITE_URL,
  image: person.photo,
  email: `mailto:${person.email}`,
  sameAs: [person.github, person.linkedin],
  address: { "@type": "PostalAddress", addressLocality: "Damascus", addressCountry: "SY" },
  knowsAbout: SEO.knowsAbout,
  alumniOf: { "@type": "EducationalOrganization", name: "University of Homs" },
};

// ---- per-page head -------------------------------------------------------------------------

const homePage = {
  route: base,
  out: "index.html",
  title: SEO.homeTitle,
  description: SEO.homeDescription,
  ogTitle: SEO.homeOgTitle,
  ogDescription: SEO.homeOgDescription,
  url: SITE_URL,
  ld: {
    "@context": "https://schema.org",
    "@graph": [
      personNode,
      { "@type": "WebSite", name: SEO.siteName, url: SITE_URL, inLanguage: ["en", "ar"] },
    ],
  },
};

const projectPages = projects.map((p) => {
  const en = p.text.en;
  const ar = p.text.ar;
  const url = projectUrl(p.id);
  const description = clip(`${en.tagline} ${en.built}`);
  return {
    route: `${base}p/${encodeURIComponent(p.id)}/`,
    out: path.join("p", p.id, "index.html"),
    title: `${en.name} — ${en.tagline.replace(/\.$/, "")} | ${SEO.siteName}`,
    description,
    ogTitle: `${en.name} — a project by ${SEO.siteName}`,
    ogDescription: description,
    url,
    ld: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "CreativeWork",
          name: en.name,
          alternateName: ar.name,
          description: `${en.tagline} ${en.built}`,
          url,
          inLanguage: ["en", "ar"],
          author: { "@type": "Person", name: person.name, url: SITE_URL },
          ...(p.links?.live ? { sameAs: [p.links.live] } : {}),
        },
        {
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: SEO.siteName, item: SITE_URL },
            { "@type": "ListItem", position: 2, name: en.name, item: url },
          ],
        },
      ],
    },
  };
});

function headBlock(page, { noindex = false } = {}) {
  const lines = [
    `<title>${esc(page.title)}</title>`,
    `<meta name="description" content="${esc(page.description)}" />`,
    noindex ? `<meta name="robots" content="noindex" />` : `<link rel="canonical" href="${esc(page.url)}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="${esc(SEO.siteName)}" />`,
    `<meta property="og:title" content="${esc(page.ogTitle)}" />`,
    `<meta property="og:description" content="${esc(page.ogDescription)}" />`,
    `<meta property="og:url" content="${esc(page.url)}" />`,
    `<meta property="og:image" content="${esc(SEO.ogImage)}" />`,
    `<meta property="og:image:width" content="1200" />`,
    `<meta property="og:image:height" content="630" />`,
    `<meta property="og:locale" content="en_US" />`,
    `<meta property="og:locale:alternate" content="ar_AR" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${esc(page.ogTitle)}" />`,
    `<meta name="twitter:description" content="${esc(page.ogDescription)}" />`,
    `<meta name="twitter:image" content="${esc(SEO.ogImage)}" />`,
    jsonLd(page.ld),
  ];
  return lines.map((l) => `    ${l}`).join("\n") + "\n";
}

// Remove the generic head tags written in index.html, then add this page's own.
function stripGenericHead(html) {
  return html
    .replace(/<title>[\s\S]*?<\/title>\s*/, "")
    .replace(/<meta\s+name="description"[^>]*>\s*/, "")
    .replace(/<link\s+rel="canonical"[^>]*>\s*/, "")
    .replace(/<meta\s+property="og:[^"]+"[^>]*>\s*/g, "")
    .replace(/<meta\s+name="twitter:[^"]+"[^>]*>\s*/g, "")
    .replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>\s*/, "");
}

function buildHtml(page, opts) {
  const body = render(page.route);
  if (!body || !body.includes("<h1")) throw new Error(`Pre-render produced no <h1> for ${page.route}`);
  let html = stripGenericHead(template);
  if (!html.includes('<div id="root"></div>')) throw new Error("Could not find the empty #root in dist/index.html");
  html = html.replace("</head>", `${headBlock(page, opts)}  </head>`);
  html = html.replace('<div id="root"></div>', `<div id="root">${body}</div>`);
  return html;
}

async function write(rel, content) {
  const file = path.join(dist, rel);
  await fs.mkdir(path.dirname(file), { recursive: true });
  await fs.writeFile(file, content, "utf8");
}

// ---- write pages ---------------------------------------------------------------------------

await write(homePage.out, buildHtml(homePage));
for (const page of projectPages) await write(page.out, buildHtml(page));
await write("404.html", buildHtml(homePage, { noindex: true }));

// ---- sitemap.xml ---------------------------------------------------------------------------

const today = new Date().toISOString().slice(0, 10);
const urls = [SITE_URL, ...projects.map((p) => projectUrl(p.id))];
await write(
  "sitemap.xml",
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    urls.map((u) => `  <url><loc>${esc(u)}</loc><lastmod>${today}</lastmod></url>`).join("\n") +
    `\n</urlset>\n`
);

// ---- llms.txt (plain-language map of the site for AI assistants) -----------------------------

const llms = [
  `# ${person.name}`,
  ``,
  `> ${SEO.summary}`,
  ``,
  `## Contact`,
  `- Email: ${person.email}`,
  `- GitHub: ${person.github}`,
  `- LinkedIn: ${person.linkedin}`,
  `- Site: ${SITE_URL}`,
  ``,
  `## Projects`,
  ...projects.map((p) => {
    const { en, ar } = p.text;
    const live = p.links?.live ? ` Live: ${p.links.live}` : "";
    return `- [${en.name} / ${ar.name}](${projectUrl(p.id)}): ${en.tagline}${live}`;
  }),
  ``,
].join("\n");
await write("llms.txt", llms);

console.log(`prerender: wrote ${1 + projectPages.length} pages + 404.html, sitemap.xml, llms.txt (${urls.length} urls)`);
