import "./App.css"
import About from "./components/About"
import "bootstrap/dist/css/bootstrap.min.css"
import { Col, Container, Row } from "react-bootstrap"

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col>
            <About></About>
          </Col>
          <Col md={3}></Col>
        </Row>
      </Container>
    </div>
  )
}

export default App
