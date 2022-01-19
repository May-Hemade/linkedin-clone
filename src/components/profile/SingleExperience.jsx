import React from "react"
import "./experience.css"
import { Pen, List } from "react-bootstrap-icons"
import { format, differenceInMonths } from "date-fns"
import {Modal, Button} from "react-bootstrap"
import { useState, useEffect } from "react"
import { useForm } from "react-hook-form";

export default function SingleExperience({ experience, showBorder }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  

  //REACT FORM
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  /* const onSubmit = data => console.log(data); */

  console.log(watch("example")); // watch input value by passing the name of it
  
 
  
  //
  

//Reset register when state is updated 
/* useEffect(() => {
  reset(register);
},[register])  */
  
//Delete button function

  
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

  
  //REACT FORM

  /* const onSubmit = data => console.log(data); */

  console.log(watch("example")); // watch input value by passing the name of it
  
 
  
  //
  //PUT HANDLESUBMIT
  const onSubmit = async (e, data) => {
    console.log(data);
    e.preventDefault()
    try { 
      let response = await fetch("https://striveschool-api.herokuapp.com/api/profile/:61e566c373d5cb0015395aa6/experiences", { //:userId/experience
      method: 'PUT',
      body: JSON.stringify(register),
      headers: {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWU1NjZjMzczZDVjYjAwMTUzOTVhYTYiLCJpYXQiOjE2NDI1MjM4ODMsImV4cCI6MTY0MzczMzQ4M30.E1_8l22F0P-RytaWCJNQ3thneG9O_OwfEs96qyYCt3I",
        'Content-Type': 'application/json',
      }
  })
  console.log(response)
  if (response.ok) {
      alert('Experience was saved')
      
      /* setregister({
          role: '',
          company: '',
          area: '',
          description: '',
          startDate: '',
          endDate: '',
      }) */
  } else {
      alert('There was a problem saving your experience')
  }
} catch (error) {
  console.log(error)
}
}

//Reset register when state is updated 
/* useEffect(() => {
  reset(register);
},[register])  */
  
//Delete button function
const DeleteExperience = async () => {
      try { 
        let response = await fetch("https://striveschool-api.herokuapp.com/api/profile/:userId/experiences/:expId" /* + {experience._id} */, { //:userId/experience/:expId
        method: 'DELETE',
        body: JSON.stringify(register),
        headers: {
          "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWU1NjZjMzczZDVjYjAwMTUzOTVhYTYiLCJpYXQiOjE2NDI1MjM4ODMsImV4cCI6MTY0MzczMzQ4M30.E1_8l22F0P-RytaWCJNQ3thneG9O_OwfEs96qyYCt3I",
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
                  {/* register your input into the hook by invoking the "register" function */}
                  
                  <div className="form-group d-flex flex-column">
                  <label for="role">Role*</label>
                  <input id="role" value={experience.title} /* placeholder="role..." */ className="modal_input" {...register("role", {required:true, minLength: 4})} />
                  </div>

                  <div className="form-group d-flex flex-column">
                  <label for="company">Company*</label>
                  <input id="company" value={experience.company} /* placeholder="company..." */ className="modal_input" {...register("company", {required:true, minLength: 4})} />
                  </div>
                  
                  <div className="form-group d-flex flex-column">
                  <label for="area">Area</label>
                  <input id="area" value={experience.area} /* placeholder="area..." */ className="modal_input" {...register("area", {required:true, minLength: 2})} />
                  </div>

                  <div className="form-group d-flex flex-column">
                  <label for="description">Description</label>
                  <textarea id="description" value={experience.description} /* placeholder="description..." */ className="modal_input" rows="3" {...register("description", {required:true, minLength: 4})} />
                  </div>
                  
                <div className="form-group d-flex flex-column">
                  <label for="start">Start date:</label>

                  <input type="date" id="start" name="trip-start" className="modal_input"
                        placeholder="yyyy-MM-dd"
                        /* min="2018-01-01" max="2018-12-31" */ value={experience.startDate} /* placeholder="test" */ {...register("startDate", {required:true})}/>
                  </div>
                  {/* <div className="form-check">
                    <input type="checkbox" className="form-check-input modal_input" id="exampleCheck1"/>
                    <label className="form-check-label" for="exampleCheck1">I am currently working in this role</label>
                  </div> */}
                  
                  <div className="form-group d-flex flex-column mt-2">
                    <label for="end">End date:</label>

                    <input type="date" id="end" name="trip-start" className="modal_input"
                          placeholder="yyyy-MM-dd" value={experience.endDate} /* placeholder="test" */ {...register("endDate")}
                          /* min="2018-01-01" max="2018-12-31" *//>
                  </div>
                  

                  



                  
                  
                  
                  {/* include validation with required or other standard HTML validation rules */}
                  {/* <input {...register("exampleRequired", { required: true })} /> */}
                  {/* errors will return when field validation fails  */}
                  {errors.exampleRequired && <span>This field is required</span>}
                  <Modal.Footer>
                    <Button className="modal_delete_button" variant="danger" onClick={DeleteExperience}>Delete</Button>
                   <input type="submit" value={"Save"} className="modal_save_button mt-3" onClick={handleClose} /> 
                   
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
            <div className="linkedin-icon">
              <List />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
