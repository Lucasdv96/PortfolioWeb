import { useInView } from '../hooks/useInView'

const Contact = () => {
  const { ref, isInView } = useInView()

  return (
    <section
      ref={ref}
      id="contacto"
      className="relative px-8 md:px-16 py-32 text-center overflow-hidden"
      style={{ background: '#002233', borderTop: '1px solid rgba(192,214,234,0.06)' }}
    >
      {/* Glow de fondo */}
      <div
        className="absolute w-[400px] h-[400px] rounded-full blur-3xl pointer-events-none"
        style={{
          background: 'rgba(221,255,85,0.04)',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          opacity: isInView ? 1 : 0,
          transition: 'opacity 1s ease',
        }}
      />

      <div
        className="relative z-10 transition-all duration-700"
        style={{
          opacity: isInView ? 1 : 0,
          transform: isInView ? 'translateY(0)' : 'translateY(32px)',
        }}
      >
        <p style={{ fontFamily: "'JetBrains Mono', monospace", color: '#DDFF55', fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '12px' }}>
          // 04 — Contacto
        </p>

        <h2
          className="font-extrabold tracking-tighter mb-6"
          style={{ fontFamily: "'Syne', sans-serif", fontSize: 'clamp(32px, 5vw, 60px)', color: '#F6F2E8' }}
        >
          ¿Trabajamos<br />juntos?
        </h2>

        <p style={{ fontSize: '13px', color: 'rgba(192,214,234,0.6)', lineHeight: '1.7', maxWidth: '500px', margin: '0 auto 32px' }}>
          Estoy abierto a oportunidades laborales, proyectos freelance
          o simplemente charlar sobre tecnología.
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <a
            href="mailto:lucas.delvalle1996@gmail.com"
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
            Escribime
          </a>

          <a
            href="https://www.linkedin.com/in/lucas-del-valle-740277163/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '11px',
              color: 'rgba(192,214,234,0.4)',
              padding: '10px 22px',
              border: '1px solid rgba(192,214,234,0.15)',
              borderRadius: '6px',
              letterSpacing: '0.04em',
              textDecoration: 'none',
              display: 'inline-block',
              transition: 'all 0.2s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.color = '#DDFF55'
              e.currentTarget.style.borderColor = 'rgba(221,255,85,0.3)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.color = 'rgba(192,214,234,0.4)'
              e.currentTarget.style.borderColor = 'rgba(192,214,234,0.15)'
            }}
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/Lucasdv96"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '11px',
              color: 'rgba(192,214,234,0.4)',
              padding: '10px 22px',
              border: '1px solid rgba(192,214,234,0.15)',
              borderRadius: '6px',
              letterSpacing: '0.04em',
              textDecoration: 'none',
              display: 'inline-block',
              transition: 'all 0.2s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.color = '#DDFF55'
              e.currentTarget.style.borderColor = 'rgba(221,255,85,0.3)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.color = 'rgba(192,214,234,0.4)'
              e.currentTarget.style.borderColor = 'rgba(192,214,234,0.15)'
            }}
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact
