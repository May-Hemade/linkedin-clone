import React, { useEffect, useState } from "react"

import { Plus, ChevronDown } from "react-bootstrap-icons"
import SingleExperience from "./SingleExperience"

export default function Experience() {
  const [experiences, setExperiences] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    getExperiences()
  }, [])

  const getExperiences = async () => {
    setIsLoading(true)

    const response = await fetch(
      "https://striveschool-api.herokuapp.com/api/profile/61e5318873d5cb0015395a9f/experiences",
      {
        method: "GET",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWU1MzE4ODczZDVjYjAwMTUzOTVhOWYiLCJpYXQiOjE2NDI0MTAzNzYsImV4cCI6MTY0MzYxOTk3Nn0.qDjDBTYnXI7X3Y3eWLOaKSMaVRFITbDsAwrjjesIIMc",
          "Content-Type": "application/json",
        },
      }
    )

    if (response.ok) {
      const exp = await response.json()
      const sortedExperiences = exp.sort(
        (a, b) => new Date(b.startDate) - new Date(a.startDate)
      )
      setExperiences(sortedExperiences)
      setIsLoading(false)
    } else {
      setIsLoading(false)
      setHasError(true)
    }
  }

  return (
    <div>
      <div className="linkedin-card-top pt-3 pb-4">
        <div className="linkedin-card-header d-flex justify-content-between">
          <div className="linkedin-card-header ml-2 linkedin-card-header pr-2 pl-2 ">
            Experience
          </div>
          <div className="linkedin-icon display-3 mr-2">
            <Plus> </Plus>
          </div>
        </div>

        {!isLoading &&
          !hasError &&
          experiences.map((experience, index) => (
            <SingleExperience
              key={experience._id}
              experience={experience}
              showBorder={index == experiences.length - 1 ? false : true}
            ></SingleExperience>
          ))}

        <span className="mt-4 ml-2 more-experiences">
          Show more experiences <ChevronDown />
        </span>
      </div>
    </div>
  )
}
