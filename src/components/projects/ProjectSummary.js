import React from "react";

function ProjectSummary({ project }) {
  return (
    <div className="card z-depth-2 project-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">{project.title}</span>
        <p>{project.content}</p>
        <p>Posted by Emmanuel Iyanu</p>
        <p className="grey-text">15th February, 3pm</p>
      </div>
    </div>
  );
}

export default ProjectSummary;
