const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-16 py-5 border-b border-white/10 bg-[#080b10]/80 backdrop-blur-md">
      
      {/* Logo */}
      <div className="font-bold text-lg tracking-tight">
        <span className="text-[#00e5a0]">Lucas</span>
        <span className="text-white">DelValle</span>
        <span className="text-[#00e5a0]">.dev</span>
      </div>

      {/* Links */}
      <ul className="flex gap-9 list-none">
        {['Skills', 'Proyectos', 'Sobre mí', 'Contacto'].map((item) => (
          <li key={item}>
              <a
            
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              className="text-white/40 text-xs tracking-widest uppercase hover:text-[#00e5a0] transition-colors duration-200"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar