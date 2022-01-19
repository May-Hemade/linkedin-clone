import React,{Component} from 'react'
import './RightSideBar.css'
import {Col, Container, Row,} from 'react-bootstrap'
import { FaRegQuestionCircle } from 'react-icons/fa';
import {FiPlus} from "react-icons/fi"
// import {Footer} from './profile/Footer.jsx'




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
    
        <Container className="RideSideBar">
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
            <div className="viewer-profiles">
                <Col>
                    <p>People also viewed</p>
                    <ul>
                        {this.state.profiles.map((profile) => {
                                    return (
                                    <Row className="viewers">
                                                <Col className="viewer-picture align-items-center" sm={2}>
                                                    <img className= "pro-pic" src= {profile.image} alt="pro-pic"/>
                                                </Col>
                                                <Col className="viewer-job-description justify-content-left" sm={10}> 
                                                    <Row>
                                                        <Col sm={12}>
                                                            <span className= "profile-name">{profile.name}</span>
                                                        </Col>
                                                    
                                                        <Col sm={12}>
                                                            <span className= "job-title">{profile.title}</span>
                                                        </Col>
                                                        
                                                    </Row>
                                                <button className="follow"><FiPlus/> Follow</button>
                                                </Col>

                                            </Row>  
                                    )
                                    })}
                    </ul>
                </Col>
            </div>
        
            <hr className="horizontal-row"/>
          
          {/* <div>
            <Footer/>
        </div> */}
        </Container>
        
     
    )
        }
 }
export default RightSideBar


// <Container>
//     <Row>
//         <Col>Profile Picture</Col>
//         <Col>
//         <div>
//             Profile Name
//             Job Title
//         </div>
//         </Col>
//         <Button>Follow</Button>
//     </Row>
// </Container>
