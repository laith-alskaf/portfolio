import { usePrefs } from "../lib/prefs.jsx";
import { HOME_HREF } from "../lib/router.js";

const NAV = [
  ["work", "navWork"],
  ["offer", "navOffer"],
  ["journey", "navJourney"],
  ["contact", "navContact"],
];

export default function Header({ onNav }) {
  const { t, lang, setLang, mode, setMode } = usePrefs();

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a
          className="brand"
          href={HOME_HREF}
          onClick={(e) => {
            e.preventDefault();
            onNav("top");
          }}
        >
          <span className="brand-mark" aria-hidden="true">
            LA
          </span>
          <span className="brand-text">
            <strong>Laith Alskaf</strong>
            <small>{t("brandRole")}</small>
          </span>
        </a>

        <nav className="main-nav" aria-label={t("navLabel")}>
          {NAV.map(([id, key]) => (
            <button key={id} type="button" className="nav-link" onClick={() => onNav(id)}>
              {t(key)}
            </button>
          ))}
        </nav>

        <div className="controls">
          <div className="seg" role="group" aria-label={t("modeLabel")}>
            <button type="button" aria-pressed={mode === "everyone"} onClick={() => setMode("everyone")}>
              {t("modeEveryone")}
            </button>
            <button type="button" aria-pressed={mode === "engineer"} onClick={() => setMode("engineer")}>
              {t("modeEngineer")}
            </button>
          </div>
          <button
            type="button"
            className="lang-btn"
            onClick={() => setLang(lang === "ar" ? "en" : "ar")}
            aria-label={t("langSwitchToLabel")}
            lang={lang === "ar" ? "en" : "ar"}
          >
            {t("langSwitchTo")}
          </button>
        </div>
      </div>
    </header>
  );
}
