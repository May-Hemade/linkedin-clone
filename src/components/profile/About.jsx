import React, { Component } from "react"
import { Pen } from "react-bootstrap-icons"
import ReadMore from "../ReadMore"
import "./about.css"

export default class About extends Component {
  expand = () => {}
  render() {
    return (
      <div className="linkedin-card p-3">
        <div className="linkedin-card-header d-flex justify-content-between">
          <div>About</div>
          <div className="linkedin-icon">
            <Pen />
          </div>
        </div>
        <div className="linkedin-card-body">
          <ReadMore>
            Being a business developer for multiple businesses has allowed me to
            gain domain knowledge in multiple sectors. I have recently shifted
            my focus to the IT industry - Healthcare in particular. I have
            conceived a product called Know.me which gives health facilities,
            companies, and individuals a higher level of safety by providing
            easy access to vital information in critical situations.
          </ReadMore>
        </div>
      </div>
    )
  }
}
