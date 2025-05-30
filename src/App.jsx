
import './App.css';
import About from './view/layouts/components/About';
import Contact from './view/layouts/components/Contact';
import Hero from './view/layouts/components/Hero';
import Services from './view/layouts/components/Services';
import Team from './view/layouts/components/Team';
import Footer from './view/layouts/footer/Footer';
import Navbar from './view/layouts/header/Navbar';

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Contact />
      <Team/>
      <Footer />
    </>
  )
}

export default App
