import { useEffect, useRef, useState } from 'react'

const CAROUSEL_SLIDES = [
  {
    filename: 'dev.ts',
    accent: '#DDFF55',
    code: `const dev = {\n  name: "Lucas",\n  role: "Full Stack",\n  stack: [\n    "React",\n    "Kotlin",\n    "Node.js"\n  ],\n  open: true ✓\n}`,
  },
  {
    filename: 'App.tsx',
    accent: '#C0D6EA',
    code: `const App = () => {\n  return (\n    <Router>\n      <Navbar />\n      <Hero />\n      <Skills />\n      <Projects />\n      <Contact />\n    </Router>\n  )\n}`,
  },
  {
    filename: 'OlaCheck.kt',
    accent: '#C5C0C9',
    code: `class MainActivity :\n  AppCompatActivity() {\n\n  override fun onCreate(\n    bundle: Bundle?\n  ) {\n    setContent {\n      OlaCheckTheme {\n        NavGraph()\n      }\n    }\n  }\n}`,
  },
]

const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const roleRef = useRef<HTMLParagraphElement>(null)
  const [carouselIndex, setCarouselIndex] = useState(0)

  // Partículas canvas
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const PARTICLE_COUNT = 55
    const MAX_DIST = 120

    const particles = Array.from({ length: PARTICLE_COUNT }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      r: Math.random() * 1.5 + 0.5,
    }))

    let animId: number

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(221,255,85,0.55)'
        ctx.fill()

        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j]
          const dx = p.x - q.x
          const dy = p.y - q.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < MAX_DIST) {
            const alpha = (1 - dist / MAX_DIST) * 0.14
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(q.x, q.y)
            ctx.strokeStyle = `rgba(192,214,234,${alpha})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }
      animId = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(animId)
    }
  }, [])

  // Typewriter effect
  useEffect(() => {
    const roles = [
      'Full Stack Dev Jr.',
      'React · Node.js · SQL',
      'Kotlin · Android Dev',
      'Full Stack Dev Jr.',
    ]
    let ri = 0, ci = 0, deleting = false
    let timer: ReturnType<typeof setTimeout>

    const el = roleRef.current
    if (!el) return

    const tick = () => {
      const cur = roles[ri % roles.length]
      if (!deleting) {
        ci++
        el.innerHTML = cur.slice(0, ci) + '<span class="tw-cursor"></span>'
        if (ci >= cur.length) {
          deleting = true
          timer = setTimeout(tick, 1800)
          return
        }
        timer = setTimeout(tick, 65)
      } else {
        ci--
        el.innerHTML = cur.slice(0, ci) + '<span class="tw-cursor"></span>'
        if (ci <= 0) {
          deleting = false
          ri++
          timer = setTimeout(tick, 300)
          return
        }
        timer = setTimeout(tick, 38)
      }
    }

    timer = setTimeout(tick, 900)
    return () => clearTimeout(timer)
  }, [])

  // Auto-avance carrusel
  useEffect(() => {
    const interval = setInterval(() => {
      setCarouselIndex(prev => (prev + 1) % CAROUSEL_SLIDES.length)
    }, 3500)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden" style={{ background: '#002233' }}>

      {/* Canvas partículas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full z-0 pointer-events-none"
      />

      {/* Contenido hero */}
      <div className="relative z-10 flex-1 px-8 md:px-16 pt-36 pb-16 grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-12 items-center w-full">

        {/* Columna izquierda */}
        <div>
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6"
            style={{
              background: 'rgba(221,255,85,0.07)',
              border: '1px solid rgba(221,255,85,0.25)',
              color: '#DDFF55',
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '9px',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: '#DDFF55', animation: 'badge-pulse 2s infinite' }}
            />
            Disponible para trabajar
          </div>

          {/* Nombre */}
          <h1
            className="font-extrabold leading-none mb-3"
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: 'clamp(48px, 8vw, 82px)',
              letterSpacing: '-3px',
              color: '#F6F2E8',
            }}
          >
            Lucas<br />
            <span style={{ color: 'transparent', WebkitTextStroke: '1.5px #DDFF55' }}>
              Del Valle
            </span>
          </h1>

          {/* Typewriter */}
          <p
            ref={roleRef}
            className="mb-4"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '12px',
              color: '#C0D6EA',
              opacity: 0.6,
              letterSpacing: '0.05em',
              minHeight: '20px',
            }}
          >
            <span className="tw-cursor" />
          </p>

          {/* Descripción */}
          <p
            className="mb-8 leading-relaxed max-w-md"
            style={{
              fontSize: '13px',
              color: '#C0D6EA',
              opacity: 0.45,
              lineHeight: '1.75',
            }}
          >
            Desarrollador apasionado por construir aplicaciones web modernas y apps Android.
            +3 años construyendo y aprendiendo.
          </p>

          {/* CTAs */}
          <div className="flex gap-4 items-center">
            <a
              href="#proyectos"
              className="font-bold rounded-md transition-all duration-200 hover:-translate-y-0.5 active:scale-95 inline-block"
              style={{
                fontFamily: "'Syne', sans-serif",
                fontWeight: 700,
                fontSize: '12px',
                background: '#DDFF55',
                color: '#002233',
                padding: '10px 22px',
                letterSpacing: '0.04em',
              }}
              onMouseEnter={e => (e.currentTarget.style.background = '#cef030')}
              onMouseLeave={e => (e.currentTarget.style.background = '#DDFF55')}
            >
              Ver Proyectos
            </a>

            <a
              href="#contacto"
              className="transition-colors duration-200"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '11px',
                color: 'rgba(192,214,234,0.4)',
                textDecoration: 'none',
                letterSpacing: '0.08em',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = '#C0D6EA')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(192,214,234,0.4)')}
            >
              Contáctame →
            </a>
          </div>
        </div>

        {/* Columna derecha — Carrusel 3D */}
        <div className="hidden lg:flex flex-col items-center justify-center gap-4">
          {/* Viewport del carrusel */}
          <div style={{ position: 'relative', width: '340px', height: '230px' }}>
            {CAROUSEL_SLIDES.map((slide, i) => {
              const total = CAROUSEL_SLIDES.length
              const raw = ((i - carouselIndex) % total + total) % total
              const offset = raw > Math.floor(total / 2) ? raw - total : raw
              const isActive = offset === 0
              const rotateY = offset * 45
              const translateX = offset * 75
              const scale = isActive ? 1 : 0.78
              const opacity = Math.abs(offset) > 1 ? 0 : (isActive ? 1 : 0.55)
              const zIndex = isActive ? 10 : 5 - Math.abs(offset)

              return (
                <div
                  key={i}
                  onClick={() => !isActive && setCarouselIndex(i)}
                  style={{
                    position: 'absolute',
                    width: '220px',
                    left: '50%',
                    top: '50%',
                    transform: `translate(-50%, -50%) perspective(600px) rotateY(${rotateY}deg) translateX(${translateX}px) scale(${scale})`,
                    transition: 'all 0.6s cubic-bezier(0.23, 1, 0.32, 1)',
                    opacity,
                    zIndex,
                    cursor: isActive ? 'default' : 'pointer',
                    background: 'rgba(0,34,51,0.85)',
                    border: `1px solid ${isActive ? `${slide.accent}44` : 'rgba(192,214,234,0.08)'}`,
                    borderRadius: '12px',
                    padding: '14px',
                    backdropFilter: 'blur(12px)',
                    boxSizing: 'border-box',
                    boxShadow: isActive ? `0 8px 32px rgba(0,0,0,0.4), 0 0 0 1px ${slide.accent}22` : 'none',
                  }}
                >
                  {/* Barra superior terminal */}
                  <div style={{ display: 'flex', gap: '5px', marginBottom: '10px', alignItems: 'center' }}>
                    <div style={{ width: '9px', height: '9px', borderRadius: '50%', background: '#ff5f57' }} />
                    <div style={{ width: '9px', height: '9px', borderRadius: '50%', background: '#ffbd2e' }} />
                    <div style={{ width: '9px', height: '9px', borderRadius: '50%', background: '#28ca41' }} />
                    <span style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: '8px',
                      color: slide.accent,
                      opacity: 0.5,
                      marginLeft: '6px',
                      letterSpacing: '0.05em',
                    }}>
                      {slide.filename}
                    </span>
                  </div>
                  {/* Código */}
                  <pre style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '9px',
                    lineHeight: '1.75',
                    color: 'rgba(192,214,234,0.6)',
                    margin: 0,
                    whiteSpace: 'pre-wrap',
                    wordBreak: 'break-word',
                  }}>
                    {slide.code}
                  </pre>
                </div>
              )
            })}
          </div>

          {/* Dots de navegación */}
          <div style={{ display: 'flex', gap: '7px', alignItems: 'center' }}>
            {CAROUSEL_SLIDES.map((slide, i) => (
              <button
                key={i}
                onClick={() => setCarouselIndex(i)}
                style={{
                  width: i === carouselIndex ? '18px' : '6px',
                  height: '6px',
                  borderRadius: '3px',
                  background: i === carouselIndex ? slide.accent : 'rgba(192,214,234,0.15)',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.35s ease',
                  padding: 0,
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div
        className="absolute bottom-6 left-8 md:left-16 flex items-center gap-2 z-10"
        style={{ fontFamily: "'JetBrains Mono', monospace" }}
      >
        <div className="scroll-line" />
        <span style={{ fontSize: '8px', color: 'rgba(192,214,234,0.18)', letterSpacing: '0.14em', textTransform: 'uppercase' }}>
          Scroll
        </span>
      </div>

      {/* Stats bar */}
      <div
        className="relative z-10 flex justify-between items-center px-8 md:px-16 py-3"
        style={{ borderTop: '1px solid rgba(192,214,234,0.06)', background: 'rgba(0,34,51,0.88)' }}
      >
        <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '8px', color: 'rgba(192,214,234,0.2)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
          // portfolio v2.0 — 2026
        </p>
        <div className="flex gap-5">
          {[
            { num: '3+', label: 'Proyectos' },
            { num: '10+', label: 'Tecnologías' },
            { num: '∞', label: 'Ganas' },
          ].map((s, i) => (
            <div key={i} className="flex flex-col items-end">
              <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: '17px', color: '#DDFF55', lineHeight: 1 }}>{s.num}</span>
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '7.5px', color: 'rgba(192,214,234,0.25)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero
