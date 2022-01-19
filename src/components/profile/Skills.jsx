import React from "react"
import { Pen } from "react-bootstrap-icons"
import SingleSkill from "./SingleSkill"
import "./skill.css"
import { ChevronDown } from "react-bootstrap-icons"

export default function Skills() {
  return (
    <div className="linkedin-card pt-4">
      <div className="linkedin-card-header d-flex justify-content-between">
        <div className="linkedin-card-header ml-2 linkedin-card-header pr-2 pl-2 ">
          Skills &amp; endorsements
        </div>
        <div>
          <div className="icon-container ">
            <span className="mr-3 add-skill">Add a new Skill</span>
            <span className="linkedin-icon-a">
              <Pen className="m-auto" />
            </span>
          </div>
        </div>
      </div>
      <div className="linkedin-divider-bottom px-4">
        <SingleSkill
          skill={{
            title: "Concept Development",
            total: 28,
            endorsements: "John Doe and 27 other connections",
          }}
          showBorder={true}
        />
        <SingleSkill
          skill={{
            title: "Business Development",
            total: 24,
            endorsements: "Jane Doe and 23 other connections",
          }}
          showBorder={true}
        />
        <SingleSkill
          skill={{
            title: "Interior Design",
            total: 23,
            endorsements: "Eddie Sikoy and 22 other connections",
          }}
          showBorder={false}
        />
      </div>
      <a className="text-center d-block w-100 text-light p-2 linkedin-card-button">
        Show more <ChevronDown />
      </a>
    </div>
  )
}
