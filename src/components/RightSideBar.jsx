import React,{Component} from 'react'
import './RightSideBar.css'
import {Col, Container, Row,} from 'react-bootstrap'
import { FaRegQuestionCircle } from 'react-icons/fa';
import {FiPlus} from "react-icons/fi"
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
// import {Footer} from './profile/Footer.jsx'
import { GridLoader } from 'react-spinners';
import { css } from "@emotion/react";

const loadingStyle = css`
  display: block;
  margin: 0 auto;
  border-color: #70b5f9;
`;


const RightSideBar = () => {
//class RightSideBar extends Component {
  // constructor(props){
  // super(props)
  //     this.state =
  //     {
  //     profiles:[]
  //     }
  // }
  // state = {
  //   profiles: [],
  // };
  const [profiles, setProfiles] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const fetchProfiles = async () => {
  try {
    let response = await fetch("http://localhost:3001/profile");
    if (response.ok) {
      let data = await response.json();
      console.log(data);
      console.log(data.profiles)
      //let slicedData = data.slice(0,10)
      setProfiles(data.profiles)
      setIsLoading(false)
    } else {
      console.log(`something went wrong`);
    }
  } catch (error) {
    console.log(error);
  }
};
  useEffect(()=>{
    fetchProfiles()
  }, [])
  // componentDidMount = async () => {
  //   fetchProfiles();
  // };
  //render() {
  if (isLoading) {
    return (
      <GridLoader
        size={10}
        loading={isLoading}
        color="#70b5f9"
        css={loadingStyle}
      />
    );
  } else {
    return (
      <Container className="RideSideBar">
        <div className="content-div1">
          <Col className="content-Col">
            <Row className="content-Row">
              <p>
                Edit public profile & URL <FaRegQuestionCircle />
              </p>
            </Row>

            <Row className="content-Row">
              <p>
                Add profile in another language <FaRegQuestionCircle />
              </p>
            </Row>
          </Col>
        </div>
        <div className="viewer-profiles">
          <Col>
            <p>People also viewed</p>
            <ul>
              {profiles.map((profile) => {
                return (
                  <Row className="viewers" key={profile._id}>
                    <Link to={`/profile/${profile._id}`}>
                      <Col className="viewer-picture align-items-center" sm={2}>
                        <img
                          className="pro-pic"
                          src={profile.image}
                          alt="pro-pic"
                        />
                      </Col>
                    </Link>
                    <Col
                      className="viewer-job-description justify-content-left"
                      sm={10}
                    >
                      <Row>
                        <Col sm={12}>
                          <span className="profile-name">{profile.name}</span>
                        </Col>

                        <Col sm={12}>
                          <span className="job-title">{profile.title}</span>
                        </Col>
                      </Row>

                      <button className="follow">
                        <FiPlus class="plus-icon" /> Follow
                      </button>
                    </Col>
                  </Row>
                );
              })}
            </ul>
          </Col>
        </div>

        <hr className="horizontal-row" />

        {/* <div>
            <Footer/>
        </div> */}
      </Container>
    );
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
