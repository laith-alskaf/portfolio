import { usePrefs } from "../lib/prefs.jsx";
import { person } from "../content/profile.js";
import { projects, liveProjects } from "../content/projects.js";
import { yearsSince } from "../lib/format.js";
import { projectHref } from "../lib/router.js";
import { ArrowIcon, DownloadIcon, ExternalIcon } from "./Icons.jsx";

export default function Hero({ onNav }) {
  const { t, isEngineer, setMode, pick } = usePrefs();
  const k = isEngineer ? "Engineer" : "Everyone";

  const stats = [
    [`${yearsSince(person.startYear)}+`, t("statYears")],
    [String(projects.length), t("statProjects")],
    [String(liveProjects.length), t("statLive")],
    ["2", t("statLangs")],
  ];

  return (
    <section id="top" className="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="kicker">{t(`heroKicker${k}`)}</p>
          <h1 className="display">{t(`heroTitle${k}`)}</h1>
          <p className="lead">{t(`heroSub${k}`)}</p>

          <div className="cta-row">
            <button type="button" className="btn btn-primary" onClick={() => onNav("work")}>
              {t("ctaWork")} <ArrowIcon />
            </button>
            <button type="button" className="btn btn-ghost" onClick={() => onNav("contact")}>
              {t("ctaContact")}
            </button>
            <a className="btn btn-text" href={person.cv.url} target="_blank" rel="noopener noreferrer">
              <DownloadIcon /> {t("ctaCv")}
            </a>
          </div>

          <aside className="mode-note" aria-live="polite">
            <p>{t(`heroNote${k}`)}</p>
            <button type="button" className="link-btn" onClick={() => setMode(isEngineer ? "everyone" : "engineer")}>
              {isEngineer ? t("heroSwitchEveryone") : t("heroSwitchEngineer")} <ArrowIcon />
            </button>
          </aside>
        </div>

        <figure className="portrait">
          <div className="portrait-frame">
            <img src={person.photo} alt="Laith Alskaf" width="560" height="560" decoding="async" />
          </div>
          <figcaption>
            <strong>Laith Alskaf</strong>
            <span className="mono">Damascus · 33.51°N 36.28°E</span>
          </figcaption>
        </figure>
      </div>

      <div className="container">
        <dl className="stats">
          {stats.map(([value, label]) => (
            <div key={label} className="stat">
              <dt>{label}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="container live" aria-labelledby="live-title">
        <div className="live-head">
          <h2 id="live-title" className="h3">
            {t("liveTitle")}
          </h2>
          <p className="muted">{t("liveSub")}</p>
        </div>
        <ul className="live-list">
          {liveProjects.map((p) => {
            const text = pick(p.text);
            const href = p.links.live || p.links.store;
            return (
              <li key={p.id}>
                <a className="live-card" href={href} target="_blank" rel="noopener noreferrer">
                  <span className="live-dot" aria-hidden="true" />
                  <span className="live-main">
                    <strong>{text.name}</strong>
                    <span className="live-sub">{isEngineer ? p.stack.slice(0, 3).join(" · ") : text.tagline}</span>
                  </span>
                  <span className="live-kind">
                    {p.links.store ? t("liveStore") : t("liveWeb")} <ExternalIcon />
                  </span>
                </a>
                <a className="live-story" href={projectHref(p.id)}>
                  {t("openCase")}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
