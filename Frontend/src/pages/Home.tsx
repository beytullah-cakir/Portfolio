import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section id="hero" className="hero">
        <div className="hero-content">
          <span className="greeting">Merhaba, ben Beytullah</span>
          <h1 className="headline">
            Dijital Dünyayı <br />{" "}
            <span className="gradient-text">Şekillendiriyorum.</span>
          </h1>
          <p className="subheadline">
            Modern web teknolojileri ile kullanıcı dostu ve estetik deneyimler
            tasarlayan bir yazılım geliştiriciyim.
          </p>
          <div className="hero-btns">
            <Link to="/projects" className="btn-primary">
              Projelerimi Gör
            </Link>
            <Link to="/contact" className="btn-secondary">
              Bana Ulaş
            </Link>
          </div>
        </div>
        <div className="hero-visual">
          <div className="glow-circle"></div>
          <div className="floating-shapes">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
          </div>
        </div>
      </section>
    </main>
  );
}
