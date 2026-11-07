import { usePrefs } from "../lib/prefs.jsx";
import { person } from "../content/profile.js";

export default function Footer({ onNav }) {
  const { t } = usePrefs();
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p>
          © {new Date().getFullYear()} · {t("footerNote")}
        </p>
        <p className="muted small mono">{t("footerStack")}</p>
        <p className="footer-links">
          <a href={person.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href={person.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <button type="button" className="link-btn" onClick={() => onNav("top")}>
            {t("backToTop")}
          </button>
        </p>
      </div>
    </footer>
  );
}
