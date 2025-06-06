import React, { useState, useEffect } from "react";
import {
  SiPython,
  SiFlask,
  SiDjango,
  SiHtml5,
  SiCss3,
  SiFastapi,
  SiReact,
  SiTailwindcss,
} from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Projects = () => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  const images = require.context("./images", false, /\.(png|jpe?g|svg)$/);

  const getImage = (imageName) => {
    try {
      return images(`./${imageName}`);
    } catch (error) {
      console.error(`Error al cargar la imagen: ${imageName}`, error);
      return null;
    }
  };

  const projects = [
       {
      title: "PPT-AI: AI-Powered Presentation Generator",
      description:
        "PPT-AI is a smart chatbot that uses a fine-tuned LLM to create PowerPoint presentations automatically.",
      url: "https://github.com/Engleonardorm7/PPT-AI-AI-Powered-Presentation-Generator",
      image: getImage("PPT-AI.jpg"),
      tools_box: ["python"],
    },
    {
      title: "License Plate Detection System",
      description:
        "A full-stack automated parking management system built with YOLO and OCR for license plate detection and recognition, Flask for backend processing, and React for a dynamic frontend interface.",
      url: "https://github.com/Engleonardorm7/License-Plate-Detection",
      image: getImage("LicensePlateDetection.png"),
      tools_box: ["python"],
    },
    {
      title: "Robot for Elevator Button Detection",
      description:
        "This project controls the Niryo Ned2 robotic arm using a YOLO image detection model to detect and press elevator buttons",
      url: "https://github.com/Engleonardorm7/Elevator-Botton-Arm-Control",
      image: getImage("Ned2.2.jpg"),
      tools_box: ["python"],
    },
    {
      title: "Teaching LLMs to Use Tools",
      description:
        "This project focuses on teaching large language models (LLMs) to use PowerPoint",
      url: "https://github.com/Engleonardorm7/Teaching-LLMs-to-use-tools",
      image: getImage("LLMs.png"),
      tools_box: ["python"],
    },
    {
      title: "To Do List",
      description:
        "This project is a To-Do List App developed as part of my practice using React and Tailwind CSS. The application allows users to create, delete, and mark tasks as completed, offering a clean and styled interface.",
      url: "https://github.com/Engleonardorm7/TodoList",
      image: getImage("Todo-React2.jpg"),
      tools_box: ["react", "tailwind"],
    },
    {
      title: "My restaurant",
      description:
        "Restaurant website created with Django with the option to reserve a table and see the dishes offered",
      url: "https://github.com/Engleonardorm7/Restaurant-website",
      image: getImage("restaurantproject.png"),
      tools_box: ["django", "python", "html"],
    },
    {
      title: "Extract bbc articles",
      description:
        "Program created using selenium to extract articles from certain sections of https://www.bbc.com/news",
      url: "https://github.com/Engleonardorm7/Python-Developer-test/blob/main/3.py",
      image: getImage("Extractbbcarticle.png"),
      tools_box: ["python"],
    },
    {
      title: "Move data from GitHub to Freshdesk",
      description:
        "Script created for Transfer all compatible fields from a GitHub User to the Freshdesk Contact",
      url: "https://github.com/Engleonardorm7/Python-Developer-test/tree/main/4",
      image: getImage("github-freshdesk.png"),
      tools_box: ["python"],
    },
    {
      title: "Hindi Translator",
      description:
        "Script created using scraping to download the content of a web page and translate it into Hindi",
      url: "https://github.com/Engleonardorm7/html-to-hindi-translator",
      image: getImage("Extractbbcarticle.png"),
      tools_box: ["python"],
    },
    {
      title: "Movies-CRUD",
      description:
        "This project is a REST API made with FastAPI. To create, read, update and delete movies.",
      url: "https://github.com/Engleonardorm7/Movies_CRUD_FastAPI",
      image: getImage("Movies-CRUD-API.png"),
      tools_box: ["fastAPI", "python"],
    },
    {
      title: "TO DO LIST",
      description:
        "A Flask application that allows the user to perform basic tasks on a todo list.",
      url: "https://github.com/Engleonardorm7/Flask",
      image: getImage("TO_DO_LIST.png"),
      tools_box: ["Flask", "python"],
    },
    {
      title: "Survey",
      description: "Survey on the consumption of different types of protein",
      url: "https://github.com/Engleonardorm7/Survery-Django",
      image: getImage("Survey_Django3.png"),
      tools_box: ["django", "python", "html"],
    },
    {
      title: "Twitter API",
      description:
        "This is a twitter api clone developed in FastAPI Features included: Data validation, CRUD of users, CRUD of Tweets.",
      url: "https://github.com/Engleonardorm7/Twitter-API-FastApi",
      image: getImage("Twitter_API.png"),
      tools_box: ["django", "fastAPI"],
    },
    {
      title: "Weight tracking",
      description: "This is a weight tracking project using django",
      url: "https://github.com/Engleonardorm7/Django/tree/main/Gym_progression",
      image: getImage("gym_progression.png"),
      tools_box: ["django", "python", "html"],
    },
    {
      title: "Restaurant API",
      description:
        "This is a Django REST API that allows you to interact with a simple restaurant management system.",
      url: "https://github.com/Engleonardorm7/RestaurantProjectAPI",
      image: getImage("Restaurant_API.png"),
      tools_box: ["django", "python"],
    },
    {
      title: "Canvas API",
      description:
        "This API can process over 500 grades within a matter of seconds.",
      url: "https://github.com/Engleonardorm7/Canvas-API",
      image: getImage("Extractbbcarticle.png"),
      tools_box: ["python"],
    },
    {
      title: "Portfolio",
      description:
        "Web page for project showcase with image upload and tool selection for portfolio display.",
      url: "https://github.com/Engleonardorm7/Portfolio",
      image: getImage("Portfolio.png"),
      tools_box: ["django", "python", "html"],
    },
  ];

  const handleNextProject = () => {
    setCurrentProjectIndex((prevIndex) =>
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevProject = () => {
    setCurrentProjectIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  const currentProject = projects[currentProjectIndex];
  const toolsBox = currentProject.tools_box || [];

  const renderToolIcon = (tool) => {
    switch (tool.toLowerCase()) {
      case "python":
        return <SiPython title="Python" />;
      case "flask":
        return <SiFlask title="Flask" />;
      case "django":
        return <SiDjango title="Django" />;
      case "html":
        return <SiHtml5 title="HTML" />;
      case "css":
        return <SiCss3 title="CSS" />;
      case "fastapi":
        return <SiFastapi title="Fastapi" />;
      case "react":
        return <SiReact title="React" />;
      case "tailwind":
        return <SiTailwindcss title="Tailwind" />;
      default:
        console.warn(`Unknown tool: ${tool}`);
        return null;
    }
  };

  return (
    <section id="projects">
      <div className="projects-section">
        {/* Projects Content */}
        <h2 className="projects-title">My Projects</h2>
        <div className="projects-wrapper">
          <button className="scroll-button left" onClick={handlePrevProject}>
            <IoIosArrowBack size={30} />
          </button>
          <div className="project-item">
            <div className="project-content">
              <div className="project-description-container">
                <h3 className="project-title">{currentProject.title}</h3>
                <div className="project-description">
                  <p>{currentProject.description}</p>
                </div>
                <div className="tools-icons">
                  {toolsBox.length > 0 ? (
                    toolsBox.map((tool, index) => (
                      <span key={index} className="tool-icon">
                        {renderToolIcon(tool)}
                      </span>
                    ))
                  ) : (
                    <p>No tools available</p>
                  )}
                  <a
                    className="git"
                    href={currentProject.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub
                      size={30}
                      className="social-icon"
                      title="GitHub reposirory"
                    />
                  </a>
                </div>
              </div>
              <div className="project-image-container">
                <img
                  src={currentProject.image}
                  alt={currentProject.title}
                  className="project-image"
                />
              </div>
            </div>
          </div>

          <button className="scroll-button right" onClick={handleNextProject}>
            <IoIosArrowForward size={30} />
          </button>
        </div>
        <div className="projects-indicators">
          {projects.map((_, index) => (
            <span
              className={`dot ${index === currentProjectIndex ? "active" : ""}`}
              onClick={() => setCurrentProjectIndex(index)}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
