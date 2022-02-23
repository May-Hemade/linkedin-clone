import {
  Container,
  Row,
  Col,
  Image,
  Dropdown,
  DropdownButton,
} from "react-bootstrap"
import linkedinlogo from "./assets/linkedinlogo.png"
import "./Footer.css"
import { BsQuestionCircleFill, BsFillGearFill } from "react-icons/bs"

const Footer = () => {
  return (
    <footer className="text-white py-4">
      <Container>
        <div className="row">
          <Image src={linkedinlogo} className="footer_logo ml-4" />
        </div>
        <Row className="pt-2 pl-4">
          <ul className="col-2 list-unstyled">
            <li>
              {" "}
              <a href="" className="footer_link">
                About
              </a>{" "}
            </li>
            <li>
              <a href="" className="footer_link">
                Community Guidelines
              </a>
            </li>
            <li>
              {" "}
              <a href="" className="footer_link">
                Privacy &amp; Terms
              </a>
            </li>
            <li>
              {" "}
              <a href="" className="footer_link">
                Sales Solutions
              </a>
            </li>
            <li>
              <a href="" className="footer_link">
                Safety Center
              </a>
            </li>
          </ul>
          <ul className="col-2 list-unstyled">
            <li>
              {" "}
              <a href="" className="footer_link">
                Accessibility
              </a>{" "}
            </li>
            <li>
              <a href="" className="footer_link">
                Careers
              </a>
            </li>
            <li>
              {" "}
              <a href="" className="footer_link">
                Ad Choices
              </a>
            </li>
            <li>
              {" "}
              <a href="" className="footer_link">
                Mobile
              </a>
            </li>
          </ul>
          <ul className="col-2 list-unstyled">
            <li>
              {" "}
              <a href="" className="footer_link">
                Talent Solutions
              </a>{" "}
            </li>
            <li>
              <a href="" className="footer_link">
                Marketing Solutions
              </a>
            </li>
            <li>
              {" "}
              <a href="" className="footer_link">
                Advertising
              </a>
            </li>
            <li>
              {" "}
              <a href="" className="footer_link">
                Small bussiness
              </a>
            </li>
          </ul>
          <Col xs={4}>
            <ul className="list-unstyled">
              <li>
                <BsQuestionCircleFill />{" "}
                <a href="" className="pl-1 footer_link">
                  {" "}
                  Questions?
                </a>{" "}
                <br />{" "}
                <span className="footer_label pl-4">
                  Visit our help center
                </span>{" "}
              </li>
              <li>
                <BsFillGearFill />{" "}
                <a href="" className="pl-1 footer_link">
                  {" "}
                  Manage your account and privacy
                </a>{" "}
                <br />{" "}
                <span className="footer_label pl-4">
                  Go to your Settings
                </span>{" "}
              </li>
            </ul>
          </Col>
          <Col xs={2}>
            <label htmlFor="language" className="footer_label">
              Select Language
            </label>
            <DropdownButton
              name="language"
              id="dropdown-basic-button"
              title="English (English)"
              className="footer_dropdown"
            >
              <Dropdown.Item href="#/action-1">Spanish</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Indian</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Lebanese</Dropdown.Item>
            </DropdownButton>
          </Col>
        </Row>
        <p className="footer_label ml-4">Linkedin Corporation @ 2022</p>
      </Container>
    </footer>
  )
}

export default Footer
