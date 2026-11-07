import { useEffect, useState } from "react";

// Tiny hash router: "#/" is home, "#/p/<slug>" is a project.
// Hash routing works on GitHub Pages without any server rewrite, so a refresh or a shared link never 404s.

export function parseHash(hash) {
  const parts = String(hash || "")
    .replace(/^#\/?/, "")
    .split("/")
    .filter(Boolean);
  if (parts[0] === "p" && parts[1]) return { name: "project", slug: decodeURIComponent(parts[1]) };
  return { name: "home" };
}

export const projectHref = (slug) => `#/p/${encodeURIComponent(slug)}`;
export const HOME_HREF = "#/";

export function useRoute() {
  const read = () => (typeof window === "undefined" ? { name: "home" } : parseHash(window.location.hash));
  const [route, setRoute] = useState(read);

  useEffect(() => {
    const onChange = () => setRoute(read());
    window.addEventListener("hashchange", onChange);
    return () => window.removeEventListener("hashchange", onChange);
  }, []);

  return route;
}

export function scrollToSection(id) {
  if (typeof document === "undefined") return;
  const el = document.getElementById(id);
  if (!el) return;
  const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  el.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
}
