import React, { useState, useEffect } from 'react'
import './App.css'

const GuessInput = (props) => {
  const [guessInputVal, setGuessInputVal] = useState(0)

  return (
    <div id="guess-input-container">
      <input type="number" placeholder="Enter guess..." onChange={(e) => setGuessInputVal(e.target.value)}/>
      <button onClick={() => {
        props.setGuess(guessInputVal)
        props.checkGuess()
      }}
      >
        Submit
      </button>
    </div>
  )
}

function App() {
  const [randomNum, setRandomNum] = useState(0)
  const [guess, setGuess] = useState(0)

  const checkGuess = (num) => {
    console.log('Called: checkGuess')
  }
  
  const init = () => {
    setRandomNum(Math.floor(Math.random() * 100) + 1)
  }

  useEffect(() => {
    init()
  }, [])

  return (
    <div id="app">
      <GuessInput setGuess={setGuess} checkGuess={checkGuess} />
      <p>{randomNum}</p>
    </div>
  )
}

export default App