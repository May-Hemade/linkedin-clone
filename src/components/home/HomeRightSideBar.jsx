import React,{Component} from 'react'
import './HomeRightSideBar.css'
import {Col, Container, Row,} from 'react-bootstrap'
import { FaRegQuestionCircle } from 'react-icons/fa';
import {FiPlus} from "react-icons/fi"
import HomeFooter from './HomeFooter'

class HomeRightSideBar extends Component {
    constructor(props){
    super(props)
        this.state =
        {
        profiles:[]
        }
    }
    componentDidMount= async()=>
    {
    let response = await fetch("http://localhost:3001/profile/", {
      method: "GET",
    });
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
                                                    
                                                            <div className= "profile-name">{profile.name}</div>
                                                            <div className= "job-title">{profile.title}</div>
                                                       
                                                <button className="message-button">
                                                 <span>
                                                    Message
                                                </span>
                                                </button>
                                                </Col>

                                            </Row>  
                                    )
                                    })}
                    </ul>
                </Col>
            </div>
        
            <hr className="horizontal-row"/>
          
          <div>
            <HomeFooter/>
        </div>
        </Container>
        
     
    )
        }
 }
export default HomeRightSideBar


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
