import React from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  bgClass?: string;
  link?: string;
}

const ProjectCard: React.FC<ProjectCardProps & { onClick: () => void }> = ({
  title,
  description,
  bgClass = "project-1-bg", // Default fallback
  onClick,
}) => {
  return (
    <article className="project-card group cursor-pointer" onClick={onClick}>
      <div
        className={`project-image ${
          bgClass.includes("http") ? "bg-cover bg-center" : bgClass
        }`}
      >
        {bgClass.includes("http") && (
          <img
            src={bgClass}
            alt={title}
            className="w-full h-full object-cover"
          />
        )}
      </div>
      <div className="project-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <button className="project-link group-hover:text-indigo-400 transition-colors text-left">
          İncele{" "}
          <i className="fa-solid fa-arrow-right ml-1 transform group-hover:translate-x-1 transition-transform"></i>
        </button>
      </div>
    </article>
  );
};

export default ProjectCard;
