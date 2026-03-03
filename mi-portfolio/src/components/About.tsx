const stats = [
  { num: '2+', label: 'Años estudiando' },
  { num: '5',  label: 'Tecnologías' },
  { num: '3',  label: 'Proyectos' },
  { num: '∞',  label: 'Ganas de aprender' },
]

const About = () => {
     return (
    <section id="sobre-mi" className="px-16 py-24 border-t border-white/10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

      {/* Texto */}
      <div>
        <p className="text-[#00e5a0] text-xs tracking-[0.2em] uppercase mb-3">// 03 — Sobre mí</p>
        <h2 className="font-extrabold tracking-tighter mb-8 text-white" style={{ fontSize: 'clamp(28px, 4vw, 42px)' }}>
          Un poco de contexto
        </h2>
        <p className="text-white/40 text-sm leading-loose mb-5">
          Soy estudiante de programación con más de 2 años de experiencia construyendo 
          proyectos con tecnologías modernas. Me especializo en el desarrollo web fullstack.
        </p>
        <p className="text-white/40 text-sm leading-loose mb-10">
          Busco mi primera oportunidad profesional donde pueda aportar valor real 
          y seguir creciendo junto a un equipo apasionado.
        </p>
        <a
          href="/cv.pdf"
          className="bg-[#00e5a0] text-black font-bold text-sm px-7 py-3.5 rounded-md tracking-wide hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,229,160,0.3)] transition-all duration-200 inline-block"
        >Descargar CV</a>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-px bg-white/10">
        {stats.map((stat, i) => (
          <div key={i} className="bg-[#111620] p-8">
            <div
              className="font-extrabold text-[#00e5a0] leading-none mb-2 tracking-tighter"
              style={{ fontSize: 'clamp(28px, 4vw, 40px)' }}
            >
              {stat.num}
            </div>
            <div className="text-white/40 text-xs tracking-wide">{stat.label}</div>
          </div>
        ))}
      </div>

    </section>
  )
}

export default About
    

