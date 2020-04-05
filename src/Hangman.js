import React, { Component } from "react";
import "./Hangman.css";
import { randomWord } from "./words";
import img0 from "./assets/images/0.jpg";
import img1 from "./assets/images/1.jpg";
import img2 from "./assets/images/2.jpg";
import img3 from "./assets/images/3.jpg";
import img4 from "./assets/images/4.jpg";
import img5 from "./assets/images/5.jpg";
import img6 from "./assets/images/6.jpg";

class Hangman extends Component {
  /** by default, allow 6 guesses and use provided gallows images. */
  static defaultProps = {
    maxWrong: 6,
    images: [img0, img1, img2, img3, img4, img5, img6],
  };

  constructor(props) {
    super(props);
    this.state = { nWrong: 0, guessed: new Set(), answer: randomWord() };
    this.handleGuess = this.handleGuess.bind(this);
    this.reset = this.reset.bind(this);
  }

  reset() {
    this.setState({ nWrong: 0, guessed: new Set(), answer: randomWord() });
  }

  /** guessedWord: show current-state of word:
    if guessed letters are {a,p,e}, show "app_e" for "apple"
  */
  guessedWord() {
    return this.state.answer.word
      .split("")
      .map(ltr => (this.state.guessed.has(ltr) ? ltr : "_"));
  }

  /** handleGuest: handle a guessed letter:
    - add to guessed letters
    - if not in answer, increase number-wrong guesses
  */
  handleGuess(evt) {
    let ltr = evt.target.value;
    this.setState(st => ({
      guessed: st.guessed.add(ltr),
      nWrong: st.nWrong + (st.answer.word.includes(ltr) ? 0 : 1),
    }));
  }

  /** generateButtons: return array of letter buttons to render */
  generateButtons() {
    return "abcdefghijklmnopqrstuvwxyz".split("").map(ltr => (
      <button
        value={ltr}
        key={ltr}
        onClick={this.handleGuess}
        disabled={this.state.guessed.has(ltr)}
      >
        {ltr}
      </button>
    ));
  }

  /** render: render game */
  render() {
    const gameOver = this.state.nWrong >= this.props.maxWrong;
    const isWinner = this.guessedWord().join("") === this.state.answer.word;
    const altText = !gameOver
      ? `${this.state.nWrong} out of ${this.props.maxWrong} guesses`
      : "Game Over!";
    let gameState = this.generateButtons();
    if (gameOver) gameState = "You Lose!";
    if (isWinner) gameState = "You Won!";
    return (
      <div className="Hangman">
        <h1>Hangman</h1>
        <img src={this.props.images[this.state.nWrong]} alt={altText} />
        <p>Number of wrong guesses: {this.state.nWrong}</p>
        <p>Tip: {this.state.answer.tip}</p>
        <p className="Hangman-word">
          {!gameOver ? this.guessedWord() : this.state.answer.word}
        </p>
        <p className="Hangman-btns">{gameState}</p>
        <button onClick={this.reset} id="reset">
          Reset
        </button>
      </div>
    );
  }
}

export default Hangman;
