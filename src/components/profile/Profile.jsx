import About from "./About"
import { Col, Container, Row } from "react-bootstrap"
import Activity from "./Activity"
import Experience from "./Experience"
import Education from "./Education"
import Skills from "./Skills"
import Interests from "./Interests"
import CentralAvatar from "../CentralAvatar"
import Dashboard from "./Dashboard"
import Footer from "../Footer"
import RightSideBar from "../RightSideBar"
import Header from "../Header"

function Profile() {
  return (
    <div>
      <Container className="mt-4 pt-32">
        <Row>
          <Col>
            <CentralAvatar />
            <Dashboard />
            <About />
            <Activity />
            <Experience />
            <Education />
            <Skills />
            <Interests />
          </Col>
          <Col md={3}>
            <RightSideBar />
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  )
}

export default Profile
