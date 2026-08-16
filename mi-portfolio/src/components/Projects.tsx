import { useState, useEffect, useRef } from 'react'
import { useInView } from '../hooks/useInView'

type Project = {
  num: string
  name: string
  desc: string
  tags: string[]
  images: string[]
  mediaType?: string
  demo: string | null
  github: string
  status: string
}

const projects: Project[] = [
  {
    num: '001',
    name: 'OlaCheck',
    desc: 'App Android para consultar condiciones de playas en tiempo real con IA. Integra datos meteorológicos/marinos, recomendaciones personalizadas con Google Gemini, comunidad de usuarios y modo offline.',
    tags: ['Kotlin', 'Jetpack Compose', 'Firebase', 'Gemini', 'Open-Meteo', 'MVVM'],
    images: [
      '/OlaCheck/olacheck_1.png',
      '/OlaCheck/olacheck_2.png',
      '/OlaCheck/olacheck_3.png',
      '/OlaCheck/olacheck_4.png',
      '/OlaCheck/olacheck_5.png',
    ],
    demo: 'https://github.com/Lucasdv96/Aplicacion_OlaCheck',
    github: 'https://github.com/Lucasdv96/Aplicacion_OlaCheck',
    status: 'Completado',
  },
  {
    num: '002',
    name: 'CreaPresupuestoPDF',
    desc: 'App Android para crear y gestionar presupuestos de carpintería de aluminio y Herreria. Genera PDFs profesionales con diagramas técnicos a escala. Integra gestión de clientes y compartir vía WhatsApp/email.',
    tags: ['Kotlin', 'Jetpack Compose', 'Room', 'iText', 'Material Design 3'],
    images: [
      '/CreaPresupuesto/CreaPresupuesto_1.png',
      '/CreaPresupuesto/CreaPresupuesto_2.png',
      '/CreaPresupuesto/CreaPresupuesto_4.png',
      '/CreaPresupuesto/CreaPresupuesto_7.png',
      '/CreaPresupuesto/CreaPresupuesto_9.png',
    ],
    demo: 'https://github.com/Lucasdv96/CreaPresupuestoPDF',
    github: 'https://github.com/Lucasdv96/CreaPresupuestoPDF',
    status: 'Completado',
  },
  {
    num: '003',
    name: 'Mini Kanban',
    desc: 'Sistema completo de gestión de tareas tipo Kanban con equipos colaborativos. Tablero con 4 estados, prioridades, etiquetas personalizadas, comentarios en tareas e historial de cambios. Autenticación JWT.',
    tags: ['React', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'JWT', 'Kanban'],
    images: [],
    demo: 'https://github.com/Lucasdv96/Mini-Frontend-Con-Rama',
    github: 'https://github.com/Lucasdv96/Mini-Frontend-Con-Rama',
    status: 'Completado',
  },
  {
    num: '004',
    name: 'Gestor de Torneos',
    desc: 'Web app para organizar torneos de tenis de hasta 100 jugadores. Registro público sin autenticación, cuadro de eliminación directa y panel de administración mobile-first con avance automático de ganadores por ronda.',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Supabase'],
    images: [],
    demo: null,
    github: 'https://github.com/Lucasdv96/AppGestoraTorneoTenis',
    status: 'En desarrollo',
  },
]

const PROJECT_GAP = 24

