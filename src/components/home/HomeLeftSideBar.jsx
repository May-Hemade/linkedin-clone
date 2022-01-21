import React from 'react';
import {Avatar} from '@material-ui/core';
import {Container} from 'react-bootstrap'
import {HiUserGroup} from 'react-icons/hi';
import {BsCalendar4Event} from 'react-icons/bs'
import {MdKeyboardArrowDown} from 'react-icons/md'
import {HiHashtag} from 'react-icons/hi'
import {Link} from 'react-router-dom'
import './HomeLeftSideBar.css';
import {showMore} from './ShowMoreButton'
const HomeLeftSideBar = () => {
    
    // const showMore = () => {
    //     const [show,setShow] = useState(true)
    //     return(
    //         <div>
    //         {
    //             if(show=== true){
    //                 {recentItem('motivationalquotes')}
    //             {recentItem('humanresources')}
    //             {recentItem('datanalytics')}

    //             }else{
                        
    //             }
    //         show?recentItem('motivationalquotes'):null;
    //             <button onClick= {()=>setShow(true)}> Show more <MdKeyboardArrowDown/></button>
    //             </div>
    //         }
    //         )
    //         }
                    
    const recentItem = (topic) => {
        return(
        <div className="sidebar_recentItem">
            <span className="sidebar_hash"><HiHashtag/></span>
            <p>{topic}</p>
        </div>
        )
    }
    const groupItem = (group) => {
        return(
        <div className="sidebar_groupItem">
            <span className="sidebar_hash"><HiUserGroup/></span>
            <p>{group}</p>
        </div>
        )
    }
    const eventItem = (event) => {
        return(
            <div className="sidebar_eventItem">
            <span className="sidebar_hash"><BsCalendar4Event/></span>
            <p>{event}</p>
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
                <p className="side_bottom-heading">Recent</p>
                {recentItem('reactjs')}
                {recentItem('programming')}
                {recentItem('softwareEngineering')}
                {recentItem('motivationalQuotes')}
                {recentItem('striveschoolCareerHub')}
           
                <p className="side_bottom-heading">Groups</p>
                {groupItem('StriveSchool Career Hub')}
                {groupItem('StriveSchool Alumni')}
                {groupItem('Developers 2021')}
                {groupItem('React Developers Union')}

                <p className="side_bottom-heading">Events</p>
                {groupItem('PyCon Limerick 2022')}
                {groupItem('FinanceMan Africa 2021')}
                {groupItem('PyData Global Conference')}
                {groupItem('JuliaCon 2021')}

                <p className="side_bottom-heading">Followed Hashtags</p>
                {recentItem('motivationalquotes')}
                {recentItem('humanresources')}
                {recentItem('datanalytics')}
                
               <showMore/>
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