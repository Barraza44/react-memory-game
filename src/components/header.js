import React from "react";
import "./header.css"

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { score, highScore } = this.props.score;
    return(
      <header>
      <h1 className="title">Metallic memory game!</h1>
      <h2 className="second-title">Don't click any metal more than once or you'll loose</h2>
      <p className="score">Your Score: {score}</p>
      <p className="high-score">Your High Score: {highScore}</p>
      </header>
    );
  }
}
export default Header;
