import React from "react"
import {Modal, Button} from "react-bootstrap"
import { Plus, ChevronDown } from "react-bootstrap-icons"
import SingleExperience from "./SingleExperience"
import { useState, useEffect } from "react"
import './experience.css'
import { useForm } from "react-hook-form";

export default function Experience() {
  
  
  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  

  //REACT FORM
  const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
  /* const onSubmit = data => console.log(data); */

  console.log(watch("example")); // watch input value by passing the name of it   
  //
  /* const [experience, setExperience] = useState(null) */


  //POST HANDLESUBMIT
  const onSubmit = async (e, data) => {
    console.log(data);
     
    e.preventDefault()
    try { 
      let response = await fetch("https://striveschool-api.herokuapp.com/api/profile/:61e566c373d5cb0015395aa6/experiences", { //:userId/experience
      method: 'POST',
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
useEffect(() => {
  reset(register);
},[register]) 
  
  return (
    <div>
      <div className="linkedin-card-top pt-3 pb-4">
        <div className="linkedin-card-header d-flex justify-content-between">
          <div className="linkedin-card-header ml-2 linkedin-card-header pr-2 pl-2 ">
            Experience
          </div>
          <div className="linkedin-icon display-3 mr-2">
            <Plus style={{cursor:'pointer'}} onClick={handleShow}> </Plus>
            <Modal show={show} onHide={handleClose} >
              <Modal.Header  className="modal_add_experience justify-between-content" closeButton>
                <Modal.Title>Add experience</Modal.Title>
                
              </Modal.Header>
              <Modal.Body className="modal_add_experience">
                <form onSubmit={handleSubmit(onSubmit)}>
                  {/* register your input into the hook by invoking the "register" function */}
                  
                  <div className="form-group d-flex flex-column">
                  <label for="role">Role*</label>
                  <input id="role" placeholder="role..." className="modal_input" {...register("role", {required:true, minLength: 4})} />
                  </div>

                  <div className="form-group d-flex flex-column">
                  <label for="company">Company*</label>
                  <input id="company" placeholder="company..." className="modal_input" {...register("company", {required:true, minLength: 4})} />
                  </div>
                  
                  <div className="form-group d-flex flex-column">
                  <label for="area">Area</label>
                  <input id="area" placeholder="area..." className="modal_input" {...register("area", {required:true, minLength: 2})} />
                  </div>

                  <div className="form-group d-flex flex-column">
                  <label for="description">Description</label>
                  <textarea id="area" placeholder="description..." className="modal_input" rows="3" {...register("description", {required:true, minLength: 4})} />
                  </div>
                  
                <div className="form-group d-flex flex-column">
                  <label for="start">Start date:</label>

                  <input type="date" id="start" name="trip-start" className="modal_input"
                        placeholder="yyyy-MM-dd"
                        /* min="2018-01-01" max="2018-12-31" */ placeholder="test" {...register("startDate", {required:true})}/>
                  </div>
                  {/* <div className="form-check">
                    <input type="checkbox" className="form-check-input modal_input" id="exampleCheck1"/>
                    <label className="form-check-label" for="exampleCheck1">I am currently working in this role</label>
                  </div> */}
                  
                  <div className="form-group d-flex flex-column mt-2">
                    <label for="end">End date:</label>

                    <input type="date" id="end" name="trip-start" className="modal_input"
                          placeholder="yyyy-MM-dd" placeholder="test" {...register("endDate")}
                          /* min="2018-01-01" max="2018-12-31" *//>
                  </div>
                  

                  



                  
                  
                  
                  {/* include validation with required or other standard HTML validation rules */}
                  {/* <input {...register("exampleRequired", { required: true })} /> */}
                  {/* errors will return when field validation fails  */}
                  {errors.exampleRequired && <span>This field is required</span>}
                  <Modal.Footer>
                   <input type="submit" value={"Save"} className="modal_save_button mt-3" onClick={handleClose, ()=> reset} /> 
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
        <SingleExperience
          experience={{
            title: "Business Development Manager",
            image: "https://place-puppy.com/105x100",
            time: "full time",
            company: "CodeScraper",
            duration: "Apr 2019 - Present",
            years: "2 yrs 10 mos",
            location: "Dubai, United Arab Emirates",
            info: `✯ Creator of Know.me SOS bracelet.\n✯ Product Owner from inception to release\n✯ Market research and lead generation \n✯ Partnership opportunities to expand the business\nFor inquiries about our product: info@codescraper.com `,
          }}
          showBorder={true}
        ></SingleExperience>
        <SingleExperience
          experience={{
            title: "Business Development Manager",
            image: "https://place-puppy.com/100x102",
            time: "full time",
            company: "TeepeeTale",
            duration: "Apr 2019 - Present",
            years: "2 yrs 10 mos",
            location: "Dubai, United Arab Emirates",
            info: `✯ Handle social media campaigns
✯ Create deals and offers
✯ Communicate with leads and customers
✯ Source products and services`,
          }}
          showBorder={false}
        ></SingleExperience>
        <span className="mt-4 ml-2 more-experiences">
          Show more experiences <ChevronDown />
        </span>
      </div>
    </div>
  )
}
