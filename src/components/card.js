import React from "react";
import { motion } from "framer-motion";

class Card extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    return(
     <motion.div whileHover={{scale: 2.5, x: 3}}>
       <img src={this.props.image} alt=""/>
       <p>{this.props.metal}</p>
     </motion.div>
    );
  }
}

export default Card;
