import { useState } from 'react'
import './App.css'

function App() {
  let [number, setNumber] = useState(5)

  function incValue() {
    number = number + 1;
    if (number > 15) {
      alert(" Number is greater than 15")
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
      <button onClick={incValue}>Increase : {number}</button>
      <br />
      <button onClick={decValue}>Decrease : {number}</button>
      <p>Footer : {number}</p>
    </>
  )
}

export default App
