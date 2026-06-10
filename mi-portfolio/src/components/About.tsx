import { useInView } from '../hooks/useInView'

const stats = [
  { num: '3+', label: 'Años estudiando' },
  { num: '5', label: 'Tecnologías' },
  { num: '3+', label: 'Proyectos' },
  { num: '∞', label: 'Ganas de aprender' },
]

const About = () => {
  const { ref, isInView } = useInView()

  return (
    <section
      ref={ref}
      id="sobre-mi"
      className="px-8 md:px-16 py-24 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center"
      style={{ background: '#002233', borderTop: '1px solid rgba(192,214,234,0.06)' }}
    >
      {/* Texto */}
      <div
        className="transition-all duration-700"
        style={{
          opacity: isInView ? 1 : 0,
          transform: isInView ? 'translateX(0)' : 'translateX(-32px)',
        }}
      >
        <p style={{ fontFamily: "'JetBrains Mono', monospace", color: '#DDFF55', fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '12px' }}>
          // 03 — Sobre mí
        </p>
        <h2
          className="font-extrabold tracking-tighter mb-8"
          style={{ fontFamily: "'Syne', sans-serif", fontSize: 'clamp(28px, 4vw, 42px)', color: '#F6F2E8' }}
        >
          Un poco de contexto
        </h2>
        <p style={{ fontSize: '14px', color: 'rgba(192,214,234,0.7)', lineHeight: '1.8', marginBottom: '16px' }}>
          Soy estudiante de programación con más de 2 años de experiencia construyendo
          proyectos con tecnologías modernas. Me especializo en el desarrollo web fullstack.
        </p>
        <p style={{ fontSize: '14px', color: 'rgba(192,214,234,0.7)', lineHeight: '1.8', marginBottom: '24px' }}>
          Busco mi primera oportunidad profesional donde pueda aportar valor real
          y seguir creciendo junto a un equipo apasionado.
        </p>
        <a
          href="/cv.pdf"
          download="Lucas_Del_Valle_CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: 700,
            fontSize: '12px',
            background: '#DDFF55',
            color: '#002233',
            padding: '10px 22px',
            borderRadius: '6px',
            letterSpacing: '0.04em',
            display: 'inline-block',
            textDecoration: 'none',
            transition: 'all 0.2s',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = '#cef030'
            e.currentTarget.style.transform = 'translateY(-2px)'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = '#DDFF55'
            e.currentTarget.style.transform = 'translateY(0)'
          }}
        >
          Descargar CV
        </a>
      </div>

      {/* Stats */}
      <div
        className="grid grid-cols-2 gap-px"
        style={{
          background: 'rgba(192,214,234,0.08)',
          opacity: isInView ? 1 : 0,
          transform: isInView ? 'translateX(0)' : 'translateX(32px)',
          transition: 'all 0.7s',
        }}
      >
        {stats.map((stat, i) => (
          <div
            key={i}
            className="p-6 transition-all duration-200"
            style={{
              background: 'rgba(17,66,93,0.2)',
              transitionDelay: isInView ? `${i * 75}ms` : '0ms',
            }}
            onMouseEnter={e => (e.currentTarget.style.background = 'rgba(17,66,93,0.4)')}
            onMouseLeave={e => (e.currentTarget.style.background = 'rgba(17,66,93,0.2)')}
          >
            <div
              style={{
                fontFamily: "'Syne', sans-serif",
                fontWeight: 800,
                fontSize: 'clamp(28px, 4vw, 40px)',
                color: '#DDFF55',
                lineHeight: 1,
                marginBottom: '8px',
              }}
            >
              {stat.num}
            </div>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", color: 'rgba(192,214,234,0.4)', fontSize: '9px', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default About
