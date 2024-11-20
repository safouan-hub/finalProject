
import Hero from "./Hero"
import NavBarDemo from "./NavBarDemo"
import SmoothBar from "./SmoothBar"
import Header from "./Header"
import Footer from "./Footer"
import HeroHero from "./HeroHero"
import FAQ from './FAQ'
import Test from './Test'
import Contact from "./Contact"
import { Route, Routes } from "react-router-dom"
import './App.css'
import Contactini from "./Contactini"

function App() {
  return (
    <div>
     <SmoothBar/>
     <NavBarDemo/>
     <Routes>
      <Route path="/" element={<>
              <HeroHero />
              <Header />
              <Hero />
              <FAQ />
              
            </>}/>
            <Route path="/about" element={<Test />} />
            <Route path="/contact" element={<Contact/>}/>
     </Routes>
     <Contactini/>
     <Footer/>
    </div>
    
  )
}

export default App
