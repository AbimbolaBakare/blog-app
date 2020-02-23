import React from "react";
import ProjectSummary from "./ProjectSummary";

function ProjectList({ segun }) {
  return (
    <div className="project-list section">
      {segun.map(project => {
        return <ProjectSummary project={project} key={project.id} />;
      })}
    </div>
  );
}

export default ProjectList;
