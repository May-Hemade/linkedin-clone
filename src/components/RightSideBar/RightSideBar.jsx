import React from 'react'
import './RightSideBar.css'
import {Col, Row,} from 'react-bootstrap'
import { FaRegQuestionCircle } from 'react-icons/fa';


const RightSideBar = () => {
   
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
                    <Row className="viewers">
                        <Col>
                            <img className= "pro-pic" src="./Assets/Ubeyt_Demir.jpg" alt="pro-pic"/>
                        </Col>
                        <Col> 
                        <button onClick={get_Profiles}> button </button>
                            <p className= "profile-name">Ubeyt Demir</p>
                            
                            <p className= "profile-summary">Fullstack Developer && Teaching Staff @ Strive School (YC S20)</p>
                            
                        </Col>
                    </Row>
                </Col>
            </div>
        
        <hr className="horizontal-row"/>
    </div>
    )
}
// return(
//     <div className="SideBar">
//             <div className="content-div1">
//                 <Col className="content-Col">
//                     <Row className="content-Row">
//                             <p>Edit public profile & URL <FaRegQuestionCircle/></p>
//                     </Row>

//                     <Row  className="content-Row">
//                         <p>Add profile in another language <FaRegQuestionCircle/></p>
                        
//                     </Row>
//                 </Col>
//             </div>
//             <div className="content-Col2">
//                 <Col>
//                     <p>People also viewed</p>
//                     <Row className="viewers">
//                         <Col>
//                             <img className= "pro-pic" src="./Assets/Profile-picture.jpg" alt="pro-pic"/>
//                         </Col>
//                         <Col> 
//                             <p className= "profile-name">Ubeyt Demir</p>
//                             <p className= "profile-summary">Fullstack Developer && Teaching Staff @ Strive School (YC S20)</p>
//                         </Col>
//                     </Row>
//                 </Col>
//             </div>
        
//         <hr className="horizontal-row"/>
//     </div>
        
//     )
// }
export default RightSideBar