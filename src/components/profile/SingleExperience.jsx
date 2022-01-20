import React from "react"
import "./experience.css"
import { Pen, List } from "react-bootstrap-icons"
import { format, differenceInMonths } from "date-fns"
import {Modal, Button} from "react-bootstrap"
import { useState, useEffect } from "react"
import { useForm, Controller } from "react-hook-form";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-multi-date-picker";
import UploadImage from "./UploadImage"


export default function SingleExperience({ experience, showBorder }) {
  
  
  //modal
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
  const preLoadedValues =  {
      role: experience.role,
      company: experience.company,
      startDate: experience.startDate,
      endDate: experience.endDate || null,
      description: experience.description,
      area: experience.area,
  }


  const { register, handleSubmit, watch, control, formState: { errors } } = useForm({
    defaultValues: preLoadedValues
  }); 
  // const onSubmit = data => console.log(data);

  
   

  //console.log(watch("example")); // watch input value by passing the name of it
  
  //PUT HANDLESUBMIT
  const submitForm = async (data) => {
    try { 
      let response = await fetch(`https://striveschool-api.herokuapp.com/api/profile/61e5318873d5cb0015395a9f/experiences/${experience._id}`, { //:userId/experience
      method: 'PUT',
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
        let response = await fetch("https://striveschool-api.herokuapp.com/api/profile/61e5318873d5cb0015395a9f/experiences/"+experience._id, {/* +  */  //:userId/experience/:expId
        method: 'DELETE',
        
        headers: {
          "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWU1MzE4ODczZDVjYjAwMTUzOTVhOWYiLCJpYXQiOjE2NDI0MTAzNzYsImV4cCI6MTY0MzYxOTk3Nn0.qDjDBTYnXI7X3Y3eWLOaKSMaVRFITbDsAwrjjesIIMc",
          'Content-Type': 'application/json',
        }
      })
    console.log(response)
    if (response.ok) {
        alert('Experience was deleted')
        
        /* setregister({
            role: '',
            company: '',
            area: '',
            description: '',
            startDate: '',
            endDate: '',
        }) */
    } else {
        alert('There was a problem deleting your experience')
    }
   } catch (error) {
    console.log(error)
    }
    
    handleClose()
}

//upload pic function

/* const [picture,setPicture] = useState('')

const submitPicture = async (data, e) => {
  e.preventdefault()
  const formData = new FormData()
  formData.append(picture, data.picture[0])

  const res = await fetch(`https://striveschool-api.herokuapp.com/api/profile/61e5318873d5cb0015395a9f/experiences/${experience._id}/picture`, {
    method: "POST",
    body: formData
  }).then(res => res.json())
  alert(JSON.stringify(res))
}
 */
const onUploadImage = () => {
  setShow(false)
  
}






  return (
    <div>
      <div className="d-flex inline pt-3">
        <img src={experience.image} className="card-image ml-3"></img>
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
              <Pen style={{cursor:'pointer'}} onClick={handleShow}/>
              <Modal show={show} onHide={handleClose} >
              <Modal.Header  className="modal_add_experience justify-between-content" closeButton>
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
                      {...register("company", { required: true, minLength: 4 })}
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
                  <textarea id="description" name="description" className="modal_input" rows="3" {...register("description", {required:true, minLength: 4})} />
                  </div>
                  
                  <div className="form-group d-flex justify-content-between">
                    
                    <div className="d-flex flex-column ">
                      <label htmlFor="start">Start date:</label>
                      <Controller className="modal_input"
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
                            {errors && errors[name] && errors[name].type === "required" && (
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
                      <Controller className="modal_input"
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
                            
                          </>
                        )}
                      />
                      </div>
                    </div>
                  
                  {errors.exampleRequired && <span>This field is required</span>}
                  <Modal.Footer>
                    <Button className="modal_delete_button" variant="danger" onClick={DeleteExperience}>Delete</Button>
                   <input type="submit" value={"Save"} className="modal_save_button mt-3" onClick={handleClose} /> 
                   
                   </Modal.Footer>
                </form>

                
                 {/* <form onSubmit={submitPicture}>               
                
                
                <label htmlfor="file-updload" className=" mb-3"> */}
                <UploadImage
                  property="experience"
                  url={`https://striveschool-api.herokuapp.com/api/profile/61e5318873d5cb0015395a9f/experiences/${experience._id}/picture`}
                  onSuccess={onUploadImage}
                />
                      {/* 
                      <input type="file" value={picture}
                onChange={(e) =>
                  setPicture(
                    e.target.value,
                  )}
                      id="file-updload" name="experience_image"
                      accept="image/png, image/jpeg"/>
                      
                      

                </label>
                <input type="submit" value="Submit" /> */}

                
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
