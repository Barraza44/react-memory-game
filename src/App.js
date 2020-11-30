import './App.css';
import React from "react";

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
        <p>Hello there</p>
      </div>
    );
  }
}

export default App;
