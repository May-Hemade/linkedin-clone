import React from 'react';
import {Avatar} from '@material-ui/core';
import {Row, Button} from 'react-bootstrap'
import {HiUserGroup} from 'react-icons/hi';
import {BsCalendar3Event} from 'react-icons/bs'
import {MdKeyboardArrowDown} from 'react-icons/md'
import {HiHashtag} from 'react-icons/hi'
import {Link} from 'react-router-dom'
import {FiPlus} from 'react-icons/fi'
import {MdOutlineKeyboardArrowUp} from 'react-icons/md'
import './HomeLeftSideBar.css';

const HomeLeftSideBar = () => {
                    
    const recentItem = (topic) => {
        return(
        <div className="sidebar_recentItem">
            <span className="sidebar_icon"><HiHashtag/></span>
            <a className="recentItem">{topic}</a>
        </div>
        )
    }
    const groupItem = (group) => {
        return(
        <div className="sidebar_groupItem">
            <span className="sidebar_icon"><HiUserGroup/></span>
            <a className="groupItem">{group}</a>
        </div>
        )
    }
    const eventItem = (event) => {
        return(
            <div className="sidebar_eventItem">
            <span className="sidebar_icon"><BsCalendar3Event className="mr-4"/></span>
            <a className="eventItem">{event}</a>
        </div>
        )
    }
    return(
        <Link to="/home" className="LeftBar-Link">
            <>
            
        <div className="sidebar">
            <div className="sidebar_top">
                <img src="https://wallpaperaccess.com/full/7030222.png" alt="cover-pic"/>
                <Avatar className='sidebar_avatar'/>
                <h2>Reid Hoffman</h2>
                <h4>reidhoffman@gmail.com</h4>

                <div className="sidebar_stats">

                <div className="sidebar_stat">
                    <p>Who viewed you</p>
                    <p className="sidebar_statNumber">2,483</p>
                </div>

                <div className="sidebar_stat">
                    <p>Views on post</p>
                    <p className="sidebar_statNumber">2,448</p>
                </div>
               
            </div>

               <p className="access">Access exclusive tools & insights</p>
             <a className="try-Premium">Get Hired Faster, Try Premium Free</a>     
                    
            </div>

            <div className="sidebar_bottom">
                <a className="recent">Recent
                <span className="up-arrow">
                    <MdOutlineKeyboardArrowUp  className="arrowUp-icon"/>
                </span>
                </a>
                {recentItem('reactjs')}
                {recentItem('programming')}
                {recentItem('softwareEngineering')}
                {recentItem('motivationalQuotes')}
                {recentItem('striveschoolCareerHub')}
           
                <a className="groups">Groups
                    <span className="up-arrow">
                        <MdOutlineKeyboardArrowUp  className="arrowUp-icon"/>
                    </span>
                </a>
                {groupItem('StriveSchool Career Hub')}
                {groupItem('StriveSchool Alumni')}
                {groupItem('Developers 2021')}
                {groupItem('React Developers Union')}

                <Row>
                    <div>
                <a className="events ml-3">Events
                    <span className="plus-link">
                        <FiPlus className="plus-icon-event"/>
                    </span>
                    <span className="up-arrow-event">
                    <MdOutlineKeyboardArrowUp className="arrowUp-icon"/>
                    </span>
                </a>
                </div>
                
                </Row>
                {eventItem('PyCon Limerick 2022')}
                {eventItem('FinanceMan Africa 2021')}
                {eventItem('PyData Global Conference')}
                {eventItem('JuliaCon 2021')}
                <Row>
                <a className="followed-hashtags">Followed Hashtags<FiPlus className="fh-plus-icon"/>
                   
                    <span className="fh-up-arrow">
                    <MdOutlineKeyboardArrowUp className="arrowUp-icon"/>
                    </span>
                </a>
                </Row>
                {recentItem('motivationalquotes')}
                {recentItem('humanresources')}
                {recentItem('datanalytics')}
                
               <Button variant="Secondary" className="showMore-button">Show more <MdKeyboardArrowDown/></Button>
                {/* <div>
    {[DropdownButton].map((DropdownType, idx) => (
      <DropdownType 
        as={ButtonGroup}
        key={idx}
        id={`dropdown-button-drop-${idx}`}
        size="sm"
        variant="secondary"
        title="Show More"
        align="center"
      >
        <Dropdown.Item eventKey="1">{recentItem('datanalytics')}</Dropdown.Item>
        <Dropdown.Item eventKey="2">{recentItem('datanalytics')}</Dropdown.Item>
        <Dropdown.Item eventKey="3">{recentItem('datanalytics')}</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item eventKey="4">{recentItem('datanalytics')}</Dropdown.Item>
      </DropdownType>
    ))}
  </div> */}
                
            </div>
        </div>
        
        </>
        
       </Link> 
    )
    
}
export default HomeLeftSideBar;