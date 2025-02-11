import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
      <div className="card">
             <div className="display">{count}</div>
      <button  disabled ={count==0} onClick={() => setCount((count) => count - 1)} style={{backgroundColor:"black",color:"white"}}>
         sub--
        </button>
        <button onClick={() => setCount(0)}style={{backgroundColor:"red",color:"white",marginLeft:"55px"}}>
          Reset
        </button>
        <button onClick={() => setCount((count) => count + 1)}style={{backgroundColor:"darkgreen",color:"white",marginLeft:"55px"}}>
          Add++
        </button>
      
      </div>
      
    </>
  )
}

export default App
