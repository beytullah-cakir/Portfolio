import { useState, useEffect } from "react";

interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string | null;
  projectLink: string | null;
  githubLink: string | null;
}

export default function Admin() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [editingId, setEditingId] = useState<number | null>(null);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    imageUrl: "",
    projectLink: "",
    githubLink: "",
  });
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const apiUrl = import.meta.env.VITE_API_BASE_URL || "http://localhost:5055";

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await fetch(`${apiUrl}/api/projects`);
      if (response.ok) {
        const data = await response.json();
        setProjects(data);
      }
    } catch (error) {
      console.error("Projeler yüklenemedi:", error);
    }
  };

  const handleEdit = (project: Project) => {
    setEditingId(project.id);
    setFormData({
      title: project.title,
      description: project.description,
      imageUrl: project.imageUrl || "",
      projectLink: project.projectLink || "",
      githubLink: project.githubLink || "",
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDelete = async (id: number) => {
    if (!window.confirm("Bu projeyi silmek istediğinize emin misiniz?")) return;

    try {
      const response = await fetch(`${apiUrl}/api/projects/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        setProjects(projects.filter((p) => p.id !== id));
        alert("Proje silindi.");
        if (editingId === id) resetForm();
      } else {
        alert("Silme işlemi başarısız.");
      }
    } catch (error) {
      console.error("Silme hatası:", error);
      alert("Silinirken hata oluştu.");
    }
  };

  const resetForm = () => {
    setEditingId(null);
    setFormData({
      title: "",
      description: "",
      imageUrl: "",
      projectLink: "",
      githubLink: "",
    });
    setMessage("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage("");

    const method = editingId ? "PUT" : "POST";
    const url = editingId
      ? `${apiUrl}/api/projects/${editingId}`
      : `${apiUrl}/api/projects`;

    try {
      const response = await fetch(url, {
        method: method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setMessage(
          editingId ? "Proje güncellendi!" : "Proje başarıyla eklendi!"
        );
        if (!editingId) {
          // Only reset if create mode, keep for edit observation or optional reset
          resetForm();
        } else {
          // Refresh list to show updates
          fetchProjects();
          // Optional: resetForm() if you want to clear after edit
          resetForm();
        }
        if (!editingId) fetchProjects(); // Refresh list on create too
      } else {
        setMessage("Hata oluştu. Lütfen tekrar deneyin.");
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("Sunucuya bağlanılamadı.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="section pt-32 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Form Section */}
          <div className="w-full lg:w-1/3">
            <div className="bg-slate-900 border border-slate-700 p-6 rounded-2xl sticky top-24">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-white">
                  {editingId ? "Projeyi Düzenle" : "Yeni Proje Ekle"}
                </h2>
                {editingId && (
                  <button
                    onClick={resetForm}
                    className="text-sm text-slate-400 hover:text-white"
                  >
                    İptal
                  </button>
                )}
              </div>

              <form
                onSubmit={handleSubmit}
                className="contact-form p-0 bg-transparent border-0 shadow-none"
              >
                <div className="form-group">
                  <input
                    type="text"
                    name="title"
                    placeholder="Proje Başlığı"
                    value={formData.title}
                    onChange={handleChange}
                    className="form-input"
                    required
                  />
                </div>
                <div className="form-group">
                  <textarea
                    name="description"
                    placeholder="Proje Açıklaması"
                    value={formData.description}
                    onChange={handleChange}
                    className="form-textarea"
                    rows={4}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="imageUrl"
                    placeholder="Görsel URL / Class"
                    value={formData.imageUrl}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>
                <div className="space-y-4">
                  <div className="form-group mb-0">
                    <input
                      type="text"
                      name="projectLink"
                      placeholder="Canlı Proje Linki"
                      value={formData.projectLink}
                      onChange={handleChange}
                      className="form-input"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      name="githubLink"
                      placeholder="Github Linki"
                      value={formData.githubLink}
                      onChange={handleChange}
                      className="form-input"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className={`btn-primary w-full mt-4 ${
                    editingId ? "!bg-amber-600 hover:!bg-amber-700" : ""
                  }`}
                  disabled={isSubmitting}
                >
                  {isSubmitting
                    ? "İşleniyor..."
                    : editingId
                    ? "Güncelle"
                    : "Kaydet"}
                </button>

                {message && (
                  <p
                    className={`mt-4 text-center text-sm ${
                      message.includes("Hata")
                        ? "text-red-400"
                        : "text-green-400"
                    }`}
                  >
                    {message}
                  </p>
                )}
              </form>
            </div>
          </div>

          {/* List Section */}
          <div className="w-full lg:w-2/3">
            <h2 className="text-2xl font-bold text-white mb-6">
              Mevcut Projeler ({projects.length})
            </h2>
            <div className="grid gap-4">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="bg-slate-800 border border-slate-700 p-4 rounded-xl flex flex-col sm:flex-row gap-4 items-center justify-between group hover:border-indigo-500/50 transition-all"
                >
                  <div className="flex items-center gap-4 w-full">
                    <div
                      className={`w-12 h-12 rounded-lg flex-shrink-0 flex items-center justify-center bg-slate-700 overflow-hidden`}
                    >
                      {project.imageUrl &&
                      !project.imageUrl.startsWith("project-") ? (
                        <img
                          src={project.imageUrl}
                          alt=""
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <i className="fa-solid fa-code text-slate-400"></i>
                      )}
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-white font-semibold truncate">
                        {project.title}
                      </h3>
                      <p className="text-slate-400 text-sm truncate">
                        {project.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-2 w-full sm:w-auto justify-end">
                    <button
                      onClick={() => handleEdit(project)}
                      className="p-2 text-amber-400 hover:bg-amber-400/10 rounded-lg transition-colors"
                      title="Düzenle"
                    >
                      <i className="fa-solid fa-pen"></i>
                    </button>
                    <button
                      onClick={() => handleDelete(project.id)}
                      className="p-2 text-red-400 hover:bg-red-400/10 rounded-lg transition-colors"
                      title="Sil"
                    >
                      <i className="fa-solid fa-trash"></i>
                    </button>
                  </div>
                </div>
              ))}

              {projects.length === 0 && (
                <div className="text-center py-12 text-slate-500 bg-slate-900/50 rounded-xl border border-dashed border-slate-700">
                  Henüz proje bulunmuyor. Sol taraftan ekleyebilirsiniz.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
