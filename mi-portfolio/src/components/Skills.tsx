import { useInView } from '../hooks/useInView'

const skills = [
  { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', name: 'React', level: 'Frontend' },
  { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', name: 'Node.js', level: 'Backend' },
  { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', name: 'SQL', level: 'Base de datos' },
  { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', name: 'Java', level: 'Backend' },
  { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', name: 'HTML / CSS / JS', level: 'Frontend' },
  { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', name: 'Git & GitHub', level: 'Versiones' },
  { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg', name: 'Kotlin', level: 'Android' },
  { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', name: 'TypeScript', level: 'Frontend' },
  { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg', name: 'Tailwind CSS', level: 'Frontend' },
  { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', name: 'React Native', level: 'Mobile' },
  { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg', name: 'Firebase', level: 'Backend' },
]

const Skills = () => {
  const { ref, isInView } = useInView()

  return (
    <section
      ref={ref}
      id="skills"
      className="px-8 md:px-16 py-24"
      style={{ background: '#002233', borderTop: '1px solid rgba(192,214,234,0.06)' }}
    >
      <p style={{ fontFamily: "'JetBrains Mono', monospace", color: '#DDFF55', fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '12px' }}>
        // 01 — Habilidades
      </p>
      <h2
        className="font-extrabold tracking-tighter mb-16"
        style={{ fontFamily: "'Syne', sans-serif", fontSize: 'clamp(28px, 4vw, 48px)', color: '#F6F2E8' }}
      >
        Stack tecnológico
      </h2>

      <div
        className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        style={{ border: '1px solid rgba(192,214,234,0.08)' }}
      >
        {skills.map((skill, i) => (
          <div
            key={i}
            className="p-6 transition-all duration-200 group"
            style={{
              background: 'rgba(17,66,93,0.2)',
              borderRight: '1px solid rgba(192,214,234,0.08)',
              borderBottom: '1px solid rgba(192,214,234,0.08)',
              opacity: isInView ? 1 : 0,
              transitionDelay: isInView ? `${i * 40}ms` : '0ms',
            }}
            onMouseEnter={e => (e.currentTarget.style.background = 'rgba(17,66,93,0.5)')}
            onMouseLeave={e => (e.currentTarget.style.background = 'rgba(17,66,93,0.2)')}
          >
            <img
              src={skill.icon}
              alt={skill.name}
              className="w-8 h-8 mb-4 opacity-80 group-hover:opacity-100 transition-opacity"
            />
            <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: '13px', color: '#F6F2E8', marginBottom: '4px' }}>
              {skill.name}
            </div>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", color: '#DDFF55', fontSize: '9px', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
              {skill.level}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
