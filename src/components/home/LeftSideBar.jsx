import React from 'react';
import {Avatar} from '@material-ui/core';
import {Link} from 'react-router-dom'

import './LeftSideBar.css';
const LeftSideBar = () => {
    return(
        <Link to="/home">
        <div className="sidebar">
            <div className="sidebar_top">
                <img src="https://wallpaperaccess.com/full/7030222.png" alt="cover-pic"/>
                <Avatar className='sidebar_avatar'/>
                <h2>Reid Hoffman</h2>
                <h4>reidhoffman@gmail.com</h4>
            </div>

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

            <div className="sidebar_bottom">
                <p>Recent</p>
            </div>
        </div>
        </Link>
    )
}
export default LeftSideBar;