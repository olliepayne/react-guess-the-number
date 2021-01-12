import React, { useState, useEffect } from 'react'
import './App.css'

const GuessInput = (props) => {
  return (
    <div id="guess-input-container">
      <input id="guess-input" type="number" placeholder="Enter guess..." />
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
  const [gameOver, setGameOver] = useState(false)
  const [randomNum, setRandomNum] = useState(0)
  const [guess, setGuess] = useState(0)
  const [prevGuesses, setPrevGuesses] = useState([])

  const checkGuess = (num) => {
    if(num >= 0 && num <= 100) {
      if(num === randomNum) {
        setGameOver(true)
      }
  
      setGuess(num)
  
      let guessArr = prevGuesses
      guessArr.push(num)
      setPrevGuesses(guessArr)
    }
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
      <p>Im thinking of a number between 1 and 100...</p>
      {prevGuesses.length > 0 ? <p>{guess < randomNum ? 'Too Low!' : 'Too High!'}</p> : ''}
      <p>{gameOver ? 'Correct! Woohoo!' : ''}</p>
    </div>
  )
}

export default App