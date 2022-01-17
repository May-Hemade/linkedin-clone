import React from "react"

export default function SingleInterest({ interest }) {
  return (
    <div className="d-flex align-items-center py-3">
      <img src={interest.img} className="card-image-small ml-3"></img>
      <div className="ml-2">
        <a href="#" className="sub-title">
          <h3 className="title">{interest.name}</h3>

          <div className="sub-title">
            <span>{interest.followers} followers</span>
          </div>
        </a>
      </div>
    </div>
  )
}
