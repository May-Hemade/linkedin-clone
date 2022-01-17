import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import SingleActivity from "./SingleActivity"
import "./activity.css"

export default function Activity() {
  return (
    <div>
      <div className="linkedin-card pt-3 ">
        <div className="linkedin-card-header ml-2 linkedin-card-header pr-2 pl-2 ">
          Activity
        </div>
        <a href="#" className="ml-2 linkedin-card-a pr-2 pl-2">
          8,880 followers
        </a>
        <Container className="pr-3 pl-3 mt-2">
          <Row>
            <Col md={6}>
              <SingleActivity
                activity={{
                  text: "Happy to share that module 4 is in the pocket! Let's hope the pocket does not have any holes 😁",
                  img: "https://place-hold.it/100x100",
                  author: "May",
                }}
              ></SingleActivity>
            </Col>
            <Col md={6} className="mb-4">
              <SingleActivity
                activity={{
                  text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates, magnam? Magnam rem, illum, aut exercitationem earum quod nihil eveniet itaque reiciendis officia suscipit numquam voluptas ea perspiciatis cumque repellendus nobis.",
                  img: "https://place-hold.it/100x100",
                  author: "May",
                }}
              ></SingleActivity>
            </Col>
            <a className="text-center mt-2 w-100 see-all text-light p-2 linkedin-card-button">
              See all activity
            </a>
          </Row>
        </Container>
      </div>
    </div>
  )
}
