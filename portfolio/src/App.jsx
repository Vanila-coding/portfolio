import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import About from './sections/About.jsx'
import Contact from './sections/Contact.jsx'
import Hero from './sections/Hero.jsx'
import Journey from './sections/Journey.jsx'
import Projects from './sections/Projects.jsx'
import Skills from './sections/Skills.jsx'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Journey />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
