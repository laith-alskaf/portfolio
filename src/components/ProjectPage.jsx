import { usePrefs } from "../lib/prefs.jsx";
import { getNeighbours, getProject, kindKey } from "../content/projects.js";
import { formatPeriod } from "../lib/format.js";
import { HOME_HREF, projectHref } from "../lib/router.js";
import Cover from "./Cover.jsx";
import { ArrowIcon, BackIcon, CodeIcon, ExternalIcon, GlobeIcon, PlayIcon } from "./Icons.jsx";

function Story({ label, children }) {
  return (
    <section className="story-block">
      <h2 className="h4">{label}</h2>
      <p>{children}</p>
    </section>
  );
}

export default function ProjectPage({ slug }) {
  const { t, lang, pick, isEngineer, setMode } = usePrefs();
  const project = getProject(slug);

  if (!project) {
    return (
      <section className="section">
        <div className="container narrow">
          <p className="lead">{t("projectMissing")}</p>
          <a className="btn btn-primary" href={HOME_HREF}>
            <BackIcon /> {t("backHome")}
          </a>
        </div>
      </section>
    );
  }

  const text = pick(project.text);
  const { prev, next } = getNeighbours(slug);
  const period = formatPeriod(project.start, project.end, lang, t("presentTag"));
  const team = project.team > 1 ? `${t("teamTag")} ${project.team}` : t("soloTag");
  const links = project.links;

  return (
    <article className="section project-page">
      <div className="container">
        <a className="back-link" href={HOME_HREF}>
          <BackIcon /> {t("back")}
        </a>

        <header className="project-head">
          <div>
            <p className="kicker">{t(kindKey[project.kind])}</p>
            <h1 className="display">{text.name}</h1>
            <p className="lead">{text.tagline}</p>

            <div className="cta-row">
              {links.live && (
                <a className="btn btn-primary" href={links.live} target="_blank" rel="noopener noreferrer">
                  <GlobeIcon /> {t("linkLive")} <ExternalIcon />
                </a>
              )}
              {links.store && (
                <a className="btn btn-primary" href={links.store} target="_blank" rel="noopener noreferrer">
                  <GlobeIcon /> {t("linkStore")} <ExternalIcon />
                </a>
              )}
              {links.demo && (
                <a className="btn btn-ghost" href={links.demo} target="_blank" rel="noopener noreferrer">
                  <PlayIcon /> {t("linkDemo")}
                </a>
              )}
              {links.github && (
                <a className="btn btn-ghost" href={links.github} target="_blank" rel="noopener noreferrer">
                  <CodeIcon /> {t("linkCode")}
                </a>
              )}
            </div>
          </div>
          <Cover project={project} size="hero" />
        </header>

        <dl className="facts">
          <div>
            <dt>{t("period")}</dt>
            <dd className="mono">{period}</dd>
          </div>
          <div>
            <dt>{t("teamLabel")}</dt>
            <dd>{team}</dd>
          </div>
          <div>
            <dt>{t("secRole")}</dt>
            <dd>{text.role}</dd>
          </div>
        </dl>

        <div className="project-body">
          <div className="story">
            <Story label={t("secWho")}>{text.who}</Story>
            <Story label={t("secProblem")}>{text.problem}</Story>
            <Story label={t("secBuilt")}>{text.built}</Story>
            <Story label={t("secResult")}>{text.result}</Story>
          </div>

          <aside className="tech">
            {isEngineer ? (
              <>
                <section>
                  <h2 className="h4">{t("secStack")}</h2>
                  <ul className="chips">
                    {project.stack.map((s) => (
                      <li key={s} dir="ltr">
                        {s}
                      </li>
                    ))}
                  </ul>
                </section>
                <section>
                  <h2 className="h4">{t("secDecisions")}</h2>
                  <ul className="notes">
                    {text.notes.map((n, i) => (
                      <li key={i}>{n}</li>
                    ))}
                  </ul>
                </section>
                <details className="features">
                  <summary>{t("secFeatures")}</summary>
                  <p className="muted small">{t("featuresNote")}</p>
                  <ul dir="ltr" lang="en">
                    {project.features.map((f) => (
                      <li key={f}>{f}</li>
                    ))}
                  </ul>
                </details>
              </>
            ) : (
              <section className="switch-card">
                <p>{t("engineerHint")}</p>
                <button type="button" className="btn btn-ghost" onClick={() => setMode("engineer")}>
                  {t("heroSwitchEngineer")} <ArrowIcon />
                </button>
              </section>
            )}
          </aside>
        </div>

        {project.gallery.length > 1 && (
          <section className="gallery" aria-labelledby="gallery-title">
            <h2 id="gallery-title" className="h4">
              {t("secGallery")}
            </h2>
            <ul className="gallery-row">
              {project.gallery.map((src, i) => (
                <li key={src}>
                  <a href={src} target="_blank" rel="noopener noreferrer">
                    <img src={src} alt={`${text.name} — ${i + 1}`} loading="lazy" decoding="async" />
                  </a>
                </li>
              ))}
            </ul>
          </section>
        )}

        <nav className="pager" aria-label="Projects">
          {prev ? (
            <a href={projectHref(prev.id)} className="pager-link">
              <small>{t("prev")}</small>
              <strong>{pick(prev.text).name}</strong>
            </a>
          ) : (
            <span />
          )}
          {next ? (
            <a href={projectHref(next.id)} className="pager-link pager-next">
              <small>{t("next")}</small>
              <strong>{pick(next.text).name}</strong>
            </a>
          ) : (
            <span />
          )}
        </nav>
      </div>
    </article>
  );
}
