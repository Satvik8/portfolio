import React, { useEffect, useMemo, useState } from "react";
import "./styles.css";
import { projects, skillGroups, skills } from "./Data/data.js";
import ParticleField from "./components/ParticleField";
import {
  useActiveSection,
  useCountUp,
  useReveal,
  useScrollProgress,
  useTypewriter,
} from "./hooks";

const NAV_ITEMS = ["About", "Skills", "Projects", "Contact"];
const SECTION_IDS = ["home", "about", "skills", "projects", "contact"];
const WEB3_PATTERN = /web3|wagmi|viem|ethers|blockchain/i;

const isWeb3 = (project) =>
  project.technologies.some((tech) => WEB3_PATTERN.test(tech));

// Drops empty and duplicate URLs.
const validLinks = (project) =>
  (project.links || []).filter(
    (link, i, all) =>
      link.url &&
      link.url.trim() !== "" &&
      all.findIndex((other) => other.url === link.url) === i
  );

const hostname = (url) => {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
};

const Icon = ({ name }) => {
  const paths = {
    arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
    external: (
      <>
        <path d="M14 4h6v6" />
        <path d="M10 14 20 4" />
        <path d="M20 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h5" />
      </>
    ),
    download: (
      <>
        <path d="M12 4v11" />
        <path d="m7 10 5 5 5-5" />
        <path d="M5 20h14" />
      </>
    ),
    close: <path d="M6 6l12 12M18 6 6 18" />,
    send: <path d="m4 12 16-8-6 16-2-7-8-1Z" />,
    up: <path d="M12 19V5M6 11l6-6 6 6" />,
    check: <path d="m5 12 5 5 9-10" />,
  };
  return (
    <svg
      className="icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
};

const downloadResume = () => {
  const a = document.createElement("a");
  a.href = "/resume.pdf";
  a.download = "Satvik_Resume.pdf";
  a.style.display = "none";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
};

// Card that tracks the cursor with a soft radial highlight.
const SpotlightCard = ({ className = "", children, ...rest }) => {
  const onMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };
  return (
    <div className={`spotlight ${className}`} onMouseMove={onMove} {...rest}>
      {children}
    </div>
  );
};

const SectionHeading = ({ eyebrow, title }) => (
  <div className="section-heading" data-reveal>
    <span className="eyebrow">{eyebrow}</span>
    <h2>{title}</h2>
  </div>
);

const Navbar = ({ active, scrolled, progress }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("no-scroll", open);
  }, [open]);

  return (
    <header className={`navbar ${scrolled ? "is-scrolled" : ""}`}>
      <div className="scroll-progress" style={{ transform: `scaleX(${progress})` }} />
      <div className="container navbar-inner">
        <a className="brand" href="#home" onClick={() => setOpen(false)}>
          <span className="brand-mark">SG</span>
          <span className="brand-name">Satvik Gadhiya</span>
        </a>

        <nav className={`nav-links ${open ? "is-open" : ""}`}>
          {NAV_ITEMS.map((item, i) => {
            const id = item.toLowerCase();
            return (
              <a
                key={item}
                href={`#${id}`}
                className={`nav-link ${active === id ? "is-active" : ""}`}
                style={{ "--i": i }}
                onClick={() => setOpen(false)}
              >
                {item}
              </a>
            );
          })}
          <button
            type="button"
            className="btn btn-outline nav-resume"
            style={{ "--i": NAV_ITEMS.length }}
            onClick={() => {
              setOpen(false);
              downloadResume();
            }}
          >
            <Icon name="download" /> Download my Resume
          </button>
        </nav>

        <button
          type="button"
          className={`menu-toggle ${open ? "is-open" : ""}`}
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
};

const Hero = () => {
  const title = useTypewriter("Frontend Web Developer");
  const marquee = [...skills, ...skills];

  return (
    <section id="home" className="hero">
      <ParticleField />
      <div className="orb orb-a" />
      <div className="orb orb-b" />
      <div className="grid-overlay" />

      <div className="container hero-content">
        <p className="hero-greeting hero-anim" style={{ "--d": "0.1s" }}>
          <span className="wave">👋</span> Hi, I'm Satvik Gadhiya
        </p>
        <h1 className="hero-title">
          <span className="gradient-text">{title}</span>
          <span className="caret" aria-hidden="true" />
        </h1>
        <p className="hero-subtitle hero-anim" style={{ "--d": "0.5s" }}>
          Crafting seamless digital experiences with passion
        </p>
        <div className="hero-actions hero-anim" style={{ "--d": "0.7s" }}>
          <a href="#contact" className="btn btn-primary">
            Get in Touch <Icon name="arrow" />
          </a>
          <a href="#projects" className="btn btn-ghost">
            View Projects
          </a>
        </div>
      </div>

      <div className="marquee hero-anim" style={{ "--d": "0.9s" }} aria-hidden="true">
        <div className="marquee-track">
          {marquee.map((skill, i) => (
            <span key={i} className="marquee-item">
              {skill}
            </span>
          ))}
        </div>
      </div>

      <a href="#about" className="scroll-cue" aria-label="Scroll to About">
        <span />
      </a>
    </section>
  );
};

