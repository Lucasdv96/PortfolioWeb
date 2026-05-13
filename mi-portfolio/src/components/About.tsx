import { useInView } from '../hooks/useInView'

const stats = [
  { num: '3+', label: 'Años estudiando' },
  { num: '5',  label: 'Tecnologías' },
  { num: '3+',  label: 'Proyectos' },
  { num: '∞',  label: 'Ganas de aprender' },
]

const About = () => {
  const { ref, isInView } = useInView()

  return (
    <section ref={ref} id="sobre-mi" className="px-16 py-24 border-t border-white/10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

      {/* Texto */}
      <div className={`transition-all duration-700 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
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
          className="bg-[#00e5a0] hover:bg-[#00d991] text-black font-bold text-sm px-7 py-3.5 rounded-lg tracking-wide hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(0,229,160,0.4)] transition-all duration-200 inline-block active:scale-95"
        >Descargar CV</a>
      </div>

      {/* Stats */}
      <div className={`grid grid-cols-2 gap-px bg-white/10 transition-all duration-700 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
        {stats.map((stat, i) => (
          <div
            key={i}
            className="bg-[#111620] p-8 hover:bg-[#161d2c] transition-all duration-300 cursor-pointer"
            style={{
              transitionDelay: isInView ? `${i * 75}ms` : '0ms'
            }}
          >
            <div
              className="font-extrabold text-[#00e5a0] leading-none mb-2 tracking-tighter group-hover:text-white transition-colors duration-300"
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
    

