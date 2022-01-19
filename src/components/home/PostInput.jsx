import { Container, Button, Form, InputGroup, FormControl } from "react-bootstrap"
import { BsFillPenFill } from "react-icons/bs";
import "./Postinput.css"
import { useState } from 'react'

const Postinput = () => {
    
    const [postComment, setPostComment] = useState('')
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        try { 
            let response = await fetch("https://striveschool-api.herokuapp.com/api/posts/", { //:userId/experience
            method: 'POST',
            body: JSON.stringify(postComment),
            headers: {
              "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWU1NjZjMzczZDVjYjAwMTUzOTVhYTYiLCJpYXQiOjE2NDI1MjM4ODMsImV4cCI6MTY0MzczMzQ4M30.E1_8l22F0P-RytaWCJNQ3thneG9O_OwfEs96qyYCt3I",
              'Content-Type': 'application/json',
            }
        })
        console.log(response)
        if (response.ok) {
            alert('Your post was send')
            setPostComment('')
            
        } else {
            alert('There was a problem sending your post')
        }
      } catch (error) {
        console.log(error)
      }
    }

    return (
        <Container className="postinput_container">
            
            <Form className="py-4" onSubmit={handleSubmit}>
            {/* <input id ="postInputInput" className='postinput_input' type="text" />
            <button className='postinput_send_button' type="submit">Send</button> */}
            <InputGroup className="mb-2 input-group-lg">
                <InputGroup.Prepend>
                <InputGroup.Text required value={postComment} onChange={(e)=> {setPostComment(e.target.value)}}><BsFillPenFill/></InputGroup.Text>
                </InputGroup.Prepend>
                    <  FormControl  id="inlineFormInputGroup"  />
                <InputGroup.Append>
                <Button className='postinput_submit' variant="outline-dark" type="submit">Post</Button>
                </InputGroup.Append>
            </InputGroup>
            
            {/* <div className="input-group input-group-lg">
                <div className="input-group-prepend">
                    <span className="input-group-text"><BsFillPenFill/></span>
                </div>
                
                <input required value={postComment} onChange={(e)=> {setPostComment(e.target.value)}} type="text" className="form-control" aria-label="Dollar amount (with dot and two decimal places)"/>
                
                <div className="input-group-append">
                    <Button className='postinput_submit' variant="outline-dark" type="submit">Post</Button>
                </div>
            </div> */}
            </Form>
            
        </Container>
    )
}

export default Postinput