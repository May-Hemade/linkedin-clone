
import "./App.css"
import About from "./components/About"
import { Col, Container, Row } from "react-bootstrap"
import Header from "./components/Header/Header"
import Activity from "./components/Activity"
import RightSideBar from './components/RightSideBar/RightSideBar'
import Experience from "./components/Experience"
import Education from "./components/Education"
import Skills from "./components/Skills"
import Interests from "./components/Interests"
import CentralAvatar from './components/CentralAvatar'
import Dashboard from './components/Dashboard';


function App() {
  return (
    <div className="App">
      <header className="App-header">
          <div className="app_body">
            <Header className="Navbar"/>
          </div> 
      </header>

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
              
              <Col md={3}>
                <RightSideBar/>
              </Col>
            </Row>
          </Container>
  </div>
  )
}

export default App
