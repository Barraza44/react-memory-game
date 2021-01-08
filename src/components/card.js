import React from "react";
import { motion } from "framer-motion";
import "./card.css"

class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { id, metalName, image, handleClick } = this.props;
    return (
      <motion.div
        id={`card${id}`}
        onClick={() => handleClick(id)}
        className="card-div"
        initial={{
          opacity: 0.1,
          scale: 0.1
        }}
        animate={{
          opacity: 1,
          scale: 1
        }}
        whileHover={{
          scale: 1.4
        }}
        whileTap={{
          scale: 0.8
        }}
        layout
      >
        <img src={image} alt=""/>
        <p>{metalName}</p>
      </motion.div>
    );
  }
}

export default Card;
