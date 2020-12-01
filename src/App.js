import './App.css';
import React from "react";
import Header from "./components/header";
import Metals from "metals.json";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Metals,
      score: 0,
      highScore: 0,
    }
  }

  render() {
    return (
      <div className="App">
        <Header score={this.state} />
      </div>
    );
  }
}

export default App;
