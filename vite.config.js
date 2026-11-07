import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// GitHub Pages serves this repo under /portfolio/.
// Routing is hash-based (#/p/<project>), so deep links and refreshes never 404.
export default defineConfig({
  base: "/portfolio/",
  plugins: [react()],
  build: { outDir: "dist", sourcemap: false },
});
