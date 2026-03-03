const projects = [
  {
    num: '001',
    name: 'Sistema de Gestión',
    desc: 'App fullstack con autenticación, CRUD completo y panel de administración. Backend en Node.js, frontend en React.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'JWT'],
    demo: '#',
    github: '#',
  },
  {
    num: '002',
    name: 'Proyecto 2',
    desc: 'Descripción breve del proyecto. Qué problema resuelve y qué tecnologías usaste para construirlo.',
    tags: ['Java', 'SQL', 'REST API'],
    demo: '#',
    github: '#',
  },
  {
    num: '003',
    name: 'Próximamente',
    desc: 'Nuevo sistema en desarrollo. Las mejores ideas están a punto de tomar forma...',
    tags: ['En progreso'],
    demo: null,
    github: '#',
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
            className="group bg-[#111620] border border-white/10 rounded-lg p-8 relative overflow-hidden hover:border-[#00e5a0]/20 hover:-translate-y-1 transition-all duration-300"
          >
            {/* Línea top animada */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#00e5a0] to-[#0066ff] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

            <div className="text-white/20 text-xs tracking-widest mb-5">{project.num}</div>

            <h3 className="font-bold text-lg text-white tracking-tight mb-3">{project.name}</h3>

            <p className="text-white/40 text-sm leading-relaxed mb-6">{project.desc}</p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag, j) => (
                <span
                  key={j}
                  className="bg-[#00e5a0]/5 border border-[#00e5a0]/15 text-[#00e5a0] text-xs px-2.5 py-1 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex gap-5">
              {project.demo && (
                <a href={project.demo} className="text-white/30 text-xs tracking-wide hover:text-[#00e5a0] transition-colors duration-200">
                  ↗ Demo en vivo
                </a>
              )}
              <a href={project.github} className="text-white/30 text-xs tracking-wide hover:text-[#00e5a0] transition-colors duration-200">
                ⌥ GitHub
              </a>
            </div>
            </div>
        ))}
      </div>
    </section>
  )
}

export default Projects