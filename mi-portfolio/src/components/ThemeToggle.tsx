import { useTheme } from '../context/ThemeContext'

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className="relative w-10 h-10 rounded-full border border-white/20 hover:border-[#00e5a0]/50 transition-all duration-300 flex items-center justify-center group"
      aria-label="Toggle theme"
    >
      {/* Sun icon for light mode */}
      <svg
        className={`w-5 h-5 transition-all duration-300 absolute ${
          theme === 'light' ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-180'
        }`}
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 18C6.48 18 2 13.52 2 8s4.48-10 10-10 10 4.48 10 10-4.48 10-10 10zm0-18c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8zm3.5 9c.83 0 1.5-.67 1.5-1.5S16.33 4 15.5 4 14 4.67 14 5.5s.67 1.5 1.5 1.5z" />
      </svg>

      {/* Moon icon for dark mode */}
      <svg
        className={`w-5 h-5 transition-all duration-300 absolute ${
          theme === 'dark' ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-180'
        }`}
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M21.64 13a1 1 0 0 0-1.05-.14 8 8 0 1 1 .12-11.5 1 1 0 0 0 1.09 1.7 9.92 9.92 0 0 0 1.32 9.39 1 1 0 0 0-.98 1.55z" />
      </svg>

      {/* Animated background */}
      <div className="absolute inset-0 rounded-full bg-[#00e5a0]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </button>
  )
}

export default ThemeToggle
