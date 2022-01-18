import React from "react"
import "./experience.css"
import { Pen, List } from "react-bootstrap-icons"
import { format, differenceInMonths } from "date-fns"

export default function SingleExperience({ experience, showBorder }) {
  const getDuration = () => {
    const startDate = new Date(experience.startDate)
    const endDate =
      experience.endDate == null ? new Date() : new Date(experience.endDate)
    const months = differenceInMonths(endDate, startDate)

    const years = Math.floor(months / 12)
    const remaining = months % 12

    const yearsString =
      years > 0 ? (years > 1 ? `${years} years` : `${years} year`) : ""
    const monthsString =
      remaining > 0
        ? remaining > 1
          ? `${remaining} mos`
          : `${remaining} mo`
        : ""

    return `${yearsString} ${monthsString}`
  }

  const getStartEnd = () => {
    const startDate = new Date(experience.startDate)

    let startEnd = format(startDate, "MMM yyyy")

    if (experience.endDate != null) {
      const endDate = new Date(experience.endDate)
      startEnd += ` - ${format(endDate, "MMM yyyy")}`
    } else {
      startEnd += " - Present"
    }

    return startEnd
  }

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
            <h3 className="title">{experience.role}</h3>
            <div className="sub-title">
              <span> {experience.company}</span>
            </div>
            <div className="sub-title">
              <span>{getStartEnd()}</span>
              <span> . </span>
              <span>{getDuration()}</span>
            </div>
            <div className="sub-title">
              <span>{experience.area}</span>
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
