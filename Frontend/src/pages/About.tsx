export default function AboutPage() {
  return (
    <section
      id="about"
      className="section pt-32 min-h-screen flex items-center"
    >
      <div className="container mx-auto">
        <h2 className="section-title text-center mb-16">Hakkımda</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side: Text and Skills */}
          <div className="about-content">
            <div className="about-text text-left mb-8">
              <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                Teknolojiye olan tutkum, karmaşık problemleri basit ve etkili
                çözümlere dönüştürme isteğimle birleşiyor. Kullanıcı deneyimini
                ön planda tutarak, hem görsel hem de işlevsel olarak tatmin
                edici dijital ürünler geliştirmeye odaklanıyorum.
              </p>
              <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                Sürekli öğrenen ve gelişen bir yapıya sahibim. Yeni
                teknolojileri keşfetmek ve bunları projelerimde uygulamak benim
                için bir yaşam tarzı.
              </p>
              <div className="stats flex gap-8 mb-8">
                <div className="stat-item">
                  <span className="stat-number text-3xl font-bold text-indigo-500">
                    5+
                  </span>
                  <span className="stat-label text-sm text-slate-400 block">
                    Yıl Deneyim
                  </span>
                </div>
                <div className="stat-item">
                  <span className="stat-number text-3xl font-bold text-indigo-500">
                    50+
                  </span>
                  <span className="stat-label text-sm text-slate-400 block">
                    Tamamlanan Proje
                  </span>
                </div>
              </div>
            </div>

            {/* Skills embedded under text */}
            <div className="skills-subset">
              <h3 className="text-xl font-semibold mb-4 text-white">
                Yetenekler
              </h3>
              <div className="skill-tags flex flex-wrap gap-2 text-sm justify-start">
                <span className="skill-tag px-3 py-1 rounded-full bg-slate-800 border border-indigo-500/30">
                  C#
                </span>
                <span className="skill-tag px-3 py-1 rounded-full bg-slate-800 border border-indigo-500/30">
                  ASP.NET Core
                </span>
                <span className="skill-tag px-3 py-1 rounded-full bg-slate-800 border border-indigo-500/30">
                  Unity
                </span>
                <span className="skill-tag px-3 py-1 rounded-full bg-slate-800 border border-indigo-500/30">
                  React.js
                </span>
                <span className="skill-tag px-3 py-1 rounded-full bg-slate-800 border border-indigo-500/30">
                  Next.js
                </span>
                <span className="skill-tag px-3 py-1 rounded-full bg-slate-800 border border-indigo-500/30">
                  TypeScript
                </span>
                <span className="skill-tag px-3 py-1 rounded-full bg-slate-800 border border-indigo-500/30">
                  Docker
                </span>
                <span className="skill-tag px-3 py-1 rounded-full bg-slate-800 border border-indigo-500/30">
                  PostgreSQL
                </span>
              </div>
            </div>
          </div>

          {/* Right Side: Image Placeholder */}
          <div className="about-image relative flex justify-center lg:justify-end">
            <div className="relative w-80 h-96 lg:w-96 lg:h-[30rem]">
              {/* Decorative Elements */}
              <div className="absolute inset-0 border-2 border-indigo-500/30 rounded-2xl transform translate-x-4 translate-y-4"></div>
              <div className="absolute inset-0 bg-slate-800 rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center border border-white/10">
                <span className="text-slate-600 font-semibold">
                  Fotoğraf Alanı
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
