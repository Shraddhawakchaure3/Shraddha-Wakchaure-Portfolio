import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div style={{ backgroundColor: 'var(--bg-primary)', minHeight: '100vh' }}>
      <Navbar />
      <main>
        <section id="home">         <Hero />          </section>
        <section id="about">        <About />         </section>
        <section id="skills">       <Skills />        </section>
        <section id="projects">     <Projects />      </section>
        <section id="experience">   <Experience />    </section>
        <section id="achievements"> <Achievements />  </section>
        <section id="contact">      <Contact />       </section>
      </main>
      <Footer />
    </div>
  )
}
