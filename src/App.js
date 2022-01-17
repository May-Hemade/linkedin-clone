import "./App.css"
import About from "./components/About"
import "bootstrap/dist/css/bootstrap.min.css"
import { Col, Container, Row } from "react-bootstrap"
import Activity from "./components/Activity"
import Experience from "./components/Experience"
import Education from "./components/Education"
import Skills from "./components/Skills"
import Interests from "./components/Interests"

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col>
            <About />
            <Activity />
            <Experience />
            <Education />
            <Skills />
            <Interests />
          </Col>
          <Col md={3}></Col>
        </Row>
      </Container>
    </div>
  )
}

export default App
