import { useState } from "react";

export default function Admin() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    imageUrl: "",
    projectLink: "",
  });
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage("");

    try {
      const apiUrl =
        import.meta.env.VITE_API_BASE_URL || "http://localhost:5055/api";
      const response = await fetch(`${apiUrl}/projects`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setMessage("Proje başarıyla eklendi!");
        setFormData({
          title: "",
          description: "",
          imageUrl: "",
          projectLink: "",
        });
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
      <div className="container mx-auto max-w-2xl">
        <h2 className="section-title">Admin Panel - Proje Ekle</h2>

        <form onSubmit={handleSubmit} className="contact-form">
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
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="imageUrl"
              placeholder="Görsel URL (Opsiyonel / Class Name örn: project-1-bg)"
              value={formData.imageUrl}
              onChange={handleChange}
              className="form-input"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="projectLink"
              placeholder="Proje Linki (Opsiyonel)"
              value={formData.projectLink}
              onChange={handleChange}
              className="form-input"
            />
          </div>

          <button
            type="submit"
            className="btn-primary w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Kaydediliyor..." : "Projeyi Kaydet"}
          </button>

          {message && (
            <p
              className={`mt-4 text-center ${
                message.includes("Hata") ? "text-red-400" : "text-green-400"
              }`}
            >
              {message}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
