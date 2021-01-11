import React, { useRef } from 'react'

class Game extends React.Component {
  state = {
    randomNumber: 0,
    guess: null,
    gameOver: false
  }

  componentDidMount() {
    this.setState({
      randomNumber: this.setRandomNumber()
    })
  }

  setRandomNumber = () => {
    return Math.floor(Math.random() * 100) + 1
  }

  checkGuess = () => {
    const guess = document.getElementById('guess-input').value
    if(guess === this.state.randomNumber) {
      this.setState({
        gameOver: true
      })
    }

    this.setState({
      guess: guess
    })
  }

  render() {
    return (
      <div id="game">
        <form id="guess-input-container" onSubmit={this.checkGuess}>
          <input id="guess-input" type="number" min="0" max="100" placeholder="Enter guess..." />
          <button type="submit">Guess</button>
          <p>{this.state.randomNumber}</p>
          <p>{this.state.guess < this.state.randomNumber ? 'Too Low' : 'Too High'}</p>
          <p>{this.state.gameOver ? 'Correct!' : 'Keep guessing !'}</p>
        </form>
      </div>
    )
  }
}

export default Game