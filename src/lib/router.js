import { createContext, useContext, useEffect, useState } from "react";

// Tiny path router: "<base>" is home, "<base>p/<slug>/" is a project.
// Every project page is pre-rendered to static HTML at build time (scripts/prerender.mjs), so a refresh,
// a shared link or a crawler that never runs JavaScript all get the real page.
// Normal <a href> clicks are intercepted once, here, so components just render plain links.

const BASE = import.meta.env.BASE_URL || "/";
const BASE_NO_SLASH = BASE.replace(/\/+$/, "");

export const HOME_HREF = BASE;
export const projectHref = (slug) => `${BASE}p/${encodeURIComponent(slug)}/`;

// Returns { name: "home" } | { name: "project", slug } | null (not a page of this app).
export function parsePath(pathname) {
  let p = String(pathname || "/");
  if (BASE_NO_SLASH) {
    if (p === BASE_NO_SLASH) p = "/";
    else if (p.startsWith(BASE_NO_SLASH + "/")) p = p.slice(BASE_NO_SLASH.length);
    else return null;
  }
  const parts = p.split("/").filter(Boolean);
  if (parts.length === 0 || (parts.length === 1 && parts[0] === "index.html")) return { name: "home" };
  if (parts.length === 2 && parts[0] === "p") {
    try {
      return { name: "project", slug: decodeURIComponent(parts[1]) };
    } catch {
      return null;
    }
  }
  return null;
}

export const RouteContext = createContext({ name: "home" });

export function useRoute() {
  return useContext(RouteContext);
}

// Owns the current route. On the server (pre-render) the path is passed in; in the browser it follows the URL.
export function useRouteState(initialPath) {
  const [route, setRoute] = useState(() => {
    const path = initialPath ?? (typeof window === "undefined" ? "/" : window.location.pathname);
    return parsePath(path) || { name: "home" };
  });

  useEffect(() => {
    const sync = () => setRoute(parsePath(window.location.pathname) || { name: "home" });

    const onClick = (e) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const a = e.target instanceof Element ? e.target.closest("a[href]") : null;
      if (!a || (a.target && a.target !== "_self") || a.hasAttribute("download")) return;
      const raw = a.getAttribute("href");
      if (!raw || raw.startsWith("#")) return;
      let url;
      try {
        url = new URL(a.href, window.location.href);
      } catch {
        return;
      }
      if (url.origin !== window.location.origin) return;
      const next = parsePath(url.pathname);
      if (!next) return;
      e.preventDefault();
      const target = url.pathname + url.search;
      if (target !== window.location.pathname + window.location.search) {
        window.history.pushState(null, "", target);
      }
      setRoute(next);
    };

    window.addEventListener("popstate", sync);
    document.addEventListener("click", onClick);
    return () => {
      window.removeEventListener("popstate", sync);
      document.removeEventListener("click", onClick);
    };
  }, []);

  return route;
}

export function navigate(href) {
  if (typeof window === "undefined") return;
  window.history.pushState(null, "", href);
  window.dispatchEvent(new PopStateEvent("popstate"));
}

export function scrollToSection(id) {
  if (typeof document === "undefined") return;
  const el = document.getElementById(id);
  if (!el) return;
  const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  el.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
}
