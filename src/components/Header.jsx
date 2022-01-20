import React from 'react';
import './Header.css';
import 'react-bootstrap-icons'
import {Nav, NavDropdown} from 'react-bootstrap'
import SearchIcon from '@material-ui/icons/Search'
import HeaderOption from './HeaderOption';
import HomeIcon from '@material-ui/icons/Home'
import SupervisorIcon from '@material-ui/icons/SupervisorAccount'
import ChatIcon from '@material-ui/icons/Chat'
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter'
import NotificationsIcon from '@material-ui/icons/Notifications'
import { BsGrid3X3GapFill } from "react-icons/bs";
import { Link,  useLocation, useNavigate } from 'react-router-dom'
const Header = () => {
     const location = useLocation()

    const navigate = useNavigate()


    return(
        <div className="header">
                <div className="header_left">
                    <img src="./Assets/Linkedin-logo.png" className="Logo" alt="logo"/>
                        <div className="header_search">
                            <SearchIcon/>
                            <input type= "text" className="search_Bar_input"/>
                        </div>
                </div>

                <div className="header_right">
                   
                <Nav className="Nav-Bar">     
                    
                                <Link to="/" className="Home-Link">
                        <div className={location.pathname === '/' ? 'nav-link active' : 'nav-link'}>
                            <HeaderOption Icon={HomeIcon} title='Home'/>
                        </div>
                     </Link>

                        
                              
                    <Nav.Item>
                        <Nav.Link href="/home">
                            <HeaderOption Icon={SupervisorIcon} title='My Network'/>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-1">
                            <HeaderOption Icon={BusinessCenterIcon} title='Jobs'/>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-2">
                            <HeaderOption Icon={ChatIcon} title='Messaging'/>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-2">
                            <HeaderOption Icon={NotificationsIcon} title='Notifications'/>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        
                        <Link to='/profile' className='Profile-Link'>
                            <div className={location.pathname === '/profile' ? 'nav-link active' : 'nav-link'}><HeaderOption avatar='./Assets/Profile-picture.jpg' title='Me'/></div>
                       
                        </Link>
                    </Nav.Item>
                   
                    <Nav.Item>
                        <Nav.Link eventKey="link-2">
                            <HeaderOption Icon= {BsGrid3X3GapFill} title='Work'/>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="disabled" disabled>
                        Get Hired Faster, Try Premium Free
                        </Nav.Link>
                    </Nav.Item>

                </Nav>

                </div>
        </div>
    )
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