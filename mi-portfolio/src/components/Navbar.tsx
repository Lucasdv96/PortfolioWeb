import { useState, useEffect } from 'react'

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  const navItems = [
    { label: 'Skills', id: 'skills' },
    { label: 'Proyectos', id: 'proyectos' },
    { label: 'Sobre mi', id: 'sobre-mi' },
    { label: 'Contacto', id: 'contacto' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id))
      let current = ''
      for (const section of sections) {
        if (section) {
          const rect = section.getBoundingClientRect()
          if (rect.top <= window.innerHeight / 2) {
            current = section.id
          }
        }
      }
      setActiveSection(current)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [navItems])

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg"
      style={{
        background: 'rgba(0,34,51,0.75)',
        borderBottom: '1px solid rgba(192,214,234,0.08)',
      }}
    >
      <div className="max-w-full px-6 md:px-16 py-4 flex justify-between items-center">

        {/* Logo */}
        <a
          href="#"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="cursor-pointer font-bold text-lg tracking-tight hover:opacity-80 transition-opacity"
          style={{ fontFamily: "'Syne', sans-serif" }}
        >
          <span style={{ color: '#DDFF55' }}>Lucas</span>
          <span style={{ color: '#F6F2E8' }}>DelValle</span>
          <span style={{ color: 'rgba(192,214,234,0.7)' }}>.dev</span>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 list-none items-center">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className="relative transition-all duration-200"
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '10px',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: activeSection === item.id ? '#DDFF55' : 'rgba(192,214,234,0.4)',
                  fontWeight: activeSection === item.id ? 700 : 400,
                }}
                onMouseEnter={e => { if (activeSection !== item.id) e.currentTarget.style.color = '#DDFF55' }}
                onMouseLeave={e => { if (activeSection !== item.id) e.currentTarget.style.color = 'rgba(192,214,234,0.4)' }}
              >
                {item.label}
                {activeSection === item.id && (
                  <span
                    className="absolute left-0 w-full"
                    style={{ bottom: '-2px', height: '1px', background: '#DDFF55' }}
                  />
                )}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span className={`w-6 h-0.5 transition-all ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} style={{ background: '#F6F2E8' }} />
          <span className={`w-6 h-0.5 transition-all ${mobileMenuOpen ? 'opacity-0' : ''}`} style={{ background: '#F6F2E8' }} />
          <span className={`w-6 h-0.5 transition-all ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} style={{ background: '#F6F2E8' }} />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div
          className="md:hidden px-6 py-4"
          style={{ borderTop: '1px solid rgba(192,214,234,0.08)', background: '#002233' }}
        >
          <ul className="flex flex-col gap-4 list-none">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block transition-colors duration-200"
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '11px',
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color: activeSection === item.id ? '#DDFF55' : 'rgba(192,214,234,0.4)',
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}

export default Navbar
