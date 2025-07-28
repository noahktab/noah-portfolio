
import React from 'react';

function ProjectCard({ title, description, tags, link, linkLabel }) {
  return (
    <div className="project-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="tags">{tags}</div>
      <a href={link} target="_blank" rel="noreferrer">{linkLabel}</a>
    </div>
  );
}

export default ProjectCard;
