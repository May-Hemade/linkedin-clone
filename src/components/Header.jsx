import React from 'react';
import './Header.css';
import 'react-bootstrap-icons'
import {Nav,Dropdown, Row, Col} from 'react-bootstrap'
import SearchIcon from '@material-ui/icons/Search'
import HeaderOption from './HeaderOption';
import HomeIcon from '@material-ui/icons/Home'
import SupervisorIcon from '@material-ui/icons/SupervisorAccount'
import ChatIcon from '@material-ui/icons/Chat'
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter'
import NotificationsIcon from '@material-ui/icons/Notifications'
import { BsGrid3X3GapFill } from "react-icons/bs";
import { Link,  useLocation, useNavigate } from 'react-router-dom'
import { Linkedin } from 'react-bootstrap-icons';
import {IoMdArrowDropdown} from 'react-icons/io'
const Header = () => {
     const location = useLocation()
 const navigate = useNavigate()


    return (
      <div className="header">
        <div className="header_left">
          <Linkedin className="linkedin-logo mt-2" />

          <div className="header_search  ml-4 ">
            <SearchIcon className="Search-icon" />
            <input
              type="text"
              className="search_Bar_input"
              placeholder="Search"
            />
          </div>
        </div>

        <div className="header_right">
          <Nav className="Nav-Bar">
            <Link to="/" className="Home-Link">
              <div
                className={
                  location.pathname === "/" ? "nav-link active" : "nav-link"
                }
              >
                <HeaderOption
                  Icon={HomeIcon}
                  title="Home"
                  className="navbar-icon"
                />
              </div>
            </Link>

            <Nav.Item>
              <Nav.Link href="/home">
                <HeaderOption
                  Icon={SupervisorIcon}
                  title="My Network"
                  className="navbar-icon"
                />
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-1">
                <HeaderOption
                  Icon={BusinessCenterIcon}
                  title="Jobs"
                  className="navbar-icon"
                />
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-2">
                <HeaderOption
                  Icon={ChatIcon}
                  title="Messaging"
                  className="navbar-icon"
                />
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-2">
                <HeaderOption
                  Icon={NotificationsIcon}
                  title="Notifications"
                  className="navbar-icon"
                />
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/profile/:profileId" className="Profile-Link">
                <div
                  className={
                    location.pathname === "/profile"
                      ? "nav-link active"
                      : "nav-link"
                  }
                >
                  <Dropdown className="nav-dropdown">
                    <Dropdown.Toggle variant="Secondary" id="dropdown-basic">
                      <HeaderOption
                        avatar="./Assets/Profile-picture.jpg"
                        title="Me"
                      />
                      <IoMdArrowDropdown className="down-arrow-icon" />
                    </Dropdown.Toggle>

                    <Dropdown.Menu class="dropdown-menu">
                      <div className="dropdown-div">
                        <Row>
                          <Col className="profile-column">
                            <img
                              src="./assets/Profile-picture.jpg"
                              alt="pro-pic"
                              className="profile-picture"
                            />
                          </Col>
                          <Col className="profile-bio-column">
                            <Row className="profile-bio-row">
                              <h6 className="profile-name">Reid Hoffmann</h6>
                              <p className="profile-bio">
                                Entrepreneur. Product and Business Strategist.
                                Investor. Podcaster.
                              </p>
                            </Row>
                          </Col>
                        </Row>
                        <button className="view-profile-button">
                          View Profile
                        </button>
                      </div>
                      <h6 className="dropdown-subheading">Account</h6>
                      <Dropdown.Item id="dropdown-item" href="#/action-1">
                        Settings & Privacy
                      </Dropdown.Item>
                      <Dropdown.Item id="dropdown-item" href="#/action-2">
                        Help
                      </Dropdown.Item>
                      <Dropdown.Item id="dropdown-item" href="#/action-3">
                        Language
                      </Dropdown.Item>
                      <h6 className="dropdown-subheading">Manage</h6>
                      <Dropdown.Item id="dropdown-item" href="#/action-1">
                        Posts & Activity
                      </Dropdown.Item>
                      <Dropdown.Item id="dropdown-item" href="#/action-2">
                        Job Posting Account
                      </Dropdown.Item>
                      <Dropdown.Item id="dropdown-item" href="#/action-3">
                        Sign Out
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link eventKey="link-2">
                <Dropdown className="nav-dropdown">
                  <Dropdown.Toggle variant="Secondary" id="dropdown-basic">
                    <HeaderOption
                      Icon={BsGrid3X3GapFill}
                      title="Work"
                      className="navbar-icon"
                    />
                    <IoMdArrowDropdown className="down-arrow-icon" />
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                      Another action
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      Something else
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link className="get-hired">
                Get Hired Faster, Try Premium Free
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </div>
      </div>
    );
}
export default Header

/*
{
    //Navbar function 
    function Navbar(props) {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">{props.children}</ul>
    </nav>
        );
    }

    //NavItem function
    function NavItem(props) {
  const [open, setOpen] = useState(false);

  return (
    <li className="nav-item">
      <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
        {props.icon}
      </a>

      {open && props.children}
    </li>
         );
        }

        //DropDown Menu
            function DropdownMenu() {
            const [activeMenu, setActiveMenu] = useState('main');
            const [menuHeight, setMenuHeight] = useState(null);
            const dropdownRef = useRef(null);

            useEffect(() => {
                setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
            }, [])

            function calcHeight(el) {
                const height = el.offsetHeight;
                setMenuHeight(height);
            }


            //DropDownItem
            function DropdownItem(props) {
            return (
                <a href="#" className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
                    <span className="icon-button">{props.leftIcon}</span>
                    {props.children}
                    <span className="icon-right">{props.rightIcon}</span>
                </a>
                );
            }

            return(
             <div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}>
             

                    <CSSTransition>
                <DropdownItem>My Profile</DropdownItem>
                <DropdownItem
                    leftIcon={<CogIcon />}
                    rightIcon={<ChevronIcon />}
                    goToMenu="settings">
                    Settings
                </DropdownItem>
                <DropdownItem
                    leftIcon="🦧"
                    rightIcon={<ChevronIcon />}
                    goToMenu="animals">
                    Animals
                </DropdownItem>

                </div>
            </CSSTransition>

             </div>   
            )


function App() {
  return (
    <Navbar>
      <NavItem icon={</>} />
      <NavItem icon={<BellIcon />} />
      <NavItem icon={<MessengerIcon />} />

      <NavItem icon={<CaretIcon />}>
        <DropdownMenu></DropdownMenu>
      </NavItem>
    </Navbar>
  );
}
}
*/