import { useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDownRight,
  ArrowUpRight,
  Award,
  Check,
  ChevronDown,
  Download,
  GraduationCap,
  Github,
  Linkedin,
  Mail,
  Menu,
  X,
} from "lucide-react";
import { personalInfo, projects, experiences, education, certificates } from "../data";
import SignalField from "./SignalField";

const navigation = [
  { id: "work", label: "Selected work" },
  { id: "profile", label: "Engineering profile" },
  { id: "experience", label: "Build log" },
  { id: "credentials", label: "Credentials" },
  { id: "contact", label: "Contact" },
];

const selectedProjectIds = [12, 14, 1, 13];

const focusAreas = [
  {
    index: "01",
    title: "Product systems",
    text: "From local community platforms and personal finance tools to booking flows that work for real people and operators.",
    tags: ["Flutter", "RTL / l10n", "UX systems"],
  },
  {
    index: "02",
    title: "Resilient architecture",
    text: "Clean, offline-first and role-aware foundations that make complex applications understandable and maintainable.",
    tags: ["Clean Architecture", "BLoC", "Offline-first"],
  },
  {
    index: "03",
    title: "Connected services",
    text: "APIs, real-time events, AI models, maps, notifications and integrations brought together with a clear product purpose.",
    tags: ["Node.js", "Supabase", "AI / NLP"],
  },
  {
    index: "04",
    title: "Delivery operations",
    text: "The work continues beyond the interface: CI/CD, signed releases, VPS delivery, monitoring and production-ready handover.",
    tags: ["GitHub Actions", "VPS", "PM2"],
  },
];

function SectionEyebrow({ index, children }) {
  return (
    <p className="section-eyebrow">
      <span>{index}</span>
      {children}
    </p>
  );
}

