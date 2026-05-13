import { useInView } from '../hooks/useInView'

const skills = [
    { icon: '⚛️', name: 'React', level: 'Frontend' },
    { icon: '🟩', name: 'Node.js', level: 'Backend' },
    { icon: '🗄️', name: 'SQL', level: 'Base de datos' },
    { icon: '☕', name: 'Java', level: 'Backend' },
    { icon: '🎨', name: 'HTML / CSS / JS', level: 'Frontend' },
    { icon: '🐙', name: 'Git & GitHub', level: 'Control de versiones' },
    { icon: '🚀', name: 'Vercel', level: 'Deployment' },
    { icon: '🤖', name: 'AI Integration', level: 'Inteligencia Artificial' },
    { icon: '📱', name: 'React Native', level: 'Mobile' },
    { icon: '🅺', name: 'Kotlin', level: 'Backend' },
    { icon: '⚡', name: 'Tailwind CSS', level: 'Frontend' },
]

const Skills = () => {
    const { ref, isInView } = useInView()

    return (
        <section ref={ref} id="skills" className="px-16 py-24 border-t border-white/10">
        {/* Header */}
        <div className={`transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-[#00e5a0] text-xs tracking-[0.2em] uppercase mb-3">// 01 -Habilidades</p>
          <h2 className="font-extrabold tracking-tighter mb-16 text-white" style={{ fontSize: 'clamp(28px, 4vw, 48px)'}}>Stack tecnologico </h2>
        </div>

        {/* Grid de habilidades */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 border border-white/10">
        {skills.map((skill, i) => (
          <div
            key={i}
            className={`bg-[#111620] p-8 border-r border-b border-white/10 hover:bg-[#161d2c] hover:border-[#00e5a0]/20 transition-all duration-300 last:border-r-0 cursor-pointer transform hover:scale-105 ${
              isInView ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              transitionDelay: isInView ? `${i * 50}ms` : '0ms'
            }}
          >
            <div className="text-2xl mb-4">{skill.icon}</div>
            <div className="font-bold text-sm text-white mb-2">{skill.name}</div>
            <div className="text-[#00e5a0] text-xs tracking-widest uppercase">{skill.level}</div>
          </div>
        ))}
      </div>
      </section>
    )
}

export default Skills

