import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, Check, ChevronLeft, ChevronRight, ExternalLink, Github, FolderOpen, Layers, Users } from "lucide-react";
import { projects } from "../data";

function ProjectNotFound() {
  return (
    <main className="case-page case-page--empty">
      <div className="case-shell"><p className="section-eyebrow"><span>404</span>Project record</p><h1>Project not found.</h1><a className="button button--signal" href="/portfolio/projects">Open project archive <ArrowUpRight size={17} /></a></div>
    </main>
  );
}

export default function ProjectDetailPage() {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const reduceMotion = useReducedMotion();
  const [selectedImage, setSelectedImage] = useState(0);
  const project = projects.find((item) => item.id === Number(projectId));

  if (!project) return <ProjectNotFound />;

  const gallery = project.images?.gallery?.filter(Boolean) || [];
  const details = project.projectDetails || {};
  const duration = details.duration || {};
  const technologies = project.technologies || [];

  const moveGallery = (direction) => {
    if (gallery.length < 2) return;
    setSelectedImage((current) => (current + direction + gallery.length) % gallery.length);
  };

  return (
    <main className="case-page">
      <header className="case-header">
        <div className="case-shell">
          <button className="case-back" type="button" onClick={() => navigate(-1)}><ArrowLeft size={17} /> Back</button>
          <a className="signal-mark" href="/portfolio/" aria-label="Laith Alskaf home"><span>LA</span><i>/</i></a>
        </div>
      </header>

      <section className="case-hero">
        <div className="case-shell">
          <motion.div initial={reduceMotion ? false : { opacity: 0, y: 22 }} animate={reduceMotion ? undefined : { opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
            <div className="case-kicker"><span>{project.category?.replace("-", " ")}</span><span>{details.type || "Product build"}</span><span>{project.status}</span></div>
            <h1>{project.title}</h1>
            <p className="case-hero__summary">{project.shortDescription}</p>
            <div className="case-hero__facts">
              <div><span>Role</span><strong>{details.team?.role || "Software Engineer"}</strong></div>
              <div><span>Team</span><strong>{details.team?.size || 1} {details.team?.size === 1 ? "person" : "people"}</strong></div>
              <div><span>Timeline</span><strong>{duration.start || "—"} → {duration.end || "—"}</strong></div>
              <div><span>Client</span><strong>{details.client || details.company || "Product team"}</strong></div>
            </div>
            <div className="case-actions">
              {project.links?.liveDemo && <a className="button button--signal" href={project.links.liveDemo} target="_blank" rel="noreferrer">Live experience <ExternalLink size={17} /></a>}
              {project.links?.github && <a className="button button--quiet" href={project.links.github} target="_blank" rel="noreferrer"><Github size={17} /> View code</a>}
              {project.links?.drive && <a className="button button--quiet" href={project.links.drive} target="_blank" rel="noreferrer"><FolderOpen size={17} /> Supporting files</a>}
            </div>
          </motion.div>
        </div>
      </section>

      {gallery.length > 0 && (
        <section className="case-gallery">
          <div className="case-shell">
            <div className="case-gallery__main">
              <img src={gallery[selectedImage]} alt={`${project.title} screen ${selectedImage + 1}`} />
              {gallery.length > 1 && <><button type="button" onClick={() => moveGallery(-1)} aria-label="Previous project screen"><ChevronLeft size={22} /></button><button type="button" onClick={() => moveGallery(1)} aria-label="Next project screen"><ChevronRight size={22} /></button></>}
              <span>{String(selectedImage + 1).padStart(2, "0")} / {String(gallery.length).padStart(2, "0")}</span>
            </div>
            {gallery.length > 1 && <div className="case-gallery__thumbs">{gallery.map((image, index) => <button key={image} type="button" className={index === selectedImage ? "is-selected" : ""} onClick={() => setSelectedImage(index)} aria-label={`Show project screen ${index + 1}`}><img src={image} alt="" /></button>)}</div>}
          </div>
        </section>
      )}

      <section className="case-content">
        <div className="case-shell case-content__grid">
          <div className="case-content__intro">
            <p className="section-eyebrow"><span>System brief</span>Context and outcome</p>
            <p>{project.description?.replaceAll("○", "").trim()}</p>
          </div>
          <div className="case-content__cards">
            <article>
              <p><Layers size={17} /> Engineering challenges</p>
              <ul>{(project.challenges || []).map((challenge) => <li key={challenge}>{challenge}</li>)}</ul>
            </article>
            <article>
              <p><Users size={17} /> What the system delivers</p>
              <ul>{(project.features || []).slice(0, 7).map((feature) => <li key={feature}><Check size={14} />{feature}</li>)}</ul>
            </article>
          </div>
        </div>
      </section>

      <section className="case-stack">
        <div className="case-shell">
          <p className="section-eyebrow"><span>Architecture</span>Selected stack</p>
          <div>{technologies.map((technology) => <article key={technology.name}><span>{technology.category}</span><h3>{technology.name}</h3><p>{technology.level}</p></article>)}</div>
        </div>
      </section>

      {project.lessons?.length > 0 && <section className="case-learning"><div className="case-shell"><p className="section-eyebrow"><span>Learnings</span>What this build added</p><div>{project.lessons.map((lesson, index) => <p key={lesson}><span>0{index + 1}</span>{lesson}</p>)}</div></div></section>}

      <footer className="signal-footer"><div className="case-shell"><p>© {new Date().getFullYear()} Laith Alskaf. Engineered with intent.</p><a href="/portfolio/projects">More systems <ArrowUpRight size={14} /></a></div></footer>
    </main>
  );
}
