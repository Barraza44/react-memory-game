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
  }

  render() {
    return (
      <div className="App">
        <Header score={this.state} />
        <Gameboard  />
      </div>
    );
  }
}

export default App;
