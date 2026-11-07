import { useMemo, useState } from "react";
import { usePrefs } from "../lib/prefs.jsx";
import { projects, kinds, kindKey } from "../content/projects.js";
import ProjectCard from "./ProjectCard.jsx";

export default function Work() {
  const { t, isEngineer } = usePrefs();
  const [kind, setKind] = useState("all");

  const shown = useMemo(() => (kind === "all" ? projects : projects.filter((p) => p.kind === kind)), [kind]);
  const present = kinds.filter((k) => projects.some((p) => p.kind === k));

  return (
    <section id="work" className="section">
      <div className="container">
        <header className="section-head">
          <p className="kicker">{t("workKicker")}</p>
          <h2 className="display h2">{isEngineer ? t("workTitleEngineer") : t("workTitleEveryone")}</h2>
          <p className="lead">{isEngineer ? t("workIntroEngineer") : t("workIntroEveryone")}</p>
        </header>

        <div className="filters" role="group" aria-label={t("navWork")}>
          {["all", ...present].map((k) => (
            <button key={k} type="button" className="chip-btn" aria-pressed={kind === k} onClick={() => setKind(k)}>
              {k === "all" ? t("filterAll") : t(kindKey[k])}
            </button>
          ))}
          <span className="filter-count mono" aria-live="polite">
            {shown.length} {t("showingCount")}
          </span>
        </div>

        <ul className="card-grid">
          {shown.map((p) => (
            <li key={p.id}>
              <ProjectCard project={p} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
