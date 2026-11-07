import { usePrefs } from "../lib/prefs.jsx";

// A project's cover: the real screenshot when there is one, otherwise a typographic cover built from its name.
export default function Cover({ project, size = "card" }) {
  const { pick } = usePrefs();
  const name = pick(project.text).name || project.id;
  const initial = Array.from(name.trim())[0] || "•";

  if (project.cover) {
    return (
      <div className={`cover cover--${size}`}>
        <img src={project.cover} alt="" loading="lazy" decoding="async" />
      </div>
    );
  }
  return (
    <div className={`cover cover--${size} cover--art cover--${project.kind}`} aria-hidden="true">
      <span className="cover-initial">{initial}</span>
    </div>
  );
}
