import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Portfolio = () => {
  const [projects, setProjects] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/projects/")
      .then((response) => setProjects(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h1>My projects</h1>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>{project.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Portfolio;
