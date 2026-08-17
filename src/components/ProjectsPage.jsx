import { useMemo, useState } from "react";
import { ArrowLeft, ArrowUpRight, Filter, Search } from "lucide-react";
import { projects, projectCategories } from "../data";

export default function ProjectsPage() {
  const [category, setCategory] = useState("all");
  const [query, setQuery] = useState("");
  const filteredProjects = useMemo(() => projects
    .filter((project) => category === "all" || project.category === category)
    .filter((project) => `${project.title} ${project.shortDescription} ${project.description}`.toLowerCase().includes(query.toLowerCase()))
    .sort((a, b) => a.priority - b.priority), [category, query]);

  return (
    <main className="archive-page">
      <header className="case-header"><div className="case-shell"><a className="case-back" href="/portfolio/"><ArrowLeft size={17} /> Home</a><a className="signal-mark" href="/portfolio/" aria-label="Laith Alskaf home"><span>LA</span><i>/</i></a></div></header>
      <section className="archive-hero"><div className="case-shell"><p className="section-eyebrow"><span>Archive</span>Complete record</p><h1>More systems.<br /><em>More contexts.</em></h1><p>Commercial, independent, educational and open-source work across mobile, web, backend, AI and operational software.</p></div></section>
      <section className="archive-controls"><div className="case-shell"><div className="archive-search"><Search size={17} /><label htmlFor="project-search">Search the project archive</label><input id="project-search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search projects, technologies or domains" /></div><div className="archive-filters" aria-label="Filter projects"><span><Filter size={15} /> Filter</span><button type="button" onClick={() => setCategory("all")} className={category === "all" ? "is-active" : ""}>All <small>{projects.length}</small></button>{projectCategories.map((item) => { const count = projects.filter((project) => project.category === item.id).length; if (!count) return null; return <button type="button" key={item.id} onClick={() => setCategory(item.id)} className={category === item.id ? "is-active" : ""}>{item.label} <small>{count}</small></button>; })}</div></div></section>
      <section className="archive-grid-section"><div className="case-shell"><p className="archive-count">{filteredProjects.length} {filteredProjects.length === 1 ? "system" : "systems"} found</p><div className="archive-grid">{filteredProjects.map((project, index) => <article className="archive-card" key={project.id}><a href={`/portfolio/project/${project.id}`} className="archive-card__image" aria-label={`Open ${project.title} case study`}><b aria-hidden="true">{project.title.slice(0, 2).toUpperCase()}</b><img src={project.images?.thumbnail} alt={`${project.title} project interface`} loading={index > 5 ? "lazy" : "eager"} onError={(event) => { event.currentTarget.style.display = "none"; }} /><span>0{index + 1}</span><i><ArrowUpRight size={18} /></i></a><div><p>{project.category?.replace("-", " ")} <span>·</span> {project.projectDetails?.type || "Project"}</p><h2>{project.title}</h2><p className="archive-card__description">{project.shortDescription}</p><div className="archive-card__tags">{project.technologies?.slice(0, 3).map((technology) => <span key={technology.name}>{technology.name}</span>)}</div></div></article>)}</div>{filteredProjects.length === 0 && <div className="archive-empty"><h2>No systems matched that search.</h2><button type="button" onClick={() => { setCategory("all"); setQuery(""); }}>Reset archive</button></div>}</div></section>
      <footer className="signal-footer"><div className="case-shell"><p>© {new Date().getFullYear()} Laith Alskaf. Engineered with intent.</p><a href="/portfolio/#contact">Start a conversation <ArrowUpRight size={14} /></a></div></footer>
    </main>
  );
}
