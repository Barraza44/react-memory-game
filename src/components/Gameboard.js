import React from "react";
import Card from "./card";

class Gameboard extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      Metals: [
        {
          "id": 1,
          "metal":"Calcium",
          "clicked": false,
          "image": "./images/calcium.jpg"
        },
        {
          "id": 2,
          "metal": "Chromium",
          "clicked": false,
          "image": "./images/chromium.jpg"
        },
        {
          "id": 3,
          "metal": "Copper",
          "clicked": "false",
          "image": "./images/copper.jpg"
        },
        {
          "id": 4,
          "metal": "Gold",
          "clicked": false,
          "image": "./images/gold.jpg"
        },
        {
          "id": 5,
          "metal": "Iridium",
          "clicked": false,
          "image": "./images/iridium.jpg"
        },
        {
          "id": 6,
          "metal": "Iron",
          "clicked": false,
          "image": "./images/iron.jpg"
        },
        {
          "id": 7,
          "metal": "Lead",
          "clicked": false,
          "image": "./images/lead.jpg"
        },
        {
          "id": 8,
          "metal": "Magnesium",
          "clicked": false,
          "image": "./images/magnesium.jpg"
        },
        {
          "id": 9,
          "metal": "Potassium",
          "clicked": false,
          "image": "./images/potassium.jpg"
        },
        {
          "id": 10,
          "metal": "Sodium",
          "clicked": false,
          "image": "./images/sodium.jpg"
        },
        {
          "id": 11,
          "metal": "Titanium",
          "clicked": false,
          "image": "./images/titanium.jpg"
        },
        {
          "id": 12,
          "metal": "Vanadium",
          "clicked": false,
          "image": "./images/vanadium.jpg"
        }
      ]
    }

  }

  render() {
    return(
      <main>
        {this.state.Metals.map(Metal => (
          <Card
            key={Metal.id}
            id={Metal.id}
            metal={Metal.metal}
            image={Metal.image}
          />
        ))}
      </main>
    )
  }
}

export default Gameboard;
