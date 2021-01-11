import React from 'react';
import ReactDOM from 'react-dom';

const GuessList = (props) => {
  return (
    <ul id="guess-list">
      {props.prevGuesses.map((guess, index) => (
        <li>{guess}</li>
      ))}
    </ul>
  )
}

class Game extends React.Component {
  constructor() {
    super()
    this.state = {
      randomNumber: 0,
      prevGuesses: []
    }
  }

  render() {
    return (
      <div id="game-container">
        <GuessList prevGuesses={this.state.prevGuesses} />
      </div>
    )
  }
}

ReactDOM.render(
  <React.StrictMode>
    <Game />
  </React.StrictMode>,
  document.getElementById('root')
);