import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [number, setNumber] = useState(5)

  function addValue() {
    number = number + 1;
    if (number > 20) {
      alert(" Number is greater than 20")
    }
    else {
      setNumber(number);
    }
  }

  function decValue() {
    number = number - 1;
    if (number < 0) {
      alert(" Number is less than 0")
    }
    else {
      setNumber(number);
    }
  }

  return (
    <>

      <h1>Number Logic :{number}  </h1>
      <button onClick={addValue}>Increase : {number}</button>
      <br />
      <button onClick={decValue}>Decrease : {number}</button>
      <p>Footer : {number}</p>
    </>
  )
}

export default App
