import React from "react"

import { Plus, ChevronDown } from "react-bootstrap-icons"
import SingleEducation from "./SingleEducation"

export default function Education() {
  return (
    <div>
      <div className="linkedin-card-bottom pt-4 linkedin-divider-top pb-4">
        <div className="linkedin-card-header d-flex justify-content-between">
          <div className="linkedin-card-header ml-2 linkedin-card-header pr-2 pl-2 ">
            Education
          </div>
          <div className="linkedin-icon display-3 mr-2">
            <Plus> </Plus>
          </div>
        </div>
        <SingleEducation
          education={{
            title: "Udacity",
            image: "https://place-puppy.com/100x105",
            major: "Nanodegree in Marketing Analytics",
            date: "2020 - 2020",
          }}
          showBorder={true}
        ></SingleEducation>
        <SingleEducation
          education={{
            title: "Lebanese International University",
            image: "https://place-puppy.com/101x100",
            major: "Interior Design",
            date: "2012 - 2016",
          }}
          showBorder={true}
        ></SingleEducation>
        <SingleEducation
          education={{
            title: "Lebanese Evangelical School for Boys and Girls",
            image: "https://place-puppy.com/102x100",
            major: "High School Diploma",
            studies: "Economics and Sociology",
            date: "1996 - 2011",
          }}
          showBorder={false}
        ></SingleEducation>

        <span className=" ml-2 more-experiences">
          Show more education <ChevronDown />
        </span>
      </div>
    </div>
  )
}
