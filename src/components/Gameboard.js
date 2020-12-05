import React from "react";
import Card from "./card";
import Metals from "./metals.json";

class Gameboard extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      Metals
    }

  }

  render() {
    return (
      <main>
        <Card
          id={this.state.Metals[0].id}
          image={this.state.Metals[0].image}
          metal={this.state.Metals[0].metal}
        />
      </main>
    );
  }
}

export default Gameboard;
