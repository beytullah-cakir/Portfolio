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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
