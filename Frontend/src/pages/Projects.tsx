import { useEffect, useState } from "react";
import ProjectCard from "../components/ProjectCard";

interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string | null;
  projectLink: string | null;
}

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

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

  return (
    <section id="projects" className="section pt-48">
      <div className="container mx-auto">
        {loading ? (
          <div className="text-center text-white">Yükleniyor...</div>
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
                />
              ))
            )}
          </div>
        )}
      </div>
    </section>
  );
}
