export default function ContactPage() {
  return (
    <section
      id="contact"
      className="section pt-32 min-h-screen flex items-center justify-center"
    >
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mb-4">İletişime Geç</h2>
        <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
          Projeleriniz için işbirliği yapmaya hazırım. Aşağıdaki formu
          doldurarak benimle hızlıca iletişime geçebilirsiniz.
        </p>

        <div className="max-w-2xl mx-auto">
          {/* Contact Form */}
          <form className="contact-form mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="form-group mb-0">
                <input
                  type="text"
                  placeholder="Adınız Soyadınız"
                  className="form-input"
                  required
                />
              </div>
              <div className="form-group mb-0">
                <input
                  type="email"
                  placeholder="E-posta Adresiniz"
                  className="form-input"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <input
                type="text"
                placeholder="Konu"
                className="form-input"
                required
              />
            </div>

            <div className="form-group">
              <textarea
                placeholder="Mesajınız..."
                className="form-textarea"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="btn-primary w-full py-4 text-lg font-semibold shadow-lg hover:shadow-indigo-500/50"
            >
              Gönder <i className="fa-solid fa-paper-plane ml-2"></i>
            </button>
          </form>

          {/* Social Links Under Form */}
          <div className="flex flex-col items-center">
            <p className="text-slate-500 mb-6 text-sm uppercase tracking-widest font-semibold">
              Veya Sosyal Medyadan Ulaşın
            </p>
            <div className="contact-social-links flex justify-center gap-6">
              <a href="#" aria-label="GitHub">
                <i className="fa-brands fa-github"></i>
              </a>
              <a href="#" aria-label="LinkedIn">
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a href="#" aria-label="Twitter">
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a href="#" aria-label="Instagram">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="mailto:email@example.com" aria-label="Email">
                <i className="fa-solid fa-envelope"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
