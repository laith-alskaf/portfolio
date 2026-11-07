import { usePrefs } from "../lib/prefs.jsx";
import { certificates, education, journey } from "../content/profile.js";
import { formatPeriod } from "../lib/format.js";
import { ExternalIcon } from "./Icons.jsx";

export default function Journey() {
  const { t, lang, pick } = usePrefs();

  return (
    <section id="journey" className="section section-tint">
      <div className="container">
        <header className="section-head">
          <p className="kicker">{t("journeyKicker")}</p>
          <h2 className="display h2">{t("journeyTitle")}</h2>
          <p className="lead">{t("journeyIntro")}</p>
        </header>

        <div className="journey-grid">
          <ol className="timeline">
            {journey.map((j) => (
              <li key={j.id} className="tl-item">
                <div className="tl-when mono">
                  {formatPeriod(j.start, j.end, lang, t("nowTag"))}
                  <span className="tl-mode">{pick(j.mode)}</span>
                </div>
                <h3 className="h4">
                  {pick(j.role)} <span className="tl-org">· {j.org}</span>
                </h3>
                <p>{pick(j.text)}</p>
              </li>
            ))}
          </ol>

          <div className="side-stack">
            <section className="panel">
              <h3 className="h4">{t("educationTitle")}</h3>
              <p className="panel-main">{pick(education.degree)}</p>
              <p className="muted">{pick(education.school)}</p>
              <p className="mono small">{education.years}</p>
            </section>

            <section className="panel">
              <h3 className="h4">{t("certsTitle")}</h3>
              <ul className="certs">
                {certificates.map((c) => (
                  <li key={c.id}>
                    <a href={c.image} target="_blank" rel="noopener noreferrer" className="cert">
                      <img src={c.image} alt="" loading="lazy" decoding="async" />
                      <span>
                        <strong>{pick(c.title)}</strong>
                        <small>
                          {c.issuer} · <span className="mono">{c.year}</span>
                        </small>
                      </span>
                      <ExternalIcon />
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}
