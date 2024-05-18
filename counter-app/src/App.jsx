import './App.css'
import { useState } from 'react'

function App() {
  const[counter, setCounter] = useState(0)
  
  function incrementHandler() {
    setCounter(counter + 1 );
  }

  function decrementHandler(){
     if(counter > 0){
      setCounter(counter - 1)
    }
  }

  function resetHandler() {
    setCounter(0);
  }

  const buttonsStyle = {
    backgroundColor: 'black',color:'white'
  }

  return (
    <>
      <h1 style={{color:'red'}}>{counter}</h1>
      <button onClick={incrementHandler} style={buttonsStyle}>Increment</button>
      <button onClick={decrementHandler} style={buttonsStyle}>Decrement</button>
      <button onClick={resetHandler} style={buttonsStyle}>Reset</button>

    </>
  )
}

export default App
