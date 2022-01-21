import { Container, Image, Button } from "react-bootstrap"
import "./CentralAvatar.css"
import { BsCameraFill } from "react-icons/bs"
import { Pen } from "react-bootstrap-icons"
import React, { useEffect, useState } from "react"
import UploadImage from "./profile/UploadImage"
import { useForm } from "react-hook-form"

import { Form, FormControl, InputGroup, Modal } from "react-bootstrap"

const CentralAvatar = (/* { profile } */) => {
  const [profile, setProfile] = useState(null)

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const [show, setShow] = useState(false)
  const [hasError, setHasError] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const fetchData = async () => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/me",
        {
          method: "GET",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWU1MzE4ODczZDVjYjAwMTUzOTVhOWYiLCJpYXQiOjE2NDI0MTAzNzYsImV4cCI6MTY0MzYxOTk3Nn0.qDjDBTYnXI7X3Y3eWLOaKSMaVRFITbDsAwrjjesIIMc",
            "Content-type": "application/json",
          },
        }
      );
      if (response.ok) {
        let data = await response.json()
        console.log("DATA", data)
        // now I want to safely store these details in my state!
        setProfile(data)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  const onUploadImage = () => {
    setShow(false)
    fetchData()
  }
  return (
    <Container className="central_avatar p-0">
      <div className="imagess">
        <Button className="edit_image_button align-middle" variant="light">
          <BsCameraFill className="align-baseline text-start" />
        </Button>
        <Image
          src="https://cdn.pixabay.com/photo/2016/06/02/02/33/triangles-1430105_960_720.png"
          rounded
          className="background_avatar"
        />
        {profile && (
          <Image
            onClick={() => setShow(true)}
            src={profile.image}
            roundedCircle
            alt=""
            className="avatar"
          />
        )}

        <Modal
          show={show}
          onHide={() => setShow(false)}
          aria-labelledby="example-custom-modal-styling-title"
        >
          <Modal.Header closeButton className="linkedin-modal">
            <Modal.Title
              id="example-custom-modal-styling-title"
              className="modal-dropdown"
            >
              Upload Image
            </Modal.Title>
          </Modal.Header>
          {profile && (
            <UploadImage
              property="profile"
              url={`https://striveschool-api.herokuapp.com/api/profile/${profile._id}/picture`}
              onSuccess={onUploadImage}
            />
          )}
        </Modal>
      </div>
      <div className="d-flex">
        {profile && (
          <div className="central_avatar_info text-left w-50 ml-4">
            <h4 className="text-white">
              {profile.name}
              {profile.surname}
            </h4>
            <h6 className="text-white">{profile.title}</h6>
            <span className="central_avatar_city mr-1">
              <small>{profile.area}</small>
            </span>
            <span className="central_avatar_city_dot align-top text-secondary text-secondary">
              &bull;
            </span>
            <span>
              <small>
                <a href="" className="ml-1 central_avatar_contact">
                  {profile.email}
                </a>
              </small>
            </span>
            <p className="contacts_central mt-3">
              <small>{profile.bio}</small>
            </p>
          </div>
        )}
        <div className="schools_container ml-auto  text-light d-flex justify-content-between">
          <div className="schools ">
            <Image
              className="schools_logos"
              src="https://i.ibb.co/VmRnRdG/106021628-677337352815317-3039720649727959783-n.png"
            />{" "}
            <span> Strive School </span>
          </div>
        </div>
        <div className="linkedin-icon ml-auto mr-4">
          <Pen className="" />
        </div>
      </div>
      <div className="central_avatar_options text-left ml-4 pb-4">
        <Button className="menu_button_open" variant=" text-dark mr-3">
          Open to
        </Button>
        <Button className="menu_button" variant="outline-light mr-3">
          Add Section
        </Button>
        <Button className="menu_button" variant="outline-light mr-3">
          More
        </Button>
      </div>
      <div>{/*  <h1 className="text-light">HERE GOES THE CAROUSEL</h1> */}</div>
    </Container>
  )
}

export default CentralAvatar
