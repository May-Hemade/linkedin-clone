import React from 'react';
import { Col , Row , Button , Image, Container } from 'react-bootstrap';
import { GoInfo , GoPlus } from 'react-icons/go';
import { BsChevronCompactDown } from 'react-icons/bs';
import './LeftBottomBar.css'
import { Link } from 'react-router-dom'

class LeftBottomBar extends React.Component {
    render(){
        
        return(
            <Link to="/home">
            <Container>
                <Row>
                    <Col className='col-12 home leftSidebarShadow' >
                            <div className='d-flex justify-content-between align-items-center my-3'>
                                <span style={{fontSize: '16px'}}> Recent </span> <GoInfo />
                            </div>
                            <Row>
                                <Col className='d-flex mb-3 align-items-center'>
                                    <Image src='data:image/png;base64,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' className="svg1"  alt="User's picture"/>
                                    <div className='ml-1'>
                                        <span>#JavaScript</span>
                                    </div>
                                    <Button variant="outline" className='d-flex justify-content-center align-items-center followButton'><GoPlus />Follow</Button>
                                </Col>
                            </Row>
                            <Row>
                                <Col className='d-flex mb-3 align-items-center'>
                                    <Image src='data:image/jpeg;base64,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' className="svg1" alt="User's picture"/>
                                    <div className='ml-1'>
                                        <span>#programing</span>
                                    </div>
                                    <Button variant="outline" className='d-flex justify-content-center align-items-center followButton'><GoPlus />Follow</Button>
                                </Col>
                            </Row>
                            <Row>
                                <Col className='d-flex mb-3 align-items-center'>
                                    <Image src='data:image/jpeg;base64,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' className="svg1" alt="User's picture"/>
                                    <div className='ml-1'>
                                        <span>Richard Branson</span>
                                    </div>
                                    <Button variant="outline" className='d-flex justify-content-center align-items-center followButton'><GoPlus />Follow</Button>
                                </Col>
                            </Row>
                        <span className="spa1" >View all recommendations</span>
                    </Col>

                    <Col className='col-12 mt-2  home leftSidebarShadow ' style={{padding: '0px'}}>
                        <div className='banerContainer'>
                            <Image src='https://miro.medium.com/max/832/1*9iVDfnmJ8Ab1aEkHAKarrQ.gif' style={{width: 100 + "%"}}/>
                        </div>
                    </Col>

                    <Col className='col-12 mt-2 mb-3 home leftSidebarShadow' >
                            <div className='d-flex justify-content-between align-items-center my-3'>
                                <span style={{fontSize: '16px'}}> LinkedIn Learning </span> <GoInfo />
                            </div>
                            <Row>
                                <Col className='d-flex mb-3 align-items-center'>
                                    <Image src='https://www.nobledesktop.com/image/blog/scrolling-code.gif' style={{width: 35 + "%"}} alt="User's picture"/>
                                    <div className='ml-1'>
                                        <span className="spa3" >Learn Coding</span>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col className='d-flex mb-3 align-items-center'>
                                    <Image src='https://thumbs.gfycat.com/DifficultLimpingBubblefish-small.gif' style={{width: 35 + "%"}} alt="User's picture"/>
                                    <div className='ml-1'>
                                        <span className="spa3" >Learn Coding</span>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col className='d-flex mb-3 align-items-center'>
                                    <Image src='https://miro.medium.com/max/2160/1*9S3JhMtLGiacpNpziWGN1A.gif' style={{width: 35 + "%"}} alt="User's picture"/>
                                    <div className='ml-1'>
                                        <span className="spa3" >Learn Coding</span>
                                    </div>
                                </Col>
                            </Row>
                        <span style={{fontSize: '11px'}}>What field is video from</span>
                    </Col>
                    <Col className='col-12 newsFeedRightSidebar pt-2 '  style={{borderTop: '2px solid grey'}}>
                        <ul>
                            <div className='d-flex justify-content-around'>
                                <Link>About</Link>
                                <Link>Accessibility</Link>
                                <Link>Help</Link>
                            </div>
                            <div className='d-flex justify-content-around'>
                                <Link>Privacy & Terms <BsChevronCompactDown /></Link>
                                <Link>Ad Choices</Link>
                                <Link>Advertising</Link>
                            </div>
                            <div className='d-flex justify-content-around'>
                                <Link>Business Services <BsChevronCompactDown /></Link>
                                <Link>Get the LinkedIn app</Link>
                            </div>
                            <Link className='d-flex justify-content-around'>More</Link>
                        </ul>
                    </Col>
                    <Col className='d-flex justify-content-center  align-items-center'>
                        <Image src="https://logos-world.net/wp-content/uploads/2020/04/Linkedin-Logo-2003%E2%80%932011.png" style={{width: 25 + "%"}} />
                        <span className="spa4" > LinkedIn Corporation © 2020</span>
                    </Col>
                
                </Row>
            </Container>
            </Link>
        )
        
    }
}

