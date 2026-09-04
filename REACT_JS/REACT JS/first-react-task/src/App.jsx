import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import khizar from './assets/2226.jpg'
function App() {
 

  return (
    <>
     <nav className='navbar'>
      <h1>khizar khan</h1>
      <ul>
        <li>home</li>
        <li>about</li>
        <li>services</li>
        <li>contact</li>
      </ul>
     </nav>

     <main>
      <div className="card">
          <img src={khizar} alt="Khizar Khan" />
        <h3>hi i'm khizar khan </h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt quos nesciunt exercitationem maiores animi pariatur!</p>
      </div>
      <div className="card">
          <img src={khizar} alt="Khizar Khan" />
        <h3>hi i'm khizar khan </h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt quos nesciunt exercitationem maiores animi pariatur!</p>
      </div>
      <div className="card">
          <img src={khizar} alt="Khizar Khan" />
        <h3>hi i'm khizar khan </h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt quos nesciunt exercitationem maiores animi pariatur!</p>
      </div>
     </main>
    </>
  )
}

export default App
