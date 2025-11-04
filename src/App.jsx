import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Tech from './components/Tech'
import Certificate from './components/Certificate'
import Education from './components/Education'
import Works from './components/Works'
import Contact from './components/Contact'
import StarsCanvas from './components/canvas/Star'

function App() {
  return (
    <div className="relative z-0 bg-[#040412] min-h-screen overflow-hidden">
      <StarsCanvas />

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Tech />
        <Education />
        <Certificate />
        <Works />
        <Contact />
      </div>
    </div>
  );
}

export default App;
