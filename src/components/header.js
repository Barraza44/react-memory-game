import React from "react";

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { score, highScore } = this.props.score;
    return(
      <header>
      <h1>Metallic memory game!</h1>
      <h2>Don't click any metal more than once or you'll loose</h2>
      <p>Your Score: {score}</p>
      <p>Your High Score: {highScore}</p>
      </header>
    );
  }
}
export default Header;