export default LeftBottomBar;































// import React,{Component} from 'react'
// import './RightSideBar.css'
// import {Col, Container, Row,} from 'react-bootstrap'
// import { FaRegQuestionCircle } from 'react-icons/fa';
// import {FiPlus} from "react-icons/fi"
// import {Footer} from './profile/Footer.jsx'




// class RightSideBar extends Component {
//     constructor(props){
//     super(props)
//         this.state =
//         {
//         profiles:[]
//         }
//     }
//     componentDidMount= async()=>
//     {
//     let response = await fetch("https://striveschool-api.herokuapp.com/api/profile/", 
//             {
//                 "method": "GET",
//                 "headers":
//                 {
//                     "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWU2ZDBmOGMyYzE4ODAwMTVhYjk0YWIiLCJpYXQiOjE2NDI1MTY3MjgsImV4cCI6MTY0MzcyNjMyOH0.msOy2MRPmK0k_B06OcTKa4FsMqg8FwsMHxYGAXa8M6E",
//                     "Content-type": "application/json",
//                 }
//             })
//     let parsedJson = await response.json()
//     //slice the profile upto 10 profiles
//     let slicedProfiles = parsedJson.slice(0, 10)
//     this.setState({profiles:slicedProfiles})
//     console.log(this.state.profiles)
    
//     }
//         render(){
//         return(
//             <Link to="/home">
    
//         <Container className="RideSideBar">
//             <div className="content-div1">
//                 <Col className="content-Col">
//                     <Row className="content-Row">
//                             <p>Edit public profile & URL <FaRegQuestionCircle/></p>
//                     </Row>

//                     <Row className="content-Row">
//                         <p>Add profile in another language <FaRegQuestionCircle/></p>
//                     </Row>
//                 </Col>
//             </div>
//             <div className="viewer-profiles">
//                 <Col>
//                     <p>People also viewed</p>
//                     <ul>
//                         {this.state.profiles.map((profile) => {
//                                     return (
//                                     <Row className="viewers">
//                                                 <Col className="viewer-picture align-items-center" sm={2}>
//                                                     <img className= "pro-pic" src= {profile.image} alt="pro-pic"/>
//                                                 </Col>
//                                                 <Col className="viewer-job-description justify-content-left" sm={10}> 
//                                                     <Row>
//                                                         <Col sm={12}>
//                                                             <span className= "profile-name">{profile.name}</span>
//                                                         </Col>
                                                    
//                                                         <Col sm={12}>
//                                                             <span className= "job-title">{profile.title}</span>
//                                                         </Col>
                                                        
//                                                     </Row>
//                                                 <button className="follow"><FiPlus/> Follow</button>
//                                                 </Col>

//                                             </Row>  
//                                     )
//                                     })}
//                     </ul>
//                 </Col>
//             </div>
        
//             <hr className="horizontal-row"/>
          
//           <Footer/>
//         </Container>
        
//      </Link>
//     )
//         }
//  }
// export default RightSideBar


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