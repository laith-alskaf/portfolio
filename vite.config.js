import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { SITE_URL } from "./src/content/site.js";

// The base path comes from SITE_URL, so moving to a custom domain is a one-line change in site.js
// ("/portfolio/" on github.io, "/" on a domain of your own).
// Pages are real paths (/p/<project>/), pre-rendered to static HTML by scripts/prerender.mjs.
export default defineConfig({
  base: new URL(SITE_URL).pathname,
  plugins: [react()],
  build: { outDir: "dist", sourcemap: false },
});
