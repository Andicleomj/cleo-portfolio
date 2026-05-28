import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Work from './components/Work'
import Curation from './components/Curation'
import Archive from './components/Archive'
import About from './components/About'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Work />
        <Curation />
        <Archive />
        <About />
      </main>
      <Footer />
    </>
  )
}

export default App
