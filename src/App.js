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
          <h2 className="subtitle"> AI and Web Developer</h2>
          <p className="description">
            Mechatronics Engineer with over 8 years of experience in various
            engineering fields and a passion for programming, currently pursuing
            a Master's in{" "}
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
              href="https://github.com/Engleonardorm7/Portfolio/blob/React/portfolio/static/portfolio/CV.pdf"
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
            I am a Mechatronic Engineer with over eight years of experience
            across diverse areas within mechatronics. Currently, I am pursuing a
            Master’s degree in Artificial Intelligence and Robotics, which
            aligns with my deep passion for technology and innovation.
          </p>

          <p className="about-description">
            With a strong focus on programming, I am seeking opportunities that
            allow me to combine my expertise in software development with my
            interests in AI and robotics. My technical foundation includes
            proficiency in programming languages such as Python, Java, C/C++,
            and JavaScript, alongside hands-on experience with frameworks like
            Django, Flask, FastAPI, and React.
          </p>

          <p className="about-description">
            {" "}
            I am eager to leverage my technical background, problem-solving
            skills, and enthusiasm for emerging technologies to contribute
            meaningfully to a forward-thinking team and drive impactful results.
          </p>
          <a href="mailto:leonardorm7@hotmail.com" className="contact-btn">
            Contact
          </a>
        </div>
      </section>
      <footer className="footer">
        <p>&copy; 2024 Leonardo Rodriguez.</p>
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
