import React, { useEffect, useState } from "react"
import { Col, Row, Container } from "react-bootstrap"
import { CircleLoader, GridLoader } from "react-spinners"
import Footer from "../Footer"
import RightSideBar from "../RightSideBar"
import { css } from "@emotion/react"
import Post from "./Post"
import Postinput from "./PostInput"

const loadingStyle = css`
  display: block;
  margin: 0 auto;
  border-color: #70b5f9;
`

export default function Home() {
  const [posts, setPosts] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    getPosts()
  }, [])

  const getPosts = async () => {
    setIsLoading(true)

    const response = await fetch(
      "https://striveschool-api.herokuapp.com/api/posts",
      {
        method: "GET",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWU1MzE4ODczZDVjYjAwMTUzOTVhOWYiLCJpYXQiOjE2NDI0MTAzNzYsImV4cCI6MTY0MzYxOTk3Nn0.qDjDBTYnXI7X3Y3eWLOaKSMaVRFITbDsAwrjjesIIMc",
        },
      }
    )

    if (response.ok) {
      setPosts(await response.json())
      setIsLoading(false)
    } else {
      setIsLoading(false)
      setHasError(true)
    }
  }

  return (
    <div>
      <Container className="mt-4 pt-32">
        <Row>
          <Col md={2}></Col>

          <Col>
            <Postinput/>
            <GridLoader
              size={10}
              loading={isLoading}
              color="#70b5f9"
              css={loadingStyle}
            />

            {!isLoading &&
              !hasError &&
              posts
                .slice(0, 100)
                .map((post) => <Post key={post._id} post={post} />)}
          </Col>
          <Col md={3}></Col>
        </Row>
      </Container>
      <Footer />
    </div>
  )
}
