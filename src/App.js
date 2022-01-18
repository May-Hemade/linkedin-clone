
import "./App.css"
import About from "./components/About"
import "bootstrap/dist/css/bootstrap.min.css"
import { Col, Container, Row } from "react-bootstrap"
import Activity from "./components/Activity"
import Experience from "./components/Experience"
import Education from "./components/Education"
import Skills from "./components/Skills"
import Interests from "./components/Interests"
import CentralAvatar from './components/CentralAvatar'
import Dashboard from './components/Dashboard';
import Footer from "./components/Footer"


function App() {
  return (
    <div className="App">

      <Container>
        <Row>
          <Col>
            <CentralAvatar/>
            <Dashboard/>
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
      <Footer/>

    </div>
  )
}

export default App
