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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
