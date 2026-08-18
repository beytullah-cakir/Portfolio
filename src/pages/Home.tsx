import { Link } from "react-router-dom";
import profileImg from "../assets/profile-img.jpeg";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      {/* Hero Section */}
      <section
        id="hero"
        className="hero min-h-screen flex flex-col items-center justify-center text-center relative overflow-hidden pt-20"
      >
        <div className="container mx-auto px-4 relative z-10 flex flex-col items-center">
          {/* Profile Image Area */}
          <div className="relative mb-6 group">
            {/* Image Container */}
            <div className="w-48 h-48 md:w-56 md:h-56 rounded-full border-4 border-indigo-500/30 overflow-hidden shadow-[0_0_30px_rgba(99,102,241,0.3)] group-hover:shadow-[0_0_50px_rgba(99,102,241,0.5)] transition-all duration-500 relative bg-slate-800">
              {/* Placeholder for user photo - Replace src with actual image path */}
              <img
                src={profileImg}
                alt="Beytullah"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Decorative Animated Rings */}
            <div className="absolute -inset-4 border border-indigo-500/20 rounded-full animate-[spin_10s_linear_infinite]"></div>
            <div className="absolute -inset-8 border border-purple-500/10 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
          </div>

          {/* Name & Title */}
          <h2 className="text-xl text-indigo-400 font-medium mb-2 tracking-wide">
            Beytullah ÇAKIR
          </h2>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-indigo-200 to-white drop-shadow-lg">
            Game Developer
          </h1>

          <p className="text-lg text-slate-400 mb-10 max-w-2xl leading-relaxed">
            Backend mimarisi, makine öğrenmesi ve oyun geliştirme odağında;
            ölçeklenebilir ve sürükleyici dijital çözümler üretmeyi hedefliyorum.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/projects"
              className="px-8 py-3 rounded-full bg-indigo-600 text-white font-medium hover:bg-indigo-700 hover:shadow-[0_0_20px_rgba(79,70,229,0.4)] transition-all hover:-translate-y-1"
            >
              Projelerimi Gör
            </Link>
            <Link
              to="/contact"
              className="px-8 py-3 rounded-full bg-slate-800 border border-slate-700 text-white font-medium hover:bg-slate-700 transition-all hover:-translate-y-1"
            >
              Bana Ulaş
            </Link>
          </div>
        </div>

        {/* Background Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
      </section>
    </main>
  );
}
