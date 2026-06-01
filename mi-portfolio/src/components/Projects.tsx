const projects = [
  {
    num: '001',
    name: 'OlaCheck',
    desc: 'App Android para consultar condiciones de playas en tiempo real con IA. Integra datos meteorológicos/marinos, recomendaciones personalizadas con Google Gemini, comunidad de usuarios y modo offline.',
    tags: ['Kotlin', 'Jetpack Compose', 'Firebase', 'Gemini', 'Open-Meteo', 'MVVM'],
    demo: null,
    github: 'https://github.com/Lucasdv96/Aplicacion_OlaCheck',
    status: 'En desarrollo',
  },
  {
    num: '002',
    name: 'CreaPresupuestoPDF',
    desc: 'App Android para crear y gestionar presupuestos de carpintería de aluminio. Genera PDFs profesionales con diagramas técnicos a escala. Integra gestión de clientes y compartir vía WhatsApp/email.',
    tags: ['Kotlin', 'Jetpack Compose', 'Room', 'iText', 'Material Design 3'],
    demo: 'https://github.com/Lucasdv96/CreaPresupuestoPDF',
    github: 'https://github.com/Lucasdv96/CreaPresupuestoPDF',
    status: 'Completado',
  },
  {
    num: '003',
    name: 'Mini Kanban',
    desc: 'Sistema completo de gestión de tareas tipo Kanban con equipos colaborativos. Tablero con 4 estados, prioridades, etiquetas personalizadas, comentarios en tareas e historial de cambios. Autenticación JWT.',
    tags: ['React', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'JWT', 'Kanban'],
    demo: 'https://github.com/Lucasdv96/Mini-Frontend-Con-Rama',
    github: 'https://github.com/Lucasdv96/Mini-Frontend-Con-Rama',
    status: 'Completado',
  },
]

const Projects = () => {
  return (
    <section id="proyectos" className="px-16 py-24 border-t border-white/10">

      {/* Header */}
      <p className="text-[#00e5a0] text-xs tracking-[0.2em] uppercase mb-3">// 02 — Trabajo</p>
      <h2 className="font-extrabold tracking-tighter mb-16 text-white" style={{ fontSize: 'clamp(28px, 4vw, 42px)' }}>
        Proyectos
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((project, i) => (
          <div
            key={i}
            className="group bg-[#111620] border border-white/10 rounded-lg p-8 relative overflow-hidden hover:border-[#00e5a0]/50 hover:-translate-y-2 transition-all duration-300 cursor-pointer"
          >
            {/* Línea top animada */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#00e5a0] to-[#0066ff] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

            {/* Glow on hover */}
            <div className="absolute inset-0 bg-[#00e5a0]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

            {/* Badge de estado */}
            <div className="relative mb-4">
              <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
                project.status === 'Completado'
                  ? 'bg-[#00e5a0]/20 text-[#00e5a0]'
                  : project.status === 'En desarrollo'
                  ? 'bg-[#0066ff]/20 text-[#0066ff]'
                  : 'bg-white/10 text-white/40'
              }`}>
                {project.status}
              </span>
            </div>

            <div className="text-white/20 text-xs tracking-widest mb-5 relative">{project.num}</div>

            <h3 className="font-bold text-lg text-white tracking-tight mb-3 relative group-hover:text-[#00e5a0] transition-colors duration-300">{project.name}</h3>

            <p className="text-white/40 text-sm leading-relaxed mb-6 group-hover:text-white/60 transition-colors duration-300 relative">{project.desc}</p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6 relative">
              {project.tags.map((tag, j) => (
                <span
                  key={j}
                  className="bg-[#00e5a0]/5 border border-[#00e5a0]/15 text-[#00e5a0] text-xs px-2.5 py-1 rounded group-hover:bg-[#00e5a0]/10 group-hover:border-[#00e5a0]/30 transition-all duration-300"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex gap-5 relative">
              {project.demo && (
                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-white/30 text-xs tracking-wide hover:text-[#00e5a0] transition-colors duration-200">
                  ↗ Ver Proyecto
                </a>
              )}
              {project.github && project.github !== '#' && (
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-white/30 text-xs tracking-wide hover:text-[#00e5a0] transition-colors duration-200">
                  ⌥ GitHub
                </a>
              )}
            </div>
            </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
