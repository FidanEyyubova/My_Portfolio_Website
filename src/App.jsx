import Navbar from './components/Navbar'
import Hero from './components/Hero'

function App() {

  return (
    <div className='relative z-0'>
      <div className='bg-hero-pattern bg-over bg-no-repeat bg-center'>
        <Navbar />
        <Hero />
      </div>
    </div>
  )
}

export default App
