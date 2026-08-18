import { useState, useRef, useEffect } from "react";

export default function ContactPage() {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  useEffect(() => {
    // Initialize EmailJS with the public key from env
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    if (publicKey && (window as any).emailjs) {
      (window as any).emailjs.init(publicKey);
    }
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

    // Fallback if keys are not set
    if (!serviceId || !templateId) {
      alert("Lütfen .env dosyasındaki EmailJS anahtarlarını ayarlayın.");
      setStatus("idle");
      return;
    }

    if ((window as any).emailjs) {
      (window as any).emailjs
        .send(serviceId, templateId, formData)
        .then(() => {
          setStatus("success");
          setFormData({
            user_name: "",
            user_email: "",
            subject: "",
            message: "",
          });
        })
        .catch((error: any) => {
          console.error("EmailJS Error:", error);
          // Show more detailed error if available
          const errorMessage =
            error?.text ||
            "Bir hata oluştu. Lütfen bilgilerinizi kontrol edin.";
          setStatus("error");
          alert(`Hata Detayı: ${errorMessage}`);
        });
    } else {
      console.error("EmailJS not loaded");
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="section pt-32 min-h-screen flex items-center justify-center"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          {/* Contact Form */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="contact-form mb-12"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="form-group mb-0">
                <input
                  type="text"
                  name="user_name"
                  placeholder="Adınız Soyadınız"
                  className="form-input"
                  value={formData.user_name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group mb-0">
                <input
                  type="email"
                  name="user_email"
                  placeholder="E-posta Adresiniz"
                  className="form-input"
                  value={formData.user_email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <input
                type="text"
                name="subject"
                placeholder="Konu"
                className="form-input"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <textarea
                name="message"
                placeholder="Mesajınız..."
                className="form-textarea"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className={`btn-primary w-full py-4 text-lg font-semibold shadow-lg hover:shadow-indigo-500/50 transition-all ${
                status === "sending" ? "opacity-70 cursor-not-allowed" : ""
              }`}
            >
              {status === "sending" ? "Gönderiliyor..." : "Gönder"}
              {status !== "sending" && (
                <i className="fa-solid fa-paper-plane ml-2"></i>
              )}
            </button>

            {status === "success" && (
              <div className="mt-4 p-4 bg-green-500/20 border border-green-500/50 text-green-300 rounded-lg text-center">
                Mesajınız başarıyla gönderildi!
              </div>
            )}
            {status === "error" && (
              <div className="mt-4 p-4 bg-red-500/20 border border-red-500/50 text-red-300 rounded-lg text-center">
                Bir hata oluştu. Lütfen daha sonra tekrar deneyin veya doğrudan
                mail atın.
              </div>
            )}
          </form>

          {/* Social Links Under Form */}
          <div className="flex flex-col items-center">
            <p className="text-slate-500 mb-6 text-sm uppercase tracking-widest font-semibold">
              Veya Sosyal Medyadan Ulaşın
            </p>
            <div className="contact-social-links flex justify-center gap-6">
              <a href="https://github.com/beytullah-cakir" aria-label="GitHub">
                <i className="fa-brands fa-github"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/beytullah-cakir/"
                aria-label="LinkedIn"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a
                href="https://www.instagram.com/beytullahhcakir/"
                aria-label="Instagram"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
