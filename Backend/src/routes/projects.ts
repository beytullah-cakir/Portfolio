import { Router, Request, Response } from "express";
import {
  getAllProjects,
  getProjectById,
  createProject,
  updateProject,
  deleteProject,
} from "../services/projectService";
import { CreateProjectDto, UpdateProjectDto } from "../models/project";

const router = Router();

// GET /api/projects
router.get("/", (_req: Request, res: Response) => {
  const projects = getAllProjects();
  res.json(projects);
});

// GET /api/projects/:id
router.get("/:id", (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  if (isNaN(id)) {
    res.status(400).json({ error: "Geçersiz ID" });
    return;
  }

  const project = getProjectById(id);
  if (!project) {
    res.status(404).json({ error: "Proje bulunamadı" });
    return;
  }

  res.json(project);
});

// POST /api/projects
router.post("/", (req: Request, res: Response) => {
  const dto: CreateProjectDto = req.body;
  if (!dto.title || dto.title.trim() === "") {
    res.status(400).json({ error: "Başlık zorunludur" });
    return;
  }

  const created = createProject(dto);
  res.status(201).json(created);
});

// PUT /api/projects/:id
router.put("/:id", (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  if (isNaN(id)) {
    res.status(400).json({ error: "Geçersiz ID" });
    return;
  }

  const dto: UpdateProjectDto = req.body;
  if (!dto.title || dto.title.trim() === "") {
    res.status(400).json({ error: "Başlık zorunludur" });
    return;
  }

  const updated = updateProject(id, dto);
  if (!updated) {
    res.status(404).json({ error: "Proje bulunamadı" });
    return;
  }

  res.status(204).send();
});

// DELETE /api/projects/:id
router.delete("/:id", (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  if (isNaN(id)) {
    res.status(400).json({ error: "Geçersiz ID" });
    return;
  }

  const deleted = deleteProject(id);
  if (!deleted) {
    res.status(404).json({ error: "Proje bulunamadı" });
    return;
  }

  res.status(204).send();
});

export default router;
