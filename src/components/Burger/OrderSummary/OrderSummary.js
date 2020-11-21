import { render } from "@testing-library/react";
import React, { Component } from "react";
import Auxiliary from "../../../hoc/Auxiliary/Auxiliary";
import Button from "../../UI/Button/Button";

class OrderSummary extends Component {
  componentDidUpdate() {
    console.log("order summary did update");
  }

  render() {
    console.log("render method");
    const ingredientSummary = Object.keys(this.props.ingredients).map((el) => (
      <li key={el}>
        <span style={{ textTransform: "capitalize" }}>{el}</span> :{" "}
        {this.props.ingredients[el]}
      </li>
    ));

    return (
      <Auxiliary>
        <h3>Your Order</h3>
        <p>A delicious burger with the following ingredients</p>
        <ul>{ingredientSummary}</ul>
        <p>
          <strong>
            Total Price in INR : {this.props.totalPrice.toFixed(2)}
          </strong>
        </p>
        <p>Continue to checkout ?</p>
        <Button btnType="Danger" clicked={this.props.purchaseCancelled}>
          CANCEL
        </Button>
        <Button btnType="Success" clicked={this.props.purchaseContinued}>
          CONTINUE
        </Button>
      </Auxiliary>
    );
  }
}

export default OrderSummary;
