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
/* import {VANTA} from 'vanta' */

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
    <div id="progilepage">
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
          <Col md={4}>
            <RightSideBar />
          </Col>
        </Row>

      </Container>
      <Footer />
      {/* <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.waves.min.js"></script>
      <script>
      VANTA.WAVES({
        el: "#progilepage",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0x9103c,
        shininess: 76.00,
        waveSpeed: 0.50,
        zoom: 1.16
      })
      </script> */}
    </div>
  )}
}

export default Profile
