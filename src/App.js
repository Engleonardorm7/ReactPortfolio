import React, { useEffect, useRef, useState } from "react";

import { FaLinkedin, FaGithub, FaSun, FaMoon, FaCircle } from "react-icons/fa";

import "./App.css";
import Timeline from "./Timeline";
import Papers from "./papers";
import Projects from "./projects";

const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(false);

  const [activeSection, setActiveSection] = useState("");

  const sectionsRef = useRef([]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // Detecta cuando el 50% de la sección está visible
    };

    const observer = new IntersectionObserver((entries) => {
      let noSectionVisible = true;

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id); // Cambia la sección activa al id de la sección visible
          noSectionVisible = false;
        }
      });
      if (noSectionVisible) {
        setActiveSection("");
      }
    }, observerOptions);

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section); // Observa cada sección
    });

    // Limpia el observer cuando el componente se desmonta
    return () => {
      observer.disconnect();
    };
  }, []);

  const scrollToSection = (sectionId, index) => {
    const section = sectionsRef.current[index];
    section.scrollIntoView({ behavior: "smooth" });
    setActiveSection(sectionId);
  };
  return (
    <div className={`portfolio ${darkMode ? "dark-mode" : "light-mode"}`}>
      <nav className="nav">
        {/* <h2 className="name">Leonardo Rodriguez</h2> */}
        <ul className="nav-links">
          <li
            className={activeSection === "experience" ? "active" : ""}
            onClick={() => scrollToSection("experience", 0)}
          >
            Experience
          </li>
          <li
            className={activeSection === "projects" ? "active" : ""}
            onClick={() => scrollToSection("projects", 1)}
          >
            Projects
          </li>
          <li
            className={activeSection === "papers" ? "active" : ""}
            onClick={() => scrollToSection("papers", 2)}
          >
            Research
          </li>
          <li
            className={activeSection === "about" ? "active" : ""}
            onClick={() => scrollToSection("about", 3)}
          >
            About
          </li>
          <div
            onClick={() => setDarkMode(!darkMode)}
            style={{ cursor: "pointer" }}
          >
            {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
          </div>
        </ul>
      </nav>
      <section id="header-section" className="header-section">
        <div className="intro">
          <h1 className="name-title">Leonardo Rodriguez</h1>
          <div className="availability">
            <FaCircle className="icon" color="green" />
            <span>Available for work</span>
          </div>
          <h2 className="subtitle"> AI Engineer & Applied Machine Learning Developer</h2>
          <p className="description">
            Mechatronics Engineer with 9+ years of interdisciplinary experience and hands-on skills 
            in backend development and applied AI. 
            Currently finalizing a Master’s in{" "}
            <span className="highlight">
              Artificial Intelligence and Robotics
            </span>{" "}
            in Germany
          </p>
          <div className="buttons">
            <a
              href="https://www.linkedin.com/in/leonardo-rodriguez7"
              className="icons"
            >
              <FaLinkedin className="social-icon" />
            </a>
            <a href="https://github.com/Engleonardorm7" className="icons">
              <FaGithub className="social-icon" />
            </a>
            <a
              href="/pdfs/CV.pdf"
              className="cv-button"
              title="Download CV"
              download="Leonardo_Rodriguez_CV.pdf"
            >
              CV
            </a>
          </div>
        </div>
      </section>
      <section id="experience" ref={(el) => (sectionsRef.current[0] = el)}>
        <div className="Experience">
          {/* <h1 className="Experience">Experience</h1> */}
          <Timeline></Timeline>
        </div>
      </section>
      <section id="projects" ref={(el) => (sectionsRef.current[1] = el)}>
        <Projects></Projects>
      </section>
      <section id="papers" ref={(el) => (sectionsRef.current[2] = el)}>
        {/* <div className="papers">Research</div> */}
        <Papers></Papers>
      </section>
      <section id="about" ref={(el) => (sectionsRef.current[3] = el)}>
        <div className="about">
          <h1>About me</h1>
          <p className="about-description">
            I’m a Mechatronics Engineer with over nine years of experience and currently finishing a Master’s in Artificial Intelligence and Robotics in Germany. I specialize in AI development and backend systems, with a strong interest in building intelligent and scalable solutions.
          </p>

          <p className="about-description">
           My skill set includes Python, Java, C/C++, JavaScript, PyTorch, NumPy, Pandas, and tools like LangChain, FastAPI, Flask, and Docker. I’ve worked on projects involving LLMs, computer vision, and 3D model analysis, combining data preprocessing, training, and deployment. I also have experience developing full-stack web applications using Django, React, and PostgreSQL.
          </p>

          <p className="about-description">
            {" "}
            I’m eager to apply my technical foundation, problem-solving mindset, and passion for emerging technologies to contribute meaningfully to a forward-thinking team.
          </p>
          <a href="mailto:leonardorm7@hotmail.com" className="contact-btn">
            Contact
          </a>
        </div>
      </section>
      <footer className="footer">
        <p>&copy; 2025 Leonardo Rodriguez.</p>
        <div className="footer-links">
          <a
            href="https://www.linkedin.com/in/leonardo-rodriguez7"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/Engleonardorm7"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
