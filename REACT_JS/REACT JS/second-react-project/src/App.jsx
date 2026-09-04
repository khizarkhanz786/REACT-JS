import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <nav>
      <h1>
        logo
      </h1>
      <ul>
        <li>home</li>
        <li>about</li>
        <li>services</li>
        <li>contact</li>
      </ul>
     </nav>
     <section className='hero'>
      <div className="main">
        <h1>creative <span>bussiness</span></h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut voluptatem, dicta vero provident iusto vel sed error saepe eos recusandae dolorem soluta cupiditate neque nulla iure, nobis ut. Tempora, doloremque.</p>
      <button>learn more</button>
      </div>
      
     </section>
     <section className="features-section">
  <div className="features-container">
    <div className="feature-card">
      <div className="icon">⚙️</div>
      <h3>Our Process</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, repellendus.</p>
    </div>

    <div className="feature-card">
      <div className="icon">🔗</div>
      <h3>Integrated Teams</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, repellendus.</p>
    </div>

    <div className="feature-card">
      <div className="icon">🛡️</div>
      <h3>Proven Success</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, repellendus.</p>
    </div>
  </div>
</section>
     <section className='footer-section'>
      <div className="footer">
        <div className='one'>
          <h3>bussiness</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo, repellendus.
          </p>
        </div>
        <div className='two'>
          <h3>shop</h3>
          <ul>
            <li>home</li>
            <li>about</li>
            <li>services</li>
            <li>contact</li>
          </ul>
        </div>
        <div className='three'>
          <h3>contact</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo, repellendus.
          </p>
        </div>
        <div className='four'>
          <h3>follow us</h3>
          <ul>
            <li>facebook</li>
            <li>twitter</li>
            <li>instagram</li>
            <li>linkedin</li>
          </ul>
        </div>
      </div>
     </section>
    </>
  )
}

export default App
