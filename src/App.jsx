import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'

function App() {

  return (
    <div className='relative z-0'>
      <div className='bg-hero-pattern bg-over bg-no-repeat bg-center'>
        <Navbar />
        <Hero />
        <About />
      </div>
    </div>
  )
}

export default App
