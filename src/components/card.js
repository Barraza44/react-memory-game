import React from "react";
import { motion } from "framer-motion";

class Card extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    return(
     <motion.div  id={`card${this.props.id}`} onClick={this.props.handleClick}>
       <img src={this.props.image} alt=""/>
       <p>{this.props.metal}</p>
     </motion.div>
    );
  }
}

export default Card;
