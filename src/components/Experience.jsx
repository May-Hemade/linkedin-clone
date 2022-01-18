import React from "react"

import { Plus, ChevronDown } from "react-bootstrap-icons"
import SingleExperience from "./SingleExperience"

export default function Experience() {
  return (
    <div>
      <div className="linkedin-card-top pt-3 pb-4">
        <div className="linkedin-card-header d-flex justify-content-between">
          <div className="linkedin-card-header ml-2 linkedin-card-header pr-2 pl-2 ">
            Experience
          </div>
          <div className="linkedin-icon display-3 mr-2">
            <Plus> </Plus>
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
