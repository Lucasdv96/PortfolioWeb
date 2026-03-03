const skills = [
    { icon: '⚛️', name: 'React', level: 'Frontend' },
    { icon: '🟩', name: 'Node.js', level: 'Backend' },
    { icon: '🗄️', name: 'SQL', level: 'Base de datos' },
    { icon: '☕', name: 'Java', level: 'Backend' },
    { icon: '🎨', name: 'HTML / CSS / JS', level: 'Frontend' },
    { icon: '🐙', name: 'Git & GitHub', level: 'Control de versiones' },
    { icon: '⚡', name: 'Tailwind CSS', level: 'Frontend' },
    { icon: '📱', name: 'Responsive Design', level: 'Frontend' },
    { icon: '🔧', name: 'REST APIs', level: 'Backend' },
    { icon: '🧪', name: 'Testing', level: 'General' },
    { icon: '☁️', name: 'AWS', level: 'Cloud' },
    { icon: '🐳', name: 'Docker', level: 'DevOps' },
]

const Skills = () => {
    return (
        <section id="skills" className="px-16 py-24 border-t border-white/10"> 
        {/* Header */}
        <p className="text-[#00e5a0] text-xs tracking-[0.2em] uppercase mb-3">// 01 -Habilidades</p>
        <h2 className="font-extrabold tracking-tighter mb-16 text-white" style={{ fontSize: 'clamp(28px, 4vw, 48px)'}}>Stack tecnologico </h2>

        {/* Grid de habilidades */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 border border-white/10">
        {skills.map((skill, i) => (
          <div
            key={i}
            className="bg-[#111620] p-8 border-r border-b border-white/10 hover:bg-[#161d2c] transition-colors duration-200 last:border-r-0"
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

