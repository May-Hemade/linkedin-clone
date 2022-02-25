import { SendOutlined, ThumbUp, ThumbUpOutlined } from "@material-ui/icons";
import React from "react";
import { Button, Row } from "react-bootstrap";
import { FaRegCommentDots, FaShare } from "react-icons/fa";
import "./post.css";
import { useState, useEffect } from "react";
import { set } from "date-fns";
import { BsEmojiSmile, BsCardImage, BsThreeDots } from "react-icons/bs";
import Comment from "./Comment.jsx"
import { useForm } from "react-hook-form";

export default function Post({ post }) {
  const getDateString = () => {
    return "1d";
  };
  let userLogged = "62161671523d0c1bc14b6e93";
  const isAlreadyLiked = post.likes.find(
    (_id) => _id.toString() === userLogged
  );
  console.log(isAlreadyLiked)
  console.log(post._id)
  const likesLength = post.likes.length;
  const [numberOfLikes, setNumberOfLikes] = useState(likesLength);
  const [isLiked, setIsliked] = useState(isAlreadyLiked ? true : false);
  const [showComments, setShowComments] = useState(false);
  const [arrayOfComments, setArrayOfComments] = useState(null)
  //comment form
     const {
       register,
       handleSubmit,
       formState: { errors },
     } = useForm();
     
     const submitForm = async (data) => {
      let data1 = {...data, 'user': userLogged, 'post':post._id} 
      try {
         let response = await fetch(
           `${process.env.REACT_APP_BE_URL}/posts/${post._id}/comments`,
           {
             
             method: "POST",
             body: JSON.stringify(data1),
             headers: {
               "Content-Type": "application/json",
             },
           }
         );
         console.log(response);
         if (response.ok) {
           alert("comment was send");
           
         } else {
           alert("There was a problem sending your comment");
         }
       } catch (error) {
         console.log(error);
       }
     };
     const onSubmit =(data,e) => {
       submitForm(data);
       e.target.reset()
       fetchComments();
     }
  //

  let likeBody = { user: userLogged };
  let postId = post._id;



  const likeDislike = async () => {
    try {
      let response = await fetch(
        `${process.env.REACT_APP_BE_URL}/posts/${postId}/like`,
        {
          method: "PUT",
          body: JSON.stringify(likeBody),
          headers: {
            "Content-type": "application/json",
          },
        }
      );
      if (response.ok) {
        console.log("post liked or unliked");
      } else {
        console.log("something went wrong");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const changeNumberOfLikes = () => {
    isLiked
      ? setNumberOfLikes(numberOfLikes - 1)
      : setNumberOfLikes(numberOfLikes + 1);
  };
  const toogleLike = () => {
    setIsliked(!isLiked);
  };
  const handleLikeClick = async () => {
    likeDislike();
    changeNumberOfLikes();
    toogleLike();
  };

  const fetchComments = async()=> {
    try {
      let response = await fetch(
        `${process.env.REACT_APP_BE_URL}/posts/${postId}/comments`
      );
      if (response.ok) {
        let data = await response.json()
        console.log (data)
        setArrayOfComments(data)
      } else {
        console.log("something went wrong")
      }
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchComments();
  }, []);

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
      <div className="d-flex justify-content-between">
        <div className="linkedin-post-likes ml-2">
          <p>
            {numberOfLikes} {numberOfLikes > 1 ? "likes" : "like"}
          </p>
        </div>
        <div
          className="linkedin-post-comments mr-3"
          onClick={() => {
            setShowComments(!showComments);
          }}
        >
          {post.comments.length} {post.comments.length > 1 ? "comments" : "comment"}
        </div>
      </div>
      <div className="linkedin-post-buttons linkedin-divider-top">
        <Button
          className="linkedin-post-button text-center"
          onClick={(e) => {
            handleLikeClick(e);
          }}
        >
          <ThumbUpOutlined
            className="Like-icon flip"
            style={{ color: isLiked ? "red" : "white" }}
          />
          <span className="ml-1" style={{ color: isLiked ? "red" : "white" }}>
            Like
          </span>
        </Button>
        <Button className="linkedin-post-button">
          <Row>
            <FaRegCommentDots className="Comment-icon" />{" "}
            <span className="ml-1">Comment</span>
          </Row>
        </Button>
        <Button className="linkedin-post-button">
          <FaShare className="Share-icon" /> <span className="ml-1">Share</span>
        </Button>
        <Button className="linkedin-post-button">
          <SendOutlined className="rotate-icon" />{" "}
          <span className="ml-1">Send</span>
        </Button>
      </div>
      <div
        className="comment-section"
        style={{ display: showComments ? "block" : "none" }}
      >
        <div className="input-comments d-flex">
          <div className="avatar-input-comments">
            <img
              className="linkedin-user-image pro-pic"
              src="https://i.pravatar.cc/300"
              alt="pro-pic"
            />
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="inputinput-comments mt-2 align-self-center">
              <input
                type="text"
                {...register("comments", { required: true, minLength: 2 })}
                className="search_Bar_input"
                placeholder="Add a comment..."
              />
              <BsEmojiSmile className="input-icon mr-3" />

              <BsCardImage className="input-icon mr-3" />
              <input
                type="submit"
                value={"Send"}
                className="sendcomment align-self-center"
              />
            </div>
          </form>
        </div>
        <div className="order-comment-selector">
          <select
            id="commentsorder"
            name="commentorder"
            className="ordercomment"
          >
            <option value="Most relevant">Most relevant</option>
            <option value="Most recent">Most recent</option>
          </select>
        </div>

        {arrayOfComments &&
          arrayOfComments.map((comment) => {
            return (
              <div className="commentcomponent my-4 mr-3 d-flex">
                <img
                  className="linkedin-user-image pro-pic"
                  src="https://i.pravatar.cc/300"
                  alt="pro-pic"
                />
                <div className="comment_container">
                  <div className="comment_info d-flex justify-content-between">
                    <div className="comment_author">
                      <p className="comment_author_name">
                        <b>Diana Ortega</b>
                      </p>
                      <p className="comment_author_title">
                        Expertologa en lo que quieras
                      </p>
                    </div>
                    <div className="comment_options">
                      <span className="comment_creation">6d</span>{" "}
                      <BsThreeDots className="comment_creation" />
                    </div>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quis expedita pariatur culpa non? Itaque aperiam ut, harum
                    inventore alias iusto voluptatibus molestias laborum quia,
                    voluptatem officiis qui modi et neque!
                  </p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
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
