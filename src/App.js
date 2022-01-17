import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header/Header';
import SideBar from './components/SideBar/Sidebar';

import About from "./components/About"

import { Col, Container, Row } from "react-bootstrap"
import Activity from "./components/Activity"

function App() {
  return (
    <div className="App">
      <header className="App-header">
       
       <div className="app_body">
        <Header className="Navbar"/>
        <SideBar />
       </div> 
      </header>
      <Container>
        <Row>
          <Col>
            <About></About>
            <Activity></Activity>
          </Col>
          <Col md={3}></Col>
        </Row>
      </Container>
    </div>
  )
}

export default App
