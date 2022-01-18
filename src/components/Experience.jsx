import React, { useEffect, useState } from "react"
import { Modal, Button } from "react-bootstrap"
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
    watch,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => console.log(data)

  console.log(watch("example")) // watch input value by passing the name of it

  //

  return (
    <div>
      <div className="linkedin-card-top pt-3 pb-4">
        <div className="linkedin-card-header d-flex justify-content-between">
          <div className="linkedin-card-header ml-2 linkedin-card-header pr-2 pl-2 ">
            Experience
          </div>
          <div className="linkedin-icon display-3 mr-2">
            <Plus style={{ cursor: "pointer" }} onClick={handleShow}>
              {" "}
            </Plus>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header
                className="modal_add_experience justify-between-content"
                closeButton
              >
                <Modal.Title>Add experience</Modal.Title>
              </Modal.Header>
              <Modal.Body className="modal_add_experience">
                <form
                  onSubmit={handleSubmit((data) => {
                    console.log(data)
                  })}
                >
                  {/* register your input into the hook by invoking the "register" function */}

                  <div className="form-group d-flex flex-column">
                    <label for="role">Role*</label>
                    <input
                      id="role"
                      defaultValue="role..."
                      className="modal_input"
                      {...register("role", { required: true, minLength: 4 })}
                    />
                  </div>

                  <div className="form-group d-flex flex-column">
                    <label for="company">Company*</label>
                    <input
                      id="company"
                      defaultValue="company..."
                      className="modal_input"
                      {...register("company", { required: true, minLength: 4 })}
                    />
                  </div>

                  <div className="form-group d-flex flex-column">
                    <label for="area">Area</label>
                    <input
                      id="area"
                      defaultValue="area..."
                      className="modal_input"
                      {...register("area", { required: true, minLength: 2 })}
                    />
                  </div>

                  <div className="form-group d-flex flex-column">
                    <label for="description">Description</label>
                    <textarea
                      id="area"
                      defaultValue="description..."
                      className="modal_input"
                      rows="3"
                      {...register("description", {
                        required: true,
                        minLength: 4,
                      })}
                    />
                  </div>

                  <div className="form-group d-flex flex-column">
                    <label for="start">Start date:</label>

                    <input
                      type="date"
                      id="start"
                      name="trip-start"
                      className="modal_input"
                      value="yyyy-MM-dd"
                      /* min="2018-01-01" max="2018-12-31" */ defaultValue="test"
                      {...register("startDate", { required: true })}
                    />
                  </div>
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input modal_input"
                      id="exampleCheck1"
                    />
                    <label className="form-check-label" for="exampleCheck1">
                      I am currently working in this role
                    </label>
                  </div>

                  <div className="form-group d-flex flex-column mt-2">
                    <label for="end">End date:</label>

                    <input
                      type="date"
                      id="end"
                      name="trip-start"
                      className="modal_input"
                      value="yyyy-MM-dd"
                      defaultValue="test"
                      {...register("endDate")}
                      /* min="2018-01-01" max="2018-12-31" */
                    />
                  </div>

                  {/* include validation with required or other standard HTML validation rules */}
                  {/* <input {...register("exampleRequired", { required: true })} /> */}
                  {/* errors will return when field validation fails  */}
                  {errors.exampleRequired && (
                    <span>This field is required</span>
                  )}
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
