import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Tech from './components/Tech'
import Education from './components/Education'
import Certificate from './components/Certificate'

function App() {

  return (
    <div className='relative z-0 bg-[#050816]'>
      <div className='bg-hero-pattern bg-over bg-no-repeat bg-center'>
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Tech />
        <Education />
        <Certificate />
      </div>
    </div>
  )
}

export default App
