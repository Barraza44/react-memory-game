import React from "react";
import {motion} from "framer-motion";
import "./card.css"

class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { id, metal, image, handleClick } = this.props;
    return (
      <motion.div
        id={`card${id}`}
        onClick={() => handleClick(id)}
        className="card-div"
      >
        <img src={image} alt=""/>
        <p>{metal}</p>
      </motion.div>
    );
  }
}

export default Card;
