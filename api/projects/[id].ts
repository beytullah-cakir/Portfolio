import type { VercelRequest, VercelResponse } from "@vercel/node";
import fs from "fs";
import path from "path";

interface Project {
  id: number;
  title: string;
  description: string | null;
  imageUrl: string | null;
  projectLink: string | null;
  githubLink: string | null;
  createdAt: string;
}

const DATA_FILE = path.join(process.cwd(), "data", "projects.json");

function readProjects(): Project[] {
  const raw = fs.readFileSync(DATA_FILE, "utf-8");
  return JSON.parse(raw) as Project[];
}

function writeProjects(projects: Project[]): void {
  fs.writeFileSync(DATA_FILE, JSON.stringify(projects, null, 2), "utf-8");
}

export default function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, PUT, DELETE, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  const id = parseInt(req.query.id as string);
  if (isNaN(id)) {
    return res.status(400).json({ error: "Geçersiz ID" });
  }

  // GET /api/projects/:id
  if (req.method === "GET") {
    const projects = readProjects();
    const project = projects.find((p) => p.id === id);
    if (!project) return res.status(404).json({ error: "Proje bulunamadı" });
    return res.status(200).json(project);
  }

  // PUT /api/projects/:id
  if (req.method === "PUT") {
    const dto = req.body;
    if (!dto?.title || dto.title.trim() === "") {
      return res.status(400).json({ error: "Başlık zorunludur" });
    }

    const projects = readProjects();
    const index = projects.findIndex((p) => p.id === id);
    if (index === -1) return res.status(404).json({ error: "Proje bulunamadı" });

    projects[index] = {
      ...projects[index],
      title: dto.title,
      description: dto.description ?? null,
      imageUrl: dto.imageUrl ?? null,
      projectLink: dto.projectLink ?? null,
      githubLink: dto.githubLink ?? null,
    };

    writeProjects(projects);
    return res.status(204).end();
  }

  // DELETE /api/projects/:id
  if (req.method === "DELETE") {
    const projects = readProjects();
    const index = projects.findIndex((p) => p.id === id);
    if (index === -1) return res.status(404).json({ error: "Proje bulunamadı" });

    projects.splice(index, 1);
    writeProjects(projects);
    return res.status(204).end();
  }

  return res.status(405).json({ error: "Method Not Allowed" });
}
