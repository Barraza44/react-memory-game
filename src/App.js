import './App.css';
import React from "react";
import Header from "./components/header";

import Gameboard from "./components/Gameboard";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
      highScore: 0,
    }
    this.incrementScore.bind(this);
    this.setHighScore.bind(this);
  }

  incrementScore = () => {
    this.setState({
      score: this.state.score + 1
    })
  }

  setHighScore = () => {
    if (this.state.score > this.state.highScore) {
      this.setState({
        highScore: this.state.score,
      })
    }
    this.setState({
      score: 0
    })
  }

  render() {
    return (
      <div className="App">
        <Header score={this.state} />
        <Gameboard score={this.state} increment={this.incrementScore} setHighScore={this.setHighScore} />
      </div>
    );
  }
}

export default App;
