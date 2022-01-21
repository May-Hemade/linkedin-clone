import { Container, Button, Form,InputGroup, FormControl } from "react-bootstrap"
import { BsFillPenFill } from "react-icons/bs";
import "./Postinput.css"
import { useState } from 'react'

const Postinput = () => {
    
    const [postComment, setPostComment] = useState({
        text: '',
    })
    
    
    const handleInput = (property, value) => {
        

        setPostComment({
            ...postComment,
            [property]: value
        })
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        try { 
            let response = await fetch("https://striveschool-api.herokuapp.com/api/posts/", { 
            method: 'POST',
            body: JSON.stringify(postComment),
            headers: {
              "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWU1MzE4ODczZDVjYjAwMTUzOTVhOWYiLCJpYXQiOjE2NDI0MTAzNzYsImV4cCI6MTY0MzYxOTk3Nn0.qDjDBTYnXI7X3Y3eWLOaKSMaVRFITbDsAwrjjesIIMc",
              'Content-Type': 'application/json',
            }
        })
        console.log(response)
        if (response.ok) {
            alert('Your post was send')
            setPostComment({
                text: ''
            })
            
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
                <InputGroup.Text required value={postComment.text} onChange={(e)=> {handleInput('text', e.target.value)}}><BsFillPenFill/></InputGroup.Text>
                </InputGroup.Prepend>
                    <  FormControl  id="inlineFormInputGroup" />
                <InputGroup.Append>
                <Button className='postinput_submit' variant="outline-dark" type="submit">Post</Button>
                </InputGroup.Append>
                
            </InputGroup>
            
            <Button variant="Secondary" type="submit" className="Image-Button">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false" className="photo-icon">
            <path d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm1 13a1 1 0 01-.29.71L16 14l-2 2-6-6-4 4V7a1 1 0 011-1h14a1 1 0 011 1zm-2-7a2 2 0 11-2-2 2 2 0 012 2z"></path>
            </svg>
            <span>Photo</span>  
            </Button>
            
            <Button variant="Secondary" type="submit" className="Video-Button">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false" className="video-icon">
  <path d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm-9 12V8l6 4z"></path>
</svg>
            <span>Video</span>  
            </Button>
            <Button variant="Secondary" type="submit" className="Event-Button">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false" className="event-icon">
  <path d="M3 3v15a3 3 0 003 3h12a3 3 0 003-3V3zm13 1.75A1.25 1.25 0 1114.75 6 1.25 1.25 0 0116 4.75zm-8 0A1.25 1.25 0 116.75 6 1.25 1.25 0 018 4.75zM19 18a1 1 0 01-1 1H6a1 1 0 01-1-1V9h14zm-5.9-3a1 1 0 00-1-1H12a3.12 3.12 0 00-1 .2l-1-.2v-3h3.9v1H11v1.15a3.7 3.7 0 011.05-.15 1.89 1.89 0 012 1.78V15a1.92 1.92 0 01-1.84 2H12a1.88 1.88 0 01-2-1.75 1 1 0 010-.25h1a.89.89 0 001 1h.1a.94.94 0 001-.88z"></path>
</svg>
            <span>Event</span>  
            </Button>
<Button variant="Secondary" type="submit" className="Post-Button">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false" className="post-icon">
  <path d="M21 3v2H3V3zm-6 6h6V7h-6zm0 4h6v-2h-6zm0 4h6v-2h-6zM3 21h18v-2H3zM13 7H3v10h10z"></path>
</svg>
<span>Write Post</span>  
            </Button>
            
            

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