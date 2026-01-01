import React from "react";
import { Link } from "react-router-dom";

interface ProjectCardProps {
  title: string;
  description: string;
  bgClass?: string;
  link?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  bgClass = "project-1-bg", // Default fallback
  link = "#",
}) => {
  return (
    <article className="project-card">
      <div className={`project-image ${bgClass}`}></div>
      <div className="project-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <Link to={link || "#"} className="project-link">
          İncele <i className="fa-solid fa-arrow-right"></i>
        </Link>
      </div>
    </article>
  );
};

export default ProjectCard;
