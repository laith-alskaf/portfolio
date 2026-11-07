import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./styles.css";

// Links from the first version used the hash (#/p/musafer). Rewrite them to the real path so old
// shared links keep working.
const BASE = import.meta.env.BASE_URL || "/";
const legacy = /^#\/p\/([^/?#]+)/.exec(window.location.hash);
if (legacy) window.history.replaceState(null, "", `${BASE}p/${legacy[1]}/`);
else if (window.location.hash === "#/") window.history.replaceState(null, "", BASE);

// The page already contains the pre-rendered HTML (for crawlers and the first paint).
// React replaces it with the interactive version, which renders the same markup for the default
// language and mode, then switches to the reader's saved language and mode.
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
