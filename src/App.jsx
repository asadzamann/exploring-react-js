import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'
import Team from './Team'
import User from './User'
import Friends from './Friends'

function App() {
  const [count, setCount] = useState(0)
  function addFive(num) {
    alert (num + 5)
  }
  return (
    <>
      <h1>React Core Concept 2</h1>
      <button onClick={() => {addFive(5)}}>Add Five</button>
      <Counter></Counter>
      <Team></Team>
      <User></User>
      <Friends></Friends>
    </>
  )
}

export default App
