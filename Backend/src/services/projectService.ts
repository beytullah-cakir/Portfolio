import fs from "fs";
import path from "path";
import { Project, CreateProjectDto, UpdateProjectDto } from "../models/project";

const DATA_FILE = path.join(__dirname, "../data/projects.json");

function readProjects(): Project[] {
  const raw = fs.readFileSync(DATA_FILE, "utf-8");
  return JSON.parse(raw) as Project[];
}

function writeProjects(projects: Project[]): void {
  fs.writeFileSync(DATA_FILE, JSON.stringify(projects, null, 2), "utf-8");
}

export function getAllProjects(): Project[] {
  const projects = readProjects();
  return projects.sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
}

export function getProjectById(id: number): Project | undefined {
  const projects = readProjects();
  return projects.find((p) => p.id === id);
}

export function createProject(dto: CreateProjectDto): Project {
  const projects = readProjects();
  const newId = projects.length > 0 ? Math.max(...projects.map((p) => p.id)) + 1 : 1;

  const newProject: Project = {
    id: newId,
    title: dto.title,
    description: dto.description ?? null,
    imageUrl: dto.imageUrl ?? null,
    projectLink: dto.projectLink ?? null,
    githubLink: dto.githubLink ?? null,
    createdAt: new Date().toISOString(),
  };

  projects.push(newProject);
  writeProjects(projects);
  return newProject;
}

export function updateProject(
  id: number,
  dto: UpdateProjectDto
): Project | null {
  const projects = readProjects();
  const index = projects.findIndex((p) => p.id === id);
  if (index === -1) return null;

  projects[index] = {
    ...projects[index],
    title: dto.title,
    description: dto.description ?? null,
    imageUrl: dto.imageUrl ?? null,
    projectLink: dto.projectLink ?? null,
    githubLink: dto.githubLink ?? null,
  };

  writeProjects(projects);
  return projects[index];
}

export function deleteProject(id: number): boolean {
  const projects = readProjects();
  const index = projects.findIndex((p) => p.id === id);
  if (index === -1) return false;

  projects.splice(index, 1);
  writeProjects(projects);
  return true;
}
