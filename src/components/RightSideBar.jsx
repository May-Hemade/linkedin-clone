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
import { Dice6Fill } from 'react-bootstrap-icons';

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
              <p className="mt-3">
                Edit public profile & URL <FaRegQuestionCircle />
              </p>
            </Row>
            <div className="lineeee"></div>
            <Row className="content-Row">
              <p className="mt-3">
                Add profile in another language <FaRegQuestionCircle />
              </p>
            </Row>
          </Col>
        </div>
        <div className="viewer-profiles">
          <Col className="pl-2">
            <p className="text-light">People also viewed</p>

            {profiles.map((profile) => {
              return (
                <div
                  className="viewers d-flex flex-column pt-0 mb-3"
                  key={profile._id}
                >
                  <div className="d-flex ">
                    <div className="viewer-picture">
                      <img
                        className="linkedin-user-image pro-pic"
                        src={profile.image}
                        alt="pro-pic"
                      />
                    </div>

                    <div className="viewer-job-description">
                      <Link to={`/profile/${profile._id}`}>
                        <div className=" ml-2">
                          <p className=" align-top text-light mb-0">
                            {profile.name} {profile.surname}
                          </p>
                          <p className="sidebartitle align-top pt-0 mb-1 text-secondary">
                            {profile.title}
                          </p>
                        </div>
                      </Link>
                    </div>
                  </div>
                  <span className="align-self-center">
                    <button className="follow">
                      {/* <FiPlus class="plus-icon" /> */} + Follow
                    </button>
                  </span>
                </div>
              );
            })}
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
