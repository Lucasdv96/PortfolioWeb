import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className="bg-[#080b10] min-h-screen text-white">
      <Hero />
      <Navbar />
      <Skills />
      <Projects />
      <About />
      <Contact />
    </div>
  )
}

export default App