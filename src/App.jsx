import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './Components/Navbar'
import HeroSection from './Components/Herosection'
import './App.css'
import Skills from './Components/Skills'
import AboutMe from "./Components/AboutMe"
import Projects from './Components/Projects'
import ContactMe from './Components/ContactMe'
import Footer from "./Components/Footer"

function App() {


  return (
    <>
     <Navbar/>
     <HeroSection/>
     <AboutMe/>
     <Projects/>
     <Skills/>
     <ContactMe/>
     <Footer/>
   </>
  )
}

export default App
