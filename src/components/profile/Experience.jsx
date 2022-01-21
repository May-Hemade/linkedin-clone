import React, { useEffect, useState } from "react"
import { Modal, Button } from "react-bootstrap"
import { Plus, ChevronDown } from "react-bootstrap-icons"
import SingleExperience from "./SingleExperience"
import { useForm, Controller, ErrorMessage } from "react-hook-form"
import ReactDatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";
import Cleave from "cleave.js/dist/cleave-react";
import DatePicker from "react-multi-date-picker";

export default function Experience() {
  const [experiences, setExperiences] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [hasError, setHasError] = useState(false)

  

  
  /* useEffect(() => {

  }) */

  const getExperiences = async () => {
    setIsLoading(true)
    try {
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
    } catch (e) {
      console.log(e)
    }
  }

  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  //REACT FORM
  const {
    register,
    handleSubmit,

    watch, reset, control,
    formState: { errors },
  } = useForm()

  console.log(watch("startDate"));
  console.log(errors)

  const [startDate, setStarDate] = useState(null)

  const dateReceived = watch("startDate");
    //POST HANDLESUBMIT
  
  
    const submitForm = async (data) => {
      try { 
        let response = await fetch("https://striveschool-api.herokuapp.com/api/profile/61e5318873d5cb0015395a9f/experiences", { //:userId/experience
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWU1MzE4ODczZDVjYjAwMTUzOTVhOWYiLCJpYXQiOjE2NDI0MTAzNzYsImV4cCI6MTY0MzYxOTk3Nn0.qDjDBTYnXI7X3Y3eWLOaKSMaVRFITbDsAwrjjesIIMc",
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
    getExperiences()
  }
  //

  useEffect((data) => {
    getExperiences();
  }, []);

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
                <form onSubmit={handleSubmit(onSubmit)}>
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

                  <div className="form-group d-flex justify-content-between">
                    <div className="d-flex flex-column ">
                      <label htmlFor="start">Start date:</label>
                      <Controller
                        
                        className="modal_input"
                        control={control}
                        name="startDate"
                        rules={{ required: true }} //optional
                        render={({
                          field: { onChange, name, value },
                          fieldState: { invalid, isDirty }, //optional
                          formState: { errors }, //optional, but necessary if you want to show an error message
                        }) => (
                          <>
                            <DatePicker
                              value={value || ""}
                              onChange={(startDate) => {
                                onChange(startDate?.isValid ? startDate : "");
                              }}
                              format={"YYYY/MM/DD"}
                            />
                            {errors &&
                              errors[name] &&
                              errors[name].type === "required" && (
                                //if you want to show an error message
                                <span>your error message !</span>
                              )}
                          </>
                        )}
                      />
                      {/* < errors={errors} name="startDate" as="p" /> */}
                    </div>
                    <div className="d-flex flex-column">
                      <label htmlFor="end">End date:</label>
                      <Controller
                        className="modal_input"
                        style={{ color: "black" }}
                        control={control}
                        name="endDate"
                        rules={{ required: true }} //optional
                        render={({
                          field: { onChange, name, value },
                          fieldState: { invalid, isDirty }, //optional
                          formState: { errors }, //optional, but necessary if you want to show an error message
                        }) => (
                          <>
                            <DatePicker
                              value={value || ""}
                              onChange={(endDate) => {
                                onChange(endDate?.isValid ? endDate : "");
                              }}
                              format={"yyyy/MM/dd"}
                            />
                            {errors &&
                              errors[name] &&
                              errors[name].type === "required" && (
                                //if you want to show an error message
                                <span>your error message !</span>
                              )}
                          </>
                        )}
                      />
                    </div>
                  </div>

                  {/* <div className="form-group d-flex flex-column mt-2">
                    <label htmlFor="end">End date:</label>

                    <input
                    {...register("endDate")}
                      type="date"
                      id="end"
                      name="trip-start"
                      className="modal_input"
                      placeholder="yyyy-MM-dd"
                     
                      
                    />
                  </div> */}

                  {/* include validation with required or other standard HTML validation rules */}
                  {/* <input {...register("exampleRequired", { required: true })} /> */}
                  {/* errors will return when field validation fails  */}

                  <label
                    htmlfor="file-upload"
                    className="modal_save_button mb-3"
                  >
                    <input
                      type="file"
                      id="file-upload"
                      name="experience_image"
                      accept="image/png, image/jpeg"
                    />
                    + Add media
                  </label>

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
              getExperiences={getExperiences}
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
  );
  }