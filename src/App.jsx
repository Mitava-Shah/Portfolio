import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './Components/Navbar'
import HeroSection from './Components/Herosection'
import './App.css'
import Skills from './Components/Skills'

function App() {


  return (
    <>
     <Navbar/>
     <HeroSection/>
     <Skills/>
   </>
  )
}

export default App
