import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Capabilities from './components/Capabilities'
import Industries from './components/Industries'
import Quality from './components/Quality'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-offwhite">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Capabilities />
        <Industries />
        <Quality />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
