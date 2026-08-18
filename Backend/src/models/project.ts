export interface Project {
  id: number;
  title: string;
  description: string | null;
  imageUrl: string | null;
  projectLink: string | null;
  githubLink: string | null;
  createdAt: string;
}

export interface CreateProjectDto {
  title: string;
  description?: string | null;
  imageUrl?: string | null;
  projectLink?: string | null;
  githubLink?: string | null;
}

export interface UpdateProjectDto {
  title: string;
  description?: string | null;
  imageUrl?: string | null;
  projectLink?: string | null;
  githubLink?: string | null;
}
