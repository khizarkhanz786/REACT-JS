import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Toogle from './components/Toogle'


function App() {
  const [count, setCount] = useState(0)

  return (
      
    <>

  
    <div className='todo-container'>
      <h3>Count: {count}</h3>
      <div className='button-container'>
        <button onClick={() => setCount(count + 1)}>+</button>
        <button onClick={() => setCount(count + 5)}>+5 </button>
        <button onClick={() => setCount(count > 0 ? count - 1 : 0)}>-</button>
        <button onClick={() => setCount(count > 0 ? count - 5 : 0)}>-5</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
    </div>

         
    <Toogle/>
             </>
  )
}

export default App
