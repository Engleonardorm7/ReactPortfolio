import React, { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Papers = () => {
  const papers = [
    {
      title: "Teaching LLMs to use tools",
      file: "https://github.com/Engleonardorm7/Portfolio/blob/React/portfolio/static/portfolio/TeachingLLMstousetools.pdf",
      description:
        "Large Language Models (LLMs) have allowed the development in various fields due to their natural language understanding capabilities, demonstrating proficiency in tasks related to understanding images, text, and audio. However, providing LLMs with the ability to interact with tools could significantly expand their abilities in other fields...",
      imageUrl: "http://localhost:8000/media/portfolio/images/TeachingLLMs.png",
    },
    {
      title: "Applications of Transformer Models",
      file: "https://github.com/Engleonardorm7/Portfolio/blob/React/portfolio/static/portfolio/ApplicationsofTransformerModels.pdf",
      description:
        "Over the last few years, transformers have significantly impacted the field of artificial intelligence, allowing the development of technologies such as Large Language Models (LLMs), which have demonstrated remarkable performance in understanding natural language. These models have facilitated the development of innovative applications in different fields, including text, audio, and image processing...",
      imageUrl:
        "http://localhost:8000/media/portfolio/images/ApplicationsofTransformerModels.png",
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
