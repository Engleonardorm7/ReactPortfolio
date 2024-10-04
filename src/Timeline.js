import React from "react";
import { FaBriefcase, FaCalendarAlt } from "react-icons/fa";

const Timeline = () => {
  const timelineData = [
    {
      date: "3/2024",
      title: "Master's student in Artificial Intelligence and Robotics.",
      company: "Hochschule Hof, Germany",
    },
    {
      date: "09/2021 – 31/01/2024",
      title: "Robotics and programming Teacher",
      company: "Montessori British School.",
    },
    {
      date: "04/2017 - 05/2019",
      title: "Project Engineer",
      company: "BH2 Robotics.",
    },
    {
      date: "05/2016 - 03/2017",
      title: "Project Engineer ",
      company: "Servicloro Group.",
    },
    {
      date: "11/2015 - 05/2016",
      title: "Electronic Technician ",
      company: "Security Access.",
    },
    {
      date: "07/2014 - 02/2015",
      title: "Assistant of Design and Development Area",
      company: "PELPAK.",
    },
    {
      date: "2/2010 - 10/2015",
      title: "Graduated in Mechatronic Engineering",
      company: "Universidad de San Buenaventura ",
    },
  ];

  return (
    <div className="timeline-container ">
      <h2 className="title">
        {" "}
        <FaBriefcase className="experience-icon" />
        Experience
      </h2>
      <div className="time-line-container">
        {timelineData.map((event, index) => (
          <div
            key={index}
            className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
          >
            <div className="timeline-content">
              <h3 className="timeline-title">{event.title}</h3>
              <span className="timeline-company">{event.company}</span>
              <p className="timeline-date">
                <FaCalendarAlt className="calendar-icon" /> {event.date}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
