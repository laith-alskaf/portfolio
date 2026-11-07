import { usePrefs } from "../lib/prefs.jsx";
import { kindKey, projectYear } from "../content/projects.js";
import { projectHref } from "../lib/router.js";
import Cover from "./Cover.jsx";
import { ArrowIcon } from "./Icons.jsx";

export default function ProjectCard({ project }) {
  const { t, pick, isEngineer } = usePrefs();
  const text = pick(project.text);

  return (
    <a className="card" href={projectHref(project.id)}>
      <Cover project={project} />
      <div className="card-body">
        <div className="card-meta">
          <span>{t(kindKey[project.kind])}</span>
          <span className="mono">{projectYear(project)}</span>
        </div>
        <h3 className="card-title">{text.name}</h3>
        <p className="card-text">{text.tagline}</p>

        {isEngineer && (
          <ul className="chips" aria-label="Stack">
            {project.stack.slice(0, 4).map((s) => (
              <li key={s} dir="ltr">
                {s}
              </li>
            ))}
          </ul>
        )}

        <div className="card-foot">
          <span className="badges">
            {project.links.live && <span className="badge badge-live">{t("badgeLive")}</span>}
            {project.links.store && <span className="badge badge-live">{t("badgeStore")}</span>}
            {project.links.github && <span className="badge">{t("badgeCode")}</span>}
          </span>
          <span className="more">
            {t("openCase")} <ArrowIcon />
          </span>
        </div>
      </div>
    </a>
  );
}
