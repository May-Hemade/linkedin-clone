import React from "react"
import { Pen } from "react-bootstrap-icons"
import { Col, Row } from "react-bootstrap"
import SingleInterest from "./SingleInterest"

export default function Interests() {
  const interests = [
    {
      img: "https://place-puppy.com/110x110",
      name: "Google",
      followers: "100,000,000",
    },
    {
      img: "https://place-puppy.com/99x99",
      name: "Apple",
      followers: "1,000",
    },
    {
      img: "https://place-puppy.com/80x80",
      name: "Strawberry",
      followers: "2,000,000",
    },
    {
      img: "https://place-puppy.com/85x85",
      name: "Harvard",
      followers: "10,000,000",
    },
    {
      img: "https://place-puppy.com/140x140",
      name: "Oxford",
      followers: "9,000,000",
    },
    {
      img: "https://place-puppy.com/160x160",
      name: "Strive School",
      followers: "5",
    },
  ]

  return (
    <div className="linkedin-card pt-4">
      <div className="linkedin-card-header d-flex justify-content-between">
        <div className="linkedin-card-header ml-2 linkedin-card-header pr-2 pl-2 ">
          Interests
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
        <Row>
          {interests.map((interest, index) => (
            <Col md={6} key={`interest-${index}`}>
              <SingleInterest interest={interest} />
            </Col>
          ))}
        </Row>
      </div>
      <a className="text-center d-block w-100 text-light p-2 linkedin-card-button">
        See all
      </a>
    </div>
  )
}
