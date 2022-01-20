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
import DropDownIcon from './DropDownIcon.jsx'
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
                   
                <Nav>     
                    
                    
                        {/* <div className={location.pathname === '/menu' ? 'nav-link active' : 'nav-link'}>Menu</div> */}
                    <Link to="/">
                        <div className={location.pathname === '/' ? 'nav-link active' : 'nav-link'}><HeaderOption Icon={HomeIcon} title='Home'/></div>
                     </Link>

                        {/* <Nav.Link href="/home">
                            <HeaderOption Icon={HomeIcon} title='Home'/>
                        </Nav.Link> */}
                              
                    <Nav.Item>
                        <Nav.Link href="/home" className="Home-Link">
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
                        
                        <Link to='/profile'>
                            <div className={location.pathname === '/profile' ? 'nav-link active' : 'nav-link'}><HeaderOption avatar='./Assets/Profile-picture.jpg' title='Me'/></div>
                        {/* <Nav.Link eventKey="link-2">
                            <HeaderOption avatar='./Assets/Profile-picture.jpg' title='Me'/>
                        </Nav.Link> */}
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

