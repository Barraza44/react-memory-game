import React from "react";
import {motion} from "framer-motion";
import "./card.css"

class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <motion.div
        id={`card${this.props.id}`}
        onClick={this.props.handleClick}
        className="card-div"
      >
        <img src={this.props.image} alt=""/>
        <p>{this.props.metal}</p>
      </motion.div>
    );
  }
}

export default Card;
