import { useState } from 'react'
import Loader from './components/loader/Loader'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import CircuitLine from './components/layout/CircuitLine'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Skills from './components/sections/Skills'
import Journey from './components/sections/Journey'
import Projects from './components/sections/Projects'
import Certificates from './components/sections/Certificates'
import Contact from './components/sections/Contact'

export default function App() {
  const [loading, setLoading] = useState(true)

  return (
    <>
      {loading && <Loader onComplete={() => setLoading(false)} />}

      <div
        className={`transition-opacity duration-700 ${
          loading ? 'pointer-events-none opacity-0' : 'opacity-100'
        }`}
      >
        <CircuitLine />
        <Navbar />

        <main>
          <Hero />
          <About />
          <Skills />
          <Journey />
          <Projects />
          <Certificates />
          <Contact />
        </main>

        <Footer />
      </div>
    </>
  )
}
