import React, { useState, useEffect } from "react";
import "./styles.css";
import backImg from "./Diam infinity 3.png";

const App = () => {
  const [isVisible, setIsVisible] = useState({});
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible((prev) => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting,
          }));
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll("section[id]").forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const skills = [
    "HTML 5",
    "CSS 3",
    "Bootstrap",
    "JavaScript",
    "C",
    "React",
    "Java",
    "Node js",
    "Git",
    "Git Hub",
  ];

  const projects = [
    {
      title: "WORK EXPERIENCE Block stack Pvt. Ltd. | Bangalore",
      description:
        "Developed user interfaces for Play Circle, a platform facilitating custody, sending, and receiving of multi-currency Fiat and digital assets. Innovated cost-effective solutions with zero hidden fees and minimized transaction costs. Enhanced features for cross-currency and cross-border transactions, and supported investment and trading in over 10 digital assets from a unified dashboard.Ensured robust, real-time transaction processing capable of handling over 100 million transactions daily. Contributed to the implementation of FDIC-insured USD custody, enhancing user control over assets and supporting fluid financial operations. Developed a user-friendly business platform for managing cash flow, optimizing financial routines, and simplifying the payment process. Integrated multi-currency management, diverse payment acceptance, and QuickBooks integration for seamless business transaction management.",
      technologies: ["REACT", "JAVASCRIPT", "BOOTSTRAP", "CSS"],
    },
    {
      title: "HealthCare Web Application",
      description:
        "A comprehensive hospital management system featuring robust patient data handling, doctor profiles, and an intuitive appointment booking system. Built with security and efficiency in mind.",
      technologies: ["HTML", "CSS", "PHP", "MySQL"],
    },
    {
      title: "Group Traveling Web Application",
      description:
        "A collaborative travel planning platform enabling tourists to connect and plan their adventures together. Features include shared itineraries, group messaging, and real-time updates.",
      technologies: ["HTML", "CSS", "PHP", "MySQL"],
    },
  ];

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top shadow">
        <div className="container">
          <a className="navbar-brand fw-bold text-primary" href="#home">
            Satvik Gadhiya
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded={!isNavCollapsed}
            aria-label="Toggle navigation"
            onClick={() => setIsNavCollapsed(!isNavCollapsed)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`${isNavCollapsed ? "collapse" : ""} navbar-collapse`}
            id="navbarNav"
          >
            <ul className="navbar-nav ms-auto">
              {[
                "About",
                "Skills",
                "Projects",
                "Contact",
                "Download my Resume",
              ].map((item) => (
                <li className="nav-item" key={item}>
                  {item === "Download my Resume" ? (
                    <a
                      className="nav-link px-3"
                      href="../public/satvik_resume.pdf" // Path to your resume file in the public folder
                      download="My_Resume.pdf" // Name of the downloaded file
                    >
                      {item}
                    </a>
                  ) : (
                    <a
                      className="nav-link px-3"
                      href={`#${item.toLowerCase()}`}
                    >
                      {item}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        className="hero-section d-flex align-items-center justify-content-center text-white"
        style={{
          // backgroundImage: 'url("./backImage.webp")',
          backgroundImage: `url(${backImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",
          position: "relative",
        }}
      >
        <div className="dark-overlay"></div>
        <div className="container position-relative text-center">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <h1 className="display-4 fw-bold mb-4">Frontend Web Developer</h1>
              <p className="lead mb-4">
                Crafting seamless digital experiences with passion
              </p>
              <a
                href="#contact"
                className="btn btn-light btn-lg px-5 py-3 rounded-pill"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className={`py-5 section-padding fade-in ${
          isVisible.about ? "visible" : ""
        }`}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-8 mx-auto">
              <h2 className="display-5 fw-bold mb-4">About Me</h2>
              <p className="lead text-muted">
                Hi, I'm Satvik, a passionate frontend web developer dedicated to
                creating exceptional user experiences. With expertise in modern
                web technologies and a keen eye for design, I transform complex
                challenges into elegant, user-friendly solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className={`py-5 section-padding bg-light fade-in ${
          isVisible.skills ? "visible" : ""
        }`}
      >
        <div className="container">
          <h2 className="display-5 fw-bold mb-5 text-center">Skills</h2>
          <div className="row g-4">
            {skills.map((skill) => (
              <div className="col-6 col-md-3" key={skill}>
                <div className="card h-100 border-0 shadow-sm skill-card">
                  <div className="card-body text-center">
                    <h5 className="card-title mb-0">{skill}</h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className={`py-5 section-padding fade-in ${
          isVisible.projects ? "visible" : ""
        }`}
      >
        <div className="container">
          <h2 className="display-5 fw-bold mb-5 text-center">Projects</h2>
          <div className="row g-4">
            {projects.map((project) => (
              <div className="col-md-6" key={project.title}>
                <div className="card  border-0 shadow-sm project-card">
                  <div className="card-body">
                    <h3 className="card-title h4 fw-bold mb-3">
                      {project.title}
                    </h3>
                    <p className="card-text text-muted">
                      {project.description}
                    </p>
                    <div className="mt-3">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="badge bg-primary me-2 mb-2">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className={`py-5 section-padding bg-primary text-white fade-in ${
          isVisible.contact ? "visible" : ""
        }`}
      >
        <div className="container">
          <h2 className="display-5 fw-bold mb-5 text-center">Let's Connect</h2>
          <div className="row justify-content-center">
            <div className="col-md-8 col-lg-6">
              <div className="card border-0">
                <div className="card-body p-4">
                  <form>
                    <div className="mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Your Name"
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Your Email"
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <textarea
                        className="form-control"
                        rows="4"
                        placeholder="Your Message"
                        required
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="btn btn-primary w-100 py-3"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-4 bg-dark text-white text-center">
        <div className="container">
          <p className="mb-0">
            &copy; 2024 Satvik Gadhiya. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
