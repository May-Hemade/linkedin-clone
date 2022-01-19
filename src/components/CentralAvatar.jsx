import { Container, Image, Button } from "react-bootstrap"
import "./CentralAvatar.css"
import { BsCameraFill } from "react-icons/bs";
import { Pen } from "react-bootstrap-icons"
import React, { useEffect, useState } from 'react'


const CentralAvatar = (/* { profile } */) => {
    
    const [profile,setProfile] = useState(null)
    
    
    useEffect(()=>{
        const fetchData = async () => {
            try {
                let response= await fetch("https://striveschool-api.herokuapp.com/api/profile/me", 
                {
                    "method": "GET",
                    "headers":
                    {
                        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWU1NjZjMzczZDVjYjAwMTUzOTVhYTYiLCJpYXQiOjE2NDI1MjM4ODMsImV4cCI6MTY0MzczMzQ4M30.E1_8l22F0P-RytaWCJNQ3thneG9O_OwfEs96qyYCt3I",
                        "Content-type": "application/json",
                    }
                })  
                if (response.ok) {
                    let data = await response.json()
                    console.log('DATA', data)
                    // now I want to safely store these details in my state!
                    setProfile(data)
                }
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
    }, [])
    
    return (
        <Container className="central_avatar p-0">
            <div className="imagess">
            <Button className="edit_image_button align-middle" variant="light"> <BsCameraFill className="align-baseline text-start"/> </Button>
            <Image src="https://cdn.pixabay.com/photo/2016/06/02/02/33/triangles-1430105_960_720.png" rounded  className="background_avatar"/>
            <Image src="https://place-puppy.com/300x300" roundedCircle alt="" className="avatar"/>
            </div>
            <div className="d-flex">
                {
                    profile && (
                <div className="central_avatar_info text-left  ml-4">
                    <h4 className="text-white">
                        {profile.name}{profile.surname}
                    </h4>
                    <h6 className="text-white">
                        {profile.title}
                    </h6>
                    <span className="central_avatar_city mr-1">
                        <small>{profile.area}</small>
                    </span>
                    <span className="central_avatar_city_dot align-top text-secondary text-secondary">
                    &bull;
                    </span>
                    <span>
                        <small><a href="" className="ml-1 central_avatar_contact">{profile.email}</a></small>
                    </span>
                    <p className="contacts_central mt-3">
                        <small>{profile.bio}</small>
                    </p>
                </div>
                    )
                }
                <div className="schools_container ml-auto  text-light d-flex justify-content-between">
                    
                    <div className="schools " >
                    <Image className="schools_logos" src="https://i.ibb.co/VmRnRdG/106021628-677337352815317-3039720649727959783-n.png"/> <span> Strive School </span>
                    </div>
                    
                </div><div className="linkedin-icon ml-auto mr-4">
                        <Pen className="" />
                    </div>
            </div>
            <div className="central_avatar_options text-left ml-4 pb-4">
                <Button className="menu_button_open" variant=" text-dark mr-3">Open to</Button>
                <Button className="menu_button" variant="outline-light mr-3">Add Section</Button>    
                <Button className="menu_button" variant="outline-light mr-3">More</Button>
                
            </div>
            <div>
               {/*  <h1 className="text-light">HERE GOES THE CAROUSEL</h1> */}
            </div>



        </Container>
    )
}

export default CentralAvatar