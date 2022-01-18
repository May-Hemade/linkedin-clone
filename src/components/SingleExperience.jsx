import React from "react"
import "./experience.css"
import { Pen, List } from "react-bootstrap-icons"

export default function SingleExperience({ experience, showBorder }) {
  return (
    <div>
      <div className="d-flex inline pt-3">
        <img src={experience.image} className="card-image ml-3"></img>
        <div
          className={`experience-container w-100 ml-4 ${
            showBorder ? "border-experience" : ""
          }`}
        >
          <a href="#" className="sub-title ">
            <h3 className="title">{experience.title}</h3>
            <div className="sub-title">
              <span> {experience.company}</span>
              <span>. </span>
              <span>{experience.time}</span>
            </div>
            <div className="sub-title">
              <span>{experience.duration}</span>
              <span>. </span>
              <span>{experience.years}</span>
            </div>
            <div className="sub-title">
              <span>{experience.location}</span>
            </div>
          </a>
          <div className="body mt-2 ">
            <p>{experience.info}</p>
          </div>
          <div className="p-2 experience-icons">
            <div className="mr-2 linkedin-icon">
              <Pen />
            </div>
            <div className="linkedin-icon">
              <List />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
