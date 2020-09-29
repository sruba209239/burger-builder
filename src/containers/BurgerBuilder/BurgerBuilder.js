import React, { Component } from "react";
import Auxiliary from "../../hoc/Auxiliary";
import Burger from "../../components/Burger/Burger";

class BurgerBuilder extends Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {};
  //   }

  state = {
    ingredients: {
      salad: 1,
      //   breadTop:1,
      //   breadBottom:1
      chicken: 2,
      cheese: 2,
      patty: 1,
    },
  };

  render() {
    return (
      <Auxiliary>
        <Burger ingredients={this.state.ingredients} />
        <div>Burger controls</div>
      </Auxiliary>
    );
  }
}

export default BurgerBuilder;
