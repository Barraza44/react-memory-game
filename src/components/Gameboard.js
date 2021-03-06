import React from "react";
import Card from "./card";
import Calcium from "../images/calcium.jpg";
import Chromium from "../images/chromium.jpg";
import Copper from "../images/copper.jpg";
import Gold from "../images/gold.jpg";
import Iridium from "../images/iridium.jpg";
import Iron from "../images/iron.jpg";
import Lead from "../images/lead.jpg";
import Magnesium from "../images/magnesium.jpg";
import Sodium from "../images/sodium.jpg";
import Potassium from "../images/potassium.jpg";
import Titanium from "../images/titanium.JPG";
import Vanadium from "../images/vanadium.jpg";
import "./gameboard.css";

class Gameboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Metals: [
        {
          "id": 1,
          "metal": "Calcium",
          "clicked": false,
          "image": Calcium
        },
        {
          "id": 2,
          "metal": "Chromium",
          "clicked": false,
          "image": Chromium
        },
        {
          "id": 3,
          "metal": "Copper",
          "clicked": "false",
          "image": Copper
        },
        {
          "id": 4,
          "metal": "Gold",
          "clicked": false,
          "image": Gold
        },
        {
          "id": 5,
          "metal": "Iridium",
          "clicked": false,
          "image": Iridium
        },
        {
          "id": 6,
          "metal": "Iron",
          "clicked": false,
          "image": Iron
        },
        {
          "id": 7,
          "metal": "Lead",
          "clicked": false,
          "image": Lead
        },
        {
          "id": 8,
          "metal": "Magnesium",
          "clicked": false,
          "image": Magnesium
        },
        {
          "id": 9,
          "metal": "Potassium",
          "clicked": false,
          "image": Potassium
        },
        {
          "id": 10,
          "metal": "Sodium",
          "clicked": false,
          "image": Sodium
        },
        {
          "id": 11,
          "metal": "Titanium",
          "clicked": false,
          "image": Titanium
        },
        {
          "id": 12,
          "metal": "Vanadium",
          "clicked": false,
          "image": Vanadium
        }
      ],
      Clicked: false
    }
    this.handleClick.bind(this);
  }

  handleClick = (id) => {
    this.randomizeArray();
    this.handleScore(id);
  }

  handleScore = (id) => {
    const {score, increment, setHighScore} = this.props
    for (const metal of this.state.Metals) {
      if (id === metal.id && metal.clicked === false) {
        metal.clicked = true;
        this.setState({
          Clicked: false
        })
        increment();
      } else if (id === metal.id && metal.clicked) {
        setHighScore();
        this.setState({
          Clicked: true
        });
        this.state.Metals.forEach(element => element.clicked = false);

      }
    }
  }


  randomize = (arr) => {
    let index = arr.length;
    let tempValue = 0;
    let randomValue = 0;
    while (index !== 0) {
      randomValue = Math.floor(Math.random() * index);
      index--;

      tempValue = arr[index];
      arr[index] = arr[randomValue];
      arr[randomValue] = tempValue;
    }
    return arr;
  }

  randomizeArray = () => {
    const randomizedArray = this.randomize(this.state.Metals);
    this.setState(
      {
        Metals: randomizedArray
      });
  }

  render() {
    return (
      <main>
        {this.state.Metals.map(Metal => (
          <Card
            key={Metal.id}
            id={Metal.id}
            metalName={Metal.metal}
            image={Metal.image}
            handleClick={this.handleClick}
          />
        ))}
      </main>
    )
  }
}

export default Gameboard;
