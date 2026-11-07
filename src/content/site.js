// Single source of truth for where the site lives and how it describes itself to search engines.
//
// When a custom domain is added later, change SITE_URL here and nothing else:
//   vite.config.js reads the base path from it, and the build script generates canonical URLs,
//   the sitemap, social-preview tags and structured data from it.

export const SITE_URL = "https://laith-alskaf.github.io/portfolio/";

export const SEO = {
  siteName: "Laith Alskaf",
  homeTitle: "Laith Alskaf — Software Engineer | مهندس برمجيات",
  homeDescription:
    "Laith Alskaf builds mobile apps, business systems and AI tools — from first idea to live product. Read it in plain language or in engineer mode. Arabic & English. | Laith Alskaf يبني تطبيقات وأنظمة وأدوات ذكاء اصطناعي، من الفكرة إلى المنتج الحي.",
  homeOgTitle: "Laith Alskaf — I turn ideas into apps and systems people actually use",
  homeOgDescription:
    "Mobile apps, business systems and AI tools, from first idea to live product. Plain language for everyone, technical depth for engineers.",
  ogImage: `${SITE_URL}og.png`,
  summary:
    "Software engineer in Damascus, Syria. Builds mobile apps (Flutter), business systems and AI tools, from first idea to live product. Works in English and Arabic.",
  knowsAbout: ["Flutter", "Dart", "Node.js", "TypeScript", "Clean Architecture", "Firebase", "Supabase", "REST APIs"],
};
