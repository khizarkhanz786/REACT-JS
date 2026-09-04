import  { useState } from 'react'
import '../App.css'

const Toogle = () => {
    const [isDark, setIsDark] = useState(false)

    const themeStyle ={
        backgroundColor: isDark ? '#000000' : '#fcfcf8',
  color: isDark ? '#c8df00' : '#1e293b',
  padding: '20px', 
  borderRadius: '8px'
    }
    const buttonTheme ={
        backgroundColor: isDark ? '#c8df00' : '#787878',
  color: isDark ? '#000000' : '#fcfcf8',
  padding: '10px 20px',
    }

  return (
    <>  
    <div className='toogle-container' style={themeStyle}>
    <h4>Active Theme: {isDark ? 'Dark' : 'Light'}</h4>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab delectus maxime reprehenderit perferendis accusantium a ex, modi in, harum sint ad quidem molestias velit repellat possimus ut, ratione beatae labore.</p>
    <button style={buttonTheme}
      onClick={() => setIsDark(!isDark )}>
        switch theme</button>
    </div>
    </>
  )
}

export default Toogle