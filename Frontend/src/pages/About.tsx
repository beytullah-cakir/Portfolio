export default function AboutPage() {
  return (
    <section
      id="about"
      className="section pt-32 min-h-screen flex items-center"
    >
      <div className="container mx-auto">
        <h2 className="section-title text-center mb-16">Hakkımda</h2>
        <div className="flex flex-col gap-12 items-center">
          {/* Left Side: Text and Skills */}
          <div className="about-content">
            <div className="about-text text-left mb-8">
              <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                Yazılım serüvenime başladığım andan itibaren enerjimin büyük bir kısmını 
                Unity ile oyun geliştirmeye ayırdım. Oyun mekanikleri üzerine kurgu yapmayı 
                ve küçük dünyalar inşa etmeyi sevdiğim için vaktimin çoğunu bu alana odaklanarak geçiriyorum.
              </p>
              <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                Bunun yanında, projelerimin mutfak tarafını da merak ettiğim için backend dünyasına 
                giriş yaptım; şu an hem ASP.NET Core hem de Python ile backend tarafında işlerin nasıl 
                yürüdüğünü öğrenmeye çalışıyorum. Ayrıca, veriyi sadece depolanan bir birim değil, 
                işlenerek akıllı çözümlere dönüşen bir kaynak olarak gördüğüm için Python ile makine 
                öğrenmesi dünyasına da adımlarımı attım.
              </p>
              <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                Kısacası; ana odağım oyun geliştirmek olsa da, bir sistemin hem arka yüzünü hem de 
                veriyle nasıl zekileştirilebileceğini anlamaya çalışan, öğrenme merakklı bir geliştiriciyim. 
                Yeni şeyler denemekten ve projelerimi geliştirmekten keyif alıyorum.
              </p>
            </div>

            {/* Skills embedded under text */}
            <div className="skills-subset">
              <h3 className="text-xl font-semibold mb-6 text-white border-b border-indigo-500/20 pb-2 inline-block">
                Teknik Yetenekler
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4">
                {/* Oyun Geliştirme Card */}
                <div className="group p-4 rounded-xl bg-slate-800/50 border border-slate-700 hover:border-indigo-500/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(99,102,241,0.15)] hover:bg-slate-800/80">
                  <h4 className="text-indigo-400 font-medium mb-3 flex items-center gap-2">
                    <div className="p-1.5 rounded-lg bg-indigo-500/10 group-hover:bg-indigo-500/20 transition-colors">
                      <div className="w-2 h-2 rounded-full bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.5)]"></div>
                    </div>
                    Oyun Geliştirme
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 rounded-md bg-indigo-950/40 border border-indigo-500/20 text-indigo-200 text-xs">
                      Unity
                    </span>
                    <span className="px-2 py-1 rounded-md bg-indigo-950/40 border border-indigo-500/20 text-indigo-200 text-xs">
                      C#
                    </span>
                    
                  </div>
                </div>

                {/* Backend Card */}
                <div className="group p-4 rounded-xl bg-slate-800/50 border border-slate-700 hover:border-emerald-500/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(16,185,129,0.15)] hover:bg-slate-800/80">
                  <h4 className="text-emerald-400 font-medium mb-3 flex items-center gap-2">
                    <div className="p-1.5 rounded-lg bg-emerald-500/10 group-hover:bg-emerald-500/20 transition-colors">
                      <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
                    </div>
                    Backend
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 rounded-md bg-emerald-950/40 border border-emerald-500/20 text-emerald-200 text-xs">
                      ASP.NET Core
                    </span>
                    <span className="px-2 py-1 rounded-md bg-emerald-950/40 border border-emerald-500/20 text-emerald-200 text-xs">
                      Python
                    </span>
                    
                  </div>
                </div>

                {/* Yapay Zeka Card */}
                <div className="group p-4 rounded-xl bg-slate-800/50 border border-slate-700 hover:border-purple-500/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(168,85,247,0.15)] hover:bg-slate-800/80 sm:col-span-2 lg:col-span-1 xl:col-span-2">
                  <h4 className="text-purple-400 font-medium mb-3 flex items-center gap-2">
                    <div className="p-1.5 rounded-lg bg-purple-500/10 group-hover:bg-purple-500/20 transition-colors">
                      <div className="w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.5)]"></div>
                    </div>
                    Yapay Zeka
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 rounded-md bg-purple-950/40 border border-purple-500/20 text-purple-200 text-xs">
                      Machine Learning
                    </span>
                    <span className="px-2 py-1 rounded-md bg-purple-950/40 border border-purple-500/20 text-purple-200 text-xs">
                      Data Analytics
                    </span>                    
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Image removed as requested */}
        </div>
      </div>
    </section>
  );
}
