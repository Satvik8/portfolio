import React, { useState, useEffect } from "react";
import "./styles.css";
import backImg from "./backImage.webp";
import emailjs from "@emailjs/browser";

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

  const handleDownloadResume = (e) => {
    e.preventDefault();
    const resumePdfUrl = `https://drive.google.com/file/d/1qdfKuc8T8Osssw61mt_GvZum8I8Cx0-K/view?usp=drivesdk`;
    const a = document.createElement("a");
    a.href = resumePdfUrl;
    a.download = "Satvik_Resume.pdf";
    a.target = "_blank"; // Add the target attribute
    a.click();
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        "service_td8uspl", // Replace with your EmailJS service ID
        "template_5hmwc73", // Replace with your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: "Satvik", // Your name
        },
        "IPfaPPdI9bPEzOSIW" // Replace with your EmailJS public key
      );

      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.log(error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  return (
    <div
      className="custom-scrollbar"
      style={{ height: "100vh", overflowY: "scroll" }}
    >
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top shadow">
        <div className="d-flex justify-content-between align-items-center w-100 px-3">
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
                      onClick={handleDownloadResume}
                      style={{ cursor: "pointer" }}
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
      <div style={{ paddingTop: "56px" }}>
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
          id="home"
        >
          {/* <div className="dark-overlay"></div> */}
          <div className="container position-relative text-center">
            <div className="row justify-content-center">
              <div className="col-md-8">
                <h1
                  className="display-4 fw-bold mb-4"
                  style={{
                    color: "rgb(0 136 175)",
                    textShadow: "rgba(0, 0, 0, 0.9) -2px -3px 2px",
                  }}
                >
                  Frontend Web Developer
                </h1>
                <p
                  className="lead mb-4"
                  style={{
                    color: "rgb(0 136 175)",
                    textShadow: "rgba(0, 0, 0, 0.9) -2px -3px 2px",
                    fontWeight: "bold",
                    fontSize: "1.3  rem",
                    letterSpacing: "2px",
                  }}
                >
                  Crafting seamless digital experiences with passion
                </p>
                <a href="#contact" className="btn btn-border-4  px-5 py-3">
                  Get in Touch
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* About Section */}
      <section
        id="about"
        className={`py-5 section-padding fade-in ${
          isVisible.about ? "visible" : ""
        }`}
        style={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-8 mx-auto">
              <h2 className="display-5 fw-bold mb-4 text-center">About Me</h2>
              <p className="lead text-muted text-center">
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
        style={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
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
        style={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
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
        style={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="container">
          <h2 className="display-5 fw-bold mb-5 text-center">Let's Connect</h2>
          <div className="row justify-content-center">
            <div className="col-md-8 col-lg-6">
              <div className="card border-0">
                <div className="card-body p-4">
                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Your Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Your Email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <textarea
                        className="form-control"
                        rows="4"
                        placeholder="Your Message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className={`btn btn-primary w-100 py-3 ${
                        isSubmitting ? "disabled" : ""
                      }`}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </button>

                    {submitStatus === "success" && (
                      <div className="alert alert-success mt-3" role="alert">
                        Message sent successfully!
                      </div>
                    )}

                    {submitStatus === "error" && (
                      <div className="alert alert-danger mt-3" role="alert">
                        Failed to send message. Please try again later.
                      </div>
                    )}
                  </form>

                  {/* Additional contact information */}
                  {/* <div className="mt-5 text-center">
                    <h4 className="mb-4">Or connect with me on:</h4>
                    <div className="d-flex justify-content-center gap-4">
                      <a
                        href="https://linkedin.com/in/your-profile"
                        className="text-primary"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="bi bi-linkedin fs-3"></i>
                      </a>
                      <a
                        href="https://github.com/your-profile"
                        className="text-dark"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="bi bi-github fs-3"></i>
                      </a>
                      <a
                        href="mailto:your.email@example.com"
                        className="text-danger"
                      >
                        <i className="bi bi-envelope fs-3"></i>
                      </a>
                    </div>
                  </div> */}
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
