import express from "express";
import cors from "cors";
import projectsRouter from "./routes/projects";

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/projects", projectsRouter);

// Health check
app.get("/health", (_req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Portfolio API çalışıyor: http://localhost:${PORT}`);
  console.log(`📂 Veri kaynağı: src/data/projects.json`);
});
