import React, { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Papers = () => {
  const images = require.context("./images", false, /\.(png|jpe?g|svg)$/);

  const getImage = (imageName) => {
    try {
      return images(`./${imageName}`);
    } catch (error) {
      console.error(`Error al cargar la imagen: ${imageName}`, error);
      return null;
    }
  };
  const papers = [
    {
      title: "License Plate Detection and Recognition for Automatic Parking Lots",
      file: "pdfs/License_Plate_Detection_and_Recognition.pdf",
      description:
        "Automated parking lots have gained popularity since they are faster than manual or semi-automated parking lots. At the same time, they are more convenient for users who do not have to keep a ticket or a card that can be lost. However, automated systems implement special cameras designed specifically for license plate detection. In this project...",
      imageUrl: getImage("License_Plate_Detection_and_Recognition.png"),
    },
    {
      title: "Predictive maintenance",
      file: "pdfs/Predictive_Maintenance.pdf",
      description:
        "Predictive maintenance plays an important role in industries, as manufacturing companies often incur significant maintenance expenses and suffer financial losses due to unexpected machine failures. These failures lead to breakdowns that negatively impact overall company efficiency. Therefore, it is important to implement systems capable of predicting...",
      imageUrl: getImage("Predictive_Maintenance.png"),
    },

    {
      title: "Teaching LLMs to use tools",
      file: "pdfs/TeachingLLMstousetools.pdf",
      description:
        "Large Language Models (LLMs) have allowed the development in various fields due to their natural language understanding capabilities, demonstrating proficiency in tasks related to understanding images, text, and audio. However, providing LLMs with the ability to interact with tools could significantly expand their abilities in other fields...",
      imageUrl: getImage("TeachingLLMs.png"),
    },
    {
      title: "Applications of Transformer Models",
      file: "./pdfs/ApplicationsofTransformerModels.pdf",
      description:
        "Over the last few years, transformers have significantly impacted the field of artificial intelligence, allowing the development of technologies such as Large Language Models (LLMs), which have demonstrated remarkable performance in understanding natural language. These models have facilitated the development of innovative applications in different fields, including text, audio, and image processing...",
      imageUrl: getImage("ApplicationsofTransformerModels.png"),
    },
  ];

  const [currentPaperIndex, setCurrentPaperIndex] = useState(0);
  const currentPaper = papers[currentPaperIndex];

  const handleNextPaper = () => {
    setCurrentPaperIndex((prevIndex) =>
      prevIndex === papers.length - 1 ? 0 : prevIndex + 1
    );
  };
  const handlePrevPaper = () => {
    setCurrentPaperIndex((prevIndex) =>
      prevIndex === 0 ? papers.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="papers" className="papers-section">
      <h2 className="section-title">Research</h2>
      <div className="papers-wrapper">
        <button className="scroll-button left" onClick={handlePrevPaper}>
          <IoIosArrowBack size={30} />
        </button>
        <div className="paper-item">
          <div className="paper-content">
            <div className="paper-image-container">
              <img
                src={currentPaper.imageUrl}
                alt={currentPaper.title}
                className="paper-image"
              />
            </div>
            <div className="paper-description-container">
              <h3 className="paper-title">{currentPaper.title}</h3>
              <p className="paper-description">{currentPaper.description}</p>
              <a
                href={currentPaper.file}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="download-btn"> PDF</button>
              </a>
            </div>
          </div>
        </div>
        <button className="scroll-button right" onClick={handleNextPaper}>
          <IoIosArrowForward size={30} />
        </button>
      </div>
      <div className="papers-indicators">
        {papers.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentPaperIndex ? "active" : ""}`}
            onClick={() => setCurrentPaperIndex(index)}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default Papers;
