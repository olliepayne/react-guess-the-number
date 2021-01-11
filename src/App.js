import React, { useState, useEffect } from 'react'
import './App.css'

const GuessInput = (props) => {
  return (
    <div id="guess-input-container">
      <input id="guess-input" type="number" placeholder="Enter guess..."/>
      <button onClick={() => {
        props.checkGuess(parseInt(document.getElementById('guess-input').value))
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
    console.log(`Guess: ${num}`)

    setGuess(num)
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
      <p>{guess === randomNum ? 'Correct!' : 'Keep guessing!'}</p>
    </div>
  )
}

export default App