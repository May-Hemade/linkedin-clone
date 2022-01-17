import { Container, Row, Col, Image, Dropdown, DropdownButton } from "react-bootstrap"
import linkedinlogo from './assets/linkedinlogo.png'
import "./Footer.css"

const Footer = () =>  {
    return (
        <footer className="text-white py-4">
            <Container>
                <div className="row">
                    <Image src={linkedinlogo} className="footer_logo ml-4"/>
                </div>
                <Row className="pt-2 pl-4">
                    <ul className="col-2 list-unstyled">
                        <li className="footer_link"> <a href="">About</a> </li>
                        <li className="footer_link"><a href="">Community Guidelines</a></li>
                        <li className="footer_link"> <a href="">Privacy & Terms</a></li>
                        <li className="footer_link"> <a href="">Sales Solutions</a></li>
                        <li className="footer_link"><a href="">Safety Center</a></li>
                    </ul>
                    <ul className="col-2 list-unstyled">
                        <li className="footer_link"> <a href="">Accessibility</a> </li>
                        <li className="footer_link"><a href="">Careers</a></li>
                        <li className="footer_link"> <a href="">Ad Choices</a></li>
                        <li className="footer_link"> <a href="">Mobile</a></li>
                        
                    </ul>
                    <ul className="col-2 list-unstyled">
                        <li className="footer_link"> <a href="">Talent Solutions</a> </li>
                        <li className="footer_link"><a href="">Marketing Solutions</a></li>
                        <li className="footer_link"> <a href="">Advertising</a></li>
                        <li className="footer_link"> <a href="">Small bussiness</a></li>
                        
                    </ul>
                    <Col xs={2}>
                        <ul className="list-unstyled">
                            <li className="footer_link"> <a href="">About</a> </li>
                            <li className="footer_link"><a href="">Community Guidelines</a></li>
                        </ul>
                    </Col>
                    <Col xs={4}>
                    <label for="language" className="footer_label">Select Language</label>
                    <DropdownButton name="language" id="dropdown-basic-button" title="English (English)" className="footer_dropdown">
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </DropdownButton>
                    
                    
                    </Col>
                    

                </Row>

            </Container>
        </footer>
        
        
    )
}

export default Footer