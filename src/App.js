import React, { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header/Header'

const GuessInput = (props) => {
  return (
    <div id="guess-input-container">
      <input id="guess-input" type="number" placeholder="Enter guess..." min="0" max="100" />
      <button className="submit-btn" type="submit" onClick={() => {
        props.checkGuess(parseInt(document.getElementById('guess-input').value))
        document.getElementById('guess-input').value = null
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
    console.log(randomNum)
    let guessStatus = 'High'

    if(num >= 0 && num <= 100) {
      if(num === randomNum) {
        setGameOver(true)
        guessStatus = 'Correct'
      } else if(num < randomNum) {
        guessStatus = 'Low'
      }

      let guessArr = prevGuesses.slice()
      const newEntry= {
        num: num,
        status: guessStatus
      }
      guessArr.unshift(newEntry)
      
      // save the state
      setPrevGuesses(guessArr)
      setGuess(num)
    }
  }
  
  const init = () => {
    setGameOver(false)

    setRandomNum(Math.floor(Math.random() * 100) + 1)
    setGuess(0)
    setPrevGuesses([])
  }

  useEffect(() => {
    init()
  }, [])

  return (
    <div id="app">
      <Header title="NUMBER GUESS"/>
      <br></br>
      <div id="game-status-container">
        <p>I'm thinking of a number between 1 and 100...</p>
        {gameOver ? <p id="correct-guess-text">Correct! Woohoo!</p> : prevGuesses.length > 0 ? <p className="game-status-text">{guess < randomNum ? 'Too Low!' : 'Too High!'}</p> : ''}
      </div>
      {gameOver ? <div id="reset-btn-container"><button id="reset-btn" onClick={init}>Reset</button></div> : <GuessInput checkGuess={checkGuess} />}
      <ul id="prev-guesses-list">
        {prevGuesses.map((prevGuess, index) => (
          <li key={index} style={prevGuess.status === 'Correct' ? {color: 'green'} : null }>{prevGuess.num}, {prevGuess.status}</li>
        ))}
      </ul>
    </div>
  )
}

export default App