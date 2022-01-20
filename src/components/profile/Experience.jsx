import React, { useEffect, useState } from "react"
import { Modal, Button, Form, FormControl, InputGroup } from "react-bootstrap"
import { Plus, ChevronDown } from "react-bootstrap-icons"
import SingleExperience from "./SingleExperience"
import { useForm } from "react-hook-form"


export default function Experience() {
  const [experiences, setExperiences] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    getExperiences()
  }, [])

  const getExperiences = async () => {
    setIsLoading(true)

    const response = await fetch(
      "https://striveschool-api.herokuapp.com/api/profile/61e5318873d5cb0015395a9f/experiences",
      {
        method: "GET",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWU1MzE4ODczZDVjYjAwMTUzOTVhOWYiLCJpYXQiOjE2NDI0MTAzNzYsImV4cCI6MTY0MzYxOTk3Nn0.qDjDBTYnXI7X3Y3eWLOaKSMaVRFITbDsAwrjjesIIMc",
          "Content-Type": "application/json",
        },
      }
    )

    if (response.ok) {
      const exp = await response.json()
      const sortedExperiences = exp.sort(
        (a, b) => new Date(b.startDate) - new Date(a.startDate)
      )
      setExperiences(sortedExperiences)
      setIsLoading(false)
    } else {
      setIsLoading(false)
      setHasError(true)
    }
  }

  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  //REACT FORM
  const {
    register,
    handleSubmit,
    watch, reset,
    formState: { errors },
  } = useForm()

  console.log(watch("startDate"));
  console.log(errors)

    //POST HANDLESUBMIT
  const submitForm = async (data) => {
      try { 
        let response = await fetch("https://striveschool-api.herokuapp.com/api/profile/61e566c373d5cb0015395aa6/experiences", { //:userId/experience
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWU1NjZjMzczZDVjYjAwMTUzOTVhYTYiLCJpYXQiOjE2NDI1MjM4ODMsImV4cCI6MTY0MzczMzQ4M30.E1_8l22F0P-RytaWCJNQ3thneG9O_OwfEs96qyYCt3I",
          'Content-Type': 'application/json',
        }
    })
    console.log(response)
    if (response.ok) {
        alert('Experience was saved')
    } else {
        alert('There was a problem saving your experience')
    }
  } catch (error) {
    console.log(error)
  }
  }

  const onSubmit = (data, e) => {
    console.log(data)
    submitForm(data)
    e.target.reset()
  }
  //

  return (
    <div>
      <div className="linkedin-card-top pt-3 pb-4">
        <div className="linkedin-card-header d-flex justify-content-between">
          <div className="linkedin-card-header ml-2 linkedin-card-header pr-2 pl-2 ">
            Experience
          </div>
          <div className="linkedin-icon display-3 mr-2">
            <Plus style={{ cursor: "pointer" }} onClick={handleShow} />
            <Modal show={show} onHide={handleClose}>
              <Modal.Header
                className="modal_add_experience justify-between-content"
                closeButton
              >
                <Modal.Title>Add experience</Modal.Title>
              </Modal.Header>
              <Modal.Body className="modal_add_experience">
                <form
                  onSubmit={handleSubmit(onSubmit)}>
                  <div className="form-group d-flex flex-column">
                    <label htmlFor="role">Role*</label>
                    <input
                      {...register("role", { required: true, minLength: 4 })}
                      id="role"
                      placeholder="role..."
                      className="modal_input"
                      
                    />
                  </div>

                  <div className="form-group d-flex flex-column">
                    <label htmlFor="company">Company*</label>
                    <input
                      {...register("company", { required: true, minLength: 4 })}
                      id="company"
                      placeholder="company..."
                      className="modal_input"
                      
                    />
                  </div>

                  <div className="form-group d-flex flex-column">
                    <label htmlFor="area">Area</label>
                    <input
                      {...register("area", { required: true, minLength: 2 })}
                      id="area"
                      placeholder="area..."
                      className="modal_input"
                      
                    />
                  </div>

                  <div className="form-group d-flex flex-column">
                    <label htmlFor="description">Description</label>
                    <textarea
                     {...register("description", {
                      required: true,
                      minLength: 4,
                    })}
                      id="description"
                      placeholder="description..."
                      className="modal_input"
                      rows="3"
                      
                    />
                  </div>

                  <div className="form-group d-flex flex-column">
                    <label htmlFor="start">Start date:</label>

                    <input
                    {...register("startDate", { required: true })}
                      type="date"
                      id="start"
                      name="trip-start"
                      className="modal_input"
                      placeholder="yyyy-MM-dd"
                      
                    />
                  </div>
                  

                  <div className="form-group d-flex flex-column mt-2">
                    <label htmlFor="end">End date:</label>

                    <input
                    {...register("endDate")}
                      type="date"
                      id="end"
                      name="trip-start"
                      className="modal_input"
                      placeholder="yyyy-MM-dd"
                     
                      /* min="2018-01-01" max="2018-12-31" */
                    />
                  </div>

                  {/* include validation with required or other standard HTML validation rules */}
                  {/* <input {...register("exampleRequired", { required: true })} /> */}
                  {/* errors will return when field validation fails  */}
                  
                  
                  <Modal.Footer>
                    <input
                      type="submit"
                      value={"Save"}
                      className="modal_save_button mt-3"
                      onClick={handleClose}
                    />
                    
                  </Modal.Footer>
                </form>
              </Modal.Body>
              {/* <Modal.Footer>
                
                <Button variant="primary" type="submit" onClick={handleClose}>
                  Save
                </Button>
              </Modal.Footer> */}
            </Modal>
          </div>
        </div>

        {!isLoading &&
          !hasError &&
          experiences.map((experience, index) => (
            <SingleExperience
              key={experience._id}
              experience={experience}
              showBorder={index == experiences.length - 1 ? false : true}
            ></SingleExperience>
          ))}

        <span className="mt-4 ml-2 more-experiences">
          Show more experiences <ChevronDown />
        </span>
      </div>
    </div>
  )
}
