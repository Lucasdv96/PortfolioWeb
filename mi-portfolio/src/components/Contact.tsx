const Contact = () => {
  return (
    <section id="contacto" className="relative px-16 py-32 border-t border-white/10 text-center overflow-hidden">

      {/* Glow de fondo */}
      <div className="absolute w-[400px] h-[400px] rounded-full bg-[#0066ff]/5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-3xl pointer-events-none" />

      <div className="relative z-10">

        <p className="text-[#00e5a0] text-xs tracking-[0.2em] uppercase mb-3">// 04 — Contacto</p>

        <h2
          className="font-extrabold tracking-tighter text-white mb-6"
          style={{ fontSize: 'clamp(32px, 5vw, 60px)' }}
        >
          ¿Trabajamos<br />juntos?
        </h2>

        <p className="text-white/40 text-sm leading-relaxed max-w-sm mx-auto mb-10">
          Estoy abierto a oportunidades laborales, proyectos freelance 
          o simplemente charlar sobre tecnología.
        </p>
         <div className="flex justify-center gap-4 flex-wrap">
              <a
            href="mailto:lucas.delvalle1996@gmail.com"
            className="bg-[#00e5a0] text-white font-bold text-sm px-7 py-3.5 rounded-md tracking-wide hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,229,160,0.3)] transition-all duration-200"
          >
            ✉ Escribime
          </a>
        
              <a
            href="https://www.linkedin.com/in/lucas-del-valle-740277163/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-sm px-7 py-3.5 border border-white/10 rounded-md tracking-wide hover:border-[#00e5a0]/50 hover:text-[#00e5a0] transition-all duration-200"
            >
            LinkedIn
            </a>
                <a
        
            href="https://github.com/Lucasdv96"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-sm px-7 py-3.5 border border-white/10 rounded-md tracking-wide hover:border-[#00e5a0]/50 hover:text-[#00e5a0] transition-all duration-200"
            >
            GitHub
          </a>
        </div>
        </div>
    </section>
  )
}

export default Contact
