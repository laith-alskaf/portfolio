import { projectMeta } from "./projectMeta.js";
import { projectText } from "./projectText.js";

// Facts (links, images, stack) + narrative (EN/AR) joined into one list, in display order.
export const projects = projectMeta.map((meta) => ({ ...meta, text: projectText[meta.id] }));

export const kinds = ["apps", "systems", "web", "backend", "ai"];

export const kindKey = {
  apps: "kindApps",
  systems: "kindSystems",
  web: "kindWeb",
  backend: "kindBackend",
  ai: "kindAi",
};

export const getProject = (slug) => projects.find((p) => p.id === slug) || null;

export function getNeighbours(slug) {
  const i = projects.findIndex((p) => p.id === slug);
  if (i === -1) return { prev: null, next: null };
  return {
    prev: i > 0 ? projects[i - 1] : null,
    next: i < projects.length - 1 ? projects[i + 1] : null,
  };
}

export function projectYear(p) {
  const raw = p.end && p.end !== "Present" ? p.end : p.start;
  return String(raw || "").slice(0, 4);
}

export const liveProjects = projects.filter((p) => p.links.live || p.links.store);
