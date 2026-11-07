import { usePrefs } from "../lib/prefs.jsx";
import { offers, process } from "../content/profile.js";
import { getProject } from "../content/projects.js";
import { projectHref } from "../lib/router.js";

export default function Offers() {
  const { t, pick, isEngineer } = usePrefs();

  return (
    <>
      <section id="offer" className="section section-tint">
        <div className="container">
          <header className="section-head">
            <p className="kicker">{t("offerKicker")}</p>
            <h2 className="display h2">{t("offerTitle")}</h2>
            <p className="lead">{isEngineer ? t("offerIntroEngineer") : t("offerIntroEveryone")}</p>
          </header>

          <ul className="offer-grid">
            {offers.map((o, i) => (
              <li key={o.id} className="offer">
                <span className="offer-num mono" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="h3">{pick(o.title)}</h3>
                <p dir={isEngineer ? "auto" : undefined}>{pick(isEngineer ? o.tech : o.plain)}</p>
                <div className="proof">
                  <span className="proof-label">{t("offerProof")}</span>
                  <ul>
                    {o.proof.map((slug) => {
                      const p = getProject(slug);
                      if (!p) return null;
                      return (
                        <li key={slug}>
                          <a href={projectHref(slug)}>{pick(p.text).name}</a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="process" className="section">
        <div className="container">
          <header className="section-head">
            <p className="kicker">{t("processKicker")}</p>
            <h2 className="display h2">{t("processTitle")}</h2>
          </header>
          <ol className="steps">
            {process.map((s, i) => (
              <li key={s.id} className="step">
                <span className="step-num mono" aria-hidden="true">
                  {i + 1}
                </span>
                <h3 className="h4">{pick(s.title)}</h3>
                <p>{pick(isEngineer ? s.tech : s.plain)}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
