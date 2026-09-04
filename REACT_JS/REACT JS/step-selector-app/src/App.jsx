import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [step, setStep] = useState(1)
  let advices =["leran HTML lets go", "bestprograming language is javascript","Focus on one task at a time."]
  let description = [
    "HTML (HyperText Markup Language) is the standard code used to build and structure web pages. , telling your web browser how to ",
    " is arguably the most popular and versatile programming language in the world, dominating modern web development.",
    "Focusing on one task at a time, or single-tasking, maximizes efficiency and reduces stress"


  ]
  const handlePrev = ()=> {

   (step != 1) ? setStep(step - 1):setStep(3)
  }
  const handleNext = () => {
   (step != 3) ? setStep (step + 1) :setStep(1)
  }
    

  return (
    <>
    
    <div className="container">
   <ul className=''>
   <li className={step === 1 ? "active" : ""}>1</li>
  <li className={step === 2 ? "active" : ""}>2</li>
  <li className={step === 3 ? "active" : ""}>3</li>
   </ul>
   <div className='hero'>
    <h1>ADVISE :  {advices[step - 1]}</h1>
    <p> {description[step - 1]}</p>
   </div>
   <div className='btn '>
    <button onClick={handlePrev }>previous</button>
    <button onClick={handleNext }>next</button>
   </div>
   </div>
    </>
  )
}

export default App
