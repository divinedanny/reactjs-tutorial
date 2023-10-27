import { useState } from 'react'
import './App.css'

function App() {

  // here the useState is a hook it updates the differnt variables
  const [counter, setCounter] = useState(10);
  // let counter = 10;

  // the fucntion takes the setcounter which is incharge of updating the state by adding 1
  // to the variable "count"
  const addValue = () => {
    //to update a particular state multiple time at once we use the callback function where we call the result
    // of the previous state and add the new value to it(update it)
    setCounter((previousCounter) => previousCounter + 1)
    setCounter((previousCounter) => previousCounter + 1)
    setCounter((previousCounter) => previousCounter + 1)
    setCounter((previousCounter) => previousCounter + 1)
  }
  const minusValue = () => {
    setCounter(counter - 1);
  }
  return (
    <>
      <h1>React with me {counter}</h1>
      <h2>Count: {counter}</h2>
      <button
      onClick={addValue}
      > Add</button>
      <button
      onClick={minusValue}
      >Minus</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