function ProjectModule({ project, index }) {
  const reduceMotion = useReducedMotion();
  const category = project.category?.replace("-", " ") || "system";
  const topTechnologies = project.technologies?.slice(0, 4) || [];
  const role = project.projectDetails?.team?.role || "Software Engineer";
  const images = project.images?.gallery || [];

  return (
    <motion.article
      className="project-module"
      initial={reduceMotion ? false : { opacity: 0, y: 30 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.55, delay: index * 0.06, ease: [0.23, 1, 0.32, 1] }}
    >
      <a className="project-module__media" href={`/portfolio/project/${project.id}`} aria-label={`Open ${project.title} case study`}>
        <span className="project-module__number">0{index + 1}</span>
        <div className="project-module__screen project-module__screen--back">
          {images[1] && <img src={images[1]} alt="" loading="lazy" />}
        </div>
        <div className="project-module__screen project-module__screen--main">
          <img src={project.images?.thumbnail} alt={`${project.title} project interface`} loading={index > 0 ? "lazy" : "eager"} />
        </div>
        <span className="project-module__open"><ArrowUpRight size={19} /></span>
      </a>
      <div className="project-module__body">
        <div className="project-module__meta">
          <span>{category}</span>
          <span>{project.projectDetails?.type || "Product build"}</span>
        </div>
        <h3>{project.title}</h3>
        <p className="project-module__summary">{project.shortDescription}</p>
        <p className="project-module__role"><span>Role</span>{role}</p>
        <ul className="project-module__signals">
          {(project.features || []).slice(0, 3).map((feature) => <li key={feature}><Check size={14} />{feature}</li>)}
        </ul>
        <div className="project-module__footer">
          <div className="project-module__stack" aria-label="Core technologies">
            {topTechnologies.map((technology) => <span key={technology.name}>{technology.name}</span>)}
          </div>
          <a href={`/portfolio/project/${project.id}`} className="text-link">Read case study <ArrowDownRight size={17} /></a>
        </div>
      </div>
    </motion.article>
  );
}

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const reduceMotion = useReducedMotion();
  const selectedProjects = useMemo(
    () => selectedProjectIds.map((id) => projects.find((project) => project.id === id)).filter(Boolean),
    []
  );
  const emailLink = `mailto:${personalInfo.contact.email}?subject=Product%20engineering%20conversation`;

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="signal-page">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <header className="signal-header">
        <a href="#top" className="signal-mark" aria-label="Laith Alskaf home" onClick={closeMenu}>
          <span>LA</span><i>/</i>
        </a>
        <nav className="signal-nav" aria-label="Primary navigation">
          {navigation.map((item) => <a key={item.id} href={`#${item.id}`}>{item.label}</a>)}
        </nav>
        <div className="signal-header__actions">
          <a className="header-contact" href={emailLink}>Start a conversation <ArrowUpRight size={15} /></a>
          <button className="menu-toggle" type="button" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
        {menuOpen && (
          <nav className="signal-mobile-nav" aria-label="Mobile navigation">
            {navigation.map((item) => <a key={item.id} href={`#${item.id}`} onClick={closeMenu}>{item.label}</a>)}
            <a href={personalInfo.cv.url} target="_blank" rel="noreferrer" onClick={closeMenu}>Download CV <Download size={16} /></a>
          </nav>
        )}
      </header>

      <div id="top" className="signal-hero" role="banner">
        <div className="signal-shell signal-hero__layout">
          <motion.div
            className="signal-hero__content"
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.23, 1, 0.32, 1] }}
          >
            <p className="availability"><i /> Cross-platform & backend product engineer</p>
            <h1>Building the <em>systems</em><br />behind useful products.</h1>
            <p className="signal-hero__lede">Laith Alskaf designs and ships reliable digital products across mobile, web and backend—turning operational complexity into clear, production-ready experiences.</p>
            <div className="signal-hero__cta">
              <a className="button button--signal" href="#work">Explore selected work <ArrowDownRight size={18} /></a>
              <a className="button button--quiet" href={personalInfo.cv.url} target="_blank" rel="noreferrer"><Download size={17} /> Download CV</a>
            </div>
            <div className="signal-hero__facts" aria-label="Professional highlights">
              <div><strong>4<span>+</span></strong><p>years building<br />production products</p></div>
              <div><strong>{projects.length}<span>+</span></strong><p>documented systems<br />and case studies</p></div>
              <div><strong>AR<span>/</span>EN</strong><p>bilingual product<br />delivery experience</p></div>
            </div>
          </motion.div>
          <SignalField />
        </div>
        <a className="hero-scroll" href="#work" aria-label="Scroll to selected work"><span>Scroll to signal</span><ChevronDown size={17} /></a>
      </div>

      <section id="main-content" className="proof-strip" aria-label="Engineering scope">
        <div className="signal-shell proof-strip__inner">
          <p>Built for the places where product, operations and delivery meet.</p>
          <div><span>Mobile</span><span>Enterprise systems</span><span>AI workflows</span><span>Deployment</span></div>
        </div>
      </section>

      <section id="work" className="signal-section signal-section--work">
        <div className="signal-shell">
          <div className="section-heading section-heading--split">
            <div>
              <SectionEyebrow index="01">Selected systems</SectionEyebrow>
              <h2>Work with real<br /><em>operational weight.</em></h2>
            </div>
            <p>Each system below is presented as evidence of a delivery decision: the user need, the engineering constraint and the product outcome.</p>
          </div>
          <div className="project-modules">
            {selectedProjects.map((project, index) => <ProjectModule key={project.id} project={project} index={index} />)}
          </div>
          <div className="archive-cta">
            <div><span className="archive-cta__index">{projects.length}+</span><p>More systems across operations, education, e-commerce, health and automation.</p></div>
            <a className="button button--outline" href="/portfolio/projects">Open project archive <ArrowUpRight size={18} /></a>
          </div>
        </div>
      </section>

      <section id="profile" className="signal-section signal-section--profile">
        <div className="signal-shell">
          <div className="section-heading">
            <SectionEyebrow index="02">Engineering profile</SectionEyebrow>
            <h2>Designed for the<br /><em>whole delivery loop.</em></h2>
          </div>
          <div className="focus-grid">
            {focusAreas.map((area, index) => (
              <motion.article
                key={area.index}
                className="focus-card"
                initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
              >
                <span className="focus-card__index">{area.index}</span>
                <h3>{area.title}</h3>
                <p>{area.text}</p>
                <div>{area.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="signal-section signal-section--experience">
        <div className="signal-shell experience-layout">
          <div className="section-heading">
            <SectionEyebrow index="03">Build log</SectionEyebrow>
            <h2>Growth through<br /><em>shipped work.</em></h2>
            <p className="section-heading__sidecopy">From training projects to enterprise transport and independent product work, every role adds another layer of product responsibility.</p>
          </div>
          <ol className="experience-log">
            {experiences.map((experience, index) => (
              <li key={experience.id} className={experience.current ? "is-current" : ""}>
                <span className="experience-log__point" />
                <div className="experience-log__date">{experience.duration}</div>
                <article>
                  <div className="experience-log__title"><h3>{experience.position}</h3><span>{experience.type}</span></div>
                  <p className="experience-log__company">{experience.company}</p>
                  <p>{experience.description}</p>
                  <div className="experience-log__tags">{experience.technologies.slice(0, 5).map((technology) => <span key={technology}>{technology}</span>)}</div>
                </article>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="credentials" className="signal-section signal-section--credentials">
        <div className="signal-shell">
          <div className="section-heading section-heading--credentials">
            <div>
              <SectionEyebrow index="04">Academic foundation</SectionEyebrow>
              <h2>Learning that turns into<br /><em>delivery discipline.</em></h2>
            </div>
            <p>Formal software engineering education, reinforced by focused Flutter development training and professional recommendations.</p>
          </div>
          <div className="credentials-layout">
            <div className="education-records">
              {education.map((item) => (
                <article className="education-record" key={`${item.degree}-${item.year}`}>
                  <div className="education-record__icon"><GraduationCap size={23} /></div>
                  <div className="education-record__meta"><span>{item.status}</span><span>{item.year}</span></div>
                  <h3>{item.degree}</h3>
                  <p className="education-record__institution">{item.institution}</p>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
            <div className="certificate-list">
              {certificates.map((certificate, index) => (
                <motion.article
                  key={certificate.id}
                  className="certificate-card"
                  initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                  whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.24 }}
                  transition={{ duration: 0.42, delay: index * 0.08 }}
                >
                  <a className="certificate-card__image" href={certificate.image} target="_blank" rel="noreferrer" aria-label={`Open ${certificate.title} credential`}>
                    <img src={certificate.image} alt={`${certificate.title} credential`} loading="lazy" />
                    <span>{certificate.year}</span>
                    <i><ArrowUpRight size={17} /></i>
                  </a>
                  <div className="certificate-card__body">
                    <p className="certificate-card__category"><Award size={14} /> {certificate.category}</p>
                    <h3>{certificate.title}</h3>
                    <p className="certificate-card__issuer">{certificate.issuer}</p>
                    <p className="certificate-card__description">{certificate.description}</p>
                    <div className="certificate-card__footer"><span>Reference: {certificate.credential}</span><a href={certificate.image} target="_blank" rel="noreferrer">View credential <ArrowUpRight size={14} /></a></div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="signal-contact">
        <div className="signal-shell signal-contact__inner">
          <div>
            <SectionEyebrow index="05">Contact terminal</SectionEyebrow>
            <h2>Have a system<br />worth <em>building?</em></h2>
            <p>For product opportunities, technical collaboration or a conversation about the next meaningful build, start with a direct message.</p>
          </div>
          <div className="contact-panel">
            <a href={emailLink} className="contact-panel__email">{personalInfo.contact.email}<ArrowUpRight size={21} /></a>
            <div className="contact-panel__links">
              <a href={personalInfo.social.linkedin} target="_blank" rel="noreferrer"><Linkedin size={18} /> LinkedIn</a>
              <a href={personalInfo.social.github} target="_blank" rel="noreferrer"><Github size={18} /> GitHub</a>
              <a href={personalInfo.cv.url} target="_blank" rel="noreferrer"><Download size={18} /> Curriculum vitae</a>
              <a href={`https://wa.me/${personalInfo.contact.phone.replace("+", "")}`} target="_blank" rel="noreferrer"><Mail size={18} /> WhatsApp</a>
            </div>
          </div>
        </div>
      </section>

      <footer className="signal-footer">
        <div className="signal-shell"><p>© {new Date().getFullYear()} Laith Alskaf. Engineered with intent.</p><a href="#top">Back to top <ArrowUpRight size={14} /></a></div>
      </footer>
    </main>
  );
}
