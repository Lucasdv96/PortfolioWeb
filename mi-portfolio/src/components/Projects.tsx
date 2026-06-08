import { useInView } from '../hooks/useInView'

const projects = [
  {
    num: '001',
    name: 'OlaCheck',
    desc: 'App Android para consultar condiciones de playas en tiempo real con IA. Integra datos meteorológicos/marinos, recomendaciones personalizadas con Google Gemini, comunidad de usuarios y modo offline.',
    tags: ['Kotlin', 'Jetpack Compose', 'Firebase', 'Gemini', 'Open-Meteo', 'MVVM'],
    media: null,
    mediaType: 'video',
    demo: null,
    github: 'https://github.com/Lucasdv96/Aplicacion_OlaCheck',
    status: 'En desarrollo',
  },
  {
    num: '002',
    name: 'CreaPresupuestoPDF',
    desc: 'App Android para crear y gestionar presupuestos de carpintería de aluminio. Genera PDFs profesionales con diagramas técnicos a escala. Integra gestión de clientes y compartir vía WhatsApp/email.',
    tags: ['Kotlin', 'Jetpack Compose', 'Room', 'iText', 'Material Design 3'],
    media: null,
    mediaType: 'video',
    demo: 'https://github.com/Lucasdv96/CreaPresupuestoPDF',
    github: 'https://github.com/Lucasdv96/CreaPresupuestoPDF',
    status: 'Completado',
  },
  {
    num: '003',
    name: 'Mini Kanban',
    desc: 'Sistema completo de gestión de tareas tipo Kanban con equipos colaborativos. Tablero con 4 estados, prioridades, etiquetas personalizadas, comentarios en tareas e historial de cambios. Autenticación JWT.',
    tags: ['React', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'JWT', 'Kanban'],
    media: null,
    mediaType: 'video',
    demo: 'https://github.com/Lucasdv96/Mini-Frontend-Con-Rama',
    github: 'https://github.com/Lucasdv96/Mini-Frontend-Con-Rama',
    status: 'Completado',
  },
]

const Projects = () => {
  const { ref, isInView } = useInView()

  return (
    <section
      ref={ref}
      id="proyectos"
      className="px-8 md:px-16 py-24"
      style={{ background: '#002233', borderTop: '1px solid rgba(192,214,234,0.06)' }}
    >
      <p style={{ fontFamily: "'JetBrains Mono', monospace", color: '#DDFF55', fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '12px' }}>
        // 02 — Trabajo
      </p>
      <h2
        className="font-extrabold tracking-tighter mb-16"
        style={{ fontFamily: "'Syne', sans-serif", fontSize: 'clamp(28px, 4vw, 42px)', color: '#F6F2E8' }}
      >
        Proyectos
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((project, i) => (
          <div
            key={i}
            className="group rounded-lg overflow-hidden transition-all duration-300"
            style={{
              background: 'rgba(17,66,93,0.3)',
              border: '1px solid rgba(192,214,234,0.08)',
              opacity: isInView ? 1 : 0,
              transform: isInView ? 'translateY(0)' : 'translateY(32px)',
              transitionDelay: isInView ? `${i * 100}ms` : '0ms',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = 'rgba(221,255,85,0.3)'
              e.currentTarget.style.transform = 'translateY(-8px)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'rgba(192,214,234,0.08)'
              e.currentTarget.style.transform = 'translateY(0)'
            }}
          >
            {/* Media slot */}
            {project.media ? (
              <div className="w-full aspect-video overflow-hidden" style={{ background: 'rgba(0,34,51,0.5)' }}>
                {project.mediaType === 'video' ? (
                  <video src={project.media} autoPlay muted loop playsInline className="w-full h-full object-cover" />
                ) : (
                  <img src={project.media} alt={`Demo de ${project.name}`} className="w-full h-full object-cover" />
                )}
              </div>
            ) : (
              <div
                className="w-full aspect-video flex items-center justify-center"
                style={{ background: 'rgba(17,66,93,0.3)', borderBottom: '1px solid rgba(192,214,234,0.08)' }}
              >
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '9px', color: 'rgba(192,214,234,0.3)', letterSpacing: '0.1em' }}>
                  DEMO PRÓXIMAMENTE
                </span>
              </div>
            )}

            {/* Content */}
            <div className="p-6">
              {/* Badge de estado */}
              <div className="mb-4">
                <span
                  className="text-xs font-semibold px-3 py-1 rounded-full inline-block"
                  style={{
                    background: project.status === 'Completado'
                      ? 'rgba(221,255,85,0.15)'
                      : 'rgba(0,150,255,0.15)',
                    color: project.status === 'Completado' ? '#DDFF55' : '#0096FF',
                    fontFamily: "'JetBrains Mono', monospace",
                  }}
                >
                  {project.status}
                </span>
              </div>

              <div style={{ fontFamily: "'JetBrains Mono', monospace", color: 'rgba(192,214,234,0.4)', fontSize: '9px', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '8px' }}>
                {project.num}
              </div>

              <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: '16px', color: '#F6F2E8', marginBottom: '8px' }}>
                {project.name}
              </h3>

              <p style={{ fontSize: '13px', color: 'rgba(192,214,234,0.6)', lineHeight: '1.6', marginBottom: '12px' }}>
                {project.desc}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, j) => (
                  <span
                    key={j}
                    className="text-xs px-2 py-1 rounded transition-all duration-200"
                    style={{
                      background: 'rgba(221,255,85,0.08)',
                      border: '1px solid rgba(221,255,85,0.2)',
                      color: '#DDFF55',
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: '8px',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.background = 'rgba(221,255,85,0.15)'
                      e.currentTarget.style.borderColor = 'rgba(221,255,85,0.4)'
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.background = 'rgba(221,255,85,0.08)'
                      e.currentTarget.style.borderColor = 'rgba(221,255,85,0.2)'
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-4">
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: '9px',
                      color: 'rgba(192,214,234,0.4)',
                      textDecoration: 'none',
                      letterSpacing: '0.08em',
                      transition: 'color 0.2s',
                    }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#DDFF55')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'rgba(192,214,234,0.4)')}
                  >
                    ↗ Ver Proyecto
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: '9px',
                      color: 'rgba(192,214,234,0.4)',
                      textDecoration: 'none',
                      letterSpacing: '0.08em',
                      transition: 'color 0.2s',
                    }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#DDFF55')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'rgba(192,214,234,0.4)')}
                  >
                    ⌥ GitHub
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
