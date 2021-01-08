import React from "react";
import {motion} from "framer-motion";
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
        whileHover={{
          scale: 1.4
        }}
        whileTap={{
          scale: 0.8
        }}
      >
        <img src={image} alt=""/>
        <p>{metalName}</p>
      </motion.div>
    );
  }
}

export default Card;
