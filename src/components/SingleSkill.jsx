import React from "react"

export default function SingleSkill({ skill, showBorder }) {
  return (
    <div
      className={`py-3 skill-container ${
        showBorder ? "linkedin-divider-bottom" : ""
      }`}
    >
      <div className="skill-name">
        <span className="title">{skill.title}</span> .{" "}
        <span className="small text-muted">{skill.total}</span>
      </div>
      <div className="skill-endorsements mt-2 small">
        <b>{skill.endorsements}</b> have given endorsements for this skill
      </div>
    </div>
  )
}