const Projects = () => {
  const { ref, isInView } = useInView()
  const [currentImageIndex, setCurrentImageIndex] = useState<{ [key: number]: number }>({})
  const [activeIndex, setActiveIndex] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const [containerWidth, setContainerWidth] = useState(900)

  // Auto-avance imágenes por card
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prev => {
        const next = { ...prev }
        projects.forEach((project, index) => {
          const total = project.images?.length ?? 0
          if (total > 1) next[index] = ((prev[index] || 0) + 1) % total
        })
        return next
      })
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  // Medición del contenedor para el carrusel
  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    setContainerWidth(el.offsetWidth)
    const obs = new ResizeObserver(() => setContainerWidth(el.offsetWidth))
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  // Teclado ← → para navegar entre proyectos
  useEffect(() => {
    const handle = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') setActiveIndex(i => (i - 1 + projects.length) % projects.length)
      if (e.key === 'ArrowRight') setActiveIndex(i => (i + 1) % projects.length)
    }
    window.addEventListener('keydown', handle)
    return () => window.removeEventListener('keydown', handle)
  }, [])

  const handleImageNav = (projectIndex: number, direction: 1 | -1, total: number) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [projectIndex]: ((prev[projectIndex] || 0) + direction + total) % total,
    }))
  }

  const cardWidth = containerWidth * 0.78
  const peekWidth = (containerWidth - cardWidth) / 2
  const translateX = peekWidth - activeIndex * (cardWidth + PROJECT_GAP)

  const renderMedia = (project: Project, i: number, desktop: boolean) => {
    const imgCount = project.images?.length ?? 0
    const imgIdx = currentImageIndex[i] || 0
    const wrapStyle: React.CSSProperties = desktop
      ? { width: '42%', flexShrink: 0, padding: '20px 0 20px 20px', display: 'flex', alignItems: 'center' }
      : { aspectRatio: '16/9', overflow: 'hidden', position: 'relative' }

    if (imgCount > 0) {
      return (
        <div style={{ ...wrapStyle, position: 'relative' }}>
          <div style={desktop
            ? { width: '100%', borderRadius: '8px', overflow: 'hidden', aspectRatio: '16/9', background: 'rgba(0,34,51,0.5)' }
            : { width: '100%', height: '100%', background: 'rgba(0,34,51,0.5)' }
          }>
            <img
              key={imgIdx}
              src={project.images[imgIdx]}
              alt={`Demo de ${project.name}`}
              className="w-full h-full object-contain project-image-fade"
            />
          </div>
          {imgCount > 1 && (
            <>
              <button
                onClick={e => { e.stopPropagation(); handleImageNav(i, -1, imgCount) }}
                style={{
                  position: 'absolute', left: desktop ? '28px' : '8px',
                  top: '50%', transform: 'translateY(-50%)',
                  width: '28px', height: '28px', borderRadius: '50%',
                  border: 'none', background: 'rgba(0,34,51,0.75)',
                  color: '#DDFF55', fontSize: '14px', cursor: 'pointer',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}
              >‹</button>
              <button
                onClick={e => { e.stopPropagation(); handleImageNav(i, 1, imgCount) }}
                style={{
                  position: 'absolute', right: '8px',
                  top: '50%', transform: 'translateY(-50%)',
                  width: '28px', height: '28px', borderRadius: '50%',
                  border: 'none', background: 'rgba(0,34,51,0.75)',
                  color: '#DDFF55', fontSize: '14px', cursor: 'pointer',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}
              >›</button>
            </>
          )}
        </div>
      )
    }

    return (
      <div style={desktop
        ? { width: '42%', flexShrink: 0, padding: '20px 0 20px 20px', display: 'flex', alignItems: 'center' }
        : { aspectRatio: '16/9', borderBottom: '1px solid rgba(192,214,234,0.08)' }
      }>
        <div style={{
          width: '100%',
          ...(desktop ? { aspectRatio: '16/9', borderRadius: '8px' } : { height: '100%' }),
          background: 'rgba(17,66,93,0.4)',
          border: '1px solid rgba(192,214,234,0.08)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '9px', color: 'rgba(192,214,234,0.25)', letterSpacing: '0.1em' }}>
            DEMO PRÓXIMAMENTE
          </span>
        </div>
      </div>
    )
  }

  const renderContent = (project: Project, desktop: boolean) => (
    <div style={{ flex: 1, minWidth: 0, padding: desktop ? '24px 28px' : '24px' }}>
      <div style={{ marginBottom: '12px' }}>
        <span style={{
          background: project.status === 'Completado' ? 'rgba(221,255,85,0.15)' : 'rgba(192,214,234,0.1)',
          color: project.status === 'Completado' ? '#DDFF55' : '#C0D6EA',
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '8px', letterSpacing: '0.1em',
          padding: '4px 10px', borderRadius: '100px', display: 'inline-block',
        }}>
          {project.status}
        </span>
      </div>
      <div style={{ fontFamily: "'JetBrains Mono', monospace", color: 'rgba(192,214,234,0.35)', fontSize: '9px', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '6px' }}>
        {project.num}
      </div>
      <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: desktop ? '22px' : '16px', color: '#F6F2E8', marginBottom: '10px' }}>
        {project.name}
      </h3>
      <p style={{ fontSize: '13px', color: 'rgba(192,214,234,0.6)', lineHeight: '1.65', marginBottom: '14px' }}>
        {project.desc}
      </p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '20px' }}>
        {project.tags.map((tag, j) => (
          <span
            key={j}
            style={{ background: 'rgba(221,255,85,0.08)', border: '1px solid rgba(221,255,85,0.2)', color: '#DDFF55', fontFamily: "'JetBrains Mono', monospace", fontSize: '8px', padding: '3px 8px', borderRadius: '4px' }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(221,255,85,0.15)'; e.currentTarget.style.borderColor = 'rgba(221,255,85,0.4)' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'rgba(221,255,85,0.08)'; e.currentTarget.style.borderColor = 'rgba(221,255,85,0.2)' }}
          >
            {tag}
          </span>
        ))}
      </div>
      <div style={{ display: 'flex', gap: '16px' }}>
        {project.demo && (
          <a href={project.demo} target="_blank" rel="noopener noreferrer"
            style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '9px', color: 'rgba(192,214,234,0.4)', textDecoration: 'none', letterSpacing: '0.08em', transition: 'color 0.2s' }}
            onMouseEnter={e => (e.currentTarget.style.color = '#DDFF55')}
            onMouseLeave={e => (e.currentTarget.style.color = 'rgba(192,214,234,0.4)')}>
            ↗ Ver Proyecto
          </a>
        )}
        {project.github && (
          <a href={project.github} target="_blank" rel="noopener noreferrer"
            style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '9px', color: 'rgba(192,214,234,0.4)', textDecoration: 'none', letterSpacing: '0.08em', transition: 'color 0.2s' }}
            onMouseEnter={e => (e.currentTarget.style.color = '#DDFF55')}
            onMouseLeave={e => (e.currentTarget.style.color = 'rgba(192,214,234,0.4)')}>
            ⌥ GitHub
          </a>
        )}
      </div>
    </div>
  )

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

      {/* Desktop: carrusel featured + peek */}
      <div
        className="hidden lg:block"
        style={{ opacity: isInView ? 1 : 0, transform: isInView ? 'translateY(0)' : 'translateY(32px)', transition: 'opacity 0.7s, transform 0.7s' }}
      >
        <div ref={containerRef} style={{ overflowX: 'clip', position: 'relative' }}>
          <div
            style={{
              display: 'flex',
              gap: `${PROJECT_GAP}px`,
              transition: 'transform 0.55s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
              transform: `translateX(${translateX}px)`,
            }}
          >
            {projects.map((project, i) => {
              const isActive = i === activeIndex
              return (
                <div
                  key={i}
                  onClick={() => !isActive && setActiveIndex(i)}
                  style={{
                    minWidth: `${cardWidth}px`,
                    flexShrink: 0,
                    display: 'flex',
                    flexDirection: 'row',
                    background: 'rgba(17,66,93,0.3)',
                    border: `1px solid ${isActive ? 'rgba(221,255,85,0.22)' : 'rgba(192,214,234,0.08)'}`,
                    borderRadius: '12px',
                    overflow: 'hidden',
                    opacity: isActive ? 1 : 0.42,
                    transform: `scale(${isActive ? 1 : 0.96})`,
                    transition: 'opacity 0.45s, transform 0.45s, border-color 0.3s',
                    cursor: isActive ? 'default' : 'pointer',
                  }}
                >
                  {renderMedia(project, i, true)}
                  {renderContent(project, true)}
                </div>
              )
            })}
          </div>
        </div>

        {/* Navegación: flechas + dots */}
        <div className="flex justify-center items-center gap-6 mt-10">
          <button
            onClick={() => setActiveIndex(i => (i - 1 + projects.length) % projects.length)}
            style={{
              width: '40px', height: '40px', borderRadius: '50%',
              background: 'rgba(192,214,234,0.08)', border: '1px solid rgba(192,214,234,0.15)',
              color: '#C0D6EA', fontSize: '16px', cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(221,255,85,0.12)'; e.currentTarget.style.borderColor = 'rgba(221,255,85,0.3)'; e.currentTarget.style.color = '#DDFF55' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'rgba(192,214,234,0.08)'; e.currentTarget.style.borderColor = 'rgba(192,214,234,0.15)'; e.currentTarget.style.color = '#C0D6EA' }}
          >←</button>

          <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            {projects.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                style={{
                  width: i === activeIndex ? '24px' : '8px', height: '8px', borderRadius: '4px',
                  background: i === activeIndex ? '#DDFF55' : 'rgba(192,214,234,0.2)',
                  border: 'none', cursor: 'pointer', padding: 0, transition: 'all 0.3s ease',
                }}
              />
            ))}
          </div>

          <button
            onClick={() => setActiveIndex(i => (i + 1) % projects.length)}
            style={{
              width: '40px', height: '40px', borderRadius: '50%',
              background: 'rgba(192,214,234,0.08)', border: '1px solid rgba(192,214,234,0.15)',
              color: '#C0D6EA', fontSize: '16px', cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(221,255,85,0.12)'; e.currentTarget.style.borderColor = 'rgba(221,255,85,0.3)'; e.currentTarget.style.color = '#DDFF55' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'rgba(192,214,234,0.08)'; e.currentTarget.style.borderColor = 'rgba(192,214,234,0.15)'; e.currentTarget.style.color = '#C0D6EA' }}
          >→</button>
        </div>
      </div>

      {/* Mobile: stack vertical */}
      <div className="lg:hidden grid grid-cols-1 gap-5">
        {projects.map((project, i) => (
          <div
            key={i}
            className="rounded-lg overflow-hidden"
            style={{
              background: 'rgba(17,66,93,0.3)',
              border: '1px solid rgba(192,214,234,0.08)',
              opacity: isInView ? 1 : 0,
              transform: isInView ? 'translateY(0)' : 'translateY(32px)',
              transition: `opacity 0.7s ${i * 100}ms, transform 0.7s ${i * 100}ms, border-color 0.2s`,
            }}
            onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(221,255,85,0.3)')}
            onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(192,214,234,0.08)')}
          >
            {renderMedia(project, i, false)}
            {renderContent(project, false)}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
