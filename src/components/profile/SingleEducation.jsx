import React from "react"
import "./education.css"
import { Pen, List } from "react-bootstrap-icons"

export default function SingleEducation({ education, showBorder }) {
  return (
    <div>
      <div className="d-flex inline pt-3">
        <img src={education.image} className="mt-3 card-image ml-3"></img>
        <div
          className={`pt-3 pb-3 w-100 experience-container ml-4 ${
            showBorder ? "border-experience" : ""
          }`}
        >
          <a href="#" className="sub-title ">
            <div className="d-flex justify-content-between">
              <h3 className="title">{education.title}</h3>
            </div>

            <div className="sub-title">
              <span>
                {education.major}, {education.studies}
              </span>
            </div>
            <div className="sub-title">
              <span>{education.date}</span>
            </div>
          </a>

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
