const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center px-16 pt-40 pb-20 overflow-hidden">

      {/* Glow de fondo */}
      <div className="absolute w-150 h-150 rounded-full bg-[#00e5a0]/5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-3xl pointer-events-none" />

      {/* Grid de fondo */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage: `linear-gradient(rgba(0,229,160,0.03) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(0,229,160,0.03) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      {/* Contenido */}
      <div className="relative z-10 max-w-3xl">

        {/* Badge disponible */}
        <div className="inline-flex items-center gap-2 bg-[#00e5a0]/10 border border-[#00e5a0]/20 text-[#00e5a0] px-4 py-2 rounded-full text-xs tracking-widest uppercase mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00e5a0] animate-pulse" />
          Disponible para trabajar
        </div>

        {/* Nombre */}
        <h1 className="font-extrabold leading-none tracking-tighter mb-4" style={{ fontSize: 'clamp(48px, 8vw, 88px)' }}>
          Lucas<br />
          <span className="text-transparent" style={{ WebkitTextStroke: '1px #00e5a0' }}>
            Del Valle
          </span>
        </h1>

        {/* Rol */}
        <p className="text-white/40 font-semibold mb-7" style={{ fontSize: 'clamp(16px, 2.5vw, 22px)' }}>
          Full Stack Developer Jr. &mdash; React · Node.js · SQL · Kotlin
        </p>

        {/* Descripción */}
        <p className="text-white/40 text-sm leading-relaxed max-w-lg mb-12">
          Desarrollador apasionado por construir aplicaciones web modernas, 
          aplicaciones android y algoritmos. Más de 3 años de experiencia aprendiendo y construyendo.
        </p>

        {/* CTAs */}
        <div className="flex gap-4 items-center">
          <a
            href="#proyectos"
            style={{
              backgroundColor: '#00e5a0',
              color: '#ffffff',
            }}
            className="font-bold text-sm px-7 py-3.5 rounded-md tracking-wide hover:-translate-y-0.5 transition-all duration-200 inline-block"
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#00c986'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#00e5a0'}
          >
            Ver Proyectos
          </a>

          <a
            href="#contacto"
            className="text-white/40 text-sm font-semibold hover:text-[#00e5a0] transition-colors duration-200"
          >
            Contáctame
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero