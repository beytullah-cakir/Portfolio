import React from "react";

interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string | null;
  projectLink: string | null;
  githubLink: string | null;
}

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  isOpen,
  onClose,
}) => {
  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative w-full max-w-2xl bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden transform transition-all animate-fadeIn">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 text-slate-400 hover:text-white bg-black/50 hover:bg-black/70 rounded-full transition-colors"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Content Container */}
        <div className="flex flex-col">
          {/* Image Section */}
          <div className="h-64 sm:h-80 w-full relative group">
            {project.imageUrl && !project.imageUrl.startsWith("project-") ? (
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            ) : (
              <div
                className={`w-full h-full bg-gradient-to-br from-indigo-900 to-slate-900 flex items-center justify-center ${
                  project.imageUrl || "project-1-bg"
                }`}
              >
                <span className="text-6xl opacity-20">
                  <i className="fa-solid fa-code"></i>
                </span>
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-90"></div>

            <h2 className="absolute bottom-6 left-6 text-3xl font-bold text-white drop-shadow-lg">
              {project.title}
            </h2>
          </div>

          {/* Details Section */}
          <div className="p-8">
            <div className="prose prose-invert max-w-none">
              <p className="text-slate-300 text-lg leading-relaxed mb-6">
                {project.description}
              </p>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap gap-4 pt-4 border-t border-slate-700/50">
              {project.projectLink && (
                <a
                  href={project.projectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-none px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-medium transition-all text-center flex items-center justify-center gap-2"
                >
                  Canlı Görünüm{" "}
                  <i className="fa-solid fa-external-link-alt text-sm"></i>
                </a>
              )}
              {/* Github Source Code Button */}
              {project.githubLink && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-none px-6 py-3 bg-slate-800 hover:bg-slate-700 border border-slate-600 text-white rounded-xl font-medium transition-all text-center flex items-center justify-center gap-2"
                >
                  Github <i className="fa-brands fa-github text-lg"></i>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
