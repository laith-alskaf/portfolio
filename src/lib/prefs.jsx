import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { ui } from "../content/ui.js";

// Two reader preferences drive the whole site:
//   lang: "en" | "ar"          (also flips direction to RTL)
//   mode: "everyone" | "engineer"  (plain-language story vs. technical story; also flips the visual theme)

const KEY = "laith-portfolio-prefs";
const PrefsContext = createContext(null);

function readStored() {
  try {
    const raw = window.localStorage.getItem(KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function initialPrefs() {
  if (typeof window === "undefined") return { lang: "en", mode: "everyone" };
  const stored = readStored();
  const nav = (navigator.language || "en").toLowerCase();
  return {
    lang: stored.lang === "ar" || stored.lang === "en" ? stored.lang : nav.startsWith("ar") ? "ar" : "en",
    mode: stored.mode === "engineer" || stored.mode === "everyone" ? stored.mode : "everyone",
  };
}

export function PrefsProvider({ children }) {
  const [prefs, setPrefs] = useState(initialPrefs);
  const { lang, mode } = prefs;

  useEffect(() => {
    const root = document.documentElement;
    root.lang = lang;
    root.dir = lang === "ar" ? "rtl" : "ltr";
    root.dataset.mode = mode;
    document.title = ui[lang].docTitle;
    const theme = document.querySelector('meta[name="theme-color"]');
    if (theme) theme.setAttribute("content", mode === "engineer" ? "#0a1626" : "#f3eee3");
    try {
      window.localStorage.setItem(KEY, JSON.stringify(prefs));
    } catch {
      /* storage can be blocked; the site works without it */
    }
  }, [lang, mode, prefs]);

  const setLang = useCallback((next) => setPrefs((p) => ({ ...p, lang: next })), []);
  const setMode = useCallback((next) => setPrefs((p) => ({ ...p, mode: next })), []);

  const value = useMemo(() => {
    const dict = ui[lang];
    return {
      lang,
      mode,
      isAr: lang === "ar",
      isEngineer: mode === "engineer",
      setLang,
      setMode,
      t: (key) => (key in dict ? dict[key] : key),
      // pick the right language from a { en, ar } object
      pick: (obj) => (obj ? obj[lang] ?? obj.en : ""),
    };
  }, [lang, mode, setLang, setMode]);

  return <PrefsContext.Provider value={value}>{children}</PrefsContext.Provider>;
}

export function usePrefs() {
  const ctx = useContext(PrefsContext);
  if (!ctx) throw new Error("usePrefs must be used inside <PrefsProvider>");
  return ctx;
}
