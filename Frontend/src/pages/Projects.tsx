import { useEffect, useState } from "react";
import ProjectCard from "../components/ProjectCard";
import ProjectModal from "../components/ProjectModal";

interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string | null;
  projectLink: string | null;
  githubLink: string | null;
}

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const apiUrl =
          import.meta.env.VITE_API_BASE_URL || "http://localhost:5055";
        const response = await fetch(`${apiUrl}/api/projects`);
        if (response.ok) {
          const data = await response.json();
          setProjects(data);
        }
      } catch (error) {
        console.error("Failed to fetch projects:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300); // Clear after animation
  };

  return (
    <section id="projects" className="section pt-48">
      <div className="container mx-auto">
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
          </div>
        ) : (
          <div className="projects-grid">
            {projects.length === 0 ? (
              <div className="text-center col-span-full text-gray-500">
                Henüz proje eklenmemiş.
              </div>
            ) : (
              projects.map((project) => (
                <ProjectCard
                  key={project.id}
                  title={project.title}
                  description={project.description || ""}
                  bgClass={project.imageUrl || "project-1-bg"}
                  link={project.projectLink || "#"}
                  onClick={() => handleProjectClick(project)}
                />
              ))
            )}
          </div>
        )}
      </div>

      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </section>
  );
}
