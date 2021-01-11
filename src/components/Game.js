import React from 'react'

class Game extends React.Component {
  state = {
    randomNumber: 0,
    guess: 0
  }

  componentDidMount() {
    this.setState({
      randomNumber: this.setRandomNumber
    })
  }

  setRandomNumber = () => {
    return Math.floor(Math.random() * 100) + 1
  }

  submitGuess = (num) => {
    this.setState({
      guess: num
    })
  }

  checkGuess = () => {
    console.log(this.state.randomNumber)

    const currentState = this.state;
    if(currentState.guess < currentState.randomNumber) {
      
    }
  }

  render() {
    return (
      <div id="game">
        <form id="guess-input-container" onSubmit={this.checkGuess}>
          <input type="number" placeholder="Enter guess..." onChange={(e) => this.submitGuess(e.target.value)}/>
          <button type="submit">Guess</button>
        </form>
      </div>
    )
  }
}

export default Game