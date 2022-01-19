import React,{Component} from 'react'
import './RightSideBar.css'
import {Col, Row,} from 'react-bootstrap'
import { FaRegQuestionCircle } from 'react-icons/fa';




class RightSideBar extends Component {
    constructor(props){
    super(props)
        this.state =
        {
        profiles:[]
        }
    }
  


    componentDidMount= async()=>
    {
    let response = await fetch("https://striveschool-api.herokuapp.com/api/profile/", 
            {
                "method": "GET",
                "headers":
                {
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWU2ZDBmOGMyYzE4ODAwMTVhYjk0YWIiLCJpYXQiOjE2NDI1MTY3MjgsImV4cCI6MTY0MzcyNjMyOH0.msOy2MRPmK0k_B06OcTKa4FsMqg8FwsMHxYGAXa8M6E",
                    "Content-type": "application/json",
                }
            })
    let parsedJson = await response.json()
    //slice the profile upto 10 profiles
    let slicedProfiles = parsedJson.slice(0, 10)
    this.setState({profiles:slicedProfiles})
    console.log(this.state.profiles)
    
    }
        render(){
        return(
    
        <div className="SideBar">
            <div className="content-div1">
                <Col className="content-Col">
                    <Row className="content-Row">
                            <p>Edit public profile & URL <FaRegQuestionCircle/></p>
                    </Row>

                    <Row className="content-Row">
                        <p>Add profile in another language <FaRegQuestionCircle/></p>
                    </Row>
                </Col>
            </div>
            <div className="content-Col2">
                <Col>
                    <p>People also viewed</p>
                    <ul>
                        {this.state.profiles.map((profile) => {
                                    return (
                                    <Row className="viewers">
                                                <Col>
                                                    <img className= "pro-pic" src= {profile.image} alt="pro-pic"/>
                                                </Col>
                                                <Col> 
                                                    <p className= "profile-name">{profile.name}</p>
                                                    <p className= "profile-summary">{profile.bio}</p>
                                                </Col>
                                            </Row>  
                                    )
                                    })}
                    </ul>
                </Col>
            </div>
        
            <hr className="horizontal-row"/>
        </div>
     
    )
        }
 }
export default RightSideBar



 