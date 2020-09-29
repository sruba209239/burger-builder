import React, { Component } from "react";
import Auxiliary from "../../hoc/Auxiliary";
import Burger from "../../components/Burger/Burger";

class BurgerBuilder extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }

  state = {};

  render() {
    return (
      <Auxiliary>
        <Burger />
        <div>Burger controls</div>
      </Auxiliary>
    );
  }
}

export default BurgerBuilder;
