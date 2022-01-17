import React from "react"
import Truncate from "react-truncate"

export default function SingleActivity({ activity }) {
  return (
    <div>
      <div className="d-flex inline ">
        <img src={activity.img} className="card-image"></img>
        <div className="ml-2">
          <Truncate lines={2}>
            <a className=" text-light linkedin-card-body-activity" href="#">
              {activity.text}
            </a>
          </Truncate>
          <a
            href="#"
            className="font-weight-light d-block text-light linkedin-card-body "
          >
            {activity.author} Shared this
          </a>
        </div>
      </div>
    </div>
  )
}
