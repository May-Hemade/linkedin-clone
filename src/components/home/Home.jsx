import React from "react"
import { Col, Row, Container } from "react-bootstrap"
import Footer from "../Footer"
import RightSideBar from "../RightSideBar"
import LeftSideBar from './LeftSideBar'

export default function Home() {
  return (
    <div>
      <Container className="mt-4 pt-32">
        <Row>
          <Col>
          <LeftSideBar/>
          </Col>
          <Col md={3}></Col>
        </Row>
      </Container>
      <Footer />
    </div>
  )
}
