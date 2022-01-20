import { SendOutlined, ThumbUp, ThumbUpOutlined } from "@material-ui/icons"
import React from "react"
import { Button,Row } from "react-bootstrap"
import { FaRegCommentDots, FaShare } from "react-icons/fa"
import "./post.css"

export default function Post({ post }) {
  const getDateString = () => {
    return "1d"
  }

  return (
    <div className="linkedin-post-container linkedin-card">
      <div className="linkedin-post-header d-flex align-items-center">
        <img src={post.user.image} className="linkedin-user-image" />

        <div>
          <div className="linkedin-user-name">
            {post.user.name} {post.user.surname}
          </div>
          <div className="linkedin-user-title">{post.user.title}</div>
          <div className="linkedin-post-date">{getDateString()}</div>
        </div>
      </div>
      <div className="linkedin-post-body">
        <p>{post.text}</p>
      </div>
      <div className="linkedin-post-buttons linkedin-divider-top">
        <Button className="linkedin-post-button text-center">
          <ThumbUpOutlined className="Like-icon flip" />
          <span className="ml-1">Like</span>
        </Button>
        <Button className="linkedin-post-button">
          <Row><FaRegCommentDots className="Comment-icon"/> <span className="ml-1">Comment</span></Row>
        </Button>
        <Button className="linkedin-post-button">
          <FaShare className='Share-icon' /> <span className="ml-1">Share</span>
        </Button>
        <Button className="linkedin-post-button">
          <SendOutlined className="rotate-icon" />{" "}
          <span className="ml-1">Send</span>
        </Button>
      </div>
    </div>
  )
}

// {
//     "_id": "5fc6ba2a0626b5001729ee1d",
//     "text": "Hello Wor.. ehm.. Strivers! ;D",
//     "username": "StefanoMiC",
//     "user": {
//         "_id": "5fc4c2beed266800170ea3d4",
//         "name": "Stefano",
//         "surname": "Miceli",
//         "email": "mic@nucleode.com",
//         "username": "StefanoMiC",
//         "title": "Front-End Developer & UX Designer",
//         "bio": "I'm very passionate about Graphic Design and any Visual Art. Never underestimate the power of a usable interface before a pretty one! \n\nI also love Photography and the developing process either in a dark room or the digital one.",
//         "area": "Udine, Friuli Venezia Giulia, Italy",
//         "image": "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png",
//         "createdAt": "2020-11-30T10:00:31.279Z",
//         "updatedAt": "2020-11-30T10:00:31.279Z",
//         "__v": 0
//     },
//     "createdAt": "2020-12-01T21:48:26.995Z",
//     "updatedAt": "2020-12-01T21:50:50.616Z",
//     "__v": 0
// },
