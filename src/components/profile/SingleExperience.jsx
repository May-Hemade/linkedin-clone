import React from "react"
import "./experience.css"
import { Pen, List } from "react-bootstrap-icons"
import { format, differenceInMonths } from "date-fns"
import { Modal, Button } from "react-bootstrap"
import { useState, useEffect } from "react"
import { useForm, Controller, useRef } from "react-hook-form"
import "react-datepicker/dist/react-datepicker.css"
import DatePicker from "react-multi-date-picker"
import UploadImage from "./UploadImage"

export default function SingleExperience({
  experience,
  showBorder,
  getExperiences,
  username,
}) {
  const [, updateState] = React.useState()
  const forceUpdate = React.useCallback(() => updateState({}), [])
  //modal
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  //

  //years dif
  const getDuration = () => {
    const startDate = new Date(experience.startDate)
    const endDate =
      experience.endDate == null ? new Date() : new Date(experience.endDate)
    const months = differenceInMonths(endDate, startDate)

    const years = Math.floor(months / 12)
    const remaining = months % 12

    const yearsString =
      years > 0 ? (years > 1 ? `${years} years` : `${years} year`) : ""
    const monthsString =
      remaining > 0
        ? remaining > 1
          ? `${remaining} mos`
          : `${remaining} mo`
        : ""

    return `${yearsString} ${monthsString}`
  }

  const getStartEnd = () => {
    const startDate = new Date(experience.startDate)

    let startEnd = format(startDate, "MMM yyyy")

    if (experience.endDate != null) {
      const endDate = new Date(experience.endDate)
      startEnd += ` - ${format(endDate, "MMM yyyy")}`
    } else {
      startEnd += " - Present"
    }

    return startEnd
  }
  //

  //REACT FORM
  const preLoadedValues = {
    role: experience.role,
    company: experience.company,
    startDate: experience.startDate,
    endDate: experience.endDate || null,
    description: experience.description,
    area: experience.area,
  }

  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: preLoadedValues,
  })
  // const onSubmit = data => console.log(data);

  //console.log(watch("example")); // watch input value by passing the name of it

  /* const [reloadToggle,setReloadToggle] = (false) */
  const [reloadToggle, setReloadToggle] = useState(false)

  const toggle = () => setReloadToggle(!reloadToggle)

  //PUT HANDLESUBMIT
  const submitForm = async (data) => {
    try {
      let response = await fetch(
        `http://localhost:3001/profile/${username}/experiences/${experience._id}`,
        {
          //:userId/experience
          method: "PUT",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      console.log(response)
      if (response.ok) {
        alert("Experience was saved")
        getExperiences()
      } else {
        alert("There was a problem saving your experience")
      }
    } catch (error) {
      console.log(error)
    }
  }

  const onSubmit = (data, e) => {
    console.log(data)
    submitForm(data)
    toggle()
    forceUpdate()

    /* e.target.reset() */
  }
  //

  //Reset register when state is updated
  /* useEffect(() => {
  reset(register);
},[register])  */

  //Delete button function
  const DeleteExperience = async () => {
    try {
      let response = await fetch(
        `http://localhost:3001/profile/${username}/experiences/${experience._id}`,
        {
          method: "DELETE",

          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      console.log(response)
      if (response.ok) {
        alert("Experience was deleted")
        getExperiences()
      } else {
        alert("There was a problem deleting your experience")
      }
    } catch (error) {
      console.log(error)
    }

    handleClose()
    toggle()
    forceUpdate()
  }

  const onUploadImage = () => {
    setShow(false)
  }

  useEffect(() => {}, [reloadToggle, experience])

  useEffect(() => {
    register()
    // eslint-disable-next-line
  }, [])

  return (
    <div>
      <div className="d-flex inline pt-3">
        {experience.image && (
          <img src={experience.image} className="card-image ml-3"></img>
        )}
        <div
          className={`experience-container w-100 ml-4 ${
            showBorder ? "border-experience" : ""
          }`}
        >
          <a href="#" className="sub-title ">
            <h3 className="title">{experience.role}</h3>
            <div className="sub-title">
              <span> {experience.company}</span>
            </div>
            <div className="sub-title">
              <span>{getStartEnd()}</span>
              <span> . </span>
              <span>{getDuration()}</span>
            </div>
            <div className="sub-title">
              <span>{experience.area}</span>
            </div>
          </a>
          <div className="body mt-2 ">
            <p>{experience.info}</p>
          </div>
          <div className="p-2 experience-icons">
            <div className="mr-2 linkedin-icon">
              <Pen style={{ cursor: "pointer" }} onClick={handleShow} />
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
                        name="role"
                        className="modal_input"
                      />
                    </div>

                    <div className="form-group d-flex flex-column">
                      <label htmlFor="company">Company*</label>
                      <input
                        {...register("company", {
                          required: true,
                          minLength: 4,
                        })}
                        id="company"
                        name="company"
                        className="modal_input"
                      />
                    </div>

                    <div className="form-group d-flex flex-column">
                      <label htmlFor="area">Area</label>

                      <input
                        {...register("area", { required: true, minLength: 2 })}
                        id="area"
                        name="area"
                        className="modal_input"
                      />
                    </div>

                    <div className="form-group d-flex flex-column">
                      <label htmlfor="description">Description</label>
                      <textarea
                        id="description"
                        name="description"
                        className="modal_input"
                        rows="3"
                        {...register("description", {
                          required: true,
                          minLength: 4,
                        })}
                      />
                    </div>

                    <div className="form-group d-flex justify-content-between">
                      <div className="d-flex flex-column ">
                        <label htmlFor="start">Start date:</label>
                        <Controller
                          className="modal_input"
                          control={control}
                          name="startDate"
                          rules={{ required: true }}
                          render={({
                            field: { onChange, name, value },
                            fieldState: { invalid, isDirty },
                            formState: { errors },
                          }) => (
                            <>
                              <DatePicker
                                value={value || ""}
                                onChange={(startDate) => {
                                  onChange(startDate?.isValid ? startDate : "")
                                }}
                                format={"YYYY/MM/DD"}
                              />
                              {errors &&
                                errors[name] &&
                                errors[name].type === "required" && (
                                  <span>your error message !</span>
                                )}
                            </>
                          )}
                        />
                      </div>
                      <div className="d-flex flex-column">
                        <label htmlFor="end">End date:</label>
                        <Controller
                          className="modal_input"
                          control={control}
                          name="endDate"
                          rules={{ required: true }}
                          render={({
                            field: { onChange, name, value },
                            fieldState: { invalid, isDirty },
                            formState: { errors },
                          }) => (
                            <>
                              <DatePicker
                                value={value || ""}
                                onChange={(endDate) => {
                                  onChange(endDate?.isValid ? endDate : "")
                                }}
                                format={"yyyy/MM/dd"}
                              />
                            </>
                          )}
                        />
                      </div>
                    </div>

                    {errors.exampleRequired && (
                      <span>This field is required</span>
                    )}
                    <Modal.Footer>
                      <Button
                        className="modal_delete_button"
                        variant="danger"
                        onClick={DeleteExperience}
                      >
                        Delete
                      </Button>
                      <input
                        type="submit"
                        value={"Save"}
                        className="modal_save_button mt-3"
                        onClick={handleClose}
                      />
                    </Modal.Footer>
                  </form>
                  <UploadImage
                    property="image"
                    url={`http://localhost:3001/profile/${username}/experiences/${experience._id}/picture`}
                    onSuccess={onUploadImage}
                  />
                </Modal.Body>
              </Modal>
            </div>
            <div className="linkedin-icon">
              <List />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
