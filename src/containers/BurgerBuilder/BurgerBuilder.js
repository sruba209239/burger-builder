import React, { Component } from "react";
import Auxiliary from "../../hoc/Auxiliary";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";

const INGREDIENT_PRICES = {
  salad: 0.5,
  chicken: 0.7,
  cheese: 0.4,
  patty: 1.3,
};

class BurgerBuilder extends Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {};
  //   }

  state = {
    ingredients: {
      salad: 0,
      chicken: 0,
      cheese: 0,
      patty: 0,
    },
    totalPrice: 4,
  };

  dereaseCountHandler = (type) => {
    if (this.state.ingredients[type] > 0) {
      const updatedIngredients = {
        ...this.state.ingredients,
      };
      updatedIngredients[type] = this.state.ingredients[type] - 1;
      const newPrice = this.state.totalPrice - INGREDIENT_PRICES[type];
      this.setState({
        ingredients: updatedIngredients,
        totalPrice: newPrice,
      });
    }
  };

  increaseCountHandler = (type) => {
    const updatedIngredients = {
      ...this.state.ingredients,
    };
    updatedIngredients[type] = this.state.ingredients[type] + 1;
    const newPrice = this.state.totalPrice + INGREDIENT_PRICES[type];
    this.setState({
      ingredients: updatedIngredients,
      totalPrice: newPrice,
    });
  };

  render() {
    const checkForDisable = { ...this.state.ingredients };
    for (const key in checkForDisable) {
      checkForDisable[key] = checkForDisable[key] <= 0;
    }

    return (
      <Auxiliary>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          dereaseCount={this.dereaseCountHandler}
          increaseCount={this.increaseCountHandler}
          checkForDisable={checkForDisable}
          price={this.state.totalPrice}
        />
      </Auxiliary>
    );
  }
}

export default BurgerBuilder;
