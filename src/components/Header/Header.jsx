import React from 'react';
import './Header.css';
import 'react-bootstrap-icons'
import SearchIcon from '@material-ui/icons/Search'
import HeaderOption from './HeaderOption';
import HomeIcon from '@material-ui/icons/Home'
import SupervisorIcon from '@material-ui/icons/SupervisorAccount'
import ChatIcon from '@material-ui/icons/Chat'
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter'
import NotificationsIcon from '@material-ui/icons/Notifications'
import GridOnIcon from '@material-ui/icons/GridOn';



const Header = () => {
    return(
        <div className="header">
                <div className="header_left">
                    <img src="./Assets/Linkedin-logo.png" alt=""/>
                        <div className="header_search">
                            <SearchIcon/>
                            <input type= "text" className="search_Bar_input"/>
                        </div>
                </div>

                <div className="header_right">
                    <HeaderOption Icon={HomeIcon} title='Home'/>
                    <HeaderOption Icon={SupervisorIcon} title='My Network'/>
                    <HeaderOption Icon={BusinessCenterIcon} title='Jobs'/>
                    <HeaderOption Icon={ChatIcon} title='Messaging'/>
                    <HeaderOption Icon={NotificationsIcon} title='Notifications'/>
                    <HeaderOption avatar='./Assets/Profile-picture.jpg' title='Me'/>
                    <HeaderOption Icon= {GridOnIcon} title='Work'/>
                </div>
        </div>
    )
}
export default Header