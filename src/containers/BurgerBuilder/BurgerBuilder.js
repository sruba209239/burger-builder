import React, { Component } from "react";
import Auxiliary from "../../hoc/Auxiliary";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";

const INGREDIENT_PRICES = {
  salad: 60,
  chicken: 72.5,
  cheese: 22.5,
  patty: 50,
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
    totalPrice: 100,
    purchasable: false
  };

  updatePurchaseState(ingredients) {
    const sum = Object.values(ingredients).reduce((sum, el) => (sum + el), 0);
    this.setState({ purchasable: sum > 0 });
  }

  dereaseCountHandler = (type) => {
    const updatedIngredients = {
      ...this.state.ingredients,
    };
    if (this.state.ingredients[type] > 0) {
      updatedIngredients[type] = this.state.ingredients[type] - 1;
      const newPrice = this.state.totalPrice - INGREDIENT_PRICES[type];
      this.setState({
        ingredients: updatedIngredients,
        totalPrice: newPrice,
      });
    }
    this.updatePurchaseState(updatedIngredients);
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
    this.updatePurchaseState(updatedIngredients);
  };

  render() {
    const checkForDisable = { ...this.state.ingredients };
    for (const key in checkForDisable) {
      checkForDisable[key] = checkForDisable[key] <= 0;
    }

    return (
      <Auxiliary>
        <Modal>Sruba</Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          dereaseCount={this.dereaseCountHandler}
          increaseCount={this.increaseCountHandler}
          checkForDisable={checkForDisable}
          price={this.state.totalPrice}
          purchasable={this.state.purchasable}
        />
      </Auxiliary>
    );
  }
}

export default BurgerBuilder;
