import About from "./About"
import { Col, Container, Row } from "react-bootstrap"
import Activity from "./Activity"
import Experience from "./Experience"
import Education from "./Education"
import Skills from "./Skills"
import Interests from "./Interests"
import CentralAvatar from "../CentralAvatar"
import Dashboard from "./Dashboard"
import Footer from "../Footer"
import RightSideBar from "../RightSideBar"
import { css } from "@emotion/react";
import { useState } from "react"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { GridLoader } from "react-spinners";

const loadingStyle = css`
  display: block;
  margin: 0 auto;
  border-color: #70b5f9;
`;


function Profile() {
  const {profileId} = useParams()
  const [profile,setProfile]=useState(null)
  const [isLoading,setIsLoading]=useState(true)
  
  const fetchProfile = async () => {
    try {
      let response = await fetch(`http://localhost:3001/profile/${profileId}`);
      if (response.ok) {
        let data = await response.json();
        console.log(data);
        setProfile(data);
        setIsLoading(false);
      } else {
        console.log(`something went wrong`);
      }
    } catch (error) {
      console.log(error);
    }
  };
  
  useEffect(()=>{
    fetchProfile()
  }, [])
  
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
    <div>
      <Container className="mt-4 pt-32">
        <Row>
          <Col>
            <CentralAvatar {...profile}/>
            <Dashboard />
            <About />
            <Activity />
            <Experience />
            <Education />
            <Skills />
            <Interests />
          </Col>
          <Col md={3}>
            <RightSideBar />
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  )}
}

export default Profile
