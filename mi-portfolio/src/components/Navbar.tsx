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
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[#080b10]/95 backdrop-blur-lg">
      <div className="max-w-full px-6 md:px-16 py-4 flex justify-between items-center">

        {/* Logo */}
        <a href="#" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="cursor-pointer font-bold text-lg tracking-tight hover:opacity-80 transition-opacity">
          <span className="text-[#00e5a0]">Lucas</span>
          <span className="text-white">DelValle</span>
          <span className="text-[#00e5a0]">.dev</span>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 list-none">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`text-xs tracking-widest uppercase transition-all duration-200 relative ${
                  activeSection === item.id
                    ? 'text-[#00e5a0] font-semibold'
                    : 'text-white/40 hover:text-[#00e5a0]'
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#00e5a0]" />
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
          <span className={`w-6 h-0.5 bg-white transition-all ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`w-6 h-0.5 bg-white transition-all ${mobileMenuOpen ? 'opacity-0' : ''}`} />
          <span className={`w-6 h-0.5 bg-white transition-all ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-white/10 bg-[#080b10] px-6 py-4">
          <ul className="flex flex-col gap-4 list-none">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-sm tracking-widest uppercase transition-colors duration-200 block ${
                    activeSection === item.id
                      ? 'text-[#00e5a0] font-semibold'
                      : 'text-white/40 hover:text-[#00e5a0]'
                  }`}
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