const Stat = ({ value, label, delay }) => {
  const [ref, count] = useCountUp(value);
  return (
    <SpotlightCard className="stat card" data-reveal style={{ "--d": delay }}>
      <span ref={ref} className="stat-value gradient-text">
        {count}+
      </span>
      <span className="stat-label">{label}</span>
    </SpotlightCard>
  );
};

const About = () => {
  const stats = useMemo(() => {
    const technologies = new Set(
      projects.flatMap((p) => p.technologies.map((t) => t.toLowerCase()))
    );
    return [
      { value: projects.length, label: "Projects" },
      { value: skills.length, label: "Skills" },
      { value: projects.filter(isWeb3).length, label: "Web3 Projects" },
      { value: technologies.size, label: "Technologies Used" },
    ];
  }, []);

  return (
    <section id="about" className="section">
      <div className="container">
        <SectionHeading eyebrow="01 — Introduction" title="About Me" />
        <div className="about-grid">
          <p className="about-text" data-reveal>
            Hi, I'm Satvik, a passionate frontend web developer dedicated to
            creating exceptional user experiences. With expertise in modern web
            technologies and a keen eye for design, I transform complex
            challenges into elegant, user-friendly solutions.
          </p>
          <div className="stats">
            {stats.map((stat, i) => (
              <Stat key={stat.label} {...stat} delay={`${i * 0.1}s`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Skills = () => (
  <section id="skills" className="section section-alt">
    <div className="container">
      <SectionHeading eyebrow="02 — Toolbox" title="Skills" />
      <div className="skills-grid">
        {skillGroups.map((group, i) => (
          <SpotlightCard
            key={group.title}
            className="card skill-group"
            data-reveal
            style={{ "--d": `${(i % 4) * 0.08}s` }}
          >
            <h3>{group.title}</h3>
            <div className="chips">
              {group.items.map((skill) => (
                <span key={skill} className="chip">
                  {skill}
                </span>
              ))}
            </div>
          </SpotlightCard>
        ))}
      </div>
    </div>
  </section>
);

const ProjectCard = ({ project, index, onOpen }) => {
  const links = validLinks(project);
  const shownTech = project.technologies.slice(0, 5);
  const extra = project.technologies.length - shownTech.length;

  return (
    <SpotlightCard
      className="card project-card"
      data-reveal
      style={{ "--d": `${(index % 2) * 0.1}s` }}
    >
      <div className="project-top">
        <span className="project-index">{String(index + 1).padStart(2, "0")}</span>
        {project.duration && project.duration.trim() && (
          <span className="project-duration">{project.duration.trim()}</span>
        )}
      </div>
      <h3 className="project-title">{project.title}</h3>
      {project.role && <p className="project-role">{project.role}</p>}
      <p className="project-desc">{project.description}</p>

      <div className="chips">
        {shownTech.map((tech) => (
          <span key={tech} className="chip chip-sm">
            {tech}
          </span>
        ))}
        {extra > 0 && <span className="chip chip-sm chip-muted">+{extra}</span>}
      </div>

      <div className="project-footer">
        <div className="project-links">
          {links.map((link, i) => (
            <a
              key={`${link.url}-${i}`}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-link"
            >
              {hostname(link.url)} <Icon name="external" />
            </a>
          ))}
        </div>
        {project.contributions.length > 0 && (
          <button type="button" className="btn-link" onClick={onOpen}>
            View details <Icon name="arrow" />
          </button>
        )}
      </div>
    </SpotlightCard>
  );
};

const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    document.body.classList.add("no-scroll");
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.classList.remove("no-scroll");
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  const links = validLinks(project);

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        onClick={(e) => e.stopPropagation()}
      >
        <button type="button" className="modal-close" onClick={onClose} aria-label="Close">
          <Icon name="close" />
        </button>
        <div className="modal-meta">
          {project.role && <span>{project.role}</span>}
          {project.duration && project.duration.trim() && (
            <span>{project.duration.trim()}</span>
          )}
        </div>
        <h3 id="modal-title" className="modal-title gradient-text">
          {project.title}
        </h3>
        <p className="project-desc">{project.description}</p>

        {links.length > 0 && (
          <div className="modal-links">
            {links.map((link, i) => (
              <a
                key={`${link.url}-${i}`}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline btn-sm"
              >
                {hostname(link.url)} <Icon name="external" />
              </a>
            ))}
          </div>
        )}

        <h4 className="modal-subheading">Key Contributions</h4>
        <ul className="contributions">
          {project.contributions.map((item, i) => (
            <li key={i} style={{ "--d": `${0.05 * i}s` }}>
              <Icon name="check" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <h4 className="modal-subheading">Technologies</h4>
        <div className="chips">
          {project.technologies.map((tech) => (
            <span key={tech} className="chip">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState(null);

  const filters = useMemo(
    () => [
      { label: "All", test: () => true },
      { label: "Web3", test: isWeb3 },
      { label: "Web Apps", test: (p) => !isWeb3(p) },
    ],
    []
  );
  const visible = projects.filter(filters.find((f) => f.label === filter).test);

  useReveal([filter]);

  return (
    <section id="projects" className="section">
      <div className="container">
        <SectionHeading eyebrow="03 — Selected Work" title="Projects" />
        <div className="filters" data-reveal>
          {filters.map((f) => (
            <button
              key={f.label}
              type="button"
              className={`filter ${filter === f.label ? "is-active" : ""}`}
              onClick={() => setFilter(f.label)}
            >
              {f.label}
              <span className="filter-count">{projects.filter(f.test).length}</span>
            </button>
          ))}
        </div>
        <div className="projects-grid" key={filter}>
          {visible.map((project, i) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={i}
              onOpen={() => setSelected(project)}
            />
          ))}
        </div>
      </div>
      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "36ef551f-0a23-4572-be99-58c96fd22642", // Web3Forms public access key
          subject: `Portfolio message from ${formData.name}`,
          from_name: "Portfolio Contact Form",
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });
      const result = await res.json();
      if (!result.success) throw new Error(result.message);

      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.log(error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  return (
    <section id="contact" className="section section-alt contact">
      <div className="orb orb-c" />
      <div className="container">
        <SectionHeading eyebrow="04 — Contact" title="Let's Connect" />
        <SpotlightCard className="card contact-card" data-reveal>
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="field-row">
              <label className="field">
                <input
                  type="text"
                  name="name"
                  placeholder=" "
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <span>Your Name</span>
              </label>
              <label className="field">
                <input
                  type="email"
                  name="email"
                  placeholder=" "
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <span>Your Email</span>
              </label>
            </div>
            <label className="field">
              <textarea
                name="message"
                rows="5"
                placeholder=" "
                value={formData.message}
                onChange={handleChange}
                required
              />
              <span>Your Message</span>
            </label>
            <button
              type="submit"
              className={`btn btn-primary btn-block ${isSubmitting ? "is-loading" : ""}`}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <span className="spinner" /> Sending...
                </>
              ) : (
                <>
                  Send Message <Icon name="send" />
                </>
              )}
            </button>

            {submitStatus && (
              <div className={`alert alert-${submitStatus}`} role="alert">
                {submitStatus === "success"
                  ? "Message sent successfully!"
                  : "Failed to send message. Please try again later."}
              </div>
            )}
          </form>
        </SpotlightCard>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="footer">
    <div className="container footer-inner">
      <p>&copy; {new Date().getFullYear()} Satvik Gadhiya. All rights reserved.</p>
      <a href="#home" className="back-to-top" aria-label="Back to top">
        <Icon name="up" />
      </a>
    </div>
  </footer>
);

const CursorGlow = () => {
  useEffect(() => {
    const onMove = (e) => {
      document.documentElement.style.setProperty("--cx", `${e.clientX}px`);
      document.documentElement.style.setProperty("--cy", `${e.clientY}px`);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);
  return <div className="cursor-glow" aria-hidden="true" />;
};

const App = () => {
  const active = useActiveSection(SECTION_IDS);
  const [progress, scrolled] = useScrollProgress();
  useReveal();

  return (
    <>
      <CursorGlow />
      <Navbar active={active} scrolled={scrolled} progress={progress} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default App;
