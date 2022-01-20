import {
  Container,
  Row,
  Col,
  Image,
  Dropdown,
  ButtonGroup,
  Button
} from "react-bootstrap"
import image from "../assets/linkedinlogo.png"
import "./HomeFooter.css"
import { MdKeyboardArrowDown } from "react-icons/md"
// import AdminNavbar from './AdminNavbar'

const HomeFooter = () => {
  return (
    <footer className="text-white">
      <Container className="footer-container">
        
        <Row className="content">
          <Row className="Row1">
          <Col>
          <a href="" className="footer_link">
                About
              </a>
          </Col>
          <Col>
          <a href="" className="footer_link">
                Accessibility
              </a>
          </Col>
          <Col>
          <a href="" className="footer_link">
                Help Center
              </a>
          </Col>
          </Row>

          <Row className="Row2">
            <Col>
            
            <Dropdown as={ButtonGroup}>
              <Button variant="Secondary" className="footer_link_Button">Privacy & Terms <MdKeyboardArrowDown/></Button>

              <Dropdown.Toggle className="keyboard_arrow_down" variant="Secondary" />

              <Dropdown.Menu variant="Secondary">
                <Dropdown.Item href="#/action-1">Privacy Policy</Dropdown.Item>
                <Dropdown.Item href="#/action-2">User Agreement</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Cookie Policy</Dropdown.Item>
                <Dropdown.Item href="#/action-3">CopyRight Policy</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>         
            {/* <button className="btn-fullscreen" onClick={this.props.goFull}>
                {!this.props.isFull ? (
                  <i className="fa fa-expand-arrows-alt"></i>
                ) : (
                  <i className="fa compress-arrows-alt"></i>
                )}
              </button> */}
            </Col>
            <Col>
            <a href="" className="footer_link">
                Ad Choices
              </a>
            </Col>
          </Row>

          <Row className="Row3">
            <Col>
            <a href="" className="footer_link">
                Advertising
              </a>
            </Col>
            <Col>
            <a href="" className="footer_link">
                Business Services
              </a>
            </Col>
          </Row>

          <Row className="Row4">
            <Col>
            <a href="" className="footer_link">
                Get the Linkedin app
              </a>
            </Col>
            <Col>
            <a href="" className="footer_link">
                More
              </a>
            </Col>
          </Row>
          
          
        </Row>
        
          
        
        <p className="footer_label copy-right"><Image src={image} className="footer_logo" />  Linkedin Corporation @ 2022</p>
      </Container>
    </footer>
  )
}

export default HomeFooter
