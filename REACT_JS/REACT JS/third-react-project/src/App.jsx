import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from './components/Navbar.jsx'
import Hero from './components/hero.jsx'
import Card from './components/Card.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <>
      <Navbar />
       <Hero />
       <Card />
       <Footer />
    </>
  )
}

export default App
