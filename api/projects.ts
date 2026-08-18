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
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  // GET /api/projects
  if (req.method === "GET") {
    const projects = readProjects();
    const sorted = projects.sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
    return res.status(200).json(sorted);
  }

  // POST /api/projects
  if (req.method === "POST") {
    const dto = req.body;
    if (!dto?.title || dto.title.trim() === "") {
      return res.status(400).json({ error: "Başlık zorunludur" });
    }

    const projects = readProjects();
    const newId =
      projects.length > 0 ? Math.max(...projects.map((p) => p.id)) + 1 : 1;

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
    return res.status(201).json(newProject);
  }

  return res.status(405).json({ error: "Method Not Allowed" });
}
