import { renderToString } from "react-dom/server";
import App from "./App.jsx";

// Used only at build time by scripts/prerender.mjs: turns a route into static HTML.
export function render(path) {
  return renderToString(<App initialPath={path} />);
}
